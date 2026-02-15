import { cn } from '@/lib/utils'

interface ChatBubbleProps {
  message: { id: string; sender: 'user' | 'salon'; text: string }
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.sender === 'user'

  return (
    <div
      className={cn(
        'flex',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[75%] px-[14px] py-[8px] text-[16px] leading-[1.4]',
          'animate-[bubble-in_200ms_cubic-bezier(.4,0,.2,1)_both]',
          isUser
            ? 'bg-[#ff5400] text-white rounded-[18px_18px_4px_18px]'
            : 'bg-white border border-[#e5e5e5] text-[#0a0a0a] rounded-[18px_18px_18px_4px]'
        )}
      >
        {message.text}
      </div>
    </div>
  )
}
