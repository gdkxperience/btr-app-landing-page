export interface ChatMessage {
  id: string
  sender: 'user' | 'salon'
  text: string
}

export interface ChatEvent {
  type: 'message' | 'typing' | 'delivered' | 'read' | 'clear'
  data?: ChatMessage
  duration?: number
  delay: number
}

export interface Conversation {
  contactName: string
  contactInitials: string
  events: ChatEvent[]
}

// ─── Conversation 1: Glamour Studio ─────────────────────────────────
// User asks about Thursday availability.
// Salon replies dismissively: "sorry I don't have my schedule, call me later."
const glamourStudioConversation: Conversation = {
  contactName: 'Glamour Studio',
  contactInitials: 'GS',
  events: [
    {
      type: 'message',
      data: {
        id: 'gs-msg-001',
        sender: 'user',
        text: 'hey, do you have availability for thursday at 4?',
      },
      delay: 500,
    },
    {
      type: 'delivered',
      delay: 300,
    },
    {
      type: 'typing',
      duration: 2000,
      delay: 700,
    },
    {
      type: 'message',
      data: {
        id: 'gs-msg-002',
        sender: 'salon',
        text: "sorry I don't have my schedule with me, call me later",
      },
      delay: 0,
    },
  ],
}

// ─── Conversation 2: The Style Bar ──────────────────────────────────
// User asks about Saturday haircut.
// Gets "Delivered", then "Read", then silence (ghosted).
const theStyleBarConversation: Conversation = {
  contactName: 'The Style Bar',
  contactInitials: 'SB',
  events: [
    {
      type: 'message',
      data: {
        id: 'sb-msg-001',
        sender: 'user',
        text: 'hi! do you have any openings for a haircut on saturday?',
      },
      delay: 500,
    },
    {
      type: 'delivered',
      delay: 300,
    },
    {
      type: 'read',
      delay: 1500,
    },
  ],
}

// ─── Conversation 3: Bella Hair Co. ─────────────────────────────────
// User asks about balayage pricing.
// Salon redirects to Instagram DMs.
const bellaHairCoConversation: Conversation = {
  contactName: 'Bella Hair Co.',
  contactInitials: 'BH',
  events: [
    {
      type: 'message',
      data: {
        id: 'bh-msg-001',
        sender: 'user',
        text: 'hi, how much do you charge for a balayage?',
      },
      delay: 1500,
    },
    {
      type: 'delivered',
      delay: 300,
    },
    {
      type: 'typing',
      duration: 700,
      delay: 500,
    },
    {
      type: 'message',
      data: {
        id: 'bh-msg-002',
        sender: 'salon',
        text: "DM us on instagram for pricing \u{1F495}",
      },
      delay: 0,
    },
  ],
}

export const conversations: Conversation[] = [
  glamourStudioConversation,
  theStyleBarConversation,
  bellaHairCoConversation,
]

// ─── Flattened conversation data for the assets / static display ────
export const CHAT_CONVERSATIONS = [
  {
    contactName: 'Glamour Studio',
    contactInitials: 'GS',
    messages: [
      { sender: 'user' as const, text: 'hey, do you have availability for thursday at 4?' },
      {
        sender: 'salon' as const,
        text: "sorry I don't have my schedule with me, call me later",
      },
    ],
  },
  {
    contactName: 'The Style Bar',
    contactInitials: 'SB',
    messages: [
      {
        sender: 'user' as const,
        text: 'hi! do you have any openings for a haircut on saturday?',
      },
    ],
  },
  {
    contactName: 'Bella Hair Co.',
    contactInitials: 'BH',
    messages: [
      { sender: 'user' as const, text: 'hi, how much do you charge for a balayage?' },
      { sender: 'salon' as const, text: "DM us on instagram for pricing \u{1F495}" },
    ],
  },
]
