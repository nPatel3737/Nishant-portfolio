import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Nishant Patel | Human Factors & Aviation Safety Portfolio",
  description:
    "Aerospace engineer specialising in human factors, aviation safety, risk assessment, and future aviation systems. MSc from Cranfield University.",
  keywords: [
    "human factors",
    "aviation safety",
    "safety engineering",
    "MCAS",
    "single pilot operations",
    "Cranfield University",
    "Nishant Patel",
  ],
  openGraph: {
    title: "Nishant Patel | Human Factors & Aviation Safety",
    description:
      "Aerospace engineer specialising in human factors, aviation safety, and future aviation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} font-sans bg-[#0a0e17] text-[#e2e4e9] antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}