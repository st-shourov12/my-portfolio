'use client';

import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function MyProjects() {
  const [activeTab, setActiveTab] = useState('web');

  const projects = [
    {
      id: 1,
      title: "E-commerce Checkout UI",
      description: "A clean, focused checkout UI for an e-commerce platform. Designed to reduce friction and maximize conversions through clear layout, validation, and trust-building elements.",
      image: "https://via.placeholder.com/600x400.png?text=E-commerce+Checkout",
      repoUrl: "https://github.com/yourname/checkout-ui",
      demoUrl: "https://checkout-demo.netlify.app",
      type: "front"
    },
    {
      id: 2,
      title: "Clinic Management Dashboard",
      description: "Clinic management dashboard built for clarity and efficiency. Prioritizes quick access to patient data, appointment stats, and admin tools via clear layout and visual hierarchy.",
      image: "https://via.placeholder.com/600x400.png?text=Clinic+Dashboard",
      repoUrl: "https://github.com/yourname/clinic-dashboard",
      demoUrl: "https://clinic-dashboard.netlify.app",
      type: "both"
    },
    {
      id: 3,
      title: "Global AgriFood Corporate Site",
      description: "Corporate website for an Algerian agri-food distributor, focused on trust-building through clear structure, strong visuals, and intuitive navigation.",
      image: "https://via.placeholder.com/600x400.png?text=AgriFood+Website",
      repoUrl: "https://github.com/yourname/global-agrifood",
      demoUrl: "https://globalagrifood.dz",
      type: "front"
    }
  ];

  const filteredProjects = projects.filter(project =>
    activeTab === 'front'
      ? project.type === 'front' || project.type === 'both'
      : project.type === 'full' || project.type === 'both'
  );

  return (
    <div className=" py-16 w-10/12 mx-auto">
      <div className="">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 tracking-tight">
          My Projects
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('front')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'front'
                  ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Front End
            </button>
            <button
              onClick={() => setActiveTab('full')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'full'
                  ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Full Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    <span>Demo</span>
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity pointer-events-none -z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}