'use client'

import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop (hover capable)
    if (window.matchMedia('(hover: none)').matches) return

    setIsVisible(true)

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over a clickable element
      const target = e.target as HTMLElement
      const isClickable = target.closest('a, button, input, [role="button"]') !== null
      setHovering(isClickable)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div 
        id="cur" 
        className={hovering ? 'h' : ''} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
      <div 
        id="curR" 
        className={hovering ? 'h' : ''} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
    </>
  )
}
