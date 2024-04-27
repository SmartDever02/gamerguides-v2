import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '@/features/layout/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamer Guides®: Video Game Walkthroughs, Reviews, Videos & Maps",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
