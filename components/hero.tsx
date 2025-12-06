import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SimpleLogoLoop from "./rotating_logo";

const logos = [
  "/amazon.png",
  "/wallmart.png",
  "/etsy.png",
  "/temu.png",
  "/shopify.png",
];

const Hero = () => {
  return (
    <div className="pt-[5vh] lg:pt-[15vh] w-full h-screen flex flex-col ">
      {/* TOP CONTENT (auto height) */}
      <div className="flex flex-col lg:flex-row w-full items-start flex-none max-w-[1440px] mx-auto">
        {/* LEFT */}
        <div className="px-7 lg:px-2 lg:w-[60%]">
          <h1 className="text-4xl lg:text-6xl font-semibold font-schibsted leading-[1.1] lg:leading-[72px]">
            Launch, Manage & Scale Your Brand Across Every Marketplace
          </h1>

          <p className="font-schibsted leading-6 text-[#3F3F3F] font-medium lg:w-[80%] mt-5">
            Smart Launch empowers brands with end-to-end ecommerce solutions
            from setup to global expansion supported by technology, strategy,
            and expert execution
          </p>

          {/* BUTTONS */}
          <div className="mt-10 w-full flex gap-3">
            <button className="px-4 py-3 flex items-center gap-1 bg-black text-white rounded-full">
              <span className="font-medium text-sm lg:text-base">Get Started</span>
              <ArrowUpRight />
            </button>

            <button className="px-4 py-3 flex items-center gap-1 border border-[#67676F] rounded-full">
              <span className="font-medium text-sm lg:text-base">Explore Services</span>
              <ArrowUpRight />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[40%] flex justify-end mt-8 lg:mt-0">
          <Image
            src="/Group1.png"
            alt="Hero illustration showing marketplace management"
            width={358}
            height={434}
            priority
            className="object-contain max-w-[80%] lg:w-full mx-auto lg:mx-0"
          />
        </div>
      </div>

      {/* LOGO LOOP at bottom - flex-grow pushes it down */}
      <div className="grow flex flex-col justify-end">
        <div className="h-fit bg-white py-3 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <SimpleLogoLoop
            logos={logos}
            logoHeight={66}
            paddingY={0}
            gap={32}
            speed={100}
            className="my-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
