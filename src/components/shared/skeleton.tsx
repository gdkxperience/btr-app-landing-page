import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'bg-[var(--gray-200)] rounded-md',
        'animate-[skeleton-pulse_1.5s_infinite]',
        className,
      )}
    />
  )
}
