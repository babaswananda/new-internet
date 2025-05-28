'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import ParticleBackground from '@/components/ui/particle-background';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function IOWhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Article Header */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">
                Product Whitepaper
              </span>
              <span className="text-gray-400">14 min read</span>
              <span className="text-gray-400">February 5, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>IO: The Intelligent Operator - Your Personal AI Operating System</HeaderText>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Complete technical specification of IO - the AI agent that manages your entire digital life across all platforms and protocols.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By IO Development Team</span>
              <div className="flex gap-2">
                <a 
                  href="/downloads/io-whitepaper.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Download Whitepaper
                </a>
                <button className="px-6 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                  Share Article
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="io-demo-video"
          title="IO in Action: Your Personal AI Operating System"
          description="Watch IO manage your entire digital life - from scheduling to content creation to business automation"
          type="video"
          category="products"
          priority="high"
          className="rounded-2xl overflow-hidden"
        />
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-purple-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-purple max-w-none">
            
            <h2 className="text-2xl font-bold text-white mb-4">Executive Summary</h2>
            <p className="text-gray-300 mb-6">
              IO (Intelligent Operator) represents the next evolution in personal AI assistance. Unlike traditional chatbots or 
              simple automation tools, IO is a comprehensive AI operating system that understands your goals, preferences, and 
              workflows across all digital platforms. It doesn't just respond to commands - it proactively manages your digital life.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">The Problem: Digital Fragmentation</h2>
            <p className="text-gray-300 mb-6">
              Modern digital life is fragmented across dozens of apps, platforms, and services. We spend countless hours switching 
              between tools, managing workflows, and trying to keep everything synchronized. This fragmentation creates inefficiency, 
              stress, and missed opportunities.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="digital-fragmentation"
                title="The Digital Fragmentation Problem"
                description="Visualization of how modern users juggle dozens of disconnected digital tools and platforms"
                type="image"
                category="products"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">IO's Core Architecture</h2>
            <p className="text-gray-300 mb-6">
              IO is built on a multi-layered architecture that combines advanced AI reasoning with deep platform integrations. 
              At its core, IO maintains a persistent understanding of your digital identity, preferences, and goals.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">The Four Pillars of IO</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-pink-300 mb-2">🧠 Cognitive Layer</h4>
                <p className="text-gray-300 text-sm">Advanced reasoning and decision-making capabilities</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-pink-300 mb-2">🔗 Integration Layer</h4>
                <p className="text-gray-300 text-sm">Deep connections to all your digital platforms and services</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-pink-300 mb-2">🎯 Execution Layer</h4>
                <p className="text-gray-300 text-sm">Automated task completion and workflow orchestration</p>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-pink-300 mb-2">🛡️ Security Layer</h4>
                <p className="text-gray-300 text-sm">Privacy-first design with encrypted data handling</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Key Capabilities</h2>
            <p className="text-gray-300 mb-6">
              IO goes far beyond simple task automation. It understands context, learns from your behavior, and proactively 
              suggests optimizations to your workflows and life patterns.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Proactive Intelligence</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-pink-300">Predictive Scheduling:</strong> Automatically optimizes your calendar based on priorities and energy patterns</li>
              <li><strong className="text-pink-300">Content Orchestration:</strong> Manages your content pipeline across all platforms</li>
              <li><strong className="text-pink-300">Communication Management:</strong> Prioritizes and drafts responses across email, social, and messaging</li>
              <li><strong className="text-pink-300">Financial Optimization:</strong> Tracks expenses, identifies savings opportunities, manages investments</li>
            </ul>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="io-dashboard"
                title="IO Command Dashboard"
                description="Clean, intuitive interface showing IO managing multiple aspects of your digital life simultaneously"
                type="image"
                category="products"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Technical Implementation</h2>
            <p className="text-gray-300 mb-6">
              IO leverages cutting-edge AI models, including large language models, computer vision, and specialized reasoning 
              engines. The system is designed for privacy-first operation, with most processing happening locally or in 
              encrypted cloud environments.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Privacy & Security</h3>
            <p className="text-gray-300 mb-6">
              Your data never leaves your control. IO uses advanced encryption, federated learning, and zero-knowledge 
              architectures to ensure your personal information remains private while still enabling powerful AI capabilities.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Use Cases & Applications</h2>
            <p className="text-gray-300 mb-6">
              IO adapts to your specific needs and workflows. Whether you're a creator, entrepreneur, developer, or professional, 
              IO learns your patterns and optimizes accordingly.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="io-use-cases"
                title="IO Use Cases Across Industries"
                description="Real-world examples of IO helping creators, entrepreneurs, and professionals optimize their workflows"
                type="video"
                category="products"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Future of Personal AI</h2>
            <p className="text-gray-300 mb-6">
              IO represents just the beginning of truly intelligent personal AI systems. As the technology evolves, IO will 
              become even more proactive, predictive, and integrated into every aspect of digital life.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/io" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg transition-all">
                Get IO Now
              </Link>
              <Link href="/io/chat" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Try IO Chat
              </Link>
              <Link href="/claim" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Claim Your Handle
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
          <Link href="/blog/agentchat-superapp-thesis" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AgentChat Thesis</h4>
            <p className="text-gray-300 text-sm">The superapp for AI-native communication</p>
          </Link>
          <Link href="/blog/alpharouter-intelligent-model-routing" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AlphaRouter</h4>
            <p className="text-gray-300 text-sm">Intelligent model routing powering IO</p>
          </Link>
          <Link href="/blog/handle-registry-specification" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Handle Registry</h4>
            <p className="text-gray-300 text-sm">Identity layer enabling IO's capabilities</p>
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
    </div>
  );
}
