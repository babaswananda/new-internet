import type { Metadata } from 'next'
import { ThemeProvider } from '@/providers/theme-provider'
// import { ClerkProvider } from '@clerk/nextjs'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Unified AI Webinar Platform',
  description: 'Token-gated webinar platform powered by Unified AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body
          className={`${manrope.variable} antialiased bg-black text-white`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    // </ClerkProvider>
  )
}
