import Image from 'next/image'
import nlwLogo from '../assets/nlw-logo.svg'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default function Hero() {

  const isAuthenticated = cookies().has('token')


  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5l font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        className="inline-block rounded-full bg-green-500 justify-center px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-700"
        href={
          `${!isAuthenticated ? `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}` : '/memories/new'}`
        }
      >
        {!isAuthenticated ? 'CADASTRAR-SE' : 'CADASTRAR LEMBRANÇA'}
      </Link>
    </div>
  )
}
