'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';

export default function IntroducingUnifiedAIPage() {
  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Article Header */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Protocol Education
              </span>
              <span className="text-gray-400">8 min read</span>
              <span className="text-gray-400">January 15, 2024</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>Introducing the Unified AI Protocol – Solving AI's Trust Gap</HeaderText>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              An educational overview of how Unified AI combines AI services with decentralized identity to empower users and democratize access to advanced AI.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By Unified AI Team</span>
              <div className="flex gap-2">
                <a
                  href="/downloads/unified-ai-whitepaper.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Download PDF
                </a>
                <button className="px-6 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                  Share Article
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-purple-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-purple max-w-none">

            <h2 className="text-2xl font-bold text-white mb-4">The Problem: AI's Trust Gap</h2>
            <p className="text-gray-300 mb-6">
              Today's AI landscape is fragmented and controlled by a handful of tech giants. Users have no control over their data,
              no unified identity across AI services, and no way to truly own their AI interactions. This creates a fundamental trust gap
              that limits AI's potential to serve humanity.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">The Solution: Unified AI Protocol</h2>
            <p className="text-gray-300 mb-6">
              Unified AI Protocol solves this by creating the missing infrastructure layer that unifies AI services with decentralized identity.
              Think of it as the "internet protocol for AI" - enabling seamless, secure, and user-controlled interactions across any AI service.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Core Components</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-purple-300">Handle Registry:</strong> Your universal AI identity across all services</li>
              <li><strong className="text-purple-300">AI Service Layer:</strong> Unified access to any AI model or service</li>
              <li><strong className="text-purple-300">Token Economy:</strong> Incentives for providers and rewards for users</li>
              <li><strong className="text-purple-300">Vault System:</strong> Secure storage and control of your AI data</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Real-World Example: AI Assistant Marketplace</h2>
            <p className="text-gray-300 mb-6">
              Imagine an AI assistant marketplace where your unified ID carries your preferences securely across all services.
              You could seamlessly switch between different AI models, maintain conversation history, and earn tokens for contributing
              valuable data - all while maintaining complete control over your digital identity.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Why This Matters Now</h2>
            <p className="text-gray-300 mb-6">
              As AI becomes more central to our daily lives, the need for user-controlled, interoperable AI infrastructure becomes critical.
              Unified AI Protocol provides the foundation for an AI-native internet where users, not corporations, control their AI destiny.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Three Core Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">Open AI Access</h4>
                <p className="text-gray-300 text-sm">Democratizing advanced AI through unified infrastructure</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">Decentralized Identity</h4>
                <p className="text-gray-300 text-sm">User-controlled identity and security across all AI services</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">Community Incentives</h4>
                <p className="text-gray-300 text-sm">Token economy rewarding users and providers</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-6">
              Ready to be part of the AI-native internet? Start by claiming your handle, exploring our developer documentation,
              or joining our community to help shape the future of decentralized AI.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/claim" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all">
                Claim Your Handle
              </Link>
              <Link href="/learn-aimademerich" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Protocol Academy
              </Link>
              <Link href="/handle-registry" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Technical Docs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">
          <HeaderText>Continue Reading</HeaderText>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/under-the-hood-tech-behind-unified-ai" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Technical Deep Dive</h4>
            <p className="text-gray-300 text-sm">Explore the architecture behind Unified AI Protocol</p>
          </Link>
          <Link href="/blog/tokenomics-deep-dive" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Tokenomics</h4>
            <p className="text-gray-300 text-sm">Understanding the three-token economy</p>
          </Link>
          <Link href="/blog/competitive-analysis-ai-blockchain" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Market Analysis</h4>
            <p className="text-gray-300 text-sm">How Unified AI compares to competitors</p>
          </Link>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all"
        >
          ← Back to Research Library
        </Link>
      </div>
    </MainLayout>
  );
}
