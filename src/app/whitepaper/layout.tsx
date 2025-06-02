import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../remove-nextjs-logo.css";
import RemoveNextJSBadge from "@/components/utils/RemoveNextJSBadge";

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
  title: "Unified AI Protocol Whitepaper | The Sovereign Intelligence Stack",
  description: "Read the complete Unified AI Protocol whitepaper. Discover the future of autonomous AI agents, decentralized identity systems, and the Agentic Internet infrastructure.",
  keywords: "AI whitepaper, Unified AI Protocol, autonomous AI agents, blockchain, decentralized web, artificial intelligence, crypto, DeFi, Web3, automation, Agentic Internet, ION protocol, AgentOS, Vault Economics",
  authors: [{ name: "Unified AI Protocol" }],
  creator: "Unified AI Protocol",
  publisher: "Unified AI Protocol",
  robots: "index, follow",
  openGraph: {
    title: "Unified AI Protocol Whitepaper | The Sovereign Intelligence Stack",
    description: "Read the complete technical documentation for the future of autonomous AI agents and decentralized intelligence.",
    url: "https://unified-ai-protocol-whitepaper-1ahnjuv2i-4commas.vercel.app/whitepaper",
    siteName: "Unified AI Protocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified AI Protocol Whitepaper | The Sovereign Intelligence Stack",
    description: "Read the complete technical documentation for the future of autonomous AI agents and decentralized intelligence.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22c55e",
};

export default function WhitepaperLayout({
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
        {/* No Supabase provider - whitepaper is public */}
        {children}
      </body>
    </html>
  );
}
