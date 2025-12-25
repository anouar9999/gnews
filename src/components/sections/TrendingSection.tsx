import TrendingCard from "../TrendingCard"

const TrendingSection = ({ posts }: { posts: any[] }) => {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f9f9f9] via-neutral-50 to-white" />
      <div className="pointer-events-none absolute top-20 right-0 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-red-600" />
            <span className="text-sm font-black tracking-widest text-red-600 uppercase">🔥 Tendances Actuelles</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-red-600" />
          </div>
          <h2 className="special-font font-zentry text-[2.5rem] leading-[0.9] font-black tracking-tight text-neutral-900 uppercase md:text-[4rem] lg:text-[6rem]">
            Actualités Tendance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Les histoires gaming les plus populaires dont tout le monde parle
          </p>
        </div>

        {/* Trending Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <TrendingCard key={post.id || index} post={post} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default TrendingSection