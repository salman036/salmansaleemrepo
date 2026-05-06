'use client'

import { useEffect, useRef } from 'react'
import { experience } from '../app/data'

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="animate-on-scroll">
          <span className="section-tag">// Experience</span>
        </div>
        <h2 className="heading-lg mb-16 animate-on-scroll">
          Where I've
          <br />
          <span className="text-gradient">Worked</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div
                key={i}
                className="relative pl-8 md:pl-24 animate-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-ink" />

                {/* Year tag on desktop */}
                <div className="hidden md:block absolute left-0 top-0 w-16 text-right">
                  <span className="font-mono text-[10px] text-muted">{job.period.split('–')[0].trim()}</span>
                </div>

                <div className="card-base hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-black text-xl text-paper group-hover:text-accent transition-colors duration-200">
                        {job.role}
                      </h3>
                      <p className="font-display font-bold text-muted">{job.company}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="font-mono text-xs text-accent">{job.period}</p>
                      <p className="font-mono text-xs text-muted">{job.location}</p>
                    </div>
                  </div>

                  {job.description && (
                    <p className="text-muted text-sm mb-4 italic">{job.description}</p>
                  )}

                  <ul className="space-y-2">
                    {job.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted">
                        <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
