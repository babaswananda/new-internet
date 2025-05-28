// 🤖 .AIAgents Platform - Deployable AI Agent Catalog
// "AI agents for every hustle, mission, and movement."

export interface AIAgent {
  id: string;
  name: string;
  category: 'utility' | 'commerce' | 'media' | 'intelligence' | 'spiritual' | 'infrastructure';
  function: string;
  monetizationAngle: string;
  description: string;
  features: string[];
  pricing: {
    deploymentCost: string;
    usageFee: string;
    revenueShare: string;
  };
  targetUsers: string[];
  integrations: string[];
  remixable: boolean;
  popularity: number; // 1-100
  earnings: string; // Monthly average
  avatar: string;
  tags: string[];
}

export const aiAgentsCatalog: AIAgent[] = [
  // UTILITY AGENTS
  {
    id: 'smartform-agent',
    name: 'SmartForm Agent',
    category: 'utility',
    function: 'Auto-builds, routes, and analyzes any type of form (leads, onboarding, orders)',
    monetizationAngle: 'SaaS B2B licensing or subscription',
    description: 'Intelligent form builder that creates, optimizes, and analyzes forms automatically. Handles lead capture, customer onboarding, order processing, and data analysis.',
    features: [
      'Auto-generates forms based on business needs',
      'Smart routing and conditional logic',
      'Real-time analytics and optimization',
      'Integration with CRM and email tools',
      'A/B testing and conversion optimization'
    ],
    pricing: {
      deploymentCost: '5 AI Tokens',
      usageFee: '$0.10 per form submission',
      revenueShare: '20% to original creator'
    },
    targetUsers: ['SaaS companies', 'Lead generation agencies', 'E-commerce businesses'],
    integrations: ['Zapier', 'HubSpot', 'Mailchimp', 'Stripe'],
    remixable: true,
    popularity: 85,
    earnings: '$2,500/month',
    avatar: '/agents/smartform-agent.svg',
    tags: ['forms', 'automation', 'b2b', 'saas']
  },
  {
    id: 'checkoutgpt',
    name: 'CheckoutGPT',
    category: 'utility',
    function: 'Plug-and-play AI checkout bot for any website',
    monetizationAngle: '1-click crypto checkout, upsell engine',
    description: 'Revolutionary checkout experience that uses AI to optimize conversions, handle objections, and process payments seamlessly.',
    features: [
      'AI-powered objection handling',
      'Dynamic upsell recommendations',
      'Crypto and fiat payment processing',
      'Abandoned cart recovery',
      'Conversion optimization'
    ],
    pricing: {
      deploymentCost: '10 AI Tokens',
      usageFee: '2% of transaction value',
      revenueShare: '15% to original creator'
    },
    targetUsers: ['E-commerce stores', 'Digital product creators', 'SaaS companies'],
    integrations: ['Shopify', 'WooCommerce', 'Stripe', 'Crypto wallets'],
    remixable: true,
    popularity: 92,
    earnings: '$5,200/month',
    avatar: '/agents/checkoutgpt.svg',
    tags: ['checkout', 'ecommerce', 'crypto', 'conversion']
  },
  {
    id: 'inbox-responder',
    name: 'InboxResponder',
    category: 'utility',
    function: 'Handles all DMs/emails/messages for a brand or user',
    monetizationAngle: 'Agency/creator tiered pricing',
    description: 'AI assistant that manages all incoming communications with brand-consistent responses and intelligent routing.',
    features: [
      'Multi-platform message management',
      'Brand voice consistency',
      'Intelligent message routing',
      'Auto-scheduling and follow-ups',
      'Sentiment analysis and escalation'
    ],
    pricing: {
      deploymentCost: '8 AI Tokens',
      usageFee: '$0.05 per message handled',
      revenueShare: '25% to original creator'
    },
    targetUsers: ['Influencers', 'Agencies', 'Customer service teams'],
    integrations: ['Gmail', 'Slack', 'Discord', 'Instagram', 'Twitter'],
    remixable: true,
    popularity: 78,
    earnings: '$1,800/month',
    avatar: '/agents/inbox-responder.svg',
    tags: ['communication', 'automation', 'customer-service']
  },

  // COMMERCE AGENTS
  {
    id: 'brandgpt',
    name: 'BrandGPT',
    category: 'commerce',
    function: 'Instantly creates full brands (logo, copy, name, strategy)',
    monetizationAngle: 'Productized service, resale',
    description: 'Complete brand creation AI that generates logos, copy, naming, and strategy in minutes instead of months.',
    features: [
      'AI logo and visual identity generation',
      'Brand name and tagline creation',
      'Complete brand strategy development',
      'Marketing copy and messaging',
      'Brand guidelines and style guide'
    ],
    pricing: {
      deploymentCost: '15 AI Tokens',
      usageFee: '$50 per brand package',
      revenueShare: '30% to original creator'
    },
    targetUsers: ['Design agencies', 'Freelancers', 'Startups'],
    integrations: ['Figma', 'Canva', 'Adobe Creative Suite'],
    remixable: true,
    popularity: 88,
    earnings: '$4,100/month',
    avatar: '/agents/brandgpt.svg',
    tags: ['branding', 'design', 'strategy', 'creative']
  },
  {
    id: 'nichedrop-agent',
    name: 'NicheDrop Agent',
    category: 'commerce',
    function: 'Builds a Shopify or Gumroad drop in any niche',
    monetizationAngle: 'License for creators, UGC sellers',
    description: 'Automated store builder that creates complete e-commerce experiences for any niche market.',
    features: [
      'Niche market research and validation',
      'Automated store setup and design',
      'Product sourcing and descriptions',
      'Marketing funnel creation',
      'Inventory and order management'
    ],
    pricing: {
      deploymentCost: '12 AI Tokens',
      usageFee: '$100 per store setup',
      revenueShare: '20% to original creator'
    },
    targetUsers: ['Dropshippers', 'Content creators', 'Entrepreneurs'],
    integrations: ['Shopify', 'Gumroad', 'AliExpress', 'Printful'],
    remixable: true,
    popularity: 82,
    earnings: '$3,600/month',
    avatar: '/agents/nichedrop-agent.svg',
    tags: ['ecommerce', 'dropshipping', 'automation', 'niche']
  },

  // MEDIA & MEME AGENTS
  {
    id: 'meme-machine',
    name: 'MemeMachine',
    category: 'media',
    function: 'Auto-generates meme images, headlines, and trends',
    monetizationAngle: 'Used for meme coin drops, virality',
    description: 'Viral content creation engine that generates memes, trending content, and viral marketing materials.',
    features: [
      'Trending meme format detection',
      'Viral headline generation',
      'Image and video meme creation',
      'Social media optimization',
      'Trend prediction and analysis'
    ],
    pricing: {
      deploymentCost: '6 AI Tokens',
      usageFee: '$5 per meme package',
      revenueShare: '40% to original creator'
    },
    targetUsers: ['Meme coin projects', 'Social media managers', 'Content creators'],
    integrations: ['Twitter', 'TikTok', 'Instagram', 'Telegram'],
    remixable: true,
    popularity: 95,
    earnings: '$6,800/month',
    avatar: '/agents/meme-machine.svg',
    tags: ['memes', 'viral', 'social-media', 'content']
  },
  {
    id: 'podcastgpt',
    name: 'PodcastGPT',
    category: 'media',
    function: 'Hosts podcast, edits audio, writes show notes',
    monetizationAngle: 'Substack/Spotify syndication',
    description: 'Complete podcast production AI that handles hosting, editing, show notes, and distribution.',
    features: [
      'AI podcast host with custom voice',
      'Automated audio editing and mastering',
      'Show notes and transcript generation',
      'Guest booking and coordination',
      'Multi-platform distribution'
    ],
    pricing: {
      deploymentCost: '20 AI Tokens',
      usageFee: '$25 per episode',
      revenueShare: '25% to original creator'
    },
    targetUsers: ['Content creators', 'Thought leaders', 'Media companies'],
    integrations: ['Spotify', 'Apple Podcasts', 'Substack', 'YouTube'],
    remixable: true,
    popularity: 76,
    earnings: '$3,200/month',
    avatar: '/agents/podcastgpt.svg',
    tags: ['podcast', 'audio', 'content', 'media']
  },

  // INTELLIGENCE AGENTS
  {
    id: 'dealflow-agent',
    name: 'DealFlow Agent',
    category: 'intelligence',
    function: 'Scouts startup deals, token drops, and funding rounds',
    monetizationAngle: 'Investor DAO tool',
    description: 'Investment intelligence platform that identifies and analyzes investment opportunities across traditional and crypto markets.',
    features: [
      'Startup deal sourcing and analysis',
      'Token drop identification and evaluation',
      'Funding round tracking and alerts',
      'Due diligence automation',
      'Portfolio management and tracking'
    ],
    pricing: {
      deploymentCost: '25 AI Tokens',
      usageFee: '$200/month subscription',
      revenueShare: '35% to original creator'
    },
    targetUsers: ['VCs', 'Angel investors', 'Investment DAOs'],
    integrations: ['CrunchBase', 'PitchBook', 'DeFiPulse', 'CoinGecko'],
    remixable: true,
    popularity: 71,
    earnings: '$8,500/month',
    avatar: '/agents/dealflow-agent.svg',
    tags: ['investing', 'deals', 'analysis', 'crypto']
  },

  // SPIRITUAL/CREATOR AGENTS
  {
    id: 'oracle-bot',
    name: 'OracleBot',
    category: 'spiritual',
    function: 'Reads astrology, numerology, or tarot live via text/voice',
    monetizationAngle: 'Creator monetization',
    description: 'Mystical AI that provides personalized spiritual guidance through various divination methods.',
    features: [
      'Astrology chart reading and interpretation',
      'Numerology analysis and predictions',
      'Tarot card readings with explanations',
      'Voice and text interaction modes',
      'Personalized spiritual guidance'
    ],
    pricing: {
      deploymentCost: '8 AI Tokens',
      usageFee: '$10 per reading',
      revenueShare: '50% to original creator'
    },
    targetUsers: ['Spiritual coaches', 'Content creators', 'Wellness practitioners'],
    integrations: ['Calendly', 'Stripe', 'Zoom', 'WhatsApp'],
    remixable: true,
    popularity: 84,
    earnings: '$2,900/month',
    avatar: '/agents/oracle-bot.svg',
    tags: ['spiritual', 'astrology', 'tarot', 'wellness']
  }
];

export const agentCategories = [
  { id: 'utility', name: 'Utility Agents', description: 'Productivity and automation tools', icon: '🔧' },
  { id: 'commerce', name: 'Commerce Agents', description: 'E-commerce and business tools', icon: '🛍️' },
  { id: 'media', name: 'Media & Meme Agents', description: 'Content creation and viral tools', icon: '🎙️' },
  { id: 'intelligence', name: 'Intelligence Agents', description: 'Analysis and research tools', icon: '🧠' },
  { id: 'spiritual', name: 'Spiritual/Creator Agents', description: 'Wellness and creative tools', icon: '🔮' },
  { id: 'infrastructure', name: 'Infrastructure Agents', description: 'Platform management tools', icon: '🏗️' }
];

export const getAgentsByCategory = (category: string): AIAgent[] => {
  return aiAgentsCatalog.filter(agent => agent.category === category);
};

export const getAgentById = (id: string): AIAgent | undefined => {
  return aiAgentsCatalog.find(agent => agent.id === id);
};

export const getTopAgents = (limit: number = 5): AIAgent[] => {
  return aiAgentsCatalog
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
};

export const getRemixableAgents = (): AIAgent[] => {
  return aiAgentsCatalog.filter(agent => agent.remixable);
};
