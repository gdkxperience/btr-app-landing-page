// This component is no longer used — header is now inline in ChatScreen.
// Kept as a stub to prevent import errors from other files.

interface ChatHeaderProps {
  contact: { name: string; initials: string }
}

export function ChatHeader({ contact }: ChatHeaderProps) {
  return (
    <div className="imessage-contact-header">
      <div className="avatar">
        <span>{contact.initials}</span>
      </div>
      <div className="name">{contact.name}</div>
    </div>
  )
}
