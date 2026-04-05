// import React from "react";
// import { FaGlobe, FaMobileAlt, FaBrain } from "react-icons/fa";
// import pro from '../../assets/WhatsApp Image 2025-11-18 at 21.42.55_1e71dfbf.jpg'
// import { FaCode } from "react-icons/fa6";

// const About = () => {
//   return (
//     <div id="about" className=" w-5/6 mx-auto py-20 text-white ">

//       {/* Title */}
//       <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">About Me</h2>

//       <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

//         {/* Profile Image */}
//         <div className="relative w-full mx-auto">
//           <div className="w-80 h-80  rounded-full overflow-hidden border border-purple-500 shadow-[0_0_40px_#6b00ff]">
//             <img
//               src={pro}
//               alt="profile"
//               className="w-full mx-auto h-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Right Text */}
//         <div className="w-full mx-auto">
//           <h2 className="text-3xl font-semibold leading-snug bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             I'm Mirazul Islam Shourov
//           </h2>

//           <p className="text-gray-400 mt-4 leading-relaxed">
//             MERN Stack Developer specially focused on Frontend Development, who loves to build beautiful and functional websites. 
//           </p>

//           <p className="text-gray-400 mt-4 leading-relaxed">
//             I create user friendly, responsive, and visually appealing websites using modern technologies. 
//           </p>

//           {/* Cards */}
//           <div className="mt-8 space-y-4">

//             {/* Card 1 */}
//             <div className="border border-purple-800/40 px-5 py-3 rounded-xl 
//               flex items-center gap-4 bg-white/5 backdrop-blur-md 
//               hover:bg-white/10 transition shadow-[0_0_20px_#6b00ff40]">
//               <FaGlobe className="text-pink-400 text-xl" />
//               <span className="text-gray-200 font-medium">Front End Development</span>
//             </div>

//             {/* Card 2 */}
//             <div className="border border-purple-800/40 px-5 py-3 rounded-xl 
//               flex items-center gap-4 bg-white/5 backdrop-blur-md 
//               hover:bg-white/10 transition shadow-[0_0_20px_#6b00ff40]">
//               <FaCode className="text-purple-400 text-xl" />
//               <span className="text-gray-200 font-medium">MERN Stack Development</span>
//             </div>

//             {/* Card 3 */}
//             <div className="border border-purple-800/40 px-5 py-3 rounded-xl 
//               flex items-center gap-4 bg-white/5 backdrop-blur-md 
//               hover:bg-white/10 transition shadow-[0_0_20px_#6b00ff40]">
//               <FaBrain className="text-pink-300 text-xl" />
//               <span className="text-gray-200 font-medium">Problem Solving</span>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import { FaGlobe, FaMobileAlt, FaBrain } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import pro from '../../assets/WhatsApp Image 2025-11-18 at 21.42.55_1e71dfbf.jpg';

const cards = [
  {
    icon: <FaGlobe className="text-pink-400 text-xl" />,
    title: "Front End Development",
    desc: "Pixel-perfect UIs with React, Tailwind & modern CSS",
    border: "border-pink-800/40",
    glow: "shadow-[0_0_20px_#ec489940]",
  },
  {
    icon: <FaCode className="text-purple-400 text-xl" />,
    title: "MERN Stack Development",
    desc: "Full-stack apps with MongoDB, Express, React & Node",
    border: "border-purple-800/40",
    glow: "shadow-[0_0_20px_#6b00ff40]",
  },
  {
    icon: <FaBrain className="text-pink-300 text-xl" />,
    title: "Problem Solving",
    desc: "Breaking down complex problems into clean solutions",
    border: "border-fuchsia-800/40",
    glow: "shadow-[0_0_20px_#a21caf40]",
  },
];

const About = () => {
  return (
    <div id="about" className="w-5/6 relative mx-auto py-20 text-white">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animation: `particle-rise ${Math.random() * 12 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">Get To Know</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        {/* Underline accent */}
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left — Profile Image */}
        <div className="relative shrink-0 flex items-center justify-center w-full lg:w-auto">

          {/* Rotating dashed ring */}
          <div
            className="absolute w-96 h-96 rounded-full border border-dashed border-purple-500/30"
            style={{ animation: 'spin 18s linear infinite' }}
          />
          <div
            className="absolute w-104 h-104 rounded-full border border-dashed border-pink-500/20"
            style={{ animation: 'spin 24s linear infinite reverse' }}
          />

          {/* Glow blob */}
          <div className="absolute w-72 h-72 rounded-full bg-purple-700/20 blur-3xl" />

          {/* Profile image */}
          <div
            className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-purple-500"
            style={{
              boxShadow: '0 0 40px #6b00ff, 0 0 80px #6b00ff30',
              animation: 'float 4s ease-in-out infinite',
            }}
          >
            <img src={pro} alt="profile" className="w-full h-full object-cover" />
          </div>

          {/* Stat badges */}
          <div
            className="absolute top-6 -right-4 lg:-right-10 bg-[#0d0018]/80 backdrop-blur-md border border-purple-500/40 px-4 py-2 rounded-xl text-center"
            style={{ animation: 'float 3.5s ease-in-out infinite 0.4s', boxShadow: '0 0 16px #6b00ff50' }}
          >
            <p className="text-xs font-bold text-white">Front End</p>
            <p className="text-xs text-gray-400">Developer</p>
          </div>

          <div
            className="absolute bottom-6 -left-4 lg:-left-10 bg-[#0d0018]/80 backdrop-blur-md border border-pink-500/40 px-4 py-2 rounded-xl text-center"
            style={{ animation: 'float 3.5s ease-in-out infinite 1s', boxShadow: '0 0 16px #ec489950' }}
          >
            <p className="text-xs font-bold text-white">MERN Stack</p>
            <p className="text-xs text-gray-400">Developer</p>
          </div>

        </div>

        {/* Right — Text */}
        <div className="w-full">
          <h2 className="text-3xl font-semibold leading-snug bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            I'm Mirazul Islam Shourov
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            MERN Stack Developer specially focused on Frontend Development,
            who loves to build beautiful and functional websites.
          </p>
          <p className="text-gray-400 mt-3 leading-relaxed">
            I create user-friendly, responsive, and visually appealing
            websites using modern technologies.
          </p>

          {/* Skill cards */}
          <div className="mt-8 space-y-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`border ${card.border} px-5 py-4 rounded-xl 
                  flex items-start gap-4 bg-white/5 backdrop-blur-md 
                  hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 ${card.glow} cursor-default`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                  {card.icon}
                </div>
                <div>
                  <p className="text-gray-100 font-semibold">{card.title}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <a href="#contact"
              className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 
                         font-medium hover:opacity-90 hover:scale-105 transition-all duration-300
                         shadow-lg shadow-pink-700/30"
            >
              Let's Talk →
            </a>

            <a href="#projects"
              className="px-6 py-3 rounded-full border border-purple-500/50 font-medium 
                         hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;