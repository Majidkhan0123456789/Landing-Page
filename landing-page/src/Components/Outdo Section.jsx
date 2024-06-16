'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function CustomPrevArrow (prevArrow)  {
  return(
<button   type='button' {...prevArrow} className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-none border-none cursor-pointer">
<FaChevronLeft className='text-white w-8 h-8'/>
</button>
)}
 
function CustomNextArrow(NextArrow) {
  return(
  <button  {...NextArrow} className='hidden md:block absolute top-1/2 right-2 z-10 transform -translate-y-1/2 border-none bg-none cursor-pointer'>
     <FaChevronRight className='text-white h-8 w-8'/>
  </button>
)}
 
function loadSlider() {
  return import('react-slick');
}

function getSlider() {
  return dynamic(loadSlider, {
    ssr: false,
  });
}

const Slider = getSlider();

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false, // Disable arrows on mobile
      },
    },
  ],
};

const features = [
  {
    title: "Automate Mundane Tasks To Reduce Cognitive Overload",
    description: "Out of box dashboards & intelligent alerting",
    imageUrl: "https://placehold.co/300x150",
    imageAlt: "Graph image"
  },
  {
    title: "Conditional Hand-Offs Between Teams & Tools",
    description: "Nudges and reminders",
    imageUrl: "https://placehold.co/300x150",
    imageAlt: "Graph image"
  },
  {
    title: "Conditional Hand-Offs Between Teams & Tools",
    description: "Nudges and reminders",
    imageUrl: "https://placehold.co/300x150",
    imageAlt: "Graph image"
  },
  {
    title: "Conditional Hand-Offs Between Teams & Tools",
    description: "Nudges and reminders",
    imageUrl: "https://placehold.co/300x150",
    imageAlt: "Graph image"
  }
];

const OutdoSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-pink-900 py-20">
      <div className="container mx-auto text-center px-8 lg:px-0">
        <h2 className="xl:text-3xl text-[20px] sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white">
          Outdo Yourself With No-Code Human In The Loop Automation
        </h2>
        <div className="md:w-8/12 w-full mx-auto">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="bg-purple-800 p-6 rounded-lg flex flex-col  justify-between min-h-[350px]">
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400  mb-4 text-xs md:text-sm lg:text-base">{feature.description}</p>
                </div>
                <img src={feature.imageUrl} alt={feature.imageAlt} className="rounded-lg mx-auto" />
              </div>
            </div>
          ))}
        </Slider>
        </div>
        <div className="mt-8 text-gray-400">
          "Speed is your solution to address one of the biggest threats to modern-day value creation"
        </div>
        <div className="text-white mt-4">- Anon</div>
      </div>
    </section>
  );
};

export default OutdoSection;
