import { Footer, Navbar } from './components'
import './globals.css'
import { Roboto_Slab } from 'next/font/google'

const inter = Roboto_Slab({ subsets: ['latin'],
  variable:'--font-inter',
})

export default function RootLayout({ children }) {
  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/aboutus' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'CONTACT', href: '/contact' },
  ];
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Navbar navLinks={navLinks}/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
