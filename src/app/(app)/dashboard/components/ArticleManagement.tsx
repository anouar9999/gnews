'use client'

import React, { useState } from 'react'

interface Article {
  id: string
  title: string
  source: string
  status: 'NOUVEAU' | 'BROUILLON_IA' | 'EN_REVISION' | 'PUBLIE'
  category: string
  createdAt: string
  priority: 'high' | 'medium' | 'low'
}

const ArticleManagement: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'pending' | 'review' | 'published'>('pending')

  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'PS5 Pro annoncé avec des specs impressionnantes',
      source: 'GameSpot',
      status: 'BROUILLON_IA',
      category: 'Hardware',
      createdAt: '2024-12-28 14:30',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Nouveau tournoi Valorant au Maroc',
      source: 'ESL Gaming',
      status: 'BROUILLON_IA',
      category: 'Esports',
      createdAt: '2024-12-28 13:45',
      priority: 'high',
    },
    {
      id: '3',
      title: 'Test du clavier Razer BlackWidow V4',
      source: 'TechRadar',
      status: 'EN_REVISION',
      category: 'Hardware',
      createdAt: '2024-12-28 12:20',
      priority: 'medium',
    },
    {
      id: '4',
      title: 'GTA VI : Nouvelles informations dévoilées',
      source: 'IGN',
      status: 'BROUILLON_IA',
      category: 'News',
      createdAt: '2024-12-28 11:15',
      priority: 'high',
    },
    {
      id: '5',
      title: 'Call of Duty : Warzone saison 3 détails',
      source: 'Polygon',
      status: 'EN_REVISION',
      category: 'News',
      createdAt: '2024-12-28 10:30',
      priority: 'medium',
    },
  ]

  const getStatusBadge = (status: Article['status']) => {
    const styles = {
      NOUVEAU: 'bg-neutral-100 text-neutral-700 ',
      BROUILLON_IA: 'bg-red-100 text-red-700 ',
      EN_REVISION: 'bg-blue-100 text-blue-700 ',
      PUBLIE: 'bg-green-100 text-green-700 ',
    }

    return (
      <span
        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
      >
        {status.replace(/_/g, ' ')}
      </span>
    )
  }

  const getPriorityIndicator = (priority: Article['priority']) => {
    const colors = {
      high: 'bg-red-500',
      medium: 'bg-yellow-500',
      low: 'bg-green-500',
    }

    return <div className={`h-2 w-2 rounded-full ${colors[priority]}`} />
  }

  return (
    <div className="rounded-  xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-samuel  uppercase text-neutral-900">File d&apos;Attente IA</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Relecture, modification et enrichissement des articles
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex gap-2 rounded-lg bg-neutral-100 p-1">
          {[
            { key: 'all', label: 'Tous' },
            { key: 'pending', label: 'En attente' },
            { key: 'review', label: 'En révision' },
            { key: 'published', label: 'Publiés' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key as typeof selectedTab)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                selectedTab === tab.key
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Table */}
      <div className="overflow-hidden  border border-neutral-200">
        <table className="w-full">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-2 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                <div className="flex items-center gap-2">
                  <span>Priorité</span>
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Article
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Source
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Catégorie
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Statut
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {mockArticles.map((article) => (
              <tr
                key={article.id}
                className="group transition-colors hover:bg-neutral-50"
              >
                <td className="px-2 py-4">
                  <div className="flex items-center justify-center">
                    {getPriorityIndicator(article.priority)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-md">
                    <p className="font-medium text-neutral-900 group-hover:text-neutral-700">
                      {article.title}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-neutral-600">{article.source}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4">{getStatusBadge(article.status)}</td>
                <td className="px-6 py-4">
                  <span className="text-sm text-neutral-600">{article.createdAt}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {article.status === 'BROUILLON_IA' && (
                      <>
                        <button className="rounded-lg bg-green-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-green-700">
                          Publier
                        </button>
                        <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                          Réviser
                        </button>
                        <button className="rounded-lg bg-red-100 px-4 py-2 text-xs font-medium text-red-700 transition-colors hover:bg-red-200">
                          Refuser
                        </button>
                      </>
                    )}
                    {article.status === 'EN_REVISION' && (
                      <>
                        <button className="rounded-lg bg-green-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-green-700">
                          Publier
                        </button>
                        <button className="rounded-lg bg-slate-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-700">
                          Sauvegarder
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Summary */}
      <div className="mt-6 flex items-center justify-between rounded-lg bg-neutral-50 p-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-sm text-neutral-600">Haute priorité</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="text-sm text-neutral-600">Priorité moyenne</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-sm text-neutral-600">Basse priorité</span>
          </div>
        </div>
        <p className="text-sm text-neutral-600">
          <span className="font-semibold text-neutral-900">{mockArticles.length}</span> articles en
          attente de traitement
        </p>
      </div>
    </div>
  )
}

export default ArticleManagement
