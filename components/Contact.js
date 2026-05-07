'use client'

import { useEffect, useRef } from 'react'
import { personalInfo } from '../app/data'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = ref.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[20vw] text-border/20 whitespace-nowrap leading-none">
          CONTACT
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-on-scroll">
            <span className="section-tag">// Let's Talk</span>
          </div>
          <h2 className="heading-lg mb-6 animate-on-scroll">
            Need a front-end engineer?
            <br />
            <span className="text-gradient">Let's talk.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-12 animate-on-scroll">
            I'm open to senior front-end, React Native, and product engineering roles where clear
            UI, reliable architecture, and thoughtful execution matter.
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12 animate-on-scroll">
            <a
              href={`mailto:${personalInfo.email}`}
              className="card-base hover:border-accent/40 flex flex-col items-center gap-3 text-center group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">Email</p>
                <p className="font-display font-bold text-sm text-paper group-hover:text-accent transition-colors break-all">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base hover:border-accent/40 flex flex-col items-center gap-3 text-center group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">LinkedIn</p>
                <p className="font-display font-bold text-sm text-paper group-hover:text-accent transition-colors">
                  salman-saleem07860
                </p>
              </div>
            </a>

            <div className="card-base flex flex-col items-center gap-3 text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">Location</p>
                <p className="font-display font-bold text-sm text-paper">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="animate-on-scroll">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary text-base py-4 px-10 animate-glow"
            >
              Send Me a Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
