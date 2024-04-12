import clsx from "clsx";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dera",
  description: "Frontend developer portofolio",
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
        {/* <main className="min-h-screen">
        </main>
      <Footer /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
