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
import CoreProductsSlide from '@/components/sections/CoreProductsSlide';
import ProtocolStackSlide from '@/components/sections/ProtocolStackSlide';
import ClaimHandleSection from '@/components/sections/ClaimHandleSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import CinematicHeroBanner from '@/components/ui/CinematicHeroBanner';
import { homePageSlides } from '@/data/cinematicSlides';
import RotatingProductShowcase from '@/components/ui/RotatingProductShowcase';

export default function Home() {
  // Memoized data structures for performance optimization
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
      {/* Cinematic Hero Banner */}
      <CinematicHeroBanner
        slides={homePageSlides}
        autoPlay={true}
        autoPlayInterval={10000}
        height="100vh"
        showControls={true}
        showIndicators={true}
        enableParallax={true}
      />

      {/* Rotating Product Showcase - Flash Billboard */}
      <RotatingProductShowcase />

      {/* IO Section - Amazing Visuals */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={250} color="purple" speed="slow" depth={true} interactive={true} />
          <IOSection />
        </div>
      </Suspense>

      {/* Built On Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-400 leading-relaxed">
              Built on revolutionary AI infrastructure that powers the next generation of intelligent applications,
              from autonomous agents to real-time model routing, creating a unified ecosystem where AI works seamlessly together.
            </p>
          </div>
        </div>
      </Suspense>

      {/* Core Products Slide - POW! */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <CoreProductsSlide />
      </Suspense>

      {/* Protocol Stack Slide - POW! */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <ProtocolStackSlide />
      </Suspense>

      {/* AI Marketplace Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="purple" speed="medium" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">AI Marketplace</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                The new creator economy where AI agents are bought, sold, and deployed across industries
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-white mb-3">Deploy Agents</h3>
                  <p className="text-gray-300">Launch intelligent agents across various business functions</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-white mb-3">Monetize Intelligence</h3>
                  <p className="text-gray-300">Create revenue streams from your AI agent creations</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-white mb-3">Remix & Fork</h3>
                  <p className="text-gray-300">Build upon existing agents with collaborative development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* AI Directory Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="cyan" speed="medium" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">AI Directory</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Discover and access the world's largest collection of AI tools, agents, and services
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["🔍 Search & Discovery", "⭐ Ratings & Reviews", "🏷️ Smart Categories", "🔗 Easy Integration"].map((feature, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                    <p className="text-white font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Handle Registry Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={160} color="cyan" speed="slow" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Handle Registry</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Secure your digital identity with protocol-native handles for the Agentic Internet
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🆔</div>
                  <h3 className="text-xl font-bold text-white mb-3">Universal Identity</h3>
                  <p className="text-gray-300">One handle across all AI platforms and services</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🔐</div>
                  <h3 className="text-xl font-bold text-white mb-3">Cryptographically Secured</h3>
                  <p className="text-gray-300">Your identity is protected by advanced cryptography</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-white mb-3">Valuable Asset</h3>
                  <p className="text-gray-300">Handles appreciate in value as the network grows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Hardware Pre-order Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={140} color="purple" speed="medium" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Hardware Pre-order</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Next-generation AI hardware devices designed for the Agentic Internet
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: ".AIPhone", icon: "📱", desc: "AI-native smartphone" },
                  { name: ".AIPods", icon: "🎧", desc: "Intelligent audio devices" },
                  { name: ".AIGlasses", icon: "👓", desc: "Augmented reality AI" },
                  { name: ".AIEmail", icon: "📧", desc: "Hardware email device" }
                ].map((device, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">{device.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{device.name}</h3>
                    <p className="text-gray-300 text-sm">{device.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* AI Made Me Rich Merch Community Section */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="blue" speed="slow" depth={true} interactive={true} />
          <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">AI Made Me Rich</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Join the community of AI entrepreneurs and showcase your success with exclusive merchandise
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">👕</div>
                  <h3 className="text-xl font-bold text-white mb-3">Exclusive Merch</h3>
                  <p className="text-gray-300">Limited edition apparel and accessories</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-white mb-3">Success Stories</h3>
                  <p className="text-gray-300">Share your AI entrepreneurship journey</p>
                </div>
                <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-3">Community Access</h3>
                  <p className="text-gray-300">Connect with fellow AI entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
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

      {/* Final CTA with Retro Grid */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <FinalCTASection />
      </Suspense>
    </MainLayout>
  );
}
