'use client';

import React, { Suspense, useMemo } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';

// Core components
import ImprovedHeroSection from '@/components/sections/ImprovedHeroSection';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import ScrollTriggeredCarousel from '@/components/ui/ScrollTriggeredCarousel';
import ParallaxDeck from '@/components/ui/ParallaxDeck';

// Import sections directly for better reliability
import IOSection from '@/components/sections/IOSection';
import AITokensITOSection from '@/components/sections/AITokensITOSection';
import ClaimHandleSection from '@/components/sections/ClaimHandleSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  // Memoized data structures for performance
  const coreProductsData = useMemo(() => [
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
  ], []);

  // Protocol Stack Parallax Data
  const protocolStackData = useMemo(() => [
    {
      id: 'ai-agents-goldmine',
      title: 'AI Agents: The Real Goldmine',
      description: 'Industry-specific AI agents that target overlooked verticals, unsolved problems, and underserved operators. Forget generic chatbots — this is where the deep money lives.',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-yellow-400 font-bold mb-3">🧠 STRATEGY:</h4>
            <p className="text-gray-300 text-sm mb-3">We focus on agents that solve real pain, not just chat.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Unserved industries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Cash flow problems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Manual labor bottlenecks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Specialized knowledge gaps</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏥</span>
              <div>
                <h5 className="text-blue-400 font-semibold">Health Intake Optimizer</h5>
                <p className="text-gray-400 text-sm">Auto-collects patient history, standardizes insurance data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🧾</span>
              <div>
                <h5 className="text-green-400 font-semibold">Solo Hustler TaxBot</h5>
                <p className="text-gray-400 text-sm">For creators, freelancers, crypto traders</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏘️</span>
              <div>
                <h5 className="text-purple-400 font-semibold">Follow-Up Fiend</h5>
                <p className="text-gray-400 text-sm">Real estate agents who suck at follow-up</p>
              </div>
            </div>
          </div>
        </div>
      ),
      media: {
        id: 'industry-agents-showcase',
        title: 'Industry-Specific Agents Showcase',
        description: 'Specialized AI agents working across healthcare, finance, real estate, and blue-collar industries',
        type: 'video' as const,
        category: 'agents' as const,
        priority: 'high' as const
      },
      gradient: 'from-yellow-600 to-orange-600'
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
  ], []);

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
