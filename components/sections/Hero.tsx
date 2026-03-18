export default function Hero() {
  return (
    <section id="hero">
      {/* Video de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
        }}
      >
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay com gradiente */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(6,4,26,0.6), rgba(6,4,26,0.8), #06041A)',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Conteúdo */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <span style={{
          fontFamily: "var(--font-jetbrains, 'JetBrains Mono'), monospace",
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase' as const,
          color: '#D946EF',
          marginBottom: '24px',
        }}>
          Ecossistema Tech Completo
        </span>
        <h1 style={{
          fontFamily: "var(--font-syncopate, 'Syncopate'), sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(36px, 7vw, 80px)',
          letterSpacing: '0.1em',
          color: '#FAF9FF',
          marginBottom: '24px',
          lineHeight: 1.05,
          textTransform: 'uppercase' as const,
        }}>
          DO SITE AO<br />
          <span style={{
            background: 'linear-gradient(to right, #A78BFA, #D946EF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            SERVIDOR,
          </span>
          <br />
          TUDO JUNTO.
        </h1>
        <p style={{
          fontFamily: "var(--font-exo2, 'Exo 2'), sans-serif",
          fontWeight: 300,
          fontSize: '18px',
          color: '#9488C5',
          maxWidth: '520px',
          marginBottom: '40px',
        }}>
          A Vetta é o parceiro técnico que sua empresa precisa para crescer sem travar.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <a
            href="https://wa.me/5573982330065"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            Agendar diagnóstico
          </a>
          <a
            href="#servicos"
            className="btn-hero-ghost"
          >
            Ver soluções →
          </a>
        </div>
      </div>
    </section>
  )
}
