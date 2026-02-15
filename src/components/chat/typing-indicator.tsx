export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="flex items-center gap-[4px] bg-white border border-[#e5e5e5] rounded-[18px_18px_18px_4px] px-[14px] py-[10px] animate-[bubble-in_200ms_cubic-bezier(.4,0,.2,1)_both]"
      >
        <span
          className="block w-[8px] h-[8px] rounded-full bg-[#a3a3a3] animate-[typing-pulse_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: '0ms' }}
        />
        <span
          className="block w-[8px] h-[8px] rounded-full bg-[#a3a3a3] animate-[typing-pulse_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: '200ms' }}
        />
        <span
          className="block w-[8px] h-[8px] rounded-full bg-[#a3a3a3] animate-[typing-pulse_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: '400ms' }}
        />
      </div>
    </div>
  )
}
