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

    <div className="svc-card feat">
      <span className="feat-tag">Carro-chefe</span>
      <div className="svc-n">01</div>
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
      <h3>Software<br>Sob Medida</h3>
      <p>ERPs, portais, automações e sistemas internos construídos para a sua regra de negócio. Nenhum template, zero gambiarra.</p>
      <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Quero um orçamento →</a>
    </div>

    <div className="svc-card">
      <div className="svc-n">02</div>
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
      <h3>Sites &<br>Landing Pages</h3>
      <p>Presença digital que representa sua empresa de verdade. Rápido, responsivo, focado em conversão.</p>
      <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Saber mais →</a>
    </div>

    <div className="svc-card">
      <div className="svc-n">03</div>
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      <h3>White<br>Label</h3>
      <p>Você vende, nós desenvolvemos. Ideal para agências que querem expandir sem contratar.</p>
      <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Como funciona →</a>
    </div>

    {/* wide card com mockup */}
    <div className="svc-card svc-wide">
      <div className="svc-wide-t">
        <div className="svc-n">04</div>
        <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
        <h3>Infraestrutura & NOC</h3>
        <p>Servidores, redes e monitoramento 24/7. Identificamos o problema antes que você perceba.</p>
        <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Saber mais →</a>
      </div>
      <div className="mockup-wrap">
        <div className="mockup-bar">
          <div className="mockup-dot" style="background:#ff5f57"></div>
          <div className="mockup-dot" style="background:#febc2e"></div>
          <div className="mockup-dot" style="background:#28c840"></div>
        </div>
        <div className="mockup-lines">
          <div className="ml cyan"></div>
          <div className="ml w90"></div>
          <div className="ml w80"></div>
          <div className="ml w40"></div>
          <div className="ml w60"></div>
          <div className="ml w80"></div>
        </div>
      </div>
    </div>

    <div className="svc-card">
      <div className="svc-n">05</div>
      <svg className="svc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
      <h3>Consultoria<br>Estratégica</h3>
      <p>Diagnóstico técnico completo. Saímos com um plano de ação claro, não com PowerPoint.</p>
      <a href="https://wa.me/5573982330065" target="_blank" className="svc-lnk">Agendar →</a>
    </div>

    <div className="svc-card" style="background:var(--cyan05);display:flex;flex-direction:column;justify-content:center;">
      <div className="svc-n" style="color:var(--cyan)">→</div>
      <h3 style="font-size:18px;">Projeto fora<br>do padrão?</h3>
      <p>Se o seu problema é complexo, melhor conversar. Desenvolvemos sob demanda.</p>
      <a href="https://wa.me/5573982330065?text=Olá!%20Tenho%20uma%20demanda%20específica." target="_blank" className="svc-lnk">Falar com especialista →</a>
    </div>

  </div>
</div>
</section>

{/* ══ PROCESSO ══ */}
<section id="como-funciona">
<div className="container">
  <p className="s-label r">O Processo</p>
  <h2 className="st r" data-d="1">Como a Vetta <em>trabalha.</em></h2>
  <div className="proc-grid r" data-d="2">
      <div className="proc-step">
        <div className="p-n">01</div>
        <div className="p-line"></div>
        <h4>Diagnóstico</h4>
        <p>Entendemos sua operação, seus gargalos e o que precisa ser resolvido com prioridade.</p>
      </div>
      <div className="proc-step">
        <div className="p-n">02</div>
        <div className="p-line"></div>
        <h4>Proposta</h4>
        <p>Solução técnica clara com escopo, prazo e investimento definidos. Sem surpresas.</p>
      </div>
      <div className="proc-step">
        <div className="p-n">03</div>
        <div className="p-line"></div>
        <h4>Execução</h4>
        <p>Desenvolvemos com agilidade e transparência. Você acompanha cada entrega.</p>
      </div>
      <div className="proc-step">
        <div className="p-n">04</div>
        <div className="p-line"></div>
        <h4>Suporte Contínuo</h4>
        <p>O projeto não termina no deploy. Ficamos ao lado para evoluir o que foi construído.</p>
      </div>
  </div>
</div>
</section>

{/* ══ SOBRE TEASER ══ */}
<section id="sobre">
<div className="container">
  <div className="sobre-teaser r">
    <div className="sobre-teaser-left">
      <p className="s-label">Sobre a Vetta</p>
      <blockquote className="sobre-quote">A curiosidade de uma criança de 6 anos<br>virou <em>engenharia de verdade.</em></blockquote>
      <p className="sobre-teaser-sub">Nascemos de dentro da tecnologia. Cada decisão que tomamos vem de quem já esteve do lado técnico — e sabe o que travar uma empresa significa na prática.</p>
      <a href="/sobre" className="sobre-teaser-cta">
        Conheça a história completa
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <div className="sobre-teaser-stats r" data-d="2">
      <div className="st-stat">
        <span className="st-val">7<em>+</em></span>
        <span className="st-lbl">anos no mercado</span>
      </div>
      <div className="st-divider"></div>
      <div className="st-stat">
        <span className="st-val">100<em>+</em></span>
        <span className="st-lbl">clientes atendidos</span>
      </div>
      <div className="st-divider"></div>
      <div className="st-stat">
        <span className="st-val">5</span>
        <span className="st-lbl">camadas de solução</span>
      </div>
      <div className="st-divider"></div>
      <div className="st-stat">
        <span className="st-val">Jequié</span>
        <span className="st-lbl">BA — com alcance nacional</span>
      </div>
    </div>
  </div>
</div>
</section>

{/* ══ PARA QUEM ══ */}
<section id="para-quem">
<div className="container">
  <div className="pq-head">
    <div>
      <p className="s-label r">Para Quem</p>
      <h2 className="st r" data-d="1">A Vetta foi feita<br>para você se <em>reconhecer.</em></h2>
    </div>
    <p className="ssub r" data-d="2">Se um desses perfis soa familiar, a gente tem muito a conversar.</p>
  </div>
  <div className="profiles r" data-d="3">

    <div className="pr-card">
      <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <h4>A empresa que cresceu mais rápido que o sistema</h4>
      <p className="pr-trigger">"Nossas planilhas não aguentam mais."</p>
      <p>Você tem um negócio funcionando, mas a tecnologia virou um freio. A Vetta moderniza sem parar sua operação.</p>
    </div>

    <div className="pr-card">
      <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
      <h4>A startup que precisa de velocidade</h4>
      <p className="pr-trigger">"Precisamos lançar rápido, mas fazer certo."</p>
      <p>Construímos o seu MVP, escalamos a infraestrutura e ficamos do seu lado conforme você cresce.</p>
    </div>

    <div className="pr-card">
      <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <h4>A agência que quer expandir sem contratar</h4>
      <p className="pr-trigger">"Quero oferecer software, mas não sei por onde começar."</p>
      <p>Trabalhamos como seu braço técnico invisível. Você vende, nós entregamos — sob sua marca.</p>
    </div>

    <div className="pr-card">
      <svg className="pr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
      <h4>A empresa presa no sistema legado</h4>
      <p className="pr-trigger">"Dependemos de um sistema que ninguém mais sabe mexer."</p>
      <p>Fazemos a migração com segurança, sem jogar fora o que funciona e modernizando o que trava.</p>
    </div>

  </div>
</div>
</section>

{/* ══ INFRA VISUAL ══ */}
<section id="infra-visual">
<div className="container">
  <div className="infra-inner r">
    <div>
      <p className="s-label">Infraestrutura</p>
      <h2 className="st" style="margin-bottom:16px">Sistemas que<br>não podem <em>cair.</em></h2>
      <p className="ssub">Monitoramento ativo 24/7 com Zabbix e Grafana. Identificamos gargalos antes que o problema chegue ao seu cliente.</p>
      <div className="infra-chips">
        <span className="infra-chip">Zabbix</span>
        <span className="infra-chip">Grafana</span>
        <span className="infra-chip">24/7 NOC</span>
        <span className="infra-chip">Alertas automáticos</span>
      </div>
    </div>
    <div className="infra-graphic">
      <div className="infra-badge">
        <div className="ib-label">Uptime atual</div>
        <div className="ib-val">99.9%</div>
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
<div style="height:10px"></div>
<div className="mq-wrap r" data-d="2">
  <div className="mq-track rev">
    <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span><span className="stag">Nginx</span>
    <span className="stag">Redis</span><span className="stag">Nginx</span><span className="stag">Prisma</span><span className="stag">GitHub Actions</span><span className="stag">Vercel</span><span className="stag">Terraform</span><span className="stag">MongoDB</span><span className="stag">Celery</span><span className="stag">RabbitMQ</span><span className="stag">REST API</span><span className="stag">JWT</span><span className="stag">CI/CD</span><span className="stag">Nginx</span>
  </div>
</div>
</section>

{/* ══ ORBITAL ECOSSISTEMA ══ */}
<section id="ecossistema-orbital">
<div className="container">
  <div className="orbital-head r">
    <p className="s-label" style="justify-content:center">Ecossistema Interativo</p>
    <h2 className="st r" data-d="1" style="text-align:center">Explore as camadas<br>da <em>Vetta.</em></h2>
    <p className="ssub r" data-d="2" style="margin:0 auto 0;text-align:center">Clique em cada camada para entender como ela se encaixa no ecossistema.</p>
  </div>
  <div className="orbital-stage r" data-d="3" id="orbital-stage">
    {/* rings */}
    <div className="orbit-ring" style="width:420px;height:420px;margin-top:-210px;margin-left:-210px;top:50%;left:50%;position:absolute;"></div>
    <div className="orbit-ring" style="width:240px;height:240px;margin-top:-120px;margin-left:-120px;top:50%;left:50%;position:absolute;border-color:rgba(0,212,255,.04)"></div>
    {/* center */}
    <div className="orbit-center">
      <svg className="orbit-center-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    </div>
    {/* nodes injected by JS */}
    <div id="orbital-nodes"></div>
    {/* detail card */}
    <div className="orbit-detail" id="orbit-detail">
      <div className="od-inner">
        <div className="od-num" id="od-num"></div>
        <div className="od-title" id="od-title"></div>
        <div className="od-desc" id="od-desc"></div>
      </div>
    </div>
  </div>
</div>
</section>

{/* ══ SCROLL CARD ══ */}
<section id="scroll-card-section">
<div className="scroll-card-wrap" id="scroll-card-wrap">
  <div style="width:100%;max-width:860px;margin:0 auto;padding:0 20px">
    <div className="scroll-card-title r">
      <p className="s-label" style="justify-content:center">Dashboard</p>
      <h2 className="st" style="text-align:center;margin-bottom:8px">Controle real,<br><em>visibilidade total.</em></h2>
      <p className="ssub" style="text-align:center;margin:0 auto">Cada projeto entregue com painel de acompanhamento em tempo real.</p>
    </div>
    <div className="scroll-card-frame" id="scroll-card-frame">
      <div className="scf-bar">
        <div className="scf-dot" style="background:#ff5f57"></div>
        <div className="scf-dot" style="background:#febc2e"></div>
        <div className="scf-dot" style="background:#28c840"></div>
        <span style="font-size:12px;color:var(--muted);margin-left:8px">vetta.hub — painel de projetos</span>
      </div>
      <div className="scf-body">
        <div className="scf-grid">
          <div className="scf-card">
            <div className="scf-card-label">Projetos ativos</div>
            <div className="scf-card-val c">12</div>
          </div>
          <div className="scf-card">
            <div className="scf-card-label">Uptime médio</div>
            <div className="scf-card-val">99.9%</div>
          </div>
          <div className="scf-card">
            <div className="scf-card-label">Entregas no prazo</div>
            <div className="scf-card-val a">100%</div>
          </div>
        </div>
        <div className="scf-chart">
          <div className="scf-bar-item" style="height:40%"></div>
          <div className="scf-bar-item" style="height:55%"></div>
          <div className="scf-bar-item hi" style="height:70%"></div>
          <div className="scf-bar-item" style="height:50%"></div>
          <div className="scf-bar-item hi" style="height:90%"></div>
          <div className="scf-bar-item" style="height:65%"></div>
          <div className="scf-bar-item hi" style="height:100%"></div>
          <div className="scf-bar-item" style="height:75%"></div>
          <div className="scf-bar-item" style="height:60%"></div>
          <div className="scf-bar-item hi" style="height:85%"></div>
          <div className="scf-bar-item" style="height:45%"></div>
          <div className="scf-bar-item hi" style="height:95%"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

{/* ══ FAQ ══ */}
<section id="faq">
<div className="container">
  <div className="faq-wrap">
    <div className="faq-sticky">
      <p className="s-label r">Dúvidas</p>
      <h2 className="st r" data-d="1">Perguntas<br>que todo<br>cliente <em>faz.</em></h2>
      <p className="ssub r" data-d="2" style="margin-top:20px">Tem outra dúvida? Basta chamar no WhatsApp — respondemos na hora.</p>
    </div>
    <div className="r" data-d="3">
      <div className="faq-item">
        <button className="faq-btn" onClick="faq(this)">A Vetta atende empresas de qualquer segmento? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Sim. Nossa especialidade é tecnologia, não um setor específico. Já trabalhamos com comércio, saúde, educação, logística e serviços. O que muda é a solução, não a qualidade da entrega.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick="faq(this)">Quanto tempo leva para desenvolver um software sob medida? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Depende da complexidade. Um sistema simples pode estar em produção em 3–6 semanas. Sistemas mais robustos levam de 2 a 6 meses. O prazo real é definido na proposta, sem chute.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick="faq(this)">Como funciona o modelo White Label? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Você fecha com seu cliente, repassa o briefing para a Vetta e nós desenvolvemos sob a sua marca. O cliente final nunca precisa saber que a Vetta existe — a relação comercial é inteiramente sua.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick="faq(this)">Posso contratar apenas consultoria? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Sim. Oferecemos diagnóstico de TI de forma independente. Muitos clientes começam com consultoria e decidem levar a execução para a Vetta depois — mas não é obrigação.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick="faq(this)">O suporte continua após a entrega? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Sim. Oferecemos planos de suporte e manutenção contínua. Sistemas evoluem, e a Vetta fica ao lado para ajustar, melhorar e garantir que tudo continue funcionando.</div>
      </div>
    </div>
  </div>
</div>
</section>

{/* ══ CTA ══ */}
<section id="contato">
<div className="container">
  <div className="cta-box r">
    <h2>Pronto para parar de<br><em>improvisar em TI?</em></h2>
    <p>Agende um diagnóstico gratuito. Em 30 minutos, você sai com clareza sobre o próximo passo tecnológico da sua empresa.</p>
    <div className="cta-row">
      <input className="cta-in" type="text" placeholder="Seu nome" />
      <input className="cta-in" type="text" placeholder="WhatsApp ou e-mail" />
      <a href="https://wa.me/5573982330065" target="_blank" className="btn-primary">Quero meu diagnóstico →</a>
    </div>
    <p className="cta-or">Prefere falar direto? <a href="https://wa.me/5573982330065" target="_blank">Chamar no WhatsApp →</a></p>
  </div>
</div>
</section>

{/* ══ FOOTER ══ */}
<footer>
<div className="container">
  <div className="ft">
    <a href="#" className="f-logo">Vetta<em>.</em></a>
    <span className="f-copy">© 2025 VettaHub Tecnologia · Jequié, BA</span>
    <div className="f-links">
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
    </div>
  </div>
</div>
</footer>

<script>
// ── LOADER ANIMATION
(function(){
  const loader   = document.getElementById('loader');
  const logo     = document.getElementById('loader-logo');
  const emblem   = document.getElementById('loader-emblem');
  const tagline  = document.getElementById('loader-tagline');
  const ringWrap = document.getElementById('loader-ring');
  const lrFill   = document.getElementById('lr-fill');
  const nav      = document.getElementById('nav');

  document.body.style.overflow = 'hidden';

  // Step 1: emblem + logo fade in together
  requestAnimationFrame(()=>{
    if(emblem){ emblem.style.opacity='1'; emblem.style.transform='scale(1)'; }
    logo.classList.add('show');
    setTimeout(()=>{ tagline.classList.add('show'); }, 400);
    setTimeout(()=>{
      ringWrap.classList.add('show');
      setTimeout(()=>{ lrFill.classList.add('run'); }, 50);
    }, 700);
  });

  // Step 2: after progress ring completes (~2.7s), fly logo to nav
  setTimeout(()=>{
    tagline.style.transition = 'opacity .3s ease';
    tagline.style.opacity = '0';
    ringWrap.style.transition = 'opacity .3s ease';
    ringWrap.style.opacity = '0';

    setTimeout(()=>{
      const navLogo  = document.querySelector('.nav-logo');
      const navRect  = navLogo.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();
      const dx = navRect.left + navRect.width/2  - (logoRect.left + logoRect.width/2);
      const dy = navRect.top  + navRect.height/2 - (logoRect.top  + logoRect.height/2);

      logo.style.transition = 'transform .75s cubic-bezier(.4,0,.2,1), opacity .45s ease .25s';
      logo.style.transform  = `translate(${dx}px,${dy}px) scale(0.26)`;
      logo.style.opacity    = '0';
      if(emblem){
        emblem.style.transition = 'transform .75s cubic-bezier(.4,0,.2,1), opacity .4s ease .2s';
        emblem.style.transform  = `translate(${dx - 60}px,${dy}px) scale(0.22)`;
        emblem.style.opacity    = '0';
      }

      loader.style.transition = 'opacity .55s ease .3s';
      loader.style.opacity    = '0';

      setTimeout(()=>{
        loader.style.display = 'none';
        document.body.style.overflow = '';
        nav.classList.add('sc');
        document.querySelectorAll('#hero .r').forEach(el=>el.classList.add('v'));
        setTimeout(typewriter, 1800);
      }, 1000);
    }, 350);
  }, 2700);
})();

// ── CURSOR

const cur=document.getElementById('cur'),curR=document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function animR(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(animR);})();
document.querySelectorAll('a,button,.svc-card,.pr-card,.eco-layer,.proc-step,.fc,.orbit-node').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.classList.add('h');curR.classList.add('h');});
  el.addEventListener('mouseleave',()=>{cur.classList.remove('h');curR.classList.remove('h');});
});

// ── NAV + PARALLAX
// PERF: passive:true tells browser we won't call preventDefault — enables scroll compositor optimization
let scrollTicking = false;
window.addEventListener('scroll', ()=>{
  if(!scrollTicking){
    scrollTicking = true;
    requestAnimationFrame(()=>{
      const y = scrollY;
      document.getElementById('nav').classList.toggle('sc', y > 20);
      document.getElementById('px1').style.transform = `translateY(${y*.28}px)`;
      document.getElementById('px2').style.transform = `translateY(${y*.18}px)`;
      document.getElementById('px3').style.transform = `translateY(${y*.35}px)`;
      scrollTicking = false;
    });
  }
}, { passive: true });

// ── REVEAL
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target);}});
},{threshold:0.08});
document.querySelectorAll('.r').forEach(el=>io.observe(el));

// ── TYPEWRITER (declared as named fn so loader can call it)
const pairs=[
  {art:'o', word:'site'},
  {art:'o', word:'sistema'},
  {art:'a', word:'infra'},
  {art:'a', word:'automação'},
  {art:'o', word:'software'},
];
const twEl=document.getElementById('tw-word');
const twArt=document.getElementById('tw-article');
let wi=0;
const TYPE_SPEED=60, DELETE_SPEED=40, PAUSE=1800;
function typewriter(){
  const next=pairs[(wi+1)%pairs.length];
  const current=twEl.textContent;
  let i=current.length;
  const del=setInterval(()=>{
    twEl.textContent=current.slice(0,--i);
    if(i<=0){
      clearInterval(del);
      wi=(wi+1)%pairs.length;
      twArt.textContent=next.art;
      let j=0;
      const typ=setInterval(()=>{
        twEl.textContent=next.word.slice(0,++j);
        if(j>=next.word.length){ clearInterval(typ); setTimeout(typewriter,PAUSE); }
      },TYPE_SPEED);
    }
  },DELETE_SPEED);
}

// ── ORBITAL TIMELINE
const orbitData = [
  { id:1, num:'01', label:'Presença Digital', title:'Presença Digital', desc:'Sites, landing pages e e-commerce que convertem. Rápidos, responsivos e focados em resultado.', icon:'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0v20M2 12h20M5.6 5.6C7.2 8 9.5 9.5 12 9.5s4.8-1.5 6.4-3.9M5.6 18.4C7.2 16 9.5 14.5 12 14.5s4.8 1.5 6.4 3.9' },
  { id:2, num:'02', label:'Software', title:'Software Sob Medida', desc:'ERPs, portais, automações. Sistemas construídos para a sua regra de negócio — nenhum template, zero gambiarra.', icon:'M8 6 L2 12 L8 18 M16 6 L22 12 L16 18' },
  { id:3, num:'03', label:'White Label', title:'White Label', desc:'Você vende, a Vetta entrega. Seu cliente nunca saberá que existimos — a relação comercial é inteiramente sua.', icon:'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' },
  { id:4, num:'04', label:'Infraestrutura', title:'Infraestrutura & NOC', desc:'Monitoramento 24/7 com Zabbix e Grafana. Identificamos o problema antes que seu cliente perceba.', icon:'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01' },
  { id:5, num:'05', label:'Consultoria', title:'Consultoria Estratégica', desc:'Diagnóstico técnico real. Saímos com um plano de ação claro — não com slides bonitos.', icon:'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z' },
];

const stage = document.getElementById('orbital-stage');
const nodesContainer = document.getElementById('orbital-nodes');
const detail = document.getElementById('orbit-detail');
let activeOrbit = null;
let rotAngle = 0;
let autoRot = true;
const RADIUS = 200;

function buildNodes(){
  nodesContainer.innerHTML = '';
  orbitData.forEach((item, i)=>{
    const node = document.createElement('div');
    node.className = 'orbit-node';
    node.id = `onode-${item.id}`;
    node.innerHTML = `
      <div className="on-dot">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="${item.icon}"/>
        </svg>
      </div>
      <div className="on-label">${item.label}</div>`;
    node.addEventListener('click', ()=>activateNode(item.id));
    nodesContainer.appendChild(node);
  });
}

function positionNodes(){
  const cx = stage.offsetWidth / 2;
  const cy = stage.offsetHeight / 2;
  orbitData.forEach((item,i)=>{
    const angle = ((i / orbitData.length) * 360 + rotAngle) % 360;
    const rad   = (angle * Math.PI) / 180;
    const x = cx + RADIUS * Math.cos(rad);
    const y = cy + RADIUS * Math.sin(rad);
    const node = document.getElementById(`onode-${item.id}`);
    if(node){ node.style.left = x+'px'; node.style.top = y+'px'; }
  });
}

function activateNode(id){
  autoRot = false;
  document.querySelectorAll('.orbit-node').forEach(n=>n.classList.remove('active'));
  const node = document.getElementById(`onode-${id}`);
  if(node) node.classList.add('active');
  const data = orbitData.find(d=>d.id===id);
  if(!data) return;
  document.getElementById('od-num').textContent   = data.num;
  document.getElementById('od-title').textContent = data.title;
  document.getElementById('od-desc').textContent  = data.desc;
  detail.classList.add('show');
  activeOrbit = id;
  // resume auto-rotate after 4s
  setTimeout(()=>{ autoRot=true; detail.classList.remove('show'); document.querySelectorAll('.orbit-node').forEach(n=>n.classList.remove('active')); activeOrbit=null; }, 4000);
}

buildNodes();
positionNodes();
window.addEventListener('resize', positionNodes);

// PERF: rAF loop with deltaTime — frame-rate independent, works at 60Hz AND 144Hz
let orbitLastTime = 0;
const DEG_PER_SEC = 6; // 6°/s = one full revolution per minute
(function orbitLoop(now){
  requestAnimationFrame(orbitLoop);
  if(!autoRot){ orbitLastTime = now; return; }
  const dt = Math.min((now - orbitLastTime) / 1000, 0.1); // cap dt to avoid jump after tab focus
  orbitLastTime = now;
  rotAngle = (rotAngle + DEG_PER_SEC * dt) % 360;
  positionNodes();
})(0);

// ── FAQ
function faq(btn){
  const item=btn.closest('.faq-item');
  const open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el=>el.classList.remove('open'));
  if(!open) item.classList.add('open');
}
</script>
  )
}
