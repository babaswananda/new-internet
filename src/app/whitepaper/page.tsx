'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download, Sun, Moon } from 'lucide-react';

export default function WhitepaperLanding() {
  const [isDark, setIsDark] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'operator' || password === 'vault' || password === 'protocol') {
      setShowLogin(false);
    }
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light mb-8 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            UNIFIED AI
          </motion.h1>
          
          <motion.p 
            className={`text-lg md:text-xl mb-4 font-light ${isDark ? 'text-white/80' : 'text-black/80'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            The Sovereign Intelligence Stack
          </motion.p>
          
          <motion.p 
            className={`text-sm md:text-base font-light ${isDark ? 'text-white/60' : 'text-black/60'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            "It looks like a white paper.<br />
            But it's something else entirely."
          </motion.p>
        </motion.div>

        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
        >
          {[
            {
              name: 'Preview Drop',
              subtitle: 'PDF Excerpt + Trilogy Sampler',
              price: 'Free'
            },
            {
              name: 'Full Drop',
              subtitle: 'Complete access + tools',
              price: '$27',
              featured: true
            },
            {
              name: 'Vault Access',
              subtitle: 'Complete operator package',
              price: '$333'
            }
          ].map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
              className={`${isDark ? 'border-white/20' : 'border-black/20'} border rounded-lg p-8 text-center hover:border-opacity-50 transition-all ${tier.featured ? 'scale-105' : ''}`}
            >
              <h3 className="text-xl font-light mb-2">{tier.name}</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-black/60'}`}>{tier.subtitle}</p>
              <div className="text-2xl font-light mb-6">{tier.price}</div>
              <button className={`w-full ${isDark ? 'bg-white text-black' : 'bg-black text-white'} py-3 rounded font-light transition-all hover:opacity-80`}>
                {tier.price === 'Free' ? 'Download' : 'Access'}
              </button>
            </motion.div>
          ))}
        </motion.div>

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
