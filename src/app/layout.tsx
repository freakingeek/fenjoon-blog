import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirSans = Vazirmatn({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "فنجون",
  description: "داستان‌هایی به کوتاهی یک فنجان قهوه ☕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR">
      <body className={vazirSans.variable}>{children}</body>
    </html>
  );
}
