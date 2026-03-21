import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization')

  if (authHeader) {
    const encoded = authHeader.split(' ')[1]
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
    const [user, pass] = decoded.split(':')

    const validUser = process.env.STUDIO_USERNAME
    const validPass = process.env.STUDIO_PASSWORD

    if (validUser && validPass && user === validUser && pass === validPass) {
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
