import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay muted loop playsInline preload="none" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
      >
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradiente */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 60% at 50% 40%, rgba(124,58,237,0.2) 0%, transparent 70%),
          linear-gradient(to bottom, #06041A44 0%, #06041A 100%)
        `
      }} />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#D946EF] mb-8">
          Ecossistema Tech Completo
        </p>

        <h1 className="font-display font-bold leading-none tracking-[0.06em] text-[clamp(48px,8vw,96px)] text-[#FAF9FF] mb-6">
          DO SITE AO<br />
          <span className="bg-gradient-to-r from-[#A78BFA] to-[#D946EF] bg-clip-text text-transparent">
            SERVIDOR,
          </span><br />
          TUDO JUNTO.
        </h1>

        <p className="font-body font-light text-xl text-[#9488C5] max-w-2xl mx-auto mb-12 leading-relaxed">
          A Vetta é o parceiro técnico que sua empresa precisa para crescer sem travar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#8B5CF6] text-[#FAF9FF] font-body font-semibold rounded-lg transition-all duration-200 text-base">
            Agendar diagnóstico gratuito
          </a>
          <a href="#servicos"
             className="px-8 py-3.5 text-[#A78BFA] font-body font-semibold hover:text-[#FAF9FF] transition-colors duration-200 text-base flex items-center gap-2">
            Ver soluções <span>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#5B5080]" />
      </div>
    </section>
  )
}
