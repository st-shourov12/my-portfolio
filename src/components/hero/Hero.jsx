// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { SiReact, SiHtml5, SiNodedotjs } from "react-icons/si";
// import Profile from '../../assets/WhatsApp Image 2025-11-19 at 13.48.16_07a5eca2.jpg';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <div className="text-white relative w-10/12 mx-auto overflow-hidden">

//       {/* Floating particles background */}
//       <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
//         {[...Array(14)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-purple-400/50"
//             style={{
//               left: `${Math.random() * 100}%`,
//               bottom: '-10px',
//               width: `${Math.random() * 3 + 1}px`,
//               height: `${Math.random() * 3 + 1}px`,
//               animation: `particle-rise ${Math.random() * 8 + 5}s linear ${Math.random() * 8}s infinite`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Section */}
//       {/* <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-30 py-20 relative z-10"> */}
//       {/* Main Section - add px padding */}
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-30 py-20 relative z-10 ">

//         {/* Left Text */}
//         <div>
//           {/* Greeting tag */}
//           <p className="animate-fade-up-1 text-sm tracking-[0.3em] text-purple-400 uppercase mb-2">
//             Hello, World 👋
//           </p>

//           <h1 className="animate-fade-up-2 text-xl md:text-5xl font-bold leading-tight">
//             Hi, I'm <span className="text-white">Mirazul Islam <br /> Shourov</span>
//           </h1>

//           {/* Typewriter role */}
//           <h2 className="animate-fade-up-3 text-3xl font-semibold mt-4 overflow-hidden h-10">
//             <span className="typewriter-text bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               MERN Stack Developer
//             </span>
//           </h2>

//           <p className="animate-fade-up-4 text-gray-400 mt-6 max-w-lg">
//             Crafting modern, responsive, and user-friendly websites with
//             passion and precision.
//           </p>

//           <div className="animate-fade-up-5 flex items-center gap-6 mt-8">

//             <a href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view"
//               target="_blank"
//               className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 
//                          flex items-center gap-3 shadow-lg shadow-pink-700/40 
//                          hover:opacity-90 hover:scale-105 transition-all duration-300"
//             >
//               Resume <CgProfile />
//             </a>
//           </div>
//         </div>

//         {/* Right Image
//         <div className="relative animate-float" style={{ animationDelay: '0s' }}> */}

//         {/* Right Image - add margin/padding on the right */}
//         <div className="relative animate-float mx-16 mt-10 md:mt-0">

//           {/* Outer pulse rings */}
//           <div className="absolute inset-0 rounded-full scale-110 bg-purple-500/10 animate-ping" style={{ animationDuration: '2.5s' }} />
//           <div className="absolute inset-0 rounded-full scale-125 bg-pink-500/5 animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />

//           {/* Profile image */}
//           <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-purple-500 pulse-ring">
//             <img
//               src={Profile}
//               alt="profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Floating tech icons */}
//           <div className="absolute top-10 -left-10 bg-[#111]/60 p-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/40 hover:scale-110 transition-transform"
//             style={{ animation: 'float 3.5s ease-in-out infinite 0.3s' }}>
//             <SiNodedotjs className="text-green-400 text-3xl" />
//           </div>

//           <div className="absolute -top-6 right-4 bg-[#111]/60 p-3 rounded-full border border-orange-400/30 shadow-lg shadow-orange-500/40 hover:scale-110 transition-transform"
//             style={{ animation: 'float 3.5s ease-in-out infinite 0.8s' }}>
//             <SiHtml5 className="text-orange-400 text-3xl" />
//           </div>

//           {/* <div className="absolute bottom-6 -right-10 bg-[#111]/60 p-3 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/40 hover:scale-110 transition-transform"
//             style={{ animation: 'float 3.5s ease-in-out infinite 1.3s' }}>
//             <SiReact className="text-blue-400 text-3xl animate-spin" style={{ animationDuration: '8s' }} />
//           </div> */}
//           {/* was: bottom-6 -right-10 */}
//           <div
//             className="absolute bottom-6 -right-6 bg-[#111]/60 p-3 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/40 hover:scale-110 transition-transform"
//             style={{ animation: 'float 3.5s ease-in-out infinite 1.3s' }}
//           >
//             <SiReact className="text-blue-400 text-3xl animate-spin" style={{ animationDuration: '8s' }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { CgProfile } from "react-icons/cg";
import { SiReact, SiHtml5, SiNodedotjs } from "react-icons/si";
import Profile from '../../assets/WhatsApp Image 2025-11-19 at 13.48.16_07a5eca2.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="text-white relative w-full min-h-screen flex items-center overflow-hidden ">

      {/* Subtle floating particles */}
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

      <div className="w-10/12 mx-auto pt-10 pb-16 md:pt-32 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-8">

          {/* Left - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-up-1 text-purple-400 text-sm md:text-base tracking-[3px] uppercase mb-3 font-medium">
              Hello, World 👋
            </p>

            <h1 className="text-4xl animate-fade-up-2 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="text-white">Mirazul Islam Shourov</span>
            </h1>

            <h2 className="mt-4 animate-fade-up-3 text-2xl md:text-3xl lg:text-4xl ">
              <span className="typewriter-text bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-base md:text-lg max-w-md mx-auto lg:mx-0">
              Crafting modern, responsive, and user-friendly web experiences with passion and precision.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 
                           flex items-center gap-3 text-lg font-medium shadow-xl shadow-purple-500/30 
                           hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95"
              >
                Download Resume
                <CgProfile className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image + Floating Icons */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">

              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 rounded-full bg-pink-500/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />

              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-400/80 shadow-2xl shadow-purple-500/50 relative z-10">
                <img
                  src={Profile}
                  alt="Mirazul Islam Shourov"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons - Hidden or smaller on very small screens */}
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-10 bg-zinc-900/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-purple-500/30 shadow-xl hidden sm:block">
                <SiNodedotjs className="text-green-400 text-3xl md:text-4xl" />
              </div>

              <div className="absolute -top-8 right-6 md:-top-10 md:right-8 bg-zinc-900/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-orange-400/30 shadow-xl hidden sm:block">
                <SiHtml5 className="text-orange-400 text-3xl md:text-4xl" />
              </div>

              <div className="absolute bottom-8 -right-4 md:bottom-10 md:-right-6 bg-zinc-900/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-blue-400/30 shadow-xl hidden sm:block">
                <SiReact className="text-blue-400 text-3xl md:text-4xl animate-spin" style={{ animationDuration: '12s' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;