'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from '../app/data'

const categoryColors = {
  'Web App': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Mobile App': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  SaaS: 'text-green-400 bg-green-400/10 border-green-400/20',
  'Web & Mobile': 'text-gold bg-gold/10 border-gold/20',
}

function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`project-card card-base group hover:border-accent/40 cursor-default h-full flex flex-col ${
        featured ? 'bg-surface-soft/90' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md border ${
              categoryColors[project.category] || 'text-muted bg-muted/10 border-muted/20'
            }`}
          >
            {project.category}
          </span>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="project-arrow transition-transform duration-200"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        )}
      </div>

      <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-display font-black text-paper mb-1 group-hover:text-accent transition-colors duration-200`}>
        {project.name}
      </h3>
      <p className="font-mono text-xs text-muted mb-3">{project.subtitle}</p>
      <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

      {project.impact && (
        <div className="mb-5 border-l border-accent/50 pl-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
            Outcome
          </p>
          <p className="text-sm text-paper/90 leading-relaxed">{project.impact}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-border text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web App', 'Mobile App', 'SaaS', 'Web & Mobile']

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

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
    <section id="projects" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-on-scroll">
          <span className="section-tag">// Projects</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="heading-lg animate-on-scroll">
            Selected work,
            <br />
            <span className="text-gradient">built for real users.</span>
          </h2>

          {/* Filter */}
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.name}
              className={`animate-on-scroll ${filter === 'All' && project.featured && i < 2 ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <ProjectCard project={project} featured={filter === 'All' && project.featured && i < 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
