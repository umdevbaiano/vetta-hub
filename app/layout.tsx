import type { Metadata } from 'next'
import { Syncopate, Exo_2, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
})

import CustomCursor from '@/components/CustomCursor'
import WhatsAppButton from '@/components/WhatsAppButton'
import RevealProvider from '@/components/RevealProvider'

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
    <html lang="pt-BR" className={`${syncopate.variable} ${exo2.variable} ${jetbrains.variable}`}>
      <body>
        <CustomCursor />
        <RevealProvider>
          {children}
        </RevealProvider>
        <WhatsAppButton />
      </body>
    </html>
  )
}
