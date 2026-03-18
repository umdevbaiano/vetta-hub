export default function Cases() {
  return (
    <section id="cases" className="section-fade-void py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-4">Resultados Reais</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[0.08em] text-[#FAF9FF]">
            CASES QUE <span className="text-[#A78BFA]">ENTREGAMOS.</span>
          </h2>
        </div>

        {/* Case 1 — NF-e (texto esquerda, terminal direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 border-b border-[rgba(124,58,237,0.12)]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] border border-[rgba(217,70,239,0.3)] px-3 py-1 rounded inline-block mb-6">
              Cliente externo · Entregue
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-wider text-[#FAF9FF] mb-5 leading-tight">
              EMISSOR NF-E AUTOMATIZADO
            </h3>
            <p className="font-body font-light text-[#9488C5] leading-relaxed mb-8 text-lg">
              Sistema completo de emissão de notas fiscais integrado ao ERP do cliente.
              Redução de 90% no tempo de emissão com validação automática junto à SEFAZ,
              geração de DANFE e gestão de certificados digitais A1/A3.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python','FastAPI','PostgreSQL','Redis','Docker','C#','.NET','Java','Spring Boot'].map(t => (
                <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] text-[#C4B5FD]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="bg-[#0D0A28] rounded-2xl border border-[rgba(124,58,237,0.2)] p-6 shadow-[0_0_80px_rgba(124,58,237,0.08)]">
            <div className="flex gap-1.5 mb-5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="font-mono text-sm space-y-1">
              <p className="text-[#9488C5]">
                <span className="text-[#D946EF]">POST</span>
                <span className="text-[#FAF9FF]"> /api/nfe/emitir</span>
              </p>
              <p className="text-[#5B5080]">{'{'}</p>
              <p className="text-[#5B5080] ml-4">&quot;cnpj&quot;: <span className="text-[#A78BFA]">&quot;65.434.389/0001-29&quot;</span>,</p>
              <p className="text-[#5B5080] ml-4">&quot;valor&quot;: <span className="text-[#A78BFA]">3000.00</span>,</p>
              <p className="text-[#5B5080] ml-4">&quot;status&quot;: <span className="text-[#28c840]">&quot;AUTORIZADA&quot;</span></p>
              <p className="text-[#5B5080]">{'}'}</p>
              <p className="mt-3 text-[#28c840]">✓ NF-e 000.001.234 emitida com sucesso</p>
              <p className="text-[#5B5080] text-xs">Tempo de resposta: <span className="text-[#A78BFA]">312ms</span></p>
            </div>
          </div>
        </div>

        {/* Case 2 — Insane App (visual esquerda, texto direita — INVERTIDO) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
          {/* Dashboard mockup fitness */}
          <div className="bg-[#0D0A28] rounded-2xl border border-[rgba(124,58,237,0.2)] p-6 shadow-[0_0_80px_rgba(124,58,237,0.08)] order-2 lg:order-1">
            <div className="flex gap-1.5 mb-5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="font-mono text-xs text-[#5B5080] mb-3">insane.app — dashboard</div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-[rgba(124,58,237,0.12)] rounded-lg p-3 text-center">
                <div className="text-[#A78BFA] font-display font-bold text-xl">2.4k</div>
                <div className="text-[#5B5080] font-mono text-[10px] mt-1">USUÁRIOS</div>
              </div>
              <div className="bg-[rgba(124,58,237,0.12)] rounded-lg p-3 text-center">
                <div className="text-[#D946EF] font-display font-bold text-xl">380</div>
                <div className="text-[#5B5080] font-mono text-[10px] mt-1">TREINOS/DIA</div>
              </div>
              <div className="bg-[rgba(124,58,237,0.12)] rounded-lg p-3 text-center">
                <div className="text-[#28c840] font-display font-bold text-xl">99.9%</div>
                <div className="text-[#5B5080] font-mono text-[10px] mt-1">UPTIME</div>
              </div>
            </div>
            <div className="flex items-end gap-1 h-16">
              {[40,65,45,80,55,90,70,85,60,75,50,95,65,80,70].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#7C3AED]" style={{height:`${h}%`,opacity:0.6+i*0.02}} />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[10px] text-[#5B5080]">
              <span>1 Mar</span><span>Hoje</span>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] border border-[rgba(217,70,239,0.3)] px-3 py-1 rounded inline-block mb-6">
              Cliente externo · Em desenvolvimento ativo
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl tracking-wider text-[#FAF9FF] mb-5 leading-tight">
              INSANE APP
            </h3>
            <p className="font-body font-light text-[#9488C5] leading-relaxed mb-8 text-lg">
              Rede social e plataforma de acompanhamento de treinos focada em comunidade fitness.
              Backend completo com feed social, sistema de autenticação, tracking de treinos,
              perfis de atletas e integração com app mobile. Arquitetura orientada a performance
              com cache distribuído para suportar crescimento acelerado de usuários.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React Native','Node.js','TypeScript','Python','PostgreSQL','MongoDB','Redis','Docker'].map(t => (
                <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] text-[#C4B5FD]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
