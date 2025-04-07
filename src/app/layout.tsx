import "./globals.css";
import Providers from "@/providers";
import type { Metadata } from "next";

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
    <html dir="rtl" lang="fa-IR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
