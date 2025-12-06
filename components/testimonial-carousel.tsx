"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    text: "“After partnering with Smart Launch, our conversion rate improved by 27%, and fulfillment errors dropped by half. Their reporting insights let us make decisions with confidence.”",
    image: "/testimonial.png",
    name: "Sofia Hernandez",
    company: "Operations Lead, Lumen Essentials",
  },
  {
    id: 2,
    text: "“Amazing service and incredible results. Our sales increased by 200% in just 3 months!”",
    image: "/testimonial.png",
    name: "Jane Smith",
    company: "Another Company",
  },
  {
    id: 3,
    text: "“Professional team that delivered beyond our expectations. Highly recommended!”",
    image: "/testimonial.png",
    name: "Mike Johnson",
    company: "Third Company",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden min-h-[250px] flex justify-between flex-col bg-white p-8 rounded-[10px]">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <div className="flex w-full justify-between items-center">
            <div className="h-[40px] w-[40px]">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={64}
                height={64}
              />
            </div>

            <div className="flex gap-3 rounded-full p-1 w-fit ">
              <button
                onClick={prevTestimonial}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors border-[#082B67] border"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors border-[#082B67] border"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <p className="h-five font-semibold text-[#062250] mt-6">
            {currentTestimonial.text}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="rounded-full overflow-hidden"></div>
            <div>
              <p className="font-semibold text-[#062250]">
                {currentTestimonial.name}
              </p>
              <p className="text-sm text-gray-600">
                {currentTestimonial.company}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
