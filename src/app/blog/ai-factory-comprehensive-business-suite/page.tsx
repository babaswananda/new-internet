'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function AIFactoryBlogPage() {
  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="orange" speed="slow" depth={true} interactive={true} />
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
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">
                Product Deep Dive
              </span>
              <span className="text-gray-400">12 min read</span>
              <span className="text-gray-400">December 15, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>AI Factory™: Your Complete Business Transformation Suite</HeaderText>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Introducing AI Factory™ - the comprehensive suite of 16+ AI tools designed to automate operations, enhance creativity, and drive unprecedented business growth.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By AI Factory Team</span>
              <div className="flex gap-2">
                <a
                  href="/downloads/ai-factory-suite-guide.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Download Suite Guide
                </a>
                <Link href="/ai-factory" className="px-6 py-2 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all">
                  Try AI Factory™
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="ai-factory-demo"
          title="AI Factory™ Complete Business Suite Demo"
          description="See how AI Factory™ transforms entire business operations with 16+ integrated AI tools"
          type="video"
          category="products"
          priority="high"
          className="rounded-2xl overflow-hidden"
        />
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-orange max-w-none">

            <h2 className="text-2xl font-bold text-white mb-4">The Business Transformation Revolution</h2>
            <p className="text-gray-300 mb-6">
              AI Factory™ represents the most comprehensive business AI suite ever created. Instead of juggling dozens of separate tools,
              businesses can now access everything they need - from AI agents to content creation to workflow automation - in one unified platform.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Complete Tool Arsenal</h2>
            <p className="text-gray-300 mb-6">
              AI Factory™ includes 16+ specialized AI tools, each designed to handle specific business functions while working seamlessly together.
              This isn't just a collection of tools - it's an integrated ecosystem that learns and adapts to your business needs.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="ai-factory-tools-overview"
                title="AI Factory™ Tools Overview"
                description="Visual breakdown of all 16+ AI tools included in the comprehensive business suite"
                type="image"
                category="products"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Core Tool Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">🤖 AI Agents & Avatars</h4>
                <p className="text-gray-300 text-sm">Deploy intelligent agents for customer service, data analysis, and task automation</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">💻 Development Tools</h4>
                <p className="text-gray-300 text-sm">VibeCoder, AI Developer, and comprehensive coding assistance</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">📞 Communication Suite</h4>
                <p className="text-gray-300 text-sm">AI Call Center, Text Me, Video Chat, and Webinar tools</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">🎨 Creative & Content</h4>
                <p className="text-gray-300 text-sm">AI Music Generator, AI Voices, Templates, and content creation</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Pricing That Scales With You</h2>
            <p className="text-gray-300 mb-6">
              AI Factory™ offers flexible pricing from $49/month for startups to enterprise solutions. Each tier provides access to different
              tool combinations, ensuring businesses only pay for what they need while having room to grow.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Real-World Impact</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-orange-300">80% Reduction</strong> in manual administrative tasks</li>
              <li><strong className="text-orange-300">3x Faster</strong> content creation and deployment</li>
              <li><strong className="text-orange-300">50% Cost Savings</strong> compared to separate tool subscriptions</li>
              <li><strong className="text-orange-300">24/7 Operations</strong> with AI agent automation</li>
            </ul>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="ai-factory-case-studies"
                title="AI Factory™ Success Stories"
                description="Real businesses sharing their transformation results using AI Factory™"
                type="video"
                category="products"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Expert Consulting Included</h2>
            <p className="text-gray-300 mb-6">
              Beyond the tools, AI Factory™ includes expert consulting to help businesses implement AI strategies effectively.
              Our team provides AI readiness assessments, custom solution development, and ongoing optimization support.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">The Future of Business Operations</h2>
            <p className="text-gray-300 mb-6">
              AI Factory™ isn't just about current capabilities - it's about preparing businesses for an AI-native future.
              As new AI technologies emerge, they're automatically integrated into the platform, ensuring your business stays ahead.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/ai-factory" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all">
                Start Free Trial
              </Link>
              <Link href="/ai-factory#pricing" className="px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all">
                View Pricing
              </Link>
              <Link href="/book-demo" className="px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all">
                Book Demo
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
          <Link href="/blog/ai-agents-marketplace-economy" className="bg-black/20 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AI Agents Marketplace</h4>
            <p className="text-gray-300 text-sm">The new creator economy for AI agents</p>
          </Link>
          <Link href="/blog/alpharouter-intelligent-model-routing" className="bg-black/20 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AlphaRouter</h4>
            <p className="text-gray-300 text-sm">Intelligent model routing powering AI Factory™</p>
          </Link>
          <Link href="/blog/vibecoder-ai-development-platform" className="bg-black/20 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">VibeCoder Platform</h4>
            <p className="text-gray-300 text-sm">AI-powered development within AI Factory™</p>
          </Link>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all"
        >
          ← Back to Research Library
        </Link>
      </div>
    </MainLayout>
  );
}
