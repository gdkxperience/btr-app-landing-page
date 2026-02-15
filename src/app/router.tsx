import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/app-shell/landing-page'
import { SalonProfile } from '@/components/salon/salon-profile'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/feed" element={<LandingPage initialTab="feed" />} />
      <Route path="/map" element={<LandingPage initialTab="map" />} />
      <Route path="/salon/:id" element={<SalonProfile />} />
    </Routes>
  )
}
