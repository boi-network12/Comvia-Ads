// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Comvia Ads - Advertise Everywhere From One Place",
    template: "%s | Comvia Ads",
  },
  description:
    "Run ads on Google, Meta, Instagram, and TikTok from one dashboard. AI-powered optimization automatically allocates your budget for maximum ROI.",
  keywords: [
    "advertising platform",
    "multi-platform ads",
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "Instagram Ads",
    "AI advertising",
    "budget optimization",
    "Comvia Ads",
    "Nigerian businesses",
    "digital marketing",
  ],
  applicationName: "Comvia Ads",
  authors: [{ name: "Comvia" }],
  creator: "Comvia",
  publisher: "Comvia",
  metadataBase: new URL("https://comvia.app"),
  openGraph: {
    title: "Comvia Ads - Advertise Everywhere From One Place",
    description:
      "Run ads on Google, Meta, Instagram, and TikTok from one dashboard. AI-powered optimization for maximum ROI.",
    url: "https://comvia.app/ads",
    siteName: "Comvia Ads",
    type: "website",
    images: [
      {
        url: "/og-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Comvia Ads - Multi-Platform Advertising Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comvia Ads - Advertise Everywhere From One Place",
    description:
      "Run ads on Google, Meta, Instagram, and TikTok from one dashboard. AI-powered optimization for maximum ROI.",
    images: ["/og-ads.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}