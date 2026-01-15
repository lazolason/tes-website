import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

// Optimize font loading with next/font for better performance
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
})

// Display font for headlines - technical and distinctive
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700'],
  preload: true,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mexelenergysustain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mexel Energy Sustain | TES Cooling-Water Efficiency',
    template: '%s | Mexel Energy Sustain',
  },
  description:
    'Thermal Efficiency Solutions for Power Generation & Heavy Industry. TES combines Mexel®432 technology, IoT dosing, and verification to improve condenser performance.',
  keywords: [
    'TES',
    'Thermal Efficiency Solution',
    'Mexel',
    'Mexel432',
    'cooling water treatment',
    'condenser efficiency',
    'wet-cooled power station',
    'Eskom',
    'biofouling',
    'corrosion inhibitor',
    'cooling tower',
    'heat rate improvement',
  ],
  authors: [{ name: 'Mexel Energy Sustain (Pty) Ltd' }],
  creator: 'Mexel Energy Sustain',
  publisher: 'Mexel Energy Sustain',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'Mexel Energy Sustain',
    title: 'Mexel Energy Sustain | TES Cooling-Water Efficiency',
    description:
      'TES combines Mexel®432 chemistry, IoT dosing and cooling-water data to improve condenser performance on wet-cooled units.',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 130,
        alt: 'Mexel Energy Sustain logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mexel Energy Sustain | TES Cooling-Water Efficiency',
    description:
      'TES combines Mexel®432 chemistry, IoT dosing and cooling-water data to improve condenser performance.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      {/* suppressHydrationWarning: Browser extensions may inject classes (e.g., antigravity-scroll-lock) */}
      <body className="bg-white text-slate-900 antialiased font-sans">
        {/* Skip to main content link for keyboard accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
