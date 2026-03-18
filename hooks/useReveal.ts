'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of the element is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('v') // Add 'v' (visible) class to '.r' (reveal) elements
          // Optional: stop observing once revealed if you only want it to happen once
          // observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Find all elements with the reveal class '.r'
    const elements = document.querySelectorAll('.r')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])
}
