import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface OwnerCtaProps {
  onDismiss: () => void
}

export function OwnerCta({ onDismiss }: OwnerCtaProps) {
  return (
    <div
      className={cn(
        'fixed z-50',
        'left-4 right-4',
        'bottom-[calc(44px+env(safe-area-inset-bottom)+12px)]',
        'max-w-[calc(430px-32px)] mx-auto',
        'bg-[var(--black)] text-white rounded-xl',
        'p-3 px-4',
        'flex items-center justify-between gap-3',
        'animate-[slide-in-up_350ms_var(--ease-smooth)_forwards]',
      )}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-sm font-medium whitespace-nowrap">Own a salon?</span>
        <a
          href="https://app.btr.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--primary)] whitespace-nowrap"
        >
          Put yours on the map &rarr;
        </a>
      </div>

      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        className={cn(
          'flex-shrink-0',
          'flex items-center justify-center',
          'w-11 h-11',
          'text-[var(--gray-400)]',
          'active:opacity-70 transition-opacity',
        )}
      >
        <X size={18} />
      </button>
    </div>
  )
}
