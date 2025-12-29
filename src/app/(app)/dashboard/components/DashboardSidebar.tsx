'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const DashboardSidebar: React.FC = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    {
      name: 'Vue d\'ensemble',
      href: '/dashboard',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: 'Articles',
      href: '/dashboard/articles',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      badge: '42',
    },
    {
      name: 'Sources',
      href: '/dashboard/sources',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
    },
    {
      name: 'Workflows',
      href: '/dashboard/workflows',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      name: 'Catégories',
      href: '/dashboard/categories',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
    },
  ]

  const secondaryNavigation = [
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      name: 'Paramètres',
      href: '/dashboard/settings',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed left-4 top-4 z-50  bg-neutral-900 p-2 text-white shadow-lg lg:hidden"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform border-r-2 border-neutral-200 bg-white shadow-md transition-transform duration-300 lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b-2 border-neutral-200 p-6">
            <Link href="/dashboard" className="block">
              <h1 className="text-5xl font-zentry  text-neutral-900">
                GNEWS<span className="text-red-600">.ma</span>
              </h1>
              <p className="mt-1 text-xs font-semibold text-neutral-600">Back-Office CMS</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-4">
            <div className="mb-6">
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
                Principal
              </p>
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>

            <div>
              <p className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
                Outils
              </p>
              {secondaryNavigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* User section */}
          <div className="border-t-2 border-neutral-200 p-4">
            <div className="flex items-center gap-3 rounded-lg bg-neutral-50 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                SM
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-bold text-neutral-900">Sarah Martinez</p>
                <p className="truncate text-xs font-semibold text-neutral-500">Éditeur en Chef</p>
              </div>
            </div>

            <button className="mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-neutral-700 transition-colors hover:bg-neutral-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Déconnexion
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

export default DashboardSidebar
