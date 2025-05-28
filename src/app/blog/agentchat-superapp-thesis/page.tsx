'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import ParticleBackground from '@/components/ui/particle-background';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function AgentChatThesisPage() {
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
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                Product Thesis
              </span>
              <span className="text-gray-400">10 min read</span>
              <span className="text-gray-400">January 20, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>AgentChat: The Superapp Thesis for AI-Native Communication</HeaderText>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Why AgentChat represents the future of human-AI interaction - combining chat, agents, and protocols into one unified interface.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By Product Team</span>
              <div className="flex gap-2">
                <a 
                  href="/downloads/agentchat-thesis.pdf"
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

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="agentchat-demo"
          title="AgentChat Demo: The Future of AI Communication"
          description="See AgentChat in action - seamless AI agent interaction, protocol integration, and superapp functionality"
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
            
            <h2 className="text-2xl font-bold text-white mb-4">The Superapp Moment for AI</h2>
            <p className="text-gray-300 mb-6">
              We're at the iPhone moment for AI interfaces. Just as the smartphone consolidated multiple devices into one, 
              AgentChat consolidates the entire AI experience into a single, powerful interface. This isn't just another chat app - 
              it's the operating system for human-AI collaboration.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Why Chat is the Universal Interface</h2>
            <p className="text-gray-300 mb-6">
              Chat has become the universal language of digital interaction. From customer service to team collaboration, 
              from social media to AI assistants - chat is how humans naturally communicate with both people and machines. 
              AgentChat leverages this familiarity while adding the power of AI agents and protocol integration.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Core Principles</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-blue-300">Conversational First:</strong> Every interaction starts with natural language</li>
              <li><strong className="text-blue-300">Agent Native:</strong> AI agents are first-class citizens, not add-ons</li>
              <li><strong className="text-blue-300">Protocol Aware:</strong> Seamless integration with Unified AI protocols</li>
              <li><strong className="text-blue-300">Context Persistent:</strong> Your conversation history travels with you</li>
            </ul>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="agentchat-interface"
                title="AgentChat Interface Design"
                description="Clean, intuitive interface that makes AI agent interaction feel natural and powerful"
                type="image"
                category="products"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Agent Economy Integration</h2>
            <p className="text-gray-300 mb-6">
              AgentChat isn't just a chat interface - it's the gateway to the entire agent economy. Users can discover, 
              deploy, and interact with AI agents directly through chat. Whether you need a coding assistant, a creative 
              collaborator, or a business advisor, AgentChat connects you instantly.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-300 mb-2">Multi-Agent Orchestration</h4>
                <p className="text-gray-300 text-sm">Coordinate multiple AI agents in a single conversation</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-300 mb-2">Protocol Integration</h4>
                <p className="text-gray-300 text-sm">Native support for .TextMe, .VideoChat, and other protocols</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-300 mb-2">Handle-Based Identity</h4>
                <p className="text-gray-300 text-sm">Your identity and preferences persist across all interactions</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-300 mb-2">Smart Routing</h4>
                <p className="text-gray-300 text-sm">AlphaRouter ensures optimal model selection for every task</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Technical Architecture</h2>
            <p className="text-gray-300 mb-6">
              AgentChat is built on a microservices architecture that scales infinitely. Each component - from message routing 
              to agent orchestration to protocol integration - is designed for maximum performance and reliability.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="agentchat-architecture"
                title="AgentChat Technical Architecture"
                description="Scalable microservices architecture powering the next generation of AI communication"
                type="image"
                category="products"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Future of Communication</h2>
            <p className="text-gray-300 mb-6">
              AgentChat represents more than just a product - it's a vision for how humans and AI will collaborate in the future. 
              As AI agents become more sophisticated and numerous, we need interfaces that can handle this complexity while 
              remaining simple and intuitive for users.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/agentchat" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all">
                Try AgentChat
              </Link>
              <Link href="/ai-agents" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Explore Agents
              </Link>
              <Link href="/handle-registry" className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all">
                Get Your Handle
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
          <Link href="/blog/io-intelligent-operator-whitepaper" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">IO: Intelligent Operator</h4>
            <p className="text-gray-300 text-sm">Your personal AI operating system</p>
          </Link>
          <Link href="/blog/alpharouter-intelligent-model-routing" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AlphaRouter</h4>
            <p className="text-gray-300 text-sm">Intelligent model routing for optimal performance</p>
          </Link>
          <Link href="/blog/ai-agents-marketplace-economy" className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Agent Marketplace</h4>
            <p className="text-gray-300 text-sm">The new creator economy for AI agents</p>
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
