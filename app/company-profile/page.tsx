'use client'

import { useEffect } from 'react'
import { trackCompanyProfileOpen } from '@/lib/analytics'

const PROFILE_URL = '/company-profile-static/index.html'

export default function CompanyProfilePage() {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      try {
        window.location.replace(PROFILE_URL)
      } catch (e) {
        console.error('Company profile redirect failed:', e)
      }
    }, 150)

    try {
      trackCompanyProfileOpen('company_profile_route')
    } catch (e) {
      console.error('Company profile tracking failed:', e)
    }

    return () => window.clearTimeout(redirectTimer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-2xl px-6">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-8"></div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Loading Company Profile...</h1>
        <p className="text-slate-700 mb-8">
          Redirecting you to the interactive company profile.
        </p>
        <p className="text-sm text-slate-600">
          If you are not redirected automatically, <a href={PROFILE_URL} className="text-emerald-600 hover:underline font-semibold">click here</a>.
        </p>
        <noscript>
          <p className="mt-4 text-sm text-slate-600">
            JavaScript is disabled. Open the{' '}
            <a href={PROFILE_URL} className="text-emerald-600 hover:underline font-semibold">
              company profile directly
            </a>.
          </p>
        </noscript>
      </div>
    </div>
  )
}
