import "./globals.css";
import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: "Smart Launch",
  description: "Launch, manage & scale your brand globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use BOTH fonts (Inter default, Grotesk optional via var) */}
      <body className={`${inter.variable} ${schibsted.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
