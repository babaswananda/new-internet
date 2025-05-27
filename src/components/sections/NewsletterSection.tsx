'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from '@/components/ui/glowing-card';
import { HeaderText } from '@/utils/normalBold';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: "🚨",
      title: "ITO Updates",
      description: "First access to AI Tokens drops and exclusive staking opportunities"
    },
    {
      icon: "🧠",
      title: "Agent Intel",
      description: "Early previews of new agents and protocol updates"
    },
    {
      icon: "💸",
      title: "Success Stories",
      description: "Weekly highlights from the AIMadeMeRich feed"
    },
    {
      icon: "🎓",
      title: "Operator Tips",
      description: "Advanced strategies and insider knowledge"
    }
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Newsletter Card */}
          <motion.div variants={itemVariants}>
            <GlowingCard className="bg-black/30 backdrop-blur-sm p-12 rounded-lg border border-purple-500/20 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
                    <HeaderText>Stay In The Loop</HeaderText>
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  <HeaderText>Get The Latest Protocol Updates Agent Drops And Success Stories</HeaderText>
                </p>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                  Join 50,000+ operators getting exclusive access to ITO drops, agent previews, 
                  and the strategies that are making people rich in the agentic economy.
                </p>

                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.handle@unifiedai"
                      className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Subscribing...
                        </div>
                      ) : (
                        'JOIN THE PROTOCOL'
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-8"
                  >
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl text-green-400 mb-2"><HeaderText>Welcome To The Protocol</HeaderText></h3>
                    <p className="text-gray-300">Check your inbox for your first operator briefing</p>
                  </motion.div>
                )}

                <p className="text-sm text-gray-500">
                  No spam. Unsubscribe anytime. Your data stays in your vault.
                </p>
              </div>
            </GlowingCard>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <GlowingCard className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 h-full">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg mb-3 text-white"><HeaderText>{benefit.title}</HeaderText></h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="flex justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span className="text-sm">50K+ Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm">Daily Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm">Vault Secured</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
