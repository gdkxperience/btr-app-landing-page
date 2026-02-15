export interface ChatMessage {
  id: string
  sender: 'user' | 'salon'
  text: string
}

export interface ChatEvent {
  type: 'message' | 'typing' | 'delivered' | 'read' | 'clear' | 'timestamp' | 'pause'
  data?: ChatMessage
  duration?: number
  delay: number
  text?: string
}

export interface Conversation {
  contactName: string
  contactInitials: string
  events: ChatEvent[]
}

// ─── Conversation 1: Glamour Studio — The Brush-Off ───────────────
const glamourStudio: Conversation = {
  contactName: 'Glamour Studio',
  contactInitials: 'GS',
  events: [
    { type: 'timestamp', text: 'Today 2:34 PM', delay: 400 },
    {
      type: 'message',
      data: { id: 'gs-1', sender: 'user', text: 'Hey! Do you have any availability this Thursday around 4pm?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 2200, delay: 1200 },
    {
      type: 'message',
      data: { id: 'gs-2', sender: 'salon', text: "sorry I don't have my schedule with me rn, can you call the salon later?" },
      delay: 0,
    },
    { type: 'pause', delay: 600 },
    {
      type: 'message',
      data: { id: 'gs-3', sender: 'user', text: "I'm at work all day \u{1F605} is there any way you could check and text me back?" },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'read', delay: 1200 },
    { type: 'pause', delay: 2500 },
  ],
}

// ─── Conversation 2: The Style Bar — The Ghost ────────────────────
const theStyleBar: Conversation = {
  contactName: 'The Style Bar',
  contactInitials: 'SB',
  events: [
    { type: 'timestamp', text: 'Today 11:15 AM', delay: 400 },
    {
      type: 'message',
      data: { id: 'sb-1', sender: 'user', text: "Hi! I'd love to book a haircut for this Saturday, do you have any openings? \u{1F60A}" },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'read', delay: 1800 },
    { type: 'pause', delay: 2200 },
    { type: 'timestamp', text: 'Today 3:42 PM', delay: 200 },
    {
      type: 'message',
      data: { id: 'sb-2', sender: 'user', text: 'Hello? \u{1F605}' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'read', delay: 1000 },
    { type: 'pause', delay: 2500 },
  ],
}

// ─── Conversation 3: Bella Hair Co. — The Runaround ──────────────
const bellaHairCo: Conversation = {
  contactName: 'Bella Hair Co.',
  contactInitials: 'BH',
  events: [
    { type: 'timestamp', text: 'Yesterday 6:20 PM', delay: 400 },
    {
      type: 'message',
      data: { id: 'bh-1', sender: 'user', text: 'Hi, how much do you charge for a balayage?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 1000, delay: 800 },
    {
      type: 'message',
      data: { id: 'bh-2', sender: 'salon', text: 'Hey! DM us on Instagram for pricing \u{1F495}' },
      delay: 0,
    },
    { type: 'pause', delay: 500 },
    {
      type: 'message',
      data: { id: 'bh-3', sender: 'user', text: "I don't have Instagram \u{1F605} can you just let me know here?" },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1200, delay: 1000 },
    {
      type: 'message',
      data: { id: 'bh-4', sender: 'salon', text: 'Check our Facebook page babe, all our prices are there!' },
      delay: 0,
    },
    { type: 'pause', delay: 2000 },
  ],
}

// ─── Conversation 4: Luxe Beauty Lounge — The Cancellation ───────
const luxeBeauty: Conversation = {
  contactName: 'Luxe Beauty Lounge',
  contactInitials: 'LB',
  events: [
    { type: 'timestamp', text: 'Today 9:03 AM', delay: 400 },
    {
      type: 'message',
      data: { id: 'lb-1', sender: 'user', text: 'Hey just confirming my appointment for tomorrow at 2pm!' },
      delay: 300,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 2000, delay: 1000 },
    {
      type: 'message',
      data: { id: 'lb-2', sender: 'salon', text: "Hiii so sorry but we have to cancel tomorrow \u{1F614} our stylist called in sick" },
      delay: 0,
    },
    { type: 'pause', delay: 600 },
    {
      type: 'message',
      data: { id: 'lb-3', sender: 'user', text: 'Oh no \u{1F629} can I reschedule for next week same time?' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1500, delay: 800 },
    {
      type: 'message',
      data: { id: 'lb-4', sender: 'salon', text: "Just message us next week and we'll see what's available!" },
      delay: 0,
    },
    { type: 'pause', delay: 2200 },
  ],
}

export const conversations: Conversation[] = [
  glamourStudio,
  theStyleBar,
  bellaHairCo,
  luxeBeauty,
]
