'use client'

import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    const logo = document.getElementById('loader-logo')
    const emblem = document.getElementById('loader-emblem')
    const tagline = document.getElementById('loader-tagline')
    const ringWrap = document.getElementById('loader-ring')
    const lrFill = document.getElementById('lr-fill')
    const nav = document.getElementById('nav')
    if (!loader || !logo || !nav) return

    document.body.style.overflow = 'hidden'

    requestAnimationFrame(() => {
      if (emblem) { (emblem as HTMLElement).style.opacity = '1'; (emblem as HTMLElement).style.transform = 'scale(1)' }
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
        const navLogo = document.querySelector('.nav-logo') as HTMLElement
        if (!navLogo) return
        const navRect = navLogo.getBoundingClientRect()
        const logoRect = logo.getBoundingClientRect()
        const dx = navRect.left + navRect.width / 2 - (logoRect.left + logoRect.width / 2)
        const dy = navRect.top + navRect.height / 2 - (logoRect.top + logoRect.height / 2)

        logo.style.transition = 'transform .75s cubic-bezier(.4,0,.2,1), opacity .45s ease .25s'
        logo.style.transform = `translate(${dx}px,${dy}px) scale(0.26)`
        logo.style.opacity = '0'

        if (emblem) {
          (emblem as HTMLElement).style.transition = 'transform .75s cubic-bezier(.4,0,.2,1), opacity .4s ease .2s';
          (emblem as HTMLElement).style.transform = `translate(${dx - 60}px,${dy}px) scale(0.22)`;
          (emblem as HTMLElement).style.opacity = '0'
        }

        loader.style.transition = 'opacity .55s ease .3s'
        loader.style.opacity = '0'

        setTimeout(() => {
          loader.style.display = 'none'
          document.body.style.overflow = ''
          nav.classList.add('sc')
          document.querySelectorAll('#hero .r').forEach(el => el.classList.add('v'))
          // start typewriter
          setTimeout(() => startTypewriter(), 1800)
        }, 1000)
      }, 350)
    }, 2700)
  }, [])

  return (
    <div id="loader">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <svg
          id="loader-emblem"
          width="72" height="72"
          viewBox="-50 -56 160 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0, transform: 'scale(.9)', transition: 'opacity .7s ease, transform .7s ease' }}
        >
          <polygon points="0,-44 38,-22 38,22 0,44 -38,22 -38,-22" fill="none" stroke="#ededf0" strokeWidth="1" opacity={0.1} />
          <polyline points="0,-44 38,-22 38,22 0,44" fill="none" stroke="#00d4ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="0,-44 -38,-22" fill="none" stroke="#00d4ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.25} />
          <polyline points="-38,22 0,44" fill="none" stroke="#00d4ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.25} />
          <polyline points="-38,-22 -38,22" fill="none" stroke="#00d4ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.12} />
          <line x1="0" y1="-44" x2="38" y2="22" stroke="#00d4ff" strokeWidth="1.2" opacity={0.25} />
          <line x1="0" y1="-44" x2="0" y2="44" stroke="#00d4ff" strokeWidth="1.2" opacity={0.18} />
          <line x1="38" y1="-22" x2="-38" y2="22" stroke="#00d4ff" strokeWidth="1.2" opacity={0.12} />
          <circle cx="0" cy="-44" r="4.5" fill="#00d4ff" />
          <circle cx="38" cy="-22" r="4.5" fill="#00d4ff" />
          <circle cx="38" cy="22" r="4.5" fill="#00d4ff" />
          <circle cx="0" cy="44" r="4.5" fill="#00d4ff" />
          <circle cx="-38" cy="-22" r="4.5" fill="#00d4ff" opacity={0.22} />
          <circle cx="-38" cy="22" r="4.5" fill="#00d4ff" opacity={0.22} />
          <circle cx="0" cy="0" r="9" fill="none" stroke="#00d4ff" strokeWidth="2" opacity={0.4} />
          <circle cx="0" cy="0" r="4" fill="#00d4ff" />
        </svg>
        <div className="loader-logo" id="loader-logo">Vetta<em>.</em></div>
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

// Typewriter — defined outside component, called after loader hides
function startTypewriter() {
  const pairs = [
    { art: 'o', word: 'site' },
    { art: 'o', word: 'sistema' },
    { art: 'a', word: 'infra' },
    { art: 'a', word: 'automação' },
    { art: 'o', word: 'software' },
  ]
  const twEl = document.getElementById('tw-word')
  const twArt = document.getElementById('tw-article')
  if (!twEl || !twArt) return
  let wi = 0
  const TYPE_SPEED = 60, DELETE_SPEED = 40, PAUSE = 1800

  function typewriter() {
    if (!twEl || !twArt) return
    const next = pairs[(wi + 1) % pairs.length]
    const current = twEl.textContent ?? ''
    let i = current.length
    const del = setInterval(() => {
      twEl.textContent = current.slice(0, --i)
      if (i <= 0) {
        clearInterval(del)
        wi = (wi + 1) % pairs.length
        twArt.textContent = next.art
        let j = 0
        const typ = setInterval(() => {
          twEl.textContent = next.word.slice(0, ++j)
          if (j >= next.word.length) { clearInterval(typ); setTimeout(typewriter, PAUSE) }
        }, TYPE_SPEED)
      }
    }, DELETE_SPEED)
  }
  setTimeout(typewriter, PAUSE)
}
