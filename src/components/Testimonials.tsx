'use client'

import { motion } from 'framer-motion'

const works = [
  { artist: 'Мария', category: 'Прическа', likes: 234 },
  { artist: 'Иван', category: 'Бръснене', likes: 189 },
  { artist: 'Елена', category: 'Грим', likes: 456 },
  { artist: 'Стефан', category: 'Боядисване', likes: 321 },
  { artist: 'Ани', category: 'Маникюр', likes: 278 },
  { artist: 'Георги', category: 'Татуировка', likes: 512 },
]

export default function Testimonials() {
  return (
    <section id="works" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-4"
          >
            Портфолио
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light"
          >
            Вдъхновение от реални работи на нашите майстори.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 lg:columns-4 gap-4 space-y-4">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className={`bg-gray-100 rounded-2xl overflow-hidden mb-3 ${
                i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'
              }`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="px-1">
                <p className="text-sm text-gray-900 font-light mb-1">
                  {work.category}
                </p>
                <p className="text-xs text-gray-500">
                  от {work.artist} · {work.likes} харесвания
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#gallery" 
            className="inline-block px-6 py-3 text-sm text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
          >
            Разгледай галерията
          </a>
        </motion.div>
      </div>
    </section>
  )
}
