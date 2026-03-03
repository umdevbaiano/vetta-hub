export default function SobreTeaser() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="sobre-teaser r">
          <div className="sobre-teaser-left">
            <p className="s-label">Sobre a Vetta</p>
            <blockquote className="sobre-quote">A curiosidade de uma criança de 6 anos<br />virou <em>engenharia de verdade.</em></blockquote>
            <p className="sobre-teaser-sub">Nascemos de dentro da tecnologia. Cada decisão que tomamos vem de quem já esteve do lado técnico — e sabe o que travar uma empresa significa na prática.</p>
            <a href="/sobre" className="sobre-teaser-cta">
              Conheça a história completa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="sobre-teaser-stats r" data-d="2">
            <div className="st-stat">
              <span className="st-val">7<em>+</em></span>
              <span className="st-lbl">anos no mercado</span>
            </div>
            <div className="st-divider"></div>
            <div className="st-stat">
              <span className="st-val">100<em>+</em></span>
              <span className="st-lbl">clientes atendidos</span>
            </div>
            <div className="st-divider"></div>
            <div className="st-stat">
              <span className="st-val">5</span>
              <span className="st-lbl">camadas de solução</span>
            </div>
            <div className="st-divider"></div>
            <div className="st-stat">
              <span className="st-val">Jequié</span>
              <span className="st-lbl">BA — com alcance nacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
