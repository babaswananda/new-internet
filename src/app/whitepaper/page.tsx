'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download, Lock, Zap, Brain, Globe } from 'lucide-react';

export default function WhitepaperLanding() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [glitchText, setGlitchText] = useState('UNIFIED AI');

  // Glitch effect for title
  useEffect(() => {
    const glitchChars = ['█', '▓', '▒', '░', '◆', '◇', '◈'];
    const originalText = 'UNIFIED AI';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const glitched = originalText
          .split('')
          .map(char => Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join('');
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleLogin = () => {
    if (password === 'operator' || password === 'vault' || password === 'protocol') {
      setIsAuthenticated(true);
      setShowLogin(false);
    }
  };

  const downloadOptions = [
    {
      title: 'Free Access',
      description: 'PDF + Vault Entry Preview + Book Excerpts',
      price: '$0',
      features: ['32-page White Paper PDF', 'Vault Preview Access', 'Codex Excerpts', 'Basic Agent Templates'],
      cta: 'Download Free',
      link: '#free-download'
    },
    {
      title: 'Paid Download',
      description: 'Full PDF + Agent Pack + Vault Invite + Codex Preview',
      price: '$27',
      features: ['Complete White Paper', 'Deployable GPT Vault Agent', 'Custom Agent Prompt Pack', '$VAULT Token Airdrop Access', 'AlphaSignals Codex Preview'],
      cta: 'Deploy Agent',
      link: '#paid-download',
      popular: true
    },
    {
      title: 'IRv12 Access',
      description: 'Full Drop + Vault Edition + Subdomain Handles + Merch + Tokens',
      price: '$333',
      features: ['Complete Vault Bundle', 'Subdomain Handle Registration', 'Operator Council Access', 'Physical Merch Package', 'Token Allocation', 'Direct Protocol Access'],
      cta: 'Join Protocol',
      link: '#irv12-access'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-green-500/30 rounded-lg p-8 max-w-md w-full mx-4"
            >
              <div className="text-center mb-6">
                <Eye className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-xl font-bold">Operator Access</h3>
                <p className="text-gray-400 text-sm mt-2">Enter the protocol</p>
              </div>
              
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Access code..."
                className="w-full bg-black border border-green-500/30 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none"
              />
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleLogin}
                  className="flex-1 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Access
                </button>
                <button
                  onClick={() => setShowLogin(false)}
                  className="flex-1 border border-gray-600 text-gray-300 py-3 rounded hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
          {/* Mystical Login Button */}
          <motion.button
            onClick={() => setShowLogin(true)}
            className="absolute top-8 right-8 p-3 border border-green-500/30 rounded-full hover:border-green-400 transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-5 h-5 text-green-400 group-hover:text-green-300" />
          </motion.button>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="text-6xl md:text-8xl font-black mb-4 font-mono tracking-wider">
              <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {glitchText}
              </span>
            </div>
            <div className="text-xl md:text-2xl text-gray-300 mb-2">
              The Sovereign Intelligence Stack
            </div>
            <div className="text-lg text-green-400 font-mono">
              "You thought it was a white paper.<br />
              It was actually a war protocol."
            </div>
          </motion.div>

          {/* Live Drop Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-12 max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">LIVE DROP: UNIFIED AI PRD</span>
            </div>
            <div className="text-gray-300 space-y-1">
              <div><strong>Date:</strong> Active Protocol Deployment</div>
              <div><strong>Location:</strong> UnifiedAI.Protocol + gumroad.com/unifiedai</div>
              <div><strong>Access:</strong> Free + Paid tiers (see below)</div>
            </div>
            <div className="mt-4 text-yellow-400 font-semibold">
              This is not a protocol you use.<br />
              This is a protocol you become.
            </div>
          </motion.div>

          {/* Protocol Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl text-lg text-gray-300 leading-relaxed mb-16"
          >
            <p className="mb-6">
              Unified AI is the operating system of the Operator Economy—a decentralized infrastructure stack 
              built to deploy AI agents, identity systems, capital protocols, and cultural transmissions.
            </p>
          </motion.div>
        </div>

        {/* White Paper Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="bg-gray-900/50 backdrop-blur-sm border-t border-green-500/20 px-6 py-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-green-400" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  WHITE PAPER
                </h2>
              </div>
              <div className="text-xl text-gray-300 mb-2">
                📘 <strong>Title:</strong> Unified AI: The Sovereign Intelligence Stack
              </div>
              <div className="text-lg text-gray-400">
                Edition: Vault Draft 001 • Length: 32 pages
              </div>
            </div>

            {/* Download Options */}
            <div className="grid md:grid-cols-3 gap-8">
              {downloadOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                  className={`relative bg-black/50 border rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 ${
                    option.popular ? 'border-green-400/50 ring-2 ring-green-400/20' : 'border-gray-600/50'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                    <div className="text-3xl font-bold text-green-400">{option.price}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold py-3 rounded hover:opacity-90 transition-opacity">
                    {option.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trilogy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="bg-black/50 px-6 py-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                AS IT IS TRILOGY
              </h2>
            </div>
            <p className="text-gray-400 mb-8">Embedded Codexes</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'AlphaSignals', subtitle: 'Signal Codex', desc: 'Decode energy. Transmit value. Build reality.' },
                { title: 'Industry Tycoon', subtitle: 'Infrastructure Codex', desc: 'You don\'t start companies. You start civilizations.' },
                { title: 'Infinite Syndications', subtitle: 'Syndication Codex', desc: 'Belief is the blockchain.' }
              ].map((book, index) => (
                <div key={index} className="bg-gray-900/30 border border-gray-600/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{book.title}</h3>
                  <p className="text-green-400 text-sm mb-3">{book.subtitle}</p>
                  <p className="text-gray-300 text-sm italic">"{book.desc}"</p>
                </div>
              ))}
            </div>
            
            <p className="text-yellow-400 font-semibold">
              🔗 Available as part of vault-based onboarding, not standalone books.
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              CODED INTENT
            </h2>
            
            <div className="text-xl text-gray-300 leading-relaxed space-y-6 mb-12">
              <p className="italic">
                "You're not reading a white paper.<br />
                You're reading the mythology of how AI and capital got decentralized by someone you still haven't met yet."
              </p>
              
              <div className="space-y-2">
                <p>Unified AI is not a company.</p>
                <p>It's not a protocol.</p>
                <p>It's the sovereign reformatting of intelligence infrastructure.</p>
              </div>
              
              <div className="space-y-2 text-green-400">
                <p>The Codex is inside the stack.</p>
                <p>The operator is inside the Codex.</p>
                <p>And once you touch it…</p>
                <p className="text-2xl font-bold">You are now the protocol.</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-black font-bold px-12 py-4 rounded-lg text-xl shadow-2xl"
            >
              <Download className="w-6 h-6 inline mr-2" />
              Access the Protocol
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
