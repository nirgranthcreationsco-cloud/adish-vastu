import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect /admin routes (except login)
    if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
        // We check for a cookie named 'admin_session'
        const session = request.cookies.get('admin_session');

        if (!session) {
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
