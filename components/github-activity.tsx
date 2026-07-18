import {
  ArrowUpRight,
  BookOpen,
  GitCommitHorizontal,
  GitFork,
  Github,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

const GITHUB_USERNAME = "Derajatul";
const GITHUB_API = "https://api.github.com";
const FEATURED_REPOSITORIES = [
  "csr-router-js",
  "nutri-snap",
  "backend-projects-roadmap.sh",
];

type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
};

type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
};

type GitHubEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    action?: string;
    ref_type?: string;
    commits?: unknown[];
  };
};

async function githubFetch<T>(path: string): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_API}${path}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getGitHubData() {
  try {
    const [profile, repositories, events] = await Promise.all([
      githubFetch<GitHubProfile>(`/users/${GITHUB_USERNAME}`),
      githubFetch<GitHubRepository[]>(
        `/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`,
      ),
      githubFetch<GitHubEvent[]>(
        `/users/${GITHUB_USERNAME}/events/public?per_page=30`,
      ),
    ]);

    return { profile, repositories, events };
  } catch {
    return null;
  }
}

function eventLabel(
  event: GitHubEvent,
  t: Awaited<ReturnType<typeof getTranslations>>,
) {
  switch (event.type) {
    case "PushEvent":
      return t("events.push", { count: event.payload.commits?.length ?? 1 });
    case "PullRequestEvent":
      return t("events.pullRequest", {
        action: event.payload.action ?? "updated",
      });
    case "IssuesEvent":
      return t("events.issue", { action: event.payload.action ?? "updated" });
    case "CreateEvent":
      return t("events.create", {
        type: event.payload.ref_type ?? "repository",
      });
    case "WatchEvent":
      return t("events.star");
    case "ForkEvent":
      return t("events.fork");
    default:
      return t("events.update");
  }
}

export default async function GitHubActivity() {
  const [data, t, locale] = await Promise.all([
    getGitHubData(),
    getTranslations("github"),
    getLocale(),
  ]);

  if (!data) {
    return (
      <section id="github" className="container mx-auto mb-28">
        <div className="glass flex flex-col items-start gap-5 p-6 md:p-8">
          <Github className="size-9" aria-hidden="true" />
          <div>
            <h2 className="text-2xl font-semibold">{t("unavailableTitle")}</h2>
            <p className="mt-2 text-neutral-400">
              {t("unavailableDescription")}
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-pink-300 hover:text-pink-200"
          >
            {t("viewProfile")} <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    );
  }

  const ownedRepositories = data.repositories.filter(
    (repository) => !repository.fork && !repository.archived,
  );
  const repositories = FEATURED_REPOSITORIES.map((name) =>
    data.repositories.find(
      (repository) => repository.name.toLowerCase() === name.toLowerCase(),
    ),
  ).filter((repository): repository is GitHubRepository => Boolean(repository));
  const totalStars = ownedRepositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0,
  );
  const languages = Object.entries(
    ownedRepositories.reduce<Record<string, number>>((result, repository) => {
      if (repository.language) {
        result[repository.language] = (result[repository.language] ?? 0) + 1;
      }
      return result;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([language]) => language);
  const events = data.events.slice(0, 5);
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const stats = [
    {
      label: t("stats.repositories"),
      value: data.profile.public_repos,
      icon: BookOpen,
    },
    { label: t("stats.stars"), value: totalStars, icon: Star },
    { label: t("stats.followers"), value: data.profile.followers, icon: Users },
  ];

  return (
    <section id="github" className="container mx-auto mb-28 scroll-mt-28">
      <header className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
          {t("badge")}
        </p>
        <h2 className="mt-2 text-4xl font-bold lg:text-5xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-neutral-400">{t("subtitle")}</p>
      </header>

      <div className="glass mb-6 grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex min-w-0 items-center gap-5">
          <img
            src={data.profile.avatar_url}
            alt={data.profile.name ?? data.profile.login}
            width={80}
            height={80}
            className="size-16 rounded-full border border-white/15 object-cover md:size-20"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="truncate text-xl font-semibold md:text-2xl">
                {data.profile.name ?? data.profile.login}
              </h3>
              <span className="text-neutral-500">@{data.profile.login}</span>
            </div>
            {data.profile.bio ? (
              <p className="mt-2 max-w-xl text-sm text-neutral-300 md:text-base">
                {data.profile.bio}
              </p>
            ) : null}
            {data.profile.location ? (
              <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
                <MapPin className="size-4" aria-hidden="true" />
                {data.profile.location}
              </p>
            ) : null}
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-3">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-black/25 p-4 text-center"
            >
              <dd className="text-xl font-semibold">{value}</dd>
              <dt className="mt-1 text-xs text-neutral-500">{label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">{t("recentActivity")}</h3>
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          </div>
          {events.length ? (
            <ol className="space-y-5">
              {events.map((event) => (
                <li key={event.id} className="flex gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <GitCommitHorizontal
                      className="size-4 text-pink-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-neutral-300">
                      {eventLabel(event, t)}{" "}
                      <a
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-white hover:text-pink-300"
                      >
                        {event.repo.name.replace(`${GITHUB_USERNAME}/`, "")}
                      </a>
                    </p>
                    <time
                      className="mt-1 block text-xs text-neutral-500"
                      dateTime={event.created_at}
                    >
                      {dateFormatter.format(new Date(event.created_at))}
                    </time>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-neutral-500">{t("noActivity")}</p>
          )}
        </div>

        <div className="glass p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">
              {t("featuredRepositories")}
            </h3>
            {languages.length ? (
              <ul
                className="flex flex-wrap gap-2"
                aria-label={t("topLanguages")}
              >
                {languages.map((language) => (
                  <li
                    key={language}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="space-y-3">
            {repositories.map((repository) => (
              <a
                key={repository.id}
                href={repository.html_url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-xl border border-white/10 bg-black/25 p-4 transition-colors hover:border-pink-300/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="truncate font-semibold group-hover:text-pink-300">
                      {repository.name}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
                      {repository.description ?? t("noDescription")}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-neutral-500 transition-colors group-hover:text-pink-300" />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                  {repository.language ? (
                    <span>{repository.language}</span>
                  ) : null}
                  <span className="flex items-center gap-1">
                    <Star className="size-3.5" /> {repository.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="size-3.5" /> {repository.forks_count}
                  </span>
                  <span>
                    {t("updated", {
                      date: dateFormatter.format(
                        new Date(repository.pushed_at),
                      ),
                    })}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <a
            href={data.profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pink-300 hover:text-pink-200"
          >
            <Github className="size-4" /> {t("viewProfile")}{" "}
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
