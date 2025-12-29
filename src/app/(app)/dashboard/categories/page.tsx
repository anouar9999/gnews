'use client'

import React, { useState } from 'react'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  color: string
  icon: string
  isActive: boolean
  articlesCount: number
  createdAt: string
}

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Gaming',
      slug: 'gaming',
      description: 'Actualités, sorties et mises à jour du monde du gaming',
      color: '#EF4444',
      icon: '🎮',
      isActive: true,
      articlesCount: 1247,
      createdAt: '2024-01-01T00:00:00',
    },
    {
      id: '2',
      name: 'Hardware',
      slug: 'hardware',
      description: 'Tests et reviews de matériel gaming',
      color: '#3B82F6',
      icon: '⚙️',
      isActive: true,
      articlesCount: 543,
      createdAt: '2024-01-01T00:00:00',
    },
    {
      id: '3',
      name: 'Esports',
      slug: 'esports',
      description: 'Tournois, compétitions et actualités esport',
      color: '#10B981',
      icon: '🏆',
      isActive: true,
      articlesCount: 892,
      createdAt: '2024-01-01T00:00:00',
    },
    {
      id: '4',
      name: 'News',
      slug: 'news',
      description: 'Dernières nouvelles de l\'industrie du jeu vidéo',
      color: '#F59E0B',
      icon: '📰',
      isActive: true,
      articlesCount: 324,
      createdAt: '2024-01-01T00:00:00',
    },
    {
      id: '5',
      name: 'Reviews',
      slug: 'reviews',
      description: 'Critiques et analyses de jeux vidéo',
      color: '#8B5CF6',
      icon: '⭐',
      isActive: true,
      articlesCount: 218,
      createdAt: '2024-01-01T00:00:00',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  const handleDelete = (id: string) => {
    const category = categories.find((c) => c.id === id)
    if (category && category.articlesCount > 0) {
      alert(`Impossible de supprimer cette catégorie. Elle contient ${category.articlesCount} articles.`)
      return
    }
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      setCategories(categories.filter((cat) => cat.id !== id))
    }
  }

  const handleToggleActive = (id: string) => {
    setCategories(
      categories.map((cat) => (cat.id === id ? { ...cat, isActive: !cat.isActive } : cat))
    )
  }

  const handleEdit = (category: Category) => {
    setEditingCategory(category)
    setShowForm(true)
  }

  const handleSubmit = (categoryData: Omit<Category, 'id' | 'createdAt' | 'articlesCount'>) => {
    if (editingCategory) {
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...categoryData } : cat
        )
      )
    } else {
      const newCategory: Category = {
        ...categoryData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        articlesCount: 0,
      }
      setCategories([...categories, newCategory])
    }
    setShowForm(false)
    setEditingCategory(null)
  }

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200/50 bg-white/40 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Gestion des Catégories</h1>
              <p className="mt-1 text-sm text-neutral-600">
                Organiser et structurer le contenu par catégories
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
                Nouvelle Catégorie
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {showForm ? (
          <CategoryForm
            category={editingCategory}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false)
              setEditingCategory(null)
            }}
          />
        ) : (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-medium text-neutral-600">Total Catégories</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">{categories.length}</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-medium text-neutral-600">Catégories Actives</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">
                  {categories.filter((c) => c.isActive).length}
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-medium text-neutral-600">Total Articles</p>
                <p className="mt-2 text-3xl font-bold text-neutral-900">
                  {categories.reduce((sum, c) => sum + c.articlesCount, 0).toLocaleString()}
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-medium text-neutral-600">Catégorie Principale</p>
                <p className="mt-2 text-lg font-bold text-neutral-900">
                  {categories.sort((a, b) => b.articlesCount - a.articlesCount)[0]?.name || 'N/A'}
                </p>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group overflow-hidden rounded-2xl border border-neutral-200/50 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:shadow-lg"
                  style={{ borderTopColor: category.color, borderTopWidth: '4px' }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{category.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900">{category.name}</h3>
                          <span className="text-xs text-neutral-500">/{category.slug}</span>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                          category.isActive
                            ? 'bg-green-100 text-green-700'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            category.isActive ? 'bg-green-500' : 'bg-slate-400'
                          }`}
                        />
                        {category.isActive ? 'Actif' : 'Inactif'}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm text-neutral-600">{category.description}</p>

                    {/* Stats */}
                    <div className="mb-4 flex items-center gap-4 border-t border-neutral-200 pt-4">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="font-semibold text-neutral-900">
                          {category.articlesCount.toLocaleString()}
                        </span>
                        <span>articles</span>
                      </div>
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleActive(category.id)}
                        className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          category.isActive
                            ? 'bg-neutral-100 text-neutral-700 hover:bg-slate-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        {category.isActive ? 'Désactiver' : 'Activer'}
                      </button>
                      <button
                        onClick={() => handleEdit(category)}
                        className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-200"
                        disabled={category.articlesCount > 0}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const CategoryForm = ({
  category,
  onSubmit,
  onCancel,
}: {
  category: Category | null
  onSubmit: (data: Omit<Category, 'id' | 'createdAt' | 'articlesCount'>) => void
  onCancel: () => void
}) => {
  const [formData, setFormData] = useState({
    name: category?.name || '',
    slug: category?.slug || '',
    description: category?.description || '',
    color: category?.color || '#3B82F6',
    icon: category?.icon || '📁',
    isActive: category?.isActive ?? true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const commonIcons = ['🎮', '⚙️', '🏆', '📰', '⭐', '🎯', '🚀', '💡', '🔥', '⚡', '🎨', '📱']
  const commonColors = [
    '#EF4444',
    '#3B82F6',
    '#10B981',
    '#F59E0B',
    '#8B5CF6',
    '#EC4899',
    '#06B6D4',
    '#84CC16',
  ]

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">
          {category ? 'Modifier la Catégorie' : 'Nouvelle Catégorie'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => {
                const name = e.target.value
                const slug = name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-|-$/g, '')
                setFormData({ ...formData, name, slug })
              }}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Ex: Gaming"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="gaming"
            />
            <p className="mt-1 text-xs text-neutral-500">URL-friendly version du nom</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Description de la catégorie..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Icône</label>
            <div className="mb-3 flex gap-2">
              {commonIcons.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon })}
                  className={`rounded-lg border-2 p-3 text-2xl transition-all ${
                    formData.icon === icon
                      ? 'border-slate-900 bg-neutral-100'
                      : 'border-neutral-200 hover:border-slate-300'
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Ou entrez un emoji personnalisé"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Couleur</label>
            <div className="mb-3 flex gap-2">
              {commonColors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setFormData({ ...formData, color })}
                  className={`h-10 w-10 rounded-lg border-2 transition-all ${
                    formData.color === color ? 'border-slate-900 scale-110' : 'border-neutral-200'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <input
              type="color"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="h-12 w-full rounded-lg border border-slate-300"
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
              Activer la catégorie immédiatement
            </label>
          </div>

          <div className="flex gap-4 border-t border-neutral-200 pt-6">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-red-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
            >
              {category ? 'Mettre à jour' : 'Créer la catégorie'}
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

export default CategoriesPage
