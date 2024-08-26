import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
const NextIntlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ['ar', 'en'],

    // Used when no locale matches
    defaultLocale: 'ar',
    localeDetection: false
});

export default function (req: NextRequest): NextResponse {
    // Match only internationalized pathnames
    return NextIntlMiddleware(req);
};

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en)/:path*']
};