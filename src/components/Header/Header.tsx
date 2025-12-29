'use client'

import Logo from '@/shared/Logo'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState, useRef, useEffect } from 'react'
import AvatarDropdown from './AvatarDropdown'
import { XMarkIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface HeaderGNewsProps {
  className?: string
}

const HeaderGNews: FC<HeaderGNewsProps> = ({ className }) => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  // Navigation categories - Gaming News
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
    {
      name: 'RSS',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
        </svg>
      )
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      <header className={clsx('sticky top-0 z-50 shadow-2xl', className)}>
        {/* Top Bar - Enhanced with Gradient Background */}
        <div className="relative overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-neutral-800">
          {/* Subtle glow effect */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-orange-600/5" />

          <div className="container relative">
            <div className="flex items-center justify-between h-10 px-4">
              {/* Left - Social Links */}
              <div className="flex items-center gap-0.5">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center text-neutral-500 hover:text-red-500 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>

              {/* Right - Date & Search */}
              <div className="flex items-center gap-3">
                <span className="hidden md:block text-[10px] text-neutral-500 uppercase tracking-widest font-medium">
                  {new Date().toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-red-600 transition-all uppercase tracking-widest rounded-sm"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="w-3 h-3" />
                  <span className="hidden sm:inline">Rechercher</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header - Logo & Navigation */}
        <div className="relative bg-black">
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="container relative">
            <div className="flex items-center justify-between py-2 lg:py-4 px-4">
              {/* Logo - Using Zentry Font */}
              <Link href="/" className="flex-shrink-0 group">
                <div className="flex items-center gap-3">
                  <div className="flex items-baseline tracking-widest">
                    <span className="font-zentry text-3xl tracking-wide md:text-4xl lg:text-5xl font-black  text-white transition-all group-hover:text-red-500">
                      G
                    </span>
                    <span className="font-zentry text-3xl tracking-wide md:text-4xl lg:text-5xl font-black  text-red-600">
                      NEWS
                    </span>
                  </div>
                  <div className="hidden sm:flex flex-col">
                    <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                      Gaming
                    </span>
                    <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-[0.2em]">
                      Morocco
                    </span>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation - Enhanced */}
              <nav className="hidden lg:flex items-center ">
                {categoryLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "relative px-5 py-2.5 text-[0.9rem] font-bold transition-all uppercase group overflow-hidden",
                        isActive ? "text-black" : "text-white hover:text-black"
                      )}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <span className={clsx(
                        "absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      )} />
                    </Link>
                  )
                })}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:text-red-600 transition-colors hover:bg-neutral-900 rounded"
                aria-label="Open menu"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>

              {/* CTA Button - Enhanced */}
              <Link
                href="https://gamius.ma"
                target="_blank"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-500 to-orange-600 text-white text-lg font-black hover:shadow-lg hover:shadow-red-600/50 transition-all uppercase    relative overflow-hidden group"
              >
                <span className="relative z-10 font-zentry">GAMIUS.MA</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line - Animated */}
        <div className="h-[2px] bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-pulse" style={{ animationDuration: '3s' }} />
      </header>

      {/* Search Overlay - Enhanced Gaming Theme */}
      {searchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-xl"
            onClick={() => {
              setSearchOpen(false)
              setSearchQuery('')
            }}
          />

          <div className="fixed inset-x-0 top-0 z-[70] animate-fade-in">
            <div className="container py-16 px-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-neutral-900 via-black to-neutral-900  shadow-2xl shadow-white/30 overflow-hidden">
                  {/* Glow effect */}

                  <form onSubmit={handleSearch} className="relative">
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 text-red-600">
                      <MagnifyingGlassIcon className="w-8 h-8" />
                    </div>

                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Rechercher actualités gaming, tests, hardware..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="font-zentry w-full pl-20 pr-20 py-12 text-3xl font-black bg-transparent text-white placeholder:text-neutral-700 outline-none focus:ring-0 uppercase tracking-tight"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-red-600 hover:bg-neutral-800 rounded-full transition-all"
                    >
                      <XMarkIcon className="w-7 h-7" />
                    </button>
                  </form>

                  {/* Popular Searches */}
                  {/* <div className="relative border-t border-neutral-800 px-8 py-6">
                    <div className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] mb-4">
                      Recherches Populaires
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['PS5', 'PC Gaming', 'Esports Morocco', 'RTX 4090', 'Nintendo Switch', 'Gaming Laptops'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSearchQuery(tag)
                            handleSearch(new Event('submit') as any)
                          }}
                          className="px-4 py-2 bg-neutral-800/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 text-xs font-bold text-neutral-300 hover:text-white transition-all uppercase tracking-wider border border-neutral-700 hover:border-transparent"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Menu - Enhanced Gaming Theme */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-black via-neutral-950 to-black shadow-2xl z-50 overflow-y-auto border-l-4 border-red-600">
            {/* Header */}
            <div className="relative flex items-center justify-between h-20 px-6 border-b border-neutral-800 bg-gradient-to-r from-neutral-900 to-black">
              <div className="font-zentry text-3xl font-black">
                G<span className="text-red-600">NEWS</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-red-600 hover:bg-neutral-900 rounded-full transition-all"
              >
                <XMarkIcon className="w-7 h-7" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <div className="space-y-1">
                {categoryLinks.map((link, index) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={clsx(
                        "group relative block px-5 py-4 text-base font-black transition-all uppercase tracking-[0.1em] border-l-4 overflow-hidden",
                        isActive
                          ? "text-white bg-gradient-to-r from-red-600 to-orange-600 border-white"
                          : "text-neutral-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 border-transparent hover:border-white"
                      )}
                    >
                      <span className="flex items-center justify-between relative z-10">
                        {link.name}
                        <svg
                          className={clsx(
                            "w-5 h-5 transition-all group-hover:translate-x-1",
                            isActive ? "text-white" : "text-neutral-600 group-hover:text-white"
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  )
                })}
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
                    Découvrir GAMIUS.MA
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
                  Suivez-Nous
                </div>
                <div className="flex gap-2 px-5">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="w-11 h-11 flex items-center justify-center bg-neutral-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 text-neutral-500 hover:text-white transition-all border border-neutral-800 hover:border-transparent"
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

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  )
}

export default HeaderGNews