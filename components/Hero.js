'use client'

import { useEffect, useRef } from 'react'
import { personalInfo, stats } from '../app/data'

export default function Hero() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
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

      {/* Decorative circle */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full border border-border opacity-20 translate-x-1/2" />
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full border border-accent/20 opacity-30 translate-x-1/3" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Tag line */}
        <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in stagger-1" style={{ animationFillMode: 'forwards' }}>
          <div className="w-8 h-px bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Available for Work
          </span>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="heading-xl mb-6">
          <span
            className="block text-paper opacity-0 animate-fade-up stagger-2"
            style={{ animationFillMode: 'forwards' }}
          >
            {personalInfo.name.split(' ')[0]}
          </span>
          <span
            className="block text-gradient opacity-0 animate-fade-up stagger-3"
            style={{ animationFillMode: 'forwards' }}
          >
            {personalInfo.name.split(' ')[1]}
          </span>
        </h1>

        {/* Role */}
        <div
          className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up stagger-4"
          style={{ animationFillMode: 'forwards' }}
        >
          <span className="font-display text-xl md:text-2xl font-bold text-muted">
            {personalInfo.title}
          </span>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span className="font-display text-xl md:text-2xl font-bold text-muted">
            {personalInfo.subtitle}
          </span>
        </div>

        {/* Summary */}
        <p
          className="text-muted max-w-2xl text-base md:text-lg leading-relaxed mb-10 opacity-0 animate-fade-up stagger-5"
          style={{ animationFillMode: 'forwards' }}
        >
          Building scalable, high-performance web and mobile experiences across{' '}
          <span className="text-paper font-medium">e-commerce</span>,{' '}
          <span className="text-paper font-medium">fintech</span>,{' '}
          <span className="text-paper font-medium">real estate</span>, and{' '}
          <span className="text-paper font-medium">SaaS</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-20 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
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
