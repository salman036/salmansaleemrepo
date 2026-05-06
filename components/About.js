'use client'

import { useEffect, useRef } from 'react'
import { personalInfo, education } from '../app/data'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = ref.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="animate-on-scroll">
              <span className="section-tag">// About Me</span>
            </div>
            <h2 className="heading-lg mb-6 animate-on-scroll">
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6 animate-on-scroll">
              {personalInfo.summary}
            </p>
            <p className="text-muted leading-relaxed animate-on-scroll">
              Based in{' '}
              <span className="text-paper font-medium">{personalInfo.location}</span>, I thrive at
              the intersection of beautiful design and clean code — leading teams, shipping products,
              and pushing the limits of what the front-end can do.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 animate-on-scroll">
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="text-accent">✦</span>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="text-accent">✦</span>
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {/* Education Card */}
            <div className="card-base hover:border-accent/30 animate-on-scroll">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                    Education
                  </p>
                  <h3 className="font-display font-bold text-paper mb-1">{education.degree}</h3>
                  <p className="text-muted text-sm">{education.institution}</p>
                  <p className="text-muted text-xs mt-1">{education.location}</p>
                </div>
              </div>
            </div>

            {/* Experience overview */}
            <div className="card-base hover:border-accent/30 animate-on-scroll">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                    Current Role
                  </p>
                  <h3 className="font-display font-bold text-paper mb-1">Software Engineer</h3>
                  <p className="text-muted text-sm">First Travel Company · 2022–Present</p>
                  <p className="text-muted text-xs mt-1">Leading front-end team & client demos</p>
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div className="card-base hover:border-accent/30 animate-on-scroll">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">
                    Specialization
                  </p>
                  <h3 className="font-display font-bold text-paper mb-1">React.js & React Native</h3>
                  <p className="text-muted text-sm">5+ years · Web & Mobile development</p>
                  <p className="text-muted text-xs mt-1">E-commerce · Fintech · SaaS · Real Estate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
