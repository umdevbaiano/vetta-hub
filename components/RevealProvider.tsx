'use client'
import React from 'react'
import { useReveal } from '@/hooks/useReveal'

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useReveal()
  return <>{children}</>
}
