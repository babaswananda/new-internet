'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { TLDName, ProductName } from '@/utils/normalBold';

// Subscription tiers for AIVA Chat (Advanced Intelligent Virtual Assistant)
const subscriptionTiers = [
  {
    name: 'Basic',
    features: [
      'Access to ElizaOS AI16z',
      'Basic templates',
      'Community support',
      '10 projects per month'
    ],
    recommended: false,
    color: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Pro',
    features: [
      'Everything in Basic',
      'Zerebro/Zerepy+Hyperbolic SDK access',
      'Virtuals Protocol integration',
      'Priority support',
      'Unlimited projects'
    ],
    recommended: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    features: [
      'Everything in Pro',
      'SuperAGI and Ollama integration',
      'Custom agent development',
      'Dedicated support',
      'API access',
      'White-labeling options',
      'OpenRouter integration'
    ],
    recommended: false,
    color: 'from-pink-500 to-red-500'
  }
];

// Suggestion buttons for the chat UI
const suggestionButtons = [
  { icon: "💡", text: "Fun fact about Rome", color: "border-yellow-500" },
  { icon: "🔮", text: "HTML landing page", color: "border-purple-500" },
  { icon: "💻", text: "Python for fibonacci series", color: "border-blue-500" },
  { icon: "🎨", text: "Draw a dragon", color: "border-red-500" },
];

// Feature buttons for the chat UI
const featureButtons = [
  { icon: "🖼️", text: "Image" },
  { icon: "💻", text: "Code" },
  { icon: "🎮", text: "Playground" },
  { icon: "📊", text: "Powerpoint-Gen" },
  { icon: "🔍", text: "Deep Research" },
  { icon: "⚙️", text: "More" },
];

const AIVAChatSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredTier, setHoveredTier] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Email capture state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Note: Replace this URL with your actual Spline scene URL
  const splineSceneUrl = undefined;

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

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const handleSuggestionClick = (index: number) => {
    setSelectedSuggestion(index);
    setInputValue(suggestionButtons[index].text);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to capture email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full py-24 overflow-hidden" id="aivachat">
      <div className="absolute inset-0 bg-black grid-bg opacity-30"></div>
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
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            <ProductName>AIVA Chat</ProductName> Integration
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-center max-w-3xl mx-auto"
          >
            Advanced Intelligent Virtual Assistant with powerful AI chat capabilities and tiered access to multiple AI systems.
          </motion.p>

          {/* Chat UI Demo */}
          <motion.div
            variants={itemVariants}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="bg-[#121212] rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              {/* Suggestion buttons */}
              <div className="p-4 flex flex-wrap gap-2 justify-center">
                {suggestionButtons.map((button, index) => (
                  <motion.button
                    key={index}
                    className={`px-4 py-2 rounded-full bg-[#1e1e1e] border ${button.color} text-white flex items-center gap-2 transition-all ${selectedSuggestion === index ? 'border-opacity-100 scale-105' : 'border-opacity-30'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSuggestionClick(index)}
                  >
                    <span>{button.icon}</span>
                    <span>{button.text}</span>
                  </motion.button>
                ))}
              </div>

              {/* Input area */}
              <div className="p-6">
                <div className="bg-[#1e1e1e] rounded-xl p-4 flex items-center">
                  <div className="flex-grow relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Write something..."
                      className="w-full bg-transparent text-white outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Feature buttons */}
              <div className="px-4 pb-4 flex flex-wrap gap-4 justify-center border-t border-gray-800 pt-4">
                {featureButtons.map((button, index) => (
                  <motion.button
                    key={index}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{button.icon}</span>
                    <span>{button.text}</span>
                  </motion.button>
                ))}
              </div>

              {/* Prompting tips */}
              <div className="p-4 border-t border-gray-800 flex justify-center">
                <motion.a
                  href="#"
                  className="text-purple-400 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Prompting Tips and Tricks</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Pricing Tiers */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {subscriptionTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`relative rounded-xl overflow-hidden ${
                  tier.recommended ? 'transform md:-translate-y-4 scale-105 z-10' : ''
                }`}
                onMouseEnter={() => setHoveredTier(index)}
                onMouseLeave={() => setHoveredTier(null)}
                whileHover={{
                  scale: tier.recommended ? 1.05 : 1.03,
                  y: tier.recommended ? -20 : -10,
                  zIndex: 20
                }}
              >
                {/* Border gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} p-[1px] rounded-xl`}>
                  <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {tier.recommended && (
                    <div className={`absolute top-0 right-0 bg-gradient-to-r ${tier.color} text-white text-xs font-bold px-4 py-1 rounded-bl-lg`}>
                      RECOMMENDED
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-6">{tier.name}</h3>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        variants={featureVariants}
                        initial="hidden"
                        animate={hoveredTier === index ? "visible" : "hidden"}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className={`mr-2 text-transparent bg-clip-text bg-gradient-to-r ${tier.color}`}>✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-3 rounded-lg font-bold bg-gradient-to-r ${tier.color} text-white`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    See Pricing
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Integration Info */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Integrated AI Systems</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">ElizaOS ai16z</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Zerebro/Zerepy+</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Hyperbolic SDK</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Virtuals Protocol</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">SuperAGI</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">Ollama</div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">OpenRouter</div>
            </div>

            <Link href="/chat">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try AIVA Chat Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Email Capture for Pricing */}
          <motion.div
            variants={itemVariants}
            className="mt-20 max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2 text-center">Get Detailed Pricing Information</h3>
              <p className="text-gray-300 mb-6 text-center">Enter your email to receive our complete pricing guide with special offers.</p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-lg font-semibold ${isSubmitting ? 'bg-gray-500' : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Get Pricing'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-4"
                  >
                    <div className="inline-block bg-green-500/20 text-green-400 p-2 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
                    <p className="text-gray-300">We've sent the pricing details to your email. Check your inbox!</p>
                    <p className="text-gray-400 mt-4">Starting at just $9.99/month with premium tiers available.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIVAChatSection;
