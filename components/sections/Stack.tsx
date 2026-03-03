export default function Stack() {
  return (
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

{/* ══ ORBITAL ECOSSISTEMA ══ */ }
  <section id="ecossistema-orbital">
    <div className="container">
      <div className="orbital-head r">
        <p className="s-label" style={{ justifyContent: 'center' }}>Ecossistema Interativo</p>
        <h2 className="st r" data-d="1" style={{ textAlign: 'center' }}>Explore as camadas<br />da <em>Vetta.</em></h2>
        <p className="ssub r" data-d="2" style={{ margin: '0 auto 0', textAlign: 'center' }}>Clique em cada camada para entender como ela se encaixa no ecossistema.</p>
      </div>
      <div className="orbital-stage r" data-d="3" id="orbital-stage">
        {/* rings */}
        <div className="orbit-ring" style={{ width: '420px', height: '420px', marginTop: '-210px', marginLeft: '-210px', top: '50%', left: '50%', position: 'absolute' }}></div>
        <div className="orbit-ring" style={{ width: '240px', height: '240px', marginTop: '-120px', marginLeft: '-120px', top: '50%', left: '50%', position: 'absolute', borderColor: 'rgba(0,212,255,.04)' }}></div>
        {/* center */}
        <div className="orbit-center">
          <svg className="orbit-center-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        {/* nodes injected by JS */}
        <div id="orbital-nodes"></div>
        {/* detail card */}
        <div className="orbit-detail" id="orbit-detail">
          <div className="od-inner">
            <div className="od-num" id="od-num"></div>
            <div className="od-title" id="od-title"></div>
            <div className="od-desc" id="od-desc"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ══ SCROLL CARD ══ */ }
  <section id="scroll-card-section">
    <div className="scroll-card-wrap" id="scroll-card-wrap">
      <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        <div className="scroll-card-title r">
          <p className="s-label" style={{ justifyContent: 'center' }}>Dashboard</p>
          <h2 className="st" style={{ textAlign: 'center', marginBottom: '8px' }}>Controle real,<br /><em>visibilidade total.</em></h2>
          <p className="ssub" style={{ textAlign: 'center', margin: '0 auto' }}>Cada projeto entregue com painel de acompanhamento em tempo real.</p>
        </div>
        <div className="scroll-card-frame" id="scroll-card-frame">
          <div className="scf-bar">
            <div className="scf-dot" style={{ background: '#ff5f57' }}></div>
            <div className="scf-dot" style={{ background: '#febc2e' }}></div>
            <div className="scf-dot" style={{ background: '#28c840' }}></div>
            <span style={{ fontSize: '12px', color: 'var(--muted)', marginLeft: '8px' }}>vetta.hub — painel de projetos</span>
          </div>
          <div className="scf-body">
            <div className="scf-grid">
              <div className="scf-card">
                <div className="scf-card-label">Projetos ativos</div>
                <div className="scf-card-val c">12</div>
              </div>
              <div className="scf-card">
                <div className="scf-card-label">Uptime médio</div>
                <div className="scf-card-val">99.9%</div>
              </div>
              <div className="scf-card">
                <div className="scf-card-label">Entregas no prazo</div>
                <div className="scf-card-val a">100%</div>
              </div>
            </div>
            <div className="scf-chart">
              <div className="scf-bar-item" style={{ height: '40%' }}></div>
              <div className="scf-bar-item" style={{ height: '55%' }}></div>
              <div className="scf-bar-item hi" style={{ height: '70%' }}></div>
              <div className="scf-bar-item" style={{ height: '50%' }}></div>
              <div className="scf-bar-item hi" style={{ height: '90%' }}></div>
              <div className="scf-bar-item" style={{ height: '65%' }}></div>
              <div className="scf-bar-item hi" style={{ height: '100%' }}></div>
              <div className="scf-bar-item" style={{ height: '75%' }}></div>
              <div className="scf-bar-item" style={{ height: '60%' }}></div>
              <div className="scf-bar-item hi" style={{ height: '85%' }}></div>
              <div className="scf-bar-item" style={{ height: '45%' }}></div>
              <div className="scf-bar-item hi" style={{ height: '95%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
