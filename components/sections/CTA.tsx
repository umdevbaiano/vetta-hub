import React from 'react'
import Image from 'next/image'

export default function CTA() {
  return (
    <section id="contato" style={{
      padding: '160px 24px',
      background: 'linear-gradient(to bottom, #151130, #06041A)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glowing orb image */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '800px',
        opacity: 0.25,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        zIndex: 0
      }}>
        <Image 
          src="/images/premium_network_orb.png" 
          alt="Abstract tech orb" 
          fill 
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="r" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
          fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#D946EF', marginBottom: '24px',
        }}>Próximo passo</p>
        <h2 style={{
          fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
          fontWeight: 700, fontSize: 'clamp(24px, 5vw, 56px)',
          letterSpacing: '0.06em', color: '#FAF9FF',
          lineHeight: 1.1, marginBottom: '24px',
        }}>
          PRONTO PARA PARAR<br />DE IMPROVISAR EM <span style={{ color: '#A78BFA' }}>TI?</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
          fontWeight: 300, fontSize: '16px', color: '#9488C5',
          maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.7,
        }}>
          Em 30 minutos você sai com clareza sobre o próximo passo tecnológico da sua empresa.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', padding: '16px 32px',
            background: '#7C3AED', color: '#FAF9FF',
            fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
            fontSize: '15px', fontWeight: 600,
            borderRadius: '8px', textDecoration: 'none',
            transition: 'background .2s',
          }}>Quero meu diagnóstico gratuito →</a>
          <a href="mailto:contato@vettahub.com.br" style={{
            display: 'inline-block', padding: '16px 32px',
            border: '1px solid rgba(124,58,237,0.38)', color: '#C4B5FD',
            fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
            fontSize: '15px', fontWeight: 600,
            borderRadius: '8px', textDecoration: 'none',
            transition: 'background .2s, border-color .2s',
          }}>Enviar e-mail</a>
        </div>
      </div>
    </section>
  )
}
