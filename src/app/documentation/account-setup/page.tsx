'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, User, Shield, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AccountSetupPage() {
  const setupSteps = [
    {
      step: 1,
      title: 'Create Your Account',
      description: 'Sign up with email or connect your existing wallet',
      details: [
        'Visit unified.ai and click "Sign Up"',
        'Enter your email address and create a secure password',
        'Verify your email address through the confirmation link',
        'Optional: Connect your existing crypto wallet for seamless transactions'
      ],
      icon: <User className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Security Configuration',
      description: 'Enable two-factor authentication and backup options',
      details: [
        'Enable 2FA using Google Authenticator or similar app',
        'Set up backup recovery codes and store them securely',
        'Configure notification preferences for security alerts',
        'Review and accept the Terms of Service and Privacy Policy'
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Profile Setup',
      description: 'Complete your profile and preferences',
      details: [
        'Add your display name and profile information',
        'Select your primary use case (developer, business, creator, etc.)',
        'Choose your preferred notification settings',
        'Set your timezone and language preferences'
      ],
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Initial Configuration',
      description: 'Set up your workspace and initial settings',
      details: [
        'Choose your I.O. subscription plan (Starter, Builder, or Master)',
        'Configure your default AI model preferences',
        'Set up your workspace organization and team settings',
        'Review billing information and payment methods'
      ],
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const requirements = [
    { item: 'Valid email address', required: true },
    { item: 'Strong password (8+ characters)', required: true },
    { item: 'Two-factor authentication app', required: true },
    { item: 'Crypto wallet (optional)', required: false },
    { item: 'Payment method for subscription', required: false }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-purple-900/20 to-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Link
                href="/documentation"
                className="p-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-lg hover:border-purple-500/50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Account Setup
                </h1>
                <p className="text-gray-400 mt-2">Creating your account and initial configuration</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-2">Before You Begin</h3>
                    <p className="text-gray-300">
                      Setting up your Unified AI account takes about 10 minutes. Make sure you have a secure 
                      environment and the requirements listed below before starting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${req.required ? 'bg-red-400' : 'bg-gray-400'}`}></div>
                      <span className={`${req.required ? 'text-white' : 'text-gray-400'}`}>
                        {req.item}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${req.required ? 'bg-red-500/20 text-red-400' : 'bg-gray-500/20 text-gray-400'}`}>
                        {req.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Setup Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Setup Process</h2>
              <div className="space-y-8">
                {setupSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                              <span className="text-sm text-gray-400">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Best Practices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Security Best Practices</h2>
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-3">✅ Do</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Use a unique, strong password</li>
                      <li>• Enable two-factor authentication</li>
                      <li>• Keep recovery codes in a safe place</li>
                      <li>• Use a secure network connection</li>
                      <li>• Regularly review account activity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-400 mb-3">❌ Don't</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Share your login credentials</li>
                      <li>• Use public WiFi for setup</li>
                      <li>• Skip security verification steps</li>
                      <li>• Store passwords in browsers</li>
                      <li>• Ignore security notifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Troubleshooting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Common Issues</h2>
              <div className="space-y-4">
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Email verification not received</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Check your spam folder and ensure the email address is correct. You can request a new verification email from the login page.
                  </p>
                </div>
                
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">2FA setup issues</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Ensure your device's time is synchronized and try scanning the QR code again. Contact support if issues persist.
                  </p>
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Payment method declined</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Verify your payment information and ensure your card supports international transactions. Try a different payment method if needed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Account Created Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Your account is ready. Next, claim your unique handle to establish your digital identity.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/documentation/handle-registration"
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                  >
                    Claim Your Handle
                  </Link>
                  <Link
                    href="/documentation/first-agent"
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
                  >
                    Deploy First Agent
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
