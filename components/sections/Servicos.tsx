const services = [
  {
    num: '01',
    title: 'SOFTWARE SOB MEDIDA',
    desc: 'ERPs, portais, automações e sistemas internos construídos para a sua regra de negócio.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    featured: true,
  },
  {
    num: '02',
    title: 'SITES & LANDING PAGES',
    desc: 'Presença digital que representa sua empresa de verdade. Rápido, responsivo, focado em conversão.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'WHITE LABEL',
    desc: 'Você vende, nós desenvolvemos. Ideal para agências que querem expandir sem contratar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'INFRAESTRUTURA & NOC',
    desc: 'Servidores, redes e monitoramento 24/7. Identificamos o problema antes que você perceba.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'CONSULTORIA ESTRATÉGICA',
    desc: 'Diagnóstico técnico completo. Saímos com um plano de ação claro, não com PowerPoint.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'PROJETO FORA DO PADRÃO?',
    desc: 'Se o seu problema é complexo, melhor conversar. Desenvolvemos sob demanda.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

export default function Servicos() {
  return (
    <section id="servicos">
      <div className="container">
        <div className="svc-head">
          <div>
            <p className="s-label r">Soluções</p>
            <h2 className="st r" data-d="1">O que a Vetta <em>entrega?</em></h2>
          </div>
          <p className="ssub r" data-d="2">Cada serviço projetado para encaixar no momento certo da sua empresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 r" data-d="3">
          {services.map((svc) => (
            <a
              key={svc.num}
              href="https://wa.me/5573982330065"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#151130] border border-[rgba(124,58,237,0.18)]
                         rounded-xl p-7 cursor-pointer overflow-hidden no-underline
                         hover:border-[rgba(124,58,237,0.38)]
                         hover:shadow-[0_0_40px_rgba(124,58,237,0.12)]
                         hover:-translate-y-1 transition-all duration-200"
            >
              {/* Número watermark */}
              <span className="absolute top-4 right-6 font-display font-bold text-7xl
                              text-[rgba(124,58,237,0.06)] select-none pointer-events-none">
                {svc.num}
              </span>

              {/* Ícone */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#D946EF]
                              flex items-center justify-center mb-5">
                {svc.icon}
              </div>

              <h3 className="font-display font-bold text-base tracking-wider text-[#FAF9FF] mb-3">
                {svc.title}
              </h3>
              <p className="font-body font-light text-sm text-[#9488C5] leading-relaxed">
                {svc.desc}
              </p>

              {/* Arrow que aparece no hover */}
              <div className="mt-5 flex items-center gap-2 text-[#A78BFA] text-sm font-semibold
                              opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Quero um orçamento</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
