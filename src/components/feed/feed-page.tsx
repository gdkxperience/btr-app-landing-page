import { posts } from '@/data/posts'
import { staff } from '@/data/staff'
import { salons } from '@/data/salons'
import { PostCard } from './post-card'

interface FeedPageProps {
  onBookTap?: (serviceId?: string) => void
}

export function FeedPage({ onBookTap }: FeedPageProps) {
  return (
    <div className="pt-[calc(56px+44px)] px-0 pb-16">
      {posts.map((post, index) => {
        const postStaff = staff.find((s) => s.id === post.staffId)
        const postSalon = salons.find((s) => s.id === post.salonId)
        if (!postStaff || !postSalon) return null
        return (
          <PostCard
            key={post.id}
            post={post}
            staff={postStaff}
            salon={postSalon}
            onBookTap={onBookTap}
            animationDelay={index * 50}
          />
        )
      })}
      <p className="text-center text-sm text-[#a3a3a3] py-8">
        You&apos;ve seen everything
      </p>
    </div>
  )
}
