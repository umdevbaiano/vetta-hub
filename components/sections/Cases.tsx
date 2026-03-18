'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Cases() {
  const pill = (t: string) => (
    <span key={t} style={{
      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
      fontSize: '11px', padding: '5px 10px', borderRadius: '4px',
      background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
      color: '#C4B5FD',
    }}>{t}</span>
  )

  return (
    <section id="cases" style={{
      padding: '120px 24px',
      background: 'linear-gradient(to bottom, #151130, #06041A)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#D946EF', marginBottom: '16px',
          }}>Resultados Reais</p>
          <h2 style={{
            fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
            fontWeight: 700, fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '0.08em', color: '#FAF9FF',
          }}>
            CASES QUE <span style={{ color: '#A78BFA' }}>ENTREGAMOS.</span>
          </h2>
        </div>

        {/* Case 1 — NF-e */}
        <div className="case-row r" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
          alignItems: 'center', paddingBottom: '80px',
          borderBottom: '1px solid rgba(124,58,237,0.12)',
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#D946EF', border: '1px solid rgba(217,70,239,0.3)',
              padding: '4px 12px', borderRadius: '4px', display: 'inline-block',
              marginBottom: '24px',
            }}>
              Cliente externo · Entregue
            </span>
            <h3 style={{
              fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
              fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)',
              letterSpacing: '0.06em', color: '#FAF9FF',
              marginBottom: '20px', lineHeight: 1.15,
            }}>EMISSOR NF-E AUTOMATIZADO</h3>
            <p style={{
              fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
              fontWeight: 300, fontSize: '16px', color: '#9488C5',
              lineHeight: 1.7, marginBottom: '32px',
            }}>
              Sistema completo de emissão de notas fiscais integrado ao ERP do cliente.
              Redução de 90% no tempo de emissão com validação automática junto à SEFAZ,
              geração de DANFE e gestão de certificados digitais A1/A3.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Python','FastAPI','PostgreSQL','Redis','Docker','C#','.NET','Java','Spring Boot'].map(pill)}
            </div>
          </div>

          {/* Terminal */}
          <div style={{
            background: '#0D0A28', borderRadius: '16px',
            border: '1px solid rgba(124,58,237,0.2)',
            padding: '24px', boxShadow: '0 0 80px rgba(124,58,237,0.08)',
          }}>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '13px', lineHeight: 1.8, position: 'relative'
            }}>
              <TerminalContent />
            </div>
          </div>
        </div>

        {/* Case 2 — Insane App (invertido) */}
        <div className="case-row case-row-reverse r" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px',
          alignItems: 'center', paddingTop: '80px',
        }}>
          {/* Dashboard */}
          <div style={{
            background: '#0D0A28', borderRadius: '16px',
            border: '1px solid rgba(124,58,237,0.2)',
            padding: '24px', boxShadow: '0 0 80px rgba(124,58,237,0.08)',
          }}>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '11px', color: '#5B5080', marginBottom: '12px',
            }}>insane.app — dashboard</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
              {[
                { val: '2.4k', label: 'USUÁRIOS', color: '#A78BFA' },
                { val: '380', label: 'TREINOS/DIA', color: '#D946EF' },
                { val: '99.9%', label: 'UPTIME', color: '#28c840' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'rgba(124,58,237,0.12)', borderRadius: '8px',
                  padding: '12px', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
                    fontWeight: 700, fontSize: '18px', color: s.color,
                  }}>{s.val}</div>
                  <div style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: '9px', color: '#5B5080', marginTop: '4px',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '48px' }}>
              {[40,65,45,80,55,90,70,85,60,75,50,95,65,80,70].map((h, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: '2px', background: '#7C3AED',
                  height: `${h}%`, opacity: 0.5 + (i / 30),
                }} />
              ))}
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', marginTop: '8px',
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '9px', color: '#5B5080',
            }}>
              <span>1 Mar</span><span>Hoje</span>
            </div>
          </div>

          {/* Texto */}
          <div>
            <span style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#D946EF', border: '1px solid rgba(217,70,239,0.3)',
              padding: '4px 12px', borderRadius: '4px', display: 'inline-block',
              marginBottom: '24px',
            }}>
              Cliente externo · Em desenvolvimento ativo
            </span>
            <h3 style={{
              fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
              fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)',
              letterSpacing: '0.06em', color: '#FAF9FF',
              marginBottom: '20px', lineHeight: 1.15,
            }}>INSANE APP</h3>
            <p style={{
              fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
              fontWeight: 300, fontSize: '16px', color: '#9488C5',
              lineHeight: 1.7, marginBottom: '32px',
            }}>
              Rede social e plataforma de acompanhamento de treinos focada em comunidade fitness.
              Backend completo com feed social, sistema de autenticação, tracking de treinos,
              perfis de atletas e integração com app mobile. Arquitetura orientada a performance
              com cache distribuído para suportar crescimento acelerado de usuários.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['React Native','Node.js','TypeScript','Python','PostgreSQL','MongoDB','Redis','Docker'].map(pill)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalContent() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step === 0) setStep(1)
      },
      { threshold: 0.5 }
    )
    const tel = document.getElementById('terminal-trigger')
    if (tel) observer.observe(tel)
    return () => observer.disconnect()
  }, [step])

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 600)
      return () => clearTimeout(t)
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 800)
      return () => clearTimeout(t)
    }
    if (step === 3) {
      // Loop the animation
      const t = setTimeout(() => setStep(0), 4000)
      return () => clearTimeout(t)
    }
  }, [step])

  return (
    <div id="terminal-trigger" style={{ minHeight: '160px' }}>
      {step >= 1 && (
        <div className="typing-line">
          <span style={{ color: '#D946EF' }}>POST</span>{' '}
          <span style={{ color: '#FAF9FF' }}>/api/nfe/emitir</span>
        </div>
      )}
      
      {step >= 2 && (
        <>
          <div style={{ color: '#5B5080' }}>{'{'}</div>
          <div style={{ color: '#5B5080', paddingLeft: '16px' }}>&quot;cnpj&quot;: <span style={{ color: '#A78BFA' }}>&quot;65.434.389/0001-29&quot;</span>,</div>
          <div style={{ color: '#5B5080', paddingLeft: '16px' }}>&quot;valor&quot;: <span style={{ color: '#A78BFA' }}>3000.00</span>,</div>
          <div style={{ color: '#5B5080', paddingLeft: '16px' }}>&quot;status&quot;: <span style={{ color: '#28c840' }}>&quot;AUTORIZADA&quot;</span></div>
          <div style={{ color: '#5B5080' }}>{'}'}</div>
        </>
      )}

      {step >= 3 && (
        <div className="fade-in">
          <div style={{ marginTop: '12px', color: '#28c840' }}>✓ NF-e 000.001.234 emitida com sucesso</div>
          <div style={{ color: '#5B5080', fontSize: '11px' }}>Tempo de resposta: <span style={{ color: '#A78BFA' }}>312ms</span></div>
        </div>
      )}

      {/* Typing cursor */}
      {step < 3 && (
        <div style={{
          display: 'inline-block',
          width: '8px', height: '14px',
          background: '#FAF9FF',
          marginLeft: '4px',
          animation: 'blink 1s step-end infinite',
          verticalAlign: 'middle',
        }} />
      )}
      
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .typing-line {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid transparent;
          width: 0;
          animation: typing 0.5s steps(30, end) forwards;
        }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        .fade-in { animation: fadeIn 0.4s ease-in forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  )
}
