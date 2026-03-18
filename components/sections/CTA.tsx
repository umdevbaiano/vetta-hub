export default function CTA() {
  return (
    <section id="contato" className="section-fade-void py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-6">Próximo passo</p>
        <h2 className="font-display font-bold text-[clamp(28px,5vw,62px)] tracking-[0.06em] text-[#FAF9FF] leading-tight mb-6">
          PRONTO PARA PARAR<br />DE IMPROVISAR EM <span className="text-[#A78BFA]">TI?</span>
        </h2>
        <p className="font-body font-light text-lg text-[#9488C5] max-w-xl mx-auto mb-12 leading-relaxed">
          Em 30 minutos você sai com clareza sobre o próximo passo tecnológico da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="px-8 py-4 bg-[#7C3AED] hover:bg-[#8B5CF6] text-[#FAF9FF] font-body font-semibold rounded-lg transition-all duration-200 text-base no-underline">
            Quero meu diagnóstico gratuito →
          </a>
          <a href="mailto:contato@vettahub.com.br"
             className="px-8 py-4 border border-[rgba(124,58,237,0.38)] text-[#C4B5FD] font-body font-semibold rounded-lg hover:bg-[rgba(124,58,237,0.08)] hover:border-[#7C3AED] transition-all duration-200 text-base no-underline">
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  )
}
