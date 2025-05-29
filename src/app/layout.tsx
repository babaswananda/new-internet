import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./remove-nextjs-logo.css";
import RemoveNextJSBadge from "@/components/utils/RemoveNextJSBadge";
import SupabaseAuthProvider from "@/components/providers/SupabaseAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Unified AI | The Agentic Internet Protocol",
  description: "Deploy, manage, and monetize AI agents across the decentralized web. Join the Agentic Internet with handle-based identity, vault economics, and intelligent operator infrastructure.",
  keywords: "AI agents, blockchain, decentralized web, artificial intelligence, crypto, DeFi, Web3, automation, Unified AI, Agentic Internet",
  authors: [{ name: "Unified AI Protocol" }],
  creator: "Unified AI Protocol",
  publisher: "Unified AI Protocol",
  robots: "index, follow",
  openGraph: {
    title: "Unified AI | The Agentic Internet Protocol",
    description: "Deploy, manage, and monetize AI agents across the decentralized web.",
    url: "https://unified-ai-protocol-babaswanandas-projects.vercel.app",
    siteName: "Unified AI Protocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified AI | The Agentic Internet Protocol",
    description: "Deploy, manage, and monetize AI agents across the decentralized web.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5CF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <RemoveNextJSBadge />
        <SupabaseAuthProvider>
          {children}
        </SupabaseAuthProvider>
      </body>
    </html>
  );
}
