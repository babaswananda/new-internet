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
    downloadLink: '/downloads/unified-ai-whitepaper.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'agentchat-superapp-thesis',
    title: 'AgentChat: The Superapp Thesis for AI-Native Communication',
    excerpt: 'Why AgentChat represents the future of human-AI interaction - combining chat, agents, and protocols into one unified interface.',
    category: 'Product Thesis',
    readTime: '10 min read',
    publishDate: '2024-01-20',
    featured: true,
    tags: ['AgentChat', 'Superapp', 'UI/UX', 'Product'],
    author: 'Product Team',
    downloadLink: '/downloads/agentchat-thesis.pdf',
    hasVideo: true,
    hasImages: true
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
    downloadLink: '/downloads/technical-specification.pdf',
    hasVideo: false,
    hasImages: true
  },
  {
    id: 'alpharouter-intelligent-model-routing',
    title: 'AlphaRouter: Intelligent Model Routing for the AI Economy',
    excerpt: 'How AlphaRouter optimizes AI model selection, routing, and cost efficiency across the entire Unified AI ecosystem.',
    category: 'Technical Deep Dive',
    readTime: '9 min read',
    publishDate: '2024-01-28',
    featured: true,
    tags: ['AlphaRouter', 'Routing', 'Optimization', 'Infrastructure'],
    author: 'Infrastructure Team',
    downloadLink: '/downloads/alpharouter-spec.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'io-intelligent-operator-whitepaper',
    title: 'IO: The Intelligent Operator - Your Personal AI Operating System',
    excerpt: 'Complete technical specification of IO - the AI agent that manages your entire digital life across all platforms and protocols.',
    category: 'Product Whitepaper',
    readTime: '14 min read',
    publishDate: '2024-02-05',
    featured: true,
    tags: ['IO', 'Agent', 'Operating System', 'Automation'],
    author: 'IO Development Team',
    downloadLink: '/downloads/io-whitepaper.pdf',
    hasVideo: true,
    hasImages: true
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
    downloadLink: '/downloads/tokenomics-paper.pdf',
    hasVideo: false,
    hasImages: true
  },
  {
    id: 'ion-intelligent-ontology-network',
    title: 'ION: Intelligent Ontology Network - Semantic AI Infrastructure',
    excerpt: 'Deep dive into ION protocol - how semantic tagging and ontology agents create intelligent data relationships across the AI ecosystem.',
    category: 'Protocol Specification',
    readTime: '11 min read',
    publishDate: '2024-02-15',
    featured: false,
    tags: ['ION', 'Ontology', 'Semantic', 'Data'],
    author: 'Protocol Research Team',
    downloadLink: '/downloads/ion-protocol-spec.pdf',
    hasVideo: false,
    hasImages: true
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
    downloadLink: '/downloads/competitive-analysis.pdf',
    hasVideo: false,
    hasImages: true
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
    downloadLink: '/downloads/handle-registry-spec.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'agentos-operating-system-future',
    title: 'AGENT OS: The Operating System for the Agent Economy',
    excerpt: 'Vision paper on AGENT OS - how we\'re building the foundational layer for AI agents to interact, transact, and evolve autonomously.',
    category: 'Vision Paper',
    readTime: '13 min read',
    publishDate: '2024-03-01',
    featured: false,
    tags: ['AGENT OS', 'Operating System', 'Agents', 'Future'],
    author: 'Vision Team',
    downloadLink: '/downloads/agentos-vision.pdf',
    hasVideo: true,
    hasImages: true
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
    downloadLink: '/downloads/ecosystem-overview.pdf',
    hasVideo: false,
    hasImages: true
  },
  {
    id: 'vibecoder-ai-development-platform',
    title: 'VibeCoder: AI-Powered Development for the Culture',
    excerpt: 'How VibeCoder democratizes software development through AI-assisted coding, making development accessible to creators and entrepreneurs.',
    category: 'Product Deep Dive',
    readTime: '8 min read',
    publishDate: '2024-03-10',
    featured: false,
    tags: ['VibeCoder', 'Development', 'AI Coding', 'Accessibility'],
    author: 'VibeCoder Team',
    downloadLink: '/downloads/vibecoder-overview.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'ai-agents-marketplace-economy',
    title: 'AI Agents Marketplace: The New Creator Economy',
    excerpt: 'Exploring the AI Agents marketplace - how creators can build, deploy, and monetize AI agents while building sustainable digital businesses.',
    category: 'Marketplace Analysis',
    readTime: '12 min read',
    publishDate: '2024-03-15',
    featured: false,
    tags: ['Marketplace', 'Agents', 'Creator Economy', 'Monetization'],
    author: 'Marketplace Team',
    downloadLink: '/downloads/agents-marketplace.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'ambassador-program-thesis',
    title: 'Ambassador Program: Culture-First AI Adoption Strategy',
    excerpt: 'The strategic thesis behind our Ambassador program - how cultural operators drive authentic AI adoption and build sustainable communities.',
    category: 'Strategy Paper',
    readTime: '9 min read',
    publishDate: '2024-03-20',
    featured: false,
    tags: ['Ambassadors', 'Culture', 'Adoption', 'Community'],
    author: 'Community Strategy Team',
    downloadLink: '/downloads/ambassador-thesis.pdf',
    hasVideo: false,
    hasImages: true
  },
  {
    id: 'retail-partner-framework',
    title: 'Retail Partner Framework: AI as a Service Extension',
    excerpt: 'How any business can offer AI subscriptions and services to their customers - turning AI into a new revenue stream and customer value proposition.',
    category: 'Business Framework',
    readTime: '10 min read',
    publishDate: '2024-03-25',
    featured: false,
    tags: ['Retail', 'Partnerships', 'B2B', 'Revenue'],
    author: 'Business Development',
    downloadLink: '/downloads/retail-framework.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'google-a2a-anthropic-mcp-integration',
    title: 'Google A2A & Anthropic MCP: Building the Agent Communication Layer',
    excerpt: 'Technical analysis of integrating Google\'s Agent-to-Agent protocol and Anthropic\'s MCP support within Unified AI infrastructure.',
    category: 'Integration Analysis',
    readTime: '11 min read',
    publishDate: '2024-03-28',
    featured: false,
    tags: ['Google A2A', 'Anthropic MCP', 'Integration', 'Protocols'],
    author: 'Integration Team',
    downloadLink: '/downloads/a2a-mcp-integration.pdf',
    hasVideo: false,
    hasImages: true
  },
  {
    id: 'hardware-ecosystem-aiphone-aipods',
    title: 'Hardware Ecosystem: AIPhone, AIPods, and the Physical AI Layer',
    excerpt: 'Vision for Unified AI hardware - how AIPhone, AIPods, and AIGlasses create seamless AI experiences in the physical world.',
    category: 'Hardware Vision',
    readTime: '12 min read',
    publishDate: '2024-04-01',
    featured: false,
    tags: ['Hardware', 'AIPhone', 'AIPods', 'Physical AI'],
    author: 'Hardware Team',
    downloadLink: '/downloads/hardware-vision.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'aimademerich-success-stories',
    title: 'AIMadeMeRich: Success Stories from the AI Economy',
    excerpt: 'Real stories from users who built wealth and success using Unified AI tools - from creators to entrepreneurs to developers.',
    category: 'Success Stories',
    readTime: '7 min read',
    publishDate: '2024-04-05',
    featured: false,
    tags: ['Success Stories', 'AIMadeMeRich', 'Case Studies', 'Results'],
    author: 'Community Team',
    downloadLink: '/downloads/success-stories.pdf',
    hasVideo: true,
    hasImages: true
  },
  {
    id: 'protocol-governance-dao-structure',
    title: 'Protocol Governance: DAO Structure and Community Decision Making',
    excerpt: 'How Unified AI governance works - from token voting to community proposals to protocol upgrades and ecosystem development.',
    category: 'Governance',
    readTime: '13 min read',
    publishDate: '2024-04-10',
    featured: false,
    tags: ['Governance', 'DAO', 'Voting', 'Community'],
    author: 'Governance Team',
    downloadLink: '/downloads/governance-structure.pdf',
    hasVideo: false,
    hasImages: true
  },
  {
    id: 'future-of-ai-internet-thesis',
    title: 'The Future of AI Internet: A 10-Year Vision',
    excerpt: 'Our comprehensive thesis on how AI will reshape the internet - from agent economies to semantic web to decentralized intelligence.',
    category: 'Future Vision',
    readTime: '18 min read',
    publishDate: '2024-04-15',
    featured: false,
    tags: ['Future', 'Vision', 'AI Internet', 'Long-term'],
    author: 'Research & Vision Team',
    downloadLink: '/downloads/ai-internet-thesis.pdf',
    hasVideo: true,
    hasImages: true
  }
];

const categories = [
  'All',
  'Protocol Education',
  'Product Thesis',
  'Technical Deep Dive',
  'Product Whitepaper',
  'Tokenomics',
  'Protocol Specification',
  'Market Analysis',
  'Vision Paper',
  'Ecosystem Spotlight',
  'Product Deep Dive',
  'Marketplace Analysis',
  'Strategy Paper',
  'Business Framework',
  'Integration Analysis',
  'Hardware Vision',
  'Success Stories',
  'Governance',
  'Future Vision'
];

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
                {post.hasVideo && (
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                    📹 Video
                  </span>
                )}
                {post.hasImages && (
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                    🖼️ Images
                  </span>
                )}
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
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <span className="text-gray-400 text-sm">{post.publishDate}</span>
                    {post.hasVideo && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                        📹 Video
                      </span>
                    )}
                    {post.hasImages && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                        🖼️ Images
                      </span>
                    )}
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
