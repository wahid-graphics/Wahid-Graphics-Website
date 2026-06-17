'use client'
import { useState } from 'react'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)
  const phone = '923260342099'
  const message = encodeURIComponent('Hello Wahid Graphics! I am interested in your services. / السلام علیکم، میں آپ کی خدمات میں دلچسپی رکھتا ہوں۔')

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {hovered && (
        <span className="absolute right-16 bg-white text-brand-black text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
          Chat with us!
        </span>
      )}
      <svg viewBox="0 0 32 32" fill="white" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.48 2.03 7.78L.5 31.5l7.96-2.03A15.47 15.47 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a13.3 13.3 0 01-6.76-1.84l-.48-.29-4.73 1.2 1.22-4.6-.31-.5A13.32 13.32 0 0116 2.7c7.34 0 13.3 5.97 13.3 13.3 0 7.34-5.96 13.3-13.3 13.3zm7.3-9.97c-.4-.2-2.36-1.16-2.73-1.3-.36-.13-.63-.2-.89.2s-1.02 1.3-1.25 1.57c-.23.27-.46.3-.86.1a10.86 10.86 0 01-3.19-1.97 12 12 0 01-2.21-2.74c-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.7.2-.23.26-.4.4-.66.13-.27.07-.5-.03-.7-.1-.2-.9-2.16-1.23-2.96-.32-.77-.65-.67-.89-.68H9.6c-.27 0-.7.1-1.06.5-.36.4-1.38 1.35-1.38 3.29s1.41 3.81 1.61 4.07c.2.26 2.77 4.24 6.72 5.94.94.4 1.67.65 2.24.83.94.3 1.8.26 2.47.16.75-.11 2.36-.97 2.69-1.9.33-.94.33-1.74.23-1.9-.1-.17-.36-.27-.76-.47z"/>
      </svg>
    </a>
  )
}
