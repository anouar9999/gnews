import FeaturedCard from "../FeaturedCard"
import SecondaryCard from "../SecondaryCard"

const HeroSection = ({ posts }: { posts: any[] }) => {
  if (!posts || posts.length === 0) return null

  const featured = posts[0]
  const secondary = posts.slice(1, 3)
  const miniStories = posts.slice(3, 7)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-neutral-900 px-4 py-14 lg:py-20">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[140px]" />

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-gradient-to-r from-red-600 to-orange-600" />
            <span className="font-samuel text-xs font-black tracking-widest text-red-600 uppercase">
              Actualités Gaming en Direct
            </span>
          </div>

          <h1 className="special-font font-zentry text-[2.6rem] leading-[0.9] font-black tracking-tight text-white uppercase md:text-[4rem] lg:text-[5.2rem]">
            À la Une Aujourd hui
          </h1>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Featured Story */}
          <div className="lg:col-span-8">
            <FeaturedCard post={featured} />
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:col-span-4">
            {/* Medium cards */}
            <div className="grid gap-4">
              {secondary.map((post, index) => (
                <SecondaryCard key={post.id || index} post={post} />
              ))}
            </div>

            {/* Mini headlines */}
            {/* <div className="border-t border-white/10 pt-4">
              {miniStories.map((post, index) => (
                <MiniCard key={post.id || index} post={post} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection;