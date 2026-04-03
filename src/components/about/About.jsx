import React from "react";
import { FaGlobe, FaMobileAlt, FaBrain } from "react-icons/fa";
import pro from '../../assets/WhatsApp Image 2025-11-18 at 21.42.55_1e71dfbf.jpg'
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <div id="about" className=" w-5/6 mx-auto py-20 text-white ">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Profile Image */}
        <div className="relative w-full mx-auto">
          <div className="w-80 h-80  rounded-full overflow-hidden border border-purple-500 shadow-[0_0_40px_#6b00ff]">
            <img
              src={pro}
              alt="profile"
              className="w-full mx-auto h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-semibold leading-snug bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            I'm Mirazul Islam Shourov
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            MERN Stack Developer specially focused on Frontend Development, who loves to build beautiful and functional websites. 
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I create user friendly, responsive, and visually appealing websites using modern technologies. 
          </p>

          {/* Cards */}
          <div className="mt-8 space-y-4">

            {/* Card 1 */}
            <div className="border border-purple-800/40 px-5 py-3 rounded-xl 
              flex items-center gap-4 bg-white/5 backdrop-blur-md 
              hover:bg-white/10 transition shadow-[0_0_20px_#6b00ff40]">
              <FaGlobe className="text-pink-400 text-xl" />
              <span className="text-gray-200 font-medium">Front End Development</span>
            </div>

            {/* Card 2 */}
            <div className="border border-purple-800/40 px-5 py-3 rounded-xl 
              flex items-center gap-4 bg-white/5 backdrop-blur-md 
              hover:bg-white/10 transition shadow-[0_0_20px_#6b00ff40]">
              <FaCode className="text-purple-400 text-xl" />
              <span className="text-gray-200 font-medium">MERN Stack Development</span>
            </div>

            {/* Card 3 */}
            <div className="border border-purple-800/40 px-5 py-3 rounded-xl 
              flex items-center gap-4 bg-white/5 backdrop-blur-md 
              hover:bg-white/10 transition shadow-[0_0_20px_#6b00ff40]">
              <FaBrain className="text-pink-300 text-xl" />
              <span className="text-gray-200 font-medium">Problem Solving</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
