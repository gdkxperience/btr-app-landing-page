'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    emoji: '\uD83D\uDD0D',
    title: 'Открий',
    description: 'Използвай AI търсенето, за да намериш идеалния beauty специалист според предпочитанията, локацията и стила ти.',
  },
  {
    number: '02',
    emoji: '\uD83D\uDCCB',
    title: 'Разгледай',
    description: 'Прегледай портфолио, отзиви и рейтинги. Сравни специалисти и избери най-подходящия за теб.',
  },
  {
    number: '03',
    emoji: '\uD83D\uDCC5',
    title: 'Резервирай',
    description: 'Запази час мигновено с един клик. Получи потвърждение и напомняне директно в телефона.',
  },
  {
    number: '04',
    emoji: '\u2728',
    title: 'Наслади се',
    description: 'Посети специалиста, получи перфектен резултат и сподели опита си с общността.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Как <span className="text-gradient">работи</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-200 font-light"
          >
            Четири прости стъпки до перфектния резултат.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent-purple/50 to-accent-pink/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center"
                >
                  {/* Center dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent-pink" />
                    <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping" />
                  </div>

                  {/* Content - alternating sides */}
                  {isEven ? (
                    <>
                      <div className="lg:text-right lg:pr-16">
                        <div className="glass rounded-2xl p-8">
                          <div className="text-4xl mb-4">{step.emoji}</div>
                          <div className="text-xs font-mono text-primary mb-2">{step.number}</div>
                          <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                          <p className="text-dark-200 font-light leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="lg:pl-16">
                        <div className="glass rounded-2xl p-8">
                          <div className="text-4xl mb-4">{step.emoji}</div>
                          <div className="text-xs font-mono text-primary mb-2">{step.number}</div>
                          <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                          <p className="text-dark-200 font-light leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
