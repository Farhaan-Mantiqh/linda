import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-4 mt-8 lg:mt-16 max-w-[1440px] mx-auto">
      
      {/* WRAPPER */}
      <div
        className="
          relative isolate w-full overflow-hidden
          bg-white
        "
      >
        {/* INSET IMAGE */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/banner.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* CONTENT (DEFINES HEIGHT) */}
        <div className="relative z-20 flex flex-col items-start justify-center px-6 lg:px-14 py-20  text-left">
          <p className="mb-4 text-sm font-medium text-blue-600">
            Begin Your Journey
          </p>

          <h2 className="mb-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl w-full lg:max-w-[50%]">
            Ready to Launch and Scale Your Brand?
          </h2>

          <p className="text-lg font-medium w-full lg:max-w-[50%]">
            Start your growth journey with expert guidance, smart technology,
            and end-to-end ecommerce support
          </p>

          <Link
            href="/about#contact-form"
            className="inline-block px-6 py-3 rounded-full text-white bg-black font-medium mt-10"
          >
            Connect with Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Banner;
