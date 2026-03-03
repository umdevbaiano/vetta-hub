import Link from 'next/link'
import { LogoEmblem } from './LogoEmblem'

export default function Nav() {
  return (
    <nav id="nav">
      <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <LogoEmblem size={26} color="var(--cyan)" />
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '20px', color: 'var(--text)' }}>
          Vetta<em style={{ fontStyle: 'normal', color: 'var(--cyan)' }}>.</em>
        </span>
      </Link>
      <ul className="nav-links">
        <li><a href="#ecossistema">Ecossistema</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><a href="#para-quem">Para quem</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer" className="btn-nav">
        Falar com a Vetta
      </a>
    </nav>
  )
}
