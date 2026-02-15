'use client'

import { motion } from 'framer-motion'

const categories = [
  { name: 'Фризьорство', count: 124, color: 'bg-orange-50' },
  { name: 'Грим', count: 89, color: 'bg-pink-50' },
  { name: 'Маникюр', count: 156, color: 'bg-purple-50' },
  { name: 'Масаж', count: 67, color: 'bg-blue-50' },
  { name: 'Козметика', count: 203, color: 'bg-green-50' },
]

export default function Features() {
  return (
    <section id="discover" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section intro */}
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-4"
          >
            Разгледай по категория
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light"
          >
            Всеки майстор е уникален. Намери точно това, което търсиш.
          </motion.p>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.a
              key={category.name}
              href={`#${category.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${category.color} p-8 rounded-2xl hover:shadow-sm transition-all duration-300 group`}
            >
              <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.count} майстори
              </p>
            </motion.a>
          ))}
          
          {/* See all card */}
          <motion.a
            href="#all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="border-2 border-gray-200 p-8 rounded-2xl hover:border-gray-300 transition-all duration-300 group flex items-center justify-center"
          >
            <span className="text-lg font-light text-gray-600 group-hover:text-gray-900 transition-colors">
              Виж всички →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
