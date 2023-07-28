import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The StationAIry Website',
  description: 'Makers of the MechaPen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
