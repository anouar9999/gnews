const ArticlesSection = ({ posts }: { posts: any[] }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 px-4 py-16">
      {/* Shadow overlay - top left */}
      <div className="pointer-events-none absolute top-0 left-0 h-1/2 w-1/2 bg-gradient-to-br from-purple-900/30 via-transparent to-transparent" />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-16 bg-orange-500/60" />
              <p className="text-sm font-bold tracking-widest text-orange-500 uppercase">Read Lastest</p>
              <div className="h-[1px] w-16 bg-orange-500/60" />
            </div>
            <h2 className="font-zentry special-font text-[3rem] leading-[0.9] font-black tracking-tight text-white uppercase md:text-[4rem] lg:text-[5rem]">
              Articles et Actualités <br />
              De l Industrie
            </h2>
          </div>
          {/* <button className="group mt-8 flex items-center gap-2 border border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-neutral-900">
            <span className="font-bold">Lire Plus</span>
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </button> */}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 4).map((post, index) => (
            <article key={post.id || index} className="group cursor-pointer">
              {/* Image with title overlay */}
              <div className="relative mb-4 h-64 overflow-hidden">
                <img
                  src={
                    post.image ||
                    `https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop`
                  }
                  alt={post.title || `Article ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Title inside image */}
                <div className="absolute right-0 bottom-0 left-0 p-4 pb-6">
                  <div className="mb-3 h-[2px] w-full bg-white" />
                  <h3 className="text-lg leading-tight font-semibold text-white uppercase transition-colors group-hover:text-orange-500">
                    {post.title || `Hard Work Pays in Construction Industries`}
                  </h3>
                </div>
              </div>

              {/* Category and Date */}
              {/* <div className="flex items-center gap-2 text-sm">
                <span className="font-bold uppercase text-orange-500">
                  {post.category || 'Electric'}
                </span>
                <span className="text-neutral-400">
                  {post.date || 'February 11, 2021'}
                </span>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ArticlesSection