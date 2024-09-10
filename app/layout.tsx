import type { Metadata } from "next";
import type { Viewport } from "next";
import { Nunito, Raleway,  } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
export const metadata: Metadata = {
  title: "Highlights",
  description: "Get your daily dose blogs and info at once master place.",
  generator: "Highlights",
  applicationName: "highlights",
  referrer: "origin-when-cross-origin",
  keywords: [
    "platform",
    "blogs",
    "highlights",
    "tech",
    "products",
  ],
  authors: [
    { name: "Highlights" },
    { name: "Highlights", url: "https://www.highlights.vercel.app" },
  ],
  creator: "Highlights`s Team",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Highlights - Get your daily dose blogs and info at once master place.",
    description:
      "At Highlights, we believe in providing high quality content that meet your daily requirenments.",
    url: "https://www.highlights.vercel.app",
    siteName: "glowveda",
    images: [
      {
        url: "",
        type: "image/png",
        width: 400,
        height: 400,
        alt: "Product profile Image",
      },
      {
        url: "",
        type: "image/png",
        width: 1920,
        height: 1080,
        alt: "Product Banner Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Highlights - Get your daily dose blogs and info at once master place.",
    description:
      "At Highlights, we believe in providing high quality content that meet your daily requirenments.",
    creator: "@Highlights",
    images: {
      url: "",
      alt: "Highlights Banner Image",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${raleway.className}`}>{children}</body>
    </html>
  );
}
