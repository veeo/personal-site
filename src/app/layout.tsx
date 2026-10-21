import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "500"],
  variable: "--font-inter",
  display: "swap",
});

const amstelvar = localFont({
  src: "../fonts/Amstelvar-Roman.ttf",
  variable: "--font-amstelvar",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VeeO",
  description:
    "Designing software in Atlanta. Currently at Cash App focused on Neighborhoods.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${amstelvar.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
