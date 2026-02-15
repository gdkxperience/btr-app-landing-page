import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Share2,
  Phone,
  MapPin,
  Calendar,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { isOpenNow } from '@/lib/time'
import { StatusChip } from '@/components/shared/status-chip'
import { BottomSheet } from '@/components/shared/bottom-sheet'
import { Button } from '@/components/shared/button'
import { salons } from '@/data/salons'
import { services } from '@/data/services'
import { staff } from '@/data/staff'
import { posts } from '@/data/posts'

type TabId = 'services' | 'gallery' | 'staff'

const TABS: { id: TabId; label: string }[] = [
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'staff', label: 'Staff' },
]

const GALLERY_COLORS = [
  'bg-[#fef3ec]',
  'bg-[#eef2ff]',
  'bg-[#ecfdf5]',
  'bg-[#fdf2f8]',
  'bg-[#f0f9ff]',
  'bg-[#fefce8]',
]

export function SalonProfile() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<TabId>('services')
  const [authGateOpen, setAuthGateOpen] = useState(false)

  const salon = salons.find((s) => s.id === id)

  if (!salon) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh]">
        <p className="text-sm text-[#a3a3a3]">Salon not found</p>
      </div>
    )
  }

  const salonServices = services.filter((s) => salon.serviceIds.includes(s.id))
  const salonStaff = staff.filter((s) => salon.staffIds.includes(s.id))
  const salonPosts = posts.filter((p) => p.salonId === salon.id)
  const status = isOpenNow(salon.operatingHours)

  const handleBookTap = () => {
    setAuthGateOpen(true)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: salon.name,
          text: `Check out ${salon.name} on BTR`,
          url: window.location.href,
        })
      } catch {
        // User cancelled or share failed silently
      }
    }
  }

  return (
    <div className="min-h-[100dvh] bg-white">
      {/* Top navigation */}
      <div className="sticky top-0 z-40 flex items-center justify-between h-14 px-4 bg-white border-b border-[#e5e5e5]">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-[#f5f5f5] transition-colors"
        >
          <ArrowLeft size={20} className="text-[#0a0a0a]" />
        </button>
        <button
          onClick={handleShare}
          className="w-10 h-10 flex items-center justify-center rounded-full active:bg-[#f5f5f5] transition-colors"
        >
          <Share2 size={20} className="text-[#0a0a0a]" />
        </button>
      </div>

      {/* Cover image placeholder */}
      <div className="aspect-video bg-[#f5f5f5] flex items-center justify-center">
        <span className="text-sm text-[#a3a3a3]">{salon.name}</span>
      </div>

      {/* Salon info */}
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-2xl font-semibold text-[#0a0a0a]">
          {salon.name}
        </h1>
        <p className="text-sm text-[#a3a3a3] mt-1">{salon.address}</p>
        <div className="mt-2">
          <StatusChip isOpen={status.isOpen} label={status.label} />
        </div>
      </div>

      {/* Quick action buttons */}
      <div className="flex items-center gap-3 px-4 pb-4">
        <a
          href={`tel:${salon.phone}`}
          className="flex-1 flex flex-col items-center gap-1 py-3 rounded-lg bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors"
        >
          <Phone size={20} className="text-[#404040]" />
          <span className="text-xs font-medium text-[#404040]">Call</span>
        </a>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(salon.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center gap-1 py-3 rounded-lg bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors"
        >
          <MapPin size={20} className="text-[#404040]" />
          <span className="text-xs font-medium text-[#404040]">Map</span>
        </a>
        <button
          onClick={handleBookTap}
          className="flex-1 flex flex-col items-center gap-1 py-3 rounded-lg bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors"
        >
          <Calendar size={20} className="text-[#ff5400]" />
          <span className="text-xs font-medium text-[#ff5400]">Book</span>
        </button>
      </div>

      {/* Tab bar */}
      <div className="border-b border-[#e5e5e5]">
        <div className="flex px-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex-1 py-3 text-sm font-medium text-center relative transition-colors',
                activeTab === tab.id
                  ? 'text-[#0a0a0a]'
                  : 'text-[#a3a3a3]'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0a0a0a]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="pb-8">
        {/* Services tab */}
        {activeTab === 'services' && (
          <div className="divide-y divide-[#e5e5e5]">
            {salonServices.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between px-4 py-4"
              >
                <div className="min-w-0 flex-1 pr-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#0a0a0a]">
                      {service.name}
                    </p>
                    {service.isTopService && (
                      <span className="text-xs font-medium text-[#ff5400] bg-[#fff7ed] px-1.5 py-0.5 rounded-full">
                        Top
                      </span>
                    )}
                  </div>
                  {service.description && (
                    <p className="text-xs text-[#a3a3a3] mt-0.5 line-clamp-1">
                      {service.description}
                    </p>
                  )}
                  <p className="text-xs text-[#a3a3a3] mt-1">
                    {service.duration} min &middot; ${service.price}
                  </p>
                  {service.includedItems && service.includedItems.length > 0 && (
                    <p className="text-xs text-[#a3a3a3] mt-1">
                      Includes: {service.includedItems.join(', ')}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleBookTap}
                  className="text-sm font-semibold text-[#ff5400] whitespace-nowrap active:scale-[0.97] transition-transform"
                >
                  Book &rarr;
                </button>
              </div>
            ))}
            {salonServices.length === 0 && (
              <p className="text-sm text-[#a3a3a3] text-center py-8">
                No services listed
              </p>
            )}
          </div>
        )}

        {/* Gallery tab */}
        {activeTab === 'gallery' && (
          <>
            {salonPosts.length > 0 ? (
              <div className="grid grid-cols-3 gap-0.5 p-0.5">
                {salonPosts
                  .flatMap((post) =>
                    post.images.map((img, i) => ({
                      src: img,
                      postId: post.id,
                      index: i,
                    }))
                  )
                  .map((image, i) => (
                    <div
                      key={`${image.postId}-${image.index}`}
                      className={cn(
                        'aspect-square flex items-center justify-center',
                        GALLERY_COLORS[i % GALLERY_COLORS.length]
                      )}
                    >
                      <span className="text-xs text-[#a3a3a3] px-1 text-center truncate">
                        {image.src.split('/').pop()?.replace('.jpg', '') ||
                          'Photo'}
                      </span>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-sm text-[#a3a3a3] text-center py-8">
                No photos yet
              </p>
            )}
          </>
        )}

        {/* Staff tab */}
        {activeTab === 'staff' && (
          <div className="divide-y divide-[#e5e5e5]">
            {salonStaff.map((member) => {
              const initials = member.fullName
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()

              return (
                <div
                  key={member.id}
                  className="flex items-center gap-3 px-4 py-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center text-sm font-semibold text-[#404040] shrink-0">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0a0a0a]">
                      {member.fullName}
                    </p>
                    <p className="text-xs text-[#a3a3a3]">{member.role}</p>
                    {member.bio && (
                      <p className="text-xs text-[#404040] mt-0.5 line-clamp-2">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
            {salonStaff.length === 0 && (
              <p className="text-sm text-[#a3a3a3] text-center py-8">
                No staff listed
              </p>
            )}
          </div>
        )}
      </div>

      {/* Auth gate bottom sheet */}
      <BottomSheet
        open={authGateOpen}
        onClose={() => setAuthGateOpen(false)}
        title="Sign in to book"
      >
        <div className="flex flex-col gap-4 pt-2">
          <p className="text-sm text-[#404040] text-center">
            Create an account or sign in to book appointments, save your
            favorite salons, and manage your bookings.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => setAuthGateOpen(false)}
          >
            Continue with Google
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => setAuthGateOpen(false)}
          >
            Continue with Email
          </Button>
          <button
            onClick={() => setAuthGateOpen(false)}
            className="text-sm text-[#a3a3a3] text-center py-2"
          >
            Maybe later
          </button>
        </div>
      </BottomSheet>
    </div>
  )
}
