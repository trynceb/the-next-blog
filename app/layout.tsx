import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from "app/(shared)/Navbar"

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'The Next Blog',
  description: 'Blog built in Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
