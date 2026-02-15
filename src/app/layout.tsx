import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BTR - Открий своя Beauty Master',
  description: 'Платформата от ново поколение за откриване и резервиране на най-добрите beauty специалисти в България. AI-powered търсене, мигновени резервации.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg" className={inter.variable}>
      <body className="bg-dark-900 text-dark-50 overflow-x-hidden">{children}</body>
    </html>
  )
}
