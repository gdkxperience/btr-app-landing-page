import { useCallback, useEffect, useRef, useState } from 'react'
import type { ChatMessage, Conversation } from '@/data/chat-script'

interface UseChatSequenceReturn {
  currentConversation: number
  visibleMessages: ChatMessage[]
  isTyping: boolean
  deliveryStatus: 'none' | 'delivered' | 'read'
  contact: { name: string; initials: string }
  isComplete: boolean
  isPlaying: boolean
  skip: () => void
}

export function useChatSequence(
  script: Conversation[]
): UseChatSequenceReturn {
  const [currentConversation, setCurrentConversation] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [deliveryStatus, setDeliveryStatus] = useState<
    'none' | 'delivered' | 'read'
  >('none')
  const [isComplete, setIsComplete] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }, [])

  const skip = useCallback(() => {
    clearTimeouts()
    setVisibleMessages([])
    setIsTyping(false)
    setDeliveryStatus('none')
    setIsPlaying(false)
    setIsComplete(true)
  }, [clearTimeouts])

  useEffect(() => {
    if (!isPlaying || script.length === 0) return

    let cumulativeDelay = 0

    const scheduleTimeout = (fn: () => void, delay: number) => {
      cumulativeDelay += delay
      const id = setTimeout(fn, cumulativeDelay)
      timeoutsRef.current.push(id)
      return cumulativeDelay
    }

    for (let convIdx = 0; convIdx < script.length; convIdx++) {
      const conversation = script[convIdx]!

      // Crossfade delay between conversations (except the first)
      if (convIdx > 0) {
        scheduleTimeout(() => {
          setVisibleMessages([])
          setIsTyping(false)
          setDeliveryStatus('none')
          setCurrentConversation(convIdx)
        }, 300)
      }

      for (const event of conversation.events) {
        switch (event.type) {
          case 'message': {
            const msg = event.data!
            scheduleTimeout(() => {
              setIsTyping(false)
              setVisibleMessages((prev) => [...prev, msg])
            }, event.delay)
            break
          }
          case 'typing': {
            scheduleTimeout(() => {
              setIsTyping(true)
            }, event.delay)
            scheduleTimeout(() => {
              setIsTyping(false)
            }, event.duration ?? 1000)
            break
          }
          case 'delivered': {
            scheduleTimeout(() => {
              setDeliveryStatus('delivered')
            }, event.delay)
            break
          }
          case 'read': {
            scheduleTimeout(() => {
              setDeliveryStatus('read')
            }, event.delay)
            break
          }
          case 'clear': {
            scheduleTimeout(() => {
              setVisibleMessages([])
              setIsTyping(false)
              setDeliveryStatus('none')
            }, event.delay)
            break
          }
        }
      }
    }

    // After all conversations complete
    scheduleTimeout(() => {
      setIsPlaying(false)
      setIsComplete(true)
    }, 800)

    return () => {
      clearTimeouts()
    }
  }, [isPlaying, script, clearTimeouts])

  const conversation = script[currentConversation]
  const contact = conversation
    ? { name: conversation.contactName, initials: conversation.contactInitials }
    : { name: '', initials: '' }

  return {
    currentConversation,
    visibleMessages,
    isTyping,
    deliveryStatus,
    contact,
    isComplete,
    isPlaying,
    skip,
  }
}
