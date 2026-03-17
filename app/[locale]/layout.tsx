import "../globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dera | Solo Frontend Partner",
  description: "I help founders, agencies, and small teams turn their ideas into fast, reliable Next.js sites that look great and feel even better to use.",
  creator: "Dera",
  keywords: [
    "frontend",
    "developer",
    "nextjs",
    "react",
    "tailwindcss",
    "dera",
    "agency partner",
    "solo partner",
    "web developer indonesia",
  ],
  twitter: {
    card: "summary_large_image",
    site: "https://dera.dev",
    creator: "@Deraj23",
  },
  category: "Web Development",
  robots: "index, follow",
  metadataBase: new URL("https://dera.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Dera | Solo Frontend Partner",
    description: "Build polished websites that help your business grow. Next.js specialist serving founders and agencies.",
    type: "website",
    url: "https://dera.dev",
    images: ["/og/og-image.png"],
    siteName: "Dera",
    emails: "derajatul@gmail.com",
    countryName: "Indonesia",
    locale: "id_ID",
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`bg-[#000000] ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
