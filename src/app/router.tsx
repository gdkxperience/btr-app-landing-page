import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from '@/components/app-shell/landing-page'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
