import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(124,58,237,0.18)] bg-[#06041A] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo centralizada */}
        <div className="text-center mb-12">
          <Image
            src="/images/vetta-logo-violet.png"
            alt="Vetta Hub"
            width={64}
            height={64}
            style={{ mixBlendMode: 'screen' }}
            className="object-contain mx-auto mb-4"
          />
          <span className="font-display font-bold text-lg tracking-[0.2em] bg-gradient-to-r from-[#A78BFA] to-[#D946EF] bg-clip-text text-transparent block">
            VETTA HUB
          </span>
          <p className="font-mono text-xs text-[#5B5080] mt-1 tracking-wider">
            TECNOLOGIA LTDA · CNPJ 65.434.389/0001-29
          </p>
        </div>

        {/* Links sociais */}
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://instagram.com/vettahub" target="_blank" rel="noopener noreferrer"
             className="font-body text-sm text-[#5B5080] hover:text-[#A78BFA] transition-colors no-underline">
            Instagram
          </a>
          <a href="https://linkedin.com/in/samuellmiranda" target="_blank" rel="noopener noreferrer"
             className="font-body text-sm text-[#5B5080] hover:text-[#A78BFA] transition-colors no-underline">
            LinkedIn
          </a>
          <a href="https://github.com/umdevbaiano" target="_blank" rel="noopener noreferrer"
             className="font-body text-sm text-[#5B5080] hover:text-[#A78BFA] transition-colors no-underline">
            GitHub
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(124,58,237,0.12)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-[#5B5080]">
            © 2026 Vetta Hub Tecnologia LTDA · Jequié, BA
          </p>
          <p className="font-mono text-xs text-[#3A3464]">
            contato@vettahub.com.br
          </p>
        </div>
      </div>
    </footer>
  )
}
