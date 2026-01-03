import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-fallback",
});

const matter = localFont({
  src: "../../public/assets/fonts/MatterCollectionVF-TRIAL.woff2",
  variable: "--font-sans",
  weight: "100 900",
});

const serrif = localFont({
  src: "../../public/assets/fonts/SerrifCollectionVF-TRIAL.woff2",
  variable: "--font-serif",
  weight: "100 900",
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
        url: '/assets/images/opengraph-image.jpg',
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
    images: ['/assets/images/opengraph-image.jpg'],
  },
};

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${matter.variable} ${serrif.variable} ${sourceSerif.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 pt-16 w-full flex flex-col">
            {children}
          </main>
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
