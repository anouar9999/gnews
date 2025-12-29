'use client'

import React, { useState } from 'react'
import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'

export interface Article {
  id: string
  title: string
  content: string
  excerpt: string
  source: string
  status: 'NOUVEAU' | 'BROUILLON_IA' | 'EN_REVISION' | 'PUBLIE'
  category: string
  tags: string[]
  featuredImage?: string
  seoTitle?: string
  seoDescription?: string
  slug?: string
  createdAt: string
  updatedAt: string
  priority: 'high' | 'medium' | 'low'
  author?: string
}

const ArticlesPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'PS5 Pro annoncé avec des specs impressionnantes',
      content: '<p>Sony a officiellement annoncé la PlayStation 5 Pro...</p>',
      excerpt: 'Découvrez les nouvelles spécifications de la PS5 Pro',
      source: 'GameSpot',
      status: 'BROUILLON_IA',
      category: 'Hardware',
      tags: ['PlayStation', 'PS5', 'Sony'],
      createdAt: '2024-12-28T14:30:00',
      updatedAt: '2024-12-28T14:30:00',
      priority: 'high',
      author: 'IA Generator',
      slug: 'ps5-pro-annonce-specs-impressionnantes',
    },
    {
      id: '2',
      title: 'Nouveau tournoi Valorant au Maroc',
      content: '<p>Un nouveau tournoi majeur de Valorant sera organisé au Maroc...</p>',
      excerpt: 'La scène esport marocaine accueille un tournoi Valorant',
      source: 'ESL Gaming',
      status: 'BROUILLON_IA',
      category: 'Esports',
      tags: ['Valorant', 'Esports', 'Maroc'],
      createdAt: '2024-12-28T13:45:00',
      updatedAt: '2024-12-28T13:45:00',
      priority: 'high',
      author: 'IA Generator',
      slug: 'nouveau-tournoi-valorant-maroc',
    },
    {
      id: '3',
      title: 'Test du clavier Razer BlackWidow V4',
      content: '<p>Notre test complet du nouveau clavier gaming Razer...</p>',
      excerpt: 'Analyse détaillée du dernier clavier mécanique de Razer',
      source: 'TechRadar',
      status: 'EN_REVISION',
      category: 'Hardware',
      tags: ['Razer', 'Clavier', 'Gaming'],
      createdAt: '2024-12-28T12:20:00',
      updatedAt: '2024-12-28T12:20:00',
      priority: 'medium',
      author: 'Ahmed K.',
      slug: 'test-clavier-razer-blackwidow-v4',
    },
  ])

  const handleCreateArticle = (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newArticle: Article = {
      ...article,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setArticles([newArticle, ...articles])
    setShowForm(false)
  }

  const handleUpdateArticle = (updatedArticle: Article) => {
    setArticles(
      articles.map((article) =>
        article.id === updatedArticle.id
          ? { ...updatedArticle, updatedAt: new Date().toISOString() }
          : article
      )
    )
    setEditingArticle(null)
    setShowForm(false)
  }

  const handleDeleteArticle = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setArticles(articles.filter((article) => article.id !== id))
    }
  }

  const handleEditArticle = (article: Article) => {
    setEditingArticle(article)
    setShowForm(true)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingArticle(null)
  }

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200/50 bg-white/40 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-samuel uppercase text-neutral-900">Gestion des Articles</h1>
              <p className="mt-1 text-sm text-neutral-600">
                Créer, modifier et publier des articles pour GNEWS.ma
              </p>
            </div>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2  bg-red-600 px-6 py-3 text-lg font-samuel text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Nouvel Article
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {showForm ? (
          <ArticleForm
            article={editingArticle}
            onSubmit={editingArticle ? handleUpdateArticle : handleCreateArticle}
            onCancel={handleCancelForm}
          />
        ) : (
          <ArticleList
            articles={articles}
            onEdit={handleEditArticle}
            onDelete={handleDeleteArticle}
          />
        )}
      </div>
    </div>
  )
}

export default ArticlesPage
