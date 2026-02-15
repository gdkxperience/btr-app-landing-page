'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-purple/5 to-accent-pink/10" />

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 text-4xl opacity-20 hidden md:block"
      >
        {'\uD83D\uDC87\u200D\u2640\uFE0F'}
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-32 right-16 text-3xl opacity-20 hidden md:block"
      >
        {'\uD83D\uDC85'}
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 left-1/4 text-3xl opacity-20 hidden md:block"
      >
        {'\uD83D\uDC84'}
      </motion.div>

      <div className="container-max relative z-10 text-center">
        {/* Sparkles icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles size={40} className="text-primary" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance"
        >
          Готов да откриеш своя{' '}
          <span className="text-gradient">Beauty Master</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-dark-200 font-light max-w-2xl mx-auto mb-10"
        >
          Присъедини се към хиляди потребители, които вече намериха своя идеален beauty специалист.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <a
            href="#start"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent-pink text-white font-medium hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Започни да търсиш
          </a>
          <a
            href="#join"
            className="px-8 py-4 rounded-full glass text-dark-100 hover:text-white hover:bg-white/10 transition-all"
          >
            Присъедини се като майстор
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-dark-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Безплатно за потребители
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Без кредитна карта
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Мигновен достъп
          </div>
        </motion.div>
      </div>
    </section>
  )
}
