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
      id: 'ai-directory',
      title: 'AI Directory',
      description: 'Discover and access the world\'s largest collection of AI tools, agents, and services. Find the perfect AI solution for any task or industry.',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
            <h4 className="text-cyan-400 font-bold mb-3">🔍 DISCOVERY:</h4>
            <p className="text-gray-300 text-sm mb-3">Find the right AI tool for every need.</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Smart search & filtering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Ratings & reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Category organization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span className="text-gray-300">Easy integration</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h5 className="text-blue-400 font-semibold">AI Agents Marketplace</h5>
                <p className="text-gray-400 text-sm">Browse and deploy intelligent agents</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛠️</span>
              <div>
                <h5 className="text-green-400 font-semibold">Developer Tools</h5>
                <p className="text-gray-400 text-sm">APIs, SDKs, and integration tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <h5 className="text-purple-400 font-semibold">Analytics & Insights</h5>
                <p className="text-gray-400 text-sm">Performance metrics and usage analytics</p>
              </div>
            </div>
          </div>
        </div>
      ),
      media: {
        id: 'ai-directory-showcase',
        title: 'AI Directory Platform',
        description: 'Comprehensive directory of AI tools, agents, and services with smart discovery features',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'ai-marketplace',
      title: 'AI Marketplace',
      description: 'The new creator economy where AI agents are bought, sold, and deployed across industries. Monetize your intelligence and discover powerful agents.',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300">Deploy & monetize agents</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-gray-300">Creator revenue sharing</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-300">Remix & fork capabilities</span>
          </div>
        </div>
      ),
      media: {
        id: 'ai-marketplace-flow',
        title: 'AI Marketplace Economy',
        description: 'Creator economy showing agent deployment, monetization, and collaboration',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'handle-registry',
      title: 'Handle Registry',
      description: 'Secure your digital identity with protocol-native handles for the Agentic Internet. Universal identity across all AI platforms and services.',
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Universal identity system</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-300">Cryptographically secured</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-300">Valuable digital assets</span>
          </div>
        </div>
      ),
      media: {
        id: 'handle-registry-viz',
        title: 'Handle Registry System',
        description: 'Decentralized identity system showing handle registration and verification',
        type: 'video' as const,
        category: 'protocol' as const,
        priority: 'high' as const
      },
      gradient: 'from-green-600 to-emerald-600'
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
                  <div key={index} className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
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
