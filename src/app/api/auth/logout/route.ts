import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  // redirecionando o user quando este for deslogado
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-cookie': `token=; Path=/; max-age=0`,
    },
  })
}
