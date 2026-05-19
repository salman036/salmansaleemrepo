'use client'

import { useEffect, useRef } from 'react'
import { experience } from '../app/data'
import { observeReveal } from '../lib/scroll'

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    return observeReveal(ref.current)
  }, [])

  return (
    <section id="experience" ref={ref} className="experience py-system-xl relative" aria-label="Experience">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="section-tag reveal">Experience</span>
        <h2 className="heading-lg mb-14 reveal">
          Career <span className="text-gradient">timeline</span>
        </h2>

        <div className="experience__timeline relative">
          <div className="timeline__line" aria-hidden />

          <ol className="space-y-10 reveal-stagger list-none m-0 p-0">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="experience__item relative pl-8 md:pl-32 reveal">
                <span
                  className="absolute left-0 md:left-[7.25rem] top-6 w-3 h-3 rounded-full bg-theme-accent ring-4 ring-theme-bg"
                  aria-hidden
                />

                <div className="hidden md:block absolute left-0 top-6 w-24 text-right pr-4">
                  <time className="font-mono text-[11px] text-theme-muted">{job.period}</time>
                </div>

                <article className="experience__card glass-card p-6 md:p-8">
                  <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="heading-md text-theme-text">{job.role}</h3>
                      <p className="font-display font-semibold text-theme-muted">{job.company}</p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="font-mono text-xs text-theme-accent md:hidden">{job.period}</p>
                      <p className="font-mono text-xs text-theme-muted">{job.location}</p>
                      {job.type ? (
                        <span className="inline-block mt-1 font-mono text-[10px] uppercase tracking-wider text-theme-muted border border-theme-border rounded px-2 py-0.5">
                          {job.type}
                        </span>
                      ) : null}
                    </div>
                  </header>

                  {job.description ? (
                    <p className="text-theme-muted text-sm mb-4">{job.description}</p>
                  ) : null}

                  <ul className="space-y-3 m-0 p-0 list-none">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-theme-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-accent mt-2 shrink-0" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
