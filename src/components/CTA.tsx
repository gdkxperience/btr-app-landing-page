'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6 text-balance">
            Готов да откриеш майстора,
            който ще реализира визията ти?
          </h2>
          <p className="text-lg text-gray-600 font-light mb-12 max-w-2xl mx-auto">
            Присъедини се към общност от хора, които ценят качеството и стила.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#start"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
            >
              Започни да търсиш
            </a>
            <a 
              href="#join-artist"
              className="inline-block px-8 py-4 text-sm text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              Присъедини се като майстор
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Безплатно за всички потребители
          </p>
        </motion.div>
      </div>
    </section>
  )
}
