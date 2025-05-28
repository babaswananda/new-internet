'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ioPlans, calculateSavings } from '@/data/ioPlans';
import { Check, Zap, Crown, Gift, ArrowRight } from 'lucide-react';

export default function IOSubscriptionPlans() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            IO Subscription Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your operator tier. Every plan includes the full AI stack that replaces 
            your entire subscription suite.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {ioPlans.map((plan, index) => {
            const savings = calculateSavings(plan);
            const isPopular = plan.badge === 'Most Popular';
            const isFree = plan.price === 0;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
                  isPopular 
                    ? 'border-purple-500 bg-purple-900/20 scale-105' 
                    : isFree
                    ? 'border-green-500/50 bg-green-900/10'
                    : 'border-gray-700 bg-black/40'
                } hover:border-purple-500/50 transition-all duration-300`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    isPopular 
                      ? 'bg-purple-500 text-white' 
                      : isFree
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {isFree ? (
                      <Gift className="w-8 h-8 text-green-400" />
                    ) : isPopular ? (
                      <Crown className="w-8 h-8 text-purple-400" />
                    ) : (
                      <Zap className="w-8 h-8 text-blue-400" />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    {isFree ? (
                      <div className="text-3xl font-bold text-green-400">FREE</div>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400">/month</span>
                      </>
                    )}
                  </div>
                  
                  {savings > 0 && (
                    <div className="text-sm text-green-400 font-medium">
                      Save ${savings}/month vs individual subscriptions
                    </div>
                  )}
                  
                  <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limits */}
                <div className="mb-6 p-4 bg-black/30 rounded-lg">
                  <h4 className="font-semibold text-white mb-3">Usage Limits:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Chat:</span>
                      <span className="text-white">{plan.limits.chat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Art:</span>
                      <span className="text-white">{plan.limits.artGenerations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Video:</span>
                      <span className="text-white">{plan.limits.videoMinutes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Agents:</span>
                      <span className="text-white">{plan.limits.agents}</span>
                    </div>
                  </div>
                </div>

                {/* Replaced Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Replaces:</h4>
                  <div className="space-y-1">
                    {plan.replacedServices.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-400">{service.service}</span>
                        <span className="text-red-400 line-through">{service.typicalPrice}</span>
                      </div>
                    ))}
                    {plan.replacedServices.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{plan.replacedServices.length - 3} more services
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center ${
                    isPopular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : isFree
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/25'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {isFree ? 'Claim Your Handle' : 'Start Subscription'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>

                {/* Power-ups */}
                {plan.powerUps && plan.powerUps.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <h4 className="font-semibold text-white mb-2 text-sm">Power-ups:</h4>
                    {plan.powerUps.map((powerUp, idx) => (
                      <div key={idx} className="text-xs text-gray-400 mb-1">
                        <span className="font-medium">{powerUp.name}</span> - {powerUp.price}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            "You don't just use AI. You operate it."
          </p>
          <p className="text-xl font-bold text-purple-400 mb-8">
            .IO is what ChatGPT should have been — fully loaded, tokenized, browser-native, remixable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/50 rounded-xl font-bold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            >
              View Live Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
