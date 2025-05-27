'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import InteractiveBackground from '../ui/InteractiveBackground';

/**
 * ImprovedHeroSection
 *
 * A premium, interactive hero section with modern design elements,
 * responsive layout, and engaging animations.
 */
const ImprovedHeroSectionComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);

  const [activeIndex, setActiveIndex] = useState(0); // Single index for the main rotating content
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroContentSets = [
    {
      // Slide 1: The Core Message
      heading: "UNIFIED AI",
      subtitle: "\"We didn't build a platform. We built the internet. From the .commandline up.\"",
      bubbleText: "Forget dashboards. You now run your future from a slash.",
      bubbleColor: "from-blue-500 to-purple-500",
      bulletPoints: [
        "Where your handle is your hub.",
        "Your vault is your stack.",
        "And your agent is your OS."
      ]
    },
    {
      // Slide 2: The Handle Revolution
      heading: "EVERY HANDLE IS A FUNCTION",
      subtitle: "FSPP = Framework / Stack / Prompt / Protocol",
      bubbleText: "You don't load a profile. You deploy a protocol.",
      bubbleColor: "from-purple-500 to-pink-500",
      bulletPoints: [
        "yourname.commandline — The terminal for your internet",
        "yourname.agentchat — Superapp: AI Inbox, Devices, Drops, Dashboard",
        "yourname.aiagents — Your fleet of GPTs"
      ]
    },
    {
      // Slide 3: The Infrastructure
      heading: "ALPHAROUTER: THE CARRIER OF INTELLIGENCE",
      subtitle: "If OpenRouter routes models, AlphaRouter routes the internet itself.",
      bubbleText: "Clean, sovereign, agent-native compute layer.",
      bubbleColor: "from-pink-500 to-red-500",
      bulletPoints: [
        "✅ A2A Protocol (Google)",
        "✅ MCP (Model Context Protocol from Anthropic)",
        "✅ AgentDevKit (your own drop-to-deploy SDK)"
      ]
    },
    {
      // Slide 4: The Intelligent Ontology Network
      heading: "INTELLIGENT ONTOLOGY NETWORK (ION)",
      subtitle: "You don't just train agents. You route intelligence.",
      bubbleText: "ION turns the Agentic Web into a cognitive web.",
      bubbleColor: "from-green-500 to-teal-500",
      bulletPoints: [
        "🧠 Ontology Agents define and classify domains",
        "🧭 Agent routing by skill, memory, and relevance",
        "🧩 Model mixing + multimodal matching"
      ]
    },
    {
      // Slide 5: The Marketplace
      heading: ".AIDIRECTORY + .AIMARKETPLACE",
      subtitle: "The public brain of Unified AI.",
      bubbleText: "Think Shopify + GitHub + OpenSea — for AI.",
      bubbleColor: "from-amber-500 to-orange-500",
      bulletPoints: [
        "Discover any agent, any function, any creator",
        "Sell agents, tools, templates, prompt packs",
        "Token-gate drops and support modules"
      ]
    },
    {
      // Slide 6: The Handle Claim
      heading: "CLAIM YOUR HANDLE",
      subtitle: "Your handle is your username, email, wallet, inbox, vault, AI, and business.",
      bubbleText: "Once it's taken — it's taken. Forever.",
      bubbleColor: "from-blue-500 to-purple-500",
      bulletPoints: [
        "First time in digital history to own your entire online identity",
        "Miss this moment, and you're back to yourname_3245"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroContentSets.length);
    }, 6000); // Increased time to 6 seconds for more reading time
    return () => clearInterval(interval);
  }, [heroContentSets.length]);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } };
  const textFadeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };
  const bubbleFadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };
  // Removed barIconVariants as it's not used for dot-dash

  const getParallaxStyle = (depth: number = 1) => {
    const maxShift = 20 * depth;
    const x = (mousePosition.x - 0.5) * maxShift;
    const y = (mousePosition.y - 0.5) * maxShift;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  if (!isMounted) {
    return (
      <section id="hero-section" className="relative min-h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 bg-black"></div>
        <div className="container mx-auto px-4 relative z-10"><div className="max-w-6xl mx-auto"></div></div>
      </section>
    );
  }

  return (
    <section id="hero-section" ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0"><InteractiveBackground intensity="medium" color="mixed" /></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6" style={getParallaxStyle(0.5)}>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-full">
              <div className="bg-black/80 backdrop-blur-sm px-4 py-1 rounded-full">
                <span className="text-white text-sm font-medium tracking-wider uppercase">Genesis Window closes in: 71:59:04</span>
              </div>
            </div>
          </motion.div>

          {/* Rotating Text Block (Heading, Subtitle, and Highlight Bubble) */}
          <motion.div variants={itemVariants} className="mb-8" style={getParallaxStyle(0.8)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-set-${activeIndex}`}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h1 variants={textFadeVariants} className="text-6xl md:text-8xl font-bold tracking-wider text-white">
                  {heroContentSets[activeIndex].heading}
                </motion.h1>
                <motion.p variants={textFadeVariants} className="text-2xl md:text-3xl mt-4 font-light text-blue-100">
                  {heroContentSets[activeIndex].subtitle}
                </motion.p>
                <motion.div
                  variants={bubbleFadeVariants}
                  className="relative mt-4"
                >
                  <div className="inline-block">
                    <div className={`bg-gradient-to-r ${heroContentSets[activeIndex].bubbleColor} p-[1px] rounded-lg`}>
                      <div className="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg">
                        <p className="text-2xl md:text-3xl text-white">{heroContentSets[activeIndex].bubbleText}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {heroContentSets[activeIndex].bulletPoints && (
                  <motion.div
                    variants={bubbleFadeVariants}
                    className="mt-6 space-y-2"
                  >
                    {heroContentSets[activeIndex].bulletPoints.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="text-blue-400 mr-2">•</span>
                        <p className="text-xl text-white">{point}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dot-Dash Animated Icon Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-start items-center space-x-2 mb-12" // Added items-center for vertical alignment
            style={getParallaxStyle(1.0)}
          >
            {heroContentSets.map((_, index) => (
              <motion.div
                key={`dot-dash-indicator-${index}`}
                className="rounded-full cursor-pointer" // Base styling
                animate={{
                  width: index === activeIndex ? "32px" : "8px", // w-8 for dash, w-2 for dot (approx)
                  height: "8px", // h-2 (approx)
                  backgroundColor: index === activeIndex ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4" style={getParallaxStyle(1.5)}>
            <Link href="#claim-handle">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
              >
                CLAIM YOUR HANDLE
              </motion.button>
            </Link>
            <Link href="#agentchat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
              >
                START YOUR STACK
              </motion.button>
            </Link>
            <Link href="#alpharouter">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors"
              >
                VIEW ROUTER ARCHITECTURE
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Typewriter Loop */}
          <motion.div
            className="absolute bottom-20 left-8 z-10 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded border border-green-500/30">
              <motion.div
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
              >
                <span className="text-green-400">→ .commandline/claim</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="text-white/50 text-sm">Scroll to explore</span>
              <div className="w-12 h-[1px] bg-white/30"></div>
            </div>
          </motion.div>
    </section>
  );
};

const ImprovedHeroSection = dynamic(() => Promise.resolve(ImprovedHeroSectionComponent), {
  ssr: false
});

export default ImprovedHeroSection;
