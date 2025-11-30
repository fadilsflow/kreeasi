import type { Metadata } from "next";
import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google";

import "./globals.css";
import { HeroHeader } from "@/components/hero-header";
import { ThemeProvider } from "@/components/theme-provider";
import FooterSection from "@/components/footer-section";

const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kreeasi",
  description:
    "Providing Web, iOS, Android Application Design & Development services proand quality according to your idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          <main className="px-2 max-w-screen overflow-x-hidden">
            {children}
          </main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
