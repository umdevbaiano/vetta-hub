import Link from 'next/link'
import { LogoEmblem } from './LogoEmblem'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ft">
          <Link href="/" className="f-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LogoEmblem size={18} color="var(--v600)" />
            Vetta<em style={{ fontStyle: 'normal', color: 'var(--v600)' }}>.</em>
          </Link>
          <span className="f-copy">© 2025 VettaHub Tecnologia · Jequié, BA</span>
          <div className="f-links">
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
