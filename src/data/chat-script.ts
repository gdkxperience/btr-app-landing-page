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

// ─── Разговор 1: Glamour Studio — Отпращане ──────────────────────
const glamourStudio: Conversation = {
  contactName: 'Glamour Studio',
  contactInitials: 'GS',
  events: [
    { type: 'timestamp', text: 'Днес 14:34', delay: 400 },
    {
      type: 'message',
      data: { id: 'gs-1', sender: 'user', text: 'Хей! Имате ли свободен час за четвъртък около 16ч?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 2200, delay: 1200 },
    {
      type: 'message',
      data: { id: 'gs-2', sender: 'salon', text: 'съри нямам графика при мен в момента, можеш ли да се обадиш в салона по-късно?' },
      delay: 0,
    },
    { type: 'pause', delay: 600 },
    {
      type: 'message',
      data: { id: 'gs-3', sender: 'user', text: 'На работа съм цял ден \u{1F605} може ли да проверите и да ми пишете?' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'read', delay: 1200 },
    { type: 'pause', delay: 2500 },
  ],
}

// ─── Разговор 2: The Style Bar — Призракът ───────────────────────
const theStyleBar: Conversation = {
  contactName: 'The Style Bar',
  contactInitials: 'SB',
  events: [
    { type: 'timestamp', text: 'Днес 11:15', delay: 400 },
    {
      type: 'message',
      data: { id: 'sb-1', sender: 'user', text: 'Здравейте! Бих искала да запазя час за подстригване тази събота, имате ли свободно? \u{1F60A}' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'read', delay: 1800 },
    { type: 'pause', delay: 2200 },
    { type: 'timestamp', text: 'Днес 15:42', delay: 200 },
    {
      type: 'message',
      data: { id: 'sb-2', sender: 'user', text: 'Здравейте? \u{1F605}' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'read', delay: 1000 },
    { type: 'pause', delay: 2500 },
  ],
}

// ─── Разговор 3: Bella Hair Co. — Препращане ────────────────────
const bellaHairCo: Conversation = {
  contactName: 'Bella Hair Co.',
  contactInitials: 'BH',
  events: [
    { type: 'timestamp', text: 'Вчера 18:20', delay: 400 },
    {
      type: 'message',
      data: { id: 'bh-1', sender: 'user', text: 'Здравейте, колко струва балеаж при вас?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 1000, delay: 800 },
    {
      type: 'message',
      data: { id: 'bh-2', sender: 'salon', text: 'Хей! Пишете ни в Инстаграм за цени \u{1F495}' },
      delay: 0,
    },
    { type: 'pause', delay: 500 },
    {
      type: 'message',
      data: { id: 'bh-3', sender: 'user', text: 'Нямам Инстаграм \u{1F605} може ли просто да ми кажете тук?' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1200, delay: 1000 },
    {
      type: 'message',
      data: { id: 'bh-4', sender: 'salon', text: 'Виж ни Фейсбук страницата мила, всички цени са там!' },
      delay: 0,
    },
    { type: 'pause', delay: 2000 },
  ],
}

// ─── Разговор 4: Luxe Beauty Lounge — Отмяната ──────────────────
const luxeBeauty: Conversation = {
  contactName: 'Luxe Beauty Lounge',
  contactInitials: 'LB',
  events: [
    { type: 'timestamp', text: 'Днес 9:03', delay: 400 },
    {
      type: 'message',
      data: { id: 'lb-1', sender: 'user', text: 'Хей, потвърждавам си часа за утре в 14ч!' },
      delay: 300,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 2000, delay: 1000 },
    {
      type: 'message',
      data: { id: 'lb-2', sender: 'salon', text: 'Здрастиии съжаляваме но трябва да отменим утрешния час \u{1F614} стилистката ни се разболя' },
      delay: 0,
    },
    { type: 'pause', delay: 600 },
    {
      type: 'message',
      data: { id: 'lb-3', sender: 'user', text: 'О не \u{1F629} мога ли да преместя за следващата седмица по същото време?' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1500, delay: 800 },
    {
      type: 'message',
      data: { id: 'lb-4', sender: 'salon', text: 'Просто ни пишете следващата седмица и ще видим какво има свободно!' },
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
