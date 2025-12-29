import React from 'react'
import DashboardSidebar from './components/DashboardSidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <DashboardSidebar />
      <main className="flex-1 lg:ml-64">
        {children}
      </main>
    </div>
  )
}
