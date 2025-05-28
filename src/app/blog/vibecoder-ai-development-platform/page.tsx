'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function VibeCoderBlogPage() {
  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="green" speed="slow" depth={true} interactive={true} />
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
              <span className="px-4 py-2 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                Development Platform
              </span>
              <span className="text-gray-400">14 min read</span>
              <span className="text-gray-400">December 5, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>VibeCoder: AI-Powered Development Revolution</HeaderText>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              VibeCoder transforms software development with AI-assisted coding, intelligent debugging, and collaborative development environments that adapt to your coding style and project needs.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By VibeCoder Development Team</span>
              <div className="flex gap-2">
                <a
                  href="/downloads/vibecoder-developer-guide.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Developer Guide
                </a>
                <Link href="/vibecoder" className="px-6 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-500/30 rounded-lg transition-all">
                  Try VibeCoder
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="vibecoder-development-demo"
          title="VibeCoder: AI-Assisted Development in Action"
          description="Live coding session showing VibeCoder's AI assistance, debugging, and collaborative features"
          type="video"
          category="development"
          priority="high"
          className="rounded-2xl overflow-hidden"
        />
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-green-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-green max-w-none">

            <h2 className="text-2xl font-bold text-white mb-4">The Future of Software Development</h2>
            <p className="text-gray-300 mb-6">
              VibeCoder represents a fundamental shift in how software is created. By combining advanced AI assistance 
              with intuitive development tools, we're enabling developers to build better software faster while 
              maintaining the creativity and problem-solving that makes development an art.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">AI-Powered Code Generation</h2>
            <p className="text-gray-300 mb-6">
              VibeCoder's AI understands context, coding patterns, and project requirements to generate high-quality 
              code that matches your style and standards. From simple functions to complex algorithms, the AI adapts 
              to your preferences and learns from your codebase.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="ai-code-generation"
                title="AI Code Generation in VibeCoder"
                description="Demonstration of VibeCoder's AI generating complex code from natural language descriptions"
                type="image"
                category="development"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Core AI Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">🧠 Intelligent Autocomplete</h4>
                <p className="text-gray-300 text-sm">Context-aware suggestions that understand your project structure</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">🔍 Smart Debugging</h4>
                <p className="text-gray-300 text-sm">AI identifies bugs and suggests fixes before you even run the code</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">📝 Natural Language Coding</h4>
                <p className="text-gray-300 text-sm">Describe what you want in plain English, get working code</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">🔄 Code Refactoring</h4>
                <p className="text-gray-300 text-sm">Automatic optimization and modernization of existing code</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Collaborative Development Environment</h2>
            <p className="text-gray-300 mb-6">
              VibeCoder enables seamless collaboration between developers, designers, and stakeholders. Real-time 
              collaboration features, integrated communication tools, and shared AI assistance make team development 
              more efficient and enjoyable.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Collaboration Features</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-green-300">Real-time Editing:</strong> Multiple developers can work on the same codebase simultaneously</li>
              <li><strong className="text-green-300">AI Code Review:</strong> Automated code review with suggestions for improvements</li>
              <li><strong className="text-green-300">Integrated Chat:</strong> Context-aware communication tied to specific code sections</li>
              <li><strong className="text-green-300">Version Control:</strong> Advanced Git integration with AI-powered merge conflict resolution</li>
              <li><strong className="text-green-300">Project Management:</strong> Built-in task tracking and project planning tools</li>
            </ul>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="collaborative-coding"
                title="Collaborative Coding in VibeCoder"
                description="Team of developers working together in VibeCoder's collaborative environment"
                type="video"
                category="development"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Multi-Language Support</h2>
            <p className="text-gray-300 mb-6">
              VibeCoder supports over 50 programming languages with specialized AI models for each. Whether you're 
              building web applications, mobile apps, or embedded systems, VibeCoder provides expert-level assistance 
              tailored to your chosen technology stack.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Supported Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "JavaScript/TypeScript", "Python", "Java", "C++", "Rust", "Go", "Swift", "Kotlin",
                "React", "Vue.js", "Angular", "Node.js", "Django", "Flask", "Spring", "Express"
              ].map((tech, index) => (
                <div key={tech} className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-lg p-3 text-center">
                  <p className="text-white text-sm font-medium">{tech}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Performance and Productivity Metrics</h2>
            <p className="text-gray-300 mb-6">
              VibeCoder users report significant improvements in development speed, code quality, and overall 
              productivity. Our AI assistance doesn't just make coding faster - it makes it better.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Measured Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">⚡ 3x Faster Development</h4>
                <p className="text-gray-300 text-sm">Average time from concept to working prototype</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">🐛 70% Fewer Bugs</h4>
                <p className="text-gray-300 text-sm">AI-assisted debugging catches issues early</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">📈 50% Better Code Quality</h4>
                <p className="text-gray-300 text-sm">Automated optimization and best practices</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-green-300 mb-2">🎯 90% Developer Satisfaction</h4>
                <p className="text-gray-300 text-sm">Developers love the AI-assisted workflow</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Integration with AI Factory™</h2>
            <p className="text-gray-300 mb-6">
              As part of the AI Factory™ suite, VibeCoder seamlessly integrates with other AI tools and services. 
              Deploy your code directly to AI agents, connect with AI-powered testing frameworks, and leverage 
              the entire AI ecosystem from within your development environment.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="vibecoder-integration"
                title="VibeCoder Integration with AI Factory™"
                description="How VibeCoder connects with other AI Factory™ tools for complete development workflow"
                type="image"
                category="development"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-6">
              VibeCoder is designed to be intuitive for developers of all skill levels. Whether you're a beginner 
              learning to code or an expert building complex systems, VibeCoder adapts to your needs and helps 
              you achieve your goals faster.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Pricing Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <h4 className="text-lg font-bold text-green-300 mb-2">Free</h4>
                <p className="text-2xl font-bold text-white mb-2">$0/month</p>
                <p className="text-gray-300 text-sm">Perfect for learning and small projects</p>
              </div>
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                <h4 className="text-lg font-bold text-green-300 mb-2">Pro</h4>
                <p className="text-2xl font-bold text-white mb-2">$29/month</p>
                <p className="text-gray-300 text-sm">For professional developers and teams</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <h4 className="text-lg font-bold text-green-300 mb-2">Enterprise</h4>
                <p className="text-2xl font-bold text-white mb-2">Custom</p>
                <p className="text-gray-300 text-sm">Large teams with advanced requirements</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/vibecoder" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all">
                Start Coding Now
              </Link>
              <Link href="/vibecoder/demo" className="px-6 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-500/30 rounded-lg transition-all">
                Try Interactive Demo
              </Link>
              <Link href="/vibecoder/docs" className="px-6 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-500/30 rounded-lg transition-all">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-500/30 rounded-lg transition-all"
        >
          ← Back to Research Library
        </Link>
      </div>
    </MainLayout>
  );
}
