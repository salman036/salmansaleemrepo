import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  title: 'Salman Saleem — Software Engineer',
  description:
    'Software Engineer with 5+ years in front-end & mobile development. React.js, React Native, Next.js specialist.',
  keywords: ['Salman Saleem', 'Software Engineer', 'React.js', 'React Native', 'Next.js', 'Frontend Developer'],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Salman Saleem — Software Engineer',
    description: 'Front-End & Mobile Development specialist from Lahore, Pakistan.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink text-paper font-body antialiased">{children}</body>
    </html>
  )
}
