import { cn } from '@/lib/utils'

interface DeliveryStatusProps {
  status: 'delivered' | 'read'
}

export function DeliveryStatus({ status }: DeliveryStatusProps) {
  return (
    <div className="flex justify-end">
      <span
        className={cn(
          'text-[11px] font-normal animate-[fade-in_200ms_ease_both]',
          status === 'read' ? 'text-[#3b82f6]' : 'text-[#a3a3a3]'
        )}
      >
        {status === 'read' ? 'Read' : 'Delivered'}
      </span>
    </div>
  )
}
