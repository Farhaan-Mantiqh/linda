// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Card } from "@/components/ui/card";

// interface CarouselCard {
//   category: string;
//   title: string;
//   description: string;
//   image: string;
// }

// const carouselData: CarouselCard[] = [
//   {
//     category: "Operations",
//     title: "Unified ecommerce operations",
//     description:
//       "Streamline every part of your online business with a single, connected system that manages products, orders, inventory, and performance effortlessly.",
//     image:
//       "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     category: "Setup",
//     title: "Marketplace Setup & Optimization",
//     description:
//       "Get your products listed, optimized, and performing across top marketplaces with expert setup and ongoing optimization.",
//     image:
//       "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     category: "Global",
//     title: "Global Expansion Support",
//     description:
//       "Expand your brand into new regions with localized strategies, marketplace onboarding, and end-to-end international support.",
//     image:
//       "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     category: "Integration",
//     title: "Data & Analytics Integration",
//     description:
//       "Make informed decisions with comprehensive analytics that track performance, identify trends, and optimize your growth strategy.",
//     image:
//       "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     category: "Support",
//     title: "Dedicated Account Management",
//     description:
//       "Get personalized support from dedicated experts who understand your business and help you achieve your goals.",
//     image:
//       "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

// export default function BrandCarousel() {
//   return (
//     <div className="w-full  py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
//       <div className="mx-auto w-full">
//         <div className="mb-0 flex items-start justify-between">
//           <div className="max-w-3xl">
//             <p className="mb-4 text-sm font-medium text-blue-600">
//               Built to Power Your Brand End-to-End
//             </p>
//             <h2 className="mb-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
//               Everything Your Brand Needs in One Smart Platform
//             </h2>
//             <p className="text-lg font-medium">
//               A unified ecosystem designed to simplify operations, accelerate
//               growth, and power your entire ecommerce journey.
//             </p>
//           </div>
//         </div>

//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           <div className="mt-8 flex justify-end gap-2">
//             <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50" />
//             <CarouselNext className="static h-12 w-12 translate-y-0 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50" />
//           </div>
//           <CarouselContent className="-ml-4">
//             {carouselData.map((item, index) => (
//               <CarouselItem
//                 key={index}
//                 className="pl-4 basis-[32%] sm:basis-[31.5%] lg:basis-[31%]"
//               >
//                 <Card className="group overflow-hidden border-0 bg-white shadow-sm transition-shadow hover:shadow-md">
//                   <div className="aspect-[4/3] overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <p className="mb-3 text-sm font-semibold text-blue-600">
//                       {item.category}
//                     </p>
//                     <h3 className="mb-3 text-xl font-semibold leading-tight text-gray-900">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-gray-600">
//                       {item.description}
//                     </p>
//                   </div>
//                 </Card>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

interface CarouselCard {
  category: string;
  title: string;
  description: string;
  image: string;
}

const carouselData: CarouselCard[] = [
  {
    category: "Operations",
    title: "Unified ecommerce operations",
    description:
      "Streamline every part of your online business with a single, connected system that manages products, orders, inventory, and performance effortlessly.",
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Setup",
    title: "Marketplace Setup & Optimization",
    description:
      "Get your products listed, optimized, and performing across top marketplaces with expert setup and ongoing optimization.",
    image:
      "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Global",
    title: "Global Expansion Support",
    description:
      "Expand your brand into new regions with localized strategies, marketplace onboarding, and end-to-end international support.",
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Integration",
    title: "Data & Analytics Integration",
    description:
      "Make informed decisions with comprehensive analytics that track performance, identify trends, and optimize your growth strategy.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    category: "Support",
    title: "Dedicated Account Management",
    description:
      "Get personalized support from dedicated experts who understand your business and help you achieve your goals.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BrandCarousel() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="mx-auto w-full">
        <div className="mb-0 flex items-start justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-blue-600">
              Built to Power Your Brand End-to-End
            </p>
            <h2 className="mb-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Everything Your Brand Needs in One Smart Platform
            </h2>
            <p className="text-lg font-medium">
              A unified ecosystem designed to simplify operations, accelerate
              growth, and power your entire ecommerce journey.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="mb-8 flex justify-end gap-2">
            <CarouselPrevious className="static h-12 w-12 translate-y-0 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50" />
            <CarouselNext className="static h-12 w-12 translate-y-0 rounded-full border-2 border-gray-300 bg-white hover:bg-gray-50" />
          </div>
          <CarouselContent className="-ml-4">
            {carouselData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-[32%] lg:basis-[31%]" 
                // Mobile: 1 card (basis-full = 100%)
                // Small: 2 cards (1/2 = 50%)
                // Medium: ~3.1 cards (32% = ~3.125 cards)
                // Large: ~3.2 cards (31% = ~3.225 cards)
              >
                <Card className="group overflow-hidden border-[0.4] border-[#A0A0A6] bg-white  transition-shadow hover:shadow-md m-0.5 pt-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 "
                    />
                  </div>
                  <div className="p-6 pt-0">
                    <p className="mb-3 text-sm font-semibold text-blue-600 px-3 py-2 bg-[#EFF5FF] rounded-sm w-fit">
                      {item.category}
                    </p>
                    <h3 className="mb-3 text-xl font-semibold leading-tight text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}