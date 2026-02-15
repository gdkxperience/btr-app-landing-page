export interface SeedSalon {
  id: string
  name: string
  address: string
  phone: string
  coverImage: string
  location: { lat: number; lng: number }
  isActive: boolean
  operatingHours: {
    day: string
    openTime: string
    closeTime: string
    isClosed: boolean
  }[]
  topServiceId: string
  staffIds: string[]
  serviceIds: string[]
}

const weekdayHours = (
  openTime: string,
  closeTime: string,
  closedDays: string[] = ['Sunday']
) =>
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
    (day) => ({
      day,
      openTime: closedDays.includes(day) ? '' : openTime,
      closeTime: closedDays.includes(day) ? '' : closeTime,
      isClosed: closedDays.includes(day),
    })
  )

export const salons: SeedSalon[] = [
  {
    id: 'salon-001',
    name: 'Blade Studio',
    address: '123 Main St, New York, NY 10002',
    phone: '(212) 555-0101',
    coverImage: '/images/salons/blade-studio.jpg',
    location: { lat: 40.7194, lng: -73.9903 },
    isActive: true,
    operatingHours: weekdayHours('09:00', '19:00', ['Sunday']),
    topServiceId: 'svc-001',
    staffIds: ['staff-001', 'staff-002'],
    serviceIds: ['svc-001', 'svc-002', 'svc-003'],
  },
  {
    id: 'salon-002',
    name: 'The Style Bar',
    address: '456 Oak Ave, New York, NY 10018',
    phone: '(212) 555-0202',
    coverImage: '/images/salons/the-style-bar.jpg',
    location: { lat: 40.7549, lng: -73.9840 },
    isActive: true,
    operatingHours: weekdayHours('10:00', '20:00', ['Monday']),
    topServiceId: 'svc-004',
    staffIds: ['staff-003', 'staff-004'],
    serviceIds: ['svc-004', 'svc-005', 'svc-006'],
  },
  {
    id: 'salon-003',
    name: 'Bella Hair Co.',
    address: '789 Elm St, New York, NY 10025',
    phone: '(212) 555-0303',
    coverImage: '/images/salons/bella-hair-co.jpg',
    location: { lat: 40.7994, lng: -73.9681 },
    isActive: true,
    operatingHours: weekdayHours('09:00', '18:00', ['Sunday', 'Monday']),
    topServiceId: 'svc-007',
    staffIds: ['staff-005', 'staff-006'],
    serviceIds: ['svc-007', 'svc-008', 'svc-009'],
  },
  {
    id: 'salon-004',
    name: 'Crown & Craft',
    address: '321 Pine St, New York, NY 10014',
    phone: '(212) 555-0404',
    coverImage: '/images/salons/crown-and-craft.jpg',
    location: { lat: 40.7336, lng: -74.0027 },
    isActive: true,
    operatingHours: weekdayHours('08:00', '20:00', ['Sunday']),
    topServiceId: 'svc-010',
    staffIds: ['staff-007', 'staff-008'],
    serviceIds: ['svc-010', 'svc-011', 'svc-012'],
  },
  {
    id: 'salon-005',
    name: 'Glow Beauty Studio',
    address: '567 5th Ave, New York, NY 10011',
    phone: '(212) 555-0505',
    coverImage: '/images/salons/glow-beauty-studio.jpg',
    location: { lat: 40.7425, lng: -74.0006 },
    isActive: true,
    operatingHours: weekdayHours('10:00', '19:00', ['Tuesday']),
    topServiceId: 'svc-013',
    staffIds: ['staff-009', 'staff-010'],
    serviceIds: ['svc-013', 'svc-014', 'svc-015'],
  },
  {
    id: 'salon-006',
    name: 'Fresh Cuts NYC',
    address: '890 Broadway, New York, NY 10003',
    phone: '(212) 555-0606',
    coverImage: '/images/salons/fresh-cuts-nyc.jpg',
    location: { lat: 40.7234, lng: -73.9987 },
    isActive: true,
    operatingHours: weekdayHours('08:00', '21:00', ['Sunday']),
    topServiceId: 'svc-016',
    staffIds: ['staff-011', 'staff-012'],
    serviceIds: ['svc-016', 'svc-017', 'svc-018'],
  },
]
