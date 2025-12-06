import TestimonialCarousel from "./testimonial-carousel";

const Testimonials = () => {
  return (
    <section className="max-w-[1440px] mx-auto pb-10 border-b border-b-[#71717A]">
      <div className="flex w-full px-5">
        <div className="w-full lg:w-[50%] mt-8 lg:mt-16">
          <p className="mb-4 text-sm font-medium text-blue-600">
            What Clients Say
          </p>
          <h2 className="mb-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
            People Trust Us to Power Their Ecommerce Growth
          </h2>
          <p className="text-lg font-medium">
            Our clients share how Smart Launch transformed their operations,
            growth strategy, and marketplace performance
          </p>
        </div>
        <div className="hidden lg:block w-[50%] mt-16">
          <TestimonialCarousel />
        </div>
      </div>

      {/* Mobile: show carousel below copy */}
      <div className="lg:hidden mt-8">
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
