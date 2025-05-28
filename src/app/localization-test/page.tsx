'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import LocalizedInvestmentHero from '@/components/sections/LocalizedInvestmentHero';

export default function LocalizationTestPage() {
  const { 
    nav, 
    hero, 
    investment, 
    formatCurrency, 
    formatNumber,
    getGreeting,
    getCTATone,
    language,
    market,
    tierName,
    paymentMethods,
    isRTL
  } = useTranslation();

  return (
    <div className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header with Language Switcher */}
      <header className="p-6 border-b border-purple-500/20">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌍 Localization Test
          </h1>
          <LanguageSwitcher variant="header" />
        </div>
      </header>

      {/* Test Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Current Language Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-6 bg-purple-900/20 rounded-xl border border-purple-500/30"
        >
          <h2 className="text-xl font-bold mb-4 text-purple-300">Current Language Settings</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Language:</strong> {language}
            </div>
            <div>
              <strong>Region:</strong> {market.region}
            </div>
            <div>
              <strong>Currency:</strong> {market.currency}
            </div>
            <div>
              <strong>RTL:</strong> {isRTL ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Tier Name:</strong> {tierName}
            </div>
            <div>
              <strong>Cultural Tone:</strong> {market.culturalTone}
            </div>
            <div>
              <strong>Investor Type:</strong> {market.investorType}
            </div>
            <div>
              <strong>Payment Methods:</strong> {paymentMethods.join(', ')}
            </div>
          </div>
        </motion.section>

        {/* Navigation Translations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-6 bg-gray-900/50 rounded-xl border border-gray-700/50"
        >
          <h2 className="text-xl font-bold mb-4 text-green-300">Navigation Translations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><strong>Home:</strong> {nav('home')}</div>
            <div><strong>Products:</strong> {nav('products')}</div>
            <div><strong>About:</strong> {nav('about')}</div>
            <div><strong>ITO:</strong> {nav('ito')}</div>
            <div><strong>Claim Handle:</strong> {nav('claimHandle')}</div>
            <div><strong>Friends & Family:</strong> {nav('friendsFamily')}</div>
            <div><strong>AI Tokens:</strong> {nav('aiTokens')}</div>
            <div><strong>Learn More:</strong> {nav('learnMore')}</div>
          </div>
        </motion.section>

        {/* Hero Translations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 bg-blue-900/20 rounded-xl border border-blue-500/30"
        >
          <h2 className="text-xl font-bold mb-4 text-blue-300">Hero Section Translations</h2>
          <div className="space-y-4">
            <div>
              <strong>Title:</strong> 
              <p className="text-lg mt-1">{hero('title')}</p>
            </div>
            <div>
              <strong>Subtitle:</strong>
              <p className="mt-1">{hero('subtitle')}</p>
            </div>
            <div>
              <strong>Primary CTA:</strong> {hero('cta.primary')}
            </div>
            <div>
              <strong>Secondary CTA:</strong> {hero('cta.secondary')}
            </div>
          </div>
        </motion.section>

        {/* Investment Translations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-6 bg-yellow-900/20 rounded-xl border border-yellow-500/30"
        >
          <h2 className="text-xl font-bold mb-4 text-yellow-300">Investment Translations</h2>
          <div className="space-y-4">
            <div>
              <strong>Title:</strong> {investment('title')}
            </div>
            <div>
              <strong>Tier Name:</strong> {investment('tier_name')}
            </div>
            <div>
              <strong>Value Prop:</strong> {investment('value_proposition.headline')}
            </div>
            <div>
              <strong>Primary CTA:</strong> {investment('cta.primary')}
            </div>
            <div>
              <strong>Payment Methods Title:</strong> {investment('payment_methods.title')}
            </div>
          </div>
        </motion.section>

        {/* Formatting Tests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-red-900/20 rounded-xl border border-red-500/30"
        >
          <h2 className="text-xl font-bold mb-4 text-red-300">Formatting Tests</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <strong>Currency Formatting:</strong>
              <ul className="mt-2 space-y-1">
                <li>$500: {formatCurrency(500)}</li>
                <li>$2,500: {formatCurrency(2500)}</li>
                <li>$10,000: {formatCurrency(10000)}</li>
                <li>$25,000: {formatCurrency(25000)}</li>
              </ul>
            </div>
            <div>
              <strong>Number Formatting:</strong>
              <ul className="mt-2 space-y-1">
                <li>1,000: {formatNumber(1000)}</li>
                <li>50,000: {formatNumber(50000)}</li>
                <li>1,000,000: {formatNumber(1000000)}</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Cultural Functions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 p-6 bg-pink-900/20 rounded-xl border border-pink-500/30"
        >
          <h2 className="text-xl font-bold mb-4 text-pink-300">Cultural Functions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <strong>Greeting:</strong> {getGreeting()}
            </div>
            <div>
              <strong>CTA Tone:</strong> {getCTATone()}
            </div>
          </div>
        </motion.section>

        {/* Localized Investment Hero Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Localized Investment Hero Demo
          </h2>
          <LocalizedInvestmentHero />
        </motion.section>
      </main>
    </div>
  );
}
