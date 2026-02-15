interface ChatHeaderProps {
  contact: { name: string; initials: string }
}

export function ChatHeader({ contact }: ChatHeaderProps) {
  return (
    <div className="flex flex-col items-center pt-[16px] pb-[12px] border-b border-[#e5e5e5]">
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#f5f5f5]">
        <span className="text-[14px] font-semibold text-[#404040]">
          {contact.initials}
        </span>
      </div>
      <span className="mt-[4px] text-[16px] font-semibold text-[#0a0a0a]">
        {contact.name}
      </span>
    </div>
  )
}
