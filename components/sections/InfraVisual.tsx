export default function InfraVisual() {
  return (
    <>
      <section id="infra-visual">
        <div className="container">
          <div className="infra-inner r">
            <div>
              <p className="s-label">Infraestrutura</p>
              <h2 className="st" style={{ marginBottom: '16px' }}>Sistemas que<br />não podem <em>cair.</em></h2>
              <p className="ssub">Monitoramento ativo 24/7 com Zabbix e Grafana. Identificamos gargalos antes que o problema chegue ao seu cliente.</p>
              <div className="infra-chips">
                <span className="infra-chip">Zabbix</span>
                <span className="infra-chip">Grafana</span>
                <span className="infra-chip">24/7 NOC</span>
                <span className="infra-chip">Alertas automáticos</span>
              </div>
            </div>
            <div className="infra-graphic">
              <div className="infra-badge">
                <div className="ib-label">Uptime atual</div>
                <div className="ib-val">99.9%</div>
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
        <div style={{ height: '10px' }}></div>
        <div className="mq-wrap r" data-d="2">
          <div className="mq-track rev">
            <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span><span className="stag">Nginx</span>
            <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span><span className="stag">Nginx</span>
          </div>
        </div>
      </section>
    </>
  )
}
