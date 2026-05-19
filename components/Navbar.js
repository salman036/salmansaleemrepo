'use client'

import { useEffect, useState } from 'react'
import { personalInfo } from '../app/data'
import { getInitials, trackActiveSection } from '../lib/scroll'
import ThemeToggle from './ThemeToggle'

const NAV_SECTIONS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')
  const initials = getInitials(personalInfo.name)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const cleanup = trackActiveSection(
      NAV_SECTIONS.map((s) => s.id),
      setActiveId
    )

    const onScrollTop = () => {
      if (window.scrollY < 120) setActiveId('hero')
    }
    window.addEventListener('scroll', onScrollTop, { passive: true })
    onScrollTop()

    return () => {
      cleanup()
      window.removeEventListener('scroll', onScrollTop)
    }
  }, [])

  return (
    <header className="nav fixed top-0 left-0 right-0 z-50">
      <nav
        className={`nav__bar transition-all duration-300 ${
          scrolled
            ? 'bg-theme-bg/90 backdrop-blur-lg border-b border-theme-border shadow-sm'
            : 'bg-transparent'
        }`}
        aria-label="Primary"
      >
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className={`nav__brand font-display font-bold text-lg tracking-tight ${activeId === 'hero' ? 'text-theme-accent' : ''}`}
          >
            <span className="text-theme-text">{initials}</span>
            <span className="text-theme-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav__link ${activeId === link.id ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a href={`mailto:${personalInfo.email}`} className="btn btn--primary text-xs !py-2 !px-4">
              Hire Me
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 w-6 p-1"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-theme-text transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-theme-text transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-theme-text transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-theme-border bg-theme-elevated px-6 py-6 flex flex-col gap-4">
            {NAV_SECTIONS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`nav__link text-sm ${activeId === link.id ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn--primary text-xs self-start"
              onClick={() => setMenuOpen(false)}
            >
              {personalInfo.email}
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
