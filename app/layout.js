import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { personalInfo } from './data'
import './globals.css'
import ThemeScript from '../components/ThemeScript'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const siteDescription = personalInfo.summary

export const metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: siteDescription,
  keywords: [
    personalInfo.name,
    personalInfo.title,
    personalInfo.subtitle,
    'Software Engineer',
    'React',
    'Next.js',
  ],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: siteDescription,
    type: 'website',
    locale: 'en_US',
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: siteDescription,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-body antialiased bg-theme-bg text-theme-text">{children}</body>
    </html>
  )
}
