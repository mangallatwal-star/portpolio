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
  title: "Mangal Singh Latwal",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/mine.jpg",
    apple: "/mine.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body
        className="min-h-full flex flex-col 
        bg-[var(--background)] text-[var(--foreground)] 
        transition-colors duration-300"
      >
        {children}
      </body>
    </html>
  );
}