import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dera | Frontend Developer",
  description: "Transforming Designs into Digital Delights.",
  creator: "Dera",
  keywords: [
    "frontend",
    "developer",
    "frontend developer",
    "dera",
    "frontend freelance",
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
    title: "Dera | Frontend Developer",
    description: "Transforming Designs into Digital Delights.",
    type: "website",
    url: "https://dera.dev",
    images: ["/background/og.avif"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-[#000000] ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
