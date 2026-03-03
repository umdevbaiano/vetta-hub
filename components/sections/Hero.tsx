export default function Hero() {
  return (
    <section id="hero">
      <div className="px-1 px-layer" id="px1" />
      <div className="px-2 px-layer" id="px2" />
      <div className="px-3 px-layer" id="px3" />
      <div className="hero-grid" />

      <div className="hero-left">
        <div className="hero-eyebrow r">
          <div className="h-dot" />
          <span>Ecossistema Tech Completo</span>
        </div>
        <h1 className="r" data-d="1">
          D<span id="tw-article">o</span>{' '}
          <span className="tw-wrap">
            <span className="tw-word" id="tw-word">site</span>
            <span className="tw-cursor" />
          </span>
          <br />ao servidor,<br /><em>tudo junto.</em>
        </h1>
        <p className="hero-sub r" data-d="2">
          A Vetta é o parceiro técnico que sua empresa precisa para crescer sem travar.
          Sites, sistemas, infraestrutura e estratégia — em um único lugar.
        </p>
        <div className="hero-ctas r" data-d="3">
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agendar diagnóstico gratuito
          </a>
          <a href="#servicos" className="btn-ghost" style={{ color: 'var(--amber)' }}>
            Ver soluções <span className="arr">→</span>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <div className="circuit-bg" />
          <div className="fc fc-1">
            <div className="fc-label">Experiência</div>
            <div className="fc-val"><span>7+</span> anos</div>
            <div className="fc-sub">Em desenvolvimento de software</div>
          </div>
          <div className="fc fc-2">
            <div className="fc-label">Uptime garantido</div>
            <div className="fc-val"><span>99.9</span>%</div>
            <div className="fc-sub">Infraestrutura monitorada</div>
          </div>
          <div className="fc fc-3">
            <div className="fc-label">Stacks dominadas</div>
            <div className="fc-val"><span>14</span>+</div>
            <div className="fc-sub">Do front ao servidor</div>
          </div>
          <div className="fc fc-4">
            <div className="fc-label">Clientes atendidos</div>
            <div className="fc-val"><span>100</span>+</div>
            <div className="fc-sub">Empresas e agências</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="sc-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
