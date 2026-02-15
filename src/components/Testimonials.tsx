'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Мария Иванова',
    role: 'Клиент',
    avatar: '\uD83D\uDC69\u200D\uD83E\uDDB0',
    rating: 5,
    text: 'BTR напълно промени начина, по който търся beauty услуги. AI препоръките са невероятно точни - намерих перфектния фризьор още от първия път!',
  },
  {
    name: 'Георги Петров',
    role: 'Бръснар',
    avatar: '\uD83D\uDC68\u200D\uD83E\uDDB1',
    rating: 5,
    text: 'Като beauty специалист, BTR ми помага да достигна до нови клиенти. Мигновените резервации спестяват часове от работния ми ден.',
  },
  {
    name: 'Елена Димитрова',
    role: 'Makeup Artist',
    avatar: '\uD83D\uDC69\u200D\uD83C\uDFA8',
    rating: 5,
    text: 'Платформата е красива и интуитивна. Портфолиото ми получи невероятна видимост и клиентите ми се удвоиха за месец.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Какво казват <span className="text-gradient">нашите потребители</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-200 font-light"
          >
            Реални истории от хора, които вече ползват BTR.
          </motion.p>
        </div>

        {/* Testimonial cards - bento grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 gradient-border transition-all duration-300"
            >
              <Quote size={24} className="text-primary/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 }}
                  >
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-dark-100 font-light leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent-purple/20 flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="text-xs text-dark-300">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-full py-4 px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
        >
          <div className="flex -space-x-2">
            {['\uD83D\uDC69\u200D\uD83E\uDDB0', '\uD83D\uDC68\u200D\uD83E\uDDB1', '\uD83D\uDC69\u200D\uD83C\uDFA8', '\uD83E\uDDD1\u200D\uD83D\uDCBC', '\uD83D\uDC69\u200D\uD83D\uDCBB'].map((emoji, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent-purple/20 border-2 border-dark-900 flex items-center justify-center text-xs"
              >
                {emoji}
              </div>
            ))}
          </div>
          <span className="text-dark-200">
            <span className="text-white font-semibold">10,000+</span> потребители вече се доверяват на BTR
          </span>
        </motion.div>
      </div>
    </section>
  )
}
