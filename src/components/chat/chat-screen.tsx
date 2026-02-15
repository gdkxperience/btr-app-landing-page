import { useEffect, useRef } from 'react'
import { conversations } from '@/data/chat-script'
import { useChatSequence } from '@/hooks/use-chat-sequence'
import { ChatBubble } from './chat-bubble'
import { TypingIndicator } from './typing-indicator'
import { DeliveryStatus } from './delivery-status'

interface ChatScreenProps {
  onComplete: () => void
}

export function ChatScreen({ onComplete }: ChatScreenProps) {
  const {
    currentConversation,
    visibleItems,
    isTyping,
    deliveryStatus,
    contact,
    isComplete,
    isFading,
    skip,
  } = useChatSequence(conversations)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleItems, isTyping, deliveryStatus])

  useEffect(() => {
    if (!isComplete) return
    const id = setTimeout(() => onCompleteRef.current(), 600)
    return () => clearTimeout(id)
  }, [isComplete])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh', background: '#000' }}>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 430, height: '100dvh', background: '#fff', overflow: 'hidden' }}>

        {/* Skip */}
        <button onClick={skip} className="skip-btn" aria-label="Skip chat animation">
          Skip
        </button>

        {/* iOS Status Bar */}
        <div className="ios-status-bar">
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <rect x="0" y="9" width="3" height="3" rx="0.5" fill="#000"/>
              <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="#000"/>
              <rect x="9" y="3" width="3" height="9" rx="0.5" fill="#000"/>
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#000"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="#000"/>
              <path d="M5.17 8.33a4 4 0 015.66 0" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M2.93 6.09a7 7 0 0110.14 0" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M.7 3.86A10 10 0 0115.3 3.86" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
              <rect x="0.5" y="0.5" width="22" height="11" rx="2" stroke="rgba(0,0,0,0.35)"/>
              <rect x="2" y="2" width="19" height="8" rx="1" fill="#000"/>
              <path d="M24 4v4a2 2 0 000-4z" fill="rgba(0,0,0,0.35)"/>
            </svg>
          </div>
        </div>

        {/* Nav bar */}
        <div className="ios-nav-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#007AFF', fontSize: 17, zIndex: 1 }}>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1.5 9L9 17" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Messages</span>
          </div>
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: 17, fontWeight: 600, whiteSpace: 'nowrap', transition: 'opacity 0.3s ease', opacity: isFading ? 0 : 1 }}>
            {contact.name}
          </div>
          <div style={{ width: 60 }} />
        </div>

        {/* Contact header */}
        <div className="imessage-contact-header" style={{ transition: 'opacity 0.4s ease, transform 0.4s ease', opacity: isFading ? 0 : 1, transform: isFading ? 'translateY(-4px)' : 'translateY(0)' }}>
          <div className="avatar">
            <span>{contact.initials}</span>
          </div>
          <div className="name">{contact.name}</div>
        </div>

        {/* Progress dots */}
        <div style={{ padding: '4px 0 8px', display: 'flex', justifyContent: 'center' }}>
          <div className="conversation-dots">
            {conversations.map((_, i) => (
              <div key={i} className={`dot${i === currentConversation ? ' active' : ''}${i < currentConversation ? ' completed' : ''}`} />
            ))}
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex', flexDirection: 'column', flex: 1,
            justifyContent: 'flex-end', gap: 4,
            paddingLeft: 6, paddingRight: 6, paddingBottom: 12,
            overflowY: 'auto',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            opacity: isFading ? 0 : 1,
            transform: isFading ? 'scale(0.98)' : 'scale(1)',
          }}
          aria-live="polite"
          role="log"
        >
          {visibleItems.map((item) =>
            item.kind === 'timestamp' ? (
              <div key={item.key} className="chat-timestamp">{item.text}</div>
            ) : (
              <ChatBubble key={item.key} message={item.message!} />
            )
          )}
          {isTyping && <TypingIndicator />}
          {deliveryStatus !== 'none' && <DeliveryStatus status={deliveryStatus} />}
        </div>

        {/* Input bar (decorative) */}
        <div className="imessage-input-bar">
          <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#8E8E93" strokeWidth="1.5"/>
              <path d="M12 7v10M7 12h10" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="input-field">
            <span style={{ fontSize: 17, color: '#C7C7CC' }}>iMessage</span>
          </div>
          <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1a9 9 0 100 18 9 9 0 000-18z" stroke="#8E8E93" strokeWidth="1.5"/>
              <path d="M7.5 10L9.5 12l3.5-4" stroke="#8E8E93" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
