'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import { HeaderText } from '@/components/ui/header-text';
import Link from 'next/link';

interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  category: string;
  capabilities: string[];
  pricing: {
    input: number;
    output: number;
    unit: string;
  };
  contextWindow: string;
  speed: 'Fast' | 'Medium' | 'Slow';
  quality: 'High' | 'Medium' | 'Low';
  featured: boolean;
}

const models: Model[] = [
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Most capable model for complex reasoning, coding, and creative tasks',
    category: 'Language',
    capabilities: ['Reasoning', 'Coding', 'Creative Writing', 'Analysis'],
    pricing: { input: 0.01, output: 0.03, unit: '1K tokens' },
    contextWindow: '128K',
    speed: 'Medium',
    quality: 'High',
    featured: true
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'Anthropic',
    description: 'Exceptional performance on highly complex tasks, strong reasoning',
    category: 'Language',
    capabilities: ['Complex Reasoning', 'Research', 'Writing', 'Analysis'],
    pricing: { input: 0.015, output: 0.075, unit: '1K tokens' },
    contextWindow: '200K',
    speed: 'Medium',
    quality: 'High',
    featured: true
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'Google',
    description: 'Multimodal AI with strong performance across text, code, and reasoning',
    category: 'Multimodal',
    capabilities: ['Text', 'Code', 'Images', 'Reasoning'],
    pricing: { input: 0.0005, output: 0.0015, unit: '1K tokens' },
    contextWindow: '32K',
    speed: 'Fast',
    quality: 'High',
    featured: true
  },
  {
    id: 'llama-2-70b',
    name: 'Llama 2 70B',
    provider: 'Meta',
    description: 'Open-source model with strong performance and cost efficiency',
    category: 'Language',
    capabilities: ['General Purpose', 'Coding', 'Reasoning'],
    pricing: { input: 0.0007, output: 0.0009, unit: '1K tokens' },
    contextWindow: '4K',
    speed: 'Fast',
    quality: 'Medium',
    featured: false
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    provider: 'OpenAI',
    description: 'Advanced image generation with high quality and prompt adherence',
    category: 'Image Generation',
    capabilities: ['Image Creation', 'Art Generation', 'Design'],
    pricing: { input: 0.04, output: 0.04, unit: 'image' },
    contextWindow: 'N/A',
    speed: 'Medium',
    quality: 'High',
    featured: true
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney v6',
    provider: 'Midjourney',
    description: 'Artistic image generation with exceptional aesthetic quality',
    category: 'Image Generation',
    capabilities: ['Artistic Images', 'Creative Design', 'Style Transfer'],
    pricing: { input: 0.05, output: 0.05, unit: 'image' },
    contextWindow: 'N/A',
    speed: 'Medium',
    quality: 'High',
    featured: true
  },
  {
    id: 'whisper-large',
    name: 'Whisper Large',
    provider: 'OpenAI',
    description: 'State-of-the-art speech recognition and transcription',
    category: 'Audio',
    capabilities: ['Speech-to-Text', 'Transcription', 'Translation'],
    pricing: { input: 0.006, output: 0.006, unit: 'minute' },
    contextWindow: 'N/A',
    speed: 'Fast',
    quality: 'High',
    featured: false
  },
  {
    id: 'stable-diffusion-xl',
    name: 'Stable Diffusion XL',
    provider: 'Stability AI',
    description: 'High-resolution image generation with fine-tuning capabilities',
    category: 'Image Generation',
    capabilities: ['High-Res Images', 'Fine-tuning', 'Style Control'],
    pricing: { input: 0.02, output: 0.02, unit: 'image' },
    contextWindow: 'N/A',
    speed: 'Fast',
    quality: 'Medium',
    featured: false
  }
];

const categories = ['All', 'Language', 'Multimodal', 'Image Generation', 'Audio'];

const features = [
  {
    title: '🔀 AlphaRouter Optimization',
    description: 'Automatically routes to the best model for each task',
    benefit: 'Save up to 70% on AI costs while maintaining quality'
  },
  {
    title: '⚡ Real-time Switching',
    description: 'Switch between models mid-conversation',
    benefit: 'Use the right tool for each part of your workflow'
  },
  {
    title: '📊 Usage Analytics',
    description: 'Track performance and costs across all models',
    benefit: 'Optimize your AI spending with detailed insights'
  },
  {
    title: '🔧 Custom Fine-tuning',
    description: 'Fine-tune models for your specific use cases',
    benefit: 'Get better results for domain-specific tasks'
  }
];

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredModels = models
    .filter(model => selectedCategory === 'All' || model.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'featured') return b.featured ? 1 : -1;
      if (sortBy === 'price') return a.pricing.input - b.pricing.input;
      if (sortBy === 'speed') {
        const speedOrder = { 'Fast': 3, 'Medium': 2, 'Slow': 1 };
        return speedOrder[b.speed] - speedOrder[a.speed];
      }
      return 0;
    });

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={200} color="blue" speed="slow" depth={true} interactive={true} />
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
              <HeaderText>🤖 AI Models</HeaderText>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">50+ Models</span> <span className="font-normal">One</span> <span className="font-bold">Unified API</span>
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Access the world's best AI models through our intelligent routing system. 
              Get optimal performance and cost efficiency for every task.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <HeaderText>⚡ Smart Model Management</HeaderText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              <p className="text-blue-400 text-sm font-medium">{feature.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-black/30 text-gray-300 hover:bg-blue-600/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-black/30 border border-blue-500/20 rounded-lg text-white focus:border-blue-500/50 focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="price">Lowest Price</option>
            <option value="speed">Fastest First</option>
          </select>
        </div>
      </div>

      {/* Models Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-black/30 backdrop-blur-sm border rounded-lg p-6 hover:border-blue-500/50 transition-all ${
                model.featured ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-blue-500/20'
              }`}
            >
              {model.featured && (
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
              )}

              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{model.name}</h3>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                    {model.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{model.provider}</p>
              </div>

              <p className="text-gray-300 text-sm mb-4">{model.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex flex-wrap gap-1">
                  {model.capabilities.map((capability, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                      {capability}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Context:</span>
                    <span className="text-white ml-2">{model.contextWindow}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Speed:</span>
                    <span className={`ml-2 ${
                      model.speed === 'Fast' ? 'text-green-400' :
                      model.speed === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {model.speed}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-3">
                  <div className="text-sm">
                    <span className="text-gray-400">Pricing:</span>
                    <div className="text-white">
                      ${model.pricing.input.toFixed(3)} / {model.pricing.unit}
                      {model.pricing.input !== model.pricing.output && (
                        <span className="text-gray-400"> (input)</span>
                      )}
                    </div>
                    {model.pricing.input !== model.pricing.output && (
                      <div className="text-white">
                        ${model.pricing.output.toFixed(3)} / {model.pricing.unit} (output)
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Try Model
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mb-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Access All Models?</h2>
          <p className="text-gray-300 mb-6">
            Get started with our unified API and intelligent routing system. 
            One integration, unlimited possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/io">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all">
                🚀 Start Free Trial
              </button>
            </Link>
            <Link href="/docs">
              <button className="px-8 py-3 bg-black/50 text-white border border-white/30 font-bold rounded-lg hover:bg-white/10 transition-all">
                📚 View Documentation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
