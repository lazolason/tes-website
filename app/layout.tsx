import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mexelenergysustain.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mexel Energy Sustain | TES Cooling-Water Efficiency',
    template: '%s | Mexel Energy Sustain',
  },
  description:
    'TES (Thermal Efficiency Solution) combines Mexel®432 chemistry, IoT dosing and cooling-water data to improve condenser performance on wet-cooled power stations and industrial plants.',
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
