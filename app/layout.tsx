import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vetta Hub — Ecossistema Tech Completo',
  description: 'Do site ao servidor, tudo junto. A Vetta é o parceiro técnico que sua empresa precisa para crescer sem travar.',
  keywords: 'desenvolvimento web, software sob medida, infraestrutura, NOC, consultoria tech, Jequié, Bahia',
  openGraph: {
    title: 'Vetta Hub — Ecossistema Tech Completo',
    description: 'Sites, sistemas, infraestrutura e estratégia — em um único lugar.',
    url: 'https://vettahub.com.br',
    siteName: 'Vetta Hub',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
