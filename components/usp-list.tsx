import USP from "./usp";
import { useTranslations } from "next-intl";

export default function USPList() {
  const t = useTranslations();

  const uspData = t.raw("usp.items") as {
    title: string;
    description: string;
  }[];

  return (
    <section className="container mb-28">
      <h3 className="text-3xl lg:text-4xl font-semibold mb-10">
        {t("usp.title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {uspData.map((v) => (
          <USP key={v.title} title={v.title} description={v.description} />
        ))}
      </div>
    </section>
  );
}
