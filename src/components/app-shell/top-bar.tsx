import { cn } from '@/lib/utils'

interface TopBarProps {
  onSignIn: () => void
}

export function TopBar({ onSignIn }: TopBarProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40',
        'flex items-center justify-between',
        'h-14 px-4',
        'bg-white border-b border-[var(--gray-200)]',
      )}
    >
      {/* Logo */}
      <span className="text-xl font-bold text-[var(--black)]">BTR</span>

      {/* Sign In */}
      <button
        onClick={onSignIn}
        className="text-sm font-semibold text-[var(--primary)] active:opacity-70 transition-opacity"
      >
        Sign In
      </button>
    </header>
  )
}
