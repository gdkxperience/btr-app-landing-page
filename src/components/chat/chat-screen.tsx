import { useEffect, useRef } from 'react'
import { conversations } from '@/data/chat-script'
import { useChatSequence } from '@/hooks/use-chat-sequence'
import { ChatHeader } from './chat-header'
import { ChatBubble } from './chat-bubble'
import { TypingIndicator } from './typing-indicator'
import { DeliveryStatus } from './delivery-status'

interface ChatScreenProps {
  onComplete: () => void
}

export function ChatScreen({ onComplete }: ChatScreenProps) {
  const {
    visibleMessages,
    isTyping,
    deliveryStatus,
    contact,
    isComplete,
    skip,
  } = useChatSequence(conversations)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (!isComplete) return
    const id = setTimeout(() => {
      onCompleteRef.current()
    }, 1000)
    return () => clearTimeout(id)
  }, [isComplete])

  return (
    <div className="flex items-center justify-center h-[100dvh] bg-[#f5f5f5]">
      <div className="relative flex flex-col w-full max-w-[430px] h-[100dvh] bg-[#f5f5f5]">
        {/* Skip button */}
        <button
          onClick={skip}
          className="absolute top-[16px] right-[16px] z-10 text-[12px] text-[#a3a3a3] opacity-0 animate-[fade-in_300ms_ease_2000ms_forwards] hover:text-[#404040] transition-colors"
          aria-label="Skip chat animation"
        >
          Skip
        </button>

        {/* Header */}
        <ChatHeader contact={contact} />

        {/* Messages area */}
        <div
          className="flex flex-col flex-1 justify-end gap-[8px] px-[16px] pb-[32px] overflow-y-auto"
          aria-live="polite"
          role="log"
        >
          {visibleMessages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}

          {isTyping && <TypingIndicator />}

          {deliveryStatus !== 'none' && (
            <DeliveryStatus status={deliveryStatus} />
          )}
        </div>
      </div>
    </div>
  )
}
