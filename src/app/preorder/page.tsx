'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';

const PreOrderPage = () => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const devices = [
    {
      id: 'aiphone',
      name: '.AIPhone',
      price: '$899',
      description: 'Your sovereign device.',
      features: ['eSIM enabled', 'Runs your agents locally', 'Vault + inbox built-in', 'Powered by CyberMobile'],
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      availability: 'Q2 2024',
      stock: 'Limited - 500 units'
    },
    {
      id: 'aipods',
      name: '.AIPods',
      price: '$299',
      description: 'Voice prompt execution on the go.',
      features: ['Agentic voice relays', 'Context memory sync', 'Spoken command-to-action'],
      icon: '🎧',
      color: 'from-purple-500 to-pink-500',
      availability: 'Q1 2024',
      stock: 'In Stock - 1,200 units'
    },
    {
      id: 'aiglasses',
      name: '.AIGlasses',
      price: '$1,299',
      description: 'Real-world agent overlay.',
      features: ['Augmented HUD', 'Task execution and reminders', 'Visual command response'],
      icon: '👓',
      color: 'from-green-500 to-teal-500',
      availability: 'Q3 2024',
      stock: 'Pre-Order - 200 units'
    },
    {
      id: 'aiemail',
      name: '.AIEmail',
      price: '$199',
      description: 'The first email that speaks AI.',
      features: ['Inbox = Agent', 'Smart replies = Intent aware', 'Built on your handle'],
      icon: '📩',
      color: 'from-orange-500 to-red-500',
      availability: 'Available Now',
      stock: 'In Stock - 2,000 units'
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    Pre-Order Hardware
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  The Hardware Layer of the Agentic Internet
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Your software now comes with a body. Each device is an extension of your handle, vault, and agent stack.
                </p>
              </motion.div>

              {/* Developer Mode */}
              <motion.div variants={itemVariants} className="mb-12">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-orange-400 text-center">🔮 Hardware Drop Protocol</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-sm mb-6">
                    <div className="text-orange-400 mb-2">$ hardware.drop --device="aiphone" --stake-tokens="1000" --priority="early-access"</div>
                    <div className="text-gray-400 mb-4">🔗 Connecting to vault...</div>
                    <div className="text-green-400 mb-2">✓ Tokens staked successfully</div>
                    <div className="text-blue-400">📦 Reserved: .AIPhone #0001 | Shipping: Q2 2024</div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-300 mb-4">
                      <span className="text-orange-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Device Selection */}
              <motion.div variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Device</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {devices.map((device) => (
                    <GlowingCard 
                      key={device.id} 
                      className={`bg-black/30 backdrop-blur-sm p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedDevice === device.id 
                          ? 'border-orange-500/50 bg-orange-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setSelectedDevice(device.id)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="text-3xl mr-4">{device.icon}</div>
                          <div>
                            <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${device.color}`}>
                              {device.name}
                            </h3>
                            <p className="text-gray-300">{device.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{device.price}</div>
                          <div className="text-sm text-gray-400">{device.availability}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">{device.stock}</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${device.color}`}
                            style={{ width: device.stock.includes('Limited') ? '20%' : device.stock.includes('Pre-Order') ? '10%' : '80%' }}
                          ></div>
                        </div>
                      </div>

                      <ul className="space-y-1 text-sm">
                        {device.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center">
                            <span className="mr-2 text-green-400">‣</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {selectedDevice === device.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <div className="text-green-400 text-sm font-semibold">✓ Selected for Pre-Order</div>
                        </motion.div>
                      )}
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Pre-Order Form */}
              {selectedDevice && (
                <motion.div 
                  variants={itemVariants} 
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-orange-500/20">
                    <h3 className="text-2xl font-semibold mb-6 text-orange-400 text-center">Complete Your Pre-Order</h3>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Handle (Optional)
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="yourname"
                            className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                          />
                          <div className="absolute right-3 top-3 text-gray-400 text-sm">
                            .commandline
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          Link your pre-order to your Unified AI handle for priority access
                        </p>
                      </div>

                      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="text-orange-400 font-semibold mb-2">Early Access Benefits:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Priority shipping queue</li>
                          <li>• Exclusive firmware updates</li>
                          <li>• Beta access to new features</li>
                          <li>• Direct line to development team</li>
                        </ul>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-orange-500/20"
                        type="submit"
                      >
                        RESERVE YOUR {devices.find(d => d.id === selectedDevice)?.name.toUpperCase()}
                      </motion.button>
                    </form>
                  </GlowingCard>
                </motion.div>
              )}

              {/* Info Cards */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                  <h4 className="text-blue-400 font-semibold mb-3">🔐 Secure Pre-Orders</h4>
                  <p className="text-gray-300 text-sm">
                    All pre-orders are secured through your vault. No payment until shipping confirmation.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-purple-400 font-semibold mb-3">🪙 Token Staking</h4>
                  <p className="text-gray-300 text-sm">
                    Stake AI Tokens for priority access and exclusive benefits. Higher stakes = earlier shipping.
                  </p>
                </GlowingCard>

                <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-3">📦 Rolling Releases</h4>
                  <p className="text-gray-300 text-sm">
                    Devices ship in batches. Early supporters get first access to each new release wave.
                  </p>
                </GlowingCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PreOrderPage;
