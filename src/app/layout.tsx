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
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" /> */}
        <link href="https://db.onlinewebfonts.com/c/3a775cc0fc167a7000d81c790839b807?family=Moonbeam+Regular" rel="stylesheet"/>
      </Head>
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
