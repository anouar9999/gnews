'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../../../../../public/fonts/zentry-regular.woff2',
  display: 'swap',
})

const ArticleViewPage: React.FC = () => {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  // Mock article data - in production, this would fetch from your API/database
  const article = {
    id: '1',
    title: 'PS5 Pro annoncé avec des specs impressionnantes',
    slug: 'ps5-pro-annonce-specs-impressionnantes',
    content: `
      <h2>Introduction</h2>
      <p>Sony a officiellement annoncé la PlayStation 5 Pro lors d'un événement spécial hier soir, révélant des spécifications qui promettent de redéfinir l'expérience de jeu sur console.</p>

      <h2>Spécifications Techniques</h2>
      <p>La PS5 Pro est équipée d'un GPU personnalisé AMD RDNA 3 avec 60 unités de calcul, offrant une puissance de traitement graphique jusqu'à 45% supérieure à la PS5 standard. Le processeur reste le même AMD Zen 2 8 cœurs, mais avec une fréquence d'horloge légèrement augmentée.</p>

      <h3>Principales améliorations :</h3>
      <ul>
        <li>GPU AMD RDNA 3 avec 60 CU</li>
        <li>16 GB de GDDR6 RAM (contre 16 GB sur PS5)</li>
        <li>SSD NVMe personnalisé de 2 TB</li>
        <li>Support natif du 8K à 60 fps</li>
        <li>Ray tracing amélioré avec hardware dédié</li>
        <li>PSVR 2 optimisé avec rendu fovéal</li>
      </ul>

      <h2>Prix et Disponibilité</h2>
      <p>La PlayStation 5 Pro sera disponible à partir du 15 novembre 2024 au prix de 599€ pour la version Digital Edition et 699€ pour la version avec lecteur de disques Ultra HD Blu-ray.</p>

      <h2>Ce que cela signifie pour les joueurs</h2>
      <p>Avec ces améliorations substantielles, la PS5 Pro promet d'offrir une expérience de jeu en 4K à 120 fps de manière plus cohérente, ainsi qu'un meilleur support du ray tracing dans les titres AAA. Les développeurs pourront également créer des expériences plus riches visuellement sans compromettre les performances.</p>

      <blockquote>
        "La PS5 Pro représente notre vision d'une console de nouvelle génération qui ne fait aucun compromis. Nous sommes ravis de voir ce que les développeurs créeront avec cette puissance supplémentaire." - Mark Cerny, Lead System Architect chez Sony Interactive Entertainment
      </blockquote>

      <h2>Conclusion</h2>
      <p>La PlayStation 5 Pro est une mise à niveau bienvenue pour les joueurs qui recherchent les meilleures performances possibles sur console. Bien que le prix soit élevé, les améliorations techniques justifient l'investissement pour les passionnés de jeux vidéo.</p>
    `,
    excerpt: 'Découvrez les nouvelles spécifications de la PS5 Pro',
    category: 'Hardware',
    tags: ['PlayStation', 'PS5', 'Sony', 'Console'],
    status: ('BROUILLON_IA' as const) as 'NOUVEAU' | 'BROUILLON_IA' | 'EN_REVISION' | 'PUBLIE',
    priority: 'high' as const,
    author: 'IA Generator',
    source: 'GameSpot',
    featuredImage: '/placeholder-gaming.jpg',
    createdAt: '2024-12-28T14:30:00',
    updatedAt: '2024-12-28T14:30:00',
    seoTitle: 'PS5 Pro : Spécifications, Prix et Date de Sortie',
    seoDescription: 'Découvrez tout ce qu\'il faut savoir sur la nouvelle PlayStation 5 Pro : spécifications techniques, prix, date de sortie et améliorations.',
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      NOUVEAU: 'bg-neutral-100 text-neutral-700 border-neutral-300',
      BROUILLON_IA: 'bg-red-100 text-red-700 border-red-300',
      EN_REVISION: 'bg-blue-100 text-blue-700 border-blue-300',
      PUBLIE: 'bg-green-100 text-green-700 border-green-300',
    }

    const labels = {
      NOUVEAU: 'Nouveau',
      BROUILLON_IA: 'Brouillon IA',
      EN_REVISION: 'En Révision',
      PUBLIE: 'Publié',
    }

    return (
      <span
        className={`inline-flex items-center rounded-full border-2 px-4 py-1.5 text-sm font-bold ${styles[status as keyof typeof styles]}`}
      >
        {labels[status as keyof typeof labels]}
      </span>
    )
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b-2 border-neutral-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-neutral-700 transition-colors hover:text-neutral-900"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold">Retour aux articles</span>
            </button>

            <div className="flex items-center gap-3">
              {getStatusBadge(article.status)}

              <Link
                href={`/blog/${article.slug}`}
                target="_blank"
                className="flex items-center gap-2 rounded-lg border-2 border-neutral-200 bg-white px-4 py-2 text-sm font-bold text-neutral-700 transition-all hover:bg-neutral-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Voir sur le site
              </Link>

              <button className="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-neutral-800">
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

              {article.status !== 'PUBLIE' && (
                <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-red-700">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Publier
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Featured Image */}
          {article.featuredImage && (
            <div className="mb-8 overflow-hidden rounded-2xl border-2 border-neutral-200">
              <div className="relative h-96 w-full bg-gradient-to-br from-neutral-100 to-neutral-200">
                <div className="flex h-full items-center justify-center">
                  <svg className="h-24 w-24 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Article Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4 border-b-2 border-neutral-100 pb-6">
            <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-bold uppercase tracking-wide text-red-700">
              {article.category}
            </span>

            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-lg bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            style={myFont.style}
            className="mb-6 text-5xl font-black uppercase leading-tight text-neutral-900"
          >
            {article.title}
          </h1>

          {/* Article Info */}
          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-neutral-600">
            {article.author && (
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span>Source: {article.source}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>

          {/* Excerpt */}
          <div className="mb-8 rounded-xl border-l-4 border-red-600 bg-red-50 p-6">
            <p className="text-lg font-semibold leading-relaxed text-neutral-800">{article.excerpt}</p>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.8',
            }}
          />

          {/* SEO Info (for admin reference) */}
          <div className="mt-12 rounded-xl border-2 border-neutral-200 bg-neutral-50 p-6">
            <h3 className="mb-4 text-lg font-black text-neutral-900">Informations SEO</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-bold text-neutral-600">Titre SEO:</span>
                <p className="text-neutral-900">{article.seoTitle || 'Non défini'}</p>
              </div>
              <div>
                <span className="text-sm font-bold text-neutral-600">Description SEO:</span>
                <p className="text-neutral-900">{article.seoDescription || 'Non défini'}</p>
              </div>
              <div>
                <span className="text-sm font-bold text-neutral-600">Slug:</span>
                <p className="font-mono text-sm text-neutral-900">{article.slug}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Prose Styles */}
      <style jsx global>{`
        .prose h2 {
          font-size: 2rem;
          font-weight: 900;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #171717;
          text-transform: uppercase;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #262626;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: #404040;
          font-size: 1.125rem;
        }
        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
          color: #404040;
          font-size: 1.0625rem;
        }
        .prose blockquote {
          border-left: 4px solid #dc2626;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #525252;
          background: #fef2f2;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        .prose a {
          color: #dc2626;
          text-decoration: underline;
          font-weight: 600;
        }
        .prose strong {
          font-weight: 800;
          color: #171717;
        }
      `}</style>
    </div>
  )
}

export default ArticleViewPage
