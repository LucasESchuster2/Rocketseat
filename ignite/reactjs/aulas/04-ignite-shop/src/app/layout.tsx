import type { Metadata } from 'next'
import './globals.css'
import { Poppins as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans  ',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background font-sans antialiased ',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-start justify-center min-h-screen ">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
