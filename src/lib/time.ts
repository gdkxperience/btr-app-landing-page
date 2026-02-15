export function getRelativeTime(isoDate: string): string {
  const now = new Date()
  const date = new Date(isoDate)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString()
}

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

interface OperatingHour {
  day: string
  openTime: string
  closeTime: string
  isClosed: boolean
}

export function isOpenNow(
  operatingHours: OperatingHour[]
): { isOpen: boolean; label: string } {
  const now = new Date()
  const dayName = DAYS[now.getDay()]
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

  const todayHours = operatingHours.find((h) => h.day === dayName)

  if (!todayHours || todayHours.isClosed) {
    const nextOpen = findNextOpenDay(operatingHours, now)
    return { isOpen: false, label: nextOpen }
  }

  if (currentTime >= todayHours.openTime && currentTime < todayHours.closeTime) {
    return {
      isOpen: true,
      label: `Open now \u00B7 Closes ${formatTime(todayHours.closeTime)}`,
    }
  }

  if (currentTime < todayHours.openTime) {
    return {
      isOpen: false,
      label: `Closed \u00B7 Opens today at ${formatTime(todayHours.openTime)}`,
    }
  }

  const nextOpen = findNextOpenDay(operatingHours, now)
  return { isOpen: false, label: nextOpen }
}

function findNextOpenDay(hours: OperatingHour[], now: Date): string {
  const currentDayIndex = now.getDay()
  for (let offset = 1; offset <= 7; offset++) {
    const nextIndex = (currentDayIndex + offset) % 7
    const dayName = DAYS[nextIndex]
    const dayHours = hours.find((h) => h.day === dayName)
    if (dayHours && !dayHours.isClosed) {
      return `Closed \u00B7 Opens ${dayName} at ${formatTime(dayHours.openTime)}`
    }
  }
  return 'Closed'
}

function formatTime(time: string): string {
  const [hoursStr, minutesStr] = time.split(':')
  const hours = parseInt(hoursStr!, 10)
  const minutes = minutesStr
  const period = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
  return `${displayHours}:${minutes} ${period}`
}
