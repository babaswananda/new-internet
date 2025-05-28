'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInvestmentTranslation } from '@/hooks/useTranslation';
import { ArrowRight, Globe, Shield, TrendingUp } from 'lucide-react';

export default function LocalizedInvestmentHero() {
  const { 
    investment, 
    formatCurrency, 
    tierName, 
    paymentMethods, 
    culturalTone, 
    region,
    getCTATone,
    getGreeting 
  } = useInvestmentTranslation();

  const getRegionalBenefits = () => {
    const benefits = {
      'Global': ['Protocol governance rights', 'Revenue sharing', 'Handle reservations'],
      'LATAM': ['Acceso exclusivo a mercados emergentes', 'Soporte en español', 'Integración PIX'],
      'MENA': ['حقوق الحوكمة السيادية', 'شراكات إقليمية حصرية', 'دعم OTC متقدم'],
      'APAC': ['亚太地区独家访问权', '本地化支持', '机构级功能'],
      'Brazil': ['Integração PIX nativa', 'Suporte em português', 'Parcerias locais'],
      'Francophone': ['Accès institutionnel', 'Support francophone', 'Partenariats africains'],
      'India': ['UPI एकीकरण', 'स्थानीय भाषा समर्थन', 'क्षेत्रीय साझेदारी'],
      'Eastern Europe': ['Институциональный доступ', 'OTC поддержка', 'Региональные партнерства'],
      'Korea': ['한국 시장 우선 접근', '현지화 지원', '기관급 기능'],
      'Japan': ['日本市場への優先アクセス', '現地サポート', '機関レベル機能'],
      'East Africa': ['M-Pesa integration', 'Lugha ya kiswahili', 'Regional partnerships'],
      'DACH': ['Institutioneller Zugang', 'Deutsche Unterstützung', 'EU-Compliance']
    };
    return benefits[region] || benefits['Global'];
  };

  const getPaymentMethodsDisplay = () => {
    return paymentMethods.map((method, index) => (
      <span key={method} className="inline-flex items-center px-3 py-1 bg-purple-500/20 rounded-full text-sm">
        {method}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Regional Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30">
              <Globe className="w-4 h-4 mr-2" />
              {getGreeting()} • {region} • {tierName}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            {investment('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {investment('subtitle')}
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              {investment('value_proposition.headline')}
            </h2>
            <p className="text-gray-300 mb-6">
              {investment('value_proposition.description')}
            </p>

            {/* Regional Benefits */}
            <div className="grid md:grid-cols-3 gap-4">
              {getRegionalBenefits().map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <Shield className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold mb-4 text-purple-300">
              {investment('payment_methods.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {getPaymentMethodsDisplay()}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
            >
              {getCTATone()}
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
            >
              {investment('cta.secondary')}
              <TrendingUp className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>{investment('trust_signals.security')}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>{investment('trust_signals.transparency')}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>{investment('trust_signals.compliance')}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>{investment('trust_signals.team')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
