import { AppRouter } from '@/app/router'

export function App() {
  return (
    <div className="app-shell">
      <AppRouter />
      {/* Hidden SEO content */}
      <div className="sr-only">
        <h1>BTR - Book Transform Repeat</h1>
        <p>
          BTR is a beauty and wellness booking platform. Discover salons near
          you, browse real stylist portfolios, and book appointments instantly.
          No calls, no DMs, no waiting. Find the perfect barber, hairstylist,
          colorist, or makeup artist in your area.
        </p>
      </div>
    </div>
  )
}
