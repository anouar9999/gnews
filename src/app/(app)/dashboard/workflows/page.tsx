'use client'

import React, { useState } from 'react'

interface WorkflowExecution {
  id: string
  workflowType: 'collect' | 'generate' | 'validate' | 'publish'
  status: 'running' | 'completed' | 'failed' | 'pending'
  startedAt: string
  completedAt?: string
  itemsProcessed: number
  itemsTotal: number
  errors?: string[]
}

const WorkflowsPage: React.FC = () => {
  const [executions] = useState<WorkflowExecution[]>([
    {
      id: '1',
      workflowType: 'collect',
      status: 'completed',
      startedAt: '2024-12-28T14:00:00',
      completedAt: '2024-12-28T14:05:00',
      itemsProcessed: 47,
      itemsTotal: 47,
    },
    {
      id: '2',
      workflowType: 'generate',
      status: 'running',
      startedAt: '2024-12-28T14:10:00',
      itemsProcessed: 12,
      itemsTotal: 47,
    },
    {
      id: '3',
      workflowType: 'validate',
      status: 'pending',
      startedAt: '2024-12-28T14:15:00',
      itemsProcessed: 0,
      itemsTotal: 15,
    },
    {
      id: '4',
      workflowType: 'collect',
      status: 'failed',
      startedAt: '2024-12-28T13:00:00',
      completedAt: '2024-12-28T13:02:00',
      itemsProcessed: 5,
      itemsTotal: 50,
      errors: ['Connection timeout to GameSpot RSS', 'API rate limit exceeded'],
    },
  ])

  const workflowStats = {
    collect: {
      total: 5234,
      today: 47,
      avgTime: '5 min',
    },
    generate: {
      total: 4891,
      today: 42,
      avgTime: '15 min',
    },
    validate: {
      total: 3245,
      today: 18,
      avgTime: '45 min',
    },
    publish: {
      total: 2876,
      today: 12,
      avgTime: '2 min',
    },
  }

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200/50 bg-white/40 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Workflows d&apos;Automatisation</h1>
            <p className="mt-1 text-sm text-neutral-600">
              Suivi et gestion des workflows de production de contenu
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Workflow Diagram */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-bold text-neutral-900">
            Le Workflow de Contenu de Bout en Bout
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <WorkflowCard
              title="COLLECTE"
              description="Récupération automatique des sources (RSS, APIs)"
              stats={workflowStats.collect}
              color="slate"
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              }
            />
            <WorkflowCard
              title="GÉNÉRATION IA"
              description="Transformation des sources en brouillons d'articles"
              stats={workflowStats.generate}
              color="amber"
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              }
            />
            <WorkflowCard
              title="VALIDATION"
              description="Relecture et enrichissement humain"
              stats={workflowStats.validate}
              color="blue"
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            />
            <WorkflowCard
              title="PUBLICATION"
              description="Mise en ligne sur GNEWS.ma"
              stats={workflowStats.publish}
              color="green"
              icon={
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              }
            />
          </div>
        </div>

        {/* Executions en cours */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900">Exécutions en Cours</h2>
            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Actualiser
            </button>
          </div>

          <div className="space-y-4">
            {executions.map((execution) => (
              <ExecutionCard key={execution.id} execution={execution} />
            ))}
          </div>
        </div>

        {/* Contrôles Manuels */}
        <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-bold text-neutral-900">Contrôles Manuels</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <button className="flex flex-col items-center gap-4 rounded-xl border-2 border-neutral-700 bg-neutral-50 p-6 transition-all hover:bg-neutral-100 hover:shadow-lg">
              <svg className="h-12 w-12 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <div className="text-center">
                <p className="font-bold text-neutral-900">Lancer Collecte</p>
                <p className="text-xs text-neutral-600">Collecter les sources maintenant</p>
              </div>
            </button>

            <button className="flex flex-col items-center gap-4 rounded-xl border-2 border-amber-500 bg-amber-50 p-6 transition-all hover:bg-amber-100 hover:shadow-lg">
              <svg className="h-12 w-12 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div className="text-center">
                <p className="font-bold text-neutral-900">Générer Brouillons</p>
                <p className="text-xs text-neutral-600">Lancer la génération IA</p>
              </div>
            </button>

            <button className="flex flex-col items-center gap-4 rounded-xl border-2 border-blue-600 bg-blue-50 p-6 transition-all hover:bg-blue-100 hover:shadow-lg">
              <svg className="h-12 w-12 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <div className="text-center">
                <p className="font-bold text-neutral-900">Valider en Lot</p>
                <p className="text-xs text-neutral-600">Valider plusieurs articles</p>
              </div>
            </button>

            <button className="flex flex-col items-center gap-4 rounded-xl border-2 border-green-600 bg-green-50 p-6 transition-all hover:bg-green-100 hover:shadow-lg">
              <svg className="h-12 w-12 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="text-center">
                <p className="font-bold text-neutral-900">Publier en Lot</p>
                <p className="text-xs text-neutral-600">Publier articles validés</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const WorkflowCard = ({
  title,
  description,
  stats,
  color,
  icon,
}: {
  title: string
  description: string
  stats: { total: number; today: number; avgTime: string }
  color: string
  icon: React.ReactNode
}) => {
  const colorClasses = {
    slate: 'border-neutral-700 bg-neutral-50',
    amber: 'border-amber-500 bg-amber-50',
    blue: 'border-blue-600 bg-blue-50',
    green: 'border-green-600 bg-green-50',
  }

  return (
    <div className={`rounded-xl border-2 ${colorClasses[color as keyof typeof colorClasses]} p-6`}>
      <div className="mb-4 text-neutral-700">{icon}</div>
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-neutral-900">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-neutral-600">{description}</p>
      <div className="space-y-2 border-t border-neutral-200 pt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-600">Total:</span>
          <span className="font-bold text-neutral-900">{stats.total.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-600">Aujourd&apos;hui:</span>
          <span className="font-bold text-neutral-900">{stats.today}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-600">Temps moyen:</span>
          <span className="font-bold text-neutral-900">{stats.avgTime}</span>
        </div>
      </div>
    </div>
  )
}

const ExecutionCard = ({ execution }: { execution: WorkflowExecution }) => {
  const getStatusBadge = (status: WorkflowExecution['status']) => {
    const styles = {
      running: 'bg-blue-100 text-blue-700 border-blue-300',
      completed: 'bg-green-100 text-green-700 border-green-300',
      failed: 'bg-red-100 text-red-700 border-red-300',
      pending: 'bg-neutral-100 text-neutral-700 border-slate-300',
    }

    const labels = {
      running: 'En cours',
      completed: 'Terminé',
      failed: 'Échoué',
      pending: 'En attente',
    }

    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}>
        {status === 'running' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />}
        {labels[status]}
      </span>
    )
  }

  const getWorkflowName = (type: WorkflowExecution['workflowType']) => {
    const names = {
      collect: 'Collecte des Sources',
      generate: 'Génération IA',
      validate: 'Validation Humaine',
      publish: 'Publication',
    }
    return names[type]
  }

  const progress = execution.itemsTotal > 0 ? (execution.itemsProcessed / execution.itemsTotal) * 100 : 0

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="mb-2 text-lg font-bold text-neutral-900">{getWorkflowName(execution.workflowType)}</h3>
          <div className="flex items-center gap-3">
            {getStatusBadge(execution.status)}
            <span className="text-xs text-neutral-500">
              Démarré: {new Date(execution.startedAt).toLocaleTimeString('fr-FR')}
            </span>
            {execution.completedAt && (
              <>
                <span className="text-xs text-neutral-500">•</span>
                <span className="text-xs text-neutral-500">
                  Terminé: {new Date(execution.completedAt).toLocaleTimeString('fr-FR')}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between text-xs text-neutral-600">
          <span>Progression</span>
          <span className="font-medium">
            {execution.itemsProcessed} / {execution.itemsTotal} ({Math.round(progress)}%)
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              execution.status === 'failed'
                ? 'bg-red-500'
                : execution.status === 'completed'
                  ? 'bg-green-500'
                  : 'bg-blue-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Errors */}
      {execution.errors && execution.errors.length > 0 && (
        <div className="mt-4 rounded-lg bg-red-50 p-4">
          <p className="mb-2 text-xs font-semibold text-red-900">Erreurs:</p>
          <ul className="space-y-1">
            {execution.errors.map((error, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-red-700">
                <span className="mt-0.5">•</span>
                <span>{error}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default WorkflowsPage
