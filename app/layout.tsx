import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCTA from '../components/FloatingCTA'
import GoogleAnalytics from '../components/GoogleAnalytics'
import PageTransition from '../components/PageTransition'
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mexelenergysustain.com';
const defaultSocialImage = {
  url: '/og/site.png',
  width: 1200,
  height: 630,
  alt: 'Mexel Energy Sustain social preview card',
};

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
    images: [defaultSocialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexel Energy Sustain | TES Cooling-Water Efficiency',
    description:
      'TES combines Mexel®432 chemistry, IoT dosing and cooling-water data to improve condenser performance.',
    images: [defaultSocialImage.url],
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
      <head>
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mexel Energy Sustain",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: "Thermal Efficiency Solutions for Power Generation & Heavy Industry using Mexel®432 technology.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "info@mexelenergysustain.com",
                telephone: "+27-79-464-8298",
                areaServed: ["ZA"],
                url: `${siteUrl}/contact`,
              },
              sameAs: [
                "https://www.linkedin.com/company/mexel-energy-sustain/",
              ],
            }),
          }}
        />
      </head>
      {/* suppressHydrationWarning: Browser extensions/agent tools may inject classes (e.g., antigravity-scroll-lock) */}
      <body className={`${inter.variable} ${outfit.variable} bg-white text-slate-900 antialiased font-sans`} suppressHydrationWarning>
        <GoogleAnalytics />
        {/* Skip to main content link for keyboard accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  )
}
