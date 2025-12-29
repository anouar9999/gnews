import React from 'react'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import { Metadata } from 'next'
import StatsOverview from './components/StatsOverview'
import WorkflowVisualization from './components/WorkflowVisualization'
import ArticleManagement from './components/ArticleManagement'
import RecentActivity from './components/RecentActivity'

export const metadata: Metadata = {
  title: 'Dashboard - GNEWS.ma Back-Office',
  description: 'Content management dashboard for GNEWS.ma',
}

const DashboardPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.03),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]" />

      <BgGlassmorphism />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b-2 border-neutral-200 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-black text-neutral-900">
                  GNEWS<span className="text-red-600">.ma</span>
                </h1>
                <p className="mt-2 font-semibold text-neutral-600">Back-Office de Validation</p>
              </div>
            
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Stats Overview */}
          <StatsOverview />

          {/* Workflow Visualization */}
          {/* <div className="mt-8">
            <WorkflowVisualization />
          </div> */}

          {/* Article Management Table */}
          <div className="mt-8">
            <ArticleManagement />
          </div>

          {/* Recent Activity */}
          {/* <div className="mt-8">
            <RecentActivity />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
