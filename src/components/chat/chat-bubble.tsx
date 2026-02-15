interface ChatBubbleProps {
  message: { id: string; sender: 'user' | 'salon'; text: string }
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.sender === 'user'

  return (
    <div style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
      <div className={`imessage-bubble ${isUser ? 'sent' : 'received'}`}>
        {message.text}
      </div>
    </div>
  )
}
