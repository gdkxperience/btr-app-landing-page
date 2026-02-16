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

// ─── 1. Glamour Studio — Отпращане ───────────────────────────────
// "Обади се по-късно" → на работа съм → прочетено → тишина
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

// ─── 2. The Style Bar — Призракът ────────────────────────────────
// Прочетено → тишина → "Здравейте?" → прочетено → тишина
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

// ─── 3. Bella Hair Co. — Препращане ─────────────────────────────
// Инстаграм → нямам → Фейсбук
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

// ─── 4. Luxe Beauty Lounge — Отмяната ───────────────────────────
// Потвърждаване → отмяна → "пишете ни следващата седмица"
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

// ─── 5. Nova Hair — "Зависи" ────────────────────────────────────
// Пита за цена → зависи от дължината → елате на консултация
const novaHair: Conversation = {
  contactName: 'Nova Hair',
  contactInitials: 'NH',
  events: [
    { type: 'timestamp', text: 'Днес 10:22', delay: 400 },
    {
      type: 'message',
      data: { id: 'nh-1', sender: 'user', text: 'Здравейте! Колко би струвало подстригване и боядисване?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 1800, delay: 1000 },
    {
      type: 'message',
      data: { id: 'nh-2', sender: 'salon', text: 'Зависи от дължината и състоянието на косата' },
      delay: 0,
    },
    { type: 'pause', delay: 400 },
    {
      type: 'message',
      data: { id: 'nh-3', sender: 'user', text: 'Средна дължина, нямам боя в момента. Може ли поне ориентировъчно?' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1500, delay: 900 },
    {
      type: 'message',
      data: { id: 'nh-4', sender: 'salon', text: 'Трябва да дойдете на консултация първо, не мога да кажа без да видя косата \u{1F937}\u{200D}\u{2640}\u{FE0F}' },
      delay: 0,
    },
    { type: 'pause', delay: 2200 },
  ],
}

// ─── 6. Prestige Salon — Всичко заето ───────────────────────────
// Тази седмица нямаме → следващата? → също → ???
const prestigeSalon: Conversation = {
  contactName: 'Prestige Salon',
  contactInitials: 'PS',
  events: [
    { type: 'timestamp', text: 'Днес 13:10', delay: 400 },
    {
      type: 'message',
      data: { id: 'ps-1', sender: 'user', text: 'Здравейте, имате ли свободен час тази седмица за маникюр?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 1200, delay: 1000 },
    {
      type: 'message',
      data: { id: 'ps-2', sender: 'salon', text: 'Тази седмица нямаме нищо свободно' },
      delay: 0,
    },
    { type: 'pause', delay: 400 },
    {
      type: 'message',
      data: { id: 'ps-3', sender: 'user', text: 'А следващата седмица? Всеки ден ми върши работа' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1500, delay: 1000 },
    {
      type: 'message',
      data: { id: 'ps-4', sender: 'salon', text: 'Следващата също е пълна, опитайте пак по-нататък' },
      delay: 0,
    },
    { type: 'pause', delay: 500 },
    {
      type: 'message',
      data: { id: 'ps-5', sender: 'user', text: 'А кога имате свободно? \u{1F605}' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'read', delay: 1200 },
    { type: 'pause', delay: 2500 },
  ],
}

// ─── 7. Diva Studio — Гласово съобщение ─────────────────────────
// Отговарят само с гласови → не мога да слушам на работа
const divaStudio: Conversation = {
  contactName: 'Diva Studio',
  contactInitials: 'DS',
  events: [
    { type: 'timestamp', text: 'Днес 16:45', delay: 400 },
    {
      type: 'message',
      data: { id: 'ds-1', sender: 'user', text: 'Здравейте! Работите ли с кератинова терапия? И колко струва?' },
      delay: 300,
    },
    { type: 'delivered', delay: 400 },
    { type: 'typing', duration: 1800, delay: 800 },
    {
      type: 'message',
      data: { id: 'ds-2', sender: 'salon', text: '\u{1F3A4} Гласово съобщение (0:47)' },
      delay: 0,
    },
    { type: 'pause', delay: 600 },
    {
      type: 'message',
      data: { id: 'ds-3', sender: 'user', text: 'Не мога да слушам гласови в момента, може ли на текст? \u{1F64F}' },
      delay: 400,
    },
    { type: 'delivered', delay: 300 },
    { type: 'typing', duration: 1500, delay: 1000 },
    {
      type: 'message',
      data: { id: 'ds-4', sender: 'salon', text: '\u{1F3A4} Гласово съобщение (0:32)' },
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
  novaHair,
  prestigeSalon,
  divaStudio,
]

/** Pick one conversation at random */
export function getRandomConversation(): Conversation {
  return conversations[Math.floor(Math.random() * conversations.length)]!
}
