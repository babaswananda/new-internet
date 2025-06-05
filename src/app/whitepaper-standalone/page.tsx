'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Eye, FileText, ArrowRight } from 'lucide-react';

// Simple HeaderText component without external dependencies
const HeaderText = ({ children, className = '' }: { children: string; className?: string }) => {
  const words = children.split(' ');
  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={index} className={index % 2 === 0 ? 'font-normal' : 'font-bold'}>
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
};

export default function StandaloneWhitepaper() {
  const [isDark, setIsDark] = useState(false);
  const [showEmailGate, setShowEmailGate] = useState(false);
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

  const heroInView = useInView(heroRef, { threshold: 0.3 });
  const countdownInView = useInView(countdownRef, { threshold: 0.3 });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleEmailSubmit = () => {
    if (email && email.includes('@')) {
      setHasAccess(true);
      setShowEmailGate(false);
      console.log('Email captured:', email);
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
      </div>

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
              "We stand at the threshold of a new era where AI agents will not merely assist human activities but will participate as agentic economic actors, creating value, forming partnerships, and driving innovation at scales previously unimaginable."
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

      {/* Preview Content */}
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
            A glimpse into the future of agentic AI agents
          </p>
        </div>

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
              The Unified AI Protocol represents a paradigm shift in how we conceptualize, deploy, and interact with artificial intelligence systems. Unlike traditional centralized AI platforms, our protocol establishes a decentralized infrastructure where AI agents operate as agentic entities within a handle-based identity system.
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

            {hasAccess && (
              <div className="mt-8 space-y-6">
                <h5 className="text-xl font-bold text-green-500">
                  <HeaderText>🎉 Full Access Unlocked!</HeaderText>
                </h5>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    <strong>Protocol Architecture:</strong> Our four-layer system consists of the Identity Layer (handle-based addressing), ION Protocol (Intelligent Ontology Network), Vault Economics (tokenized incentives), and AgentOS (runtime environment).
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>Economic Model:</strong> The protocol introduces three core tokens: $VAULT (governance and staking), $AGENT (operational currency), and $HANDLE (identity registration), creating a self-sustaining economy for AI agents.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>AS IT IS Trilogy:</strong> Three comprehensive codices - AlphaSignals (Intelligence), Industry Tycoon (Economics), and Infinite Syndications (Networks) - providing the complete framework for agentic agent deployment.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>Roadmap:</strong> Q4 2024 launches with ION Protocol and Handle Registry, Q1 2025 introduces AgentOS and Vault Economics, with full ecosystem deployment by 2026.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.section>

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
