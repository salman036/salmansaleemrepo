/**
 * Observe elements and add a visible class when they enter the viewport.
 * @param {HTMLElement | null} root
 * @param {string} selector
 * @param {IntersectionObserverInit} [options]
 * @returns {() => void} cleanup
 */
export function observeReveal(root, selector = '.reveal', options = {}) {
  if (!root) return () => {}

  const defaultOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -8% 0px',
    ...options,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible')
        observer.unobserve(entry.target)
      }
    })
  }, defaultOptions)

  const elements = root.querySelectorAll(selector)
  elements.forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}

/**
 * Track scroll progress as a value from 0 to 1.
 * @param {(progress: number) => void} onProgress
 * @returns {() => void} cleanup
 */
export function trackScrollProgress(onProgress) {
  let ticking = false

  const update = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
    onProgress(progress)
    ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }

  update()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })

  return () => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
  }
}

/**
 * Highlight nav links based on the section currently in view.
 * @param {string[]} sectionIds
 * @param {(activeId: string) => void} onActiveChange
 * @returns {() => void} cleanup
 */
export function trackActiveSection(sectionIds, onActiveChange) {
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean)

  if (sections.length === 0) return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible[0]?.target?.id) {
        onActiveChange(visible[0].target.id)
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
  )

  sections.forEach((section) => observer.observe(section))

  return () => observer.disconnect()
}

/**
 * @param {string} name
 * @returns {string}
 */
export function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
