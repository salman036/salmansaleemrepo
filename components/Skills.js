'use client'

import { useEffect, useRef } from 'react'
import { skills } from '../app/data'

const categoryIcons = {
  'Core Frontend': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'State & Data': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'UI Frameworks': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  'Tools & Infra': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  'Testing & QA': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  'Backend Touch': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05 }
    )
    const elements = ref.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28 relative">
      {/* Decorative line */}
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-on-scroll">
          <span className="section-tag">// Skills</span>
        </div>
        <h2 className="heading-lg mb-16 animate-on-scroll">
          Practical technical
          <br />
          <span className="text-gradient">range.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              className="card-base hover:border-accent/30 group animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  {categoryIcons[category]}
                </div>
                <h3 className="font-display font-bold text-paper group-hover:text-accent transition-colors duration-200">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee-style skills strip */}
        <div className="mt-16 overflow-hidden animate-on-scroll">
          <div className="gradient-line mb-6" />
          <div className="flex gap-8 overflow-hidden">
            <div
              className="flex gap-8 whitespace-nowrap"
              style={{
                animation: 'marquee 20s linear infinite',
              }}
            >
              {Object.values(skills)
                .flat()
                .concat(Object.values(skills).flat())
                .map((skill, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs uppercase tracking-widest text-muted/40"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
          <div className="gradient-line mt-6" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
