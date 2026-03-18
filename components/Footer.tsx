import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(124,58,237,0.18)',
      background: '#06041A',
      paddingTop: '64px', paddingBottom: '32px', paddingLeft: '24px', paddingRight: '24px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Logo centralizada */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Image
            src="/images/vetta-logo-violet.png"
            alt="Vetta Hub"
            width={64}
            height={64}
            style={{ mixBlendMode: 'screen', objectFit: 'contain', margin: '0 auto 16px', display: 'block' }}
          />
          <span style={{
            fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
            fontWeight: 700, fontSize: '18px', letterSpacing: '0.2em',
            background: 'linear-gradient(to right, #A78BFA, #D946EF)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            display: 'block',
          }}>VETTA HUB</span>
          <p style={{
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: '11px', color: '#5B5080', marginTop: '4px', letterSpacing: '0.06em',
          }}>TECNOLOGIA LTDA · CNPJ 65.434.389/0001-29</p>
        </div>

        {/* Links sociais */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '40px' }}>
          {[
            { label: 'Instagram', href: 'https://instagram.com/vettahub' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/samuellmiranda' },
            { label: 'GitHub', href: 'https://github.com/umdevbaiano' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
              fontSize: '14px', color: '#5B5080', textDecoration: 'none',
              transition: 'color .2s',
            }}>{l.label}</a>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(124,58,237,0.12)',
          paddingTop: '32px', display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center', gap: '16px',
        }}>
          <p style={{
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: '11px', color: '#5B5080',
          }}>© 2026 Vetta Hub Tecnologia LTDA · Jequié, BA</p>
          <p style={{
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: '11px', color: '#3A3464',
          }}>contato@vettahub.com.br</p>
        </div>
      </div>
    </footer>
  )
}
