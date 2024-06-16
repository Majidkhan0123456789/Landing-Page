 import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-black text-white bg-cover bg-center py-10 lg:py-20" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="container mx-auto lg:px-8 px-4 md:gap-10 gap-5 flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col lg:w-1/2">
          <h1 className="xl:text-[53px] lg:text-[48px] md:text-[35px] text-[16px] font-bold">
            Data Informed Insights To Prove Your Team's Success
          </h1>
          <p className="regular-16 mt-4 text-[12px] 2xl:text-2xl xl:text-xl md:text-md lg:text-lg">
            Find Your High-Points & Prove It With Data in One Day
          </p>
          <div className="md:py-8 py-2 md:w-3/4">
            <form className="flex w-full lg:max-w-lg">
              <input
                type="email"
                className="flex-1 px-2 md:px-4 py-2 md:py-4 text-black rounded-l-md"
                placeholder="Your Work Email"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white md:text-[14px] text-[10px] sm:text-[12px] lg:text-[16px] px-2 md:px-4 py-2 md:py-4 rounded-r-md hover:bg-pink-600"
              >
                See How It Works
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-1 flex-col lg:w-1/2">
          <Image src="/hero_image.JPG" alt="boat" width={1440} height={580}
            className="w-full object-cover object-center 2xl:rounded-5xl"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
