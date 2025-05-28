'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Simulate password reset
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage('✅ Password reset link sent! Check your email.');
      setIsSubmitted(true);
    } catch (error) {
      setMessage('❌ Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                <HeaderText>Reset Password</HeaderText>
              </h1>
              <p className="text-gray-300">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-lg text-sm ${
                  message.includes('✅') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {message}
              </motion.div>
            )}

            {!isSubmitted ? (
              <>
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Reset Link...
                      </div>
                    ) : (
                      'Send Reset Link'
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Check Your Email</h3>
                <p className="text-gray-300 mb-6">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                    setEmail('');
                  }}
                  className="text-purple-400 hover:text-purple-300 text-sm"
                >
                  Try again with different email
                </button>
              </div>
            )}

            {/* Links */}
            <div className="mt-6 text-center space-y-2">
              <div className="text-sm text-gray-400">
                Remember your password?{' '}
                <Link href="/auth" className="text-purple-400 hover:text-purple-300">
                  Sign in
                </Link>
              </div>
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
    </MainLayout>
  );
}
