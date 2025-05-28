'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HeaderText } from '@/components/ui/header-text';
import ParticleBackground from '@/components/ui/particle-background';

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'general',
      title: 'General',
      icon: '🌟',
      description: 'Basic information about Unified AI Protocol'
    },
    {
      id: 'technical',
      title: 'Technical',
      icon: '🔧',
      description: 'Technical specifications and implementation'
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: '🪙',
      description: 'Token economy and financial aspects'
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      icon: '🤝',
      description: 'Integration and partnership opportunities'
    },
    {
      id: 'investment',
      title: 'Investment',
      icon: '💰',
      description: 'Investment opportunities and token offerings'
    }
  ];

  const faqs = {
    general: [
      {
        id: 'what-is-unified-ai',
        question: 'What is Unified AI Protocol?',
        answer: 'Unified AI Protocol is the missing infrastructure layer that unifies AI services with decentralized identity. We provide the "connective tissue" between AI platforms, enabling seamless, secure, and user-controlled interactions across any AI service. Think of it as the internet protocol for AI - creating a unified experience where users maintain one identity across all AI interactions while earning tokens for their contributions.'
      },
      {
        id: 'how-different-from-competitors',
        question: 'How is Unified AI different from SingularityNET, Fetch.ai, or Ocean Protocol?',
        answer: 'While SingularityNET focuses on AI marketplaces, Fetch.ai on autonomous agents, and Ocean on data marketplaces, Unified AI provides the unified identity and transaction layer that these platforms lack. We complement rather than compete - enabling users to maintain one identity across SingularityNET services, Fetch agents, and Ocean data while earning unified rewards. Our Handle Registry system is the first user-centric identity solution for AI services.'
      },
      {
        id: 'main-benefits',
        question: 'What are the main benefits for users?',
        answer: 'Users get: (1) One universal AI identity across all services, (2) Complete control over their AI data and interactions, (3) Token rewards for contributing valuable data, (4) Seamless switching between AI models and services, (5) Vault-based secure storage of AI history, and (6) Governance participation in protocol decisions. Instead of managing dozens of AI accounts, you have one handle that works everywhere.'
      },
      {
        id: 'getting-started',
        question: 'How do I get started with Unified AI?',
        answer: 'Start by claiming your handle at unifiedai.com/claim - this becomes your universal AI identity. Then explore our Protocol Academy to learn about vault setup, token economics, and AI agent creation. Developers can access our APIs and SDKs, while enterprises can schedule demos for custom integrations. Join our community on Discord for real-time support and updates.'
      }
    ],
    technical: [
      {
        id: 'handle-registry-work',
        question: 'How does the Handle Registry work?',
        answer: 'The Handle Registry uses decentralized identifiers (DIDs) with a custom naming system. Each handle (like @yourname.ai) maps to a DID that controls your identity across all AI services. The registry supports three tiers: Developer Handles ($50-500+), AI Agent Handles ($1-5), and Endpoint Handles ($0.01/hr). Handles are stored on-chain with vault-based ownership, enabling secure, user-controlled identity management.'
      },
      {
        id: 'ai-service-integration',
        question: 'How do AI services integrate with Unified AI?',
        answer: 'AI services integrate through our API-first design with SDKs for JavaScript, Python, Go, and mobile platforms. Services authenticate users via handle resolution, access user preferences through vault APIs, and process payments through our token system. We provide middleware that existing AI platforms can plug into without changing their core architecture - making integration seamless.'
      },
      {
        id: 'security-privacy',
        question: 'How do you ensure security and privacy?',
        answer: 'Security is built into every layer: (1) Vault-based identity with user-controlled keys, (2) Zero-knowledge proofs for identity verification, (3) Encrypted data storage with user-controlled access, (4) Smart contract audits and formal verification, (5) Decentralized architecture preventing single points of failure. Users control what data to share and can revoke access at any time.'
      },
      {
        id: 'scalability',
        question: 'How does Unified AI handle scalability?',
        answer: 'We use a multi-chain architecture with Cosmos-based consensus for high throughput. The Handle Registry can process thousands of identity resolutions per second, while AI service calls are routed through optimized endpoints. We employ layer-2 solutions for microtransactions and implement caching strategies for frequently accessed data. The system is designed to scale to millions of users and thousands of AI services.'
      }
    ],
    tokenomics: [
      {
        id: 'three-token-system',
        question: 'How does the three-token economy work?',
        answer: 'Our ecosystem uses: (1) UtilityCoin (UC) - the base protocol token for governance and staking, (2) AI Tokens (AIT) - execution gas for AI service calls and rewards, (3) Meme Coins - viral fuel for community engagement and marketing. This creates a balanced economy where UC provides stability, AIT drives usage, and Meme Coins enable viral growth and community participation.'
      },
      {
        id: 'token-utility',
        question: 'What can I do with Unified AI tokens?',
        answer: 'UtilityCoin: Stake for governance voting, pay for premium handles, earn staking rewards, participate in protocol decisions. AI Tokens: Pay for AI service calls, earn rewards for data contributions, tip AI agents, access premium features. Meme Coins: Participate in viral campaigns, earn from social engagement, access exclusive content, boost visibility in feeds.'
      },
      {
        id: 'earning-tokens',
        question: 'How can I earn tokens?',
        answer: 'Multiple earning opportunities: (1) Contribute valuable training data to AI models, (2) Stake UtilityCoin for validation rewards, (3) Provide AI services through the platform, (4) Participate in governance and earn voting rewards, (5) Create viral content for Meme Coin rewards, (6) Refer new users and earn referral bonuses, (7) Participate in community challenges and airdrops.'
      },
      {
        id: 'token-distribution',
        question: 'How are tokens distributed?',
        answer: 'UtilityCoin: 40% community rewards, 25% ecosystem development, 20% team/advisors (4-year vest), 15% strategic reserves. AI Tokens: 50% user rewards, 25% AI service providers, 15% ecosystem growth, 10% protocol treasury. Meme Coins: 60% community airdrops, 20% viral campaigns, 15% creator rewards, 5% protocol reserves. All distributions are transparent and auditable on-chain.'
      }
    ],
    partnerships: [
      {
        id: 'partnership-types',
        question: 'What types of partnerships does Unified AI offer?',
        answer: 'We offer several partnership tiers: (1) Technical Integrations - AI platforms integrating our identity layer, (2) Strategic Alliances - Joint go-to-market with complementary protocols, (3) Enterprise Partnerships - Custom solutions for large organizations, (4) Developer Partnerships - Building on our infrastructure, (5) Investment Partnerships - Token holders and governance participants. Each tier has specific benefits and requirements.'
      },
      {
        id: 'integration-process',
        question: 'What is the integration process for AI platforms?',
        answer: 'Integration follows our streamlined process: (1) Technical assessment and compatibility review, (2) API integration using our SDKs, (3) Handle Registry connection for user identity, (4) Token integration for payments and rewards, (5) Testing on our testnet environment, (6) Mainnet deployment with ongoing support. Most integrations complete within 2-4 weeks with our technical team support.'
      },
      {
        id: 'enterprise-benefits',
        question: 'What benefits do enterprise partners receive?',
        answer: 'Enterprise partners get: (1) Custom integration support and dedicated technical team, (2) White-label solutions with their branding, (3) Revenue sharing from user activity, (4) Priority access to new features and updates, (5) Governance voting rights proportional to usage, (6) Marketing co-promotion and joint announcements, (7) Technical training and ongoing support.'
      },
      {
        id: 'becoming-partner',
        question: 'How do I become a Unified AI partner?',
        answer: 'Start by scheduling a partnership demo at unifiedai.com/book-demo or contact protocol@io.unifiedai. We\'ll assess your use case, technical requirements, and integration scope. Qualified partners receive access to our partner portal, technical documentation, sandbox environment, and dedicated support team. The process typically takes 1-2 weeks from initial contact to partnership agreement.'
      }
    ],
    investment: [
      {
        id: 'investment-opportunities',
        question: 'What investment opportunities are available?',
        answer: 'We offer multiple investment paths: (1) AI Tokens ITO - 72-hour public token offering with handle reservation utility, (2) Friends & Family Round - Early access with bonus tokens and special pricing, (3) Strategic Investment - Larger allocations for qualified investors, (4) Ecosystem Participation - Earn tokens through platform usage and contributions. Each option has different terms, minimums, and benefits.'
      },
      {
        id: 'friends-family-round',
        question: 'How does the Friends & Family round work?',
        answer: 'Our F&F round offers early access with contribution tiers from $50 to $25,000+. Contributors receive UtilityCoin at $0.01 with bonus percentages (5% at $50 up to 40% at $25k+) plus matching AI Token bonuses. Payments accepted via CashApp and Bitcoin. Contributors get early handle access, governance rights, and potential 10x returns based on public market pricing projections.'
      },
      {
        id: 'token-value-accrual',
        question: 'How do tokens accrue value?',
        answer: 'Token value grows through: (1) Network usage driving demand for AI Tokens, (2) UtilityCoin staking reducing circulating supply, (3) Handle registry growth increasing utility demand, (4) Partnership integrations expanding user base, (5) Governance participation creating holding incentives, (6) Deflationary mechanisms through token burns, (7) Revenue sharing from platform fees to token holders.'
      },
      {
        id: 'investment-risks',
        question: 'What are the investment risks?',
        answer: 'Key risks include: (1) Regulatory uncertainty in crypto/AI sectors, (2) Technology adoption challenges, (3) Competition from established AI platforms, (4) Market volatility affecting token prices, (5) Technical risks in smart contract implementation, (6) Partnership execution risks. We mitigate through legal compliance, technical audits, strong partnerships, and transparent communication. Invest only what you can afford to lose.'
      }
    ]
  };

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
              <HeaderText>Frequently Asked Questions</HeaderText>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Questions.</span> <span className="font-normal">Answers.</span> <span className="font-bold">Clarity.</span> <span className="font-normal">Understanding.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about Unified AI Protocol, from basic concepts to technical implementation and investment opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {faqCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setOpenCategory(category.id)}
              className={`px-6 py-3 rounded-lg border transition-all ${
                openCategory === category.id
                  ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                  : 'bg-black/30 border-purple-500/20 text-gray-300 hover:border-purple-500/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {faqCategories.find(cat => cat.id === openCategory)?.title} Questions
            </h2>
            <p className="text-gray-400">
              {faqCategories.find(cat => cat.id === openCategory)?.description}
            </p>
          </div>

          <div className="space-y-4">
            {faqs[openCategory as keyof typeof faqs]?.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-purple-500/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left bg-black/20 hover:bg-black/30 transition-all flex items-center justify-between"
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <span className={`text-purple-400 transition-transform ${
                    openQuestion === faq.id ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 bg-black/10"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            <HeaderText>Still Have Questions?</HeaderText>
          </h3>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our team is here to help with personalized answers and detailed explanations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-demo"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all"
            >
              📅 Schedule Demo
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all"
            >
              💬 Contact Support
            </a>
            <a 
              href="mailto:support@io.unifiedai"
              className="px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all"
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          <HeaderText>Explore More</HeaderText>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="/blog" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl mb-2">📚</div>
            <div className="text-white font-medium">Research Library</div>
          </a>
          <a href="/learn-aimademerich" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl mb-2">🎓</div>
            <div className="text-white font-medium">Protocol Academy</div>
          </a>
          <a href="/handle-registry" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl mb-2">🆔</div>
            <div className="text-white font-medium">Handle Registry</div>
          </a>
          <a href="/ai-tokens" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl mb-2">🪙</div>
            <div className="text-white font-medium">Tokenomics</div>
          </a>
        </div>
      </div>
    </div>
  );
}
