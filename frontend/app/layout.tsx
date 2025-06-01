import type { Metadata } from "next";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { getConfig } from "../wagmiConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OhMyYield - Juice Your Yields!",
  description: "Find the best yields for your crypto assets",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = getConfig();
  const headersList = await headers();
  const initialState = cookieToInitialState(config, headersList.get("cookie"));

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-orange-500 flex flex-col">
          <Providers initialState={initialState}>
            <Header />
            <main className="container mx-auto flex-1 py-6">{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
