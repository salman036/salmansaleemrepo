'use client'

import { useEffect, useRef } from 'react'
import { skills } from '../app/data'
import { observeReveal } from '../lib/scroll'
import { skillProficiency } from '../lib/skills'

const CATEGORY_ICONS = {
  'Core Frontend': '⚛',
  'State & Data': '◈',
  'UI Frameworks': '▣',
  'Tools & Infra': '⚙',
  'Testing & QA': '✓',
  'Backend Touch': '◇',
}

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    return observeReveal(ref.current)
  }, [])

  return (
    <section id="skills" ref={ref} className="skills py-system-xl" aria-label="Skills">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-tag reveal">Skills</span>
        <h2 className="heading-lg mb-12 reveal">
          Technical <span className="text-gradient">expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          {Object.entries(skills).map(([category, items]) => (
            <article key={category} className="skills__group glass-card p-6 reveal">
              <header className="skills__header flex items-center gap-3 mb-5">
                <span className="skills__icon w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-theme-accent/10 border border-theme-border text-theme-accent" aria-hidden>
                  {CATEGORY_ICONS[category] || '•'}
                </span>
                <h3 className="heading-md text-theme-text">{category}</h3>
              </header>

              <ul className="skills__list space-y-4">
                {items.map((skill, index) => {
                  const pct = skillProficiency(index, items.length)
                  return (
                    <li key={skill}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-theme-text font-medium">{skill}</span>
                        <span className="font-mono text-xs text-theme-muted">{pct}%</span>
                      </div>
                      <div className="skill-bar" aria-hidden>
                        <div
                          className="skill-bar__fill"
                          style={{ '--fill-scale': pct / 100 }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-theme-border md:hidden">
                {items.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
