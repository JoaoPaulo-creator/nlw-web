import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import Hero from '@/components/Hero'
import SignInButton from '@/components/SignInButton'
import Profile from '@/components/Profile'

import EmptyMemories from '@/components/EmptyMemories'
import { cookies } from 'next/headers'
import Copyright from '@/components/Copyright'

const robot = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma capsula do tempo construida com React, nextjs, tailwind e typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      {/* Aqui sao adicionados os estilos padroes da minha aplicaçao
      Acredito que o app inteiro vai seguir o que estiver dentro do RootLayout */}
      <body
        className={`${robot.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="intems-start relative flex flex-col justify-between overflow-hidden border-r border-white/10 px-28 py-16">
            {/*  Blur */}
            <div className="absolute right-0 top-1/2 h-[128px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profile /> : <SignInButton />}
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col p-16">{children}</div>
        </main>
      </body>
    </html>
  )
}
