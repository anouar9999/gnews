'use client'

import React from 'react'

const WorkflowVisualization: React.FC = () => {
  const workflows = [
    {
      title: 'COLLECTE',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
      description: 'Récupération automatique des sources (RSS, APIs).',
      color: 'border-neutral-700',
      bgColor: 'bg-neutral-50',
    },
    {
      title: 'GÉNÉRATION IA',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      description: "Transformation des sources en brouillons d'articles.",
      color: 'border-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      title: 'VALIDATION HUMAINE',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description: 'Relecture, modification et enrichissement dans le back-office.',
      color: 'border-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'PUBLICATION',
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      description: "Mise en ligne de l'article sur GNEWS.ma.",
      color: 'border-green-600',
      bgColor: 'bg-green-50',
    },
  ]

  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900">
          Le Workflow de Contenu de Bout en Bout
        </h2>
        <p className="mt-2 text-neutral-600">
          Automatiser le fastidieux pour que l&apos;équipe se concentre sur la qualité éditoriale.
        </p>
      </div>

      {/* Workflow Steps */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workflows.map((workflow, index) => (
          <React.Fragment key={index}>
            <div className="group relative">
              <div
                className={`flex h-full flex-col rounded-xl border-2 ${workflow.color} ${workflow.bgColor} p-6 transition-all duration-300 hover:shadow-lg`}
              >
                {/* Icon */}
                <div className={`mb-4 text-neutral-700`}>{workflow.icon}</div>

                {/* Title */}
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-neutral-900">
                  {workflow.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-600">{workflow.description}</p>
              </div>

              {/* Arrow connector - hidden on last item */}
              {index < workflows.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                  <svg
                    className="h-6 w-6 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Key Point */}
      <div className="mt-6 rounded-lg border-l-4 border-neutral-700 bg-neutral-50 p-4">
        <p className="text-sm font-medium text-neutral-700">
          <span className="font-bold">Point Clé :</span> Ce workflow alimente la machine. Sa
          fiabilité est cruciale. Les statuts &apos;NOUVEAU&apos; → &apos;TRAITÉ&apos; permettent de
          suivre le flux.
        </p>
      </div>
    </div>
  )
}

export default WorkflowVisualization
