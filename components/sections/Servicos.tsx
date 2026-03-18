export default function Servicos() {
  return (
    <section id="servicos" className="section-fade-surface py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-4">Soluções</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[0.08em] text-[#FAF9FF]">
            O QUE A VETTA <span className="text-[#A78BFA]">ENTREGA?</span>
          </h2>
        </div>

        {/* Bento grid — 12 colunas */}
        <div className="grid grid-cols-12 gap-4">

          {/* Card grande — Software Sob Medida — 8 colunas */}
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="col-span-12 lg:col-span-8 group relative bg-[#151130] border border-[rgba(124,58,237,0.18)] rounded-2xl p-8 overflow-hidden min-h-[280px] hover:border-[rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.1)] transition-all duration-300 cursor-pointer no-underline">
            <span className="absolute -bottom-4 -right-2 font-display font-bold text-[120px] text-[rgba(124,58,237,0.05)] select-none leading-none">01</span>
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background:'radial-gradient(ellipse at top left, rgba(124,58,237,0.08) 0%, transparent 60%)'}} />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl tracking-wider text-[#FAF9FF] mb-3">SOFTWARE SOB MEDIDA</h3>
              <p className="font-body font-light text-[#9488C5] leading-relaxed max-w-md">
                ERPs, portais, automações e sistemas internos construídos para a sua regra de negócio. Nenhum template, zero gambiarra.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#A78BFA] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Quero um orçamento</span><span>→</span>
              </div>
            </div>
          </a>

          {/* Card pequeno — Infraestrutura — 4 colunas */}
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="col-span-12 lg:col-span-4 group relative bg-[#151130] border border-[rgba(124,58,237,0.18)] rounded-2xl p-8 overflow-hidden hover:border-[rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.1)] transition-all duration-300 cursor-pointer no-underline">
            <span className="absolute -bottom-4 -right-2 font-display font-bold text-[120px] text-[rgba(124,58,237,0.05)] select-none leading-none">04</span>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="4" rx="1"/><rect x="2" y="10" width="20" height="4" rx="1"/><rect x="2" y="17" width="20" height="4" rx="1"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl tracking-wider text-[#FAF9FF] mb-3">INFRAESTRUTURA & NOC</h3>
              <p className="font-body font-light text-[#9488C5] leading-relaxed">Servidores, redes e monitoramento 24/7.</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  <div className="relative rounded-full w-2 h-2 bg-green-400" />
                </div>
                <span className="font-mono text-xs text-green-400 tracking-wider">OPERACIONAL</span>
              </div>
            </div>
          </a>

          {/* Card médio — Sites — 4 colunas */}
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="col-span-12 lg:col-span-4 group relative bg-[#151130] border border-[rgba(124,58,237,0.18)] rounded-2xl p-8 overflow-hidden hover:border-[rgba(124,58,237,0.4)] transition-all duration-300 cursor-pointer no-underline">
            <span className="absolute -bottom-4 -right-2 font-display font-bold text-[120px] text-[rgba(124,58,237,0.05)] select-none leading-none">02</span>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl tracking-wider text-[#FAF9FF] mb-3">SITES & LANDING PAGES</h3>
              <p className="font-body font-light text-[#9488C5] leading-relaxed">Presença digital que representa sua empresa de verdade.</p>
            </div>
          </a>

          {/* Card médio — White Label — 4 colunas */}
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="col-span-12 lg:col-span-4 group relative bg-[#151130] border border-[rgba(124,58,237,0.18)] rounded-2xl p-8 overflow-hidden hover:border-[rgba(124,58,237,0.4)] transition-all duration-300 cursor-pointer no-underline">
            <span className="absolute -bottom-4 -right-2 font-display font-bold text-[120px] text-[rgba(124,58,237,0.05)] select-none leading-none">03</span>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl tracking-wider text-[#FAF9FF] mb-3">WHITE LABEL</h3>
              <p className="font-body font-light text-[#9488C5] leading-relaxed">Você vende, nós desenvolvemos — sob sua marca.</p>
            </div>
          </a>

          {/* Card médio — Consultoria — 4 colunas */}
          <a href="https://wa.me/5573982330065" target="_blank" rel="noopener noreferrer"
             className="col-span-12 lg:col-span-4 group relative bg-[#151130] border border-[rgba(124,58,237,0.18)] rounded-2xl p-8 overflow-hidden hover:border-[rgba(124,58,237,0.4)] transition-all duration-300 cursor-pointer no-underline">
            <span className="absolute -bottom-4 -right-2 font-display font-bold text-[120px] text-[rgba(124,58,237,0.05)] select-none leading-none">05</span>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#D946EF] flex items-center justify-center mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl tracking-wider text-[#FAF9FF] mb-3">CONSULTORIA</h3>
              <p className="font-body font-light text-[#9488C5] leading-relaxed">Diagnóstico honesto. Plano de ação claro. Sem PowerPoint.</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
