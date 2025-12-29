'use client'

import React, { useState } from 'react'

export interface Source {
  id: string
  name: string
  type: 'RSS' | 'API'
  url: string
  category: string
  isActive: boolean
  lastFetch?: string
  articlesCollected: number
  createdAt: string
}

const SourcesPage: React.FC = () => {
  const [sources, setSources] = useState<Source[]>([
    {
      id: '1',
      name: 'GameSpot RSS',
      type: 'RSS',
      url: 'https://www.gamespot.com/feeds/news/',
      category: 'Gaming',
      isActive: true,
      lastFetch: '2024-12-28T14:30:00',
      articlesCollected: 1247,
      createdAt: '2024-01-15T10:00:00',
    },
    {
      id: '2',
      name: 'IGN Gaming API',
      type: 'API',
      url: 'https://api.ign.com/articles',
      category: 'Gaming',
      isActive: true,
      lastFetch: '2024-12-28T14:25:00',
      articlesCollected: 892,
      createdAt: '2024-01-20T10:00:00',
    },
    {
      id: '3',
      name: 'TechRadar Hardware',
      type: 'RSS',
      url: 'https://www.techradar.com/rss/gaming',
      category: 'Hardware',
      isActive: true,
      lastFetch: '2024-12-28T14:20:00',
      articlesCollected: 543,
      createdAt: '2024-02-01T10:00:00',
    },
    {
      id: '4',
      name: 'ESL Esports',
      type: 'API',
      url: 'https://api.esl-gaming.com/feed',
      category: 'Esports',
      isActive: false,
      articlesCollected: 324,
      createdAt: '2024-02-10T10:00:00',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingSource, setEditingSource] = useState<Source | null>(null)

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette source ?')) {
      setSources(sources.filter((source) => source.id !== id))
    }
  }

  const handleToggleActive = (id: string) => {
    setSources(
      sources.map((source) =>
        source.id === id ? { ...source, isActive: !source.isActive } : source
      )
    )
  }

  const handleEdit = (source: Source) => {
    setEditingSource(source)
    setShowForm(true)
  }

  const handleSubmit = (sourceData: Omit<Source, 'id' | 'createdAt' | 'lastFetch' | 'articlesCollected'>) => {
    if (editingSource) {
      setSources(
        sources.map((source) =>
          source.id === editingSource.id ? { ...source, ...sourceData } : source
        )
      )
    } else {
      const newSource: Source = {
        ...sourceData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        articlesCollected: 0,
      }
      setSources([newSource, ...sources])
    }
    setShowForm(false)
    setEditingSource(null)
  }

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200/50 bg-white/40 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Gestion des Sources</h1>
              <p className="mt-1 text-sm text-neutral-600">
                Configurer les flux RSS et API pour la collecte automatique
              </p>
            </div>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Nouvelle Source
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {showForm ? (
          <SourceForm
            source={editingSource}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false)
              setEditingSource(null)
            }}
          />
        ) : (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Sources Actives"
                value={sources.filter((s) => s.isActive).length}
                total={sources.length}
                color="from-green-500 to-emerald-600"
              />
              <StatCard
                label="Articles Collectés"
                value={sources.reduce((sum, s) => sum + s.articlesCollected, 0).toLocaleString()}
                color="from-blue-500 to-blue-600"
              />
              <StatCard
                label="Sources RSS"
                value={sources.filter((s) => s.type === 'RSS').length}
                color="from-amber-500 to-orange-600"
              />
              <StatCard
                label="Sources API"
                value={sources.filter((s) => s.type === 'API').length}
                color="from-purple-500 to-purple-600"
              />
            </div>

            {/* Sources List */}
            <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <h2 className="mb-6 text-xl font-bold text-neutral-900">Liste des Sources</h2>

              <div className="space-y-4">
                {sources.map((source) => (
                  <div
                    key={source.id}
                    className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <h3 className="text-lg font-bold text-neutral-900">{source.name}</h3>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                              source.type === 'RSS'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-purple-100 text-purple-700'
                            }`}
                          >
                            {source.type}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                              source.isActive
                                ? 'bg-green-100 text-green-700'
                                : 'bg-neutral-100 text-neutral-700'
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                source.isActive ? 'bg-green-500' : 'bg-slate-400'
                              }`}
                            />
                            {source.isActive ? 'Actif' : 'Inactif'}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                            {source.category}
                          </span>
                        </div>

                        <div className="mb-3 flex items-center gap-2 text-sm text-neutral-600">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          <code className="rounded bg-neutral-100 px-2 py-1 text-xs">{source.url}</code>
                        </div>

                        <div className="flex items-center gap-6 text-xs text-neutral-500">
                          <div className="flex items-center gap-1">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span>{source.articlesCollected} articles collectés</span>
                          </div>
                          {source.lastFetch && (
                            <div className="flex items-center gap-1">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>
                                Dernière collecte:{' '}
                                {new Date(source.lastFetch).toLocaleString('fr-FR')}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleActive(source.id)}
                          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                            source.isActive
                              ? 'bg-neutral-100 text-neutral-700 hover:bg-slate-200'
                              : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                        >
                          {source.isActive ? 'Désactiver' : 'Activer'}
                        </button>
                        <button
                          onClick={() => handleEdit(source)}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(source.id)}
                          className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-200"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const StatCard = ({
  label,
  value,
  total,
  color,
}: {
  label: string
  value: number | string
  total?: number
  color: string
}) => {
  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
      <div className={`absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${color}`} />
      <p className="text-sm font-medium text-neutral-600">{label}</p>
      <p className="mt-2 text-3xl font-bold text-neutral-900">
        {value}
        {total && <span className="text-lg text-neutral-500">/{total}</span>}
      </p>
    </div>
  )
}

const SourceForm = ({
  source,
  onSubmit,
  onCancel,
}: {
  source: Source | null
  onSubmit: (data: Omit<Source, 'id' | 'createdAt' | 'lastFetch' | 'articlesCollected'>) => void
  onCancel: () => void
}) => {
  const [formData, setFormData] = useState({
    name: source?.name || '',
    type: (source?.type || 'RSS') as 'RSS' | 'API',
    url: source?.url || '',
    category: source?.category || '',
    isActive: source?.isActive ?? true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">
          {source ? 'Modifier la Source' : 'Nouvelle Source'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Nom de la source <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Ex: GameSpot RSS"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as 'RSS' | 'API' })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              >
                <option value="RSS">RSS</option>
                <option value="API">API</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Catégorie <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              >
                <option value="">Sélectionner...</option>
                <option value="Gaming">Gaming</option>
                <option value="Hardware">Hardware</option>
                <option value="Esports">Esports</option>
                <option value="News">News</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="https://example.com/feed.rss"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="h-4 w-4 rounded border-slate-300 text-neutral-900 focus:ring-2 focus:ring-slate-500"
            />
            <label htmlFor="isActive" className="text-sm font-medium text-neutral-700">
              Activer la source immédiatement
            </label>
          </div>

          <div className="flex gap-4 border-t border-neutral-200 pt-6">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-red-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
            >
              {source ? 'Mettre à jour' : 'Créer la source'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-neutral-700 transition-all hover:bg-neutral-50"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SourcesPage
