'use client';

import React from 'react';
import ScrollTriggerSlide from '@/components/ui/ScrollTriggerSlide';

const ProtocolStackSlide: React.FC = () => {
  const protocolStack = [
    {
      name: "IO",
      href: "/io",
      description: "Intelligent Operator - your personal AI operating system",
      icon: "🧠"
    },
    {
      name: "AgentOS",
      href: "/agentos",
      description: "Operating system designed specifically for AI agents",
      icon: "⚙️"
    },
    {
      name: "ION",
      href: "/ion",
      description: "Intelligent Ontology Network for semantic AI interactions",
      icon: "🌐"
    },
    {
      name: "AlphaRouter",
      href: "/alpharouter",
      description: "Intelligent model routing and optimization at scale",
      icon: "🔀"
    },
    {
      name: "MCP",
      href: "/mcp",
      description: "Model Context Protocol for seamless AI integration",
      icon: "🔗"
    },
    {
      name: "A2A",
      href: "/a2a",
      description: "Actions to Actions protocol for automated workflows",
      icon: "⚡"
    },
    {
      name: "DevKit",
      href: "/adk",
      description: "Agent Development Kit for building intelligent agents",
      icon: "🛠️"
    },
    {
      name: "Vibe",
      href: "/vibe",
      description: "AI development environment with intuitive interfaces",
      icon: "✨"
    }
  ];

  return (
    <ScrollTriggerSlide
      title="Protocol Stack"
      subtitle="The foundational infrastructure powering the next generation of AI applications"
      items={protocolStack}
      particleColor="cyan"
      slideDirection="left"
    />
  );
};

export default ProtocolStackSlide;
