export default function Servicos() {
  return (
    <>
      <section id="servicos">
      <div className="container">
        <div className="svc-head">
          <div>
            <p className="s-label r">Soluções</p>
            <h2 className="st r" data-d="1">O que a Vetta <em>entrega?</em></h2>
          </div>
          <p className="ssub r" data-d="2">Cada serviço projetado para encaixar no momento certo da sua empresa.</p>
        </div>
        <div className="svc-grid r" data-d="3">

          <div className="svc-card feat">
            <span className="feat-tag">Carro-chefe</span>
            <div className="svc-n">01</div>
            <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
            <h3>Software<br />Sob Medida</h3>
            <p>ERPs, portais, automações e sistemas internos construídos para a sua regra de negócio. Nenhum template, zero gambiarra.</p>
            <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Quero um orçamento →</a>
          </div>

          <div className="svc-card">
            <div className="svc-n">02</div>
            <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
            </svg>
            <h3>Sites &<br />Landing Pages</h3>
            <p>Presença digital que representa sua empresa de verdade. Rápido, responsivo, focado em conversão.</p>
            <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Saber mais →</a>
          </div>

          <div className="svc-card">
            <div className="svc-n">03</div>
            <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h3>White<br />Label</h3>
            <p>Você vende, nós desenvolvemos. Ideal para agências que querem expandir sem contratar.</p>
            <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Como funciona →</a>
          </div>

          {/* wide card com mockup */}
          <div className="svc-card svc-wide">
            <div className="svc-wide-t">
              <div className="svc-n">04</div>
              <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              <h3>Infraestrutura & NOC</h3>
              <p>Servidores, redes e monitoramento 24/7. Identificamos o problema antes que você perceba.</p>
              <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Saber mais →</a>
            </div>
            <div className="mockup-wrap">
              <div className="mockup-bar">
                <div className="mockup-dot" style={{ background: '#ff5f57' }}></div>
                <div className="mockup-dot" style={{ background: '#febc2e' }}></div>
                <div className="mockup-dot" style={{ background: '#28c840' }}></div>
              </div>
              <div className="mockup-lines">
                <div className="ml cyan"></div>
                <div className="ml w90"></div>
                <div className="ml w80"></div>
                <div className="ml w40"></div>
                <div className="ml w60"></div>
                <div className="ml w80"></div>
              </div>
            </div>
          </div>

          <div className="svc-card">
            <div className="svc-n">05</div>
            <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
            <h3>Consultoria<br />Estratégica</h3>
            <p>Diagnóstico técnico completo. Saímos com um plano de ação claro, não com PowerPoint.</p>
            <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Agendar →</a>
          </div>

          <div className="svc-card" style={{ background: 'var(--cyan05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="svc-n" style={{ color: 'var(--cyan)' }}>→</div>
            <h3 style={{ fontSize: 18 }}>Projeto fora<br />do padrão?</h3>
            <p>Se o seu problema é complexo, melhor conversar. Desenvolvemos sob demanda.</p>
            <a href="https://wa.me/5573982330065?text=Olá!%20Tenho%20uma%20demanda%20específica." target="_blank" className="svc-lnk">Falar com especialista →</a>
          </div>

        </div>
      </div>
    </section>

    </>
  )
}
