import FeaturedImage from "../../images/Capture_d'écran.png";
import Image from "next/image";
const GamiusSection = () => {
  return (
    <section className="relative z-50 grid grid-cols-1 lg:grid-cols-2">
      {/* Left Orange Section */}
      <div className="flex flex-col justify-center bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-8 md:px-12 lg:px-12 lg:py-24">
        <p className="mb-6 text-sm font-bold tracking-wider text-white uppercase">Launch Your Site</p>
        <h2 className="special-font mb-8 font-zentry text-[3.5rem] leading-[0.9] font-black tracking-tight text-white uppercase md:text-[4.5rem] lg:text-[5.5rem]">
          Import, Adapt <br />
          And Publish
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          GNEWS.ma packs every layout, element and feature you ll need to easily set up and manage your
          stunning gaming news website.
        </p>
      </div>

      {/* Right Dark Section with Stats Card */}
      <div className="relative flex items-center justify-center bg-neutral-900 px-8 py-16 md:px-12 lg:px-24 lg:py-24">
        {/* Stats Card */}
        <div className="relative w-full max-w-lg   shadow-2xl ">
         <Image
            src={FeaturedImage}
            alt="Gamius Dashboard"
            width={600}
            height={400}
            className="mx-auto rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
export default GamiusSection;