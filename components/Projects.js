'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '../app/data'
import { observeReveal } from '../lib/scroll'

function ProjectThumb({ name, category }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="project-card__thumb" aria-hidden>
      <div className="text-center">
        <p className="font-display text-2xl font-bold text-gradient mb-1">{initials}</p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-theme-muted">{category}</p>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card glass-card p-6 h-full flex flex-col transition-all duration-300">
      <ProjectThumb name={project.name} category={project.category} />

      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-theme-accent border border-theme-border rounded px-2 py-0.5">
          {project.category}
        </span>
        {project.featured ? (
          <span className="font-mono text-[10px] text-theme-muted">Featured</span>
        ) : null}
      </div>

      <h3 className="heading-md text-theme-text mb-1">{project.name}</h3>
      <p className="font-mono text-xs text-theme-muted mb-3">{project.subtitle}</p>
      <p className="text-theme-muted text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

      {project.impact ? (
        <p className="text-sm text-theme-text/90 border-l-2 border-theme-accent pl-3 mb-4">{project.impact}</p>
      ) : null}

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="skill-badge text-[10px] py-1">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-theme-border">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary text-xs !py-2 !px-4"
          >
            Live Demo
          </a>
        ) : null}
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline text-xs !py-2 !px-4"
          >
            GitHub
          </a>
        ) : null}
        {!project.url && !project.github ? (
          <span className="font-mono text-xs text-theme-muted">Private / NDA</span>
        ) : null}
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  )
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    return observeReveal(ref.current)
  }, [])

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = root.querySelectorAll('.projects__grid .reveal')
    items.forEach((el) => {
      el.classList.remove('reveal--visible')
    })
    return observeReveal(root, '.projects__grid .reveal')
  }, [filter])

  return (
    <section id="projects" ref={ref} className="projects py-system-xl" aria-label="Projects">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-tag reveal">Projects</span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <h2 className="heading-lg reveal">
            Selected <span className="text-gradient">work</span>
          </h2>

          <div className="projects__filters flex flex-wrap gap-2 reveal" role="tablist" aria-label="Filter projects">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`skill-badge cursor-pointer ${filter === cat ? '!border-theme-accent !text-theme-accent !bg-theme-accent/10' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {filtered.map((project) => (
            <div key={project.name} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
