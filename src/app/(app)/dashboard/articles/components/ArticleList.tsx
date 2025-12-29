'use client'

import React, { useState } from 'react'
import { Article } from '../page'

interface ArticleListProps {
  articles: Article[]
  onEdit: (article: Article) => void
  onDelete: (id: string) => void
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, onEdit, onDelete }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter((article) => {
    const matchesStatus = filterStatus === 'all' || article.status === filterStatus
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

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

    const labels = {
      high: 'Haute',
      medium: 'Moyenne',
      low: 'Basse',
    }

    return (
      <span className="flex items-center gap-2 text-sm text-neutral-600">
        <div className={`h-2 w-2 rounded-full ${colors[priority]}`} />
        {labels[priority]}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un article..."
                className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              />
              <svg
                className="absolute left-3 top-3 h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex gap-2 rounded-lg bg-neutral-100 p-1">
            {[
              { key: 'all', label: 'Tous' },
              { key: 'BROUILLON_IA', label: 'Brouillons' },
              { key: 'EN_REVISION', label: 'Révision' },
              { key: 'PUBLIE', label: 'Publiés' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setFilterStatus(filter.key)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  filterStatus === filter.key
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
          <p>
            <span className="font-semibold text-neutral-900">{filteredArticles.length}</span> article
            {filteredArticles.length !== 1 ? 's' : ''} trouvé{filteredArticles.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="group relative flex flex-col overflow-hidden  border-2 border-neutral-200 bg-white shadow-md transition-all  hover:shadow-xl"
          >
           

            {/* Featured Image Placeholder */}
            <div className="h-48 w-full bg-gradient-to-br from-neutral-100 to-neutral-200 relative">
              {article.featuredImage ? (
                <img src={article.featuredImage} alt={article.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <svg className="h-16 w-16 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              {/* Status Badge Overlay */}
              <div className="absolute right-4 top-4">
                {getStatusBadge(article.status)}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-6">
              {/* Category */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 line-clamp-2 text-2xl font-samuel uppercase text-neutral-900 transition-colors ">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
                {article.excerpt}
              </p>

              {/* Tags */}
              {article.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
                    >
                      #{tag}
                    </span>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="inline-flex items-center rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Meta Info */}
              <div className="mb-4 space-y-2 border-t-2 border-neutral-100 pt-4">
                {article.author && (
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-semibold">{article.author}</span>
                  </div>
                )}
                {article.source && (
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <span>{article.source}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    {new Date(article.createdAt).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onEdit(article)}
                  className="flex items-center justify-center gap-2  bg-neutral-900 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-neutral-800"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Modifier
                </button>

                {article.status !== 'PUBLIE' ? (
                  <button className="flex items-center justify-center gap-2  bg-red-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-red-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Publier
                  </button>
                ) : (
                  <button className="flex items-center justify-center gap-2  border-2 border-neutral-200 bg-white px-4 py-3 text-sm font-bold text-neutral-700 transition-all hover:bg-neutral-50">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    Voir
                  </button>
                )}

                <button
                  onClick={() => onDelete(article.id)}
                  className="col-span-2 flex items-center justify-center gap-2  font-black border-2 border-red-200 bg-red-50 px-4 py-3 text-sm  text-red-700 transition-all hover:bg-red-100"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredArticles.length === 0 && (
          <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-12 text-center shadow-sm backdrop-blur-sm">
            <svg
              className="mx-auto h-16 w-16 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-neutral-900">Aucun article trouvé</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Essayez de modifier vos filtres ou créez un nouvel article.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleList
