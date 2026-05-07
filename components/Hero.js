'use client'

import { useEffect, useRef } from 'react'
import { focusAreas, personalInfo, stats } from '../app/data'

export default function Hero() {
  const glowRef = useRef(null)

  useEffect(() => {
    // Use requestAnimationFrame to batch updates and write to transform (GPU) to avoid layout thrashing
    let rafId = null
    let targetX = 0
    let targetY = 0

    const update = () => {
      if (glowRef.current) {
        // Use translate3d to avoid triggering layout
        glowRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      }
      rafId = null
    }

    const handleMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (rafId === null) rafId = requestAnimationFrame(update)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Cursor glow */}
      <div ref={glowRef} className="glow-dot" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ff4d00 1px, transparent 1px), linear-gradient(90deg, #ff4d00 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in stagger-1" style={{ animationFillMode: 'forwards' }}>
              <div className="w-8 h-px bg-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Available for senior front-end roles
              </span>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>

            <h1 className="heading-xl mb-6 max-w-4xl">
              <span
                className="block text-paper opacity-0 animate-fade-up stagger-2"
                style={{ animationFillMode: 'forwards' }}
              >
                Product-minded
              </span>
              <span
                className="block text-gradient opacity-0 animate-fade-up stagger-3"
                style={{ animationFillMode: 'forwards' }}
              >
                front-end engineer.
              </span>
            </h1>

            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7 opacity-0 animate-fade-up stagger-4"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="font-display text-xl md:text-2xl font-bold text-paper">
                {personalInfo.name}
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-accent" />
              <span className="font-display text-xl md:text-2xl font-bold text-muted">
                {personalInfo.subtitle}
              </span>
            </div>

            <p
              className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-8 opacity-0 animate-fade-up stagger-5"
              style={{ animationFillMode: 'forwards' }}
            >
              I design and build reliable interfaces for complex products, from healthcare workflows
              and booking platforms to mobile commerce and multi-tenant SaaS.
            </p>

            <div
              className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.58s', animationFillMode: 'forwards' }}
            >
              {focusAreas.map((area) => (
                <span key={area} className="skill-pill bg-surface/70">
                  {area}
                </span>
              ))}
            </div>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.66s', animationFillMode: 'forwards' }}
            >
              <a href="#projects" className="btn-primary">
                View Selected Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Contact
              </a>
            </div>
          </div>

          <aside
            className="card-base bg-surface-soft/80 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.72s', animationFillMode: 'forwards' }}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
              Current Focus
            </p>
            <h2 className="font-display font-black text-2xl text-paper mb-3">
              Front-end architecture for production products.
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-6">
              React.js, TypeScript, Redux Toolkit, localization, RBAC, responsive systems, and
              component quality across web and mobile teams.
            </p>
            <div className="space-y-3 border-t border-border pt-5">
              <a href={`mailto:${personalInfo.email}`} className="block text-sm text-paper hover:text-accent transition-colors">
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
              >
                LinkedIn profile
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </aside>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10 mt-16 border-t border-border">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.7 + i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="font-display font-black text-3xl md:text-4xl text-gradient mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
