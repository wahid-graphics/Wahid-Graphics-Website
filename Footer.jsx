import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1918] border-t border-brand-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Wahid Graphics" width={44} height={44}
                className="object-contain" />
              <div>
                <p className="font-heading text-xl text-brand-yellow tracking-widest">WAHID GRAPHICS</p>
                <p className="text-[10px] text-brand-light/50 tracking-widest uppercase">Printing &amp; Design</p>
              </div>
            </Link>
            <p className="text-brand-light/60 text-sm leading-relaxed">
              Premium printing and graphic design services. <br />
              <span className="text-brand-light/40 text-xs">بہترین پرنٹنگ اور ڈیزائن خدمات</span>
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/923260342099" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1877F2]/15 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="mailto:wahidgraphics21@gmail.com"
                className="w-9 h-9 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-yellow hover:bg-brand-yellow/30 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-brand-yellow tracking-widest mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {[
                ['/', 'Home — ہوم'],
                ['/services', 'Services — خدمات'],
                ['/portfolio', 'Portfolio — پورٹ فولیو'],
                ['/about', 'About Us — ہمارے بارے میں'],
                ['/contact', 'Contact — رابطہ'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href}
                    className="text-sm text-brand-light/60 hover:text-brand-yellow transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-brand-yellow tracking-widest mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-brand-light/60">
              {[
                'Flex Banners — فلیکس',
                'Visiting Cards — وزٹنگ کارڈ',
                'Brochures — بروشر',
                'Stickers — اسٹیکر',
                'Logo Design — لوگو',
                'Event Banners — بینر',
                'Letterheads — لیٹر ہیڈ',
                'Digital Printing — ڈیجیٹل پرنٹنگ',
              ].map(s => (
                <li key={s} className="hover:text-brand-yellow transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-brand-yellow tracking-widest mb-4">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/923260342099"
                    className="text-sm text-brand-light/80 hover:text-brand-yellow transition-colors">
                    +92 326 0342099
                  </a>
                  <p className="text-xs text-brand-light/40">WhatsApp Available</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <a href="mailto:wahidgraphics21@gmail.com"
                  className="text-sm text-brand-light/80 hover:text-brand-yellow transition-colors break-all">
                  wahidgraphics21@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-brand-yellow mt-0.5 flex-shrink-0" />
                <p className="text-sm text-brand-light/60">Pakistan</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-yellow/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-brand-light/40">
            © {new Date().getFullYear()} Wahid Graphics. All rights reserved.
          </p>
          <p className="text-xs text-brand-light/30">
            واہد گرافکس — تمام حقوق محفوظ ہیں
          </p>
        </div>
      </div>
    </footer>
  )
}
