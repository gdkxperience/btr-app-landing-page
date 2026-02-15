import { Home, MapPin, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tab = 'feed' | 'map' | 'bookings'

interface NavBarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
  onBookingsGated?: () => void
}

const tabs: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: 'feed', label: 'Home', icon: Home },
  { id: 'map', label: 'Map', icon: MapPin },
  { id: 'bookings', label: 'Bookings', icon: Calendar },
]

export function NavBar({ activeTab, onTabChange, onBookingsGated }: NavBarProps) {
  function handleTabPress(tab: Tab) {
    if (tab === 'bookings' && onBookingsGated) {
      onBookingsGated()
      return
    }
    onTabChange(tab)
  }

  return (
    <nav
      className={cn(
        'sticky top-14 z-30',
        'flex items-center justify-center gap-2',
        'h-11 px-4',
        'bg-white border-b border-[var(--gray-200)]',
      )}
    >
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = activeTab === id
        return (
          <button
            key={id}
            onClick={() => handleTabPress(id)}
            className={cn(
              'inline-flex items-center gap-1.5',
              'rounded-full px-4 py-1.5 text-sm font-medium',
              'transition-colors duration-[120ms]',
              isActive
                ? 'bg-[var(--black)] text-white'
                : 'text-[var(--gray-400)]',
            )}
          >
            <Icon size={16} />
            {label}
          </button>
        )
      })}
    </nav>
  )
}
