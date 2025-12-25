'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { XMarkIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface MobileHeaderProps {
  className?: string
}

const MobileHeader: FC<MobileHeaderProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Category links - matching desktop header
  const categoryLinks = [
    { name: 'HOME', href: '/' },
    { name: 'GAMING', href: '/gaming' },
    { name: 'ESPORTS', href: '/esports' },
    { name: 'HARDWARE', href: '/hardware' },
    { name: 'REVIEWS', href: '/reviews' },
    { name: 'NEWS', href: '/news' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ]

  return (
    <>
      <header className={clsx('sticky top-0 z-50 shadow-2xl lg:hidden', className)}>
        {/* Top Bar - Compact for Mobile */}
        <div className="relative overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-neutral-800">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-orange-600/5" />

          <div className="container relative px-4">
            <div className="flex items-center justify-between h-9">
              {/* Social Links */}
              <div className="flex items-center gap-0.5">
                {socialLinks.slice(0, 3).map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center text-neutral-500 hover:text-red-500 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* Date */}
              <span className="hidden sm:block text-[9px] text-neutral-500 uppercase tracking-widest font-medium">
                {new Date().toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="relative bg-black">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="container relative px-4">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="group">
                <div className="flex items-baseline">
                  <span className="font-zentry text-2xl font-black tracking-wide text-white transition-all group-hover:text-red-500">
                    G
                  </span>
                  <span className="font-zentry text-2xl font-black tracking-wide text-red-600">
                    NEWS
                  </span>
                </div>
              </Link>

              {/* Right Actions */}
              <div className="flex items-center gap-2">
                {/* Search Button */}
                <Link
                  href="/search"
                  className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 rounded transition-all"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="w-9 h-9 flex items-center justify-center text-white hover:text-red-600 hover:bg-neutral-900 rounded transition-all"
                  aria-label="Open menu"
                >
                  <Bars3Icon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-[2px] bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-pulse" style={{ animationDuration: '3s' }} />
      </header>

      {/* Mobile Menu - Matching Desktop Style */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-black via-neutral-950 to-black shadow-2xl z-[70] overflow-y-auto border-l-4 border-red-600">
            {/* Mobile Menu Header */}
            <div className="relative flex items-center justify-between h-16 px-6 border-b border-neutral-800 bg-gradient-to-r from-neutral-900 to-black">
              <div className="font-zentry text-2xl font-black">
                G<span className="text-red-600">NEWS</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-red-600 hover:bg-neutral-900 rounded-full transition-all"
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-6">
              <div className="space-y-1">
                {categoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative block px-5 py-4 text-base font-black text-neutral-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition-all uppercase tracking-[0.1em] border-l-4 border-transparent hover:border-white overflow-hidden"
                  >
                    <span className="flex items-center justify-between relative z-10">
                      {link.name}
                      <svg
                        className="w-5 h-5 text-neutral-600 group-hover:text-white transition-all group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>

              {/* GAMIUS CTA */}
              <div className="mt-8">
                <Link
                  href="https://gamius.ma"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group relative block px-6 py-4 bg-gradient-to-r from-red-600 via-red-500 to-orange-600 text-white text-center text-sm font-black uppercase tracking-[0.15em] shadow-lg hover:shadow-red-600/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Discover GAMIUS.MA
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <div className="text-[10px] font-black uppercase mb-4 px-5 text-neutral-500 tracking-[0.2em]">
                  Follow Us
                </div>
                <div className="flex gap-2 px-5">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center bg-neutral-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 text-neutral-500 hover:text-white transition-all border border-neutral-800 hover:border-transparent"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default MobileHeader
