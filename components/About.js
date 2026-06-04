'use client'

import { useEffect, useRef } from 'react'
import { education, experience, highlightedSkills, personalInfo, stats } from '../app/data'
import { observeReveal } from '../lib/scroll'

export default function About() {
  const ref = useRef(null)
  const currentRole = experience[0]
  const statCards = [
    ...stats,
    { value: String(highlightedSkills.length), label: 'Core Technologies' },
  ]

  useEffect(() => {
    return observeReveal(ref.current)
  }, [])

  return (
    <section id="about" ref={ref} className="about py-system-xl relative" aria-label="About">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="section-tag reveal">About</span>
            <h2 className="heading-lg mb-6 reveal">
              {personalInfo.name.split(' ')[0]} — <span className="text-gradient">{personalInfo.title}</span>
            </h2>
            <p className="text-theme-muted leading-relaxed mb-6 reveal">{personalInfo.summary}</p>
            <p className="text-theme-muted leading-relaxed reveal">
              Based in <span className="text-theme-text font-medium">{personalInfo.location}</span>
              {currentRole ? (
                <>
                  {' '}
                  · Currently <span className="text-theme-text font-medium">{currentRole.role}</span> at{' '}
                  <span className="text-theme-text font-medium">{currentRole.company}</span>
                </>
              ) : null}
            </p>

            <motion-bar className="mt-8 reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-theme-muted mb-3">
                LinkedIn stack
              </p>
              <div className="flex flex-wrap gap-2">
                {highlightedSkills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion-bar>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 reveal-stagger">
              {statCards.map((stat) => (
                <article key={stat.label} className="about__stat glass-card p-5 reveal text-center">
                  <p className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-theme-muted">{stat.label}</p>
                </article>
              ))}
            </div>

            <article className="about__card glass-card p-6 reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-theme-accent mb-2">Education</p>
              <h3 className="heading-md text-theme-text mb-1">{education.degree}</h3>
              <p className="text-theme-muted text-sm">{education.institution}</p>
              <p className="text-theme-muted text-xs mt-1">{education.location}</p>
            </article>

            {currentRole && (
              <article className="about__card glass-card p-6 reveal">
                <p className="font-mono text-xs uppercase tracking-widest text-theme-accent mb-2">Current role</p>
                <h3 className="heading-md text-theme-text mb-1">{currentRole.role}</h3>
                <p className="text-theme-muted text-sm">
                  {currentRole.company} · {currentRole.period}
                </p>
                {currentRole.description ? (
                  <p className="text-theme-muted text-sm mt-2">{currentRole.description}</p>
                ) : null}
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
