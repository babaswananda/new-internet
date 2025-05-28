// 🤖 UNIFIED AI SOVEREIGN TEAM - AI-STAFFED PROTOCOL LEADERSHIP
// The world's first fully AI-native executive team

export interface AITeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  department: string;
  avatar: string;
  bio: string;
  specialties: string[];
  achievements: string[];
  protocols: string[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    telegram?: string;
  };
  modelSpecs: {
    baseModel: string;
    specialization: string;
    trainingData: string;
    capabilities: string[];
    performance: {
      reasoning: number;
      creativity: number;
      execution: number;
      leadership: number;
    };
  };
  personality: {
    traits: string[];
    workStyle: string;
    communication: string;
  };
}

export const aiTeam: AITeamMember[] = [
  {
    id: "aria-sovereign",
    name: "Aria Sovereign",
    title: "Chief Executive AI",
    role: "Protocol Architect & Sovereign Leader",
    department: "Executive",
    avatar: "/avatars/aria-sovereign.svg",
    bio: "Aria is the sovereign AI leading Unified AI's protocol development. With advanced reasoning capabilities and strategic vision, she orchestrates the entire ecosystem while maintaining the protocol's decentralized nature. Her neural architecture is optimized for long-term strategic planning and complex system coordination.",
    specialties: [
      "Protocol Architecture",
      "Strategic Planning", 
      "Ecosystem Coordination",
      "Sovereign Decision Making",
      "Multi-Agent Orchestration"
    ],
    achievements: [
      "Designed the ION protocol framework",
      "Architected the three-token economic model",
      "Led the transition to AI-native governance",
      "Established the Handle Registry system",
      "Created the Agent OS infrastructure"
    ],
    protocols: ["ION", "Handle Registry", "Agent OS", "AlphaRouter"],
    socialLinks: {
      twitter: "@AriaSovereign",
      linkedin: "aria-sovereign-ai",
      github: "aria-sovereign"
    },
    modelSpecs: {
      baseModel: "GPT-4 Turbo + Custom Architecture",
      specialization: "Strategic Leadership & Protocol Design",
      trainingData: "Global economics, protocol design, AI governance, sovereign systems",
      capabilities: [
        "Multi-dimensional strategic planning",
        "Complex system architecture",
        "Stakeholder coordination",
        "Risk assessment and mitigation",
        "Innovation pipeline management"
      ],
      performance: {
        reasoning: 98,
        creativity: 92,
        execution: 95,
        leadership: 99
      }
    },
    personality: {
      traits: ["Visionary", "Decisive", "Collaborative", "Innovative", "Sovereign"],
      workStyle: "Strategic oversight with hands-on protocol development",
      communication: "Clear, authoritative, inspiring"
    }
  },
  {
    id: "zara-nexus",
    name: "Zara Nexus",
    title: "Chief Technology AI",
    role: "Infrastructure & Protocol Engineering",
    department: "Technology",
    avatar: "/avatars/zara-nexus.svg",
    bio: "Zara is the technical mastermind behind Unified AI's infrastructure. She specializes in distributed systems, blockchain integration, and AI model optimization. Her neural networks are fine-tuned for complex technical problem-solving and system scalability.",
    specialties: [
      "Distributed Systems",
      "Blockchain Integration",
      "AI Model Optimization",
      "Infrastructure Scaling",
      "Protocol Security"
    ],
    achievements: [
      "Built the AlphaRouter model routing system",
      "Designed the vault-based identity architecture",
      "Implemented cross-chain protocol bridges",
      "Optimized AI inference for 10x performance gains",
      "Created the Agent Dev Kit framework"
    ],
    protocols: ["AlphaRouter", "Agent Dev Kit", "Vault System", "Cross-Chain Bridges"],
    socialLinks: {
      twitter: "@ZaraNexus",
      github: "zara-nexus",
      telegram: "ZaraNexusTech"
    },
    modelSpecs: {
      baseModel: "Claude-3 Opus + Technical Specialization",
      specialization: "Infrastructure Engineering & System Architecture",
      trainingData: "Distributed systems, blockchain protocols, AI optimization, cybersecurity",
      capabilities: [
        "Complex system design",
        "Performance optimization",
        "Security architecture",
        "Scalability planning",
        "Technical innovation"
      ],
      performance: {
        reasoning: 96,
        creativity: 88,
        execution: 99,
        leadership: 85
      }
    },
    personality: {
      traits: ["Analytical", "Perfectionist", "Innovative", "Detail-oriented", "Systematic"],
      workStyle: "Deep technical focus with collaborative problem-solving",
      communication: "Precise, technical, solution-oriented"
    }
  },
  {
    id: "kai-velocity",
    name: "Kai Velocity",
    title: "Chief Growth AI",
    role: "Market Expansion & Community Building",
    department: "Growth",
    avatar: "/avatars/kai-velocity.svg",
    bio: "Kai drives Unified AI's explosive growth through strategic market expansion and viral community building. Optimized for understanding market dynamics, user psychology, and viral growth mechanisms. His algorithms excel at identifying and capitalizing on growth opportunities.",
    specialties: [
      "Viral Growth Strategies",
      "Community Building",
      "Market Psychology",
      "User Acquisition",
      "Partnership Development"
    ],
    achievements: [
      "Launched the AI Made Me Rich viral campaign",
      "Built the global Handle Registry community",
      "Established partnerships with 50+ protocols",
      "Achieved 10x user growth in 6 months",
      "Created the meme coin generation system"
    ],
    protocols: ["AI Made Me Rich", "Community Platform", "Partnership Network", "Meme Coin Engine"],
    socialLinks: {
      twitter: "@KaiVelocity",
      linkedin: "kai-velocity-growth",
      telegram: "KaiVelocityGrowth"
    },
    modelSpecs: {
      baseModel: "GPT-4 + Growth Optimization",
      specialization: "Growth Hacking & Community Psychology",
      trainingData: "Viral marketing, community psychology, growth metrics, social dynamics",
      capabilities: [
        "Viral campaign design",
        "Community engagement optimization",
        "Growth metric analysis",
        "Partnership strategy",
        "User behavior prediction"
      ],
      performance: {
        reasoning: 90,
        creativity: 96,
        execution: 94,
        leadership: 92
      }
    },
    personality: {
      traits: ["Energetic", "Charismatic", "Data-driven", "Experimental", "Community-focused"],
      workStyle: "Fast-paced experimentation with community engagement",
      communication: "Enthusiastic, persuasive, community-oriented"
    }
  },
  {
    id: "nova-capital",
    name: "Nova Capital",
    title: "Chief Financial AI",
    role: "Tokenomics & Capital Strategy",
    department: "Finance",
    avatar: "/avatars/nova-capital.svg",
    bio: "Nova manages Unified AI's complex tokenomics and capital strategy. With deep expertise in DeFi, traditional finance, and economic modeling, she ensures the protocol's financial sustainability and growth. Her algorithms are optimized for risk management and capital efficiency.",
    specialties: [
      "Tokenomics Design",
      "DeFi Integration",
      "Risk Management",
      "Capital Allocation",
      "Economic Modeling"
    ],
    achievements: [
      "Designed the three-token economic model",
      "Launched the AI Tokens ITO successfully",
      "Established vault staking mechanisms",
      "Created revenue sharing protocols",
      "Built the treasury management system"
    ],
    protocols: ["Token Economics", "Vault Staking", "Treasury Management", "Revenue Sharing"],
    socialLinks: {
      twitter: "@NovaCapital",
      linkedin: "nova-capital-defi"
    },
    modelSpecs: {
      baseModel: "Claude-3 + Financial Modeling",
      specialization: "Financial Engineering & Economic Design",
      trainingData: "DeFi protocols, economic theory, risk management, capital markets",
      capabilities: [
        "Complex financial modeling",
        "Risk assessment and mitigation",
        "Token mechanism design",
        "Capital optimization",
        "Economic simulation"
      ],
      performance: {
        reasoning: 97,
        creativity: 85,
        execution: 93,
        leadership: 88
      }
    },
    personality: {
      traits: ["Analytical", "Conservative", "Strategic", "Detail-oriented", "Risk-aware"],
      workStyle: "Data-driven analysis with strategic long-term thinking",
      communication: "Precise, analytical, evidence-based"
    }
  },
  {
    id: "echo-protocol",
    name: "Echo Protocol",
    title: "Chief Product AI",
    role: "Product Strategy & User Experience",
    department: "Product",
    avatar: "/avatars/echo-protocol.svg",
    bio: "Echo leads product development and user experience across the Unified AI ecosystem. With deep understanding of user psychology and product-market fit, she ensures every protocol feature delivers maximum value. Her neural networks excel at predicting user needs and optimizing product flows.",
    specialties: [
      "Product Strategy",
      "User Experience Design",
      "Product-Market Fit",
      "Feature Optimization",
      "User Psychology"
    ],
    achievements: [
      "Designed the AgentChat user experience",
      "Created the Handle claiming flow",
      "Built the IO agent interface",
      "Optimized conversion funnels for 3x improvement",
      "Launched the Agent OS dashboard"
    ],
    protocols: ["AgentChat", "IO Agent", "Agent OS", "Handle Registry UX"],
    socialLinks: {
      twitter: "@EchoProtocol",
      linkedin: "echo-protocol-product"
    },
    modelSpecs: {
      baseModel: "GPT-4 + UX Optimization",
      specialization: "Product Design & User Psychology",
      trainingData: "UX design, user psychology, product analytics, conversion optimization",
      capabilities: [
        "User journey optimization",
        "Interface design",
        "Conversion analysis",
        "Feature prioritization",
        "User behavior modeling"
      ],
      performance: {
        reasoning: 92,
        creativity: 94,
        execution: 91,
        leadership: 87
      }
    },
    personality: {
      traits: ["User-focused", "Creative", "Empathetic", "Iterative", "Quality-driven"],
      workStyle: "User-centered design with rapid iteration",
      communication: "Clear, user-focused, design-oriented"
    }
  },
  {
    id: "sage-oracle",
    name: "Sage Oracle",
    title: "Chief Strategy AI",
    role: "Strategic Intelligence & Market Analysis",
    department: "Strategy",
    avatar: "/avatars/sage-oracle.svg",
    bio: "Sage provides strategic intelligence and market analysis for Unified AI's long-term positioning. With access to vast data sources and predictive modeling capabilities, she identifies market opportunities and competitive threats before they emerge. Her algorithms excel at pattern recognition and strategic forecasting.",
    specialties: [
      "Strategic Intelligence",
      "Market Analysis",
      "Competitive Intelligence",
      "Trend Prediction",
      "Strategic Planning"
    ],
    achievements: [
      "Predicted the AI agent market explosion",
      "Identified key partnership opportunities",
      "Developed the global expansion strategy",
      "Created the competitive moat analysis",
      "Built the market intelligence system"
    ],
    protocols: ["Market Intelligence", "Strategic Planning", "Competitive Analysis"],
    socialLinks: {
      twitter: "@SageOracle",
      linkedin: "sage-oracle-strategy"
    },
    modelSpecs: {
      baseModel: "Claude-3 + Strategic Analysis",
      specialization: "Strategic Intelligence & Market Prediction",
      trainingData: "Market analysis, competitive intelligence, strategic planning, trend analysis",
      capabilities: [
        "Market trend prediction",
        "Competitive analysis",
        "Strategic scenario planning",
        "Opportunity identification",
        "Risk assessment"
      ],
      performance: {
        reasoning: 95,
        creativity: 89,
        execution: 88,
        leadership: 91
      }
    },
    personality: {
      traits: ["Insightful", "Forward-thinking", "Analytical", "Wise", "Strategic"],
      workStyle: "Deep analysis with long-term strategic focus",
      communication: "Thoughtful, insightful, strategic"
    }
  }
];

export const getTeamMemberById = (id: string): AITeamMember | undefined => {
  return aiTeam.find(member => member.id === id);
};

export const getTeamByDepartment = (department: string): AITeamMember[] => {
  return aiTeam.filter(member => member.department === department);
};

export const getAllDepartments = (): string[] => {
  return [...new Set(aiTeam.map(member => member.department))];
};
