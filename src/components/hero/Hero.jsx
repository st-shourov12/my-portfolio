// import React from "react";
// import { FaDownload, FaEnvelope } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

// import {
//   FaFacebook,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";
// import { SiReact, SiHtml5, SiNodedotjs } from "react-icons/si";

// import Profile from '../../assets/WhatsApp Image 2025-11-19 at 13.48.16_07a5eca2.jpg'


// const Hero = () => {
//   return (
//     <div className=" text-white relative w-10/12 mx-auto ">

//       {/* Navbar */}
//       {/* <nav className="w-full flex justify-between items-center px-16 py-6 text-gray-300 text-lg">
//         <h1 className="text-2xl font-semibold text-pink-400">
//           Shourov<span className="text-purple-400">&lt;/&gt;</span>
//         </h1>

//         <ul className="flex gap-12 text-gray-300">
//           <li className="hover:text-purple-400 cursor-pointer">Home</li>
//           <li className="hover:text-purple-400 cursor-pointer">About</li>
//           <li className="hover:text-purple-400 cursor-pointer">Skills</li>
//           <li className="hover:text-purple-400 cursor-pointer">Projects</li>
//           <li className="hover:text-purple-400 cursor-pointer">Contact</li>
//         </ul>
//       </nav> */}
//       {/* <Header></Header> */}

//       {/* Main Section */}
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-30 py-20">

//         {/* Left Text */}
//         <div>
//           <h1 className="text-xl md:text-5xl font-bold leading-tight">
//             Hi, I’m <span className="text-white">Mirazul Islam <br /> Shourov</span>
//           </h1>

//           <h2 className="text-3xl font-semibold mt-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             MERN Stack Developer
//           </h2>

//           <p className="text-gray-400 mt-6 max-w-lg">
//             Crafting modern, responsive, and user-friendly websites with
//             passion and precision.
//           </p>

//           {/* Button + Social Icons */}
//           <div className="flex items-center gap-6 mt-8">
//             <a href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view" target="_blank" className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center gap-3 shadow-lg shadow-pink-700/40 hover:opacity-90 transition">
//               Resume <CgProfile  />
//             </a>

//             {/* <div className="flex gap-4 text-xl">
//                 <a href="https://shourovsc38@gmail.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20"><FaEnvelope className="hover:text-purple-400 cursor-pointer"></FaEnvelope>
//                 </a>
//                 <a  href="https://www.linkedin.com/in/miraz-shourov/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20">


//                     <FaLinkedin className="hover:text-purple-400 cursor-pointer" />
//                 </a>
//                 <a href="https://github.com/st-shourov12" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20">


//                     <FaGithub className="hover:text-purple-400 cursor-pointer" />
//                 </a>
//                 <a  href="https://www.facebook.com/mirazulislam.shourov" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white text-xl cursor-pointer hover:bg-white/20">


//                     <FaFacebook className="hover:text-purple-400 cursor-pointer" />
//                 </a>

//             </div> */}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <div className="w-80 h-80 rounded-full overflow-hidden border border-purple-500 shadow-[0px_0px_40px_#6b00ff]">
//             <img
//               src={Profile}
//               alt="profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Floating Icons */}
//           <div className="absolute top-10 -left-10 bg-[#111]/60 p-3 rounded-full border border-purple-500/30 shadow-purple-500/40 shadow-lg">
//             <SiNodedotjs className="text-green-400 text-3xl" />
//           </div>

//           <div className="absolute -top-6 right-4 bg-[#111]/60 p-3 rounded-full border border-orange-400/30 shadow-orange-500/40 shadow-lg">
//             <SiHtml5 className="text-orange-400 text-3xl" />
//           </div>

//           <div className="absolute bottom-6 -right-10 bg-[#111]/60 p-3 rounded-full border border-blue-400/30 shadow-blue-500/40 shadow-lg">
//             <SiReact className="text-blue-400 text-3xl animate-spin-slow" />
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
    <div className="text-white relative w-10/12 mx-auto overflow-hidden">

      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/50"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10px',
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `particle-rise ${Math.random() * 8 + 5}s linear ${Math.random() * 8}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Section */}
      {/* <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-30 py-20 relative z-10"> */}
      {/* Main Section - add px padding */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-30 py-20 relative z-10 ">

        {/* Left Text */}
        <div>
          {/* Greeting tag */}
          <p className="animate-fade-up-1 text-sm tracking-[0.3em] text-purple-400 uppercase mb-2">
            Hello, World 👋
          </p>

          <h1 className="animate-fade-up-2 text-xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-white">Mirazul Islam <br /> Shourov</span>
          </h1>

          {/* Typewriter role */}
          <h2 className="animate-fade-up-3 text-3xl font-semibold mt-4 overflow-hidden h-10">
            <span className="typewriter-text bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h2>

          <p className="animate-fade-up-4 text-gray-400 mt-6 max-w-lg">
            Crafting modern, responsive, and user-friendly websites with
            passion and precision.
          </p>

          <div className="animate-fade-up-5 flex items-center gap-6 mt-8">

            <a href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view"
              target="_blank"
              className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 
                         flex items-center gap-3 shadow-lg shadow-pink-700/40 
                         hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Resume <CgProfile />
            </a>
          </div>
        </div>

        {/* Right Image
        <div className="relative animate-float" style={{ animationDelay: '0s' }}> */}

        {/* Right Image - add margin/padding on the right */}
        <div className="relative animate-float mr-16 mt-10 md:mt-0">

          {/* Outer pulse rings */}
          <div className="absolute inset-0 rounded-full scale-110 bg-purple-500/10 animate-ping" style={{ animationDuration: '2.5s' }} />
          <div className="absolute inset-0 rounded-full scale-125 bg-pink-500/5 animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />

          {/* Profile image */}
          <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-purple-500 pulse-ring">
            <img
              src={Profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating tech icons */}
          <div className="absolute top-10 -left-10 bg-[#111]/60 p-3 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/40 hover:scale-110 transition-transform"
            style={{ animation: 'float 3.5s ease-in-out infinite 0.3s' }}>
            <SiNodedotjs className="text-green-400 text-3xl" />
          </div>

          <div className="absolute -top-6 right-4 bg-[#111]/60 p-3 rounded-full border border-orange-400/30 shadow-lg shadow-orange-500/40 hover:scale-110 transition-transform"
            style={{ animation: 'float 3.5s ease-in-out infinite 0.8s' }}>
            <SiHtml5 className="text-orange-400 text-3xl" />
          </div>

          {/* <div className="absolute bottom-6 -right-10 bg-[#111]/60 p-3 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/40 hover:scale-110 transition-transform"
            style={{ animation: 'float 3.5s ease-in-out infinite 1.3s' }}>
            <SiReact className="text-blue-400 text-3xl animate-spin" style={{ animationDuration: '8s' }} />
          </div> */}
          {/* was: bottom-6 -right-10 */}
          <div
            className="absolute bottom-6 -right-6 bg-[#111]/60 p-3 rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/40 hover:scale-110 transition-transform"
            style={{ animation: 'float 3.5s ease-in-out infinite 1.3s' }}
          >
            <SiReact className="text-blue-400 text-3xl animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;