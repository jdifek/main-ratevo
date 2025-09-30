import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Agency Estonia | Веб-разработка и CRM решения',
  description: 'Разработка интернет-магазинов, лендингов, корпоративных сайтов и CRM-систем в Эстонии.',
  keywords: 'веб-разработка, интернет-магазин, лендинг, CRM, корпоративный сайт, Эстония',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
