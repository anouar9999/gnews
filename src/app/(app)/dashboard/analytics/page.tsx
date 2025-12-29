'use client'

import React, { useState } from 'react'

const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d')

  const stats = {
    totalArticles: 3224,
    publishedThisMonth: 187,
    averagePerDay: 6.2,
    totalViews: 452789,
    uniqueVisitors: 89234,
    avgTimeOnPage: '3:24',
    bounceRate: '42%',
    topCategory: 'Gaming',
  }

  const categoryPerformance = [
    { name: 'Gaming', articles: 1247, views: 185430, engagement: 78 },
    { name: 'Esports', articles: 892, views: 142560, engagement: 82 },
    { name: 'Hardware', articles: 543, views: 89234, engagement: 71 },
    { name: 'Reviews', articles: 324, views: 45678, engagement: 85 },
    { name: 'News', articles: 218, views: 38901, engagement: 65 },
  ]

  const topArticles = [
    {
      title: 'PS5 Pro : Toutes les spécifications révélées',
      views: 12453,
      category: 'Gaming',
      published: '2024-12-25',
    },
    {
      title: 'Test complet : Razer BlackWidow V4',
      views: 9876,
      category: 'Hardware',
      published: '2024-12-24',
    },
    {
      title: 'Championnat Valorant Maroc : Résultats',
      views: 8765,
      category: 'Esports',
      published: '2024-12-23',
    },
    {
      title: 'GTA VI : Date de sortie confirmée',
      views: 7654,
      category: 'News',
      published: '2024-12-22',
    },
    {
      title: 'Call of Duty Modern Warfare 3 - Review',
      views: 6543,
      category: 'Reviews',
      published: '2024-12-21',
    },
  ]

  const trafficSources = [
    { source: 'Organique (SEO)', percentage: 45, visits: 40105 },
    { source: 'Réseaux Sociaux', percentage: 30, visits: 26770 },
    { source: 'Direct', percentage: 15, visits: 13385 },
    { source: 'Référencement', percentage: 10, visits: 8923 },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200/50 bg-white/40 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Analytics</h1>
              <p className="mt-1 text-sm text-neutral-600">
                Statistiques et performances de votre contenu
              </p>
            </div>
            {/* Time Range Selector */}
            <div className="flex gap-2 rounded-lg bg-neutral-100 p-1">
              {[
                { key: '7d', label: '7 jours' },
                { key: '30d', label: '30 jours' },
                { key: '90d', label: '90 jours' },
                { key: 'all', label: 'Tout' },
              ].map((range) => (
                <button
                  key={range.key}
                  onClick={() => setTimeRange(range.key as typeof timeRange)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    timeRange === range.key
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Articles Publiés"
            value={stats.publishedThisMonth.toString()}
            subtext="ce mois-ci"
            change="+12%"
            trend="up"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          />
          <MetricCard
            label="Vues Totales"
            value={stats.totalViews.toLocaleString()}
            subtext="derniers 30 jours"
            change="+24%"
            trend="up"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />
          <MetricCard
            label="Visiteurs Uniques"
            value={stats.uniqueVisitors.toLocaleString()}
            subtext="derniers 30 jours"
            change="+18%"
            trend="up"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
          />
          <MetricCard
            label="Temps Moyen"
            value={stats.avgTimeOnPage}
            subtext="par page"
            change="+5%"
            trend="up"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Category Performance */}
          <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Performance par Catégorie</h2>
            <div className="space-y-4">
              {categoryPerformance.map((category, index) => (
                <div key={index}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-900">{category.name}</span>
                    <div className="flex items-center gap-4 text-xs text-neutral-600">
                      <span>{category.articles} articles</span>
                      <span>{category.views.toLocaleString()} vues</span>
                    </div>
                  </div>
                  <div className="relative h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                      style={{ width: `${category.engagement}%` }}
                    />
                  </div>
                  <div className="mt-1 text-right text-xs text-neutral-500">
                    {category.engagement}% engagement
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-bold text-neutral-900">Sources de Trafic</h2>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-900">{source.source}</span>
                      <span className="text-sm font-bold text-neutral-900">{source.percentage}%</span>
                    </div>
                    <div className="relative h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">
                      {source.visits.toLocaleString()} visites
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Articles */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="mb-6 text-xl font-bold text-neutral-900">Articles les Plus Performants</h2>
          <div className="overflow-hidden rounded-xl border border-neutral-200">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                    Article
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                    Catégorie
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                    Vues
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {topArticles.map((article, index) => (
                  <tr key={index} className="transition-colors hover:bg-neutral-50">
                    <td className="px-6 py-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-neutral-900">{article.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span className="font-semibold text-neutral-900">
                          {article.views.toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600">
                      {new Date(article.published).toLocaleDateString('fr-FR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Taux de Rebond</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">{stats.bounceRate}</p>
              </div>
              <div className="rounded-full bg-red-100 p-3">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-xs text-green-600">-3% vs mois dernier</p>
          </div>

          <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Articles / Jour</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">{stats.averagePerDay}</p>
              </div>
              <div className="rounded-full bg-blue-100 p-3">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-xs text-green-600">+8% vs mois dernier</p>
          </div>

          <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Catégorie #1</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">{stats.topCategory}</p>
              </div>
              <div className="rounded-full bg-amber-100 p-3">
                <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-xs text-neutral-600">Plus performante</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MetricCard = ({
  label,
  value,
  subtext,
  change,
  trend,
  icon,
}: {
  label: string
  value: string
  subtext: string
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}) => {
  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-600">{label}</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900">{value}</p>
          <p className="mt-1 text-xs text-neutral-500">{subtext}</p>
          <div className="mt-3 flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {trend === 'up' ? '↑' : '↓'} {change}
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-100 p-3 text-neutral-700">{icon}</div>
      </div>
    </div>
  )
}

export default AnalyticsPage
