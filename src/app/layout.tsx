import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const robot = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo construida com React, nextjs, tailwind e typescript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      {/* Aqui sao adicionados os estilos padroes da minha aplicaçao
      Acredito que o app inteiro vai seguir o que estiver dentro do RootLayout */}
      <body className={`${robot.variable} ${baiJamJuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
