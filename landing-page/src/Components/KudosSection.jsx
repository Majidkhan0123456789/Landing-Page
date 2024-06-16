import React from 'react';
import { FaStar, FaCheckSquare, FaMedal } from 'react-icons/fa';

const kuds = [
    {
      step: 1,
      title: 'Nominate the Xponent',
      description: 'A simple form fill to show them how much you appreciate their work',
      icon: <FaStar className="text-pink-600 text-4xl ml-4" />,
    },
    {
      step: 2,
      title: 'Propelo validates through interview',
      description: 'A simple form fill to show them how much you appreciate their work',
      icon: <FaCheckSquare className="text-pink-600 text-4xl ml-4" />,
    },
    {
      step: 3,
      title: 'Present Everywhere',
      description: 'A simple form fill to show them how much you appreciate their work',
      icon: <FaMedal className="text-pink-600 text-4xl ml-4" />,
    },
  ];

const KudosSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1d1e30] to-[#2e0732]">
      <div className="container mx-auto text-center px-8 lg:px-0">
        <h2 className="xl:text-4xl text-[20px] sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
          <span className="text-white">
            Give <span className="text-pink-600">Kudos</span> To Someone
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 mb-8">
          <a href="#" className="bg-pink-600 text-white px-3 md:px-6 py-3 rounded-full md:mr-4 md:w-auto w-[50%] text-xs md:text-sm lg:text-base">
            Yes
          </a>
          <span className="xs:text-sm sm:text-md lg:text-lg text-gray-400 ">I want to recognize someone</span>
        </div>
        <div className="flex flex-wrap justify-center items-start mb-8">
          {kuds.map((kud, index) => (
            <div key={index} className="w-full md:w-1/2 p-5 md:p-8">
              <div className="bg-gradient-to-br from-purple-800 to-pink-800 md:p-10 p-6 rounded-lg flex flex-col  justify-between min-h-[270px]">
                <div className="flex-grow">
                <div className="text-left text-white">
                  <div className="flex items-center mb-4">
                    <span className="xl:text-6xl text-[20px] sm:text-lg md:text-xl lg:text-3xl font-bold">{kud.step}</span>
                    {kud.icon}
                  </div>
                  <h3 className="xl:text-xl text-[20px]  md:text-md lg:text-lg text-white font-bold mb-2">{kud.title}</h3>
                  <p className="text-white text-400 text-xs md:text-sm lg:text-base">{kud.description}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-white-400 flex justify-center items-center space-x-4">
          <img src="https://placehold.co/40x40" alt="Avatar" className="rounded-full hidden md:block" />
          <div>
            <p className="italic text-xs md:text-sm lg:text-base text-white font-bold opacity-50">
              "Propelo is a great solution for companies who want to spend less time on design and more time creating."
            </p>
            <p className="text-white text-xs md:text-sm lg:text-base font-bold">- Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KudosSection;
