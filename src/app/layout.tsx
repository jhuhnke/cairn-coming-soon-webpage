import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cairn — The Living Map of the Outdoors",
    template: "%s | Cairn",
  },
  description:
    "Real-time conditions, community observations, and trusted outdoor data.",
  metadataBase: new URL("https://cairn.example"),
  openGraph: {
    title: "Cairn — The Living Map of the Outdoors",
    description:
      "Real-time conditions, community observations, and trusted outdoor data.",
    type: "website",
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