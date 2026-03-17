import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import CursorGlow from "./components/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepcurrent Tech | AI Automations",
  description: "Next-generation AI automation agency accelerating businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
