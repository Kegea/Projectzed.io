import createIntlMiddleware from 'next-intl/middleware';
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './routing-config';

// Routes that require authentication
const PROTECTED_ROUTES = [
  '/admin',
  '/dashboard',
  '/client',
];

// Routes only accessible when NOT logged in
const AUTH_ROUTES = [
  '/login',
  '/signup',
];

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  // ── 1. Run next-intl locale routing first
  const intlResponse = intlMiddleware(request);

  // ── 2. Set up Supabase SSR client to refresh the session cookie
  const response = intlResponse ?? NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refresh session — do not remove, keeps auth tokens alive
  const { data: { user } } = await supabase.auth.getUser();

  // ── 3. Strip locale prefix for route matching (/en/admin → /admin)
  const pathname = request.nextUrl.pathname;
  const pathnameWithoutLocale = pathname.replace(/^\/(en|fr|ar)/, '');

  // ── 4. Guard protected routes
  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathnameWithoutLocale.startsWith(route)
  );

  if (isProtected && !user) {
    const loginUrl = new URL(`/en/login`, request.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── 5. Redirect authenticated users away from auth pages
  const isAuthRoute = AUTH_ROUTES.some((route) =>
    pathnameWithoutLocale.startsWith(route)
  );

  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL(`/en/dashboard`, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    // Match locale roots and all locale-prefixed paths
    '/',
    '/(en|fr|ar)/:path*',
    // Exclude static assets and Next.js internals
    '/((?!api/|_next/static|_next/image|favicon\\.ico|site\\.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
