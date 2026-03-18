export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-[#06041A]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-4 block">
            Resultados Reais
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-[0.08em] text-[#FAF9FF] uppercase">
            CASES QUE <span className="bg-gradient-to-r from-[#A78BFA] to-[#D946EF] bg-clip-text text-transparent">ENTREGAMOS</span>
          </h2>
        </div>

        {/* Case 1 — NF-e */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <span className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-[#D946EF] border border-[rgba(217,70,239,0.3)] px-3 py-1 rounded-full mb-4">
              Cliente externo
            </span>
            <h3 className="font-display font-bold text-2xl tracking-wider text-[#FAF9FF] mb-4 uppercase">
              EMISSOR NF-E AUTOMATIZADO
            </h3>
            <p className="font-body font-light text-[#9488C5] leading-relaxed mb-6">
              Sistema de emissão de notas fiscais integrado ao ERP do cliente. Redução de 90% no tempo
              de emissão com validação automática junto à SEFAZ.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 border border-[rgba(124,58,237,0.25)] rounded-md text-[#9488C5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="bg-[#0D0A28] rounded-lg border border-[rgba(124,58,237,0.18)] font-mono text-xs p-4 min-h-[180px]">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="text-[#9488C5]">
              <span className="text-[#D946EF]">POST</span> /api/nfe/emitir
            </div>
            <div className="text-[#5B5080] mt-1">{'{'}</div>
            <div className="text-[#5B5080] ml-4">
              &quot;cnpj&quot;: <span className="text-[#A78BFA]">&quot;65.434.389/0001-29&quot;</span>,
            </div>
            <div className="text-[#5B5080] ml-4">
              &quot;valor&quot;: <span className="text-[#A78BFA]">3000.00</span>,
            </div>
            <div className="text-[#5B5080] ml-4">
              &quot;status&quot;: <span className="text-[#28c840]">&quot;AUTORIZADA&quot;</span>
            </div>
            <div className="text-[#5B5080]">{'}'}</div>
            <div className="mt-2 text-[#28c840]">✓ NF-e 000.001.234 emitida com sucesso</div>
          </div>
        </div>

        {/* Case 2 — Portal/Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Dashboard mockup */}
          <div className="order-2 lg:order-1 bg-[#0D0A28] rounded-lg border border-[rgba(124,58,237,0.18)] font-mono text-xs p-4 min-h-[180px]">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex gap-3 mb-3">
              <div className="flex-1 bg-[#151130] rounded p-2 border border-[rgba(124,58,237,0.12)]">
                <div className="text-[#5B5080] text-[10px] uppercase tracking-wider mb-1">Projetos Ativos</div>
                <div className="text-[#7C3AED] text-lg font-bold">12</div>
              </div>
              <div className="flex-1 bg-[#151130] rounded p-2 border border-[rgba(124,58,237,0.12)]">
                <div className="text-[#5B5080] text-[10px] uppercase tracking-wider mb-1">Uptime</div>
                <div className="text-[#FAF9FF] text-lg font-bold">99.9%</div>
              </div>
              <div className="flex-1 bg-[#151130] rounded p-2 border border-[rgba(124,58,237,0.12)]">
                <div className="text-[#5B5080] text-[10px] uppercase tracking-wider mb-1">No prazo</div>
                <div className="text-[#D946EF] text-lg font-bold">100%</div>
              </div>
            </div>
            <div className="bg-[#151130] rounded p-2 border border-[rgba(124,58,237,0.12)] flex items-end gap-1 h-12">
              {[40, 55, 70, 50, 90, 65, 100, 75, 60, 85, 45, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: h >= 80 ? '#7C3AED' : 'rgba(124,58,237,0.3)',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-[#D946EF] border border-[rgba(217,70,239,0.3)] px-3 py-1 rounded-full mb-4">
              Cliente externo
            </span>
            <h3 className="font-display font-bold text-2xl tracking-wider text-[#FAF9FF] mb-4 uppercase">
              PORTAL DE GESTÃO INTEGRADO
            </h3>
            <p className="font-body font-light text-[#9488C5] leading-relaxed mb-6">
              Dashboard completo para gestão de projetos e acompanhamento em tempo real.
              Integração com múltiplos serviços via API REST.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 border border-[rgba(124,58,237,0.25)] rounded-md text-[#9488C5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
