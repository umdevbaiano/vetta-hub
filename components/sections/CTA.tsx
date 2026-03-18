export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden py-32 px-6">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(217,70,239,0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(139,92,246,0.2) 0%, transparent 40%),
            #06041A
          `,
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-6">
          Próximo passo
        </p>
        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-[0.08em] text-[#FAF9FF] mb-6 leading-tight">
          PRONTO PARA PARAR<br />
          DE IMPROVISAR EM TI?
        </h2>
        <p className="font-body font-light text-lg text-[#9488C5] mb-10">
          Em 30 minutos você sai com clareza sobre o próximo passo tecnológico da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5573982330065"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gradient-to-r from-[#7C3AED] to-[#D946EF]
                       text-white font-semibold rounded-lg font-body text-base
                       hover:opacity-90 transition-opacity no-underline"
          >
            Quero meu diagnóstico gratuito →
          </a>
          <a
            href="mailto:contato@vettahub.com.br"
            className="px-10 py-4 border border-[rgba(124,58,237,0.38)]
                       text-[#C4B5FD] rounded-lg font-body text-base
                       hover:bg-[rgba(124,58,237,0.1)] transition-colors no-underline"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  )
}
