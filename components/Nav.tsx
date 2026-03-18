import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav id="nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      padding: '0 clamp(16px, 3vw, 40px)', height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all .4s',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <Image
          src="/images/vetta-logo-white.png"
          alt="Vetta Hub"
          width={36}
          height={36}
          priority
          style={{ mixBlendMode: 'screen', objectFit: 'contain' }}
        />
        <span style={{
          fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
          fontWeight: 700, fontSize: '14px', letterSpacing: '0.16em',
          background: 'linear-gradient(to right, #A78BFA, #D946EF)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>VETTA</span>
      </Link>
      <ul className="nav-links" style={{
        display: 'flex', gap: '36px', listStyle: 'none',
      }}>
        {[
          { label: 'Ecossistema', href: '#ecossistema' },
          { label: 'Serviços', href: '#servicos' },
          { label: 'Sobre', href: '/sobre', isLink: true },
          { label: 'Para quem', href: '#para-quem' },
          { label: 'FAQ', href: '#faq' },
        ].map(item => (
          <li key={item.label}>
            {item.isLink ? (
              <Link href={item.href} style={{
                fontSize: '13px', fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
                color: '#9488C5', textDecoration: 'none', transition: 'color .2s',
              }}>{item.label}</Link>
            ) : (
              <a href={item.href} style={{
                fontSize: '13px', fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
                color: '#9488C5', textDecoration: 'none', transition: 'color .2s',
              }}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
      <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" style={{
        fontSize: '13px', fontWeight: 500,
        fontFamily: "var(--font-body, 'Exo 2', sans-serif)",
        color: 'white', background: '#7C3AED',
        padding: '8px 20px', borderRadius: '6px',
        border: 'none', textDecoration: 'none',
        transition: 'background .2s',
      }}>Falar com a Vetta</a>
    </nav>
  )
}
