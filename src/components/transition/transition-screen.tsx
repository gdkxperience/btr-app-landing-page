import { useEffect, useState } from 'react'

const BTR_APP_URL = 'https://btr-reborn.vercel.app'

type Phase = 'dissolve' | 'familiar' | 'better'

export function TransitionScreen() {
  const [phase, setPhase] = useState<Phase>('dissolve')

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('familiar'), 800),
      setTimeout(() => setPhase('better'), 2800),
      setTimeout(() => { window.location.href = BTR_APP_URL }, 5000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

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
