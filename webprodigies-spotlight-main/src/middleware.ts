// Temporarily disabled Clerk middleware to fix 500 errors
// import { clerkMiddleware } from '@clerk/nextjs/server'
// import { createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher([
//   '/sign-in(.*)',
//   '/sign-up(.*)',
//   '/api(.*)',
//   '/live-webinar(.*)',
//   '/',
//   '/webinars',
//   '/create',
//   '/dashboard',
//   '/analytics'
// ])

// export default clerkMiddleware(async (auth, req) => {
//   if (!isPublicRoute(req)) {
//     await auth.protect()
//   }
// })

// Simple middleware for demo
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
