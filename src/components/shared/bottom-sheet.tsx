import { Drawer } from 'vaul'
import { cn } from '@/lib/utils'

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function BottomSheet({ open, onClose, children, title }: BottomSheetProps) {
  return (
    <Drawer.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[60]" />
        <Drawer.Content
          className={cn(
            'fixed inset-x-0 bottom-0 z-[60]',
            'flex flex-col',
            'bg-white rounded-t-2xl',
            'max-h-[85dvh]',
            'max-w-[430px] mx-auto',
          )}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1 rounded-full bg-[var(--gray-200)]" />
          </div>

          {title && (
            <Drawer.Title className="text-center text-lg font-semibold text-[var(--black)] px-4 pb-2">
              {title}
            </Drawer.Title>
          )}

          <div className="overflow-y-auto px-4 pb-6">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
