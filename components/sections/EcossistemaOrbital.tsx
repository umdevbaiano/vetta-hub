'use client'

export default function EcossistemaOrbital() {
  return (
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
  )
}
