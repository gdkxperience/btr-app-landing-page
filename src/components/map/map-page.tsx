import { MapPin } from 'lucide-react'
import { salons } from '@/data/salons'
import { services } from '@/data/services'
import { isOpenNow } from '@/lib/time'
import { StatusChip } from '@/components/shared/status-chip'

interface MapPageProps {
  onSalonTap?: (salonId: string) => void
  onBookTap?: () => void
}

export function MapPage({ onSalonTap }: MapPageProps) {
  return (
    <div className="pt-[calc(56px+44px)] flex flex-col min-h-[100dvh]">
      {/* Map placeholder */}
      <div className="relative bg-[#e5e5e5] min-h-[300px] flex-1 flex items-center justify-center overflow-hidden">
        {/* Decorative pin markers */}
        {salons.map((salon) => {
          const left = ((salon.location.lng + 74.02) / 0.07) * 100
          const top = ((40.8 - salon.location.lat) / 0.1) * 100
          return (
            <button
              key={salon.id}
              onClick={() => onSalonTap?.(salon.id)}
              className="absolute group"
              style={{
                left: `${Math.min(Math.max(left, 10), 90)}%`,
                top: `${Math.min(Math.max(top, 10), 90)}%`,
              }}
            >
              <MapPin
                size={28}
                className="text-[#ff5400] fill-[#ff5400] group-hover:scale-110 transition-transform"
              />
            </button>
          )
        })}
        <p className="text-sm text-[#a3a3a3] z-10 bg-white/80 px-3 py-1.5 rounded-full">
          Interactive map coming soon
        </p>
      </div>

      {/* Salon list */}
      <div className="border-t border-[#e5e5e5]">
        <h3 className="text-sm font-semibold text-[#0a0a0a] px-4 py-3">
          Nearby Salons
        </h3>
        <div className="divide-y divide-[#e5e5e5]">
          {salons.map((salon) => {
            const status = isOpenNow(salon.operatingHours)
            const topService = services.find(
              (s) => s.id === salon.topServiceId
            )
            return (
              <button
                key={salon.id}
                onClick={() => onSalonTap?.(salon.id)}
                className="flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors"
              >
                <div className="w-16 h-16 rounded-lg bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#a3a3a3]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-[#0a0a0a] truncate">
                    {salon.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <StatusChip
                      isOpen={status.isOpen}
                      label={status.isOpen ? 'Open' : 'Closed'}
                    />
                    <span className="text-xs text-[#a3a3a3] truncate">
                      {salon.address}
                    </span>
                  </div>
                  {topService && (
                    <p className="text-xs text-[#a3a3a3] mt-1">
                      Top: {topService.name}
                    </p>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
