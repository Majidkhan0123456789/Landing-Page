import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTachometerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

// Define the data for the feature cards
const features = [
  {
    icon: faChartLine,
    title: "Correlate Insights from 40+ DevOps, Security & Support Tools",
    description: "Here is some text that explains some more about this point"
  },
  {
    icon: faTachometerAlt,
    title: "Out-of-box Dashboards",
    description: "Here is some text that explains some more about this point"
  },
  {
    icon: faUsers,
    title: "By Team, Organization & Product",
    description: "Here is some text that explains some more about this point"
  }
];

const Highlightsection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-pink-900 py-10 md:py-20">
      <div className="container mx-auto text-center px-4 md:px-5 lg:px-0">
        <h2 className="text-[20px] sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">Highlight Your Success Outdo Yourself Repeat</h2>
        <p className=" text-[12px] sm:text-sm md:text-base  lg:text-lg text-white mb-8">A New Data-Informed Way To Run Your Software Factory</p>
        <h3 className="text-[20px] sm:text-lg md:text-xl lg:text-2xl text-white font-bold mb-4">Single View of Your Software Operations</h3>
        <p className="text-[12px] sm:text-sm md:text-base  lg:text-lg text-white mb-8">
          There is some text that explains what we mean by single view. Something on need for an actionable stance on data etc. etc.
        </p>
        <div className="flex justify-center flex-wrap gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-purple-800 p-4 md:p-6 rounded-lg w-64 md:w-72 lg:w-80 mb-6 text-center">
              <FontAwesomeIcon icon={feature.icon} className="text-pink-600 mb-4 mx-auto w-6 md:w-8 lg:w-10" />
              <h4 className=" text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold mb-4">{feature.title}</h4>
              <p className="text-xs md:text-sm lg:text-base text-white mb-4">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-xs md:text-sm lg:text-base text-white">
          "Propelo is a great solution for companies who want to spend less time on design and more time creating."
        </div>
        <div className="text-white mt-4 text-xs md:text-sm lg:text-base">- Vercel</div>
      </div>
    </section>
  );
};

export default Highlightsection;