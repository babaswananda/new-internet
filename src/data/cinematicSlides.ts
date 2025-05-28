import { CinematicSlide } from '@/components/ui/CinematicHeroBanner';

export const homePageSlides: CinematicSlide[] = [
  {
    id: 'unified-ai-launch',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Placeholder - will be replaced with epic launch video
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
    title: 'Welcome to the New Map of the New Internet',
    subtitle: 'The Agentic Internet Has Arrived',
    description: 'Deploy, manage, and monetize AI agents across the decentralized web. Early access pricing available now.',
    cta: {
      primary: { text: '🚀 Start Free Trial', href: '/io' },
      secondary: { text: 'Read Whitepaper', href: 'https://whitepaper.newinternet' }
    },
    overlay: 'gradient',
    textPosition: 'center'
  },
  {
    id: 'generate-art',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', // Epic AI art generation montage
    poster: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop',
    title: '.GenerateArt',
    subtitle: 'Professional AI Art Generation',
    description: 'Replace Midjourney with our advanced AI art suite. Create stunning visuals with cinematic quality.',
    cta: {
      primary: { text: '🎨 Create Art Now', href: '/io' },
      secondary: { text: 'View Gallery', href: '/ai-agents' }
    },
    overlay: 'dark',
    textPosition: 'left'
  },
  {
    id: 'video-generator',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', // Mind-blowing video generation showcase
    poster: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1920&h=1080&fit=crop',
    title: '.VideoGenerator',
    subtitle: '4K AI Video Creation Suite',
    description: 'Replace RunwayML with our cutting-edge video generation technology. Create cinematic content at scale.',
    cta: {
      primary: { text: '🎬 Generate Videos', href: '/io' },
      secondary: { text: 'See Examples', href: '/documentation' }
    },
    overlay: 'gradient',
    textPosition: 'right'
  },
  {
    id: 'agent-deployment',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop', // Futuristic AI agent network visualization
    title: 'Deploy AI Agents',
    subtitle: 'Build the Future of Intelligence',
    description: 'Create, deploy, and monetize AI agents on the world\'s first sovereign AI operating system.',
    cta: {
      primary: { text: '🤖 Deploy Agent', href: '/ai-agents' },
      secondary: { text: 'Learn More', href: '/documentation' }
    },
    overlay: 'dark',
    textPosition: 'center'
  },
  {
    id: 'agentic-internet',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', // Epic vision of the future internet
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
    title: 'The Agentic Web',
    subtitle: 'Where Intelligence Meets Infrastructure',
    description: 'Join the revolution. Own your tools, run the system, become the intelligence.',
    cta: {
      primary: { text: '🌐 download.agentic', href: 'https://download.agentic' },
      secondary: { text: 'Join Waitlist', href: '/waitlist' }
    },
    overlay: 'gradient',
    textPosition: 'center'
  }
];

export const innerPageSlides = {
  io: [
    {
      id: 'io-dashboard',
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
      title: 'I.O. Dashboard',
      subtitle: 'Your Intelligent Operator Command Center',
      description: 'Control your AI empire from one unified interface. Deploy agents, generate content, manage your digital identity.',
      cta: {
        primary: { text: '🚀 Start Trial', href: '/io' },
        secondary: { text: 'View Features', href: '/documentation' }
      },
      overlay: 'dark',
      textPosition: 'left'
    }
  ],

  aiAgents: [
    {
      id: 'ai-agents-marketplace',
      type: 'video',
      src: '/media/hero-videos/ai-agents-marketplace.mp4',
      poster: '/media/hero-images/ai-agents-poster.jpg',
      title: 'AI Agents Marketplace',
      subtitle: 'Discover. Deploy. Monetize.',
      description: 'Browse thousands of AI agents ready to transform your business. From customer service to content creation.',
      cta: {
        primary: { text: '🤖 Browse Agents', href: '/ai-agents' },
        secondary: { text: 'Create Agent', href: '/io' }
      },
      overlay: 'gradient',
      textPosition: 'center'
    }
  ],

  documentation: [
    {
      id: 'documentation-hub',
      type: 'image',
      src: '/media/hero-images/documentation-hub.jpg',
      title: 'Documentation Hub',
      subtitle: 'Master the Agentic Internet',
      description: 'Comprehensive guides, tutorials, and API references to help you build the future.',
      cta: {
        primary: { text: '📚 Start Learning', href: '/documentation/platform-overview' },
        secondary: { text: 'API Reference', href: '/documentation/api-reference' }
      },
      overlay: 'dark',
      textPosition: 'left'
    }
  ],

  about: [
    {
      id: 'about-vision',
      type: 'video',
      src: '/media/hero-videos/unified-ai-vision.mp4',
      poster: '/media/hero-images/about-vision-poster.jpg',
      title: 'Our Vision',
      subtitle: 'Building the Infrastructure of Intelligence',
      description: 'We\'re not just building a platform. We\'re architecting the future of human-AI collaboration.',
      cta: {
        primary: { text: '🌟 Join Mission', href: '/team' },
        secondary: { text: 'Read Story', href: '/press' }
      },
      overlay: 'gradient',
      textPosition: 'center'
    }
  ]
};

// Placeholder media paths - these will be replaced with actual cinematic content
export const placeholderMedia = {
  videos: {
    'unified-ai-launch': 'https://player.vimeo.com/external/placeholder-launch.mp4',
    'generate-art-showcase': 'https://player.vimeo.com/external/placeholder-art.mp4',
    'video-generator-demo': 'https://player.vimeo.com/external/placeholder-video.mp4',
    'agentic-internet-vision': 'https://player.vimeo.com/external/placeholder-vision.mp4',
    'io-dashboard-tour': 'https://player.vimeo.com/external/placeholder-dashboard.mp4',
    'ai-agents-marketplace': 'https://player.vimeo.com/external/placeholder-agents.mp4',
    'unified-ai-vision': 'https://player.vimeo.com/external/placeholder-about.mp4'
  },
  images: {
    'unified-ai-launch-poster': '/api/placeholder/1920/1080?text=Unified+AI+Launch',
    'generate-art-poster': '/api/placeholder/1920/1080?text=Generate+Art',
    'video-generator-poster': '/api/placeholder/1920/1080?text=Video+Generator',
    'agentic-internet-poster': '/api/placeholder/1920/1080?text=Agentic+Internet',
    'agent-deployment-epic': '/api/placeholder/1920/1080?text=AI+Agent+Deployment',
    'io-dashboard-poster': '/api/placeholder/1920/1080?text=IO+Dashboard',
    'ai-agents-poster': '/api/placeholder/1920/1080?text=AI+Agents+Marketplace',
    'documentation-hub': '/api/placeholder/1920/1080?text=Documentation+Hub',
    'about-vision-poster': '/api/placeholder/1920/1080?text=Our+Vision'
  }
};
