export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full h-24 pointer-events-none select-none ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="w-full h-full">
        <path d="M0 96L1440 0V96H0Z" fill="#06041A" />
        <path d="M0 96L1440 20V96H0Z" fill="url(#grad)" opacity="0.3" />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
