import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="w-10/12 mx-auto py-20 relative">
      {/* Background glows */}
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-pink-700/10 rounded-full blur-3xl" />

      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">My Academic Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Education</h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-purple-500/30 pl-8 md:pl-12">

          {/* Education Card */}
          <div className="mb-16 relative">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-6 w-6 h-6 rounded-full border-4 border-purple-500 bg-black" />

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className="w-16 h-16 shrink-0 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                  <FaGraduationCap />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      Bachelor of Science (BSc) in Chemistry
                    </h3>
                    <span className="px-4 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                      Undergraduate
                    </span>
                  </div>

                  <p className="text-purple-400 mt-2 text-lg font-medium">
                    Dhaka Central University
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>2022 — 2026 (Expected)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-purple-400" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gray-400 leading-relaxed">
                      Currently pursuing my Bachelor's degree in Chemistry. 
                      Building a strong foundation in scientific principles while developing 
                      my passion for technology and web development alongside my studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* You can add more education entries (HSC, SSC, etc.) here later */}
        </div>
      </div>

      {/* Optional: Add a note */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          Combining scientific knowledge with modern web technologies
        </p>
      </div>
    </div>
  );
};

export default Education;