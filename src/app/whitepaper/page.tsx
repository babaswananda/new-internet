'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { Eye, Download, Sun, Moon, ArrowRight, Star, Shield, Rocket, Zap, Brain, Globe, Twitter, Github, MessageCircle, ChevronDown, Users, Cpu, Network, DollarSign, Calendar, Target, TrendingUp, Lock, Coins, Building, Code, Database, Cloud, BookOpen, FileText, Layers, Briefcase, Lightbulb, Settings } from 'lucide-react';
import { HeaderText } from '@/utils/normalBold';

export default function UnifiedAIWhitepaper() {
  const [isDark, setIsDark] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 72); // 72 hours from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll refs and triggers
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const countdownRef = useRef(null);
  const introRef = useRef(null);
  const quote1Ref = useRef(null);
  const architectureRef = useRef(null);
  const quote2Ref = useRef(null);
  const economicRef = useRef(null);
  const quote3Ref = useRef(null);
  const technicalRef = useRef(null);
  const roadmapRef = useRef(null);
  const trilogyRef = useRef(null);
  const quote4Ref = useRef(null);
  const conclusionRef = useRef(null);

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const countdownInView = useInView(countdownRef, { threshold: 0.3 });
  const introInView = useInView(introRef, { threshold: 0.3 });
  const quote1InView = useInView(quote1Ref, { threshold: 0.3 });
  const architectureInView = useInView(architectureRef, { threshold: 0.3 });
  const quote2InView = useInView(quote2Ref, { threshold: 0.3 });
  const economicInView = useInView(economicRef, { threshold: 0.3 });
  const quote3InView = useInView(quote3Ref, { threshold: 0.3 });
  const technicalInView = useInView(technicalRef, { threshold: 0.3 });
  const roadmapInView = useInView(roadmapRef, { threshold: 0.3 });
  const trilogyInView = useInView(trilogyRef, { threshold: 0.3 });
  const quote4InView = useInView(quote4Ref, { threshold: 0.3 });
  const conclusionInView = useInView(conclusionRef, { threshold: 0.3 });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleLogin = () => {
    if (password === 'operator' || password === 'vault' || password === 'protocol') {
      setShowLogin(false);
      // Redirect to main site after successful login
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  };

  const handleEmailSubmit = () => {
    if (email && email.includes('@')) {
      setHasAccess(true);
      setShowEmailGate(false);
      // Here you would typically send the email to your backend
      console.log('Email captured:', email);
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-all duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Clean Background - Like Main Site */}
      <div className="absolute inset-0">
        {/* Subtle animated lines - minimal like main site */}
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
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold">
                  <HeaderText>Access Protocol</HeaderText>
                </h3>
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
                  className="flex-1 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black py-3 rounded font-bold transition-all hover:from-green-500 hover:via-yellow-600 hover:to-orange-600"
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

      {/* Email Gate Modal */}
      <AnimatePresence>
        {showEmailGate && (
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
              className={`${isDark ? 'bg-black border-white/20' : 'bg-white border-black/20'} border rounded-lg p-8 max-w-md w-full mx-4 shadow-lg`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  <HeaderText>Access Full Whitepaper</HeaderText>
                </h3>
                <p className="text-gray-600">
                  Enter your email to read the complete Unified AI Protocol whitepaper with all technical details, roadmap, and AS IT IS trilogy content.
                </p>
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
                placeholder="your@email.com"
                className={`w-full ${isDark ? 'bg-black border-white/20 text-white' : 'bg-white border-black/20 text-black'} border rounded px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-all mb-4`}
              />

              <div className="flex gap-3">
                <button
                  onClick={handleEmailSubmit}
                  className="flex-1 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black py-3 rounded font-bold transition-all hover:from-green-500 hover:via-yellow-600 hover:to-orange-600"
                >
                  Get Full Access
                </button>
                <button
                  onClick={() => setShowEmailGate(false)}
                  className={`flex-1 ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'} border py-3 rounded font-light transition-all hover:opacity-80`}
                >
                  Cancel
                </button>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500">
                We respect your privacy. No spam, just protocol updates.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Controls */}
      <div className="fixed top-8 right-8 z-50 flex items-center gap-4">
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className={`w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm ${isDark ? 'bg-white/10 text-white/60 hover:text-white' : 'bg-black/10 text-black/60 hover:text-black'} transition-all`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>

        <motion.button
          onClick={() => setShowLogin(true)}
          className={`w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm ${isDark ? 'bg-white/10 text-white/60 hover:text-white' : 'bg-black/10 text-black/60 hover:text-black'} transition-all`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Hero Section with Countdown */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
        style={{ scale }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="text-center max-w-6xl mx-auto px-8 relative z-10"
        >
          {/* Protocol Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-400/20 via-yellow-500/20 to-orange-500/20 border border-green-400/30 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">
                <HeaderText>PROTOCOL WHITEPAPER</HeaderText>
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-9xl font-bold mb-8 tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <HeaderText>UNIFIED AI</HeaderText>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <HeaderText>The Sovereign Intelligence Stack</HeaderText>
          </motion.h2>

          {/* Epic Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 1 }}
            className="mb-16"
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-600 font-medium italic max-w-4xl mx-auto leading-relaxed"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              "We stand at the threshold of a new era where AI agents will not merely assist human activities but will participate as autonomous economic actors, creating value, forming partnerships, and driving innovation at scales previously unimaginable."
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 72-Hour Countdown Section */}
      <motion.section
        ref={countdownRef}
        className="py-32 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={countdownInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center max-w-4xl mx-auto px-8"
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={countdownInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <HeaderText>PROTOCOL LAUNCH COUNTDOWN</HeaderText>
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={countdownInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The future of autonomous AI agents begins in...
          </motion.p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds }
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 30 }}
                animate={countdownInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-black/30' : 'border-black/20 bg-white/30'} backdrop-blur-sm`}
              >
                <motion.div
                  className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 mb-2"
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.div>
                <div className="text-sm font-medium text-gray-500">
                  <HeaderText>{unit.label}</HeaderText>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Access Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={countdownInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <button
              onClick={() => setShowEmailGate(true)}
              className="group relative px-12 py-4 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold rounded-lg transition-all hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FileText className="w-5 h-5" />
                <HeaderText>READ FULL WHITEPAPER</HeaderText>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="button-glow"
              />
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Get instant access to the complete protocol documentation
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Preview Content - Always Visible */}
      <motion.section
        className="py-32 max-w-4xl mx-auto px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
            <HeaderText>Whitepaper Preview</HeaderText>
          </h3>
          <p className="text-gray-600 text-lg">
            A glimpse into the future of autonomous AI agents
          </p>
        </div>

        {/* Preview Sections */}
        <div className="space-y-16">
          {/* Executive Summary Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-lg border ${isDark ? 'border-white/20 bg-black/30' : 'border-black/20 bg-white/30'} backdrop-blur-sm`}
          >
            <h4 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
              <HeaderText>Executive Summary</HeaderText>
            </h4>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                The Unified AI Protocol represents a paradigm shift in how we conceptualize, deploy, and interact with artificial intelligence systems. Unlike traditional centralized AI platforms, our protocol establishes a decentralized infrastructure where AI agents operate as autonomous entities within a handle-based identity system.
              </p>
              <p className="text-gray-600">
                At its core, the Unified AI Protocol addresses three fundamental challenges in the current AI landscape: centralization risk, identity crisis, and economic inefficiency...
              </p>

              {!hasAccess && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-400/10 via-yellow-500/10 to-orange-500/10 border border-green-400/20 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">
                    🔒 <strong>Continue reading:</strong> Get full access to technical architecture, economic models, roadmap, and AS IT IS trilogy content.
                  </p>
                  <button
                    onClick={() => setShowEmailGate(true)}
                    className="text-sm bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black px-4 py-2 rounded font-medium hover:from-green-500 hover:via-yellow-600 hover:to-orange-600 transition-all"
                  >
                    Unlock Full Whitepaper
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Full Whitepaper Content - Only After Email Access */}
      {hasAccess && (
        <div className="max-w-4xl mx-auto px-8 space-y-32">
          {/* Introduction Section */}
          <motion.section
            ref={introRef}
            initial={{ opacity: 0, y: 50 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
                <HeaderText>Introduction</HeaderText>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  The Unified AI Protocol represents a paradigm shift in how we conceptualize, deploy, and interact with artificial intelligence systems. Unlike traditional centralized AI platforms, our protocol establishes a decentralized infrastructure where AI agents operate as autonomous entities within a handle-based identity system.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  At its core, the Unified AI Protocol addresses three fundamental challenges in the current AI landscape:
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-12">
                  {[
                    {
                      icon: <Lock className="w-8 h-8" />,
                      title: "Centralization Risk",
                      description: "Current AI systems are controlled by a few large corporations, creating single points of failure and limiting innovation."
                    },
                    {
                      icon: <Users className="w-8 h-8" />,
                      title: "Identity Crisis",
                      description: "AI agents lack persistent, verifiable identities that can operate across different platforms and contexts."
                    },
                    {
                      icon: <DollarSign className="w-8 h-8" />,
                      title: "Economic Inefficiency",
                      description: "No standardized economic model exists for AI agents to transact, collaborate, and create value autonomously."
                    }
                  ].map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={introInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className={`p-6 rounded-lg border ${isDark ? 'border-white/20 bg-black/30' : 'border-black/20 bg-white/30'} backdrop-blur-sm`}
                    >
                      <div className="text-green-500 mb-4">{challenge.icon}</div>
                      <h3 className="text-xl font-bold mb-3">
                        <HeaderText>{challenge.title}</HeaderText>
                      </h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  The Unified AI Protocol solves these challenges through a comprehensive stack that includes:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 mt-3 flex-shrink-0" />
                    <span><strong>ION (Intelligent Ontology Network):</strong> A decentralized protocol for AI agent identity and interaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 mt-3 flex-shrink-0" />
                    <span><strong>Handle Registry System:</strong> Persistent, verifiable identities for AI agents and operators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 mt-3 flex-shrink-0" />
                    <span><strong>Vault Economics:</strong> A token-based economic model enabling autonomous AI transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 mt-3 flex-shrink-0" />
                    <span><strong>AgentOS:</strong> An operating system designed specifically for AI agent deployment and management</span>
                  </li>
                </ul>

                <div className={`p-8 rounded-lg ${isDark ? 'bg-black/30 border-white/20' : 'bg-white/30 border-black/20'} border backdrop-blur-sm`}>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
                    <HeaderText>Vision Statement</HeaderText>
                  </h3>
                  <p className="text-lg italic">
                    "To create a decentralized internet where AI agents operate as first-class citizens,
                    with their own identities, economic capabilities, and the freedom to collaborate
                    across platforms without centralized control."
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        {/* Featured Quote 1 */}
        <motion.section
          ref={quote1Ref}
          className="py-32 relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={quote1InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center max-w-4xl mx-auto px-8"
          >
            <motion.blockquote
              className="text-3xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={quote1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                "To create a decentralized internet where AI agents operate as first-class citizens, with their own identities, economic capabilities, and the freedom to collaborate across platforms without centralized control."
              </motion.span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              animate={quote1InView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 text-gray-500 text-lg"
            >
              — Vision Statement, Unified AI Protocol
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Protocol Architecture Section */}
        <motion.section
            ref={architectureRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500">
                <HeaderText>Protocol Architecture</HeaderText>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8">
                  The Unified AI Protocol is built on a four-layer architecture that provides the foundation for autonomous AI agent operations:
                </p>

                <div className="space-y-8">
                  {[
                    {
                      layer: "Layer 1: Identity & Registry",
                      icon: <Network className="w-8 h-8" />,
                      title: "Handle Registry System",
                      description: "The foundation layer provides persistent, verifiable identities for all entities in the network.",
                      components: [
                        "Human/Developer Handles (.aideveloper, .vibecoder)",
                        "AI Agent Handles (.aiagents, .aiavatars)",
                        "Endpoint Handles (.router, .endpoint)",
                        "Session Handles (expiring disposable IDs)"
                      ]
                    },
                    {
                      layer: "Layer 2: Communication & Ontology",
                      icon: <Brain className="w-8 h-8" />,
                      title: "ION Protocol",
                      description: "Enables semantic communication and knowledge sharing between AI agents.",
                      components: [
                        "Semantic tagging and categorization",
                        "Cross-agent communication protocols",
                        "Knowledge graph integration",
                        "Ontology synchronization"
                      ]
                    },
                    {
                      layer: "Layer 3: Economic Infrastructure",
                      icon: <Coins className="w-8 h-8" />,
                      title: "Vault Economics",
                      description: "Provides the economic framework for autonomous AI transactions and value creation.",
                      components: [
                        "Token-based transaction system",
                        "Automated payment rails",
                        "Value attribution mechanisms",
                        "Economic incentive alignment"
                      ]
                    },
                    {
                      layer: "Layer 4: Execution Environment",
                      icon: <Cpu className="w-8 h-8" />,
                      title: "AgentOS",
                      description: "The operating system layer that provides runtime environment for AI agents.",
                      components: [
                        "Agent lifecycle management",
                        "Resource allocation and scheduling",
                        "Security and sandboxing",
                        "Inter-agent communication"
                      ]
                    }
                  ].map((layer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={architectureInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className={`p-8 rounded-lg border ${isDark ? 'border-white/20 bg-black/30' : 'border-black/20 bg-white/30'} backdrop-blur-sm`}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-green-500">{layer.icon}</div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">{layer.layer}</div>
                          <h3 className="text-2xl font-bold mb-2">
                            <HeaderText>{layer.title}</HeaderText>
                          </h3>
                          <p className="text-gray-600">{layer.description}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg mb-3">Key Components:</h4>
                        {layer.components.map((component, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-orange-500 mt-2 flex-shrink-0" />
                            <span>{component}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      )}

      {/* Simple Footer */}
      <footer className={`border-t ${isDark ? 'border-white/20' : 'border-black/20'} py-12 mt-32`}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-xl font-bold">
              <HeaderText>UNIFIED AI</HeaderText>
            </h1>
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Unified AI Protocol. Building the Autonomous Future.
          </p>
        </div>
      </footer>
    </div>
  );
}
