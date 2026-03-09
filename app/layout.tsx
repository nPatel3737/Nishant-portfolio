import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishant Patel | Human Factors & Aviation Safety Portfolio",
  description:
    "Portfolio of Nishant Patel, focused on human factors, aviation safety, human-automation interaction, future aviation systems, and safety-led engineering thinking.",
  openGraph: {
    title: "Nishant Patel | Human Factors & Aviation Safety Portfolio",
    description:
      "Projects, articles, and research across aviation safety, human factors, AI, BVLOS, and future-flight systems.",
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
      <body>{children}</body>
    </html>
  );
}