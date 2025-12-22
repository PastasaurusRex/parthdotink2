import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://parth.ink'),
  title: "Hi, I'm Parth!",
  description: "And this is my website.",
  openGraph: {
    title: "Hi, I'm Parth!",
    description: "And this is my website.",
    url: 'https://parth.ink',
    siteName: 'parth.ink',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: "Hi, I'm Parth!",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hi, I'm Parth!",
    description: "And this is my website.",
    images: ['/opengraph-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className={`${sourceSerif.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-16 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
