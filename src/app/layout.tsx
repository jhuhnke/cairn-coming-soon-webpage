import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://cairn.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Cairn | The Living Map of the Outdoors",
    template: "%s | Cairn",
  },

  description:
    "Real-time trail conditions, route intelligence, community observations, and outdoor maps. Launching soon.",

  keywords: [
    "outdoor maps",
    "trail conditions",
    "hiking",
    "cycling",
    "skiing",
    "running",
    "camping",
    "fishing",
    "trail reports",
    "route planning",
    "outdoor app",
    "MapLibre",
    "Utah hiking",
    "backcountry",
  ],

  authors: [
    {
      name: "Cairn",
    },
  ],

  creator: "Cairn",

  category: "Outdoors",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cairn | The Living Map of the Outdoors",

    description:
      "Real-time trail conditions, route intelligence, community observations, and outdoor maps.",

    url: SITE_URL,

    siteName: "Cairn",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cairn",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cairn",

    description:
      "The Living Map of the Outdoors.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}