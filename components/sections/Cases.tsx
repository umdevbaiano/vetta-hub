'use client'

export default function Cases() {
  return (
    <section id="cases">
      <div className="container">
        <p className="s-label r">Resultados Reais</p>
        <h2 className="st r" data-d="1">Cases que <em>entregamos.</em></h2>

        {/* Case 1 — NF-e */}
        <div className="case-card r" data-d="2">
          <div className="case-text">
            <span className="case-tag">Cliente externo</span>
            <h3>EMISSOR NF-E AUTOMATIZADO</h3>
            <p>
              Sistema de emissão de notas fiscais integrado ao ERP do cliente.
              Redução de 90% no tempo de emissão com validação automática junto à SEFAZ.
            </p>
            <div className="case-pills">
              {['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'].map(t => (
                <span key={t} className="case-pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="case-mockup">
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot" style={{ background: '#ff5f57' }} />
                <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <div className="terminal-dot" style={{ background: '#28c840' }} />
              </div>
              <div className="terminal-body">
                <div><span style={{ color: '#D946EF' }}>POST</span> <span style={{ color: '#9488C5' }}>/api/nfe/emitir</span></div>
                <div style={{ color: '#5B5080' }}>{'{'}</div>
                <div style={{ color: '#5B5080', paddingLeft: '16px' }}>&quot;cnpj&quot;: <span style={{ color: '#A78BFA' }}>&quot;65.434.389/0001-29&quot;</span>,</div>
                <div style={{ color: '#5B5080', paddingLeft: '16px' }}>&quot;valor&quot;: <span style={{ color: '#A78BFA' }}>3000.00</span>,</div>
                <div style={{ color: '#5B5080', paddingLeft: '16px' }}>&quot;status&quot;: <span style={{ color: '#28c840' }}>&quot;AUTORIZADA&quot;</span></div>
                <div style={{ color: '#5B5080' }}>{'}'}</div>
                <div style={{ marginTop: '12px', color: '#28c840' }}>✓ NF-e 000.001.234 emitida com sucesso</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 2 — Insane App (invertido) */}
        <div className="case-card case-card-flip r" data-d="3">
          <div className="case-mockup">
            <div className="app-mockup">
              <div className="app-status-bar">
                <span>insane.app</span>
                <div className="app-signal">
                  <div className="signal-dot" />
                  <div className="signal-dot" style={{ opacity: 0.6 }} />
                  <div className="signal-dot" style={{ opacity: 0.3 }} />
                </div>
              </div>
              {[
                { user: 'carlos_fit', action: 'completou treino', time: '2min', pts: '+120pts' },
                { user: 'ana_strong', action: 'novo recorde pessoal', time: '8min', pts: '+85pts' },
                { user: 'rafa_gym', action: 'sequência de 30 dias', time: '15min', pts: '+200pts' },
              ].map((item, i) => (
                <div key={i} className="feed-item">
                  <div className="feed-avatar" />
                  <div className="feed-info">
                    <span className="feed-user">{item.user}</span>
                    <span className="feed-action">{item.action}</span>
                  </div>
                  <div className="feed-meta">
                    <span className="feed-pts">{item.pts}</span>
                    <span className="feed-time">{item.time}</span>
                  </div>
                </div>
              ))}
              <div className="app-stats">
                <div className="app-stat">
                  <span className="app-stat-val" style={{ color: '#A78BFA' }}>2.4k</span>
                  <span className="app-stat-label">usuários</span>
                </div>
                <div className="app-stat">
                  <span className="app-stat-val" style={{ color: '#D946EF' }}>380</span>
                  <span className="app-stat-label">treinos/dia</span>
                </div>
                <div className="app-stat">
                  <span className="app-stat-val" style={{ color: '#28c840' }}>99.9%</span>
                  <span className="app-stat-label">uptime</span>
                </div>
              </div>
            </div>
          </div>
          <div className="case-text">
            <span className="case-tag">Cliente externo</span>
            <h3>INSANE APP</h3>
            <p>
              Rede social e plataforma de acompanhamento de treinos focada em comunidade fitness.
              Backend completo com feed social, sistema de autenticação, tracking de treinos,
              perfis de atletas e integração com app mobile.
            </p>
            <div className="case-pills">
              {['Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'].map(t => (
                <span key={t} className="case-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
