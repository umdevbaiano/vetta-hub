'use client'

import { useEffect, useRef } from 'react'

const orbitData = [
  { id: 1, num: '01', label: 'Presença Digital', title: 'Presença Digital', desc: 'Sites, landing pages e e-commerce que convertem. Rápidos, responsivos e focados em resultado.', icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0v20M2 12h20M5.6 5.6C7.2 8 9.5 9.5 12 9.5s4.8-1.5 6.4-3.9M5.6 18.4C7.2 16 9.5 14.5 12 14.5s4.8 1.5 6.4 3.9' },
  { id: 2, num: '02', label: 'Software', title: 'Software Sob Medida', desc: 'ERPs, portais, automações. Sistemas construídos para a sua regra de negócio — nenhum template, zero gambiarra.', icon: 'M8 6 L2 12 L8 18 M16 6 L22 12 L16 18' },
  { id: 3, num: '03', label: 'White Label', title: 'White Label', desc: 'Você vende, a Vetta entrega. Seu cliente nunca saberá que existimos — a relação comercial é inteiramente sua.', icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' },
  { id: 4, num: '04', label: 'Infraestrutura', title: 'Infraestrutura & NOC', desc: 'Monitoramento 24/7 com Zabbix e Grafana. Identificamos o problema antes que seu cliente perceba.', icon: 'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01' },
  { id: 5, num: '05', label: 'Consultoria', title: 'Consultoria Estratégica', desc: 'Diagnóstico técnico real. Saímos com um plano de ação claro — não com slides bonitos.', icon: 'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z' },
]

export default function OrbitalTimeline() {
  const stageRef = useRef<HTMLDivElement>(null)
  const rotAngle = useRef(0)
  const autoRot  = useRef(true)
  const lastTime = useRef(0)
  const RADIUS = 200
  const DEG_PER_SEC = 6

  function positionNodes(angle: number) {
    const stage = stageRef.current
    if (!stage) return
    const cx = stage.offsetWidth / 2
    const cy = stage.offsetHeight / 2
    orbitData.forEach((item, i) => {
      const a   = ((i / orbitData.length) * 360 + angle) % 360
      const rad = (a * Math.PI) / 180
      const x   = cx + RADIUS * Math.cos(rad)
      const y   = cy + RADIUS * Math.sin(rad)
      const node = document.getElementById(`onode-${item.id}`)
      if (node) { node.style.left = x + 'px'; node.style.top = y + 'px' }
    })
  }

  function activateNode(id: number) {
    autoRot.current = false
    document.querySelectorAll('.orbit-node').forEach(n => n.classList.remove('active'))
    document.getElementById(`onode-${id}`)?.classList.add('active')
    const data = orbitData.find(d => d.id === id)
    if (!data) return
    const detail = document.getElementById('orbit-detail')
    const numEl  = document.getElementById('od-num')
    const titleEl = document.getElementById('od-title')
    const descEl  = document.getElementById('od-desc')
    if (numEl)   numEl.textContent   = data.num
    if (titleEl) titleEl.textContent = data.title
    if (descEl)  descEl.textContent  = data.desc
    detail?.classList.add('show')
    setTimeout(() => {
      autoRot.current = true
      detail?.classList.remove('show')
      document.querySelectorAll('.orbit-node').forEach(n => n.classList.remove('active'))
    }, 4000)
  }

  useEffect(() => {
    positionNodes(0)
    window.addEventListener('resize', () => positionNodes(rotAngle.current))

    let rafId: number
    function loop(now: number) {
      rafId = requestAnimationFrame(loop)
      if (!autoRot.current) { lastTime.current = now; return }
      const dt = Math.min((now - lastTime.current) / 1000, 0.1)
      lastTime.current = now
      rotAngle.current = (rotAngle.current + DEG_PER_SEC * dt) % 360
      positionNodes(rotAngle.current)
    }
    rafId = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', () => {}) }
  }, [])

  return (
    <section id="ecossistema-orbital">
      <div className="container">
        <div className="orb-wrap">
          <div className="orbital-stage" id="orbital-stage" ref={stageRef}>
            <div className="orb-ring orb-r1" />
            <div className="orb-ring orb-r2" />
            <div className="orb-center">
              <div className="orb-center-ping" />
              <div className="orb-center-dot" />
            </div>
            <div id="orbital-nodes">
              {orbitData.map(item => (
                <div
                  key={item.id}
                  className="orbit-node"
                  id={`onode-${item.id}`}
                  onClick={() => activateNode(item.id)}
                >
                  <div className="on-dot">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div className="on-label">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="orbit-detail" id="orbit-detail">
              <div className="od-inner">
                <div className="od-num" id="od-num">01</div>
                <div className="od-title" id="od-title">Presença Digital</div>
                <div className="od-desc" id="od-desc" />
              </div>
            </div>
          </div>
          <div className="orb-legend">
            <p className="s-label">O Ecossistema</p>
            <h2 className="st">Cinco camadas.<br /><em>Um parceiro.</em></h2>
            <p className="ssub">Clique em qualquer nó para explorar cada camada do ecossistema Vetta.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
