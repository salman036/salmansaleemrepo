'use client'

import { useEffect, useState } from 'react'
import { focusAreas, personalInfo, skills } from '../app/data'
import { getInitials } from '../lib/scroll'

const PARTICLE_POSITIONS = [
  { top: '12%', left: '8%', delay: '0s' },
  { top: '28%', left: '72%', delay: '1.2s' },
  { top: '55%', left: '18%', delay: '2.4s' },
  { top: '70%', left: '85%', delay: '0.8s' },
  { top: '40%', left: '45%', delay: '3s' },
  { top: '82%', left: '55%', delay: '1.8s' },
]

const coreSkills = skills['Core Frontend'] || []

/**
 * @param {string} text
 * @param {number} speed
 */
function useTypewriter(text, speed = 45) {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text)
      setDone(true)
      return
    }

    let i = 0
    const id = setInterval(() => {
      i += 1
      setDisplay(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)

    return () => clearInterval(id)
  }, [text, speed])

  return { display, done }
}

export default function Hero() {
  const { display, done } = useTypewriter(personalInfo.title)
  const initials = getInitials(personalInfo.name)
  const resumeHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Resume Request')}`

  return (
    <section
      id="hero"
      className="hero relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="hero__bg" aria-hidden>
        <div className="hero__gradient" />
        <div className="hero__particles">
          {PARTICLE_POSITIONS.map((p, i) => (
            <span key={i} style={{ top: p.top, left: p.left, animationDelay: p.delay }} />
          ))}
        </div>
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="hero__content">
            <p className="section-tag flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" aria-hidden />
              {personalInfo.location}
            </p>

            <p className="font-mono text-sm text-theme-muted mb-2">{personalInfo.subtitle}</p>

            <h1 className="heading-xl mb-4">
              <span className="block text-theme-text">{personalInfo.name}</span>
              <span className={`block text-gradient ${done ? '' : 'typewriter-cursor'}`}>{display}</span>
            </h1>

            <p className="text-theme-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {focusAreas.map((area) => (
                <span key={area} className="skill-badge">
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn--primary">
                View Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a href={resumeHref} className="btn btn--outline">
                Download Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </div>

          <aside className="hero__aside" aria-label="Profile preview">
            <div className="code-block">
              <div className="code-block__header">
                <span className="code-block__dot bg-red-400/80" />
                <span className="code-block__dot bg-amber-400/80" />
                <span className="code-block__dot bg-emerald-400/80" />
                <span className="ml-2 font-mono text-[10px] text-theme-muted uppercase tracking-widest">
                  profile.ts
                </span>
              </div>
              <pre className="code-block__body overflow-x-auto">
                <code>
                  <span className="token-key">const</span> engineer = {'{'}
                  {'\n'}  name: <span className="token-str">&apos;{personalInfo.name}&apos;</span>,
                  {'\n'}  role: <span className="token-str">&apos;{personalInfo.title}&apos;</span>,
                  {'\n'}  stack: [
                  {coreSkills.map((s, i) => (
                    <span key={s}>
                      {'\n'}    <span className="token-str">&apos;{s}&apos;</span>
                      {i < coreSkills.length - 1 ? ',' : ''}
                    </span>
                  ))}
                  {'\n'}  ],
                  {'\n'}  location: <span className="token-str">&apos;{personalInfo.location}&apos;</span>
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>

            <div className="mt-6 flex justify-center">
              <div
                className="w-28 h-28 rounded-2xl glass-card flex items-center justify-center font-display text-3xl font-bold text-gradient"
                aria-hidden
              >
                {initials}
              </div>
            </div>
          </aside>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden>
          <span className="font-mono text-[10px] uppercase tracking-widest text-theme-muted">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-theme-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}
