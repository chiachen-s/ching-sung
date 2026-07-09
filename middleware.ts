import { NextRequest, NextResponse } from 'next/server'

function safeCompare(a: string, b: string): boolean {
  const bufA = new TextEncoder().encode(a)
  const bufB = new TextEncoder().encode(b)
  if (bufA.length !== bufB.length) return false
  let result = 0
  for (let i = 0; i < bufA.length; i++) {
    result |= bufA[i] ^ bufB[i]
  }
  return result === 0
}

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (authHeader) {
    const encoded = authHeader.split(' ')[1]
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
    const [user, pass] = decoded.split(':')

    const validUser = process.env.STUDIO_USERNAME
    const validPass = process.env.STUDIO_PASSWORD

    if (validUser && validPass && safeCompare(user, validUser) && safeCompare(pass, validPass)) {
      return NextResponse.next()
    }
  }

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Ching-Sung Studio"',
    },
  })
}

export const config = {
  matcher: '/studio/:path*',
}
