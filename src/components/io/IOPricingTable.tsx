'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  name: string;
  starter: boolean | string;
  builder: boolean | string;
  master: boolean | string;
}

const pricingFeatures: PricingFeature[] = [
  { name: 'Unified AI Account', starter: true, builder: true, master: true },
  { name: 'Base Agents (I.O. Tools)', starter: true, builder: true, master: true },
  { name: 'Deployable AI Agents', starter: false, builder: true, master: true },
  { name: 'Super Agent Access', starter: false, builder: 'Limited', master: true },
  { name: 'Meme Coin Launchpad', starter: false, builder: 'Presale Access', master: 'Full Allocation' },
  { name: 'Vault Access', starter: false, builder: 'Basic', master: 'Premium +' },
  { name: 'Token Airdrops', starter: false, builder: 'Occasionally', master: 'Guaranteed' },
  { name: 'Handle Name Discount', starter: false, builder: '10%', master: '100%' },
  { name: 'Governance Voting', starter: false, builder: false, master: true },
  { name: 'Genesis Ledger Listing', starter: false, builder: true, master: 'Priority' },
  { name: 'Creator Earnings Pool', starter: false, builder: true, master: true }
];

const tokenAddOns = [
  { name: 'AI Tokens', useCase: 'Power any AI Agent', cost: '$10 = 1,000' },
  { name: 'UtilityCoin', useCase: 'Access meme coins, vaults, upgrades', cost: '$10 = 500' },
  { name: 'Vault Credit Pack', useCase: 'Boost yield tier', cost: '$50 = 3 mo' },
  { name: 'Meme Coin Allocation', useCase: 'Launch or pre-buy new drops', cost: '$25 = 2 coins' }
];

export default function IOPricingTable() {
  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-400 mx-auto" />;
    }
    if (value === false) {
      return <X className="w-5 h-5 text-red-400 mx-auto" />;
    }
    return <span className="text-sm text-purple-300 font-medium">{value}</span>;
  };

  return (
    <div className="py-16 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Intelligent Operator Pricing Table
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            The only subscription where you earn, create, and control the next internet.
          </p>
          <p className="text-gray-400">
            Choose your level. Pay monthly or yearly. Scale as you go.
          </p>
        </motion.div>

        {/* Main Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/20">
                  <th className="text-left p-6 text-purple-300 font-semibold">#</th>
                  <th className="text-left p-6 text-purple-300 font-semibold">Feature</th>
                  <th className="text-center p-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">I.O. Starter</div>
                      <div className="text-sm text-gray-400">$20/mo or $180/yr</div>
                      <div className="text-xs text-green-400 font-medium">Monthly: First month gets 3 months</div>
                      <div className="text-xs text-blue-400 font-medium">Yearly: 25% off + bonus tokens</div>
                    </div>
                  </th>
                  <th className="text-center p-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">I.O. Builder</div>
                      <div className="text-sm text-gray-400">$50/mo or $450/yr</div>
                      <div className="text-xs text-purple-400 font-medium">Most Popular</div>
                      <div className="text-xs text-green-400 font-medium">Monthly: First month gets 3 months</div>
                      <div className="text-xs text-blue-400 font-medium">Yearly: 25% off + bonus tokens</div>
                    </div>
                  </th>
                  <th className="text-center p-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">I.O. Master</div>
                      <div className="text-sm text-gray-400">$150/mo or $1,350/yr</div>
                      <div className="text-xs text-green-400 font-medium">Monthly: First month gets 3 months</div>
                      <div className="text-xs text-blue-400 font-medium">Yearly: 25% off + bonus tokens</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-gray-800/50 hover:bg-purple-500/5 transition-colors"
                  >
                    <td className="p-4 text-purple-400 font-medium">{index + 1}</td>
                    <td className="p-4 text-white font-medium">{feature.name}</td>
                    <td className="p-4 text-center">{renderFeatureValue(feature.starter)}</td>
                    <td className="p-4 text-center">{renderFeatureValue(feature.builder)}</td>
                    <td className="p-4 text-center">{renderFeatureValue(feature.master)}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Token Add-Ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
            🪙 Token Add-Ons (A La Carte)
          </h3>
          <p className="text-gray-400 text-center mb-8">
            Any plan can add additional tokens as needed:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenAddOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{addon.name}</h4>
                <p className="text-sm text-gray-400 mb-3">{addon.useCase}</p>
                <div className="text-purple-400 font-bold">{addon.cost}</div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Note: AI Agents and Super Agents consume tokens per use. You can buy more at any time from your dashboard or stake vaults for ongoing yield.
          </p>
        </motion.div>

        {/* Plan Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="text-2xl mb-3">🌱</div>
            <h3 className="text-xl font-bold text-white mb-3">I.O. Starter</h3>
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">Monthly: $20/mo</p>
                <p className="text-gray-300 text-xs">First month gets 3 months, then monthly billing</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-400 text-sm font-semibold">Yearly: $180/yr (25% off)</p>
                <p className="text-gray-300 text-xs">+ 10,000 bonus AI Tokens + priority support</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Perfect for solo creators or AI curious users. Access to core Operator tools, limited AI usage via manual top-ups.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Essential AI tools access</li>
              <li>• Basic art & video generation</li>
              <li>• Browser-native command UI</li>
              <li>• Documentation access</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">I.O. Builder</h3>
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">Monthly: $50/mo</p>
                <p className="text-gray-300 text-xs">First month gets 3 months, then monthly billing</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-400 text-sm font-semibold">Yearly: $450/yr (25% off)</p>
                <p className="text-gray-300 text-xs">+ 50,000 bonus AI Tokens + premium support</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Includes deployable agents, basic meme coin access, vault starter tier, and domain handle discounts.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Deploy up to 3 AI agents</li>
              <li>• Meme coin presale access</li>
              <li>• Basic vault staking</li>
              <li>• 10% handle discounts</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="text-2xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">I.O. Master</h3>
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 text-sm font-semibold">Monthly: $150/mo</p>
                <p className="text-gray-300 text-xs">First month gets 3 months, then monthly billing</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-blue-400 text-sm font-semibold">Yearly: $1,350/yr (25% off)</p>
                <p className="text-gray-300 text-xs">+ 200,000 bonus AI Tokens + white-glove support</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Full throttle. All AI agents, Super Agent unlocks, meme coin vaults, token launch tools, and DAO participation.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Unlimited AI + Super Agents</li>
              <li>• Full meme coin launchpad</li>
              <li>• Premium vault access</li>
              <li>• Protocol governance rights</li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Welcome to the Intelligent Operator economy.
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Where your monthly fee doesn't just give you access — it gives you upside.
          </p>
          <p className="text-purple-400 font-semibold mb-8">
            Choose your level. Mint your agent. Launch your protocol.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start with I.O. Builder
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            >
              Compare All Plans
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
