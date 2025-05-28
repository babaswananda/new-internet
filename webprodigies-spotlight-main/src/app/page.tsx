'use client'
// import { Waitlist } from '@clerk/nextjs'
import Link from 'next/link'

import { motion } from 'framer-motion'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import ParticleBackground from '@/components/ui/particle-background'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Removed old ElegantShape component - using Unified AI particle background instead

const badge = 'Powered by Unified AI'
const title1 = 'Unified AI'
const title2 = 'Webinar Platform'

export default function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16">

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white/90 to-pink-400 '
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Token-gated webinars and live streaming for the agentic internet.
              Deploy agents, host events, and monetize your expertise.
            </p>
            <div className="flex items-center justify-center flex-col">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/sign-up">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                    🚀 Get Started
                  </button>
                </Link>
                <Link href="/sign-in">
                  <button className="px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-colors">
                    🔐 Sign In
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{
              marginTop: '20px',
            }}
          >
            <p className="text-muted-foreground/50">
              Powered by Unified AI - The protocol-grade launchpad for the agent economy.
              Deploy agents, host webinars, and build the future of digital interaction.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
              <Link href="/sign-up">
                <Badge
                  variant="outline"
                  className="text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500/30 hover:bg-purple-500/20"
                >
                  🚀 Create Account
                </Badge>
              </Link>
              <Link href="/webinars">
                <Badge
                  variant="outline"
                  className="text-lg bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500/30 hover:bg-orange-500/20"
                >
                  🎥 Browse Webinars
                </Badge>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
