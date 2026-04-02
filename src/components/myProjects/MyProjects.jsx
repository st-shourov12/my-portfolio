'use client';

import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import green from '../../assets/greennest.png'
import hero from '../../assets/heroio.png'
import cst from '../../assets/cst.png'
import rent from '../../assets/rentWheels.png'
import infra from '../../assets/infratrack-full.png'
import devEl from '../../assets/screencapture-devel-seven-vercel-app-2026-04-02-20_09_17.png'

export default function MyProjects() {
  const [activeTab, setActiveTab] = useState('front');

  const projects = [
    {
      id: 1,
      title: "Green Nest",
      description: "GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.",
      image: `${green}`,
      repoUrl: "https://github.com/st-shourov12/Green-Nest",
      demoUrl: " https://green-nest-assign9.netlify.app/",
      tech: ['HTML', 'CSS', 'TailWind'],
      type: "front"
    },
    {
      id: 2,
      title: "Hero.io 🚀",
      description: "Hero.io is an app downloading website where users can download apps for their needs. This is a prototype app featuring 24 types of applications, each designed to be highly user-friendly and smooth your technology journey.",
      image: `${hero}`,
      repoUrl: "https://github.com/st-shourov12/Hero-APP-io",
      demoUrl: "https://devshow-hero-app-assignment-8.netlify.app",
      type: "front"
    },

    {
      id: 3,
      title: "Customer Support Zone",
      description: "Customer Support Zone is a A modern React application built with Vite, featuring fast refresh and ESLint configuration for optimal development experience.",
      image: `${cst}`,
      repoUrl: "https://github.com/st-shourov12/Assignment-07",
      demoUrl: "https://customer-support-zone-991.netlify.app/",
      type: "front"
    },
    {
      id: 4,
      title: "Rent Wheels",
      description: "RentWheels is a full-stack MERN application that connects users with local car owners or rental providers. Users can browse available cars, view details, and book rentals for specific dates. Car providers can list vehicles, manage bookings, and update car availability in real-time.",
      image: `${rent}`,
      repoUrl: "https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Server",
      demoUrl: "https://rentwheelsassignment.netlify.app/",
      type: "full"
    },
    {
      id: 5,
      title: "InfraTrack",
      description: "InfraTrack is a comprehensive civic engagement platform that empowers citizens to report, track, and resolve infrastructure issues in their communities. By bridging the gap between citizens and local government, InfraTrack promotes transparency, accountability, and collaborative problem-solving for building better cities.",
      image: `${infra}`,
      repoUrl: "https://github.com/st-shourov12/infraTrack",
      demoUrl: "https://infra-track.vercel.app",
      type: "full"
    },
    {
      id: 6,
      title: "Devel",
      description: "A full-stack web development course selling platform built with Next.js App Router, NextAuth.js, MongoDB, and DaisyUI.",
      image: `${devEl}`,
      repoUrl: "https://github.com/st-shourov12/Devel",
      demoUrl: "https://devel-seven.vercel.app/",
      type: "full"
    },
  ];

  
  const filteredProjects = projects.filter(project =>
    activeTab === 'front'
      ? project.type === 'front' 
      : project.type === 'full' || project.type === 'full'
  );

  return (
    <div id='projects' className=" py-16 w-10/12 mx-auto">
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
              MERN Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-2xl "
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
              <div className="p-8 flex flex-col justify-between gap-8 h-auto">
                <h2 className="text-3xl font-bold text-white/80">
                  {project.title}
                </h2>
                <p className="text-white/90 text-lg leading-relaxed mb-20">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex absolute bottom-0 gap-4 my-10">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-white bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-all"
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
                    <span>Live Link</span>
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