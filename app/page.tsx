'use client'

import { useEffect } from 'react'
import Loader from '@/components/Loader'
import Nav from '@/components/Nav'
import { SectionDivider } from '@/components/SectionDivider'
import Hero from '@/components/sections/Hero'
import Ecossistema from '@/components/sections/Ecossistema'
import Servicos from '@/components/sections/Servicos'
import Cases from '@/components/sections/Cases'
import ComoFunciona from '@/components/sections/ComoFunciona'
import SobreTeaser from '@/components/sections/SobreTeaser'
import ParaQuem from '@/components/sections/ParaQuem'
import InfraVisual from '@/components/sections/InfraVisual'
import EcossistemaOrbital from '@/components/sections/EcossistemaOrbital'
import Dashboard from '@/components/sections/Dashboard'
import Stack from '@/components/sections/Stack'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // ── CURSOR
    const cur = document.getElementById('cur')
    const curR = document.getElementById('curR')
    if (!cur || !curR) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let rafId: number
    const animR = () => {
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      curR.style.left = rx + 'px'; curR.style.top = ry + 'px'
      rafId = requestAnimationFrame(animR)
    }
    animR()
    const hoverEls = document.querySelectorAll('a,button,.svc-card,.pr-card,.eco-layer,.proc-step,.fc,.orbit-node')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => { cur.classList.add('h'); curR.classList.add('h') })
      el.addEventListener('mouseleave', () => { cur.classList.remove('h'); curR.classList.remove('h') })
    })

    // ── SCROLL: passive + throttled via rAF
    let scrollTicking = false
    const onScroll = () => {
      if (!scrollTicking) {
        scrollTicking = true
        requestAnimationFrame(() => {
          const y = window.scrollY
          document.getElementById('nav')?.classList.toggle('sc', y > 20)
          scrollTicking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── REVEAL
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('v'); io.unobserve(e.target) } })
    }, { threshold: 0.08 })
    document.querySelectorAll('.r').forEach(el => io.observe(el))

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <Loader />
      <div id="cur" />
      <div id="curR" />
      <Nav />
      <main>
        {/* Hero — void (#06041A) */}
        <Hero />

        <SectionDivider />
        {/* Ecossistema — deep (#0D0A28) */}
        <Ecossistema />

        <SectionDivider flip />
        {/* Serviços — void (#06041A) */}
        <Servicos />

        <SectionDivider />
        {/* Cases — deep (#0D0A28) */}
        <Cases />

        <SectionDivider flip />
        {/* Processo — void (#06041A) */}
        <ComoFunciona />

        <SectionDivider />
        {/* Sobre — deep (#0D0A28) */}
        <SobreTeaser />

        <SectionDivider flip />
        {/* Para Quem — void (#06041A) */}
        <ParaQuem />

        <SectionDivider />
        {/* Infra — deep (#0D0A28) */}
        <InfraVisual />

        <SectionDivider flip />
        {/* Orbital — void (#06041A) */}
        <EcossistemaOrbital />

        <SectionDivider />
        {/* Dashboard — deep (#0D0A28) */}
        <Dashboard />

        <SectionDivider flip />
        {/* Stack — void (#06041A) */}
        <Stack />

        <SectionDivider />
        {/* FAQ — deep (#0D0A28) */}
        <FAQ />

        <SectionDivider flip />
        {/* CTA — void (#06041A) with mesh gradient */}
        <CTA />
      </main>
      <Footer />
    </>
  )
}
