'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';

export default function BookDemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    timeline: '',
    budget: '',
    phone: ''
  });

  const demoTypes = [
    {
      id: 'protocol-overview',
      title: 'Protocol Overview Demo',
      duration: '30 minutes',
      description: 'High-level overview of Unified AI Protocol, use cases, and strategic positioning',
      audience: 'Executives, Investors, Strategic Partners',
      includes: ['Protocol architecture overview', 'Market positioning', 'Competitive advantages', 'Partnership opportunities']
    },
    {
      id: 'technical-deep-dive',
      title: 'Technical Deep Dive',
      duration: '45 minutes',
      description: 'Detailed technical walkthrough of handle registry, AI service layer, and integration APIs',
      audience: 'CTOs, Technical Leaders, Developers',
      includes: ['Handle registry architecture', 'API demonstrations', 'Integration examples', 'Technical roadmap']
    },
    {
      id: 'tokenomics-workshop',
      title: 'Tokenomics Workshop',
      duration: '60 minutes',
      description: 'Comprehensive review of three-token economy, staking mechanisms, and governance',
      audience: 'Investors, Token Economists, DeFi Partners',
      includes: ['Token utility breakdown', 'Economic modeling', 'Staking strategies', 'Governance participation']
    },
    {
      id: 'enterprise-integration',
      title: 'Enterprise Integration Session',
      duration: '45 minutes',
      description: 'Custom integration planning for enterprise AI infrastructure and identity management',
      audience: 'Enterprise Teams, System Integrators',
      includes: ['Custom integration planning', 'Enterprise features', 'Security compliance', 'Implementation timeline']
    }
  ];

  const timeSlots = [
    '9:00 AM PST', '10:00 AM PST', '11:00 AM PST', '1:00 PM PST',
    '2:00 PM PST', '3:00 PM PST', '4:00 PM PST', '5:00 PM PST'
  ];

  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="purple" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <HeaderText>Book Your Demo</HeaderText>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              <span className="font-bold">Experience.</span> <span className="font-normal">Understand.</span> <span className="font-bold">Integrate.</span> <span className="font-normal">Deploy.</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get a personalized demonstration of Unified AI Protocol tailored to your specific use case and technical requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Types */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          <HeaderText>Choose Your Demo Type</HeaderText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demoTypes.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-black/30 backdrop-blur-sm border rounded-lg p-6 cursor-pointer transition-all ${
                selectedDemo === demo.id
                  ? 'border-purple-500 bg-purple-500/10'
                  : 'border-purple-500/20 hover:border-purple-500/50'
              }`}
              onClick={() => setSelectedDemo(demo.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                  {demo.duration}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{demo.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-bold text-purple-400 mb-2">Target Audience:</h4>
                <p className="text-gray-400 text-sm">{demo.audience}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-purple-400 mb-2">What's Included:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  {demo.includes.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <HeaderText>Schedule Your Demo</HeaderText>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Role/Title</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="">Select your role</option>
                    <option value="ceo">CEO/Founder</option>
                    <option value="cto">CTO/Technical Leader</option>
                    <option value="investor">Investor/VC</option>
                    <option value="developer">Developer/Engineer</option>
                    <option value="product">Product Manager</option>
                    <option value="business">Business Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Demo Details */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Demo Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Use Case/Interest</label>
                  <textarea
                    value={formData.useCase}
                    onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 h-24"
                    placeholder="Describe your specific use case or what you'd like to learn about..."
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Implementation Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (0-30 days)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                    <option value="research">Research phase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Budget Range (Optional)</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10K</option>
                    <option value="10k-50k">$10K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-plus">$500K+</option>
                    <option value="enterprise">Enterprise (Custom)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Preferred Time Slots</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        className="px-3 py-2 bg-black/50 border border-purple-500/30 rounded text-sm text-gray-300 hover:border-purple-500 hover:text-white transition-all"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                console.log('Demo booking:', { selectedDemo, formData });
                alert('Demo request submitted! You will receive a calendar invite within 24 hours.');
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-lg transition-all"
            >
              🚀 Schedule Demo
            </button>
            <p className="text-gray-400 text-sm mt-4">
              You'll receive a calendar invite with Zoom details within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          <HeaderText>Need Immediate Assistance?</HeaderText>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/20 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📞</div>
            <h4 className="text-lg font-bold text-green-400 mb-2">Direct Call</h4>
            <p className="text-gray-300 text-sm mb-3">Speak with our team immediately</p>
            <a href="tel:+1-555-UNIFIED" className="text-green-300 hover:text-green-200">
              +1 (555) UNIFIED
            </a>
          </div>
          <div className="bg-black/20 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💬</div>
            <h4 className="text-lg font-bold text-blue-400 mb-2">Live Chat</h4>
            <p className="text-gray-300 text-sm mb-3">Chat with our AI assistant</p>
            <button className="text-blue-300 hover:text-blue-200">
              Start Chat →
            </button>
          </div>
          <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="text-lg font-bold text-purple-400 mb-2">Email Us</h4>
            <p className="text-gray-300 text-sm mb-3">Get detailed information</p>
            <a href="mailto:demo@io.unifiedai" className="text-purple-300 hover:text-purple-200">
              demo@io.unifiedai
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
