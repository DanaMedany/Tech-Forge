import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import DarkVeil from "@/components/DarkVeil";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-Grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechForge",
  description:
    "Unite developers, designers, and tech enthusiasts through virtual events that matter. Build connections, share knowledge, and grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <div className="absolute inset-0 top-0 z-[-1] min-h-screen ">
          <DarkVeil />
        </div>

        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
