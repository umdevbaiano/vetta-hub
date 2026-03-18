export default function InfraVisual() {
  return (
    <section id="infra-visual" style={{
      padding: '120px 24px',
      background: 'linear-gradient(to bottom, #06041A, #0D0A28)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="infra-row" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
          alignItems: 'center',
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#D946EF', marginBottom: '16px',
            }}>Infraestrutura & NOC</p>
            <h2 style={{
              fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
              fontWeight: 700, fontSize: 'clamp(24px, 3.5vw, 40px)',
              letterSpacing: '0.06em', color: '#FAF9FF',
              marginBottom: '24px', lineHeight: 1.15,
            }}>
              SISTEMAS QUE NÃO PODEM <span style={{ color: '#A78BFA' }}>CAIR.</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
              fontWeight: 300, fontSize: '16px', color: '#9488C5',
              lineHeight: 1.7, marginBottom: '32px',
            }}>
              Monitoramento ativo 24/7 com Zabbix e Grafana.
              Identificamos gargalos antes que o problema chegue ao seu cliente.
            </p>

            {/* Status indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div className="ping-dot" style={{
                position: 'relative', width: '8px', height: '8px',
                borderRadius: '50%', background: '#28c840',
              }} />
              <span style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '12px', color: '#28c840', letterSpacing: '0.08em',
              }}>SISTEMA OPERACIONAL</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Zabbix', 'Grafana', '24/7 NOC', 'Alertas automáticos'].map(c => (
                <span key={c} style={{
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: '11px', padding: '6px 12px', borderRadius: '6px',
                  border: '1px solid rgba(124,58,237,0.25)', color: '#9488C5',
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Uptime panel */}
          <div style={{
            background: '#0D0A28', borderRadius: '16px',
            border: '1px solid rgba(124,58,237,0.2)',
            padding: '24px', boxShadow: '0 0 60px rgba(124,58,237,0.06)',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginBottom: '16px',
            }}>
              <span style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5B5080',
              }}>Uptime — últimos 30 dias</span>
              <span style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '14px', fontWeight: 700, color: '#7C3AED',
              }}>99.9%</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '56px', marginBottom: '8px' }}>
              {Array.from({ length: 30 }).map((_, i) => {
                const h = 85 + Math.floor(Math.sin(i * 0.7) * 10 + 5)
                return <div key={i} style={{
                  flex: 1, borderRadius: '2px', background: '#7C3AED',
                  height: `${h}%`, opacity: 0.4 + (i / 30) * 0.6,
                }} />
              })}
            </div>

            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '9px', color: '#5B5080', marginBottom: '24px',
            }}>
              <span>1 Mar</span><span>30 Mar</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: 'MTTR', val: '<2min', color: '#FAF9FF' },
                { label: 'Alertas/dia', val: '0', color: '#D946EF' },
                { label: 'Servidores', val: '24', color: '#A78BFA' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'rgba(124,58,237,0.08)', borderRadius: '10px', padding: '12px',
                }}>
                  <div style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em',
                    color: '#5B5080', marginBottom: '4px',
                  }}>{s.label}</div>
                  <div style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '16px', fontWeight: 700, color: s.color,
                  }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
