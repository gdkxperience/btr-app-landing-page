import { useEffect, useState } from 'react'

interface TransitionScreenProps {
  onComplete: () => void
}

export function TransitionScreen({ onComplete }: TransitionScreenProps) {
  const [phase, setPhase] = useState<'dissolve' | 'oneliner' | 'reveal'>('dissolve')

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('oneliner'), 500)
    const timer2 = setTimeout(() => setPhase('reveal'), 2000)
    const timer3 = setTimeout(onComplete, 2500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  if (phase === 'reveal') return null

  if (phase === 'oneliner') {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-white"
        style={{ zIndex: 90 }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '24px',
            fontWeight: 600,
            color: '#0a0a0a',
            letterSpacing: '-0.01em',
            animation:
              'one-liner-sequence 1500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }}
        >
          There&apos;s a better way.
        </p>
      </div>
    )
  }

  // dissolve phase
  return (
    <div
      className="fixed inset-0 bg-[#f5f5f5]"
      style={{
        zIndex: 100,
        animation:
          'chat-dissolve 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }}
    />
  )
}
