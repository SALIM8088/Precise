// import { FaHardHat, FaIndustry, FaBuilding } from "react-icons/fa";

// const About = () => {
//   return (
//     <>
//       {/* About Us Heading */}
//       <div className="pt-16 text-center">
//         <h2 className="text-gray-700 text-5xl font-semibold mb-8 font-[Manrope] tracking-wide">
//           ABOUT US
//         </h2>
//       </div>

//       <section
//         id="about"
//         className="flex justify-center items-center px-10 py-16 mb-10 bg-gray-100"
//       >
//         <div className="max-w-6xl w-full flex flex-col items-center text-center">
//           <div className="w-full flex flex-col md:flex-row items-center">
//             {/* Left Text Section */}
//             <div className="md:w-1/2 text-left space-y-4">
//               <h2 className="text-yellow-500 text-lg font-semibold">
//                 Welcome to
//               </h2>
//               <h1 className="text-4xl font-bold text-gray-900">Manufactory</h1>
//               <div className="w-16 h-1 bg-yellow-500"></div>
//               <p className="text-gray-700 leading-relaxed">
//                 When you give to know your donation is making a difference.
//                 Whether you are supporting one of our signature programs or our
//                 carefully curated list of professional staff.
//               </p>
//             </div>

//             {/* Right Feature Cards Section */}
//             <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-0">
//               {/* Card 1 */}
//               <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-lg transition">
//                 <FaHardHat className="text-4xl text-gray-700" />
//                 <h3 className="text-lg font-semibold mt-3">
//                   We are Professional
//                 </h3>
//                 <p className="text-gray-500 text-sm">Engineers</p>
//               </div>
//               {/* Card 2 */}
//               <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-lg transition">
//                 <FaIndustry className="text-4xl text-gray-700" />
//                 <h3 className="text-lg font-semibold mt-3">
//                   Licensed & Insured
//                 </h3>
//                 <p className="text-gray-500 text-sm">Industry</p>
//               </div>
//               {/* Card 3 */}
//               <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-lg transition">
//                 <FaBuilding className="text-4xl text-gray-700" />
//                 <h3 className="text-lg font-semibold mt-3">Number 1 Company</h3>
//                 <p className="text-gray-500 text-sm">In Region</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

import { FaFan, FaTools, FaIndustry, FaCogs } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 px-6 py-20">
      {/* About Us Heading */}
      <div className="text-center mb-12">
        <h2 className="text-gray-800 text-6xl font-bold mb-6 font-outfit tracking-wide">
          ABOUT US
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Precise Installation and Fabrication Works specializes in **pump installation, 
          dam gate fabrication, and hydro-mechanical maintenance**, ensuring efficiency 
          and long-term performance in water management systems.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left space-y-6">
          <h3 className="text-yellow-500 text-xl font-semibold uppercase">Our Expertise</h3>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Trusted Installation & Fabrication Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We offer end-to-end solutions in **pump installation, vertical crest gate fabrication, 
            and hydro-mechanical maintenance**, ensuring precision and durability in every project.
          </p>
        </div>

        {/* Right Feature Cards Section */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center text-center rounded-xl hover:shadow-xl transition-all duration-300">
            <FaFan className="text-5xl text-yellow-500" />
            <h3 className="text-xl font-semibold mt-4">Pump Installation</h3>
            <p className="text-gray-500 text-md mt-2">Metallic Volute Pumps & VT Pumps</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center text-center rounded-xl hover:shadow-xl transition-all duration-300">
            <FaIndustry className="text-5xl text-yellow-500" />
            <h3 className="text-xl font-semibold mt-4">Gate Fabrication</h3>
            <p className="text-gray-500 text-md mt-2">Vertical Crest & Godabole Gates</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center text-center rounded-xl hover:shadow-xl transition-all duration-300">
            <FaTools className="text-5xl text-yellow-500" />
            <h3 className="text-xl font-semibold mt-4">Maintenance</h3>
            <p className="text-gray-500 text-md mt-2">Regular Inspections & Repairs</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-lg p-8 flex flex-col items-center text-center rounded-xl hover:shadow-xl transition-all duration-300">
            <FaCogs className="text-5xl text-yellow-500" />
            <h3 className="text-xl font-semibold mt-4">Custom Fabrication</h3>
            <p className="text-gray-500 text-md mt-2">Steel Structures & Mechanical Works</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
