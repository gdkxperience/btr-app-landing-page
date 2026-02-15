export interface SeedPost {
  id: string
  staffId: string
  salonId: string
  images: string[]
  caption: string
  likeCount: number
  serviceId?: string
  createdAt: string
}

/**
 * Generates ISO timestamps relative to the current time so that posts
 * always appear fresh (e.g. "1h ago", "3h ago") regardless of when
 * the app is loaded.
 */
function generateFreshTimestamps(): string[] {
  const now = Date.now()
  const offsets = [
    1 * 60 * 60 * 1000,        // 1 hour ago
    2 * 60 * 60 * 1000,        // 2 hours ago
    3 * 60 * 60 * 1000,        // 3 hours ago
    4 * 60 * 60 * 1000,        // 4 hours ago
    5 * 60 * 60 * 1000,        // 5 hours ago
    7 * 60 * 60 * 1000,        // 7 hours ago
    9 * 60 * 60 * 1000,        // 9 hours ago
    12 * 60 * 60 * 1000,       // 12 hours ago
    18 * 60 * 60 * 1000,       // 18 hours ago
    24 * 60 * 60 * 1000,       // 1 day ago
    36 * 60 * 60 * 1000,       // 1.5 days ago
    48 * 60 * 60 * 1000,       // 2 days ago
    72 * 60 * 60 * 1000,       // 3 days ago
    96 * 60 * 60 * 1000,       // 4 days ago
    120 * 60 * 60 * 1000,      // 5 days ago
  ]
  return offsets.map((offset) => new Date(now - offset).toISOString())
}

const timestamps = generateFreshTimestamps()

function ts(index: number): string {
  return timestamps[index] ?? new Date().toISOString()
}

export const posts: SeedPost[] = [
  // ── Blade Studio ──
  {
    id: 'post-001',
    staffId: 'staff-001',
    salonId: 'salon-001',
    images: ['/images/posts/clean-fade-lineup.jpg'],
    caption: 'That mid-skin fade hitting different today. Line-up so sharp it could cut glass. Book your slot before the weekend rush.',
    likeCount: 124,
    serviceId: 'svc-001',
    createdAt: ts(0),
  },
  {
    id: 'post-002',
    staffId: 'staff-002',
    salonId: 'salon-001',
    images: ['/images/posts/beard-transformation.jpg', '/images/posts/beard-transformation-2.jpg'],
    caption: 'Before & after on this beard sculpt. Went from wilderness to Wall Street in 20 minutes.',
    likeCount: 89,
    serviceId: 'svc-002',
    createdAt: ts(4),
  },

  // ── The Style Bar ──
  {
    id: 'post-003',
    staffId: 'staff-003',
    salonId: 'salon-002',
    images: ['/images/posts/blowout-bouncy.jpg'],
    caption: 'Volume for DAYS. This blowout is giving everything it was supposed to give.',
    likeCount: 213,
    serviceId: 'svc-004',
    createdAt: ts(1),
  },
  {
    id: 'post-004',
    staffId: 'staff-004',
    salonId: 'salon-002',
    images: ['/images/posts/textured-bob.jpg'],
    caption: 'Textured bob season is here and I am here for it. Swipe to see the movement.',
    likeCount: 178,
    serviceId: 'svc-005',
    createdAt: ts(6),
  },
  {
    id: 'post-005',
    staffId: 'staff-003',
    salonId: 'salon-002',
    images: ['/images/posts/bridal-updo.jpg'],
    caption: 'Bridal trial run for my Saturday bride. Cannot wait to see this with the veil.',
    likeCount: 302,
    createdAt: ts(10),
  },

  // ── Bella Hair Co. ──
  {
    id: 'post-006',
    staffId: 'staff-005',
    salonId: 'salon-003',
    images: ['/images/posts/balayage-blonde.jpg', '/images/posts/balayage-blonde-2.jpg'],
    caption: 'From box dye disaster to this gorgeous lived-in blonde. 3 sessions of color correction and totally worth the wait.',
    likeCount: 445,
    serviceId: 'svc-007',
    createdAt: ts(2),
  },
  {
    id: 'post-007',
    staffId: 'staff-006',
    salonId: 'salon-003',
    images: ['/images/posts/keratin-silk.jpg'],
    caption: 'Keratin magic on naturally curly hair. Smooth, shiny, and zero frizz for the next 3 months.',
    likeCount: 167,
    serviceId: 'svc-008',
    createdAt: ts(7),
  },

  // ── Crown & Craft ──
  {
    id: 'post-008',
    staffId: 'staff-007',
    salonId: 'salon-004',
    images: ['/images/posts/straight-razor-shave.jpg'],
    caption: 'Nothing beats a proper straight razor shave. Hot lather, cold steel, smooth finish. Old school never goes out of style.',
    likeCount: 198,
    serviceId: 'svc-010',
    createdAt: ts(3),
  },
  {
    id: 'post-009',
    staffId: 'staff-008',
    salonId: 'salon-004',
    images: ['/images/posts/gentleman-cut.jpg'],
    caption: 'Clean scissor work on a classic side part. Sometimes simple is the move.',
    likeCount: 95,
    serviceId: 'svc-011',
    createdAt: ts(8),
  },
  {
    id: 'post-010',
    staffId: 'staff-007',
    salonId: 'salon-004',
    images: ['/images/posts/groomsmen-lineup.jpg', '/images/posts/groomsmen-lineup-2.jpg'],
    caption: 'Had the whole groomsmen squad in today. Everyone left looking sharp for the big day tomorrow.',
    likeCount: 267,
    serviceId: 'svc-012',
    createdAt: ts(12),
  },

  // ── Glow Beauty Studio ──
  {
    id: 'post-011',
    staffId: 'staff-009',
    salonId: 'salon-005',
    images: ['/images/posts/glam-makeover.jpg'],
    caption: 'Glam for her 30th birthday dinner. Soft smokey eye with a bold lip because why not do both?',
    likeCount: 334,
    serviceId: 'svc-013',
    createdAt: ts(5),
  },
  {
    id: 'post-012',
    staffId: 'staff-010',
    salonId: 'salon-005',
    images: ['/images/posts/volume-lashes.jpg'],
    caption: '5D volume set. She came in wanting drama and drama is what she got. These babies will last 3-4 weeks with proper care.',
    likeCount: 221,
    serviceId: 'svc-014',
    createdAt: ts(9),
  },

  // ── Fresh Cuts NYC ──
  {
    id: 'post-013',
    staffId: 'staff-011',
    salonId: 'salon-006',
    images: ['/images/posts/skin-fade-design.jpg'],
    caption: 'Custom lightning bolt design on a zero fade. My man came in with a reference pic and we made it even better.',
    likeCount: 389,
    serviceId: 'svc-016',
    createdAt: ts(11),
  },
  {
    id: 'post-014',
    staffId: 'staff-012',
    salonId: 'salon-006',
    images: ['/images/posts/kids-first-cut.jpg'],
    caption: 'First haircut for this little guy! No tears, all smiles. Mom was more nervous than he was.',
    likeCount: 156,
    serviceId: 'svc-017',
    createdAt: ts(13),
  },
  {
    id: 'post-015',
    staffId: 'staff-011',
    salonId: 'salon-006',
    images: ['/images/posts/dread-retwist.jpg', '/images/posts/dread-retwist-2.jpg'],
    caption: 'Full retwist and style on these freeform dreads. 2 hours of work but the result speaks for itself.',
    likeCount: 274,
    serviceId: 'svc-018',
    createdAt: ts(14),
  },
]
