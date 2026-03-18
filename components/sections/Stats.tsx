export default function Stats() {
  const stats = [
    { num: '7+', label: 'Anos no mercado' },
    { num: '100+', label: 'Clientes atendidos' },
    { num: '99.9%', label: 'Uptime garantido' },
    { num: '14+', label: 'Stacks dominadas' },
  ]

  return (
    <section style={{
      padding: '80px 24px',
      borderTop: '1px solid rgba(124,58,237,0.12)',
      borderBottom: '1px solid rgba(124,58,237,0.12)',
      background: '#06041A',
    }}>
      <div style={{
        maxWidth: '1000px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px', textAlign: 'center',
      }} className="stats-grid">
        {stats.map(({ num, label }) => (
          <div key={label}>
            <div style={{
              fontFamily: "var(--font-display, 'Syncopate', sans-serif)",
              fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)',
              background: 'linear-gradient(to bottom, #FAF9FF, #9488C5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '8px',
            }}>{num}</div>
            <div style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#5B5080',
            }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
