interface LogoEmblemProps {
  size?: number
  color?: string
}

export function LogoEmblem({ size = 32, color = 'currentColor' }: LogoEmblemProps) {
  return (
    <svg width={size} height={size} viewBox="-50 -56 160 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,-44 38,-22 38,22 0,44 -38,22 -38,-22" fill="none" stroke={color} strokeWidth="1" opacity={0.1}/>
      <polyline points="0,-44 38,-22 38,22 0,44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="0,-44 -38,-22" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={0.25}/>
      <polyline points="-38,22 0,44" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={0.25}/>
      <polyline points="-38,-22 -38,22" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={0.12}/>
      <line x1="0" y1="-44" x2="38" y2="22" stroke={color} strokeWidth="1" opacity={0.2}/>
      <line x1="0" y1="-44" x2="0" y2="44" stroke={color} strokeWidth="1" opacity={0.15}/>
      <line x1="38" y1="-22" x2="-38" y2="22" stroke={color} strokeWidth="1" opacity={0.1}/>
      <circle cx="0" cy="-44" r="4" fill={color}/>
      <circle cx="38" cy="-22" r="4" fill={color}/>
      <circle cx="38" cy="22" r="4" fill={color}/>
      <circle cx="0" cy="44" r="4" fill={color}/>
      <circle cx="-38" cy="-22" r="4" fill={color} opacity={0.22}/>
      <circle cx="-38" cy="22" r="4" fill={color} opacity={0.22}/>
      <circle cx="0" cy="0" r="8" fill="none" stroke={color} strokeWidth="1.8" opacity={0.45}/>
      <circle cx="0" cy="0" r="3.5" fill={color}/>
    </svg>
  )
}
