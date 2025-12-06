import Image from "next/image";

const Stats = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 border-b border-[#71717A]">
      <p className="mb-4 text-sm font-medium text-blue-600 text-left lg:text-center">
        Powered by measurable impact
      </p>

      <h2 className="mb-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl text-left lg:text-center">
        Driving Real Ecommerce Results
      </h2>

      <p className="text-lg font-medium text-left lg:text-center">
        Delivering clear, data-backed outcomes that accelerate your brand’s
        online success
      </p>

      <div className="relative mt-12 w-full overflow-hidden rounded-2xl bg-white mb-16">
        {/* CONTENT THAT DEFINES HEIGHT */}
        <Image
          src="/rocketstat.png"
          className="absolute inset-0 left-0 top-0"
          height={250}
          width={250}
          alt=""
        />
        <div className="relative z-10  px-6 text-center">
          <div className="p-14">
            <div className="flex w-full justify-center">
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-5">
                <div>
                  <div className="bg-[#F5F8FB] rounded-[10px]">
                    <div className="p-10 text-5xl font-bold leading-tight bg-gradient-to-b from-[#3D4CE4] to-[#222A7E] bg-clip-text text-transparent ">
                      95%
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium mt-3">
                    average growth in 6 months
                  </div>
                </div>
                <div>
                  <div className="bg-[#F5F8FB] rounded-[10px]">
                    <div className="p-10 text-5xl font-bold leading-tight bg-gradient-to-b from-[#3D4CE4] to-[#222A7E] bg-clip-text text-transparent ">
                      100+
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium mt-3">
                    optimized product listings
                  </div>
                </div>
                <div>
                  <div className="bg-[#F5F8FB] rounded-[10px]">
                    <div className="p-10 text-5xl font-bold leading-tight bg-gradient-to-b from-[#3D4CE4] to-[#222A7E] bg-clip-text text-transparent ">
                      50+
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium mt-3">
                    global marketplaces supported
                  </div>
                </div>
                <div>
                  <div className="bg-[#F5F8FB] rounded-[10px]">
                    <div className="p-10 text-5xl font-bold leading-tight bg-gradient-to-b from-[#3D4CE4] to-[#222A7E] bg-clip-text text-transparent ">
                      95%
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium mt-3">
                    improvement in conversion rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
