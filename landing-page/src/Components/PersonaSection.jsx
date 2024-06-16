"use client";
import React, { useState } from 'react';

// Data for the buttons
const personas = [
  { label: 'For Team Managers', bgColor: 'bg-pink-600', textColor: 'text-white' },
  { label: 'For Individual Contributors', bgColor: 'bg-gray-800', textColor: 'text-white' }
];

// Data for the feature cards
const features = [
  {
    title: "Product Metrics & KPIs",
    description: "Enable organizations to achieve operational excellence"
  },
  {
    title: "Operational Excellence",
    description: "Help you to streamline and automate"
  },
  {
    title: "Developer Happiness",
    description: "Improve developer satisfaction and productivity"
  }
];

const PersonaSection = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].label);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto text-center px-8 lg:px-0">
        <h2 className="text-[20px] sm:text-lg md:text-xl lg:text-2xl  text-white font-bold mb-4">For Every Persona In Your Organization</h2>
        <div className="block md:flex sm:justify-between md:justify-center md:space-x-6 space-y-6 md:space-y-0 mb-8">
          {personas.map((persona, index) => (
            <button
              key={index}
              className={`${persona.bgColor} ${persona.textColor} text-xs md:text-sm lg:text-base px-4 py-2 mx-5 md:mx-0 rounded-full`}
              onClick={() => setSelectedPersona(persona.label)}
            >
              {persona.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-purple-800 md:p-6 p-3 rounded-lg">
              <h3 className=" text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 mb-4 text-xs md:text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-gray-400 text-xs md:text-sm lg:text-base">
          "Speed is your solution to address one of the biggest threats to modern-day value creation"
        </div>
        <div className="text-white mt-4 text-xs md:text-sm lg:text-base">- Anon</div>
      </div>
    </section>
  );
};

export default PersonaSection;
