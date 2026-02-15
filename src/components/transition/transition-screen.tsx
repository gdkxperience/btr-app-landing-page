import { useEffect, useState } from 'react'

const BTR_APP_URL = 'https://btr-reborn.vercel.app'

type Phase = 'dissolve' | 'familiar' | 'better' | 'cta'

export function TransitionScreen() {
  const [phase, setPhase] = useState<Phase>('dissolve')

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('familiar'), 800),
      setTimeout(() => setPhase('better'), 2800),
      setTimeout(() => setPhase('cta'), 5000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const handleCta = () => {
    window.location.href = BTR_APP_URL
  }

  if (phase === 'dissolve') {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#fff',
          zIndex: 100,
          animation: 'chat-dissolve 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}
      />
    )
  }

  if (phase === 'familiar') {
    return (
      <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', zIndex: 90 }}>
        <p
          className="transition-text"
          style={{
            fontSize: 28,
            opacity: 0,
            animation: 'fade-in-up 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }}
        >
          Познато, нали?
        </p>
      </div>
    )
  }

  if (phase === 'better') {
    return (
      <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#fff', zIndex: 90 }}>
        <p
          className="transition-text"
          style={{
            fontSize: 34,
            opacity: 0,
            animation: 'fade-in-up 700ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }}
        >
          Има по-добър начин.
        </p>
        <p
          style={{
            fontSize: 17,
            color: '#8E8E93',
            fontWeight: 400,
            textAlign: 'center',
            opacity: 0,
            animation: 'fade-in-up 600ms cubic-bezier(0.4, 0, 0.2, 1) 400ms forwards',
          }}
        >
          Без обаждания. Без съобщения. Просто запази.
        </p>
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32, background: '#fff', zIndex: 90 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0, animation: 'fade-in-up 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards' }}>
        <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: '#ff5400', marginBottom: 4 }}>
          BTR
        </div>
        <p className="transition-text" style={{ fontSize: 22 }}>
          Запази &middot; Промени &middot; Повтори
        </p>
        <p style={{ fontSize: 15, color: '#8E8E93', fontWeight: 400, textAlign: 'center', maxWidth: 280, lineHeight: 1.4 }}>
          Открий салони, разгледай реални портфолиа и запази час мигновено.
        </p>
      </div>
      <button
        onClick={handleCta}
        className="transition-cta"
        style={{ opacity: 0, animation: 'fade-in-up 600ms cubic-bezier(0.4, 0, 0.2, 1) 300ms forwards' }}
      >
        Пробвай BTR
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
