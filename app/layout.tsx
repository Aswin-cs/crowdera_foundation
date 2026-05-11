import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Crowdera Foundation - Home",
  description: "Democratizing Philanthropy. Empowering NGOs.",
};

import SidebarDemo from "@/components/sidebar-demo";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

import GlobalBackground from "@/components/GlobalBackground";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${merriweather.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="flex min-h-screen bg-background text-on-background font-body text-body-md relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalBackground />
          <div className="relative z-10 w-full flex">
            <ScrollObserver />
            <SidebarDemo>
              {children}
              <Footer />
            </SidebarDemo>
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
