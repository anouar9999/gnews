import { CustomLink } from '@/data/types'
import Logo from '@/shared/Logo'
import SocialsList1 from '@/shared/SocialsList1'
import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/fonts/zentry-regular.woff2',
  display: 'swap',
})

interface WidgetFooterMenu {
  id: string
  title: string
  menus: CustomLink[]
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: '1',
    title: 'Catégories',
    menus: [
      { href: '/gaming', label: 'Gaming' },
      { href: '/esports', label: 'Esports' },
      { href: '/hardware', label: 'Hardware' },
      { href: '/reviews', label: 'Tests' },
      { href: '/news', label: 'Actualités' },
    ],
  },
  {
    id: '2',
    title: 'À Propos',
    menus: [
      { href: '#', label: 'À Propos de GNEWS' },
      { href: '#', label: 'Notre Équipe' },
      { href: '#', label: 'Contactez-Nous' },
      { href: '#', label: 'Publicité' },
      { href: '#', label: 'Carrières' },
    ],
  },
  {
    id: '3',
    title: 'Support',
    menus: [
      { href: '#', label: 'Centre d\'Aide' },
      { href: '#', label: 'Politique de Confidentialité' },
      { href: '#', label: 'Conditions d\'Utilisation' },
      { href: '#', label: 'Politique des Cookies' },
      { href: '#', label: 'Plan du Site' },
    ],
  },
  {
    id: '4',
    title: 'Suivez-Nous',
    menus: [
      { href: '#', label: 'Facebook' },
      { href: '#', label: 'Twitter' },
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'YouTube' },
      { href: '#', label: 'Discord' },
    ],
  },
]

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h3
          style={myFont.style}
          className="mb-6 text-base font-black uppercase tracking-wider text-white"
        >
          {menu.title}
        </h3>
        <ul className="space-y-3">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                className="text-neutral-400 transition-colors hover:text-red-600"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <footer className="relative border-t-4 border-red-600 bg-gradient-to-br from-neutral-900 via-black to-neutral-900">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/5 blur-[140px]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
            {/* Logo and Description Column */}
            <div className="lg:col-span-2">
              <Logo className="mb-6 w-32" />
              <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                GNEWS.ma - La destination principale du Maroc pour les actualités gaming, la couverture esports, les tests hardware et les analyses de l industrie.
              </p>
              <SocialsList1 className="flex items-center gap-4" />
            </div>

            {/* Menu Columns */}
            {widgetMenus.map(renderWidgetMenuItem)}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="container px-4 py-6">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
              <p>© 2025 GNEWS.ma. Tous droits réservés.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="transition-colors hover:text-red-600">
                  Politique de Confidentialité
                </a>
                <a href="#" className="transition-colors hover:text-red-600">
                  Conditions d Utilisation
                </a>
                <a href="#" className="transition-colors hover:text-red-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
