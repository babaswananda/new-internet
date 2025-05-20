'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import Link from 'next/link';

// Project type definition
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'gen-art' | 'vibe-coding' | 'ai-agents' | 'templates';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  price?: number; // Optional price for marketplace items
  author: string;
  featured: boolean;
}

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'Neural Waves Generator',
    description: 'Create mesmerizing wave patterns using neural networks and WebGL.',
    image: '/images/projects/neural-waves.jpg',
    category: 'gen-art',
    difficulty: 'intermediate',
    tags: ['WebGL', 'Neural Networks', 'Generative Art'],
    author: 'AI Collective',
    featured: true
  },
  {
    id: '2',
    title: 'Vibe Coding Starter Kit',
    description: 'Get started with vibe coding using this comprehensive template.',
    image: '/images/projects/vibe-coding-starter.jpg',
    category: 'templates',
    difficulty: 'beginner',
    tags: ['Vibe Coding', 'Starter', 'Template'],
    price: 49.99,
    author: 'VibeCoder',
    featured: true
  },
  {
    id: '3',
    title: 'ElizaOS AI16z Agent',
    description: 'Build your own AI assistant powered by ElizaOS AI16z.',
    image: '/images/projects/elizaos-agent.jpg',
    category: 'ai-agents',
    difficulty: 'advanced',
    tags: ['ElizaOS', 'AI16z', 'Agent'],
    author: 'Agent Builders',
    featured: true
  },
  {
    id: '4',
    title: 'Hyperbolic Visualization Tool',
    description: 'Visualize complex data in hyperbolic space using Zerebro/Zerepy SDK.',
    image: '/images/projects/hyperbolic-viz.jpg',
    category: 'vibe-coding',
    difficulty: 'intermediate',
    tags: ['Zerebro', 'Zerepy', 'Hyperbolic SDK', 'Data Visualization'],
    price: 79.99,
    author: 'Data Visionaries',
    featured: false
  },
  {
    id: '5',
    title: 'Virtuals Protocol Integration',
    description: 'Connect your project to the Virtuals Protocol for enhanced AI capabilities.',
    image: '/images/projects/virtuals-protocol.jpg',
    category: 'ai-agents',
    difficulty: 'advanced',
    tags: ['Virtuals Protocol', 'Integration', 'AI'],
    author: 'Protocol Pioneers',
    featured: false
  },
  {
    id: '6',
    title: 'SuperAGI Template',
    description: 'Start building with SuperAGI using this ready-to-use template.',
    image: '/images/projects/superagi-template.jpg',
    category: 'templates',
    difficulty: 'intermediate',
    tags: ['SuperAGI', 'Template', 'Agent'],
    price: 29.99,
    author: 'AGI Builders',
    featured: false
  },
  {
    id: '7',
    title: 'Fractal Art Generator',
    description: 'Create stunning fractal art with this customizable generator.',
    image: '/images/projects/fractal-art.jpg',
    category: 'gen-art',
    difficulty: 'beginner',
    tags: ['Fractals', 'Generative Art', 'Creative Coding'],
    author: 'Fractal Minds',
    featured: false
  },
  {
    id: '8',
    title: 'Ollama Integration Kit',
    description: 'Integrate Ollama into your projects with this comprehensive kit.',
    image: '/images/projects/ollama-kit.jpg',
    category: 'ai-agents',
    difficulty: 'intermediate',
    tags: ['Ollama', 'Integration', 'Local AI'],
    price: 39.99,
    author: 'Local AI Enthusiasts',
    featured: false
  }
];

// Subscription tiers for LibreChat
const subscriptionTiers = [
  {
    name: 'Basic',
    price: 9.99,
    features: [
      'Access to ElizaOS AI16z',
      'Basic templates',
      'Community support',
      '10 projects per month'
    ],
    recommended: false
  },
  {
    name: 'Pro',
    price: 29.99,
    features: [
      'Everything in Basic',
      'Zerebro/Zerepy+Hyperbolic SDK access',
      'Virtuals Protocol integration',
      'Priority support',
      'Unlimited projects'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 99.99,
    features: [
      'Everything in Pro',
      'SuperAGI and Ollama integration',
      'Custom agent development',
      'Dedicated support',
      'API access',
      'White-labeling options'
    ],
    recommended: false
  }
];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeDifficulty, setActiveDifficulty] = useState<string>('all');

  // Filter projects based on active filters
  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'all' || project.category === activeCategory;
    const difficultyMatch = activeDifficulty === 'all' || project.difficulty === activeDifficulty;
    return categoryMatch && difficultyMatch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <MainLayout>
      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 grid-bg">
          <div className="container mx-auto text-center">
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-sm mb-6">
              <span className="animate-pulse mr-2">●</span> Coming May 21-22, 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore the New Internet</h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Discover generative art, vibe coding projects, AI agents, and templates powered by LibreChat
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-6 py-3 bg-white text-black font-bold rounded-sm hover:bg-opacity-90"
              >
                Join Waitlist
              </button>
              <Link href="#subscription-tiers">
                <button className="px-6 py-3 border border-white/20 bg-white/5 hover:bg-white/10 rounded-sm font-bold">
                  View Launch Pricing
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-4 bg-black/50">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', 'gen-art', 'vibe-coding', 'ai-agents', 'templates'].map(category => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-sm ${activeCategory === category ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category === 'all' ? 'All' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider mb-2">Difficulty</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', 'beginner', 'intermediate', 'advanced'].map(difficulty => (
                    <button
                      key={difficulty}
                      className={`px-4 py-2 rounded-sm ${activeDifficulty === difficulty ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}
                      onClick={() => setActiveDifficulty(difficulty)}
                    >
                      {difficulty === 'all' ? 'All' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  className="bg-white/5 rounded-sm overflow-hidden hover:transform hover:scale-[1.02] transition-transform"
                  variants={itemVariants}
                >
                  <div className="h-48 bg-gray-800 relative">
                    {/* This would be an actual image in production */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      [Project Image]
                    </div>
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.price && (
                        <span className="bg-white/10 px-2 py-1 rounded-sm text-sm">
                          ${project.price}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-white/10 px-2 py-1 text-xs rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">By {project.author}</span>
                      <button className="px-3 py-1 bg-white text-black text-sm rounded-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Subscription Tiers */}
        <section id="subscription-tiers" className="py-20 px-4 bg-black/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">LibreChat Subscription Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {subscriptionTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white/5 rounded-sm p-8 relative ${tier.recommended ? 'border-2 border-white' : 'border border-white/10'}`}
                >
                  {tier.recommended && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 font-bold">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-6">${tier.price}<span className="text-sm font-normal">/month</span></div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-green-400">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 font-bold rounded-sm ${tier.recommended ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}>
                    Subscribe Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-xl mb-8">
              Join our community of builders and create the next generation of AI-powered applications with LibreChat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-opacity-90"
                onClick={() => window.open('/chat', '_blank')}
              >
                Start Building Now
              </button>
              <Link href="#subscription-tiers">
                <button className="px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 rounded-sm font-bold">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
