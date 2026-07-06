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
  title: "PikaBooth - Capture the Perfect Moment",
  description: "PikaBooth is a modern, open-source photobooth experience. Choose between a classic studio session or a romantic couple date mode.",
  keywords: ["photobooth", "photo booth", "pika booth", "pikabooth", "open source photobooth", "date mode photobooth", "studio photobooth"],
  openGraph: {
    title: "PikaBooth - Capture the Perfect Moment",
    description: "PikaBooth is a modern, open-source photobooth experience. Choose between a classic studio session or a romantic couple date mode.",
    url: "https://pikabooth.web.id",
    siteName: "PikaBooth",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PikaBooth - Capture the Perfect Moment",
    description: "PikaBooth is a modern, open-source photobooth experience. Choose between a classic studio session or a romantic couple date mode.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
