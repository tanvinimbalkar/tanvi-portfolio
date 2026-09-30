import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanvi Ashok Nimbalkar - Data Science Portfolio",
  description: "Professional portfolio of Tanvi Nimbalkar, Masters student in Data Science at University of Colorado Boulder",
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

