import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#06041A',
    }}>
      {/* Video background */}
      <video
        autoPlay muted loop playsInline preload="none" aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.15,
        }}
      >
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(124,58,237,0.2) 0%, transparent 70%), linear-gradient(to bottom, rgba(6,4,26,0.3) 0%, #06041A 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, textAlign: 'center',
        padding: '0 24px', maxWidth: '1100px', margin: '0 auto',
      }}>
        <p style={{
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#D946EF', marginBottom: '32px',
        }}>
          Ecossistema Tech Completo
        </p>

        <h1 className="hero-title" style={{
          fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
          fontWeight: 700, lineHeight: 1.05, letterSpacing: '0.06em',
          fontSize: 'clamp(42px, 8vw, 96px)', color: '#FAF9FF',
          marginBottom: '24px',
        }}>
          DO SITE AO<br />
          <span style={{
            background: 'linear-gradient(to right, #A78BFA, #D946EF)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>SERVIDOR,</span><br />
          TUDO JUNTO.
        </h1>

        <p style={{
          fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
          fontWeight: 300, fontSize: '18px', color: '#9488C5',
          maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.7,
        }}>
          A Vetta é o parceiro técnico que sua empresa precisa para crescer sem travar.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '14px 32px',
            background: '#7C3AED', color: '#FAF9FF',
            fontFamily: "var(--font-body, 'Exo 2', sans-serif)", fontSize: '15px', fontWeight: 600,
            borderRadius: '8px', textDecoration: 'none',
            transition: 'background .2s, transform .15s',
          }}>
            Agendar diagnóstico gratuito
          </a>
          <a href="#servicos" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '14px 32px', color: '#A78BFA',
            fontFamily: "var(--font-body, 'Exo 2', sans-serif)", fontSize: '15px', fontWeight: 600,
            textDecoration: 'none', transition: 'color .2s',
          }}>
            Ver soluções <span>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <div style={{
          width: '1px', height: '32px',
          background: 'linear-gradient(to bottom, transparent, #5B5080)',
          animation: 'bounce 2s infinite',
        }} />
      </div>
    </section>
  )
}
