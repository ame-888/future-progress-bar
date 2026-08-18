import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Progress Bar",
  description: "A dream of what comes next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
