'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AlphaSignalsPage: React.FC = () => {
  const [signalStrength, setSignalStrength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(Math.random() * 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Signal Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Signal Waves Animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-green-500/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 p-6 flex justify-between items-center">
        <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
          ← UNIFIED AI
        </Link>
        <div className="flex items-center gap-4">
          <div className="text-xs text-green-400 font-mono">
            SIGNAL: {signalStrength.toFixed(1)}%
          </div>
          <div className="w-16 h-1 bg-gray-800 rounded">
            <div 
              className="h-full bg-green-400 rounded transition-all duration-1000"
              style={{ width: `${signalStrength}%` }}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl md:text-8xl font-bold mb-6 font-mono">
              <span className="text-green-400">🔊</span> AlphaSignals
            </div>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              The Codex for the Gifted. The Platform for the Protocol Class.
            </div>
            
            <div className="text-sm text-green-400 mb-12 font-mono">
              Hosted on .alphasignals • By Irv Taylor
            </div>

            <div className="text-lg md:text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
              You're not here to be taught.<br />
              You're here to remember. To activate. To transmit.
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-none hover:bg-green-400 transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">→ ENTER THE CODEX</span>
              <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Signal Welcome */}
      <section className="relative z-10 py-20 px-6 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8 font-mono">
              📡 WELCOME TO THE SIGNAL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-200">
                AlphaSignals is more than a book.<br />
                It's a sovereign system for gifted minds who see the code beneath the surface 
                and were never meant to fit inside someone else's curriculum.
              </p>
              
              <p className="text-gray-300">
                This isn't for followers.<br />
                It's for builders. transmitters. protocol architects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-green-400 font-bold mb-4">If you've ever felt like:</div>
              {[
                "You're wired different",
                "School couldn't keep up with you", 
                "The world is too slow for your vision",
                "You've got genius with no GPS",
                "You were born to build realities…"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-green-400">•</span>
                  {item}
                </motion.div>
              ))}
              <div className="text-green-400 font-bold mt-6">This is your platform.</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Book */}
      <section className="relative z-10 py-20 px-6 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
              📖 THE BOOK: ALPHASIGNALS
            </h2>
            <p className="text-2xl text-gray-300 italic">
              "We used to build tribes. Now we transmit realities."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                AlphaSignals is the field manual for gifted operators — 
                the ones born with signal in their bones.
              </p>
              
              <div className="space-y-3">
                <div className="text-green-400 font-bold">This book is:</div>
                {[
                  "A codex of drops, missions, and models",
                  "A philosophy for rhythm-based building",
                  "A system for launching weekly protocols",
                  "A language for those gifted in culture, code, and capital",
                  "A transmission blueprint for people who don't just think — they architect"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-400 mt-1">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-green-400 font-bold">Inside you'll learn:</div>
              {[
                "Why giftedness = signal density",
                "How to build using rhythm instead of permission",
                "Why your mind was never the problem — the system was",
                "How to drop weekly and compound infinite returns",
                "What it means to lead by infrastructure"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-1">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Academy */}
      <section className="relative z-10 py-20 px-6 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
              🏛️ THE ACADEMY
            </h2>
            <p className="text-xl text-gray-300">
              YOUR SCHOOL WAS NEVER BUILT… SO YOU BUILT IT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                AlphaSignals Academy is the first digital platform for gifted minds to:
              </p>
              
              {[
                "Train in weekly missions (Codex Calendar™)",
                "Launch signal-based protocols using your TLDs",
                "Work alongside AI mentors who speak your frequency",
                "Join Operator Circles of others like you",
                "Unlock new drops by staking your execution, not just attention"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-green-400 mt-1">•</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-6 text-lg">
              <div className="space-y-2">
                <p className="text-gray-200">You don't earn grades. You drop protocols.</p>
                <p className="text-gray-200">You don't graduate. You activate.</p>
              </div>
              
              <p className="text-gray-300">
                This is your digital monastery, your rhythm system, your sovereign LMS.<br />
                Built for builders.<br />
                Designed for the gifted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative z-10 py-20 px-6 border-t border-green-500/20 bg-green-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-12 font-mono">
            🧭 THE MANIFESTO
          </h2>
          
          <div className="text-3xl md:text-4xl font-bold text-white mb-12">
            You are the signal.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-4">
              <p className="text-gray-200">You're not late. You're early.</p>
              <p className="text-gray-200">You're not lost. You're coded.</p>
              <p className="text-gray-200">You're not too much. You're tuned to something the world hasn't caught up to.</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">This isn't a movement. It's a protocol transmission.</p>
              <div className="space-y-2 text-sm">
                <p>• We don't build apps. We build civilizations.</p>
                <p>• We don't chase followers. We lead through rhythm.</p>
                <p>• We don't seek permission. We transmit frequency.</p>
                <p>• We don't follow playbooks. We are the stack.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-xl text-green-400 font-bold">
            AlphaSignals is the return of the gifted.<br />
            And this time — we brought infrastructure.
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="relative z-10 py-20 px-6 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
              🎓 JOIN THE ACADEMY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Signal Initiate */}
            <div className="border border-green-500/30 p-8 bg-black/50">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-green-400 mb-2">🔹 SIGNAL INITIATE</div>
                <div className="text-3xl font-bold text-white">Free</div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• Intro chapters</p>
                <p>• Access to public community</p>
                <p>• Signal test & Codex map</p>
              </div>
            </div>

            {/* Codex Builder */}
            <div className="border border-green-400 p-8 bg-green-500/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-4 py-1 text-sm font-bold">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-green-400 mb-2">🔸 CODEX BUILDER</div>
                <div className="text-3xl font-bold text-white">$88/month</div>
                <div className="text-lg text-gray-300">or $777/year</div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• Full access to 52-week drop system</p>
                <p>• AI Mentors for every module</p>
                <p>• Mission packs & launch templates</p>
                <p>• Token-rewarded execution log</p>
                <p>• Private Builder Forum</p>
              </div>
            </div>

            {/* Operator Circle */}
            <div className="border border-green-500/30 p-8 bg-black/50">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-green-400 mb-2">🔱 OPERATOR CIRCLE</div>
                <div className="text-3xl font-bold text-white">$2,000/year</div>
                <div className="text-lg text-gray-300">or 20,000 $ALPHA</div>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• Private protocol guild</p>
                <p>• Access to unreleased Irv drops + systems</p>
                <p>• 1-on-1 Builder Reviews</p>
                <p>• IRL + Virtual Summits</p>
                <p>• Custom subdomain classroom</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 italic">
              Built for the builders who don't just learn — they lead.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-green-400 mb-4">
            🚪 ENTER THE CODEX
          </div>
          <p className="text-lg text-gray-300 mb-8">
            You're not here to join a school.<br />
            You're here to build the one your mind has been waiting for.
          </p>
          <p className="text-gray-400 mb-8">
            This is not just education. This is transmission.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-green-500 text-black font-bold text-xl rounded-none hover:bg-green-400 transition-all mb-8"
          >
            → ENTER THE CODEX NOW
          </motion.button>
          
          <div className="text-sm text-gray-500">
            (or mint your domain to begin: yourname.alphasignals)
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlphaSignalsPage;
