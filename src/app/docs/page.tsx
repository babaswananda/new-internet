'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';
import Link from 'next/link';

interface DocSection {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
}

const docSections: DocSection[] = [
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    description: 'Get up and running with Unified AI in under 5 minutes',
    category: 'Getting Started',
    href: '/docs/quick-start',
    icon: '🚀',
    difficulty: 'Beginner',
    estimatedTime: '5 min'
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description: 'Complete API documentation with examples and endpoints',
    category: 'API',
    href: '/docs/api',
    icon: '📖',
    difficulty: 'Intermediate',
    estimatedTime: '30 min'
  },
  {
    id: 'agent-deployment',
    title: 'Agent Deployment',
    description: 'Learn how to deploy and manage AI agents',
    category: 'AI Agents',
    href: '/docs/agents',
    icon: '🤖',
    difficulty: 'Intermediate',
    estimatedTime: '15 min'
  },
  {
    id: 'alpharouter-guide',
    title: 'AlphaRouter Setup',
    description: 'Configure intelligent model routing for optimal performance',
    category: 'Routing',
    href: '/docs/alpharouter',
    icon: '🔀',
    difficulty: 'Advanced',
    estimatedTime: '20 min'
  },
  {
    id: 'ion-protocol',
    title: 'ION Protocol',
    description: 'Understand the Intelligent Ontology Network infrastructure',
    category: 'Protocol',
    href: '/docs/ion',
    icon: '⚡',
    difficulty: 'Advanced',
    estimatedTime: '45 min'
  },
  {
    id: 'authentication',
    title: 'Authentication',
    description: 'Secure your applications with API keys and OAuth',
    category: 'Security',
    href: '/docs/auth',
    icon: '🔐',
    difficulty: 'Intermediate',
    estimatedTime: '10 min'
  },
  {
    id: 'webhooks',
    title: 'Webhooks & Events',
    description: 'Real-time notifications and event handling',
    category: 'Integration',
    href: '/docs/webhooks',
    icon: '🔔',
    difficulty: 'Intermediate',
    estimatedTime: '15 min'
  },
  {
    id: 'sdks',
    title: 'SDKs & Libraries',
    description: 'Official SDKs for Python, JavaScript, Go, and more',
    category: 'SDKs',
    href: '/docs/sdks',
    icon: '📦',
    difficulty: 'Beginner',
    estimatedTime: '10 min'
  },
  {
    id: 'rate-limits',
    title: 'Rate Limits & Quotas',
    description: 'Understanding usage limits and optimization strategies',
    category: 'API',
    href: '/docs/limits',
    icon: '⏱️',
    difficulty: 'Intermediate',
    estimatedTime: '8 min'
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    description: 'Best practices for handling errors and retries',
    category: 'Best Practices',
    href: '/docs/errors',
    icon: '⚠️',
    difficulty: 'Intermediate',
    estimatedTime: '12 min'
  },
  {
    id: 'enterprise',
    title: 'Enterprise Features',
    description: 'Advanced features for enterprise deployments',
    category: 'Enterprise',
    href: '/docs/enterprise',
    icon: '🏢',
    difficulty: 'Advanced',
    estimatedTime: '25 min'
  },
  {
    id: 'migration',
    title: 'Migration Guide',
    description: 'Migrate from other AI platforms to Unified AI',
    category: 'Migration',
    href: '/docs/migration',
    icon: '🔄',
    difficulty: 'Advanced',
    estimatedTime: '30 min'
  }
];

const categories = ['All', 'Getting Started', 'API', 'AI Agents', 'Routing', 'Protocol', 'Security', 'Integration', 'SDKs', 'Best Practices', 'Enterprise', 'Migration'];

const quickLinks = [
  {
    title: '📋 Changelog',
    description: 'Latest updates and version history',
    href: '/docs/changelog',
    color: 'blue'
  },
  {
    title: '🐛 Report Bug',
    description: 'Found an issue? Let us know',
    href: '/support',
    color: 'red'
  },
  {
    title: '💡 Feature Request',
    description: 'Suggest new features',
    href: '/feedback',
    color: 'green'
  },
  {
    title: '💬 Community',
    description: 'Join our developer community',
    href: '/community',
    color: 'purple'
  }
];

const popularGuides = [
  {
    title: 'Building Your First AI Agent',
    description: 'Step-by-step tutorial for creating a custom AI agent',
    href: '/docs/tutorials/first-agent',
    time: '20 min',
    difficulty: 'Beginner'
  },
  {
    title: 'Optimizing AI Costs with AlphaRouter',
    description: 'Reduce your AI spending by up to 70% with smart routing',
    href: '/docs/tutorials/cost-optimization',
    time: '15 min',
    difficulty: 'Intermediate'
  },
  {
    title: 'Enterprise Integration Patterns',
    description: 'Best practices for large-scale AI deployments',
    href: '/docs/tutorials/enterprise-patterns',
    time: '35 min',
    difficulty: 'Advanced'
  }
];

export default function DocsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = docSections.filter(doc => {
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="green" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>📚 Documentation</HeaderText>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Everything You Need</span> <span className="font-normal">to Build with</span> <span className="font-bold">Unified AI</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Comprehensive guides, API references, and tutorials to help you integrate AI into your applications.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-black/30 border border-green-500/20 rounded-lg text-white placeholder-gray-400 focus:border-green-500/50 focus:outline-none text-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <div className={`bg-black/30 backdrop-blur-sm border border-${link.color}-500/20 rounded-lg p-6 hover:border-${link.color}-500/50 transition-all group cursor-pointer`}>
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-${link.color}-300 transition-colors`}>
                    {link.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Guides */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>🔥 Popular Guides</HeaderText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularGuides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={guide.href}>
                <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all group cursor-pointer h-full">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-400">{guide.time}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-green-600/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Documentation Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={doc.href}>
                <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all group cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{doc.icon}</span>
                    <div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">
                        {doc.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{doc.description}</p>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">{doc.estimatedTime}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      doc.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                      doc.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {doc.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-16">
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
          <p className="text-gray-300 mb-6">
            Get your API key and start integrating AI into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/io">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all">
                🚀 Get API Key
              </button>
            </Link>
            <Link href="/docs/quick-start">
              <button className="px-8 py-3 bg-black/50 text-white border border-white/30 font-bold rounded-lg hover:bg-white/10 transition-all">
                📖 Quick Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
