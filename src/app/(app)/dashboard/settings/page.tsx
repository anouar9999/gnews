'use client'

import React, { useState } from 'react'

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'ai' | 'notifications' | 'team'>('general')

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <div className="border-b border-neutral-200/50 bg-white/40 backdrop-blur-sm">
        <div className="px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Paramètres</h1>
            <p className="mt-1 text-sm text-neutral-600">
              Configurer les paramètres de la plateforme et des workflows
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {[
                { key: 'general', label: 'Général', icon: '⚙️' },
                { key: 'ai', label: 'Configuration IA', icon: '🤖' },
                { key: 'notifications', label: 'Notifications', icon: '🔔' },
                { key: 'team', label: 'Équipe', icon: '👥' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                    activeTab === tab.key
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'general' && <GeneralSettings />}
            {activeTab === 'ai' && <AISettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'team' && <TeamSettings />}
          </div>
        </div>
      </div>
    </div>
  )
}

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'GNEWS.ma',
    siteUrl: 'https://gnews.ma',
    adminEmail: 'admin@gnews.ma',
    language: 'fr',
    timezone: 'Africa/Casablanca',
    articlesPerPage: 12,
    autoPublish: false,
    enableComments: false,
  })

  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900">Paramètres Généraux</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Nom du Site</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">URL du Site</label>
            <input
              type="url"
              value={settings.siteUrl}
              onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Email Admin</label>
            <input
              type="email"
              value={settings.adminEmail}
              onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Langue</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            >
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Fuseau Horaire</label>
            <select
              value={settings.timezone}
              onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            >
              <option value="Africa/Casablanca">Africa/Casablanca (GMT+1)</option>
              <option value="Europe/Paris">Europe/Paris (GMT+1)</option>
              <option value="UTC">UTC (GMT+0)</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Articles par Page
            </label>
            <input
              type="number"
              value={settings.articlesPerPage}
              onChange={(e) => setSettings({ ...settings, articlesPerPage: parseInt(e.target.value) })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            />
          </div>
        </div>

        <div className="space-y-4 border-t border-neutral-200 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-900">Publication Automatique</p>
              <p className="text-sm text-neutral-600">
                Publier automatiquement les articles validés
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.autoPublish}
                onChange={(e) => setSettings({ ...settings, autoPublish: e.target.checked })}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-900">Commentaires</p>
              <p className="text-sm text-neutral-600">Activer les commentaires sur les articles</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.enableComments}
                onChange={(e) => setSettings({ ...settings, enableComments: e.target.checked })}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-slate-300"></div>
            </label>
          </div>
        </div>

        <div className="flex gap-4 border-t border-neutral-200 pt-6">
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-all hover:bg-red-700"
          >
            Enregistrer les Modifications
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-neutral-700 transition-all hover:bg-neutral-50"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}

const AISettings = () => {
  const [settings, setSettings] = useState({
    aiProvider: 'openai',
    apiKey: '••••••••••••••••••••',
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 2000,
    autoGenerate: true,
    generateSEO: true,
    generateTags: true,
    language: 'fr',
  })

  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900">Configuration IA</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Fournisseur d&apos;IA
            </label>
            <select
              value={settings.aiProvider}
              onChange={(e) => setSettings({ ...settings, aiProvider: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            >
              <option value="openai">OpenAI (ChatGPT)</option>
              <option value="anthropic">Anthropic (Claude)</option>
              <option value="google">Google (Gemini)</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">Modèle</label>
            <select
              value={settings.model}
              onChange={(e) => setSettings({ ...settings, model: e.target.value })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              <option value="claude-3">Claude 3</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-neutral-700">Clé API</label>
          <input
            type="password"
            value={settings.apiKey}
            onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
          />
          <p className="mt-1 text-xs text-neutral-500">
            Votre clé API est stockée de manière sécurisée et chiffrée
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Température ({settings.temperature})
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.temperature}
              onChange={(e) => setSettings({ ...settings, temperature: parseFloat(e.target.value) })}
              className="w-full"
            />
            <div className="mt-1 flex justify-between text-xs text-neutral-500">
              <span>Conservateur</span>
              <span>Créatif</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Tokens Maximum
            </label>
            <input
              type="number"
              value={settings.maxTokens}
              onChange={(e) => setSettings({ ...settings, maxTokens: parseInt(e.target.value) })}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-neutral-900 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500/20"
            />
          </div>
        </div>

        <div className="space-y-4 border-t border-neutral-200 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-900">Génération Automatique</p>
              <p className="text-sm text-neutral-600">
                Générer automatiquement les articles depuis les sources
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.autoGenerate}
                onChange={(e) => setSettings({ ...settings, autoGenerate: e.target.checked })}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-900">Génération SEO</p>
              <p className="text-sm text-neutral-600">Générer automatiquement les métadonnées SEO</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.generateSEO}
                onChange={(e) => setSettings({ ...settings, generateSEO: e.target.checked })}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-900">Génération de Tags</p>
              <p className="text-sm text-neutral-600">Suggérer automatiquement les tags</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.generateTags}
                onChange={(e) => setSettings({ ...settings, generateTags: e.target.checked })}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </div>

        <div className="flex gap-4 border-t border-neutral-200 pt-6">
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-all hover:bg-red-700"
          >
            Enregistrer les Modifications
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-neutral-700 transition-all hover:bg-neutral-50"
          >
            Tester la Connexion
          </button>
        </div>
      </form>
    </div>
  )
}

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    newArticle: true,
    articlePublished: true,
    workflowFailed: true,
    dailyReport: false,
    weeklyReport: true,
  })

  return (
    <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900">Notifications</h2>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-900">Notifications par Email</p>
              <p className="text-sm text-neutral-600">Recevoir des notifications par email</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          <div className="ml-4 space-y-4 border-l-2 border-neutral-200 pl-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900">Nouvel Article Généré</p>
                <p className="text-sm text-neutral-600">Quand l&apos;IA génère un nouvel article</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={settings.newArticle}
                  onChange={(e) => setSettings({ ...settings, newArticle: e.target.checked })}
                  className="peer sr-only"
                  disabled={!settings.emailNotifications}
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-disabled:opacity-50"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900">Article Publié</p>
                <p className="text-sm text-neutral-600">Quand un article est publié</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={settings.articlePublished}
                  onChange={(e) => setSettings({ ...settings, articlePublished: e.target.checked })}
                  className="peer sr-only"
                  disabled={!settings.emailNotifications}
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-disabled:opacity-50"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900">Erreur de Workflow</p>
                <p className="text-sm text-neutral-600">Quand un workflow échoue</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={settings.workflowFailed}
                  onChange={(e) => setSettings({ ...settings, workflowFailed: e.target.checked })}
                  className="peer sr-only"
                  disabled={!settings.emailNotifications}
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-disabled:opacity-50"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900">Rapport Quotidien</p>
                <p className="text-sm text-neutral-600">Résumé quotidien de l&apos;activité</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={settings.dailyReport}
                  onChange={(e) => setSettings({ ...settings, dailyReport: e.target.checked })}
                  className="peer sr-only"
                  disabled={!settings.emailNotifications}
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-disabled:opacity-50"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900">Rapport Hebdomadaire</p>
                <p className="text-sm text-neutral-600">Résumé hebdomadaire de l&apos;activité</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={settings.weeklyReport}
                  onChange={(e) => setSettings({ ...settings, weeklyReport: e.target.checked })}
                  className="peer sr-only"
                  disabled={!settings.emailNotifications}
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-disabled:opacity-50"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 border-t border-neutral-200 pt-6">
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-all hover:bg-red-700"
          >
            Enregistrer les Modifications
          </button>
        </div>
      </form>
    </div>
  )
}

const TeamSettings = () => {
  const [team] = useState([
    {
      id: '1',
      name: 'Sarah Martinez',
      email: 'sarah@gnews.ma',
      role: 'Éditeur en Chef',
      avatar: 'SM',
      status: 'active',
    },
    {
      id: '2',
      name: 'Ahmed Khalil',
      email: 'ahmed@gnews.ma',
      role: 'Éditeur',
      avatar: 'AK',
      status: 'active',
    },
    {
      id: '3',
      name: 'Karim Bennani',
      email: 'karim@gnews.ma',
      role: 'Rédacteur',
      avatar: 'KB',
      status: 'active',
    },
  ])

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900">Équipe</h2>
          <button className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Inviter un Membre
          </button>
        </div>

        <div className="space-y-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white">
                  {member.avatar}
                </div>
                <div>
                  <p className="font-medium text-neutral-900">{member.name}</p>
                  <p className="text-sm text-neutral-600">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                  {member.role}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Actif
                </span>
                <button className="text-slate-400 hover:text-neutral-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200/50 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
        <h3 className="mb-4 text-lg font-bold text-neutral-900">Rôles et Permissions</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
            <span className="font-medium text-neutral-900">Éditeur en Chef</span>
            <span className="text-neutral-600">Accès complet</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
            <span className="font-medium text-neutral-900">Éditeur</span>
            <span className="text-neutral-600">Gestion des articles et sources</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
            <span className="font-medium text-neutral-900">Rédacteur</span>
            <span className="text-neutral-600">Création et modification d&apos;articles</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
