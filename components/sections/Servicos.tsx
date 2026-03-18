const services = [
  {
    num: '01',
    title: 'Software sob medida',
    desc: 'ERPs, portais, automações e sistemas internos construídos para a sua regra de negócio.',
    featured: true,
  },
  {
    num: '02',
    title: 'Sites & Landing Pages',
    desc: 'Presença digital que representa sua empresa de verdade. Rápido, responsivo, focado em conversão.',
  },
  {
    num: '03',
    title: 'White Label',
    desc: 'Você vende, nós desenvolvemos. Ideal para agências que querem expandir sem contratar.',
  },
  {
    num: '04',
    title: 'Infraestrutura & NOC',
    desc: 'Servidores, redes e monitoramento 24/7. Identificamos o problema antes que você perceba.',
  },
  {
    num: '05',
    title: 'Consultoria estratégica',
    desc: 'Diagnóstico técnico completo. Saímos com um plano de ação claro, não com PowerPoint.',
  },
  {
    num: '06',
    title: 'Projeto fora do padrão?',
    desc: 'Se o seu problema é complexo, melhor conversar. Desenvolvemos sob demanda.',
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

        <div className="svc-grid r" data-d="3">
          {services.map((svc) => (
            <a
              key={svc.num}
              href="https://wa.me/5573982330065"
              target="_blank"
              rel="noopener noreferrer"
              className={`svc-card${svc.featured ? ' feat' : ''}`}
              style={{ textDecoration: 'none' }}
            >
              {svc.featured && <span className="feat-tag">Mais procurado</span>}
              <div className="svc-n">{svc.num}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <span className="svc-lnk">Quero um orçamento <span>→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
