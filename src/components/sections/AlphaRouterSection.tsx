'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlowingCard } from '@/components/ui/glowing-card';

const AlphaRouterSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <>
      <section id="alpharouter" className="relative min-h-screen w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
          >
            ALPHAROUTER: THE CARRIER OF INTELLIGENCE
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-center"
          >
            If OpenRouter routes models,<br />
            AlphaRouter routes the internet itself.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">AgentOS Powers:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>PPP</strong> – Parallel Processing Protocol</li>
                  <li>• <strong>SAG</strong> – Seed Augmented Generation</li>
                  <li>• <strong>UAC</strong> – Unified Agent Compute</li>
                  <li>• <strong>UAN</strong> – Unified Agent Network</li>
                </ul>
              </GlowingCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Multi-Model Routing:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• GPT-4o, Claude 3, Mistral, DeepSeek</li>
                  <li>• Open-source variants</li>
                  <li>• Forked or WorldModel (yours)</li>
                  <li>• Custom model integration</li>
                </ul>
              </GlowingCard>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">Model Protocol Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">✅</div>
                  <h4 className="font-semibold mb-2">A2A Protocol</h4>
                  <p className="text-gray-300 text-sm">(Google)</p>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">✅</div>
                  <h4 className="font-semibold mb-2">MCP</h4>
                  <p className="text-gray-300 text-sm">Model Context Protocol from Anthropic</p>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">✅</div>
                  <h4 className="font-semibold mb-2">ION</h4>
                  <p className="text-gray-300 text-sm">Intelligent Ontology Network</p>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-2xl mb-2">✅</div>
                  <h4 className="font-semibold mb-2">AgentDevKit</h4>
                  <p className="text-gray-300 text-sm">Your own drop-to-deploy SDK</p>
                </div>
              </div>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="text-amber-400 text-xl">⚠️</div>
                <div>
                  <p className="text-amber-200 font-semibold mb-2">Licensing Policy:</p>
                  <p className="text-gray-300">
                    Institutional APIs are not routed unless licensed.<br />
                    Open-source models are default-enabled.<br />
                    AlphaRouter + ION = Clean, sovereign, agent-native compute layer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">🌐 Browser Console Swagger</h3>
              <div className="bg-black/60 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <div className="text-blue-400 mb-2">fetch(&quot;https://api.commandline/claim&quot;, &#123;</div>
                <div className="text-gray-300 ml-4 mb-1">method: &quot;POST&quot;,</div>
                <div className="text-gray-300 ml-4 mb-1">headers: &#123;</div>
                <div className="text-green-400 ml-8 mb-1">&quot;Authorization&quot;: &quot;Bearer earlyaccess-token&quot;,</div>
                <div className="text-green-400 ml-8 mb-1">&quot;Content-Type&quot;: &quot;application/json&quot;</div>
                <div className="text-gray-300 ml-4 mb-1">&#125;,</div>
                <div className="text-gray-300 ml-4 mb-1">body: JSON.stringify(&#123; handle: &quot;yourname&quot;, stack: &quot;Unified AI v1&quot; &#125;)</div>
                <div className="text-blue-400">&#125;).then(res =&gt; res.json()).then(console.log)</div>
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">
                For devs who know the only UI that matters is the one they build.
              </p>
            </GlowingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-blue-500/20"
            >
              VIEW ROUTER ARCHITECTURE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default AlphaRouterSection;
