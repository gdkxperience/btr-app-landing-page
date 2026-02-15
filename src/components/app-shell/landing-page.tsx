import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { HAS_SEEN_INTRO } from '@/lib/constants'
import { useLandingStore } from '@/stores/landing.store'
import { ChatScreen } from '@/components/chat/chat-screen'
import { TransitionScreen } from '@/components/transition/transition-screen'
import { Shell } from './shell'

interface LandingPageProps {
  initialTab?: 'feed' | 'map' | 'bookings'
}

export function LandingPage({ initialTab }: LandingPageProps) {
  const { phase, skipChat, completeChatSequence, completeTransition } =
    useLandingStore()

  // Skip intro if already seen or if arriving via direct URL
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(HAS_SEEN_INTRO) === '1'
    if (hasSeenIntro || initialTab) {
      skipChat()
    }
  }, [initialTab, skipChat])

  const handleTransitionComplete = () => {
    sessionStorage.setItem(HAS_SEEN_INTRO, '1')
    completeTransition()
  }

  return (
    <div className="relative min-h-dvh">
      {/* Chat layer */}
      {phase === 'chat' && (
        <div className={cn('absolute inset-0 z-[100]')}>
          <ChatScreen onComplete={completeChatSequence} />
        </div>
      )}

      {/* Transition layer */}
      {phase === 'transition' && (
        <div className={cn('absolute inset-0 z-[90]')}>
          <TransitionScreen onComplete={handleTransitionComplete} />
        </div>
      )}

      {/* App shell - renders during transition phase and beyond */}
      {(phase === 'transition' || phase === 'app') && (
        <div
          className={cn(
            'relative z-[1]',
            phase === 'transition' && 'invisible',
          )}
        >
          <Shell initialTab={initialTab} />
        </div>
      )}
    </div>
  )
}
