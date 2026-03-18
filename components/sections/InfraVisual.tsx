export default function InfraVisual() {
  return (
    <>
      <section id="infra-visual">
        <div className="container">
          <div className="infra-inner">
            <div className="r">
              <p className="s-label">Infraestrutura & NOC</p>
              <h2 className="st">Sistemas que não podem <em>cair.</em></h2>
              <p className="ssub" style={{ marginBottom: '24px' }}>
                Monitoramento ativo 24/7 com Zabbix e Grafana. Identificamos gargalos antes que o problema chegue ao seu cliente.
              </p>

              {/* Status indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
                <div className="status-dot" />
                <span style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono'), monospace", fontSize: '11px', color: '#28c840', letterSpacing: '.08em' }}>
                  SISTEMA OPERACIONAL
                </span>
              </div>

              <div className="infra-chips">
                {['Zabbix', 'Grafana', '24/7 NOC', 'Alertas automáticos'].map(c => (
                  <span key={c} className="infra-chip">{c}</span>
                ))}
              </div>
            </div>

            <div className="r" data-d="1">
              <div className="uptime-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono'), monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase' as const, color: '#5B5080' }}>
                    Uptime — últimos 30 dias
                  </span>
                  <span style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono'), monospace", fontSize: '14px', fontWeight: 700, color: '#7C3AED' }}>
                    99.9%
                  </span>
                </div>

                <div className="uptime-bars">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = 85 + Math.floor(Math.sin(i * 0.7) * 10 + 5)
                    return (
                      <div
                        key={i}
                        className="uptime-bar"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    )
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <span style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono'), monospace", fontSize: '9px', color: '#5B5080' }}>1 Mar</span>
                  <span style={{ fontFamily: "var(--font-jetbrains, 'JetBrains Mono'), monospace", fontSize: '9px', color: '#5B5080' }}>30 Mar</span>
                </div>

                <div className="uptime-stats">
                  <div className="uptime-stat-card">
                    <div className="uptime-stat-label">MTTR</div>
                    <div className="uptime-stat-val">&lt;2min</div>
                  </div>
                  <div className="uptime-stat-card">
                    <div className="uptime-stat-label">Alertas/dia</div>
                    <div className="uptime-stat-val" style={{ color: '#D946EF' }}>0</div>
                  </div>
                  <div className="uptime-stat-card">
                    <div className="uptime-stat-label">Servidores</div>
                    <div className="uptime-stat-val" style={{ color: '#A78BFA' }}>24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section id="stack">
        <div className="container">
          <p className="stack-label r">Tecnologias que dominamos</p>
        </div>
        <div className="mq-wrap r" data-d="1">
          <div className="mq-track">
            <span className="stag">Python</span><span className="stag">React</span><span className="stag">Next.js</span><span className="stag">FastAPI</span><span className="stag">PostgreSQL</span><span className="stag">Docker</span><span className="stag">AWS</span><span className="stag">Linux</span><span className="stag">Zabbix</span><span className="stag">Grafana</span><span className="stag">MikroTik</span><span className="stag">TypeScript</span><span className="stag">Git</span><span className="stag">Node.js</span><span className="stag">Tailwind CSS</span>
            <span className="stag">Python</span><span className="stag">React</span><span className="stag">Next.js</span><span className="stag">FastAPI</span><span className="stag">PostgreSQL</span><span className="stag">Docker</span><span className="stag">AWS</span><span className="stag">Linux</span><span className="stag">Zabbix</span><span className="stag">Grafana</span><span className="stag">MikroTik</span><span className="stag">TypeScript</span><span className="stag">Git</span><span className="stag">Node.js</span><span className="stag">Tailwind CSS</span>
          </div>
        </div>
        <div style={{ height: '10px' }} />
        <div className="mq-wrap r" data-d="2">
          <div className="mq-track rev">
            <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span>
            <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span>
          </div>
        </div>
      </section>
    </>
  )
}
