'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  wholesale: number;
  retail: number;
  margin: number;
  category: string;
  features: string[];
  image?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    id: 'gift-card-monthly',
    name: 'Unified AI Gift Card (1 Month)',
    description: 'Physical & Digital gift cards with QR activation for 1-month AI subscription',
    wholesale: 10,
    retail: 20,
    margin: 10,
    category: 'Gift Cards',
    features: ['QR Code Activation', 'Physical + Digital', 'Instant Delivery', '100% Margin']
  },
  {
    id: 'gift-card-annual',
    name: 'Unified AI Gift Card (Annual)',
    description: 'Premium annual subscription gift cards with maximum customer value',
    wholesale: 75,
    retail: 120,
    margin: 45,
    category: 'Gift Cards',
    features: ['12-Month Value', 'Premium Packaging', 'High Conversion', '60% Margin']
  },
  {
    id: 'custom-handles',
    name: '5 Custom Agent Handles',
    description: 'Branded AI agent handles for your store (e.g., YourStore.AIAgents)',
    wholesale: 125,
    retail: 250,
    margin: 125,
    category: 'Digital Assets',
    features: ['Brand Integration', 'Referral Tracking', 'Revenue Share', 'Exclusive Territory']
  },
  {
    id: 'merch-pack',
    name: 'Merch Pack (Tee, Stickers, QR)',
    description: 'Complete branded merchandise kit with AI-themed apparel and QR materials',
    wholesale: 25,
    retail: 60,
    margin: 35,
    category: 'Merchandise',
    features: ['Premium T-Shirt', 'QR Sticker Pack', 'Poster Set', '140% Margin']
  },
  {
    id: 'tablet-display',
    name: 'Retail Tablet Stand + Display Kit',
    description: 'Professional POS display with "Ask MyAgent" tablet stand and setup',
    wholesale: 99,
    retail: 199,
    margin: 100,
    category: 'Hardware',
    features: ['Professional Setup', 'Interactive Display', 'Customer Engagement', 'Easy Install']
  }
];

const tierPackages = [
  {
    id: 'starter',
    name: '💼 Starter',
    description: '10 gift cards + 1 store agent handle',
    cost: 250,
    retailValue: '500–1,500',
    roi: '2x–6x',
    includes: [
      '10x Monthly Gift Cards',
      '1x Custom Agent Handle',
      'Basic Setup Guide',
      'Email Support'
    ],
    popular: false
  },
  {
    id: 'shop-pack',
    name: '🛍️ Shop Pack',
    description: '50 gift cards + AI agent dashboard + merch kit',
    cost: 1000,
    retailValue: '3k–8k',
    roi: '3x–8x',
    includes: [
      '50x Monthly Gift Cards',
      '1x Agent Dashboard',
      '1x Complete Merch Kit',
      '1x Tablet Display Setup',
      'Priority Support'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: '🏪 Enterprise',
    description: '200 gift cards + co-branded agent + full merch',
    cost: 3500,
    retailValue: '15k+',
    roi: '4x+ + recurring',
    includes: [
      '200x Mixed Gift Cards',
      '5x Custom Agent Handles',
      '3x Merch Packs',
      '2x Tablet Display Kits',
      'Dedicated Account Manager',
      'Revenue Share Program'
    ],
    popular: false
  }
];

export default function RetailersPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.wholesale * item.quantity), 0);
  const cartRetailValue = cart.reduce((sum, item) => sum + (item.retail * item.quantity), 0);
  const cartMargin = cartRetailValue - cartTotal;

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>🛍️ Retail Partner Portal</HeaderText>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Turn Every Store</span> <span className="font-normal">Into an</span> <span className="font-bold">AI Subscription Machine</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Sell AI subscriptions, gift cards, and branded merchandise. Earn recurring revenue from every customer activation.
            </p>

            {/* Cart Toggle */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setShowCart(!showCart)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                🛒 Cart ({cart.length}) - ${cartTotal.toFixed(2)}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-0 h-full w-96 bg-black/95 backdrop-blur-sm border-l border-purple-500/20 z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Shopping Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">${item.wholesale} each</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm"
                          >
                            -
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Subtotal: ${(item.wholesale * item.quantity).toFixed(2)}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-white">
                    <span>Wholesale Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Retail Value:</span>
                    <span>${cartRetailValue.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-purple-400 font-bold">
                    <span>Your Margin:</span>
                    <span>${cartMargin.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tier Packages */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>🔥 Retailer Package Tiers</HeaderText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tierPackages.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-black/30 backdrop-blur-sm border rounded-lg p-6 hover:border-purple-500/50 transition-all ${
                tier.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-purple-500/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-300 mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-purple-400 mb-2">${tier.cost.toLocaleString()}</div>
                <div className="text-sm text-gray-400">
                  Retail Value: ${tier.retailValue} • ROI: {tier.roi}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {tier.includes.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedTier(tier.id)}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  selectedTier === tier.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-600/20 text-purple-300 hover:bg-purple-600/30'
                }`}
              >
                {selectedTier === tier.id ? 'Selected' : 'Select Package'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
