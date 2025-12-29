'use client'

import React from 'react'

const   StatsOverview: React.FC = () => {
  const stats = [
    {
      label: 'Articles Collectés',
      value: '247',
      subtext: 'Dernières 24h',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: 'from-neutral-600 to-neutral-700',
    },
    {
      label: 'Brouillons IA',
      value: '42',
      subtext: 'En attente de validation',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: 'from-amber-500 to-orange-600',
    },
    {
      label: 'En Révision',
      value: '18',
      subtext: 'Relecture en cours',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Publiés Aujourd&apos;hui',
      value: '12',
      subtext: 'Sur GNEWS.ma',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative overflow-hidden  border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 "
        >
          {/* Gradient accent bar */}
          <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${stat.color}`} />

          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-xl uppercase font-samuel text-neutral-600">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">{stat.value}</p>
              <p className="mt-1 text-xs text-neutral-500">{stat.subtext}</p>
            </div>
            <div className={`rounded-xl bg-gradient-to-br ${stat.color} p-3 text-white opacity-90`}>
              {stat.icon}
            </div>
          </div>

          {/* Hover effect gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  )
}

export default StatsOverview
