import type { Metadata } from "next";
import './globals.css'
import { Inter } from 'next/font/google'
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reto Técnico",
  description: "Answer by Bruno Gonzales",
};

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <header>

        </header>
        {children}
      </body>
    </html>
  );
}