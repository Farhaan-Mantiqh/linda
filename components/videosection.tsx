import Image from "next/image";

const Videosection = () => {
  return (
    <section className="  max-w-[1440px] mx-auto relative overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:block pointer-events-none">
          <svg
            viewBox="0 0 862 677"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[500px] max-h-[70%]"
          >
            <path
              d="M-159.133 618.296C161.225 10.4605 810.38 383.3 729.685 27.6594"
              stroke="url(#paint_left)"
              strokeWidth="250"
            />
            <defs>
              <linearGradient
                id="paint_left"
                x1="-158.578"
                y1="619.129"
                x2="730.24"
                y2="28.4932"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C3D5FD" />
                <stop offset="1" stopColor="#2F6CFA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden md:block pointer-events-none scale-x-[-1] -rotate-[180]">
          <svg
            viewBox="0 0 862 677"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[500px] max-h-[70%]"
          >
            <path
              d="M-159.133 618.296C161.225 10.4605 810.38 383.3 729.685 27.6594"
              stroke="url(#paint_right)"
              strokeWidth="250"
            />
            <defs>
              <linearGradient
                id="paint_right"
                x1="-158.578"
                y1="619.129"
                x2="730.24"
                y2="28.4932"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C3D5FD" />
                <stop offset="1" stopColor="#2F6CFA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* WHITE CARD */}
        <div className="relative bg-white shadow-sm rounded-[10px] mx-2 sm:mx-8 my-6 z-10 overflow-hidden">

          {/* Grid overlay */}
          <div
            className="absolute inset-0 bg-bottom-right pointer-events-none"
            style={{
              backgroundSize: "150px 150px",
              backgroundImage: `
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 1px, transparent 2px),
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.06) 1px, transparent 2px)
              `,
              maskImage:
                "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
            }}
          />

          {/* ✅ CONTENT (exactly like v2, unchanged) */}
          <div className="relative z-10 px-4 sm:px-8 lg:px-10 py-8 lg:py-10 flex flex-col items-center justify-center">
            <p className="mb-3 text-xs sm:text-sm font-semibold text-blue-600 text-center">
              How We Drive Smarter Growth
            </p>

            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-center w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
              See How We Help Brands Grow Smarter
            </h2>

            <p className="mt-2 font-medium text-sm sm:text-base leading-6 text-center w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
              A quick look at how Smart Launch simplifies ecommerce for growing brands
            </p>

            {/* ✅ Video (perfect — unchanged) */}
            <div className="mt-6 sm:mt-8 relative rounded-xl aspect-[653/363] w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto overflow-hidden">
              <Image src="/video.png" alt="video" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videosection;
