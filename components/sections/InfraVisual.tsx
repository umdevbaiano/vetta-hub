export default function InfraVisual() {
  return (
    <>
      <section id="infra-visual" className="py-24 bg-[#0D0A28] relative overflow-hidden">
        {/* Subtle top/bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.12)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.12)] to-transparent" />

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div className="r">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#D946EF] mb-4 block">
                Infraestrutura & NOC
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-[0.06em] text-[#FAF9FF] mb-4 uppercase leading-tight">
                SISTEMAS QUE NÃO PODEM{' '}
                <span className="bg-gradient-to-r from-[#A78BFA] to-[#D946EF] bg-clip-text text-transparent">CAIR.</span>
              </h2>
              <p className="font-body font-light text-[#9488C5] max-w-md leading-relaxed mb-6">
                Monitoramento ativo 24/7 com Zabbix e Grafana. Identificamos gargalos antes que o problema chegue ao seu cliente.
              </p>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-8">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  <div className="relative rounded-full w-2 h-2 bg-green-400" />
                </div>
                <span className="font-mono text-xs text-green-400 tracking-wider">SISTEMA OPERACIONAL</span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {['Zabbix', 'Grafana', '24/7 NOC', 'Alertas automáticos'].map((chip) => (
                  <span
                    key={chip}
                    className="text-xs font-mono px-3 py-1 border border-[rgba(124,58,237,0.38)] rounded-md text-[#9488C5]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Gráfico animado */}
            <div className="r" data-d="1">
              <div className="bg-[#06041A] rounded-xl border border-[rgba(124,58,237,0.18)] p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#5B5080]">
                    Uptime — últimos 30 dias
                  </span>
                  <span className="font-mono text-sm font-bold text-[#7C3AED]">99.9%</span>
                </div>

                {/* Barras de uptime */}
                <div className="flex gap-0.5 items-end h-16">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = 85 + Math.floor(Math.sin(i * 0.7) * 10 + 5)
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-[#7C3AED] rounded-sm"
                        style={{
                          height: `${height}%`,
                          opacity: 0.8,
                          animation: `pulse ${2 + (i % 3) * 0.4}s ease-in-out infinite`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    )
                  })}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[9px] text-[#5B5080]">1 Mar</span>
                  <span className="font-mono text-[9px] text-[#5B5080]">30 Mar</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-[#0D0A28] rounded-lg p-3 border border-[rgba(124,58,237,0.12)]">
                    <div className="font-mono text-[9px] text-[#5B5080] uppercase tracking-wider mb-1">MTTR</div>
                    <div className="font-mono text-sm font-bold text-[#FAF9FF]">&lt;2min</div>
                  </div>
                  <div className="bg-[#0D0A28] rounded-lg p-3 border border-[rgba(124,58,237,0.12)]">
                    <div className="font-mono text-[9px] text-[#5B5080] uppercase tracking-wider mb-1">Alertas/dia</div>
                    <div className="font-mono text-sm font-bold text-[#D946EF]">0</div>
                  </div>
                  <div className="bg-[#0D0A28] rounded-lg p-3 border border-[rgba(124,58,237,0.12)]">
                    <div className="font-mono text-[9px] text-[#5B5080] uppercase tracking-wider mb-1">Servidores</div>
                    <div className="font-mono text-sm font-bold text-[#A78BFA]">24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STACK ══ */}
      <section id="stack">
        <div className="container">
          <p className="stack-label r">Tecnologias que dominamos</p>
        </div>
        <div className="mq-wrap r" data-d="1">
          <div className="mq-track">
            <span className="stag">Python</span><span className="stag">React</span><span className="stag">Next.js</span><span className="stag">FastAPI</span><span className="stag">PostgreSQL</span><span className="stag">Docker</span><span className="stag">AWS</span><span className="stag">Linux</span><span className="stag">Zabbix</span><span className="stag">Grafana</span><span className="stag">MikroTik</span><span className="stag">TypeScript</span><span className="stag">Git</span><span className="stag">Node.js</span><span className="stag">Tailwind CSS</span>
            <span className="stag">Python</span><span className="stag">React</span><span className="stag">Next.js</span><span className="stag">FastAPI</span><span className="stag">PostgreSQL</span><span className="stag">Docker</span><span className="stag">AWS</span><span className="stag">Linux</span><span className="stag">Zabbix</span><span className="stag">Grafana</span><span className="stag">MikroTik</span><span className="stag">TypeScript</span><span className="stag">Git</span><span className="stag">Node.js</span><span className="stag">Tailwind CSS</span>
          </div>
        </div>
        <div style={{ height: '10px' }}></div>
        <div className="mq-wrap r" data-d="2">
          <div className="mq-track rev">
            <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span><span className="stag">Nginx</span>
            <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span><span className="stag">Nginx</span>
          </div>
        </div>
      </section>
    </>
  )
}
