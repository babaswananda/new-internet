'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/utils/normalBold';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>('what-is-unified-ai');

  const popularFAQs = [
    {
      id: 'what-is-unified-ai',
      question: 'What is Unified AI Protocol?',
      answer: 'Unified AI Protocol is the missing infrastructure layer that unifies AI services with decentralized identity. We provide the "connective tissue" between AI platforms, enabling seamless, secure, and user-controlled interactions across any AI service.',
      category: 'General'
    },
    {
      id: 'how-to-get-started',
      question: 'How do I get started?',
      answer: 'Start by claiming your handle at unifiedai.com/claim - this becomes your universal AI identity. Then explore our Protocol Academy to learn about vault setup, token economics, and AI agent creation.',
      category: 'Getting Started'
    },
    {
      id: 'handle-registry',
      question: 'How does the Handle Registry work?',
      answer: 'The Handle Registry uses decentralized identifiers (DIDs) with a custom naming system. Each handle (like @yourname.ai) maps to a DID that controls your identity across all AI services.',
      category: 'Technical'
    },
    {
      id: 'token-economy',
      question: 'How does the three-token economy work?',
      answer: 'Our ecosystem uses UtilityCoin (UC) for governance, AI Tokens (AIT) for execution gas, and Meme Coins for viral growth. This creates a balanced economy where UC provides stability, AIT drives usage, and Meme Coins enable community engagement.',
      category: 'Tokenomics'
    },
    {
      id: 'earning-tokens',
      question: 'How can I earn tokens?',
      answer: 'Multiple ways: contribute training data to AI models, stake UtilityCoin for rewards, provide AI services, participate in governance, create viral content, refer users, and join community challenges.',
      category: 'Earning'
    },
    {
      id: 'partnerships',
      question: 'How do partnerships work?',
      answer: 'We offer technical integrations, strategic alliances, enterprise partnerships, and developer partnerships. AI platforms can integrate our identity layer while maintaining their core architecture.',
      category: 'Partnerships'
    }
  ];

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
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="relative min-h-screen w-full py-24 overflow-hidden">
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>Frequently Asked Questions</HeaderText>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              <span className="font-bold">Questions.</span> <span className="font-normal">Answers.</span> <span className="font-bold">Clarity.</span> <span className="font-normal">Understanding.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Get quick answers to the most common questions about Unified AI Protocol, from basic concepts to technical implementation.
            </p>
          </motion.div>

          {/* FAQ Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {popularFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-black/20 transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    </div>
                    <span className={`text-purple-400 transition-transform ml-4 ${
                      openQuestion === faq.id ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  {openQuestion === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-4 bg-black/10 border-t border-purple-500/10"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">FAQ Topics Covered</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5</div>
                <div className="text-gray-300 text-sm">Main Categories</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">Response Rate</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                <HeaderText>Need More Detailed Answers?</HeaderText>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Explore our complete FAQ database with detailed technical documentation, investment information, and partnership details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/faq"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all"
                >
                  📚 Complete FAQ Database
                </Link>
                <Link 
                  href="/book-demo"
                  className="px-8 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all"
                >
                  📅 Schedule Demo
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-lg transition-all"
                >
                  💬 Contact Support
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Resource Links */}
          <motion.div variants={itemVariants} className="mt-12">
            <h4 className="text-xl font-bold text-white mb-6 text-center">
              <HeaderText>Explore More Resources</HeaderText>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/blog" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
                <div className="text-2xl mb-2">📚</div>
                <div className="text-white font-medium text-sm">Research Library</div>
              </Link>
              <Link href="/learn-aimademerich" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
                <div className="text-2xl mb-2">🎓</div>
                <div className="text-white font-medium text-sm">Protocol Academy</div>
              </Link>
              <Link href="/handle-registry" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
                <div className="text-2xl mb-2">🆔</div>
                <div className="text-white font-medium text-sm">Handle Registry</div>
              </Link>
              <Link href="/ai-tokens" className="p-4 bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all text-center">
                <div className="text-2xl mb-2">🪙</div>
                <div className="text-white font-medium text-sm">Tokenomics</div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
