import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "../contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - DaniloVZR",
  description: "Portfolio Danilo Urrego",
  keywords: ["developer", "portfolio", "react", "javascript", "programming", "danilo urrego"],
  authors: [{ name: "Danilo Urrego David" }],
  openGraph: {
    title: "Portfolio - DaniloVZR",
    description: "Portfolio Danilo Urrego - Frontend Developer",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}