'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import HeaderText from '@/components/ui/header-text';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    accessCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
      <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />
      
      <div className="relative z-10 max-w-md mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <HeaderText>{isLogin ? 'Welcome Back' : 'Join Unified AI'}</HeaderText>
            </h1>
            <p className="text-gray-300">
              {isLogin 
                ? 'Access your account and exclusive content' 
                : 'Create an account to access token information and exclusive features'
              }
            </p>
          </div>

          {/* Toggle */}
          <div className="flex mb-6 bg-black/50 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                isLogin 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${
                !isLogin 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Access Code (Optional)
                  </label>
                  <input
                    type="text"
                    name="accessCode"
                    value={formData.accessCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    placeholder="FOUNDING_BACKER_2024"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Enter access code for exclusive token information
                  </p>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-2">
            {isLogin && (
              <Link href="/auth/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
                Forgot your password?
              </Link>
            )}
            
            <div className="text-sm text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-400 hover:text-purple-300"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>

          {/* Token Access Info */}
          <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <h3 className="text-sm font-medium text-purple-300 mb-2">🔒 Exclusive Access</h3>
            <p className="text-xs text-gray-400">
              Authenticated users with access codes can view token information, ITO details, and Friends & Family round opportunities.
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
