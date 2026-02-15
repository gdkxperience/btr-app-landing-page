'use client'

import { motion } from 'framer-motion'
import { Wand2, CalendarCheck, Heart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'AI-Powered Откриване',
    description: 'Нашият AI анализира предпочитанията ти и препоръчва идеалния специалист за теб.',
    gradient: 'from-primary to-orange-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,84,0,0.3)]',
  },
  {
    icon: CalendarCheck,
    title: 'Мигновени Резервации',
    description: 'Резервирай час с един клик. Реално време за наличност, без чакане.',
    gradient: 'from-accent-pink to-rose-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,122,0.3)]',
  },
  {
    icon: Heart,
    title: 'Персонално Изживяване',
    description: 'Запази любимите си майстори, получавай персонализирани препоръки и оферти.',
    gradient: 'from-accent-purple to-violet-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  },
  {
    icon: ShieldCheck,
    title: 'Верифицирано Качество',
    description: 'Всеки специалист е проверен. Реални отзиви, реално портфолио, реални резултати.',
    gradient: 'from-accent-blue to-cyan-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
  },
]

const stats = [
  { value: '10K+', label: 'Потребители' },
  { value: '500+', label: 'Салони' },
  { value: '50K+', label: 'Резервации' },
  { value: '4.9', label: 'Рейтинг' },
]

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Защо <span className="text-gradient">BTR</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-200 font-light"
          >
            Технология от ново поколение за красота без компромиси.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group glass rounded-2xl p-8 transition-all duration-300 ${feature.glow}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-200 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
