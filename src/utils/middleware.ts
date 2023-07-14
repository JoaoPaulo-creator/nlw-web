import { NextResponse } from 'next/server'

const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextResponse) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    // se nao estiver logado, o user sera redirecionado para a tela de login
    return NextResponse.redirect(signInUrl, {
      headers: {
        // ao utilizar o HttpOnly, o cookie nao fica visivel no inspecionar elemento
        'Set-cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
