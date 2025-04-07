import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "فنجون؛ یک فنجان خواندنی",
    template: "فنجون",
  },
  description: "داستان‌هایی به کوتاهی یک فنجون قهوه ☕",
  metadataBase: new URL("/", "https://fnjo.ir"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "فنجون",
    startupImage: "/manifest-assets/screenshots/apple-splash-2048-2732.jpg",
  },
  formatDetection: {
    telephone: false,
  },
  icons: [
    {
      url: "/manifest-assets/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/manifest-assets/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  openGraph: {
    title: "فنجون؛ یک فنجان خواندنی",
    description: "داستان‌هایی به کوتاهی یک فنجون قهوه ☕",
    url: "/",
    siteName: "فنجون",
    images: [
      {
        url: "/manifest-assets/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "فنجون",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
