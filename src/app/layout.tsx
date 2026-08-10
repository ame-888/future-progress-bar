import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DigitalClock } from "@/components/digital-clock";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL, adsenseClient, adsenseConfigured } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Future Progress Bar", template: "%s | Future Progress Bar" },
  description: "A living quantitative map of humanity's technological progress, from the Stone Age toward an Antimatter Age.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Future Progress Bar", title: "Future Progress Bar", description: "An interactive atlas of humanity's technological future.", url: "/" },
  ...(adsenseConfigured && adsenseClient ? { other: { "google-adsense-account": adsenseClient } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DigitalClock />
          <SiteHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
