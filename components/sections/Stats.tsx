export default function Stats() {
  const stats = [
    { num: '7+', label: 'Anos no mercado' },
    { num: '100+', label: 'Clientes atendidos' },
    { num: '99.9%', label: 'Uptime garantido' },
    { num: '14+', label: 'Stacks dominadas' },
  ]

  return (
    <section className="py-20 border-y border-[rgba(124,58,237,0.12)]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ num, label }) => (
          <div key={label}>
            <div className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-b from-[#FAF9FF] to-[#9488C5] bg-clip-text text-transparent mb-2">
              {num}
            </div>
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#5B5080]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
