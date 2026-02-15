export interface SeedStaff {
  id: string
  salonId: string
  fullName: string
  role: string
  avatar: string
  bio?: string
}

export const staff: SeedStaff[] = [
  // ── Blade Studio (salon-001) ──
  {
    id: 'staff-001',
    salonId: 'salon-001',
    fullName: 'Marcus Johnson',
    role: 'Senior Barber',
    avatar: '/images/staff/marcus-johnson.jpg',
    bio: '12 years behind the chair. Specializing in fades, tapers, and precision line-ups.',
  },
  {
    id: 'staff-002',
    salonId: 'salon-001',
    fullName: 'Darnell Washington',
    role: 'Barber',
    avatar: '/images/staff/darnell-washington.jpg',
    bio: 'Bringing clean cuts and good vibes every single day.',
  },

  // ── The Style Bar (salon-002) ──
  {
    id: 'staff-003',
    salonId: 'salon-002',
    fullName: 'Sophia Martinez',
    role: 'Lead Stylist',
    avatar: '/images/staff/sophia-martinez.jpg',
    bio: 'Trained at Vidal Sassoon Academy. Obsessed with texture and movement.',
  },
  {
    id: 'staff-004',
    salonId: 'salon-002',
    fullName: 'Aiden Park',
    role: 'Stylist',
    avatar: '/images/staff/aiden-park.jpg',
    bio: 'Blowout specialist. Your hair is my canvas.',
  },

  // ── Bella Hair Co. (salon-003) ──
  {
    id: 'staff-005',
    salonId: 'salon-003',
    fullName: 'Isabella Rossi',
    role: 'Master Colorist',
    avatar: '/images/staff/isabella-rossi.jpg',
    bio: 'Color correction expert with 15+ years of experience in balayage and lived-in color.',
  },
  {
    id: 'staff-006',
    salonId: 'salon-003',
    fullName: 'Priya Sharma',
    role: 'Senior Stylist',
    avatar: '/images/staff/priya-sharma.jpg',
    bio: 'Specializing in keratin treatments and natural curly hair transformations.',
  },

  // ── Crown & Craft (salon-004) ──
  {
    id: 'staff-007',
    salonId: 'salon-004',
    fullName: 'James O\'Brien',
    role: 'Master Barber',
    avatar: '/images/staff/james-obrien.jpg',
    bio: 'Old-school technique meets modern style. Hot towel shaves are my art form.',
  },
  {
    id: 'staff-008',
    salonId: 'salon-004',
    fullName: 'Tomás Rivera',
    role: 'Barber',
    avatar: '/images/staff/tomas-rivera.jpg',
    bio: 'Detail-oriented barber with a passion for classic gentleman\'s cuts.',
  },

  // ── Glow Beauty Studio (salon-005) ──
  {
    id: 'staff-009',
    salonId: 'salon-005',
    fullName: 'Amara Okafor',
    role: 'Makeup Artist',
    avatar: '/images/staff/amara-okafor.jpg',
    bio: 'Editorial and bridal MUA. Making every face a masterpiece.',
  },
  {
    id: 'staff-010',
    salonId: 'salon-005',
    fullName: 'Lena Kim',
    role: 'Lash Technician',
    avatar: '/images/staff/lena-kim.jpg',
    bio: 'Certified lash artist specializing in volume and mega-volume sets.',
  },

  // ── Fresh Cuts NYC (salon-006) ──
  {
    id: 'staff-011',
    salonId: 'salon-006',
    fullName: 'Andre Williams',
    role: 'Senior Barber',
    avatar: '/images/staff/andre-williams.jpg',
    bio: 'NYC born and raised. Fades, designs, and dreads are my specialties.',
  },
  {
    id: 'staff-012',
    salonId: 'salon-006',
    fullName: 'Miguel Santos',
    role: 'Barber',
    avatar: '/images/staff/miguel-santos.jpg',
    bio: 'Kids and adults alike. Patient cuts, clean results, every time.',
  },
]
