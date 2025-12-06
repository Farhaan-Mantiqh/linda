import Image from "next/image";

const Sidebyside = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-[32px] lg:py-[64px]">
      {/* Heading */}
      <div className="px-7">
        <p className="mb-3 text-xs sm:text-sm font-semibold text-blue-600 w-full lg:max-w-[50%]">
          How We Drive Smarter Growth
        </p>

        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl leading-[1.3] w-full lg:max-w-[50%]">
          See How We Help Brands Grow Smarter
        </h2>

        <p className="mt-2 font-medium text-sm sm:text-base leading-6 w-full lg:max-w-[50%]">
          A quick look at how Smart Launch simplifies ecommerce for growing
          brands
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-12 relative">
        {/* Outer container with dashed left/right borders */}
        <div className="px-4 lg:px-7 relative border-l border-r border-dashed border-gray-300">
          {/* Top solid border */}
          <div className="absolute top-0 left-0 right-0 h-[0.6px] bg-gray-300"></div>

          {/* Cards Grid */}
          <div className="block lg:flex lg:flex-wrap lg:gap-x-6 lg:gap-y-12 py-12">
            {/* Vertical dashed border between columns - Desktop only */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[0.6px] border-l border-dashed border-gray-300"></div>

            {/* Card 01 - Marketplace Setup & Management */}
            <div className="w-full lg:w-[calc(50%-12px)] lg:pt-12 px-2 lg:px-6">
              <div className="relative max-w-full rounded-2xl bg-white shadow-lg p-6 group mb-6 lg:mb-0">
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* BLURRED BANDS */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Band 1 */}
                    <div
                      className="
                    absolute top-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-1 delay-band-1
                  "
                    />

                    {/* Band 2 */}
                    <div
                      className="
                    absolute bottom-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-2 delay-band-2
                  "
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute top-4 left-4 z-10 text-4xl font-semibold text-gray-300">
                    01
                  </span>

                  {/* IMAGE */}
                  <Image
                    src="/cards/one.png"
                    alt="Marketplace Setup & Management"
                    width={800}
                    height={500}
                    className="relative z-10 w-full h-auto object-cover"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">
                    Manage
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Marketplace Setup & Management
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Set up, manage, and optimize your brand across major
                  marketplaces with seamless onboarding and continuous
                  performance improvement.
                </p>
              </div>
            </div>

            {/* Card 02 - Building Stores That Convert */}
            <div className="w-full lg:w-[calc(50%-12px)]  px-2 lg:px-6">
              <div className="relative max-w-full rounded-2xl bg-white shadow-lg p-6 group mb-6 lg:mb-0">
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* BLURRED BANDS */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Band 1 */}
                    <div
                      className="
                    absolute top-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-1 delay-band-1
                  "
                    />

                    {/* Band 2 */}
                    <div
                      className="
                    absolute bottom-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-2 delay-band-2
                  "
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute top-4 left-4 z-10 text-4xl font-semibold text-gray-300">
                    02
                  </span>

                  {/* IMAGE */}
                  <Image
                    src="/cards/two.png"
                    alt="Marketplace Setup & Management"
                    width={800}
                    height={500}
                    className="relative z-10 w-full h-auto object-cover"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">
                    Build
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Ecommerce Store Development
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Create high-performing ecommerce stores with modern design,
                  fast performance, and user-focused buying experiences.
                </p>
              </div>
            </div>

            {/* Card 03 - Performance Ads & SEO */}
            <div className="w-full lg:w-[calc(50%-12px)] lg:pt-12 px-2 lg:px-6">
              <div className="relative max-w-full rounded-2xl bg-white shadow-lg p-6 group mb-6 lg:mb-0">
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* BLURRED BANDS */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Band 1 */}
                    <div
                      className="
                    absolute top-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#22C55E] via-[#FFA94D] to-[#99E4B5]
                    blur-3xl opacity-50
                    animate-band-1 delay-band-1
                  "
                    />

                    {/* Band 2 */}
                    <div
                      className="
                    absolute bottom-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-2 delay-band-2
                  "
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute top-4 left-4 z-10 text-4xl font-semibold text-gray-300">
                    03
                  </span>

                  {/* IMAGE */}
                  <Image
                    src="/cards/three.png"
                    alt="Performance Ads & SEO"
                    width={800}
                    height={500}
                    className="relative z-10 w-full h-auto object-cover"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">
                    Optimize
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Performance Ads & SEO
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Boost visibility and revenue with data-backed advertising and
                  SEO strategies designed to attract high-intent shoppers.
                </p>
              </div>
            </div>

            {/* Card 04 - Fulfillment & Logistics Support */}
            <div className="w-full lg:w-[calc(50%-12px)] px-2 lg:px-6">
              <div className="relative max-w-full rounded-2xl bg-white shadow-lg p-6 group mb-6 lg:mb-0">
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* BLURRED BANDS */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Band 1 */}
                    <div
                      className="
                    absolute top-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#0BF0F8] via-[#FFA94D] to-[#0BF0F8]
                    blur-3xl opacity-50
                    animate-band-1 delay-band-1
                  "
                    />

                    {/* Band 2 */}
                    <div
                      className="
                    absolute bottom-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-2 delay-band-2
                  "
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute top-4 left-4 z-10 text-4xl font-semibold text-gray-300">
                    04
                  </span>

                  {/* IMAGE */}
                  <Image
                    src="/cards/four.png"
                    alt="Fulfillment & Logistics Support"
                    width={800}
                    height={500}
                    className="relative z-10 w-full h-auto object-cover"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">
                    Deliver
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Fulfillment & Logistics Support
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Streamline your fulfillment, shipping, and inventory processes
                  with reliable logistics support built for scaling brands.
                </p>
              </div>
            </div>

            {/* Card 05 - Content & Product Optimization */}
            <div className="w-full lg:w-[calc(50%-12px)] lg:pt-12 px-2 lg:px-6">
              <div className="relative max-w-full rounded-2xl bg-white shadow-lg p-6 group mb-6 lg:mb-0">
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* BLURRED BANDS */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Band 1 */}
                    <div
                      className="
                    absolute top-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#E03A3E] via-[#FFA94D] to-[#F1A4A6]
                    blur-3xl opacity-50
                    animate-band-1 delay-band-1
                  "
                    />

                    {/* Band 2 */}
                    <div
                      className="
                    absolute bottom-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-2 delay-band-2
                  "
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute top-4 left-4 z-10 text-4xl font-semibold text-gray-300">
                    05
                  </span>

                  {/* IMAGE */}
                  <Image
                    src="/cards/five.png"
                    alt="Content & Product Optimization"
                    width={800}
                    height={500}
                    className="relative z-10 w-full h-auto object-cover"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">
                    Optimize
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Content & Product Optimization
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Enhance product listings with high-quality content, imagery,
                  and data optimization to improve ranking and conversion.
                </p>
              </div>
            </div>

            {/* Card 06 - Growth Reporting & Analytics */}
            <div className="w-full lg:w-[calc(50%-12px)] px-2 lg:px-6">
              <div className="relative max-w-full rounded-2xl bg-white shadow-lg p-6 group mb-6 lg:mb-0">
                {/* IMAGE CONTAINER */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* BLURRED BANDS */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Band 1 */}
                    <div
                      className="
                    absolute top-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-1 delay-band-1
                  "
                    />

                    {/* Band 2 */}
                    <div
                      className="
                    absolute bottom-[22%] left-[-35%]
                    w-[170%] h-[22%]
                    rounded-full
                    bg-gradient-to-r from-[#FFA94D] via-[#FFA94D] to-[#FFD7AD]
                    blur-3xl opacity-50
                    animate-band-2 delay-band-2
                  "
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute top-4 left-4 z-10 text-4xl font-semibold text-gray-300">
                    06
                  </span>

                  {/* IMAGE */}
                  <Image
                    src="/cards/six.png"
                    alt="Growth Reporting & Analytics"
                    width={800}
                    height={500}
                    className="relative z-10 w-full h-auto object-cover"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">
                    Insights
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Growth Reporting & Analytics
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Track performance with real-time insights and detailed
                  analytics that highlight opportunities and guide smarter
                  growth strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom solid border */}
          <div className="absolute bottom-0 left-0 right-0 h-[0.6px] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebyside;
