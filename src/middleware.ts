import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
const NextIntlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ['ar', 'en'],
    localeDetection: false,
    // Used when no locale matches
    defaultLocale: 'ar',

});

export default function (req: NextRequest): NextResponse {
    // Match only internationalized pathnames
    return NextIntlMiddleware(req);

};

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en)/:path*']
};