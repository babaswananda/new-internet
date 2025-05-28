'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
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

  const friendsFamilyTiers = [
    {
      amount: '$50',
      utilityCoin: '5,000 UC + 5% = 5,250 UC',
      aiTokens: '+ 5,250 AIT bonus',
      potentialValue: '~$525 (10× on UC) + AIT upside'
    },
    {
      amount: '$100',
      utilityCoin: '10,000 UC + 10% = 11,000 UC',
      aiTokens: '+ 11,000 AIT bonus',
      potentialValue: '~$1,100 (10× on UC) + AIT upside'
    },
    {
      amount: '$250',
      utilityCoin: '25,000 UC + 15% = 28,750 UC',
      aiTokens: '+ 28,750 AIT bonus',
      potentialValue: '~$2,875 (10× on UC) + AIT upside'
    },
    {
      amount: '$500',
      utilityCoin: '50,000 UC + 20% = 60,000 UC',
      aiTokens: '+ 60,000 AIT bonus',
      potentialValue: '~$6,000 (10× on UC) + AIT upside'
    },
    {
      amount: '$1,000',
      utilityCoin: '100,000 UC + 25% = 125,000 UC',
      aiTokens: '+ 125,000 AIT bonus',
      potentialValue: '~$12,500 (10× on UC) + AIT upside'
    }
  ];

  const whaleTiers = [
    {
      name: 'Tier 5',
      amount: '$25,000',
      utilityCoin: '100,000',
      aiTokens: '300,000',
      bonuses: 'White-labeled node, protocol cut',
      roi: 'Monthly passive returns'
    }
  ];

  if (!isUnlocked) {
    return (
      <MainLayout>
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <SpaceParticlesBackground particleCount={300} color="purple" speed="slow" depth={true} interactive={true} />
        </div>

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
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

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
              <span className="text-purple-300 font-medium">Friends & Family + Whale Investors</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                UnifiedAI Early Contributor Round
              </HeaderText>
            </h1>

            <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-300">
              <p className="text-xl font-medium text-white leading-relaxed">
                Be among the first to back the AI‑native internet. UnifiedAI is opening an exclusive Friends & Family + Early Whale Contributor round – a unique chance for our close community and crypto-native investors to secure UtilityCoin & AI Tokens at ground-floor prices with high upside potential.
              </p>

              <p className="text-lg text-gray-200">
                Don't miss the opportunity to get in early on <span className="text-purple-300 font-semibold">"the protocol rails for the AI-native internet"</span>, and gain access and benefits before the public launch.
              </p>

              <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-500/30 rounded-lg p-6 mt-8">
                <p className="text-xl text-white font-bold text-center mb-4">
                  🚀 Contribute Now – Secure Your Early Stake
                </p>
                <p className="text-center text-orange-300">
                  (CashApp & BTC accepted)
                </p>
              </div>
            </div>
          </div>

          {/* Why UnifiedAI */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Why UnifiedAI? – Building the AI‑Native Internet Rails</HeaderText>
            </h2>

            <div className="max-w-5xl mx-auto space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                UnifiedAI is building the foundational protocol rails for the AI-native internet. In simple terms, we're creating the blockchain-based infrastructure that will let AI agents, services, and users interact and transact seamlessly in a decentralized network. This is akin to laying down the highways for a future where AI is as ubiquitous as websites – and you have a chance to own a piece of those rails.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">🌐</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Visionary Platform</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    UnifiedAI combines blockchain and AI to enable a unified ecosystem where AI services can be published, discovered, and monetized securely. Think of it as the <span className="text-blue-300 font-semibold">"Ethereum for AI networks"</span>, powering the next generation of AI-driven dApps, autonomous agents, and marketplaces.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-3">First-Mover Advantage</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    By backing us now, you're positioning yourself at the forefront of a potential breakthrough. Early supporters of projects like Ethereum and Solana bought in at pennies, before those platforms soared in adoption. <span className="text-green-300 font-semibold">UnifiedAI aims for similar transformative impact</span> in the AI+crypto space.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">💎</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Early Access & Upside</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Friends, family, and early believers will gain access to our platform and tokens before anyone else. You're not just funding an idea – you're becoming a founding participant in an emerging protocol. <span className="text-orange-300 font-semibold">As the network grows, so does the potential value of your stake.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Contribute Early */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Why Contribute Early? – High-ROI Opportunity</HeaderText>
            </h2>

            <div className="max-w-5xl mx-auto space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Early contributors are the lifeblood of UnifiedAI. To reward your trust, we're offering generous terms and a strategic position that could translate to significant returns:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">💰</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Ground-Floor Token Prices</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This round offers the lowest price these tokens will ever be. Early pricing means even moderate future price growth can yield outsized ROI. <span className="text-green-300 font-semibold">(For perspective, Ethereum's earliest backers bought ETH at ~$0.30 – by 2025 ETH traded over $2,500+, an 8000x+ increase. Early Binance investors got BNB at $0.15 – it later exceeded $600.)</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">🎁</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Exclusive Bonuses</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Early contributors receive bonus token allocations and perks not available in later rounds. We believe those who support us at inception deserve extra rewards – from bonus tokens to premium access.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">⏰</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Limited Availability</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    This Friends & Family + Whale round is invite-only and capped. That means your stake is early and rare. <span className="text-orange-300 font-semibold">By the time the public hears about UnifiedAI, your entry price and bonuses will be unrivaled.</span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-lg p-6">
                  <div className="text-2xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-3">Strategic Upside in AI + Crypto</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The intersection of AI and blockchain is poised to explode. By contributing now, you're effectively getting equity in the protocol layer of the AI economy. <span className="text-blue-300 font-semibold">Imagine being an early investor in the "internet of AI"</span> – that's the window of opportunity we're opening.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tokenomics Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Tokenomics Overview – UtilityCoin & AI Token</HeaderText>
            </h2>

            <div className="max-w-5xl mx-auto space-y-6 text-gray-300 mb-12">
              <p className="text-lg leading-relaxed">
                UnifiedAI operates on a two-token model to power the ecosystem and reward contributors. Here's a quick overview of each:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🪙</div>
                    <h3 className="text-xl font-bold text-white">UtilityCoin (UC) – Governance & Utility Token</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p><span className="text-blue-300 font-semibold">Total Supply:</span> 1,000,000,000 tokens (fixed)</p>
                    <p><span className="text-blue-300 font-semibold">Role:</span> UtilityCoin is the core currency of UnifiedAI. It powers transactions on the network, governs protocol decisions, and can be staked for network rewards. Holding UC is like holding a share in the network's success.</p>
                    <p><span className="text-blue-300 font-semibold">Early Round Price:</span> $0.01 per UC for early contributors (a steep discount compared to future public pricing)</p>
                    <p><span className="text-blue-300 font-semibold">Early Allocation:</span> 10% of total supply (100 million UC) is reserved for this Friends & Family + Whale round</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">⚡</div>
                    <h3 className="text-xl font-bold text-white">AI Token (AIT) – AI Service & Reward Token</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p><span className="text-green-300 font-semibold">Total Supply:</span> 5,000,000,000 tokens (with a portion released gradually as the network grows)</p>
                    <p><span className="text-green-300 font-semibold">Role:</span> AI Tokens fuel the usage of AI services on the platform – think of AIT as the credits consumed when AI agents run tasks or exchange data. AIT is also earned by AI service providers.</p>
                    <p><span className="text-green-300 font-semibold">Distribution to Early Backers:</span> Early contributors receive AIT tokens as a bonus on top of their UC allocation</p>
                    <p><span className="text-green-300 font-semibold">Value:</span> AIT initial internal valuation is on par with UC for this round, i.e. $0.01 each, but it's given as a bonus – effectively extra value for you at no additional cost!</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-lg p-6 mt-8">
                <p className="text-lg text-center text-white font-semibold">
                  <span className="text-purple-300">In summary:</span> Contributing now gets you two kinds of tokens – UC (the stake in the platform) and AIT (the transacting energy of the platform). You gain governance influence and a store of value in UC, plus the utility tokens that will be in demand as AI services proliferate.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {friendsFamilyTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-black/30 backdrop-blur-sm border rounded-lg p-6 cursor-pointer transition-all ${
                    selectedTier === tier.amount
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-white/10 hover:border-purple-500/50'
                  }`}
                  onClick={() => setSelectedTier(tier.amount)}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Tier {index + 1}</h3>
                    <div className="text-3xl font-bold text-purple-400 mb-4">{tier.amount}</div>
                    <div className="space-y-2 text-sm">
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.utilityCoin}</span>
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.aiTokens}</span>
                      </div>
                      <div className="text-green-400 text-xs font-medium mt-3">{tier.potentialValue}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <HeaderText>Premium Tier</HeaderText>
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
                        <span className="font-medium">{tier.utilityCoin}</span>
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium">{tier.aiTokens}</span>
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
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
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
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
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
              <HeaderText>Real World ROI Examples (Non-Operator)</HeaderText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Jade',
                  tier: 'Tier 2 - $1,500',
                  story: 'Buys in at Tier 2. Receives 5,000 UtilityCoin, 10,000 AI Tokens. Doesn\'t touch them.',
                  result: 'Public listing goes live 3 weeks later — token price 4x. Jade flips her 5,000 UtilityCoin for $6,000.',
                  roi: '✅ 4x return in under 30 days'
                },
                {
                  name: 'Kamal',
                  tier: 'Tier 4 - $10,000',
                  story: 'Gets early vault shares + allocations. Chooses to stake 25% of tokens in meme coin vaults. Vaults launch, tokens rotate.',
                  result: 'Collects royalties every time new coins are minted using his initial pool. Resells rest of tokens for a 3.5x flip.',
                  roi: '✅ Passive + resale: $38,500 ROI in 45 days'
                },
                {
                  name: 'Dion',
                  tier: 'Tier 5 - $25,000',
                  story: 'Private white-label agreement. Earns 1.5% on all vault activity under his "investor node". Plus early access to 5 viral meme drops before they hit Pump.Fun.',
                  result: 'Still holding 60% of tokens. Already cleared $62,000 in liquidity earnings.',
                  roi: '✅ Upside still climbing'
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
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                <HeaderText>This isn't your average meme coin drop.</HeaderText>
              </h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                It's your position in the next digital oil pipeline.<br/>
                <span className="text-orange-300 font-semibold">You control the mint, the platform, the vaults, and the resell gates.</span>
              </p>
              <div className="bg-black/50 border border-white/20 rounded-lg p-6 mb-6">
                <p className="text-lg text-white font-medium mb-2">
                  This round is private. Next round is public. Next price is higher.
                </p>
                <p className="text-orange-400 font-bold text-xl">
                  Clock's ticking. ⏰
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default FriendsFamilyPage;
