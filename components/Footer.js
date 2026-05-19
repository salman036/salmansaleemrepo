import { personalInfo } from '../app/data'
import { getInitials } from '../lib/scroll'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const initials = getInitials(personalInfo.name)

  return (
    <footer className="footer border-t border-theme-border py-10" aria-label="Footer">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="font-display font-bold text-lg">
            <span className="text-theme-text">{initials}</span>
            <span className="text-theme-accent">.</span>
          </a>

          <nav className="footer__nav flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </nav>

          <p className="font-mono text-xs text-theme-muted text-center">
            © {year} {personalInfo.name} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
