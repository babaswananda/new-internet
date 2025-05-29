'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase, hasValidCredentials } from '@/lib/supabase';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { GlowingCard } from '@/components/ui/glowing-card';

const SupabaseAuthGate: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Check if Supabase is configured
    if (!hasValidCredentials()) {
      setMessage('❌ Supabase credentials not configured. Please check your .env.local file.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setMessage(`❌ ${error.message}`);
        } else {
          setMessage('✅ Login successful!');
        }
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          setMessage(`❌ ${error.message}`);
        } else {
          setMessage('✅ Account created! Please check your email to verify.');
        }
      }
    } catch (error) {
      setMessage('❌ An unexpected error occurred.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Retro Grid Background - Bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-1/2 z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(45deg)',
            transformOrigin: 'center bottom'
          }}
        ></div>
        {/* Gradient fade to blend with particles */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <GlowingCard className="bg-black/90 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-3xl font-bold mb-3 tracking-wider">
                  <span className="text-white">
                    UNIFIED AI <span className="text-4xl">🤖</span>
                  </span>
                </h1>
                <p className="text-gray-400 text-sm mb-1">
                  🔒 Secure Access Portal
                </p>
                <p className="text-gray-500 text-xs italic font-mono">
                  "Where Intelligence Meets Infrastructure"
                </p>
              </motion.div>
            </div>

            {/* Toggle */}
            <div className="flex mb-6 bg-gray-900/50 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  isLogin
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  !isLogin
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Enter your password"
                />
              </div>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm text-center p-3 rounded-lg ${
                    message.includes('❌')
                      ? 'text-red-400 bg-red-500/10 border border-red-500/20'
                      : 'text-green-400 bg-green-500/10 border border-green-500/20'
                  }`}
                >
                  {message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </div>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}

                {/* Glowing edge effect on hover */}
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm -z-10"></div>
              </motion.button>
            </motion.form>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 text-center text-xs text-gray-500"
            >
              Secure authentication powered by Supabase
            </motion.div>
          </GlowingCard>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-purple-400 text-4xl opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🔐
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-16 text-cyan-400 text-3xl opacity-30"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🛡️
      </motion.div>
    </div>
  );
};

export default SupabaseAuthGate;
