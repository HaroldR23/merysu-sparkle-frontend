import { NextRequest, NextResponse } from 'next/server';
// import { jwtVerify } from 'jose';

// const PUBLIC_PATHS = ['/dashboard-5215/login'];

export async function proxy(request: NextRequest) {
  // AUTH GUARD DISABLED TEMPORARILY
  return NextResponse.next();

  /* const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/dashboard-5215/login', request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL('/dashboard-5215/login', request.url));
    response.cookies.delete('auth_token');
    return response;
  } */
}

export const config = {
  matcher: ['/dashboard-5215/:path*'],
};
