import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import React from "react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className={`${nunito.variable} flex min-h-full flex-col`}>
        <main className={"min-h-screen"}>{children}</main>
      </body>
    </html>
  );
}
