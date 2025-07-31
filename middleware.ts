import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Nur für Admin-Routen prüfen
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization')
    const adminPassword = process.env.ADMIN_PASSWORD || 'ki-tricks-admin-2025'
    
    // Basic Auth prüfen
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Bereich"'
        }
      })
    }
    
    const base64Credentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')
    
    // Passwort prüfen (Username ist egal)
    if (password !== adminPassword) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Bereich"'
        }
      })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}