import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import PageLoader from "@/components/animations/page-loader";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Africa's Blockchain Club",
  description: "Building Africas Blockchain Future Join our community of passionate developers and innovators shaping the decentralized web across Africa.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        <PageLoader />
        {children}
        <Footer />
      </body>
    </html>
  );
}