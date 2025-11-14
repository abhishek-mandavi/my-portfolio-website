import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Abhishek Mandavi | Portfolio",
  description: "Software developer specializing in modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className}  antialiased bg-black text-yellow-500`}
      >
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
