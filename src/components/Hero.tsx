'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Minimal headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6 text-balance">
            Открий майстора,<br />
            който разбира твоята визия
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Платформа, която свързва креативни хора с талантливи майстори 
            в света на красотата и стила.
          </p>
        </motion.div>

        {/* Featured grid - showcase actual work */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Работа {i}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <a 
            href="#discover" 
            className="inline-flex items-center text-sm text-gray-900 hover:text-gray-600 transition-colors"
          >
            Разгледай още
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
