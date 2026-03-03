export default function Dashboard() {
  return (
    <>
      <section id="scroll-card-section">
        <div className="scroll-card-wrap" id="scroll-card-wrap">
          <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
            <div className="scroll-card-title r">
              <p className="s-label" style={{ justifyContent: 'center' }}>Dashboard</p>
              <h2 className="st" style={{ textAlign: 'center', marginBottom: '8px' }}>Controle real,<br /><em>visibilidade total.</em></h2>
              <p className="ssub" style={{ textAlign: 'center', margin: '0 auto' }}>Cada projeto entregue com painel de acompanhamento em tempo real.</p>
            </div>
            <div className="scroll-card-frame" id="scroll-card-frame">
              <div className="scf-bar">
                <div className="scf-dot" style={{ background: '#ff5f57' }}></div>
                <div className="scf-dot" style={{ background: '#febc2e' }}></div>
                <div className="scf-dot" style={{ background: '#28c840' }}></div>
                <span style={{ fontSize: '12px', color: 'var(--muted)', marginLeft: '8px' }}>vetta.hub — painel de projetos</span>
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
                  <div className="scf-bar-item" style={{ height: '40%' }}></div>
                  <div className="scf-bar-item" style={{ height: '55%' }}></div>
                  <div className="scf-bar-item hi" style={{ height: '70%' }}></div>
                  <div className="scf-bar-item" style={{ height: '50%' }}></div>
                  <div className="scf-bar-item hi" style={{ height: '90%' }}></div>
                  <div className="scf-bar-item" style={{ height: '65%' }}></div>
                  <div className="scf-bar-item hi" style={{ height: '100%' }}></div>
                  <div className="scf-bar-item" style={{ height: '75%' }}></div>
                  <div className="scf-bar-item" style={{ height: '60%' }}></div>
                  <div className="scf-bar-item hi" style={{ height: '85%' }}></div>
                  <div className="scf-bar-item" style={{ height: '45%' }}></div>
                  <div className="scf-bar-item hi" style={{ height: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{
        __html: `
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
      logo.style.transform  = \`translate(\${dx}px,\${dy}px) scale(0.26)\`;
      logo.style.opacity    = '0';
      if(emblem){
        emblem.style.transition = 'transform .75s cubic-bezier(.4,0,.2,1), opacity .4s ease .2s';
        emblem.style.transform  = \`translate(\${dx - 60}px,\${dy}px) scale(0.22)\`;
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
      document.getElementById('px1').style.transform = \`translateY(\${y*.28}px)\`;
      document.getElementById('px2').style.transform = \`translateY(\${y*.18}px)\`;
      document.getElementById('px3').style.transform = \`translateY(\${y*.35}px)\`;
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
    node.id = \`onode-\${item.id}\`;
    node.innerHTML = \`
      <div className="on-dot">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="\${item.icon}"/>
        </svg>
      </div>
      <div className="on-label">\${item.label}</div>\`;
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
    const node = document.getElementById(\`onode-\${item.id}\`);
    if(node){ node.style.left = x+'px'; node.style.top = y+'px'; }
  });
}

function activateNode(id){
  autoRot = false;
  document.querySelectorAll('.orbit-node').forEach(n=>n.classList.remove('active'));
  const node = document.getElementById(\`onode-\${id}\`);
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
`}} />
    </>
  )
}
