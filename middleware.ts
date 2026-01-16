 // middleware.ts (place at project root)
import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";  

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Allow static files and system routes to bypass i18n middleware
  // This is critical for sitemap.xml and robots.txt to work with Google Search Console
  if (
    pathname.startsWith('/sitemap') ||           // /sitemap.xml, /sitemap-index.xml, etc.
    pathname === '/robots.txt' ||                // robots.txt
    pathname.startsWith('/favicon.ico') ||       // favicon
    pathname.startsWith('/_next') ||             // Next.js internal routes
    pathname.startsWith('/api') ||               // API routes
    pathname.startsWith('/_vercel') ||           // Vercel internal routes
    /\.(ico|png|jpg|jpeg|svg|gif|webp|xml|txt|json|pdf)$/.test(pathname) // Static files
  ) {
    return NextResponse.next();
  }

  // Redirect root "/" to default locale "/en"
  if (pathname === "/") {
    const redirectUrl = url.clone();
    redirectUrl.pathname = `/${routing.defaultLocale}`;
    return NextResponse.redirect(redirectUrl);
  }

  // Let next-intl handle everything else
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
