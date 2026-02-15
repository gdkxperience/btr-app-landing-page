'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const floatingOrbs = [
  { size: 300, x: '10%', y: '20%', color: 'from-primary/20 to-accent-pink/20', duration: 18 },
  { size: 200, x: '70%', y: '10%', color: 'from-accent-purple/20 to-accent-pink/20', duration: 22 },
  { size: 250, x: '80%', y: '60%', color: 'from-accent-blue/15 to-accent-purple/15', duration: 20 },
  { size: 180, x: '20%', y: '70%', color: 'from-accent-pink/15 to-primary/15', duration: 25 },
  { size: 150, x: '50%', y: '40%', color: 'from-primary/10 to-accent-purple/10', duration: 15 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl mix-blend-screen`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Glass badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 glow"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm text-dark-100">Платформата от ново поколение</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
        >
          Открий своя{' '}
          <span className="text-gradient">Beauty Master</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-dark-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          AI-powered платформа, която свързва теб с най-добрите beauty специалисти.
          Мигновени резервации, персонализирано изживяване.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#cta"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent-pink text-white font-medium hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Започни безплатно
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full glass text-dark-100 hover:text-white hover:bg-white/10 transition-all"
          >
            Научи повече
          </a>
        </motion.div>

        {/* Floating phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="flex justify-center items-end gap-6">
            {/* Left phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:block w-48 h-80 rounded-3xl glass-strong gradient-border overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent-purple/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-pink mx-auto mb-3" />
                  <div className="w-20 h-2 bg-white/10 rounded mx-auto mb-2" />
                  <div className="w-16 h-2 bg-white/5 rounded mx-auto" />
                </div>
              </div>
            </motion.div>

            {/* Center phone (main) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="w-56 md:w-64 h-96 md:h-[28rem] rounded-3xl glass-strong gradient-border overflow-hidden relative"
            >
              <div className="w-full h-full bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 p-4">
                <div className="w-full h-8 rounded-full bg-white/5 mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent-pink/40 shrink-0" />
                      <div className="flex-1">
                        <div className="w-20 h-2 bg-white/10 rounded mb-1" />
                        <div className="w-14 h-1.5 bg-white/5 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right phone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden md:block w-48 h-80 rounded-3xl glass-strong gradient-border overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-accent-pink/10 to-primary/10 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/10" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <motion.a
            href="#features"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 text-sm text-dark-300 hover:text-dark-100 transition-colors"
          >
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
