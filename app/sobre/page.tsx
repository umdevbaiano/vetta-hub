import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoEmblem } from '@/components/LogoEmblem'

export const metadata: Metadata = {
  title: 'Sobre — Vetta Hub',
  description: 'A curiosidade de uma criança de 6 anos virou engenharia de verdade. Conheça a história da Vetta Hub.',
}

export default function SobrePage() {
  return (
    <>
      {/* Nav simples */}
      <nav id="nav" className="sc">
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <LogoEmblem size={26} color="var(--cyan)" />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '20px', color: 'var(--text)' }}>
            Vetta<em style={{ fontStyle: 'normal', color: 'var(--cyan)' }}>.</em>
          </span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#ecossistema">Ecossistema</Link></li>
          <li><Link href="/#servicos">Serviços</Link></li>
          <li><Link href="/sobre" style={{ color: 'var(--cyan)' }}>Sobre</Link></li>
          <li><Link href="/#para-quem">Para quem</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
        </ul>
        <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" className="btn-nav">
          Falar com a Vetta
        </a>
      </nav>

      <main style={{ paddingTop: '60px' }}>

        {/* Hero da página sobre */}
        <section style={{ padding: '120px 0 80px', borderBottom: '1px solid var(--border)' }}>
          <div className="container">
            <p className="s-label" style={{ marginBottom: '24px' }}>Sobre a Vetta</p>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(42px,6vw,80px)', fontWeight: 400, letterSpacing: '-.03em', lineHeight: 1.1, maxWidth: '800px', marginBottom: '32px' }}>
              A curiosidade de uma criança de 6 anos virou{' '}
              <em style={{ color: 'var(--cyan)' }}>engenharia de verdade.</em>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--muted2)', maxWidth: '600px', lineHeight: 1.75 }}>
              Sediada em Jequié, BA — com alcance nacional.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '60px 0', borderBottom: '1px solid var(--border)', background: 'var(--bg2)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
              {[
                { val: '7+', label: 'anos no mercado' },
                { val: '100+', label: 'clientes atendidos' },
                { val: '5', label: 'camadas de solução' },
                { val: '2017', label: 'fundação' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, letterSpacing: '-.03em', color: 'var(--cyan)', marginBottom: '8px' }}>{val}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* História */}
        <section style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                <p className="s-label" style={{ marginBottom: '16px' }}>A origem</p>
                <h2 className="st">De dentro<br />da <em>tecnologia.</em></h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  {
                    year: '6 anos',
                    text: 'Entre as peças de uma loja de informática do pai em Jequié, BA. O cheiro de hardware, os cabos, os monitores CRT — não era curiosidade de criança. Era o início de uma linguagem.'
                  },
                  {
                    year: '8 anos',
                    text: 'Primeiras linhas de Python. Não por obrigação escolar — por necessidade de entender como as coisas funcionam por dentro. A lógica sempre fez mais sentido que a memorização.'
                  },
                  {
                    year: 'IFBA',
                    text: 'Técnico em Informática. A base formal chegou, mas o que formou mesmo foi a prática paralela: redes, servidores, automação. A escola confirmou o que a vida já ensinava.'
                  },
                  {
                    year: 'NOC',
                    text: 'Operações de rede em tempo real. Monitoramento 24/7, incidentes às 3h da manhã, a responsabilidade de sistemas que não podem cair. Aqui nasceu a obsessão por infraestrutura.'
                  },
                  {
                    year: '2017 — Vetta',
                    text: 'Cada etapa anterior foi construindo uma visão única: tecnologia séria não é sobre ferramentas, é sobre responsabilidade. A Vetta nasce para ser o parceiro que o mercado não tem — integrado, honesto e presente.'
                  },
                ].map(({ year, text }) => (
                  <div key={year} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--amber)', letterSpacing: '.08em', textTransform: 'uppercase', paddingTop: '4px' }}>{year}</div>
                    <p style={{ color: 'var(--muted2)', lineHeight: 1.75 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Posicionamento */}
        <section style={{ padding: '100px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <p className="s-label" style={{ marginBottom: '32px', justifyContent: 'center', display: 'flex' }}>Posicionamento</p>
            <blockquote style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(24px,3.5vw,44px)',
              fontWeight: 400,
              lineHeight: 1.3,
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 48px',
              color: 'var(--text)',
              letterSpacing: '-.02em',
            }}>
              &ldquo;Tecnologia séria não depende de onde você está —<br />
              depende de <em style={{ color: 'var(--cyan)' }}>como você pensa.</em>&rdquo;
            </blockquote>
            <p style={{ textAlign: 'center', color: 'var(--muted2)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
              O que a Vetta oferece não é um serviço pontual. É um ecossistema pensado para ser o único parceiro tech que uma empresa precisa — do primeiro site até a infraestrutura que sustenta o crescimento. Tudo integrado, tudo com responsabilidade.
            </p>
          </div>
        </section>

        {/* CTA de retorno */}
        <section style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <p style={{ color: 'var(--muted2)', marginBottom: '24px' }}>Pronto para ter um parceiro técnico de verdade?</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendar diagnóstico gratuito
              </a>
              <Link href="/" className="btn-ghost" style={{ color: 'var(--amber)' }}>
                ← Voltar ao site
              </Link>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="container">
          <div className="ft">
            <Link href="/" className="f-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'var(--text)' }}>
              <LogoEmblem size={18} color="var(--cyan)" />
              Vetta<em style={{ fontStyle: 'normal', color: 'var(--cyan)' }}>.</em>
            </Link>
            <span className="f-copy">© 2025 VettaHub Tecnologia · Jequié, BA</span>
            <div className="f-links">
              <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://instagram.com/vettahub" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="mailto:contato@vettahub.com.br">E-mail</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
