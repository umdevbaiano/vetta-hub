export default function ParaQuem() {
  return (
    <section id="para-quem">
      <div className="container">
        <div className="pq-head">
          <div>
            <p className="s-label r">Para Quem</p>
            <h2 className="st r" data-d="1">A Vetta foi feita<br />para você se <em>reconhecer.</em></h2>
          </div>
          <p className="ssub r" data-d="2">Se um desses perfis soa familiar, a gente tem muito a conversar.</p>
        </div>
        <div className="profiles r" data-d="3">

          <div className="pr-card">
            <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <h4>A empresa que cresceu mais rápido que o sistema</h4>
            <p className="pr-trigger">"Nossas planilhas não aguentam mais."</p>
            <p>Você tem um negócio funcionando, mas a tecnologia virou um freio. A Vetta moderniza sem parar sua operação.</p>
          </div>

          <div className="pr-card">
            <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <h4>A startup que precisa de velocidade</h4>
            <p className="pr-trigger">"Precisamos lançar rápido, mas fazer certo."</p>
            <p>Construímos o seu MVP, escalamos a infraestrutura e ficamos do seu lado conforme você cresce.</p>
          </div>

          <div className="pr-card">
            <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h4>A agência que quer expandir sem contratar</h4>
            <p className="pr-trigger">"Quero oferecer software, mas não sei por onde começar."</p>
            <p>Trabalhamos como seu braço técnico invisível. Você vende, nós entregamos — sob sua marca.</p>
          </div>

          <div className="pr-card">
            <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
            </svg>
            <h4>A empresa presa no sistema legado</h4>
            <p className="pr-trigger">"Dependemos de um sistema que ninguém mais sabe mexer."</p>
            <p>Fazemos a migração com segurança, sem jogar fora o que funciona e modernizando o que trava.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
