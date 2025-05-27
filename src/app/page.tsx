'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '@/components/layout/MainLayout';

// Only load the hero section immediately
import ImprovedHeroSection from '@/components/sections/ImprovedHeroSection';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';

// Dynamically import all other sections with no SSR to improve performance
const IOSection = dynamic(() => import('@/components/sections/IOSection'), { ssr: false });
const AITokensITOSection = dynamic(() => import('@/components/sections/AITokensITOSection'), { ssr: false });
const WhatIsUnifiedAISection = dynamic(() => import('@/components/sections/WhatIsUnifiedAISection'), { ssr: false });
const AgentChatSection = dynamic(() => import('@/components/sections/AgentChatSection'), { ssr: false });
const AlphaRouterSection = dynamic(() => import('@/components/sections/AlphaRouterSection'), { ssr: false });
const OntologyNetworkSection = dynamic(() => import('@/components/sections/OntologyNetworkSection'), { ssr: false });
const PreOrderHardwareSection = dynamic(() => import('@/components/sections/PreOrderHardwareSection'), { ssr: false });
const AIDirectoryMarketplaceSection = dynamic(() => import('@/components/sections/AIDirectoryMarketplaceSection'), { ssr: false });
const AIDatacentersSection = dynamic(() => import('@/components/sections/AIDatacentersSection'), { ssr: false });
const VibeCoderSection = dynamic(() => import('@/components/sections/VibeCoderSection'), { ssr: false });
const FreeHandleProgramSection = dynamic(() => import('@/components/sections/FreeHandleProgramSection'), { ssr: false });
const OperatorEconomySection = dynamic(() => import('@/components/sections/OperatorEconomySection'), { ssr: false });
const ClaimHandleSection = dynamic(() => import('@/components/sections/ClaimHandleSection'), { ssr: false });

// Other sections not in the main flow
const DashboardSection = dynamic(() => import('@/components/sections/DashboardSection'), { ssr: false });
const AgentOSSection = dynamic(() => import('@/components/sections/AgentOSSection'), { ssr: false });
const ADKSection = dynamic(() => import('@/components/sections/ADKSection'), { ssr: false });
const A2ASection = dynamic(() => import('@/components/sections/A2ASection'), { ssr: false });
const MCPSection = dynamic(() => import('@/components/sections/MCPSection'), { ssr: false });
const ParallelProcessingSection = dynamic(() => import('@/components/sections/ParallelProcessingSection'), { ssr: false });
const VibeCodingSection = dynamic(() => import('@/components/sections/VibeCodingSection'), { ssr: false });
const MarketplaceSection = dynamic(() => import('@/components/sections/MarketplaceSection'), { ssr: false });
const AIVAChatSection = dynamic(() => import('@/components/sections/AIVAChatSection'), { ssr: false });
const MapSection = dynamic(() => import('@/components/sections/MapSection'), { ssr: false });
const ComingSoonSection = dynamic(() => import('@/components/sections/ComingSoonSection'), { ssr: false });

export default function Home() {
  return (
    <MainLayout>
      {/* Main Hero Section - Load immediately */}
      <ImprovedHeroSection />

      {/* Load all other sections with Suspense for better performance */}
      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 2. IO: Your Intelligent Operator */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="blue" speed="slow" depth={true} interactive={true} />
          <IOSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 2.5. AI Tokens ITO - Official Token Offering */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={250} color="purple" speed="medium" depth={true} interactive={true} />
          <AITokensITOSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 3. Every Handle is a Function Section */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="purple" speed="medium" depth={true} interactive={true} />
          <WhatIsUnifiedAISection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 4. AgentChat: The AI Superapp */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="cyan" speed="slow" depth={true} interactive={true} />
          <AgentChatSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 5. AlphaRouter: The Carrier of Intelligence */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="green" speed="medium" depth={true} interactive={true} />
          <AlphaRouterSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 6. Ontology Network Protocol */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="orange" speed="slow" depth={true} interactive={true} />
          <OntologyNetworkSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 7. Pre-Order Hardware */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="pink" speed="medium" depth={true} interactive={true} />
          <PreOrderHardwareSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 8. AI Directory + AI Marketplace */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={170} color="purple" speed="medium" depth={true} interactive={true} />
          <AIDirectoryMarketplaceSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 9. AI Datacenters + GPU Cloud */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={170} color="cyan" speed="medium" depth={true} interactive={true} />
          <AIDatacentersSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 10. VibeCoder + VibeCoding */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={180} color="yellow" speed="medium" depth={true} interactive={true} />
          <VibeCoderSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 11. Free Handle Program */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={160} color="mixed" speed="slow" depth={true} interactive={true} />
          <FreeHandleProgramSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 12. Operator Economy + DevCommunity */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={150} color="red" speed="medium" depth={true} interactive={true} />
          <OperatorEconomySection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-20 bg-black" />}>
        {/* 13. Claim Your Handle - Final CTA */}
        <div className="relative">
          <SpaceParticlesBackground particleCount={200} color="mixed" speed="slow" depth={true} interactive={true} />
          <ClaimHandleSection />
        </div>
      </Suspense>
    </MainLayout>
  );
}
