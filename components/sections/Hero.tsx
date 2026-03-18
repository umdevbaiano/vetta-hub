export default function Hero() {
  return (
    <section id="hero">
      {/* Video de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06041A]/60 via-[#06041A]/80 to-[#06041A]" />

      {/* Radial glow no centro */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-6">
          Ecossistema Tech Completo
        </span>
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-[0.1em] text-[#FAF9FF] mb-6 leading-tight">
          DO SITE AO<br />
          <span className="bg-gradient-to-r from-[#A78BFA] to-[#D946EF] bg-clip-text text-transparent">
            SERVIDOR,
          </span>
          <br />
          TUDO JUNTO.
        </h1>
        <p className="font-body font-light text-lg text-[#9488C5] max-w-xl mb-10">
          A Vetta é o parceiro técnico que sua empresa precisa para crescer sem travar.
        </p>
        <div className="flex gap-4">
          <a
            href="https://wa.me/5573982330065"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold
                       rounded-lg transition-all duration-200 font-body"
          >
            Agendar diagnóstico
          </a>
          <a
            href="#servicos"
            className="px-8 py-3 border border-[rgba(124,58,237,0.38)] text-[#C4B5FD]
                       hover:bg-[rgba(124,58,237,0.1)] rounded-lg transition-all duration-200 font-body"
          >
            Ver soluções →
          </a>
        </div>
      </div>
    </section>
  )
}
