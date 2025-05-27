import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./remove-nextjs-logo.css";
import RemoveNextJSBadge from "@/components/utils/RemoveNextJSBadge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unified AI I/O | The New Map of the New Internet",
  description: "Unified AI is the control layer of decentralized intelligence. The protocol-grade launchpad for the agent economy.",
  keywords: "AI, Crypto, Protocol, AgentOS, Agent Dev Kit, ADK, AI Token",
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
        {children}
      </body>
    </html>
  );
}
