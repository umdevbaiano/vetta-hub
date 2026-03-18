const services = [
  { num: '01', title: 'SOFTWARE SOB MEDIDA', desc: 'ERPs, portais, automações e sistemas internos construídos para a sua regra de negócio. Nenhum template, zero gambiarra.', icon: 'code', wide: true },
  { num: '04', title: 'INFRAESTRUTURA & NOC', desc: 'Servidores, redes e monitoramento 24/7. Identificamos o problema antes que você perceba.', icon: 'server', status: true },
  { num: '02', title: 'SITES & LANDING PAGES', desc: 'Presença digital que representa sua empresa de verdade. Rápido, responsivo, focado em conversão.', icon: 'globe' },
  { num: '03', title: 'WHITE LABEL', desc: 'Você vende, nós desenvolvemos — sob sua marca. Ideal para agências.', icon: 'heart' },
  { num: '05', title: 'CONSULTORIA', desc: 'Diagnóstico honesto. Plano de ação claro. Sem PowerPoint.', icon: 'chat' },
]

const icons: Record<string, JSX.Element> = {
  code: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  server: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/></svg>,
  globe: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>,
  heart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  chat: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
}

export default function Servicos() {
  return (
    <section id="servicos" style={{
      padding: '120px 24px',
      background: 'linear-gradient(to bottom, #0D0A28, #151130)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#D946EF', marginBottom: '16px',
          }}>Soluções</p>
          <h2 style={{
            fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
            fontWeight: 700, fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '0.08em', color: '#FAF9FF',
          }}>
            O QUE A VETTA <span style={{ color: '#A78BFA' }}>ENTREGA?</span>
          </h2>
        </div>

        <div className="bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '16px',
        }}>
          {services.map((svc) => (
            <a
              key={svc.num}
              href="https://wa.me/5573982330065"
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card"
              style={{
                gridColumn: svc.wide ? 'span 12' : 'span 12',
                position: 'relative',
                background: '#151130',
                border: '1px solid rgba(124,58,237,0.18)',
                borderRadius: '16px',
                padding: '32px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color .3s, box-shadow .3s',
                minHeight: svc.wide ? '240px' : 'auto',
              }}
            >
              {/* Watermark number */}
              <span style={{
                position: 'absolute', bottom: '-8px', right: '-4px',
                fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
                fontWeight: 700, fontSize: '100px', lineHeight: 1,
                color: 'rgba(124,58,237,0.04)', userSelect: 'none',
              }}>{svc.num}</span>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #7C3AED, #D946EF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                }}>{icons[svc.icon]}</div>

                <h3 style={{
                  fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
                  fontWeight: 700, fontSize: '18px', letterSpacing: '0.06em',
                  color: '#FAF9FF', marginBottom: '12px',
                }}>{svc.title}</h3>

                <p style={{
                  fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
                  fontWeight: 300, fontSize: '14px', color: '#9488C5',
                  lineHeight: 1.7, maxWidth: svc.wide ? '400px' : 'unset',
                }}>{svc.desc}</p>

                {svc.status && (
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ position: 'relative', width: '8px', height: '8px' }}>
                      <div className="ping-dot" style={{
                        position: 'absolute', inset: 0, borderRadius: '50%', background: '#28c840',
                      }} />
                    </div>
                    <span style={{
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: '12px', color: '#28c840', letterSpacing: '0.06em',
                    }}>OPERACIONAL</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
