'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function AIAgentsMarketplacePage() {
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
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Marketplace Analysis
              </span>
              <span className="text-gray-400">15 min read</span>
              <span className="text-gray-400">December 10, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>The AI Agents Marketplace: The New Creator Economy</HeaderText>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              How AI agents are creating a trillion-dollar creator economy where anyone can build, deploy, and monetize intelligent agents across the Unified AI ecosystem.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By Marketplace Research Team</span>
              <div className="flex gap-2">
                <a
                  href="/downloads/ai-agents-marketplace-report.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Download Report
                </a>
                <Link href="/ai-agents" className="px-6 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                  Explore Marketplace
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="ai-agents-marketplace-overview"
          title="AI Agents Marketplace: The Future of Work"
          description="Explore the revolutionary marketplace where AI agents are bought, sold, and deployed across industries"
          type="video"
          category="marketplace"
          priority="high"
          className="rounded-2xl overflow-hidden"
        />
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-purple-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-purple max-w-none">

            <h2 className="text-2xl font-bold text-white mb-4">The Creator Economy Meets AI</h2>
            <p className="text-gray-300 mb-6">
              The AI Agents Marketplace represents the next evolution of the creator economy. Instead of creating content,
              creators are now building intelligent agents that can work 24/7, serve customers, and generate revenue autonomously.
              This shift from content creation to agent creation is fundamentally changing how value is created and distributed online.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Market Opportunity</h2>
            <p className="text-gray-300 mb-6">
              The global AI market is projected to reach $1.8 trillion by 2030, and AI agents represent the fastest-growing segment.
              Our marketplace enables anyone to participate in this growth by creating, deploying, and monetizing AI agents without
              requiring deep technical expertise.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="marketplace-growth-stats"
                title="AI Agents Marketplace Growth Statistics"
                description="Data visualization showing explosive growth in AI agent creation and deployment"
                type="image"
                category="marketplace"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Agent Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">🛠️ Utility Agents</h4>
                <p className="text-gray-300 text-sm">Task automation, data processing, workflow optimization</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">🛍️ Commerce Agents</h4>
                <p className="text-gray-300 text-sm">Sales, customer service, inventory management, pricing</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">🎨 Creative Agents</h4>
                <p className="text-gray-300 text-sm">Content creation, design, music, video production</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-purple-300 mb-2">🧠 Intelligence Agents</h4>
                <p className="text-gray-300 text-sm">Analysis, research, decision support, strategy</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Revenue Models for Creators</h2>
            <p className="text-gray-300 mb-6">
              The marketplace supports multiple revenue models, allowing creators to monetize their agents in ways that align
              with their goals and their agents' capabilities.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Monetization Options</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-purple-300">Subscription Model:</strong> Monthly/yearly access to your agents</li>
              <li><strong className="text-purple-300">Pay-per-Use:</strong> Charge based on agent interactions or tasks completed</li>
              <li><strong className="text-purple-300">Revenue Share:</strong> Percentage of value generated by your agents</li>
              <li><strong className="text-purple-300">Licensing:</strong> White-label your agents for enterprise use</li>
              <li><strong className="text-purple-300">Custom Development:</strong> Build bespoke agents for specific clients</li>
            </ul>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="agent-creator-dashboard"
                title="Agent Creator Dashboard"
                description="Interface showing how creators manage, deploy, and monetize their AI agents"
                type="image"
                category="marketplace"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Remix and Fork Culture</h2>
            <p className="text-gray-300 mb-6">
              One of the most innovative aspects of our marketplace is the ability to remix and fork existing agents.
              Creators can build upon successful agents, creating variations and improvements while sharing revenue with
              original creators. This creates a collaborative ecosystem where innovation compounds.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Quality and Curation</h2>
            <p className="text-gray-300 mb-6">
              The marketplace maintains high standards through community curation, automated testing, and performance metrics.
              Agents are rated based on effectiveness, reliability, and user satisfaction, ensuring buyers can find
              high-quality solutions for their needs.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="marketplace-curation-system"
                title="Marketplace Curation and Quality Control"
                description="How the marketplace ensures high-quality agents through community and automated systems"
                type="video"
                category="marketplace"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Getting Started as a Creator</h2>
            <p className="text-gray-300 mb-6">
              Creating and deploying agents is designed to be accessible to creators of all technical levels.
              Our no-code agent builder, comprehensive documentation, and creator support program help anyone
              get started in the AI agent economy.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Creator Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Early creators are already generating significant revenue. From customer service agents earning $10K/month
              to creative agents generating $50K+ for their creators, the marketplace is proving the viability of
              the AI agent economy.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/ai-agents" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all">
                Browse Marketplace
              </Link>
              <Link href="/ai-agents/create" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Create Agent
              </Link>
              <Link href="/ai-agents/creator-program" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Join Creator Program
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">
          <HeaderText>Related Research</HeaderText>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/ai-factory-comprehensive-business-suite" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AI Factory™ Suite</h4>
            <p className="text-gray-300 text-sm">Complete business transformation with AI</p>
          </Link>
          <Link href="/blog/agentos-operating-system" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Agent OS</h4>
            <p className="text-gray-300 text-sm">Operating system powering the agent marketplace</p>
          </Link>
          <Link href="/blog/handle-registry-specification" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Handle Registry</h4>
            <p className="text-gray-300 text-sm">Identity system enabling agent ownership</p>
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
