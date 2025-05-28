'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeaderText } from '@/components/ui/header-text';
import MainLayout from '@/components/layout/MainLayout';
import SpaceParticlesBackground from '@/components/ui/SpaceParticlesBackground';
import CinematicMediaPlaceholder from '@/components/ui/CinematicMediaPlaceholder';

export default function PhysicalAIFactoriesPage() {
  return (
    <MainLayout>
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <SpaceParticlesBackground particleCount={300} color="orange" speed="slow" depth={true} interactive={true} />
      </div>

      {/* Article Header */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-orange-500/20 text-orange-300 text-sm rounded-full border border-orange-500/30">
                Infrastructure Deep Dive
              </span>
              <span className="text-gray-400">20 min read</span>
              <span className="text-gray-400">December 12, 2024</span>
              <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded border border-red-500/30">
                📹 Video
              </span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                🖼️ Images
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <HeaderText>Physical AI Factories: The Future of Manufacturing</HeaderText>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Beyond software - we build and deploy real AI factories with prefab container systems, digital twin infrastructure, and edge computing deployment for complete AI manufacturing solutions.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-400">By AI Factory Infrastructure Team</span>
              <div className="flex gap-2">
                <a
                  href="/downloads/physical-ai-factory-specs.pdf"
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all"
                  download
                >
                  📄 Technical Specifications
                </a>
                <Link href="/ai-factory" className="px-6 py-2 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all">
                  Request Factory Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <CinematicMediaPlaceholder
          id="physical-ai-factory-tour"
          title="Physical AI Factory Tour: From Container to Production"
          description="Complete walkthrough of a deployed AI factory showing prefab containers, digital twins, and edge computing systems"
          type="video"
          category="infrastructure"
          priority="high"
          className="rounded-2xl overflow-hidden"
        />
      </div>

      {/* Article Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-black/20 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8">
          <div className="prose prose-invert prose-orange max-w-none">

            <h2 className="text-2xl font-bold text-white mb-4">Beyond Digital: Physical AI Infrastructure</h2>
            <p className="text-gray-300 mb-6">
              While others focus on software, we're building the physical infrastructure that powers the AI revolution. 
              Our AI factories combine cutting-edge hardware, modular container systems, and digital twin technology 
              to create complete AI manufacturing solutions that can be deployed anywhere in the world.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Prefab Container Factory Systems</h2>
            <p className="text-gray-300 mb-6">
              Our prefab container factories are fully self-contained AI manufacturing units that can be shipped and 
              deployed anywhere. Each container includes compute infrastructure, cooling systems, power management, 
              and all necessary AI hardware pre-configured and ready for immediate deployment.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="container-factory-assembly"
                title="Prefab Container Factory Assembly Process"
                description="Time-lapse of AI factory container assembly, shipping, and deployment at customer site"
                type="video"
                category="infrastructure"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Container Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">🏭 Standard Factory Unit</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 40ft shipping container</li>
                  <li>• 500 TFLOPS compute capacity</li>
                  <li>• Liquid cooling system</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">⚡ Edge Computing Unit</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 20ft compact container</li>
                  <li>• 100 TFLOPS edge processing</li>
                  <li>• Low-latency optimization</li>
                  <li>• 5G/Starlink connectivity</li>
                </ul>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">🔋 Power & Cooling</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Solar panel integration</li>
                  <li>• Battery backup systems</li>
                  <li>• Immersion cooling tech</li>
                  <li>• 40% energy efficiency</li>
                </ul>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-orange-300 mb-2">🌐 Connectivity</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Satellite uplink ready</li>
                  <li>• Mesh networking</li>
                  <li>• Edge-to-cloud sync</li>
                  <li>• Redundant connections</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Digital Twin Infrastructure</h2>
            <p className="text-gray-300 mb-6">
              Every physical AI factory has a complete digital twin that mirrors its operations in real-time. 
              This digital twin enables predictive maintenance, optimization simulations, and remote monitoring 
              of all factory operations from anywhere in the world.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="digital-twin-dashboard"
                title="Digital Twin Factory Dashboard"
                description="Real-time digital twin interface showing factory operations, performance metrics, and predictive analytics"
                type="image"
                category="infrastructure"
                priority="high"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Digital Twin Capabilities</h3>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li><strong className="text-orange-300">Real-time Monitoring:</strong> Live data from all factory sensors and systems</li>
              <li><strong className="text-orange-300">Predictive Maintenance:</strong> AI predicts equipment failures before they occur</li>
              <li><strong className="text-orange-300">Performance Optimization:</strong> Continuous tuning of factory operations</li>
              <li><strong className="text-orange-300">Remote Diagnostics:</strong> Troubleshoot issues without physical access</li>
              <li><strong className="text-orange-300">Simulation Testing:</strong> Test changes in digital twin before physical deployment</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Edge Computing Deployment</h2>
            <p className="text-gray-300 mb-6">
              Our edge computing systems bring AI processing directly to the point of need, reducing latency 
              and enabling real-time decision making. These systems are designed for harsh environments and 
              can operate independently or as part of a larger factory network.
            </p>

            <h3 className="text-xl font-bold text-white mb-3">Deployment Scenarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">🏭 Manufacturing</h4>
                <p className="text-gray-300 text-sm">Quality control, predictive maintenance, supply chain optimization</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">🌾 Agriculture</h4>
                <p className="text-gray-300 text-sm">Crop monitoring, automated harvesting, yield optimization</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">⛏️ Mining</h4>
                <p className="text-gray-300 text-sm">Autonomous vehicles, safety monitoring, resource extraction</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">🏗️ Construction</h4>
                <p className="text-gray-300 text-sm">Project management, safety compliance, automated machinery</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">🚢 Maritime</h4>
                <p className="text-gray-300 text-sm">Autonomous shipping, port operations, cargo optimization</p>
              </div>
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 rounded-lg p-4 text-center">
                <h4 className="text-white font-semibold mb-2">🌍 Remote Sites</h4>
                <p className="text-gray-300 text-sm">Off-grid operations, disaster response, research stations</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Turnkey Deployment Process</h2>
            <p className="text-gray-300 mb-6">
              From initial consultation to full deployment, we handle every aspect of AI factory installation. 
              Our turnkey process ensures rapid deployment with minimal disruption to existing operations.
            </p>

            <div className="my-8">
              <CinematicMediaPlaceholder
                id="deployment-timeline"
                title="AI Factory Deployment Timeline"
                description="Step-by-step process from order to full operational AI factory deployment"
                type="image"
                category="infrastructure"
                priority="medium"
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">Deployment Timeline</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h4 className="text-white font-semibold">Site Assessment & Planning (Week 1-2)</h4>
                  <p className="text-gray-300 text-sm">Detailed site analysis, power requirements, connectivity planning</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h4 className="text-white font-semibold">Factory Configuration (Week 3-4)</h4>
                  <p className="text-gray-300 text-sm">Custom hardware configuration, software setup, digital twin creation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h4 className="text-white font-semibold">Shipping & Installation (Week 5-6)</h4>
                  <p className="text-gray-300 text-sm">Container shipping, site preparation, physical installation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h4 className="text-white font-semibold">Testing & Optimization (Week 7-8)</h4>
                  <p className="text-gray-300 text-sm">System testing, performance optimization, staff training</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <div>
                  <h4 className="text-white font-semibold">Full Production (Week 9+)</h4>
                  <p className="text-gray-300 text-sm">Factory operational, ongoing support, continuous optimization</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Global Deployment Network</h2>
            <p className="text-gray-300 mb-6">
              We've deployed AI factories across six continents, from Arctic research stations to equatorial 
              manufacturing facilities. Our global network ensures local support and rapid deployment anywhere in the world.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/ai-factory/quote" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all">
                Request Factory Quote
              </Link>
              <Link href="/ai-factory/case-studies" className="px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all">
                View Case Studies
              </Link>
              <Link href="/book-demo" className="px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all">
                Schedule Site Visit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-500/30 rounded-lg transition-all"
        >
          ← Back to Research Library
        </Link>
      </div>
    </MainLayout>
  );
}
