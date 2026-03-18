import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ft">
          <Link href="/" className="f-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <Image src="/logo-purple.png" alt="Vetta" width={22} height={22} />
            <span>Vetta<em style={{ fontStyle: 'normal', color: 'var(--v600)' }}>.</em></span>
          </Link>
          <span className="f-copy">© 2026 VettaHub Tecnologia · Jequié, BA</span>
          <div className="f-links">
            <a href="https://www.linkedin.com/in/samuellmiranda" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/umdevbaiano" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
