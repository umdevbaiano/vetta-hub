export default function CTA() {
  return (
    <section id="contato">
      <div className="cta-box">
        <p className="s-label r" style={{ justifyContent: 'center' }}>Próximo passo</p>
        <h2 className="r" data-d="1" style={{
          fontFamily: "var(--font-syncopate, 'Syncopate'), sans-serif",
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 700,
          letterSpacing: '.06em',
          lineHeight: 1.1,
          marginBottom: '20px',
          textTransform: 'uppercase' as const,
          position: 'relative',
        }}>
          PRONTO PARA PARAR<br />DE IMPROVISAR EM <em style={{ fontStyle: 'normal', color: 'var(--v600)' }}>TI?</em>
        </h2>
        <p className="r" data-d="2" style={{
          fontSize: '16px',
          fontWeight: 300,
          color: 'var(--gray)',
          maxWidth: '440px',
          margin: '0 auto 48px',
          lineHeight: 1.76,
          position: 'relative',
        }}>
          Em 30 minutos você sai com clareza sobre o próximo passo tecnológico da sua empresa.
        </p>
        <div className="cta-row r" data-d="3">
          <a
            href="https://wa.me/5573982330065"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            Quero meu diagnóstico gratuito →
          </a>
          <a
            href="mailto:contato@vettahub.com.br"
            className="btn-hero-ghost"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  )
}
