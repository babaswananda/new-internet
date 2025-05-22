'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';

// Only load the hero section immediately
import ImprovedHeroSection from '@/components/sections/ImprovedHeroSection';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';

// Dynamically import all other sections with no SSR to improve performance
const WhatIsUnifiedAISection = dynamic(() => import('@/components/sections/WhatIsUnifiedAISection'), { ssr: false });
const DashboardSection = dynamic(() => import('@/components/sections/DashboardSection'), { ssr: false });
const AgentOSSection = dynamic(() => import('@/components/sections/AgentOSSection'), { ssr: false });
const ADKSection = dynamic(() => import('@/components/sections/ADKSection'), { ssr: false });
const A2ASection = dynamic(() => import('@/components/sections/A2ASection'), { ssr: false });
const MCPSection = dynamic(() => import('@/components/sections/MCPSection'), { ssr: false });
const ParallelProcessingSection = dynamic(() => import('@/components/sections/ParallelProcessingSection'), { ssr: false });
const VibeCodingSection = dynamic(() => import('@/components/sections/VibeCodingSection'), { ssr: false });
const OperatorEconomySection = dynamic(() => import('@/components/sections/OperatorEconomySection'), { ssr: false });
const MarketplaceSection = dynamic(() => import('@/components/sections/MarketplaceSection'), { ssr: false });
// const VideoSection = dynamic(() => import('@/components/sections/VideoSection'), { ssr: false }); // Disabled
const InfrastructureSection = dynamic(() => import('@/components/sections/InfrastructureSection'), { ssr: false });
const InvestmentOfferingSection = dynamic(() => import('@/components/sections/InvestmentOfferingSection'), { ssr: false });
const AIVAChatSection = dynamic(() => import('@/components/sections/AIVAChatSection'), { ssr: false });
const MerchSection = dynamic(() => import('@/components/sections/MerchSection'), { ssr: false });
const MapSection = dynamic(() => import('@/components/sections/MapSection'), { ssr: false });
const FinalCTASection = dynamic(() => import('@/components/sections/FinalCTASection'), { ssr: false });
const ComingSoonSection = dynamic(() => import('@/components/sections/ComingSoonSection'), { ssr: false });

export default function Home() {
  return (
    <MainLayout>
      {/* Main Hero Section - Load immediately */}
      <ImprovedHeroSection />

      {/* Load all other sections with Suspense for better performance */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* What is Unified AI Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="blue" speed="medium" depth={true} interactive={true} />
          <WhatIsUnifiedAISection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Dashboard Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={120} color="purple" speed="medium" depth={true} interactive={true} />
          <DashboardSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* AgentOS Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="cyan" speed="medium" depth={true} interactive={true} />
          <AgentOSSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Agent Dev Kit (ADK) Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={140} color="mixed" speed="medium" depth={true} interactive={true} />
          <ADKSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Agent-to-Agent (A2A) Protocol Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={160} color="blue" speed="slow" depth={true} interactive={true} />
          <A2ASection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Model Context Protocol (MCP) Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="purple" speed="medium" depth={true} interactive={true} />
          <MCPSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Parallel Processing Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={250} color="cyan" speed="fast" depth={true} interactive={true} />
          <ParallelProcessingSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Vibe Coding Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="mixed" speed="medium" depth={true} interactive={true} />
          <VibeCodingSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Operator Economy Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="blue" speed="slow" depth={true} interactive={true} />
          <OperatorEconomySection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Marketplace Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={220} color="purple" speed="medium" depth={true} interactive={true} />
          <MarketplaceSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Infrastructure Overview Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={170} color="cyan" speed="medium" depth={true} interactive={true} />
          <InfrastructureSection />
        </div>
      </Suspense>

      {/* Video Section - Disabled as requested */}
      {/* <Suspense fallback={<div className="h-20 bg-black" />}>
        <div className="relative">
          <SpaceParticlesBackground particleCount={130} color="mixed" speed="medium" depth={true} interactive={true} />
          <VideoSection />
        </div>
      </Suspense> */}

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* AIVA Chat Integration Section with Pricing Plans */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={160} color="blue" speed="medium" depth={true} interactive={true} />
          <AIVAChatSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Investment Offering Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />
          <InvestmentOfferingSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Merch Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="cyan" speed="medium" depth={true} interactive={true} />
          <MerchSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Map of the New Internet Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={250} color="mixed" speed="medium" depth={true} interactive={true} />
          <MapSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Coming Soon - Explore Page for Generative Art */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="blue" speed="medium" depth={true} interactive={true} />
          <ComingSoonSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* Final Call to Action Section */}
        <div className="relative">
          {/* SpaceParticlesBackground removed for FinalCTASection */}
          <FinalCTASection />
        </div>
      </Suspense>
    </MainLayout>
  );
}
