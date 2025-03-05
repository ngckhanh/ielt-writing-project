import { NextResponse, type NextRequest } from 'next/server'
import { withAuth } from 'next-auth/middleware'
//import { updateSession } from '@/supabase/middleware'
import { getToken } from 'next-auth/jwt';

export default withAuth(async function middleware(request: NextRequest){
    const pathname = request.nextUrl.pathname;
    const isAuth = await getToken( {req: request} )
});
export async function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: '/about/:path*',
}