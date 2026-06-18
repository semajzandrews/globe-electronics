import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const body = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globe-electronics.vercel.app"),
  title: "Globe Electronics — Phone & electronics repair on Main St, Orange NJ",
  description:
    "Since 2009, Globe Electronics has sold and brought back devices on Main Street in the City of Orange. Unlocked phones and tablets, TVs, stereos, Bluetooth speakers, Blu-ray. Repairs done at the bench.",
  openGraph: {
    title: "Globe Electronics · Orange NJ",
    description:
      "We open it up and bring it back. Phone, tablet and home-electronics repair on Main Street since 2009.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${body.variable} antialiased`}
    >
      <body className="bg-bench text-bone min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
