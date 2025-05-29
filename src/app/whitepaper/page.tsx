'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Eye, Download, Lock, Zap, Brain, Globe, Sun, Moon, Twitter, Github, MessageCircle, ArrowRight, Star, Shield, Rocket } from 'lucide-react';

export default function WhitepaperLanding() {
  const [isDark, setIsDark] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [currentSection, setCurrentSection] = useState(0);

  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const trilogyRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const featuresInView = useInView(featuresRef, { threshold: 0.3 });
  const pricingInView = useInView(pricingRef, { threshold: 0.3 });
  const trilogyInView = useInView(trilogyRef, { threshold: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleLogin = () => {
    if (password === 'operator' || password === 'vault' || password === 'protocol') {
      setShowLogin(false);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const downloadOptions = [
    {
      title: 'Starter',
      description: 'Perfect for exploring the protocol',
      price: '$0',
      features: ['32-page White Paper PDF', 'Protocol Overview', 'Basic Documentation', 'Community Access'],
      cta: 'Start Free',
      icon: Star,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Builder',
      description: 'For developers and operators',
      price: '$27',
      features: ['Complete White Paper', 'Agent Development Kit', 'API Documentation', 'Priority Support', 'Codex Preview'],
      cta: 'Build Now',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      title: 'Protocol',
      description: 'Full sovereign access',
      price: '$333',
      features: ['Complete Protocol Access', 'Handle Registration', 'Operator Council', 'Token Allocation', 'Physical Package'],
      cta: 'Join Protocol',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Clean Background with Subtle Animation */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'}`}></div>

        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'}`}
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl`}
            >
              <div className="text-center mb-6">
                <Eye className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'} mx-auto mb-2`} />
                <h3 className="text-xl font-bold">Access Protocol</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mt-2`}>Enter your access code</p>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Access code..."
                className={`w-full ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg px-4 py-3 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              />

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleLogin}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Access
                </button>
                <button
                  onClick={() => setShowLogin(false)}
                  className={`flex-1 ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border py-3 rounded-lg transition-all`}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-center p-6">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Login Button */}
          <motion.button
            onClick={() => setShowLogin(true)}
            className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              UNIFIED AI
            </motion.h1>

            <motion.p
              className={`text-xl md:text-2xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The Sovereign Intelligence Stack
            </motion.p>

            <motion.p
              className="text-lg text-blue-500 font-medium"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Protocol • Whitepaper • Activation
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download Whitepaper
            </motion.button>

            <motion.button
              className={`px-8 py-4 ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border-2 font-semibold rounded-xl transition-all transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 inline mr-2" />
              Explore Protocol
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingRef}
        className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50/50'}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Access</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Three tiers of protocol engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {downloadOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`relative ${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500/50 transition-all duration-300 group hover:scale-105`}
                >
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{option.description}</p>
                    <div className="text-4xl font-bold text-blue-500">{option.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold transition-all bg-gradient-to-r ${option.color} text-white hover:shadow-lg transform hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.cta}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Trilogy Section */}
      <motion.section
        ref={trilogyRef}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={trilogyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">As It Is Trilogy</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Embedded codexes within the protocol
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'AlphaSignals',
                subtitle: 'Signal Codex',
                desc: 'Decode energy. Transmit value. Build reality.',
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Industry Tycoon',
                subtitle: 'Infrastructure Codex',
                desc: 'You don\'t start companies. You start civilizations.',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Infinite Syndications',
                subtitle: 'Syndication Codex',
                desc: 'Belief is the blockchain.',
                color: 'from-purple-500 to-violet-600'
              }
            ].map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={trilogyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-8 border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500/50 transition-all duration-300 group hover:scale-105`}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${book.color} flex items-center justify-center`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-blue-500 text-sm font-medium mb-3">{book.subtitle}</p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-sm italic`}>"{book.desc}"</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={trilogyInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-blue-500 font-semibold"
          >
            🔗 Available as part of vault-based onboarding
          </motion.p>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className={`py-20 px-6 ${isDark ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-100 via-white to-gray-100'}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Ready to Begin?
            </h2>

            <div className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-6 mb-12`}>
              <p className="italic">
                "This is not a protocol you use.<br />
                This is a protocol you become."
              </p>

              <div className="space-y-2">
                <p>Unified AI is the sovereign reformatting of intelligence infrastructure.</p>
                <p className="text-blue-500 font-semibold">The future is agentic. The protocol is live.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download Whitepaper
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} border-2 font-semibold rounded-xl transition-all`}
            >
              <ArrowRight className="w-5 h-5 inline mr-2" />
              Join Protocol
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Progress Indicator */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
      >
        <div className={`w-2 h-20 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
          <motion.div
            className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-full"
            style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
          />
        </div>
      </motion.div>
    </div>
  );
}
