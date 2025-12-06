import Banner from "@/components/banner";
import BrandCarousel from "@/components/carousel";
import Hero from "@/components/hero";
import Sidebyside from "@/components/side-by-side";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Videosection from "@/components/videosection";

const page = () => {
  return (
    <div className="">
      <Hero />
      <div className="bg-[#F9F9F9]">
        <BrandCarousel />
      </div>
      <div className="bg-[#F9F9F9]">
        <Videosection />
      </div>
      <div className="bg-[#F9F9F9]">
        <Sidebyside />
      </div>
      <div className="bg-[#F9F9F9]">
        <Stats />
      </div>
      <div className="bg-[#F9F9F9]">
        <Testimonials />
      </div>
      <div className="bg-[#F9F9F9]">
        <Banner/>
      </div>
    </div>
  );
};

export default page;
