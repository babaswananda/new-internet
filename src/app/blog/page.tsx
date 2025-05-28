'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import ParticleBackground from '@/components/ui/particle-background';

const blogPosts = [
  {
    id: 'introducing-unified-ai-protocol',
    title: 'Introducing the Unified AI Protocol – Solving AI\'s Trust Gap',
    excerpt: 'An educational overview of how Unified AI combines AI services with decentralized identity to empower users and democratize access to advanced AI.',
    category: 'Protocol Education',
    readTime: '8 min read',
    publishDate: '2024-01-15',
    featured: true,
    tags: ['AI', 'Blockchain', 'Identity', 'Protocol'],
    author: 'Unified AI Team',
    downloadLink: '/downloads/unified-ai-whitepaper.pdf'
  },
  {
    id: 'under-the-hood-tech-behind-unified-ai',
    title: 'Under the Hood: The Tech Behind Unified AI',
    excerpt: 'A developer-oriented deep dive into the protocol\'s architecture, covering AI Service Layer, Handle Registry, consensus mechanisms, and token mechanics.',
    category: 'Technical Deep Dive',
    readTime: '12 min read',
    publishDate: '2024-01-22',
    featured: true,
    tags: ['Technical', 'Architecture', 'DID', 'Smart Contracts'],
    author: 'Technical Team',
    downloadLink: '/downloads/technical-specification.pdf'
  },
  {
    id: 'tokenomics-deep-dive',
    title: 'Unified AI Tokenomics: Three-Token Economy for AI-Native Internet',
    excerpt: 'Comprehensive breakdown of UtilityCoin, AI Tokens, and Meme Coins - how they work together to power the decentralized AI ecosystem.',
    category: 'Tokenomics',
    readTime: '15 min read',
    publishDate: '2024-02-12',
    featured: true,
    tags: ['Tokenomics', 'Economics', 'Utility', 'Governance'],
    author: 'Economics Team',
    downloadLink: '/downloads/tokenomics-paper.pdf'
  },
  {
    id: 'competitive-analysis-ai-blockchain',
    title: 'AI + Blockchain Competitive Landscape: Where Unified AI Fits',
    excerpt: 'Strategic analysis of SingularityNET, Fetch.ai, Ocean Protocol, Masa Protocol, and Alethea AI - positioning Unified AI as the connective tissue.',
    category: 'Market Analysis',
    readTime: '10 min read',
    publishDate: '2024-02-19',
    featured: false,
    tags: ['Competition', 'Strategy', 'Market', 'Positioning'],
    author: 'Research Team',
    downloadLink: '/downloads/competitive-analysis.pdf'
  },
  {
    id: 'handle-registry-specification',
    title: 'Handle Registry: The Identity Layer for AI Services',
    excerpt: 'Technical specification of the Handle Registry system - how decentralized identifiers work with AI services for seamless user experience.',
    category: 'Technical Specification',
    readTime: '11 min read',
    publishDate: '2024-02-26',
    featured: false,
    tags: ['Identity', 'DID', 'Registry', 'Technical'],
    author: 'Protocol Team',
    downloadLink: '/downloads/handle-registry-spec.pdf'
  },
  {
    id: 'ecosystem-partnerships-use-cases',
    title: 'Building the Unified AI Ecosystem: Partners and Use Cases',
    excerpt: 'Real-world applications and partnerships showcasing unified AI services with decentralized identity across healthcare, finance, and IoT.',
    category: 'Ecosystem Spotlight',
    readTime: '6 min read',
    publishDate: '2024-03-05',
    featured: false,
    tags: ['Partnerships', 'Use Cases', 'Ecosystem', 'DeFi'],
    author: 'Business Development',
    downloadLink: '/downloads/ecosystem-overview.pdf'
  }
];

const categories = ['All', 'Protocol Education', 'Technical Deep Dive', 'Ecosystem Spotlight', 'Industry Analysis', 'Tokenomics'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>Unified AI Research</HeaderText>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Insights.</span> <span className="font-normal">Research.</span> <span className="font-bold">Analysis.</span> <span className="font-normal">Strategy.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Deep dives into building the protocol rails for the AI-native internet, competitive analysis, and thought leadership on decentralized AI infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Research */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          <HeaderText>Featured Research</HeaderText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">{post.publishDate}</span>
                <span className="text-gray-500 text-xs">By {post.author}</span>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="flex-1 text-center px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all text-sm"
                >
                  Read Article
                </Link>
                <a
                  href={post.downloadLink}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all text-sm"
                  download
                >
                  📄 PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Posts */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-800 hover:bg-purple-600 text-gray-300 hover:text-white rounded-lg transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-r from-gray-900/30 to-black/30 border border-gray-700/30 rounded-lg p-6 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <span className="text-gray-400 text-sm">{post.publishDate}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-gray-400 text-sm">By {post.author}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Get the latest insights on AI, blockchain, and the future of decentralized intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
