'use client'

import { useEffect, useRef, useState } from 'react'
import { personalInfo } from '../app/data'
import { observeReveal } from '../lib/scroll'

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    return observeReveal(ref.current)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  const socialLinks = [
    { label: 'LinkedIn', href: personalInfo.linkedin, show: Boolean(personalInfo.linkedin) },
    { label: 'GitHub', href: personalInfo.github, show: Boolean(personalInfo.github) },
    { label: 'Twitter', href: personalInfo.twitter, show: Boolean(personalInfo.twitter) },
  ].filter((link) => link.show)

  return (
    <section id="contact" ref={ref} className="contact py-system-xl relative overflow-hidden" aria-label="Contact">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="section-tag reveal">Contact</span>
            <h2 className="heading-lg mb-4 reveal">
              Let&apos;s build <span className="text-gradient">something great</span>
            </h2>
            <p className="text-theme-muted leading-relaxed mb-6 reveal">{personalInfo.summary}</p>

            <div className="space-y-3 reveal">
              <p className="text-sm text-theme-muted">
                <span className="font-mono text-xs uppercase tracking-widest text-theme-accent mr-2">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-theme-text hover:text-theme-accent transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p className="text-sm text-theme-muted">
                <span className="font-mono text-xs uppercase tracking-widest text-theme-accent mr-2">Location</span>
                {personalInfo.location}
              </p>
              {personalInfo.phone ? (
                <p className="text-sm text-theme-muted">
                  <span className="font-mono text-xs uppercase tracking-widest text-theme-accent mr-2">Phone</span>
                  {personalInfo.phone}
                </p>
              ) : null}
            </div>

            {socialLinks.length > 0 ? (
              <nav className="contact__social flex flex-wrap gap-3 mt-8 reveal" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline text-xs"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="contact__form glass-card p-6 md:p-8 reveal space-y-5" noValidate>
            <div>
              <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-widest text-theme-muted mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl border border-theme-border bg-theme-surface-soft px-4 py-3 text-theme-text text-sm focus:outline-none focus:border-theme-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-widest text-theme-muted mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-xl border border-theme-border bg-theme-surface-soft px-4 py-3 text-theme-text text-sm focus:outline-none focus:border-theme-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-widest text-theme-muted mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full rounded-xl border border-theme-border bg-theme-surface-soft px-4 py-3 text-theme-text text-sm focus:outline-none focus:border-theme-accent transition-colors resize-y min-h-[120px]"
              />
            </div>
            <button type="submit" className="btn btn--primary w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
