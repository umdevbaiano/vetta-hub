import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav id="nav" className="fixed top-0 left-0 right-0 z-[200] px-6 md:px-10 h-16 flex items-center justify-between transition-all duration-400">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image
          src="/images/vetta-logo-white.png"
          alt="Vetta Hub"
          width={36}
          height={36}
          priority
          style={{ mixBlendMode: 'screen' }}
          className="object-contain"
        />
        <span className="font-display font-bold text-sm tracking-[0.16em] bg-gradient-to-r from-[#A78BFA] to-[#D946EF] bg-clip-text text-transparent">
          VETTA
        </span>
      </Link>
      <ul className="nav-links hidden md:flex gap-9 list-none">
        <li><a href="#ecossistema" className="text-[13px] font-body text-[#9488C5] no-underline hover:text-[#FAF9FF] transition-colors">Ecossistema</a></li>
        <li><a href="#servicos" className="text-[13px] font-body text-[#9488C5] no-underline hover:text-[#FAF9FF] transition-colors">Serviços</a></li>
        <li><Link href="/sobre" className="text-[13px] font-body text-[#9488C5] no-underline hover:text-[#FAF9FF] transition-colors">Sobre</Link></li>
        <li><a href="#para-quem" className="text-[13px] font-body text-[#9488C5] no-underline hover:text-[#FAF9FF] transition-colors">Para quem</a></li>
        <li><a href="#faq" className="text-[13px] font-body text-[#9488C5] no-underline hover:text-[#FAF9FF] transition-colors">FAQ</a></li>
      </ul>
      <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
         className="text-[13px] font-medium text-white bg-[#7C3AED] border-none px-5 py-2 rounded-md no-underline hover:bg-[#8B5CF6] transition-colors font-body">
        Falar com a Vetta
      </a>
    </nav>
  )
}
