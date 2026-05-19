'use client'

import { useEffect, useRef } from 'react'
import { trackScrollProgress } from '../lib/scroll'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    return trackScrollProgress((progress) => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    })
  }, [])

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
