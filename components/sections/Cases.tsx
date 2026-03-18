'use client'

export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-[#0D0A28]">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden
                       border border-[rgba(124,58,237,0.18)]
                       hover:border-[rgba(124,58,237,0.35)] transition-all duration-500
                       mb-10">
          {/* Lado texto */}
          <div className="bg-[#151130] p-10 flex flex-col justify-center">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase
                           text-[#D946EF] border border-[rgba(217,70,239,0.3)]
                           px-3 py-1 rounded w-fit mb-5">
              Cliente externo
            </span>
            <h3 className="font-display font-bold text-2xl tracking-wider
                         text-[#FAF9FF] mb-4">
              EMISSOR NF-E AUTOMATIZADO
            </h3>
            <p className="font-body font-light text-sm text-[#9488C5] leading-relaxed mb-6">
              Sistema de emissão de notas fiscais integrado ao ERP do cliente.
              Redução de 90% no tempo de emissão com validação automática junto à SEFAZ.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'].map(t => (
                <span key={t}
                  className="font-mono text-[10px] px-3 py-1 rounded
                           bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)]
                           text-[#A78BFA]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Lado mockup — terminal */}
          <div className="bg-[#0D0A28] p-8 flex items-center justify-center
                        border-l border-[rgba(124,58,237,0.1)]">
            <div className="w-full max-w-sm bg-[#06041A] rounded-xl border
                         border-[rgba(124,58,237,0.18)] font-mono text-xs p-5">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="space-y-1 text-[11px]">
                <div>
                  <span className="text-[#D946EF]">POST</span>
                  <span className="text-[#9488C5]"> /api/nfe/emitir</span>
                </div>
                <div className="text-[#5B5080]">{'{'}</div>
                <div className="ml-4 text-[#5B5080]">
                  &quot;cnpj&quot;: <span className="text-[#A78BFA]">&quot;65.434.389/0001-29&quot;</span>,
                </div>
                <div className="ml-4 text-[#5B5080]">
                  &quot;valor&quot;: <span className="text-[#A78BFA]">3000.00</span>,
                </div>
                <div className="ml-4 text-[#5B5080]">
                  &quot;status&quot;: <span className="text-[#28c840]">&quot;AUTORIZADA&quot;</span>
                </div>
                <div className="text-[#5B5080]">{'}'}</div>
                <div className="mt-3 text-[#28c840] flex items-center gap-2">
                  <span className="animate-pulse">✓</span>
                  <span>NF-e 000.001.234 emitida com sucesso</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 2 — Insane App (mockup à esquerda, texto à direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden
                       border border-[rgba(124,58,237,0.18)]
                       hover:border-[rgba(124,58,237,0.35)] transition-all duration-500">
          {/* Lado mockup — feed fitness (aparece primeiro em lg) */}
          <div className="bg-[#0D0A28] p-8 flex items-center justify-center
                        border-r border-[rgba(124,58,237,0.1)]
                        order-2 lg:order-first">
            <div className="w-full max-w-xs bg-[#06041A] rounded-2xl border
                         border-[rgba(124,58,237,0.18)] overflow-hidden">
              {/* Status bar fake */}
              <div className="bg-[#0D0A28] px-4 py-2 flex justify-between items-center
                            border-b border-[rgba(124,58,237,0.1)]">
                <span className="font-mono text-[9px] text-[#5B5080]">insane.app</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28c840] opacity-30" />
                </div>
              </div>
              {/* Feed items */}
              {[
                { user: 'carlos_fit', action: 'completou treino', time: '2min', pts: '+120pts' },
                { user: 'ana_strong', action: 'novo recorde pessoal', time: '8min', pts: '+85pts' },
                { user: 'rafa_gym', action: 'sequência de 30 dias', time: '15min', pts: '+200pts' },
              ].map((item, i) => (
                <div key={i} className="px-4 py-3 border-b border-[rgba(124,58,237,0.08)]
                                      flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br
                                from-[#7C3AED] to-[#D946EF] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-[#A78BFA]">{item.user}</div>
                    <div className="font-body text-[10px] text-[#5B5080] truncate">{item.action}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono text-[9px] text-[#28c840]">{item.pts}</div>
                    <div className="font-mono text-[9px] text-[#3A3464]">{item.time}</div>
                  </div>
                </div>
              ))}
              {/* Bottom stat bar */}
              <div className="px-4 py-3 flex justify-between">
                <div className="text-center">
                  <div className="font-mono text-sm font-bold text-[#A78BFA]">2.4k</div>
                  <div className="font-mono text-[9px] text-[#5B5080]">usuários</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-sm font-bold text-[#D946EF]">380</div>
                  <div className="font-mono text-[9px] text-[#5B5080]">treinos/dia</div>
                </div>
                <div className="text-center">
                  <div className="font-mono text-sm font-bold text-[#28c840]">99.9%</div>
                  <div className="font-mono text-[9px] text-[#5B5080]">uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado texto */}
          <div className="bg-[#151130] p-10 flex flex-col justify-center order-1 lg:order-last">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase
                           text-[#D946EF] border border-[rgba(217,70,239,0.3)]
                           px-3 py-1 rounded w-fit mb-5">
              Cliente externo
            </span>
            <h3 className="font-display font-bold text-2xl tracking-wider
                         text-[#FAF9FF] mb-4">
              INSANE APP
            </h3>
            <p className="font-body font-light text-sm text-[#9488C5] leading-relaxed mb-6">
              Rede social e plataforma de acompanhamento de treinos focada em comunidade fitness.
              Backend completo com feed social, sistema de autenticação, tracking de treinos,
              perfis de atletas e integração com app mobile. Arquitetura orientada a performance
              com cache distribuído para suportar crescimento acelerado de usuários.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'].map(t => (
                <span key={t}
                  className="font-mono text-[10px] px-3 py-1 rounded
                           bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)]
                           text-[#A78BFA]">
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
