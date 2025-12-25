'use client'
import { useState } from "react"
import LatestPostCard from "../LatestPostCard"
import PopularPostCard from "../PopularPostCard"

const CategoryTabsSection = ({ posts }: { posts: any[] }) => {

  const categories = [
    { id: 'all', name: 'Tout', icon: '🎮' },
    { id: 'gaming', name: 'Gaming', icon: '🎯' },
    { id: 'esports', name: 'Esports', icon: '🏆' },
    { id: 'hardware', name: 'Hardware', icon: '⚙️' },
    { id: 'reviews', name: 'Tests', icon: '⭐' },
    { id: 'news', name: 'Actualités', icon: '📰' },
  ]

  const [activeTab, setActiveTab] = useState('all')

  // Filter posts based on active category
  const filteredPosts =
    activeTab === 'all'
      ? posts.slice(0, 4)
      : posts.filter((post: any) => post.category?.title?.toLowerCase() === activeTab).slice(0, 4)

  // Popular posts - using the first 5 posts as popular
  const popularPosts = posts.slice(0, 5)

  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container px-4">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Latest Posts with Tabs */}
          <div className="lg:col-span-8">
            {/* Section Header */}

            <div className="mb-8">
              <div className="mb-8">
                <h2 className="font-zentry text-[1.5rem] leading-[0.9] font-black tracking-tight text-red-600 uppercase md:text-[1.5rem] lg:text-[1.5rem]">
                  blog
                </h2>
                <div className="my-2 h-[1px] w-full bg-neutral-900" />

                <h2 className="special-font font-zentry text-[1rem] leading-[0.9] font-black tracking-tight text-neutral-900 uppercase md:text-[2.5rem] lg:text-[4rem]">
                  Derniers Articles
                </h2>
              </div>

              {/* Category Tabs */}
              <div className="mb-8 flex flex-wrap items-center gap-2 md:gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`group relative overflow-hidden px-4 py-2 text-sm font-bold uppercase transition-all duration-300 md:px-6 md:py-2.5 ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-md'
                        : 'bg-white text-neutral-700 hover:border-red-600 hover:text-red-600'
                    } `}
                  >
                    {/* Animated background for inactive tabs */}
                    {activeTab !== category.id && (
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-600/10 to-orange-600/10 transition-transform duration-300 group-hover:translate-x-0" />
                    )}

                    <span className="relative flex items-center gap-1.5 font-samuel">
                      <span>{category.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid - 2 columns */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post: any, index: number) => <LatestPostCard key={post.id || index} post={post} />)
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-base text-neutral-500">Aucun article trouvé dans cette catégorie.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Popular Posts */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="font-zentry special-font mb-6 text-[1.8rem] leading-[0.9] font-black tracking-tight text-neutral-900 uppercase md:text-[2.5rem]">
                Articles Populaires
              </h2>

              <div className="space-y-4">
                {popularPosts.map((post: any, index: number) => (
                  <PopularPostCard key={post.id || index} post={post} rank={index + 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CategoryTabsSection;