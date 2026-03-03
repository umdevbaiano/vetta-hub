'use client'

export default function FAQ() {
  return (
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
        <button className="faq-btn" onClick={(e) => { const item = (e.currentTarget as HTMLElement).closest('.faq-item'); if (!item) return; const isOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open')); if (!isOpen) item.classList.add('open'); }}>A Vetta atende empresas de qualquer segmento? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Sim. Nossa especialidade é tecnologia, não um setor específico. Já trabalhamos com comércio, saúde, educação, logística e serviços. O que muda é a solução, não a qualidade da entrega.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick={(e) => { const item = (e.currentTarget as HTMLElement).closest('.faq-item'); if (!item) return; const isOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open')); if (!isOpen) item.classList.add('open'); }}>Quanto tempo leva para desenvolver um software sob medida? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Depende da complexidade. Um sistema simples pode estar em produção em 3–6 semanas. Sistemas mais robustos levam de 2 a 6 meses. O prazo real é definido na proposta, sem chute.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick={(e) => { const item = (e.currentTarget as HTMLElement).closest('.faq-item'); if (!item) return; const isOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open')); if (!isOpen) item.classList.add('open'); }}>Como funciona o modelo White Label? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Você fecha com seu cliente, repassa o briefing para a Vetta e nós desenvolvemos sob a sua marca. O cliente final nunca precisa saber que a Vetta existe — a relação comercial é inteiramente sua.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick={(e) => { const item = (e.currentTarget as HTMLElement).closest('.faq-item'); if (!item) return; const isOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open')); if (!isOpen) item.classList.add('open'); }}>Posso contratar apenas consultoria? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Sim. Oferecemos diagnóstico de TI de forma independente. Muitos clientes começam com consultoria e decidem levar a execução para a Vetta depois — mas não é obrigação.</div>
      </div>
      <div className="faq-item">
        <button className="faq-btn" onClick={(e) => { const item = (e.currentTarget as HTMLElement).closest('.faq-item'); if (!item) return; const isOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open')); if (!isOpen) item.classList.add('open'); }}>O suporte continua após a entrega? <span className="faq-ico">+</span></button>
        <div className="faq-ans">Sim. Oferecemos planos de suporte e manutenção contínua. Sistemas evoluem, e a Vetta fica ao lado para ajustar, melhorar e garantir que tudo continue funcionando.</div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}
