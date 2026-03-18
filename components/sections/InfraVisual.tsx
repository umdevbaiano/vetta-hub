export default function InfraVisual() {
  return (
    <section id="infra-visual" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-4">Infraestrutura & NOC</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-[0.06em] text-[#FAF9FF] mb-6 leading-tight">
              SISTEMAS QUE NÃO PODEM <span className="text-[#A78BFA]">CAIR.</span>
            </h2>
            <p className="font-body font-light text-[#9488C5] leading-relaxed mb-8 text-lg">
              Monitoramento ativo 24/7 com Zabbix e Grafana. Identificamos gargalos antes que o problema chegue ao seu cliente.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-2.5 h-2.5">
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <div className="relative rounded-full w-2.5 h-2.5 bg-green-400" />
              </div>
              <span className="font-mono text-xs text-green-400 tracking-wider">SISTEMA OPERACIONAL</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Zabbix', 'Grafana', '24/7 NOC', 'Alertas automáticos'].map(c => (
                <span key={c} className="font-mono text-[11px] px-3 py-1.5 rounded border border-[rgba(124,58,237,0.25)] text-[#9488C5]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Uptime panel */}
          <div className="bg-[#0D0A28] rounded-2xl border border-[rgba(124,58,237,0.2)] p-6 shadow-[0_0_60px_rgba(124,58,237,0.06)]">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#5B5080]">Uptime — últimos 30 dias</span>
              <span className="font-mono text-sm font-bold text-[#7C3AED]">99.9%</span>
            </div>

            <div className="flex items-end gap-0.5 h-16 mb-2">
              {Array.from({ length: 30 }).map((_, i) => {
                const h = 85 + Math.floor(Math.sin(i * 0.7) * 10 + 5)
                return (
                  <div key={i} className="flex-1 rounded-sm bg-[#7C3AED]"
                    style={{ height: `${h}%`, opacity: 0.5 + (i/30)*0.5 }} />
                )
              })}
            </div>

            <div className="flex justify-between font-mono text-[9px] text-[#5B5080] mb-6">
              <span>1 Mar</span><span>30 Mar</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[rgba(124,58,237,0.08)] rounded-lg p-3">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#5B5080] mb-1">MTTR</div>
                <div className="font-mono text-base font-bold text-[#FAF9FF]">&lt;2min</div>
              </div>
              <div className="bg-[rgba(124,58,237,0.08)] rounded-lg p-3">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#5B5080] mb-1">Alertas/dia</div>
                <div className="font-mono text-base font-bold text-[#D946EF]">0</div>
              </div>
              <div className="bg-[rgba(124,58,237,0.08)] rounded-lg p-3">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#5B5080] mb-1">Servidores</div>
                <div className="font-mono text-base font-bold text-[#A78BFA]">24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
