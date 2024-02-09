import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log("path "+path);
  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'
  console.log("isPublicPath "+isPublicPath);
  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    console.log("token if 1 "+token);
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    console.log("token if 2 "+token);
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}