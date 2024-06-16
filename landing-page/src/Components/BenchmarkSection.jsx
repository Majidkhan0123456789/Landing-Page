'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaChartLine, FaTachometerAlt, FaUsers, FaClipboardCheck, FaMedal, FaCogs } from 'react-icons/fa';

const benchmarks = [
    {
        icon: <FaChartLine className="text-pink-600 text-3xl mr-4" />,
        title: 'Compare With Industry Best Practices',
        description: 'Compare your performance metrics with the best practices in the industry.',
        category: 'industry',
      },
      {
        icon: <FaTachometerAlt className="text-pink-600 text-3xl mr-4" />,
        title: 'Demonstrate Your Excellence With Real Comparative Data',
        description: 'Showcase your excellence by providing real comparative data.',
        category: 'excellence',
      },
      {
        icon: <FaUsers className="text-pink-600 text-3xl mr-4" />,
        title: 'Nuanced Benchmarks Based On Team Function & Role',
        description: 'Create benchmarks that are specific to team functions and roles.',
        category: 'team',
      },
      {
        icon: <FaClipboardCheck className="text-pink-600 text-3xl mr-4" />,
        title: 'Track Project Success Rates',
        description: 'Monitor and improve the success rates of your projects.',
        category:  'industry',
      },
      {
        icon: <FaMedal className="text-pink-600 text-3xl mr-4" />,
        title: 'Recognize Top Performers',
        description: 'Identify and reward top performers within your organization.',
        category:  'excellence',
      },
      {
        icon: <FaCogs className="text-pink-600 text-3xl mr-4" />,
        title: 'Optimize Operational Efficiency',
        description: 'Enhance your operational efficiency with targeted benchmarks.',
        category:  'team',
      },
];

function getFilteredBenchmarks(filteritem) {
    if (filteritem === 'all') {
      return benchmarks;
    }
    return benchmarks.filter(function(benchmarkitem) {
      return benchmarkitem.category === filteritem;
    });
  }

const BenchmarkSection = () => {
  const [filteritem, setFilter] = useState('all');

  const filteredBenchmarks = getFilteredBenchmarks(filteritem);

  return (
    <section className="bg-gradient-to-r from-purple-900 to-pink-900 py-20">
      <div className="container mx-auto text-center px-8 lg:px-0">
        <h2 className=" xl:text-4xl text-[20px] sm:text-lg md:text-xl lg:text-2xl  font-bold mb-4 text-pink-600">Benchmarks & Global Intelligence</h2>
        <p className="text-[12px] md:text-md lg:text-lg  text-gray-400 mb-8">Benchmark Within Your Company and Across the Industry</p>
        <p className="text-gray-400 mb-8 text-[12px] md:text-md lg:text-lg">
          There is some text that explains what we mean by single view. Something on need for an actionable stance on data etc. etc.
        </p>
        <div className="flex md:justify-center mb-4 md:mb-8 overflow-x-auto whitespace-nowrap">
          <button
            className={`px-4 py-2 rounded-full mx-2 text-xs md:text-sm lg:text-base ${filteritem === 'all' ? 'bg-pink-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-2 text-xs md:text-sm lg:text-base ${filteritem === 'industry' ? 'bg-pink-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            onClick={() => setFilter('industry')}
          >
            Industry
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-2 text-xs md:text-sm lg:text-base ${filteritem === 'excellence' ? 'bg-pink-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            onClick={() => setFilter('excellence')}
          >
            Excellence
          </button>
          <button
            className={`px-4 py-2 rounded-full mx-2 text-xs md:text-sm lg:text-base ${filteritem === 'team' ? 'bg-pink-600 text-white' : 'bg-gray-600 text-gray-200'}`}
            onClick={() => setFilter('team')}
          >
            Team
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-2/3 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBenchmarks.map((benchmark, index) => (
            <div key={index} className="flex items-start bg-gray-800 p-6 rounded-lg">
              {benchmark.icon}
              <div>
                <h4 className="xl:text-xl text-[18px]  md:text-md lg:text-lg font-bold mb-2 text-white">{benchmark.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base">{benchmark.description}</p>
              </div>
            </div>
          ))}
        </div>
          </div>
          {/* <div className="w-full md:w-1/3 p-4">
          <img src="/organization.jpg" alt="Organization Metric Graph"
            className="rounded-lg w-full"/>
          </div> */}
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

export default BenchmarkSection;
