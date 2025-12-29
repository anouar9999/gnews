'use client'

import React, { useState, useEffect } from 'react'
import { Article } from '../page'

interface ArticleFormProps {
  article?: Article | null
  onSubmit: (article: any) => void
  onCancel: () => void
}

const ArticleForm: React.FC<ArticleFormProps> = ({ article, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    source: '',
    status: 'BROUILLON_IA' as Article['status'],
    category: '',
    tags: [] as string[],
    featuredImage: '',
    seoTitle: '',
    seoDescription: '',
    slug: '',
    priority: 'medium' as Article['priority'],
    author: '',
  })

  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title,
        content: article.content,
        excerpt: article.excerpt,
        source: article.source,
        status: article.status,
        category: article.category,
        tags: article.tags,
        featuredImage: article.featuredImage || '',
        seoTitle: article.seoTitle || '',
        seoDescription: article.seoDescription || '',
        slug: article.slug || '',
        priority: article.priority,
        author: article.author || '',
      })
    }
  }, [article])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (article) {
      onSubmit({ ...article, ...formData })
    } else {
      onSubmit(formData)
    }
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] })
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter((tag) => tag !== tagToRemove) })
  }

  const categories = ['Gaming', 'Hardware', 'Esports', 'News', 'Reviews']

  return (
    <div className="mx-auto ">
      <div className="  bg-white/80 p-8 ">
        <h2 className="mb-6 text-2xl font-samuel text-neutral-900">
          {article ? 'Modifier l\'Article' : 'Nouvel Article'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Titre de l&apos;article <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Ex: PS5 Pro annoncé avec des specs impressionnantes"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Slug (URL)</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="ps5-pro-annonce-specs-impressionnantes"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Extrait <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={2}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Bref résumé de l'article..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Contenu <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={12}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="Contenu complet de l'article (HTML supporté)..."
            />
          </div>

          {/* Row: Category, Status, Priority */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">Statut</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Article['status'] })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              >
                <option value="NOUVEAU">NOUVEAU</option>
                <option value="BROUILLON_IA">BROUILLON_IA</option>
                <option value="EN_REVISION">EN_REVISION</option>
                <option value="PUBLIE">PUBLIE</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">Priorité</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value as Article['priority'] })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              >
                <option value="low">Basse</option>
                <option value="medium">Moyenne</option>
                <option value="high">Haute</option>
              </select>
            </div>
          </div>

          {/* Row: Source, Author */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">Source</label>
              <input
                type="text"
                value={formData.source}
                onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                placeholder="Ex: GameSpot, IGN..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">Auteur</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                placeholder="Nom de l'auteur"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Tags</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                placeholder="Ajouter un tag et appuyer sur Entrée"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="rounded-lg bg-slate-200 px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-slate-300"
              >
                Ajouter
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-neutral-500 hover:text-neutral-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Image à la Une (URL)
            </label>
            <input
              type="url"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* SEO Section */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">Titre SEO</label>
                <input
                  type="text"
                  value={formData.seoTitle}
                  onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                  placeholder="Titre optimisé pour les moteurs de recherche"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Meta Description
                </label>
                <textarea
                  value={formData.seoDescription}
                  onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
                  placeholder="Description pour les résultats de recherche (150-160 caractères)"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 border-t border-neutral-200 pt-6">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-red-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
            >
              {article ? 'Mettre à jour' : 'Créer l\'article'}
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

export default ArticleForm
