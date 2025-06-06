'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { GlowingCard } from '@/components/ui/glowing-card';
import { FormField, SubmitButton } from '@/components/ui/forms';
// import { useForm, validators } from '@/hooks/useForm';
import { HeaderText } from '@/utils/normalBold';
import { containerVariants, itemVariants } from '@/utils/animations';
import { ContactMethod } from '@/types';

const ContactPage = () => {
  // Temporarily disabled form functionality for build
  const values = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  };
  const errors = {};
  const isSubmitting = false;
  const handleChange = () => {};
  const handleSubmit = () => () => {};

  const onSubmit = async (formData: typeof values) => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add your API call here
  };

  const contactMethods: ContactMethod[] = [
    {
      title: "Book Demo",
      email: "demo@io.unifiedai",
      description: "Schedule a personalized demonstration of Unified AI Protocol",
      icon: "🎯",
      color: "purple",
      action: "Schedule Demo",
      link: "/book-demo"
    },
    {
      title: "General Inquiries",
      email: "support@io.unifiedai",
      description: "Questions about our platform, products, or services",
      icon: "💬",
      color: "blue"
    },
    {
      title: "Sales & Partnerships",
      email: "protocol@io.unifiedai",
      description: "Enterprise sales, strategic partnerships, and business development",
      icon: "🤝",
      color: "green",
      action: "Partner With Us",
      link: "/partners"
    },
    {
      title: "Investment Opportunities",
      email: "investors@io.unifiedai",
      description: "Token offerings, fundraising, and investment information",
      icon: "💰",
      color: "yellow",
      action: "View Investment",
      link: "/investors"
    },
    {
      title: "Developer Support",
      email: "dev@io.unifiedai",
      description: "Technical support, API questions, and developer resources",
      icon: "👨‍💻",
      color: "purple"
    },
    {
      title: "Press & Media",
      email: "press@io.unifiedai",
      description: "Media inquiries, press releases, and interview requests",
      icon: "📰",
      color: "orange"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 500",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12",
      zipcode: "New York, NY 10013",
      phone: "+1 (555) 123-4568",
      type: "East Coast Office"
    },
    {
      city: "London",
      address: "789 Shoreditch High Street",
      zipcode: "London E1 6AN, UK",
      phone: "+44 20 7123 4567",
      type: "European Office"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen w-full py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto"
            >
              {/* Hero Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                    Contact Us
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Let's Build the Future Together
                </p>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                  Whether you're a developer, enterprise customer, investor, or just curious about the agentic internet,
                  we'd love to hear from you. Reach out and let's start a conversation.
                </p>
              </motion.div>

              {/* Quick Contact Methods */}
              <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {contactMethods.map((method, index) => (
                    <GlowingCard key={index} className={`bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-${method.color}-500/20 hover:border-${method.color}-400/40 transition-colors cursor-pointer`}>
                      <div className="text-center">
                        <div className="text-3xl mb-3">{method.icon}</div>
                        <h3 className={`text-lg font-semibold text-${method.color}-400 mb-2`}>{method.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{method.description}</p>
                        <a href={`mailto:${method.email}`} className={`text-${method.color}-400 text-sm hover:text-${method.color}-300 transition-colors`}>
                          {method.email}
                        </a>
                      </div>
                    </GlowingCard>
                  ))}
                </div>
              </motion.div>

              {/* Developer Mode */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-semibold mb-6 text-green-400 text-center">🔗 Developer Contact Protocol</h3>
                  <div className="bg-black/60 rounded-lg p-6 font-mono text-sm mb-6">
                    <div className="text-green-400 mb-2">$ contact.send --to="dev@io.unifiedai" --priority="high" --type="technical"</div>
                    <div className="text-gray-400 mb-4">🔗 Establishing secure channel...</div>
                    <div className="text-blue-400 mb-2">✓ Connected to developer support</div>
                    <div className="text-purple-400">📨 Average response time: &lt; 2 hours</div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-300 mb-4">
                      Need technical support? <span className="text-green-400">.commandline/claim</span> is where it all begins.<br />
                      (no paste '.commandline/claim' in your browser, it leads somewhere special).
                    </p>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Form */}
                  <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
                    <h2 className="text-3xl font-bold mb-6 text-blue-400">Send us a Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          label="Name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          error={errors.name}
                        />
                        <FormField
                          label="Email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          error={errors.email}
                        />
                      </div>

                      <FormField
                        label="Company"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your company (optional)"
                      />

                      <FormField
                        label="Inquiry Type"
                        name="inquiryType"
                        type="select"
                        value={values.inquiryType}
                        onChange={handleChange}
                        options={[
                          { value: 'general', label: 'General Inquiry' },
                          { value: 'sales', label: 'Sales & Partnerships' },
                          { value: 'technical', label: 'Technical Support' },
                          { value: 'press', label: 'Press & Media' },
                          { value: 'careers', label: 'Careers' },
                          { value: 'investor', label: 'Investor Relations' }
                        ]}
                      />

                      <FormField
                        label="Subject"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        placeholder="Brief subject line"
                        required
                        error={errors.subject}
                      />

                      <FormField
                        label="Message"
                        name="message"
                        type="textarea"
                        value={values.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, questions, or how we can help..."
                        rows={6}
                        required
                        error={errors.message}
                      />

                      <SubmitButton
                        isLoading={isSubmitting}
                        className="w-full"
                        size="lg"
                      >
                        Send Message
                      </SubmitButton>
                    </form>
                  </GlowingCard>

                  {/* Office Locations */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-center">Our Offices</h2>
                    {offices.map((office, index) => (
                      <GlowingCard key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-semibold text-white">{office.city}</h3>
                          <span className="text-purple-400 text-sm">{office.type}</span>
                        </div>
                        <div className="space-y-2 text-gray-300">
                          <p>{office.address}</p>
                          <p>{office.zipcode}</p>
                          <p className="text-blue-400">{office.phone}</p>
                        </div>
                      </GlowingCard>
                    ))}

                    {/* Response Times */}
                    <GlowingCard className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                      <h3 className="text-xl font-semibold text-green-400 mb-4">Response Times</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Technical Support</span>
                          <span className="text-green-400">&lt; 2 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Sales Inquiries</span>
                          <span className="text-green-400">&lt; 4 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">General Questions</span>
                          <span className="text-green-400">&lt; 24 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Press Inquiries</span>
                          <span className="text-green-400">&lt; 12 hours</span>
                        </div>
                      </div>
                    </GlowingCard>
                  </div>
                </div>
              </motion.div>

              {/* Community & Social */}
              <motion.div variants={itemVariants} className="mb-16">
                <GlowingCard className="bg-black/30 backdrop-blur-sm p-8 rounded-lg border border-cyan-500/20">
                  <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Join Our Community</h2>
                  <p className="text-lg text-gray-300 text-center mb-8">
                    Connect with developers, researchers, and builders who are creating the future of AI.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">🎮</div>
                      <p className="text-sm text-gray-300">Discord</p>
                      <p className="text-xs text-gray-400">50K+ members</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">❌</div>
                      <p className="text-sm text-gray-300">X</p>
                      <p className="text-xs text-gray-400">@UnifiedAI</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="text-sm text-gray-300">GitHub</p>
                      <p className="text-xs text-gray-400">Open Source</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">📺</div>
                      <p className="text-sm text-gray-300">YouTube</p>
                      <p className="text-xs text-gray-400">Tutorials</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">🎵</div>
                      <p className="text-sm text-gray-300">TikTok</p>
                      <p className="text-xs text-gray-400">@UnifiedAI</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">📘</div>
                      <p className="text-sm text-gray-300">Facebook</p>
                      <p className="text-xs text-gray-400">UnifiedAI</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">💚</div>
                      <p className="text-sm text-gray-300">WhatsApp</p>
                      <p className="text-xs text-gray-400">Business</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">🟢</div>
                      <p className="text-sm text-gray-300">WeChat</p>
                      <p className="text-xs text-gray-400">UnifiedAI</p>
                    </div>
                    <div className="text-center p-4 bg-black/40 rounded-lg hover:bg-black/60 transition-colors cursor-pointer">
                      <div className="text-2xl mb-2">✈️</div>
                      <p className="text-sm text-gray-300">Telegram</p>
                      <p className="text-xs text-gray-400">@UnifiedAI</p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-red-400 text-xl">🚨</div>
                    <div>
                      <p className="text-red-200 font-semibold mb-2">Security or Critical Issues:</p>
                      <p className="text-gray-300">
                        For security vulnerabilities or critical system issues, contact us immediately at:<br />
                        <span className="text-red-400 font-mono">security@io.unifiedai</span> or call our 24/7 hotline:
                        <span className="text-red-400"> +1 (555) 911-HELP</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
