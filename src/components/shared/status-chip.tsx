import { cn } from '@/lib/utils'

interface StatusChipProps {
  isOpen: boolean
  label: string
}

export function StatusChip({ isOpen, label }: StatusChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
        isOpen
          ? 'text-[var(--success)] bg-[var(--success)]/10'
          : 'text-[var(--gray-400)] bg-[var(--gray-400)]/10',
      )}
    >
      {label}
    </span>
  )
}
