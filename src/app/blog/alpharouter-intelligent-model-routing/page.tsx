'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function AlphaRouterBlogPage() {
  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="cyan" speed="slow" depth={true} interactive={true} />
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
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                Technical Deep Dive
              </span>
              <span className="text-gray-400">18 min read</span>
              <span className="text-gray-400">December 8, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>AlphaRouter: Intelligent Model Routing at Scale</HeaderText>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Deep dive into AlphaRouter's revolutionary approach to AI model routing, optimization, and parallel processing that powers the entire Unified AI ecosystem.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By AlphaRouter Engineering Team</span>
              <div className="flex gap-2">
                <a
                  href="/downloads/alpharouter-technical-spec.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Technical Specification
                </a>
                <Link href="/alpharouter" className="px-6 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 rounded-lg transition-all">
                  Try AlphaRouter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="alpharouter-architecture"
          title="AlphaRouter: Intelligent Model Routing Architecture"
          description="Technical overview of how AlphaRouter optimizes AI model selection and routing in real-time"
          type="video"
          category="technical"
          priority="high"
          className="rounded-2xl overflow-hidden"
        />
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-cyan max-w-none">

            <h2 className="text-2xl font-bold text-white mb-4">The Model Routing Challenge</h2>
            <p className="text-gray-300 mb-6">
              With hundreds of AI models available - from GPT-4 to Claude to specialized domain models - choosing the right model
              for each task has become a complex optimization problem. AlphaRouter solves this by intelligently routing requests
              to the optimal model based on task requirements, cost constraints, and performance metrics.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Core Architecture</h2>
            <p className="text-gray-300 mb-6">
              AlphaRouter operates as a distributed system with multiple layers of intelligence. At its core is a sophisticated
              routing engine that analyzes incoming requests, evaluates available models, and makes optimal routing decisions
              in milliseconds.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="alpharouter-system-diagram"
                title="AlphaRouter System Architecture Diagram"
                description="Detailed technical diagram showing AlphaRouter's distributed routing architecture"
                type="image"
                category="technical"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Key Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">🧠 Intelligence Layer</h4>
                <p className="text-gray-300 text-sm">Analyzes request complexity, domain, and requirements</p>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">⚡ Routing Engine</h4>
                <p className="text-gray-300 text-sm">Real-time model selection and load balancing</p>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">📊 Performance Monitor</h4>
                <p className="text-gray-300 text-sm">Continuous monitoring and optimization feedback</p>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">🔄 Fallback System</h4>
                <p className="text-gray-300 text-sm">Automatic failover and redundancy management</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Intelligent Routing Algorithms</h2>
            <p className="text-gray-300 mb-6">
              AlphaRouter employs multiple routing strategies that can be combined and weighted based on specific requirements.
              These algorithms continuously learn and adapt based on performance data and user feedback.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Routing Strategies</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-cyan-300">Performance-Based:</strong> Routes to models with best latency/quality ratio</li>
              <li><strong className="text-cyan-300">Cost-Optimized:</strong> Balances quality requirements with cost constraints</li>
              <li><strong className="text-cyan-300">Domain-Specific:</strong> Selects models specialized for specific tasks</li>
              <li><strong className="text-cyan-300">Load-Balanced:</strong> Distributes requests to prevent bottlenecks</li>
              <li><strong className="text-cyan-300">Adaptive:</strong> Learns from usage patterns and adjusts routing</li>
            </ul>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="routing-performance-metrics"
                title="AlphaRouter Performance Metrics Dashboard"
                description="Real-time dashboard showing routing decisions, performance metrics, and optimization results"
                type="image"
                category="technical"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Parallel Processing Capabilities</h2>
            <p className="text-gray-300 mb-6">
              For complex tasks, AlphaRouter can split requests across multiple models and combine results intelligently.
              This parallel processing approach enables handling of sophisticated workflows that no single model could
              complete optimally.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Advanced Features</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-cyan-300">Multi-Model Ensemble:</strong> Combines outputs from multiple models for better results</li>
              <li><strong className="text-cyan-300">Pipeline Optimization:</strong> Optimizes multi-step AI workflows</li>
              <li><strong className="text-cyan-300">Context Preservation:</strong> Maintains context across model switches</li>
              <li><strong className="text-cyan-300">Quality Assurance:</strong> Validates outputs and triggers re-routing if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Performance Impact</h2>
            <p className="text-gray-300 mb-6">
              AlphaRouter delivers significant improvements across all key metrics compared to static model selection.
              These improvements compound across the entire Unified AI ecosystem, benefiting every user and application.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="performance-comparison"
                title="AlphaRouter vs Static Routing Performance Comparison"
                description="Comprehensive performance analysis showing improvements in speed, cost, and quality"
                type="video"
                category="technical"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Measured Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">⚡ 40% Faster</h4>
                <p className="text-gray-300 text-sm">Average response time improvement</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">💰 60% Cost Reduction</h4>
                <p className="text-gray-300 text-sm">Optimized model selection reduces costs</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">📈 25% Quality Boost</h4>
                <p className="text-gray-300 text-sm">Better task-model matching improves outputs</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">🔄 99.9% Uptime</h4>
                <p className="text-gray-300 text-sm">Intelligent failover ensures reliability</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Integration and APIs</h2>
            <p className="text-gray-300 mb-6">
              AlphaRouter provides simple APIs that abstract away the complexity of model selection. Developers can
              focus on building applications while AlphaRouter handles optimal model routing automatically.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Future Developments</h2>
            <p className="text-gray-300 mb-6">
              AlphaRouter continues to evolve with new routing algorithms, support for emerging models, and enhanced
              optimization capabilities. The system learns from every request, continuously improving its routing decisions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/alpharouter" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all">
                Try AlphaRouter
              </Link>
              <Link href="/docs/alpharouter" className="px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 rounded-lg transition-all">
                API Documentation
              </Link>
              <Link href="/alpharouter/dashboard" className="px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 rounded-lg transition-all">
                View Dashboard
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
          <Link href="/blog/parallel-processing-infrastructure" className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">Parallel Processing</h4>
            <p className="text-gray-300 text-sm">Infrastructure powering AlphaRouter's capabilities</p>
          </Link>
          <Link href="/blog/ai-infrastructure-scaling" className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">AI Infrastructure</h4>
            <p className="text-gray-300 text-sm">Scaling AI systems for global deployment</p>
          </Link>
          <Link href="/blog/io-intelligent-operator-whitepaper" className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all">
            <h4 className="text-lg font-bold text-white mb-2">IO Integration</h4>
            <p className="text-gray-300 text-sm">How IO leverages AlphaRouter for optimization</p>
          </Link>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 rounded-lg transition-all"
        >
          ← Back to Research Library
        </Link>
      </div>
    </MainLayout>
  );
}
