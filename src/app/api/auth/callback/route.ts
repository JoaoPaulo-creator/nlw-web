import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  // recebendo o cookie criado no middleware
  const redirectTo = request.cookies.get('redirectTo')?.value

  const registerResponse = await api.post('/register', {
    code,
  })

  const { token } = registerResponse.data
  const redirectURL = redirectTo ?? new URL('/', request.url)
  const cookieExpiresinSeconds = 60 * 60 * 24 * 30

  // redirecionando o user para a home
  return NextResponse.redirect(redirectURL, {
    // salvando o token nos cookies
    headers: {
      'Set-cookie': `token=${token}; Path=/; max-age=${cookieExpiresinSeconds}`,
    },
  })
}
