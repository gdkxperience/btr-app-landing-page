import { useState } from 'react'
import { ChatScreen } from '@/components/chat/chat-screen'
import { TransitionScreen } from '@/components/transition/transition-screen'

export function LandingPage() {
  const [phase, setPhase] = useState<'chat' | 'transition'>('chat')

  return (
    <div style={{ position: 'relative', minHeight: '100dvh' }}>
      {phase === 'chat' && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 100 }}>
          <ChatScreen onComplete={() => setPhase('transition')} />
        </div>
      )}

      {phase === 'transition' && <TransitionScreen />}
    </div>
  )
}
