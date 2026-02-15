'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Send } from 'lucide-react'

const footerLinks = {
  'Платформа': ['Функции', 'Ценообразуване', 'За бизнеса', 'API'],
  'Компания': ['За нас', 'Кариери', 'Блог', 'Контакти'],
  'Поддръжка': ['Помощен център', 'Условия', 'Поверителност', 'Сигурност'],
}

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">BTR</h3>
            <p className="text-dark-200 font-light leading-relaxed mb-6 max-w-sm">
              Платформата от ново поколение за красота. Свързваме теб с най-добрите beauty специалисти в България.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Твоят имейл"
                className="flex-1 px-4 py-3 rounded-full glass text-sm text-white placeholder:text-dark-400 focus:outline-none focus:ring-1 focus:ring-primary/50 bg-transparent"
              />
              <button className="p-3 rounded-full bg-gradient-to-r from-primary to-accent-pink text-white hover:opacity-90 transition-opacity">
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-dark-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-400">
            Made with {'\u2764\uFE0F'} in Bulgaria {'\u00B7'} {'\u00A9'} 2026 BTR
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-300 hover:text-white transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
