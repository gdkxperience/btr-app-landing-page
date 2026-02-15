'use client'

import { motion } from 'framer-motion'

const artists = [
  {
    name: 'Мария Петрова',
    specialty: 'Hairstylist',
    location: 'София, Център',
    bio: '15 години опит в авангардни прически',
  },
  {
    name: 'Иван Димитров',
    specialty: 'Barber',
    location: 'София, Лозенец',
    bio: 'Специалист по класическо бръснене',
  },
  {
    name: 'Елена Георгиева',
    specialty: 'Makeup Artist',
    location: 'Пловдив',
    bio: 'Сватбен и модерен грим',
  },
]

export default function HowItWorks() {
  return (
    <section id="artists" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-4"
          >
            Запознай се с майсторите
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-light"
          >
            Всеки с уникален стил и подход към работата си.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Artist photo placeholder */}
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-light text-gray-900 mb-1">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {artist.specialty} · {artist.location}
              </p>
              <p className="text-sm text-gray-600 font-light">
                {artist.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="#all-artists" 
            className="inline-block px-6 py-3 text-sm text-gray-900 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
          >
            Виж всички майстори
          </a>
        </motion.div>
      </div>
    </section>
  )
}
