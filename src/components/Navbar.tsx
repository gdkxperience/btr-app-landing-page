'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Функции', href: '#features' },
  { label: 'Как работи', href: '#how-it-works' },
  { label: 'Отзиви', href: '#testimonials' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-gradient">BTR</a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dark-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <Search size={18} className="text-dark-200" />
              </button>
              <a
                href="#cta"
                className="hidden md:inline-flex px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-accent-pink text-white hover:opacity-90 transition-opacity"
              >
                Започни
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
              >
                {mobileOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-dark-200" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 glass-strong p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-dark-100 hover:text-white transition-colors text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-accent-pink text-white"
              >
                Започни
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
