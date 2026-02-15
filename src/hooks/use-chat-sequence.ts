import { useCallback, useEffect, useRef, useState } from 'react'
import type { ChatMessage, Conversation } from '@/data/chat-script'

export interface VisibleItem {
  kind: 'message' | 'timestamp'
  message?: ChatMessage
  text?: string
  key: string
}

interface UseChatSequenceReturn {
  currentConversation: number
  visibleItems: VisibleItem[]
  isTyping: boolean
  deliveryStatus: 'none' | 'delivered' | 'read'
  contact: { name: string; initials: string }
  isComplete: boolean
  isPlaying: boolean
  isFading: boolean
  skip: () => void
}

export function useChatSequence(
  script: Conversation[]
): UseChatSequenceReturn {
  const [currentConversation, setCurrentConversation] = useState(0)
  const [visibleItems, setVisibleItems] = useState<VisibleItem[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [deliveryStatus, setDeliveryStatus] = useState<
    'none' | 'delivered' | 'read'
  >('none')
  const [isComplete, setIsComplete] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFading, setIsFading] = useState(false)

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
  }, [])

  const skip = useCallback(() => {
    clearTimeouts()
    setVisibleItems([])
    setIsTyping(false)
    setDeliveryStatus('none')
    setIsFading(false)
    setIsPlaying(false)
    setIsComplete(true)
  }, [clearTimeouts])

  useEffect(() => {
    if (!isPlaying || script.length === 0) return

    let cumulativeDelay = 0
    let tsIdx = 0

    const scheduleTimeout = (fn: () => void, delay: number) => {
      cumulativeDelay += delay
      const id = setTimeout(fn, cumulativeDelay)
      timeoutsRef.current.push(id)
    }

    for (let convIdx = 0; convIdx < script.length; convIdx++) {
      const conversation = script[convIdx]!

      // Crossfade between conversations (except the first)
      if (convIdx > 0) {
        const nextIdx = convIdx
        scheduleTimeout(() => {
          setIsFading(true)
        }, 0)
        scheduleTimeout(() => {
          setVisibleItems([])
          setIsTyping(false)
          setDeliveryStatus('none')
          setCurrentConversation(nextIdx)
          setIsFading(false)
        }, 500)
      }

      for (const event of conversation.events) {
        switch (event.type) {
          case 'message': {
            const msg = event.data!
            scheduleTimeout(() => {
              setIsTyping(false)
              setVisibleItems((prev) => [
                ...prev,
                { kind: 'message', message: msg, key: msg.id },
              ])
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
          case 'timestamp': {
            const text = event.text ?? ''
            const key = `ts-${convIdx}-${tsIdx++}`
            scheduleTimeout(() => {
              setVisibleItems((prev) => [
                ...prev,
                { kind: 'timestamp', text, key },
              ])
            }, event.delay)
            break
          }
          case 'pause': {
            scheduleTimeout(() => {}, event.delay)
            break
          }
          case 'clear': {
            scheduleTimeout(() => {
              setVisibleItems([])
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
    }, 400)

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
    visibleItems,
    isTyping,
    deliveryStatus,
    contact,
    isComplete,
    isPlaying,
    isFading,
    skip,
  }
}
