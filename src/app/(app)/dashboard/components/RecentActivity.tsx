'use client'

import React from 'react'

interface Activity {
  id: string
  type: 'collect' | 'generate' | 'review' | 'publish'
  message: string
  time: string
  user?: string
}

const RecentActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'publish',
      message: 'Article "PS5 Pro annoncé" publié sur GNEWS.ma',
      time: 'Il y a 5 minutes',
      user: 'Sarah M.',
    },
    {
      id: '2',
      type: 'review',
      message: 'Article "Nouveau tournoi Valorant" mis en révision',
      time: 'Il y a 12 minutes',
      user: 'Ahmed K.',
    },
    {
      id: '3',
      type: 'generate',
      message: "15 nouveaux brouillons générés par l'IA",
      time: 'Il y a 25 minutes',
    },
    {
      id: '4',
      type: 'collect',
      message: '47 nouvelles sources collectées (RSS/APIs)',
      time: 'Il y a 1 heure',
    },
    {
      id: '5',
      type: 'publish',
      message: 'Article "GTA VI : Nouvelles infos" publié',
      time: 'Il y a 2 heures',
      user: 'Karim B.',
    },
    {
      id: '6',
      type: 'review',
      message: 'Article "Test Razer BlackWidow" en cours de révision',
      time: 'Il y a 3 heures',
      user: 'Sarah M.',
    },
  ]

  const getActivityIcon = (type: Activity['type']) => {
    const icons = {
      collect: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
      generate: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      review: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      publish: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    }

    const colors = {
      collect: 'bg-neutral-100 text-neutral-700',
      generate: 'bg-red-100 text-red-700',
      review: 'bg-blue-100 text-blue-700',
      publish: 'bg-green-100 text-green-700',
    }

    return <div className={`rounded-lg p-2 ${colors[type]}`}>{icons[type]}</div>
  }

  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">Activité Récente</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Suivi en temps réel de la chaîne de production de contenu
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-neutral-50/50 p-4 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-md"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-neutral-900">{activity.message}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                <span>{activity.time}</span>
                {activity.user && (
                  <>
                    <span>•</span>
                    <span className="font-medium text-neutral-700">Par {activity.user}</span>
                  </>
                )}
              </div>
            </div>

            {/* Timeline connector */}
            {index < activities.length - 1 && (
              <div className="absolute left-10 top-16 h-8 w-px bg-slate-200" />
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 text-center">
        <button className="rounded-lg border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-slate-400 hover:bg-neutral-50">
          Voir toute l&apos;activité
        </button>
      </div>
    </div>
  )
}

export default RecentActivity
