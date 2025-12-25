import BgGlassmorphism from '@/components/BgGlassmorphism'
import ArticlesSection from '@/components/sections/ArticlesSection'
import CategoryTabsSection from '@/components/sections/CategoryTabsSection'
import HeroSection from '@/components/sections/HeroSection'
import TrendingSection from '@/components/sections/TrendingSection'
import { getBlogPosts } from '@/data/data'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'GNEWS.ma - Morocco Gaming News',
  description: 'Latest gaming news, hardware reviews, and esports coverage from Morocco.',
}
const BlogPage: React.FC = async () => {
  const blogPosts = await getBlogPosts()

  return (
    <div className="relative min-h-screen bg-white/95">
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.03),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.03),transparent_50%)]" />

      <BgGlassmorphism />
      {/* <LaunchSection /> */}
      <div>
        <div>
          <div className="relative">
            <HeroSection posts={blogPosts.slice(0, 8)} />
          </div>
          {/* Category Tabs Section */}

          {/* Trending Section */}
          <div className=" ">
            <TrendingSection posts={blogPosts.slice(0, 8)} />
          </div>
          <div className="relative z-[9999999999999]">
            <ArticlesSection posts={blogPosts} />
          </div>
          <div className="container">
            <CategoryTabsSection posts={blogPosts} />
          </div>
          <div className="container my-2">
            {/* <GamiusSection /> */} {/* <SectionGridPosts posts={blogPosts} className="py-16 lg:py-28" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
