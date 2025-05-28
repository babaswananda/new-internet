// 🧠 IO - INTELLIGENT OPERATOR LAUNCH PASS
// Hybrid Subscription + Investment Model - Stake in the Future AI Economy

export interface IOPlan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  badge?: string;
  description: string;
  features: string[];
  limits: {
    chat: string;
    artGenerations: string;
    videoMinutes: string;
    agents: string;
    vaults: string;
  };
  replacedServices: {
    service: string;
    typicalPrice: string;
    included: boolean;
  }[];
  powerUps?: {
    name: string;
    price: string;
    description: string;
  }[];
  // NEW: Launch Pass Features
  tokenAllocation?: {
    aiTokens: number;
    utilityCoin: number;
  };
  vaultAccess?: 'none' | 'limited' | 'standard' | 'high-yield';
  roiPath?: string;
  perks?: string[];
  isLaunchPass?: boolean;
}

// 🚀 INTELLIGENT OPERATOR LAUNCH PASS - Hybrid Subscription + Investment Model
export interface LaunchPass {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  badge?: string;
  description: string;
  tokenAllocation: {
    aiTokens: number;
    utilityCoin: number;
  };
  vaultAccess: 'none' | 'limited' | 'standard' | 'high-yield';
  roiPath: string;
  perks: string[];
  features: string[];
  addOns?: {
    name: string;
    price: number;
    description: string;
  }[];
}

export const launchPasses: LaunchPass[] = [
  {
    id: 'starter-operator',
    name: 'Starter Operator',
    price: 20,
    period: 'monthly',
    badge: 'Entry Level',
    description: 'Lock in your operator seat with embedded token stake and lifetime pricing',
    tokenAllocation: {
      aiTokens: 500,
      utilityCoin: 0
    },
    vaultAccess: 'limited',
    roiPath: 'Use tokens, unlock tools, price lock protection',
    perks: [
      '🔒 Lifetime pricing lock — never pay more',
      '🎯 Reserved domain handle (you.aichatbot)',
      '📋 Genesis Ledger listing',
      '🚀 Early access to all product drops'
    ],
    features: [
      '🧠 Full conversational agent access',
      '🎨 AI art generation platform',
      '🎬 Basic video generation',
      '🛠️ Browser-native command-line UI',
      '🔐 Token integration and staking',
      '🌐 Agent deployment access'
    ],
    addOns: [
      { name: 'Meme Coin Credits', price: 25, description: '2 early meme coin allocations' },
      { name: 'Vault Premium', price: 50, description: 'Yield on UtilityCoin holdings' }
    ]
  },
  {
    id: 'builder-operator',
    name: 'Builder Operator',
    price: 200,
    period: 'yearly',
    badge: 'Most Popular',
    description: 'Annual commitment with serious token allocation and vault access',
    tokenAllocation: {
      aiTokens: 2500,
      utilityCoin: 1000
    },
    vaultAccess: 'standard',
    roiPath: 'Stake + earn from vault, token appreciation, resale rights',
    perks: [
      '🔒 Lifetime pricing lock — never pay more',
      '🎯 Premium handle reservation',
      '📋 Genesis Ledger VIP listing',
      '🎭 Access to meme coin drops',
      '💰 Vault staking rewards',
      '🔄 Token resale rights'
    ],
    features: [
      '🧠 Unlimited conversational intelligence',
      '🎨 Advanced AI art generation (30/month)',
      '🎬 HD video generation (10/month)',
      '🛠️ Full command-line access',
      '🔐 Complete vault access',
      '🌐 Unlimited agent deployment',
      '🔄 Agent remixing and forking',
      '💰 Revenue sharing protocols'
    ],
    addOns: [
      { name: 'White-Label Rights', price: 100, description: 'Resell agent access + royalty split' },
      { name: 'Launchpad Priority', price: 75, description: 'Early access to all token launches' }
    ]
  },
  {
    id: 'founding-operator',
    name: 'Founding Operator',
    price: 500,
    period: 'yearly',
    badge: 'Genesis',
    description: 'Maximum stake in the protocol with founding-level benefits and ROI exposure',
    tokenAllocation: {
      aiTokens: 10000,
      utilityCoin: 5000
    },
    vaultAccess: 'high-yield',
    roiPath: 'Stake, flip, royalties, protocol profit sharing, resale rights',
    perks: [
      '🔒 Lifetime pricing lock — never pay more',
      '🎯 Custom handle creation rights',
      '📋 Genesis Ledger founder status',
      '🎭 Exclusive meme coin allocations',
      '💰 High-yield vault access',
      '🔄 Full token resale rights',
      '👑 Protocol governance participation',
      '🚀 Early launchpad drops',
      '💎 Future vault + protocol profit exposure'
    ],
    features: [
      '🧠 Unlimited conversational intelligence',
      '🎨 Professional AI art generation (100/month)',
      '🎬 4K video generation (30/month)',
      '🛠️ Advanced command-line tools',
      '🔐 Unlimited vault access',
      '🌐 Enterprise agent deployment',
      '🔄 Advanced agent remixing',
      '💰 Full revenue optimization',
      '🎭 Meme coin generation tools',
      '🤖 White-label intelligence',
      '📊 Advanced analytics dashboard'
    ],
    addOns: [
      { name: 'Protocol Governance', price: 200, description: 'Voting rights on major protocol decisions' },
      { name: 'Revenue Share Boost', price: 150, description: 'Additional 2% protocol revenue share' }
    ]
  }
];

export const ioPlans: IOPlan[] = [
  {
    id: 'starter-operator',
    name: 'Starter Operator',
    price: 20,
    period: 'monthly',
    badge: 'Entry Level',
    description: 'Lock in your operator seat with embedded token stake and lifetime pricing',
    isLaunchPass: true,
    tokenAllocation: {
      aiTokens: 500,
      utilityCoin: 0
    },
    vaultAccess: 'limited',
    roiPath: 'Use tokens, unlock tools, price lock protection',
    perks: [
      '🔒 Lifetime pricing lock — never pay more',
      '🎯 Reserved domain handle (you.aichatbot)',
      '📋 Genesis Ledger listing',
      '🚀 Early access to all product drops'
    ],
    features: [
      '🧠 Full conversational agent access',
      '🎨 AI art generation platform',
      '🎬 Basic video generation',
      '🛠️ Browser-native command-line UI',
      '🔐 Token integration and staking',
      '🌐 Agent deployment access'
    ],
    limits: {
      chat: 'Unlimited conversations',
      artGenerations: '10 artworks/month',
      videoMinutes: '3 videos/month',
      agents: '2 deployed agents',
      vaults: '1 monetization vault'
    },
    replacedServices: [
      { service: 'ChatGPT Plus', typicalPrice: '$20', included: true },
      { service: 'Basic AI Tools', typicalPrice: '$10-30', included: true },
      { service: 'Simple Automation', typicalPrice: '$15', included: true }
    ],
    powerUps: [
      { name: 'Meme Coin Credits', price: '$25', description: '2 early meme coin allocations' },
      { name: 'Vault Premium', price: '$50', description: 'Yield on UtilityCoin holdings' }
    ]
  },
  {
    id: 'builder-operator',
    name: 'Builder Operator',
    price: 200,
    period: 'yearly',
    badge: 'Most Popular',
    description: 'Annual commitment with serious token allocation and vault access',
    isLaunchPass: true,
    tokenAllocation: {
      aiTokens: 2500,
      utilityCoin: 1000
    },
    vaultAccess: 'standard',
    roiPath: 'Stake + earn from vault, token appreciation, resale rights',
    perks: [
      '🔒 Lifetime pricing lock — never pay more',
      '🎯 Premium handle reservation',
      '📋 Genesis Ledger VIP listing',
      '🎭 Access to meme coin drops',
      '💰 Vault staking rewards',
      '🔄 Token resale rights'
    ],
    features: [
      '🧠 Unlimited conversational intelligence',
      '🎨 Advanced AI art generation',
      '🎬 HD video generation suite',
      '🛠️ Full command-line access',
      '🔐 Complete vault access',
      '🌐 Unlimited agent deployment',
      '🔄 Agent remixing and forking',
      '💰 Revenue sharing protocols'
    ],
    limits: {
      chat: 'Unlimited conversations',
      artGenerations: '30 artworks/month',
      videoMinutes: '10 HD videos/month',
      agents: '10 deployed agents',
      vaults: '5 monetization vaults'
    },
    replacedServices: [
      { service: 'ChatGPT Plus', typicalPrice: '$20', included: true },
      { service: 'Midjourney', typicalPrice: '$10-30', included: true },
      { service: 'RunwayML', typicalPrice: '$15-40', included: true },
      { service: 'Zapier Pro', typicalPrice: '$20-50', included: true }
    ],
    powerUps: [
      { name: 'Additional Video Minutes', price: '$10/30min', description: 'For high-frequency creators' },
      { name: 'Monetization Vault', price: '10 UtilityCoin', description: 'Add your coin/token for paid access' }
    ]
  },
  {
    id: 'founding-operator',
    name: 'Founding Operator',
    price: 500,
    period: 'yearly',
    badge: 'Genesis',
    description: 'Maximum stake in the protocol with founding-level benefits and ROI exposure',
    isLaunchPass: true,
    tokenAllocation: {
      aiTokens: 10000,
      utilityCoin: 5000
    },
    vaultAccess: 'high-yield',
    roiPath: 'Stake, flip, royalties, protocol profit sharing, resale rights',
    perks: [
      '🔒 Lifetime pricing lock — never pay more',
      '🎯 Custom handle creation rights',
      '📋 Genesis Ledger founder status',
      '🎭 Exclusive meme coin allocations',
      '💰 High-yield vault access',
      '🔄 Full token resale rights',
      '👑 Protocol governance participation',
      '🚀 Early launchpad drops',
      '💎 Future vault + protocol profit exposure'
    ],
    features: [
      '🧠 Unlimited conversational intelligence',
      '🎨 Professional AI art generation',
      '🎬 4K video generation suite',
      '🛠️ Advanced command-line tools',
      '🔐 Unlimited vault access',
      '🌐 Enterprise agent deployment',
      '🔄 Advanced agent remixing',
      '💰 Full revenue optimization',
      '🎭 Meme coin generation tools',
      '🤖 White-label intelligence',
      '📊 Advanced analytics dashboard'
    ],
    limits: {
      chat: 'Unlimited conversations',
      artGenerations: '100 artworks/month',
      videoMinutes: '30 4K videos/month',
      agents: 'Unlimited deployed agents',
      vaults: 'Unlimited monetization vaults'
    },
    replacedServices: [
      { service: 'ChatGPT Plus', typicalPrice: '$20', included: true },
      { service: 'Midjourney Pro', typicalPrice: '$30', included: true },
      { service: 'RunwayML Pro', typicalPrice: '$40+', included: true },
      { service: 'Zapier Teams', typicalPrice: '$100+', included: true },
      { service: 'AI Dev Tools', typicalPrice: '$1000+', included: true }
    ],
    powerUps: [
      { name: 'White-Labeled Intelligence', price: 'Custom', description: 'Build your own operator UI & agent stack' },
      { name: 'Enterprise API Access', price: 'Custom', description: 'Full API access for custom integrations' }
    ]
  },
  {
    id: 'io-handle-owner',
    name: 'IO Handle Owner',
    price: 0,
    period: 'monthly',
    badge: 'Included',
    description: 'Free with any Handle account - all Builder-level features included',
    features: [
      '🧠 Unlimited conversational intelligence',
      '🎨 Advanced AI art generation',
      '🎬 HD video generation suite',
      '🛠️ Full command-line access',
      '🔐 Complete vault access',
      '🌐 Handle-based deployment',
      '🔄 Agent remixing and forking',
      '💰 Revenue sharing protocols',
      '🏛️ Sovereign identity integration'
    ],
    limits: {
      chat: 'Unlimited conversations',
      artGenerations: '30 artworks/month',
      videoMinutes: '10 HD videos/month',
      agents: '10 deployed agents',
      vaults: '5 monetization vaults'
    },
    replacedServices: [
      { service: 'ChatGPT Plus', typicalPrice: '$20', included: true },
      { service: 'Midjourney', typicalPrice: '$10-30', included: true },
      { service: 'RunwayML', typicalPrice: '$15-40', included: true },
      { service: 'Zapier Pro', typicalPrice: '$20-50', included: true },
      { service: 'Domain + Hosting', typicalPrice: '$10-20', included: true }
    ]
  }
];

export const ioFeatures = {
  core: [
    {
      name: 'Unified Chat',
      description: 'Full conversational agent access replacing ChatGPT Plus',
      icon: '🧠'
    },
    {
      name: '.GenerateArt',
      description: 'AI image creation platform replacing Midjourney',
      icon: '🎨'
    },
    {
      name: '.VideoGenerator',
      description: 'Command-based video generation replacing RunwayML',
      icon: '🎬'
    },
    {
      name: 'Command-Line UI',
      description: 'Browser-native control with no install needed',
      icon: '🛠️'
    },
    {
      name: 'Token Integration',
      description: 'Monetization vaults and AI remixing capabilities',
      icon: '🔐'
    },
    {
      name: 'Web-Native Deployment',
      description: 'Deploy agents, chatbots, and tools instantly',
      icon: '🌐'
    }
  ],
  differentiators: [
    {
      title: 'Browser-Native AI Tools',
      description: 'No logins, no fluff - just pure AI power in your browser',
      benefit: 'Instant access without app switching'
    },
    {
      title: 'Own Your Output',
      description: 'Mint it, vault it, resell it - full ownership of AI creations',
      benefit: 'Monetize everything you create'
    },
    {
      title: 'Fork Your Agents',
      description: 'Remix and redeploy any agent for your specific needs',
      benefit: 'Infinite customization possibilities'
    },
    {
      title: 'Replace Your Stack',
      description: '1 subscription = total control over your AI workflow',
      benefit: 'Save hundreds per month on subscriptions'
    }
  ]
};

export const targetUsers = [
  {
    type: 'Solo Operators',
    benefit: 'AI assistant + generative stack for content, code, business',
    useCase: 'Replace entire subscription stack with one powerful platform'
  },
  {
    type: 'Creators',
    benefit: 'Tokenized community, content vaults, media drops',
    useCase: 'Monetize AI-generated content and build token-gated communities'
  },
  {
    type: 'Founders',
    benefit: 'Launch agents, automate workflows, monetize traffic',
    useCase: 'Build AI-native businesses without technical overhead'
  },
  {
    type: 'Investors',
    benefit: 'White-label your vaults + token-gated intelligence hubs',
    useCase: 'Create investment-focused AI tools and communities'
  }
];

export const getPlanById = (id: string): IOPlan | undefined => {
  return ioPlans.find(plan => plan.id === id);
};

export const calculateSavings = (plan: IOPlan): number => {
  const totalReplaced = plan.replacedServices
    .filter(service => service.included)
    .reduce((sum, service) => {
      const price = parseInt(service.typicalPrice.replace(/[^0-9]/g, ''));
      return sum + price;
    }, 0);

  return totalReplaced - plan.price;
};
