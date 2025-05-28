'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';

// Core components
import ImprovedHeroSection from '@/components/sections/ImprovedHeroSection';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import ScrollTriggeredCarousel from '@/components/ui/ScrollTriggeredCarousel';
import ParallaxDeck from '@/components/ui/ParallaxDeck';

// Dynamically import sections for performance
const IOSection = dynamic(() => import('@/components/sections/IOSection'), { ssr: false });
const AITokensITOSection = dynamic(() => import('@/components/sections/AITokensITOSection'), { ssr: false });
const ClaimHandleSection = dynamic(() => import('@/components/sections/ClaimHandleSection'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/sections/NewsletterSection'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: false });

export default function Home() {
  // Core Products Carousel Data
  const coreProductsData = [
    {
      id: 'io-operator',
      title: 'IO: Your Intelligent Operator',
      description: 'The central AI that manages your entire digital ecosystem. Deploy agents, manage vaults, and orchestrate your presence in the Agentic Internet.',
      component: <IOSection />,
      media: {
        id: 'io-dashboard',
        title: 'IO Dashboard Visualization',
        description: 'Interactive dashboard showing IO managing multiple AI agents and protocols',
        type: 'video' as const,
        category: 'products' as const,
        priority: 'high' as const
      }
    },
    {
      id: 'ai-tokens-ito',
      title: 'AI Tokens ITO',
      description: 'Join the official token offering. Get AI Tokens, UtilityCoin, and early access to the protocol economy with exclusive benefits.',
      component: <AITokensITOSection />,
      media: {
        id: 'ito-countdown',
        title: 'AI Tokens ITO Countdown',
        description: 'Urgency visualization with particle effects and token allocation display',
        type: 'video' as const,
        category: 'tokens' as const,
        priority: 'high' as const
      }
    }
  ];

  // Protocol Stack Parallax Data
  const protocolStackData = [
    {
      id: 'agentchat',
      title: 'AgentChat: The AI Superapp',
      description: 'Deploy, manage, and monetize AI agents through an intuitive chat interface. Your gateway to the Agentic Internet.',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Deploy AI agents instantly</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300">Monetize through conversations</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-gray-300">Integrate with any platform</span>
          </div>
        </div>
      ),
      media: {
        id: 'agentchat-demo',
        title: 'AgentChat Interface Demo',
        description: 'Interactive chat interface showing agent deployment and management',
        type: 'video' as const,
        category: 'agents' as const,
        priority: 'high' as const
      },
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'alpharouter',
      title: 'AlphaRouter: Intelligence Routing',
      description: 'Automatically route requests to the best AI models and agents. Optimize performance, cost, and results across the entire AI ecosystem.',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Smart model selection</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-300">Cost optimization</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-300">Performance monitoring</span>
          </div>
        </div>
      ),
      media: {
        id: 'alpharouter-flow',
        title: 'AlphaRouter Flow Visualization',
        description: 'Data flow showing intelligent routing between AI models and agents',
        type: 'animation' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'ion-network',
      title: 'ION: Intelligent Ontology Network',
      description: 'The semantic backbone that connects all AI agents and protocols. Create intelligent relationships and enable autonomous collaboration.',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300">Semantic relationships</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-gray-300">Agent collaboration</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Knowledge graphs</span>
          </div>
        </div>
      ),
      media: {
        id: 'ion-network-viz',
        title: 'ION Network Visualization',
        description: 'Interconnected nodes showing semantic relationships and data flows',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-purple-600 to-violet-600'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section with Cinematic Background */}
      <div className="relative">
        <SpaceParticlesBackground particleCount={300} color="purple" speed="slow" depth={true} interactive={true} />
        <ImprovedHeroSection />
      </div>

      {/* Core Products Carousel */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="blue" speed="medium" depth={true} interactive={true} />
          <ScrollTriggeredCarousel
            items={coreProductsData}
            title="Core Products"
            subtitle="The foundation of your Agentic Internet experience"
            autoAdvance={true}
            showProgress={true}
          />
        </div>
      </Suspense>

      {/* Protocol Stack Parallax Deck */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="mixed" speed="slow" depth={true} interactive={true} />
          <ParallaxDeck
            cards={protocolStackData}
            title="Protocol Stack"
            subtitle="The intelligent infrastructure powering the new internet"
          />
        </div>
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="purple" speed="medium" depth={true} interactive={true} />
          <NewsletterSection />
        </div>
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="cyan" speed="slow" depth={true} interactive={true} />
          <FAQSection />
        </div>
      </Suspense>

      {/* Final CTA */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="mixed" speed="slow" depth={true} interactive={true} />
          <ClaimHandleSection />
        </div>
      </Suspense>
    </MainLayout>
  );
}
