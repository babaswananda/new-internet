'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Eye, Download, Sun, Moon, ArrowRight, Star, Shield, Rocket, Zap, Brain, Globe, Twitter, Github, MessageCircle } from 'lucide-react';

export default function WhitepaperLanding() {
  const [isDark, setIsDark] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [revealedSections, setRevealedSections] = useState(new Set());
  const [mysteryLevel, setMysteryLevel] = useState(0);
  const [discoveredSecrets, setDiscoveredSecrets] = useState(new Set());

  // Scroll refs and triggers
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const dropRef = useRef(null);
  const whitepaperRef = useRef(null);
  const trilogyRef = useRef(null);
  const deploymentRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const dropInView = useInView(dropRef, { threshold: 0.3 });
  const whitepaperInView = useInView(whitepaperRef, { threshold: 0.3 });
  const trilogyInView = useInView(trilogyRef, { threshold: 0.3 });
  const deploymentInView = useInView(deploymentRef, { threshold: 0.3 });
  const ctaInView = useInView(ctaRef, { threshold: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleLogin = () => {
    if (password === 'operator' || password === 'vault' || password === 'protocol') {
      setShowLogin(false);
      setMysteryLevel(prev => prev + 1);
      setDiscoveredSecrets(prev => new Set([...prev, 'access_granted']));
      // Redirect to main site after successful login
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  };

  const revealSection = (sectionId) => {
    setRevealedSections(prev => new Set([...prev, sectionId]));
    setMysteryLevel(prev => prev + 1);
  };

  const discoverSecret = (secretId) => {
    setDiscoveredSecrets(prev => new Set([...prev, secretId]));
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Clean Background - Like Preloader Screen 2 */}
      <div className="absolute inset-0">
        {/* Subtle animated lines - minimal like screen 2 */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-full h-px ${isDark ? 'bg-white opacity-10' : 'bg-black opacity-10'}`}
            style={{ top: `${25 + i * 25}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`${isDark ? 'bg-black border-white/20' : 'bg-white border-black/20'} border rounded-lg p-8 max-w-sm w-full mx-4 shadow-lg`}
            >
              <div className="text-center mb-6">
                <Eye className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'} mx-auto mb-3`} />
                <h3 className="text-lg font-light">Access Protocol</h3>
              </div>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Enter code..."
                className={`w-full ${isDark ? 'bg-black border-white/20 text-white' : 'bg-white border-black/20 text-black'} border rounded px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-opacity-50 transition-all`}
              />

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleLogin}
                  className={`flex-1 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} py-3 rounded font-light transition-all hover:opacity-80`}
                >
                  Access
                </button>
                <button
                  onClick={() => setShowLogin(false)}
                  className={`flex-1 ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'} border py-3 rounded font-light transition-all hover:opacity-80`}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-center p-8">
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className={`w-8 h-8 flex items-center justify-center ${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'} transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <motion.button
            onClick={() => setShowLogin(true)}
            className={`w-8 h-8 flex items-center justify-center ${isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'} transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        {/* Mythological Hero Section */}
        <motion.section
          ref={heroRef}
          className="text-center max-w-6xl mx-auto mb-32"
          style={{ y, opacity }}
        >
          {/* Mystery Level Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mysteryLevel > 0 ? 1 : 0 }}
            className="mb-8"
          >
            <div className="flex justify-center items-center gap-2">
              <span className="text-xs text-blue-500">PROTOCOL DEPTH:</span>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i < mysteryLevel ? 'bg-blue-500' : 'bg-gray-300'}`}
                  animate={{ scale: i < mysteryLevel ? [1, 1.2, 1] : 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            {/* Main Title with Gradient - Like 2nd Screen */}
            <motion.h1
              className="text-5xl md:text-8xl font-black mb-8 tracking-wider bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              onClick={() => discoverSecret('title_clicked')}
            >
              🌐 UNIFIED AI
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                The Sovereign Intelligence Stack
              </h2>

              <motion.p
                className="text-lg md:text-xl text-blue-600 font-medium italic"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "It looks like a white paper.<br />
                But it's something else entirely."
              </motion.p>
            </motion.div>

            {/* Mystery Reveal Button */}
            <motion.button
              onClick={() => revealSection('drop_live')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🔍 Discover the Protocol</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="button-bg"
              />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Apple-Style Book Drop Section */}
        <motion.section
          ref={deploymentRef}
          className="py-32 px-8"
        >
          <div className="max-w-7xl mx-auto">
            {/* Hero Header - Apple Style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={deploymentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="text-center mb-20"
            >
              <motion.h2
                className="text-5xl md:text-7xl font-thin mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Choose Your Path
              </motion.h2>
              <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Three tiers of protocol engagement.<br />
                Each designed for a different level of commitment to the sovereign intelligence stack.
              </p>
            </motion.div>

            {/* Premium Cards Grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: 'Preview Drop',
                  subtitle: 'PDF Excerpt + Trilogy Sampler',
                  price: 'Free',
                  description: 'Perfect for curious minds',
                  features: ['White Paper Excerpt', 'Trilogy Sampler', 'Protocol Overview', 'Community Access'],
                  color: 'from-blue-400 to-blue-600',
                  icon: '🌟',
                  cta: 'Start Discovery'
                },
                {
                  name: 'Full Drop',
                  subtitle: 'Complete access + tools',
                  price: '$27',
                  description: 'For serious operators',
                  features: ['Complete White Paper', 'AI Agent Prompt Pack', 'Vault Invite', 'Token Access', 'Codex Excerpts'],
                  color: 'from-purple-500 to-pink-600',
                  icon: '🚀',
                  cta: 'Deploy Protocol',
                  featured: true
                },
                {
                  name: 'Vault Access',
                  subtitle: 'Complete operator package',
                  price: '$333',
                  description: 'For protocol architects',
                  features: ['Everything Above', 'Handle Mint', 'Codex Vaults', '$VAULT Token Drop', 'Operator Council'],
                  color: 'from-orange-500 to-red-600',
                  icon: '⚡',
                  cta: 'Enter Vault'
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={deploymentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 1 }}
                  className={`group relative ${tier.featured ? 'lg:scale-110 lg:-mt-8' : ''}`}
                >
                  {/* Premium Card */}
                  <div className={`
                    relative overflow-hidden rounded-3xl p-8 lg:p-10
                    ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}
                    backdrop-blur-xl border border-white/20
                    shadow-2xl hover:shadow-3xl
                    transition-all duration-700 ease-out
                    hover:scale-105 hover:-translate-y-2
                    ${tier.featured ? 'ring-2 ring-purple-500/50' : ''}
                  `}>

                    {/* Featured Badge */}
                    {tier.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={deploymentInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      >
                        <div className={`px-6 py-2 rounded-full bg-gradient-to-r ${tier.color} text-white text-sm font-semibold shadow-lg`}>
                          Most Popular
                        </div>
                      </motion.div>
                    )}

                    {/* Icon */}
                    <motion.div
                      className="text-6xl mb-6 text-center"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {tier.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">{tier.name}</h3>
                      <p className="text-gray-500 mb-4 font-light">{tier.subtitle}</p>
                      <p className="text-sm text-gray-400 mb-6">{tier.description}</p>

                      {/* Price */}
                      <div className="mb-8">
                        <span className={`text-4xl lg:text-5xl font-thin bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                          {tier.price}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={deploymentInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 + idx * 0.05, duration: 0.6 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tier.color} flex-shrink-0`} />
                          <span className="text-sm font-light">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`
                        w-full py-4 rounded-2xl font-semibold text-white
                        bg-gradient-to-r ${tier.color}
                        shadow-lg hover:shadow-xl
                        transition-all duration-300 ease-out
                        hover:scale-105 active:scale-95
                        relative overflow-hidden group
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        revealSection(`tier_${index}`);
                        discoverSecret(`selected_${tier.name.toLowerCase()}`);
                      }}
                    >
                      <span className="relative z-10">{tier.cta}</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </div>

                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-r ${tier.color} blur-xl -z-10
                    transition-opacity duration-700
                  `} />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={deploymentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="text-center mt-20"
            >
              <p className="text-gray-500 mb-6">
                Not sure which path to choose? Start with the free preview and upgrade anytime.
              </p>
              <motion.button
                className="px-8 py-3 border border-gray-300 rounded-full font-light hover:bg-gray-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Compare All Features
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Trilogy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-8">As It Is Trilogy</h2>
          <p className={`text-sm mb-12 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            Codex layers inside the Unified AI stack
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AlphaSignals', subtitle: 'Signal = Execution' },
              { title: 'Industry Tycoon', subtitle: 'Infrastructure = Freedom' },
              { title: 'Infinite Syndications', subtitle: 'Belief = Broadcast Protocol' }
            ].map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.2, duration: 0.8 }}
                className={`${isDark ? 'border-white/20' : 'border-black/20'} border rounded-lg p-6 text-center hover:border-opacity-50 transition-all`}
              >
                <h3 className="text-lg font-light mb-2">{book.title}</h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>{book.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="text-center"
        >
          <button className={`${isDark ? 'bg-white text-black' : 'bg-black text-white'} px-8 py-4 rounded font-light transition-all hover:opacity-80 flex items-center gap-2 mx-auto`}>
            <Download className="w-4 h-4" />
            Download Whitepaper
          </button>
        </motion.div>
      </div>
    </div>
  );
}
