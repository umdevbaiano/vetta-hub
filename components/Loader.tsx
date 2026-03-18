'use client'

import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    const logo = document.getElementById('loader-logo')
    const tagline = document.getElementById('loader-tagline')
    const ringWrap = document.getElementById('loader-ring')
    const lrFill = document.getElementById('lr-fill')
    const nav = document.getElementById('nav')
    if (!loader || !logo || !nav) return

    document.body.style.overflow = 'hidden'

    requestAnimationFrame(() => {
      logo.classList.add('show')
      setTimeout(() => { tagline?.classList.add('show') }, 400)
      setTimeout(() => {
        ringWrap?.classList.add('show')
        setTimeout(() => { lrFill?.classList.add('run') }, 50)
      }, 700)
    })

    setTimeout(() => {
      if (tagline) { (tagline as HTMLElement).style.transition = 'opacity .3s ease'; (tagline as HTMLElement).style.opacity = '0' }
      if (ringWrap) { (ringWrap as HTMLElement).style.transition = 'opacity .3s ease'; (ringWrap as HTMLElement).style.opacity = '0' }

      setTimeout(() => {
        const navLogo = document.querySelector('.nav-logo, nav a') as HTMLElement
        if (!navLogo) return
        const navRect = navLogo.getBoundingClientRect()
        const logoRect = logo.getBoundingClientRect()
        const dx = navRect.left + navRect.width / 2 - (logoRect.left + logoRect.width / 2)
        const dy = navRect.top + navRect.height / 2 - (logoRect.top + logoRect.height / 2)

        logo.style.transition = 'transform .75s cubic-bezier(.4,0,.2,1), opacity .45s ease .25s'
        logo.style.transform = `translate(${dx}px,${dy}px) scale(0.26)`
        logo.style.opacity = '0'

        loader.style.transition = 'opacity .55s ease .3s'
        loader.style.opacity = '0'

        setTimeout(() => {
          loader.style.display = 'none'
          document.body.style.overflow = ''
          nav.classList.add('sc')
        }, 1000)
      }, 350)
    }, 2700)
  }, [])

  return (
    <div id="loader">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <img
          src="/images/vetta-logo-white.png"
          alt="Vetta"
          style={{ width: '72px', height: '72px', objectFit: 'contain', mixBlendMode: 'screen' }}
        />
        <div className="loader-logo" id="loader-logo">VETTA<em>.</em></div>
      </div>
      <div className="loader-tagline" id="loader-tagline">Ecossistema Tech Completo</div>
      <div className="loader-ring-wrap" id="loader-ring">
        <svg className="loader-ring" viewBox="0 0 52 52">
          <circle className="lr-track" cx="26" cy="26" r="22" />
          <circle className="lr-fill" id="lr-fill" cx="26" cy="26" r="22" />
        </svg>
      </div>
    </div>
  )
}
