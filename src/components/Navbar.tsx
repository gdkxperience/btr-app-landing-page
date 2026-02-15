'use client'

import { motion } from 'framer-motion'
import { Search, User } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-12">
            <h1 className="text-xl font-semibold tracking-tight">BTR</h1>
            
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#discover" className="text-gray-600 hover:text-gray-900 transition-colors">
                Открий
              </a>
              <a href="#artists" className="text-gray-600 hover:text-gray-900 transition-colors">
                Майстори
              </a>
              <a href="#works" className="text-gray-600 hover:text-gray-900 transition-colors">
                Портфолио
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 rounded-full transition-colors">
              <User size={16} />
              Вход
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
