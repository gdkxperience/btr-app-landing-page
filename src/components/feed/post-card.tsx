import { useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getRelativeTime } from '@/lib/time'
import type { SeedPost } from '@/data/posts'
import type { SeedStaff } from '@/data/staff'
import type { SeedSalon } from '@/data/salons'

interface PostCardProps {
  post: SeedPost
  staff: SeedStaff
  salon: SeedSalon
  onBookTap?: (serviceId?: string) => void
  animationDelay?: number
}

const PLACEHOLDER_COLORS = [
  'bg-[#fef3ec]',
  'bg-[#eef2ff]',
  'bg-[#ecfdf5]',
  'bg-[#fdf2f8]',
  'bg-[#f0f9ff]',
]

export function PostCard({
  post,
  staff,
  salon,
  onBookTap,
  animationDelay = 0,
}: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likeCount)
  const [currentImage, setCurrentImage] = useState(0)

  const initials = staff.fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const handleLike = () => {
    setLiked((prev) => !prev)
    setLikeCount((c) => (liked ? c - 1 : c + 1))
  }

  const colorIndex =
    parseInt(post.id.replace(/\D/g, '') || '0', 10) %
    PLACEHOLDER_COLORS.length
  const placeholderColor = PLACEHOLDER_COLORS[colorIndex]

  return (
    <article
      className="border-b border-[#e5e5e5]"
      style={{
        animation: 'slide-in-up 350ms ease both',
        animationDelay: `${animationDelay}ms`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-sm font-semibold text-[#404040] shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#0a0a0a] truncate">
            {staff.fullName}
          </p>
          <p className="text-xs text-[#a3a3a3] truncate">
            {salon.name} &middot; {getRelativeTime(post.createdAt)}
          </p>
        </div>
      </div>

      {/* Image area */}
      <div className="relative">
        <div
          className={cn(
            'aspect-[4/3] flex items-center justify-center',
            placeholderColor
          )}
        >
          <span className="text-sm text-[#a3a3a3]">
            {post.images[currentImage]
              ?.split('/')
              .pop()
              ?.replace('.jpg', '') || 'Photo'}
          </span>
        </div>

        {/* Dot indicators for multiple images */}
        {post.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {post.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={cn(
                  'w-1.5 h-1.5 rounded-full transition-colors',
                  i === currentImage ? 'bg-[#0a0a0a]' : 'bg-[#0a0a0a]/30'
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Action row */}
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            <Heart
              size={20}
              className={cn(
                'transition-all',
                liked
                  ? 'fill-[#ef4444] text-[#ef4444]'
                  : 'text-[#404040]'
              )}
              style={
                liked
                  ? {
                      animation:
                        'app-reveal 500ms cubic-bezier(.34,1.56,.64,1)',
                    }
                  : undefined
              }
            />
            <span className="text-sm text-[#0a0a0a]">{likeCount}</span>
          </button>
          <span className="text-xs text-[#a3a3a3]">
            Styled by {staff.fullName}
          </span>
        </div>

        {/* Caption */}
        <p className="text-sm text-[#404040] leading-relaxed line-clamp-2 mb-2">
          {post.caption}
        </p>

        {/* Book CTA */}
        {post.serviceId && (
          <button
            onClick={() => onBookTap?.(post.serviceId)}
            className="text-sm font-semibold text-[#ff5400] mb-3 active:scale-[0.97] transition-transform"
          >
            Book this look &rarr;
          </button>
        )}
      </div>
    </article>
  )
}
