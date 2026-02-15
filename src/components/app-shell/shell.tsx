import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { OWNER_CTA_DISMISSED } from '@/lib/constants'
import { useLandingStore } from '@/stores/landing.store'
import { TopBar } from './top-bar'
import { NavBar } from './nav-bar'
import { AuthGate } from './auth-gate'
import { OwnerCta } from './owner-cta'

type Tab = 'feed' | 'map' | 'bookings'

interface ShellProps {
  initialTab?: Tab
}

export function Shell({ initialTab = 'feed' }: ShellProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMessage, setAuthMessage] = useState('Welcome to BTR')
  const [showOwnerCta, setShowOwnerCta] = useState(false)

  const { ownerCtaDismissed, dismissOwnerCta } = useLandingStore()

  // Show owner CTA after 10 seconds (unless already dismissed)
  useEffect(() => {
    const wasDismissed =
      ownerCtaDismissed || sessionStorage.getItem(OWNER_CTA_DISMISSED) === '1'
    if (wasDismissed) return

    const timer = setTimeout(() => {
      setShowOwnerCta(true)
    }, 10_000)

    return () => clearTimeout(timer)
  }, [ownerCtaDismissed])

  const openAuthGate = useCallback((message: string) => {
    setAuthMessage(message)
    setAuthOpen(true)
  }, [])

  const handleSignIn = useCallback(() => {
    openAuthGate('Welcome to BTR')
  }, [openAuthGate])

  const handleBookingsGated = useCallback(() => {
    openAuthGate('Sign in to see your bookings')
  }, [openAuthGate])

  const handleDismissOwnerCta = useCallback(() => {
    setShowOwnerCta(false)
    dismissOwnerCta()
  }, [dismissOwnerCta])

  return (
    <div className={cn('flex flex-col min-h-dvh')}>
      <TopBar onSignIn={handleSignIn} />
      <NavBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onBookingsGated={handleBookingsGated}
      />

      {/* Page content area */}
      <main className="flex-1">
        {activeTab === 'feed' && (
          <div data-page="feed">
            {/* FeedPage will be rendered here */}
          </div>
        )}
        {activeTab === 'map' && (
          <div data-page="map">
            {/* MapPage will be rendered here */}
          </div>
        )}
      </main>

      {/* Auth gate bottom sheet */}
      <AuthGate
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        message={authMessage}
      />

      {/* Floating owner CTA */}
      {showOwnerCta && <OwnerCta onDismiss={handleDismissOwnerCta} />}
    </div>
  )
}
