import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'BTR - Резервирайте вашия следващ салон',
  description: 'Открийте и резервирайте най-добрите салони за красота в България',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
