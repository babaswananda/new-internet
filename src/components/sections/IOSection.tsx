'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';
import { TLDName, ProductName, HeaderText } from '@/utils/normalBold';
import Link from 'next/link';

const IOSection = () => {
  const [activeDefinition, setActiveDefinition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified animations for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: isMobile ? 0.1 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.6 }
    },
  };

  const ioDefinitions = [
    {
      acronym: "Intelligent Operator",
      tagline: "Your personal protocol conductor.",
      description: "It doesn't just respond — it orchestrates.",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      acronym: "Input → Orchestration",
      tagline: "Feed it signals. Watch it command the stack.",
      description: "Every input becomes coordinated action across your entire agent ecosystem.",
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    },
    {
      acronym: "Infrastructure Operator",
      tagline: "It doesn't run apps — it runs ecosystems.",
      description: "The system admin of your sovereign internet identity.",
      icon: "⚙️",
      color: "from-green-500 to-teal-500"
    },
    {
      acronym: "Internet Operator",
      tagline: "The system admin of your sovereign internet identity.",
      description: "Your personal command center for the decentralized web.",
      icon: "🌐",
      color: "from-orange-500 to-red-500"
    },
    {
      acronym: "Intention Output",
      tagline: "Speak your intent. IO does the rest.",
      description: "Natural language becomes executable infrastructure.",
      icon: "🪄",
      color: "from-pink-500 to-purple-500"
    },
    {
      acronym: "Intelligence Orchestrator",
      tagline: "Multiple agents. One conductor. You.",
      description: "Coordinate complex multi-agent workflows with simple commands.",
      icon: "🧬",
      color: "from-cyan-500 to-blue-500"
    },
    {
      acronym: "Interface OS",
      tagline: "The operating system for agentic reality.",
      description: "Your unified interface to the intelligent internet.",
      icon: "🧰",
      color: "from-yellow-500 to-orange-500"
    },
    {
      acronym: "Identity Origin",
      tagline: "The first thing you deploy. The last thing they forget.",
      description: "Your handle, your vault, your agents — all orchestrated by IO.",
      icon: "🔓",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Auto-rotate definitions (slower on mobile for better performance)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDefinition((prev) => (prev + 1) % ioDefinitions.length);
    }, isMobile ? 6000 : 4000); // Slower rotation on mobile
    return () => clearInterval(interval);
  }, [ioDefinitions.length, isMobile]);

  return (
    <section id="io-section" className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
                <HeaderText>Meet IO</HeaderText>
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl mb-6 text-white">
              <HeaderText>Your Intelligent Operator</HeaderText>
            </h3>
            <p className="text-xl text-gray-300 mb-4">
              This isn't just another chatbot. This is your sovereign AI control layer.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              IO manages your agents, routes your workflows, and translates your intent into execution.
              <br />You don't chat. You command.
            </p>
          </motion.div>

          {/* Main Definition Display */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className={`${isMobile ? 'bg-black/20 border border-white/10' : 'bg-black/30 backdrop-blur-sm border border-white/10'} p-8 md:p-12 rounded-lg`}>
              <div className="text-center">
                {isMobile ? (
                  // Simplified version for mobile (no AnimatePresence)
                  <div>
                    <div className="text-4xl md:text-6xl mb-4 md:mb-6">{ioDefinitions[activeDefinition].icon}</div>
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r ${ioDefinitions[activeDefinition].color}`}>
                      <ProductName>IO</ProductName> = {ioDefinitions[activeDefinition].acronym}
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-300 mb-4 md:mb-6 font-light">
                      {ioDefinitions[activeDefinition].tagline}
                    </p>
                    <p className="text-sm md:text-lg text-gray-400 max-w-3xl mx-auto">
                      {ioDefinitions[activeDefinition].description}
                    </p>
                  </div>
                ) : (
                  // Full animation for desktop
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDefinition}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-6xl mb-6">{ioDefinitions[activeDefinition].icon}</div>
                      <h3 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${ioDefinitions[activeDefinition].color}`}>
                        <ProductName>IO</ProductName> = {ioDefinitions[activeDefinition].acronym}
                      </h3>
                      <p className="text-2xl text-gray-300 mb-6 font-light">
                        {ioDefinitions[activeDefinition].tagline}
                      </p>
                      <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        {ioDefinitions[activeDefinition].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </motion.div>

          {/* Definition Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-xl md:text-2xl mb-6 md:mb-8 text-center"><HeaderText>IO Is Everything You Need</HeaderText></h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {ioDefinitions.map((def, index) => (
                <div
                  key={index}
                  className={`p-3 md:p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    activeDefinition === index
                      ? 'border-white/40 bg-white/5'
                      : 'border-white/10 bg-black/20 hover:border-white/20'
                  } ${isMobile ? '' : 'hover:scale-105'}`}
                  onClick={() => setActiveDefinition(index)}
                >
                  <div className="text-center">
                    <div className="text-lg md:text-2xl mb-1 md:mb-2">{def.icon}</div>
                    <h4 className={`text-xs md:text-sm font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${def.color}`}>
                      {def.acronym}
                    </h4>
                    <p className="text-xs text-gray-400 leading-tight">{def.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Command Examples */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className={`${isMobile ? 'bg-black/20 border border-green-500/20' : 'bg-black/30 backdrop-blur-sm border border-green-500/20'} p-6 md:p-8 rounded-lg`}>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-green-400 text-center">🔗 IO Command Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-black/60 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm">
                  <div className="text-green-400 mb-2 break-all">$ io deploy --agent="customer-support" --handle="mycompany"</div>
                  <div className="text-gray-400 mb-1">🤖 Deploying intelligent customer support agent...</div>
                  <div className="text-blue-400">✓ Agent live at mycompany.agentchat</div>
                </div>
                <div className="bg-black/60 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm">
                  <div className="text-green-400 mb-2 break-all">$ io orchestrate --workflow="content-pipeline" --input="blog-ideas"</div>
                  <div className="text-gray-400 mb-1">⚡ Coordinating 5 agents for content creation...</div>
                  <div className="text-blue-400">✓ Pipeline active, content generating</div>
                </div>
                <div className="bg-black/60 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm">
                  <div className="text-green-400 mb-2 break-all">$ io route --intent="schedule-meeting" --agents="calendar,email,assistant"</div>
                  <div className="text-gray-400 mb-1">🌐 Routing intent across agent network...</div>
                  <div className="text-blue-400">✓ Meeting scheduled, invites sent</div>
                </div>
                <div className="bg-black/60 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm">
                  <div className="text-green-400 mb-2 break-all">$ io scale --infrastructure="auto" --demand="high"</div>
                  <div className="text-gray-400 mb-1">⚙️ Auto-scaling agent infrastructure...</div>
                  <div className="text-blue-400">✓ Capacity increased, latency optimized</div>
                </div>
              </div>
              <div className="text-center mt-4 md:mt-6">
                <p className="text-sm md:text-base text-gray-400">
                  Ready to command your agents? <span className="text-green-400">.commandline/claim</span> is where it all begins.
                  {!isMobile && <><br />(no paste '.commandline/claim' in your browser, it leads somewhere special).</>}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl mb-8 text-center"><HeaderText>IO Vs Traditional AI</HeaderText></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-3 text-center">❌ Traditional Chat</h4>
                <p className="text-gray-300 text-sm text-center">
                  You chat. It responds. One conversation at a time. No memory, no orchestration, no control.
                </p>
              </GlowingCard>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                <h4 className="text-yellow-400 font-semibold mb-3 text-center">⚠️ Legacy AI Platforms</h4>
                <p className="text-gray-300 text-sm text-center">
                  Siloed agents. Manual workflows. No unified control layer. You're the integration.
                </p>
              </GlowingCard>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-3 text-center">✅ <ProductName>IO</ProductName></h4>
                <p className="text-gray-300 text-sm text-center">
                  You command. <ProductName>IO</ProductName> orchestrates. Multiple agents, unified control, persistent memory, sovereign infrastructure.
                </p>
              </GlowingCard>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link href="/io">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-2xl rounded-lg shadow-lg shadow-blue-500/20 mr-4"
              >
                DEPLOY YOUR IO
              </motion.button>
            </Link>
            <Link href="/documentation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-2xl rounded-lg hover:bg-white/10 transition-colors"
              >
                VIEW DOCUMENTATION
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IOSection;
