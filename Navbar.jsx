'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',          label: 'Home',      urdu: 'ہوم' },
  { href: '/services',  label: 'Services',  urdu: 'خدمات' },
  { href: '/portfolio', label: 'Portfolio', urdu: 'پورٹ فولیو' },
  { href: '/about',     label: 'About',     urdu: 'ہمارے بارے میں' },
  { href: '/contact',   label: 'Contact',   urdu: 'رابطہ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/30 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Wahid Graphics Logo" width={48} height={48}
            className="rounded-sm object-contain" />
          <div>
            <p className="font-heading text-2xl text-brand-yellow leading-tight tracking-widest">
              WAHID GRAPHICS
            </p>
            <p className="text-[10px] text-brand-light/60 tracking-widest uppercase">Printing &amp; Design</p>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}
                className={`nav-link text-sm font-medium text-brand-light hover:text-brand-yellow ${
                  pathname === href ? 'text-brand-yellow active' : ''
                }`}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="lg:hidden text-brand-light" onClick={() => setOpen(!open)}
          aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-black/98 backdrop-blur-md border-t border-brand-yellow/20 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label, urdu }) => (
              <li key={href}>
                <Link href={href}
                  onClick={() => setOpen(false)}
                  className={`flex justify-between items-center py-2 border-b border-brand-gray/30 text-brand-light hover:text-brand-yellow ${
                    pathname === href ? 'text-brand-yellow' : ''
                  }`}>
                  <span className="font-medium">{label}</span>
                  <span className="text-xs text-brand-light/50">{urdu}</span>
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" onClick={() => setOpen(false)}
                className="btn-primary w-full text-center block">
                Get Quote — قیمت جانیں
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
