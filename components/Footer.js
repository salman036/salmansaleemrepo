import { personalInfo } from '../app/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-black text-lg">
          <span className="text-paper">SS</span>
          <span className="text-accent">.</span>
        </div>
        <p className="font-mono text-xs text-muted text-center">
          © {year} Salman Saleem · Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-1 font-mono text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Available for hire</span>
        </div>
      </div>
    </footer>
  )
}
