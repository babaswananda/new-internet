'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ui/particle-background';
import { HeaderText } from '@/utils/normalBold';

const FriendsFamilyPage = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    walletAddress: '',
    paymentMethod: '',
    amount: '',
    screenshot: null as File | null
  });

  const handleUnlock = () => {
    // Simple access control - in production, verify against backend
    const validCodes = ['UNIFIED2024', 'FRIENDS', 'FAMILY', 'EARLY'];
    const validEmails = ['admin@unifiedai.io', 'test@unifiedai.io'];

    if (validCodes.includes(accessCode.toUpperCase()) || validEmails.includes(email.toLowerCase())) {
      setIsUnlocked(true);
    } else {
      alert('Invalid access code or email. This round is invite-only.');
    }
  };

  const tiers = [
    {
      name: 'Day One',
      amount: '$50',
      utilityCoin: '100',
      aiTokens: '500',
      bonuses: 'Meme Coin Presale Access',
      roi: 'Hold + Use on platform'
    },
    {
      name: 'Early Bird',
      amount: '$150',
      utilityCoin: '400',
      aiTokens: '1,200',
      bonuses: 'Handle + Agent Starter Pack',
      roi: 'Flip later at 3x–5x'
    },
    {
      name: 'Insider',
      amount: '$500',
      utilityCoin: '1,500',
      aiTokens: '3,000',
      bonuses: 'Vault + Meme Coin Allocations',
      roi: 'Build AI bots → earn'
    },
    {
      name: 'OG Backer',
      amount: '$1,500',
      utilityCoin: '5,000',
      aiTokens: '10,000',
      bonuses: 'Full vault access, builder tools, meme drops',
      roi: 'Passive earnings + resale'
    }
  ];

  const whaleTiers = [
    {
      name: 'Operator Node',
      amount: '$5,000',
      utilityCoin: '18,000',
      aiTokens: '40,000',
      bonuses: 'Deploy agents at scale, earn from DEX fees',
      roi: 'Launch protocol services'
    },
    {
      name: 'Protocol Syndicate',
      amount: '$10,000',
      utilityCoin: '40,000',
      aiTokens: '100,000',
      bonuses: '% of meme coins launched, royalty on DEX activity',
      roi: 'Passive DEX royalty + handle resale'
    },
    {
      name: 'Sovereign Round',
      amount: '$25,000+',
      utilityCoin: '100,000',
      aiTokens: '300,000',
      bonuses: 'White-labeled vault, alpha router privileges',
      roi: 'Private licensing deals + multi-chain rollout'
    }
  ];

  if (!isUnlocked) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <ParticleBackground />

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🛡️</span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                <HeaderText>Friends Family Round</HeaderText>
              </h1>
              <p className="text-gray-400 text-sm">Private Access Only</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Access Code</label>
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Enter your invite code..."
                />
              </div>

              <div className="text-center text-gray-400">or</div>

              <div>
                <label className="block text-white font-medium mb-2">Approved Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Enter your approved email..."
                />
              </div>

              <button
                onClick={handleUnlock}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                🔓 Unlock Access
              </button>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              This page is invite-only. If you weren't invited or didn't get access directly, this isn't your moment yet.
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <span className="text-2xl">🛡️</span>
              <span className="text-purple-300 font-medium">Friends & Family Round</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Claim Your Spot Before We Go Public
              </HeaderText>
            </h1>

            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300">
              <p className="font-medium">This isn't equity. It's not a donation.</p>
              <p>It's access. It's upside. It's <span className="text-purple-400 font-bold">digital oil for the new internet.</span></p>
            </div>
          </div>

          {/* What You're Getting */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>What You're Getting</HeaderText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🪙', title: 'UtilityCoin', desc: 'Protocol base layer — think BTC for our ecosystem' },
                { icon: '⚡', title: 'AI Tokens', desc: 'Power every vault, agent, and product' },
                { icon: '🚀', title: 'Meme Coin Access', desc: 'Early allocation in viral microeconomies' },
                { icon: '🛠️', title: 'Agent Builder Tools', desc: 'Deploy your own AI services and monetize' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contribution Tiers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Friends Family Track</HeaderText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-black/30 backdrop-blur-sm border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedTier === tier.name
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-white/10 hover:border-purple-500/50'
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-purple-400 mb-4">{tier.amount}</div>
                    <div className="space-y-2 text-sm">
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.utilityCoin}</span> UtilityCoin
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.aiTokens}</span> AI Tokens
                      </div>
                      <div className="text-purple-300 text-xs mt-3">{tier.bonuses}</div>
                      <div className="text-green-400 text-xs font-medium">{tier.roi}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Whale Contributor Track</HeaderText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whaleTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedTier === tier.name
                      ? 'border-orange-500 bg-orange-500/20'
                      : 'hover:border-orange-500/50'
                  }`}
                  onClick={() => setSelectedTier(tier.name)}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-orange-400 mb-4">{tier.amount}</div>
                    <div className="space-y-2 text-sm">
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.utilityCoin}</span> UtilityCoin
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.aiTokens}</span> AI Tokens
                      </div>
                      <div className="text-orange-300 text-xs mt-3">{tier.bonuses}</div>
                      <div className="text-green-400 text-xs font-medium">{tier.roi}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>How to Pay</HeaderText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* BTC Payment */}
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">₿</div>
                  <h3 className="text-xl font-bold text-white mb-2">Option A: Bitcoin</h3>
                  <p className="text-gray-400 text-sm">Send exact amount to:</p>
                </div>

                <div className="bg-black/50 border border-white/20 rounded-lg p-4">
                  <code className="text-orange-400 text-sm break-all font-mono">
                    bc1qh7evvhzmt3r8vu5sf5wencs93gmtlqkwpyy5el
                  </code>
                </div>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('bc1qh7evvhzmt3r8vu5sf5wencs93gmtlqkwpyy5el');
                      alert('Bitcoin address copied to clipboard!');
                    }}
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Copy BTC Address
                  </button>
                </div>
              </div>

              {/* Cash App Payment */}
              <div className="bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="text-xl font-bold text-white mb-2">Option B: Cash App</h3>
                  <p className="text-gray-400 text-sm">Scan QR code and send exact amount:</p>
                </div>

                <div className="bg-white rounded-lg p-4 mx-auto w-48 h-48 flex items-center justify-center">
                  <img
                    src="/images/cashapp-qr.png"
                    alt="Cash App QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-center text-black hidden">
                    <div className="text-6xl mb-2">📱</div>
                    <div className="text-sm font-medium">Cash App QR</div>
                    <div className="text-xs">$supplydemandshowroom</div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-400">Send to: <span className="font-mono text-green-400">$supplydemandshowroom</span></p>
                  <p className="text-xs text-gray-400 mt-1">Optional note: "F&F Round"</p>
                </div>
              </div>

              {/* Lightning Network Payment */}
              <div className="bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">Option C: Lightning Network</h3>
                  <p className="text-gray-400 text-sm">Fast, low-fee Bitcoin payments:</p>
                </div>

                <div className="bg-white rounded-lg p-4 mx-auto w-48 h-48 flex items-center justify-center">
                  <img
                    src="/images/lightning-qr.png"
                    alt="Lightning Network QR Code"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-center text-black hidden">
                    <div className="text-6xl mb-2">⚡</div>
                    <div className="text-sm font-medium">Lightning QR</div>
                    <div className="text-xs">Bitcoin Lightning</div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="bg-black/50 border border-white/20 rounded-lg p-3 mb-3">
                    <code className="text-yellow-400 text-xs break-all font-mono">
                      lnbc1p5rv7a3dqdgdshx6pqg9c8qpp5lkj62eemmauercjzrz8lvdkuw0ga0qyx9gsk430qrn82dr8e428qsp52j9hw75a2czk6lm8tezrfe50jen48kxmpev6vfgd0krvxk6xm7gq9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqz4excqq9esqq5qqqqqqqqqqqqqq9grzjqfzhphca8jlc5zznw52mnqxsnymltjgg3lxe4ul82g42vw0jpkgkwzmglgqqx7qqqcqqqqqqqqqqqqqq9g82ku7vzvcwfu7j5tzzcnrk9gycx5xyxvg37f904n8fy466cryxap9v5vvd4hctwc9gt8n9vjwtp72q79v9gc42l905rn8q30lg27yrgppseek4
                    </code>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('lnbc1p5rv7a3dqdgdshx6pqg9c8qpp5lkj62eemmauercjzrz8lvdkuw0ga0qyx9gsk430qrn82dr8e428qsp52j9hw75a2czk6lm8tezrfe50jen48kxmpev6vfgd0krvxk6xm7gq9qrsgqcqpcxqy8ayqrzjqv06k0m23t593pngl0jt7n9wznp64fqngvctz7vts8nq4tukvtljqz4excqq9esqq5qqqqqqqqqqqqqq9grzjqfzhphca8jlc5zznw52mnqxsnymltjgg3lxe4ul82g42vw0jpkgkwzmglgqqx7qqqcqqqqqqqqqqqqqq9g82ku7vzvcwfu7j5tzzcnrk9gycx5xyxvg37f904n8fy466cryxap9v5vvd4hctwc9gt8n9vjwtp72q79v9gc42l905rn8q30lg27yrgppseek4');
                      alert('Lightning address copied to clipboard!');
                    }}
                    className="px-6 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                  >
                    Copy Lightning Address
                  </button>
                  <p className="text-xs text-gray-400 mt-2">⚡ Instant settlement • Low fees</p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Form */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Step 2 Confirmation Form</HeaderText>
            </h2>

            <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <p className="text-gray-300 text-center mb-8">
                After payment, fill out this form so we can verify your payment and assign your tokens:
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Enter your full name..."
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Enter your email..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Wallet Address (for token delivery)</label>
                  <input
                    type="text"
                    value={formData.walletAddress}
                    onChange={(e) => setFormData({...formData, walletAddress: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="0x... or your preferred wallet address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Payment Method</label>
                    <select
                      value={formData.paymentMethod}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="">Select payment method</option>
                      <option value="bitcoin">Bitcoin</option>
                      <option value="cashapp">Cash App</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Amount Sent</label>
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="$50, $150, $500..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Payment Screenshot (Optional)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, screenshot: e.target.files?.[0] || null})}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-500 file:text-white hover:file:bg-purple-600"
                  />
                </div>

                <button
                  onClick={() => {
                    console.log('Form submitted:', formData);
                    alert('Form submitted! You will receive token delivery notice + access within 24 hours.');
                  }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  🚀 Submit Confirmation
                </button>
              </div>
            </div>
          </div>

          {/* Real World Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>How This Looks in Real Life</HeaderText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Marcus',
                  tier: 'Insider Tier - $500',
                  story: 'Claims ai.wellnesscoach and uses AI Tokens to deploy 3 personal bots. His "Breathwork Agent" gets 1k+ users via TikTok.',
                  result: '"I spent $500, now it earns me $25/day passively."',
                  roi: 'ROI within 30 days → token resale x3'
                },
                {
                  name: 'Sarah',
                  tier: 'OG Backer - $1,500',
                  story: 'Launches two meme coins with her early UtilityCoin. Flips one on Pump.Fun (viral drop = 18x).',
                  result: '"My $1,500 turned into $9,000 in 60 days. I still have agents running."',
                  roi: 'Token resale + affiliate earnings'
                },
                {
                  name: 'Dre',
                  tier: 'Whale Tier - $10,000',
                  story: 'Receives early syndicate-level access to meme coins. Claims 15 handles in key categories.',
                  result: '"I didn\'t just back it. I operate from inside it."',
                  roi: 'Projected $100k+ MRR within 6 months'
                }
              ].map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-purple-400">{example.name}</h3>
                    <p className="text-sm text-gray-400">{example.tier}</p>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{example.story}</p>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-3">
                    <p className="text-green-400 text-sm font-medium">{example.result}</p>
                  </div>

                  <p className="text-xs text-gray-500">{example.roi}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                <HeaderText>You're not just buying in</HeaderText>
              </h2>
              <p className="text-gray-300 mb-6">
                You're becoming part of the protocol layer of AI-powered digital life.
                This round is private. Next round is public. Next price is higher.
              </p>
              <div className="text-purple-400 font-bold text-lg">
                Clock's ticking. ⏰
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FriendsFamilyPage;
