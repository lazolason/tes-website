'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ProfilePage() {
  useEffect(() => {
    // Delayed redirect with error handling to prevent loops
    const timer = setTimeout(() => {
      try {
        window.location.href = '/profile/index.html'
      } catch (e) {
        console.error('Profile redirect failed:', e)
      }
    }, 100)

    return () => clearTimeout(timer)
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
          If you are not redirected automatically, <Link href="/profile/index.html" className="text-emerald-600 hover:underline font-semibold">click here</Link>.
        </p>
      </div>
    </div>
  )
}
