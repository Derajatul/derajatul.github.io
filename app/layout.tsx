import clsx from "clsx";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Metadata } from "next";

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
  category: "Web Development",
  robots: "index, follow",
  openGraph: {
    title: "Dera | Frontend Developer",
    description: "Transforming Designs into Digital Delights.",
    type: "website",
    url: "https://dera.dev",
    images: ["/background/og.avif"],
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
      <body className={clsx("bg-[#000000]", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
