import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evernaut.",
  description: "Minimalist portfolio",
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
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
