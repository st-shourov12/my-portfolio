// 'use client';

// import React, { useState } from 'react';
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
// import green from '../../assets/greennest.png'
// import hero from '../../assets/heroio.png'
// import cst from '../../assets/cst.png'
// import rent from '../../assets/rentWheels.png'
// import infra from '../../assets/infratrack-full.png'
// import devEl from '../../assets/screencapture-devel-seven-vercel-app-2026-04-02-20_09_17.png'

// export default function MyProjects() {
//   const [activeTab, setActiveTab] = useState('front');

//   const projects = [
//     {
//       id: 1,
//       title: "Green Nest",
//       description: "GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.",
//       image: `${green}`,
//       repoUrl: "https://github.com/st-shourov12/Green-Nest",
//       demoUrl: " https://green-nest-assign9.netlify.app/",
//       tech: ['HTML', 'CSS', 'TailWind'],
//       type: "front"
//     },
//     {
//       id: 2,
//       title: "Hero.io 🚀",
//       description: "Hero.io is an app downloading website where users can download apps for their needs. This is a prototype app featuring 24 types of applications, each designed to be highly user-friendly and smooth your technology journey.",
//       image: `${hero}`,
//       repoUrl: "https://github.com/st-shourov12/Hero-APP-io",
//       demoUrl: "https://devshow-hero-app-assignment-8.netlify.app",
//       type: "front"
//     },

//     {
//       id: 3,
//       title: "Customer Support Zone",
//       description: "Customer Support Zone is a A modern React application built with Vite, featuring fast refresh and ESLint configuration for optimal development experience.",
//       image: `${cst}`,
//       repoUrl: "https://github.com/st-shourov12/Assignment-07",
//       demoUrl: "https://customer-support-zone-991.netlify.app/",
//       type: "front"
//     },
//     {
//       id: 4,
//       title: "Rent Wheels",
//       description: "RentWheels is a full-stack MERN application that connects users with local car owners or rental providers. Users can browse available cars, view details, and book rentals for specific dates. Car providers can list vehicles, manage bookings, and update car availability in real-time.",
//       image: `${rent}`,
//       repoUrl: "https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Server",
//       demoUrl: "https://rentwheelsassignment.netlify.app/",
//       type: "full"
//     },
//     {
//       id: 5,
//       title: "InfraTrack",
//       description: "InfraTrack is a comprehensive civic engagement platform that empowers citizens to report, track, and resolve infrastructure issues in their communities. By bridging the gap between citizens and local government, InfraTrack promotes transparency, accountability, and collaborative problem-solving for building better cities.",
//       image: `${infra}`,
//       repoUrl: "https://github.com/st-shourov12/infraTrack",
//       demoUrl: "https://infra-track.vercel.app",
//       type: "full"
//     },
//     {
//       id: 6,
//       title: "Devel",
//       description: "A full-stack web development course selling platform built with Next.js App Router, NextAuth.js, MongoDB, and DaisyUI.",
//       image: `${devEl}`,
//       repoUrl: "https://github.com/st-shourov12/Devel",
//       demoUrl: "https://devel-seven.vercel.app/",
//       type: "full"
//     },
//   ];

  
//   const filteredProjects = projects.filter(project =>
//     activeTab === 'front'
//       ? project.type === 'front' 
//       : project.type === 'full' || project.type === 'full'
//   );

//   return (
//     <div id='projects' className=" py-16 w-10/12 mx-auto">
//       <div className="">
//         {/* Title */}
//         <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 tracking-tight">
//           My Projects
//         </h1>

//         {/* Tabs */}
//         <div className="flex justify-center mb-16">
//           <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
//             <button
//               onClick={() => setActiveTab('front')}
//               className={`px-8 py-3 rounded-full font-medium transition-all ${
//                 activeTab === 'front'
//                   ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
//                   : 'text-white/70 hover:text-white'
//               }`}
//             >
//               Front End
//             </button>
//             <button
//               onClick={() => setActiveTab('full')}
//               className={`px-8 py-3 rounded-full font-medium transition-all ${
//                 activeTab === 'full'
//                   ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg'
//                   : 'text-white/70 hover:text-white'
//               }`}
//             >
//               MERN Stack
//             </button>
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-2xl "
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden h-64">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>

//               {/* Content */}
//               <div className="p-8 flex flex-col justify-between gap-8 h-auto">
//                 <h2 className="text-3xl font-bold text-white/80">
//                   {project.title}
//                 </h2>
//                 <p className="text-white/90 text-lg leading-relaxed mb-20">
//                   {project.description}
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex absolute bottom-0 gap-4 my-10">
//                   <a
//                     href={project.repoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-6 py-3 text-white bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-all"
//                   >
//                     <FaGithub className="w-5 h-5" />
//                     <span>Repository</span>
//                   </a>
//                   <a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
//                   >
//                     <span>Live Link</span>
//                     <FaExternalLinkAlt className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>

//               {/* Glow */}
//               <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity pointer-events-none -z-10" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaArrowRight } from 'react-icons/fa';
import green from '../../assets/greennest.png'
import hero from '../../assets/heroio.png'
import cst from '../../assets/cst.png'
import rent from '../../assets/rentWheels.png'
import infra from '../../assets/infratrack-full.png'
import devEl from '../../assets/screencapture-devel-seven-vercel-app-2026-04-02-20_09_17.png'

const projects = [
  {
    id: 1,
    title: "Green Nest",
    short: "A plant care & shopping SPA for indoor plant lovers.",
    description: "GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.",
    image: green,
    repoUrl: "https://github.com/st-shourov12/Green-Nest",
    demoUrl: "https://green-nest-assign9.netlify.app/",
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    type: "front",
    features: [
      "Plant care guides & tips",
      "Browse & buy indoor plants",
      "Expert consultation booking",
      "Fully responsive design",
    ],
    status: "Completed",
    statusColor: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    title: "Hero.io 🚀",
    short: "An app downloading platform featuring 24 categories.",
    description: "Hero.io is an app downloading website where users can download apps for their needs. This is a prototype app featuring 24 types of applications, each designed to be highly user-friendly and smooth your technology journey.",
    image: hero,
    repoUrl: "https://github.com/st-shourov12/Hero-APP-io",
    demoUrl: "https://devshow-hero-app-assignment-8.netlify.app",
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: "front",
    features: [
      "24 app categories",
      "Clean download UI",
      "Smooth user experience",
      "Responsive layout",
    ],
    status: "Completed",
    statusColor: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Customer Support Zone",
    short: "A modern React support app built with Vite.",
    description: "Customer Support Zone is a modern React application built with Vite, featuring fast refresh and ESLint configuration for optimal development experience. Designed for seamless customer interaction and support management.",
    image: cst,
    repoUrl: "https://github.com/st-shourov12/Assignment-07",
    demoUrl: "https://customer-support-zone-991.netlify.app/",
    tech: ['React', 'Vite', 'Tailwind CSS'],
    type: "front",
    features: [
      "Fast Vite-powered build",
      "ESLint configured",
      "Support ticket UI",
      "Clean component structure",
    ],
    status: "Completed",
    statusColor: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Rent Wheels",
    short: "MERN stack car rental platform with real-time booking.",
    description: "RentWheels is a full-stack MERN application that connects users with local car owners or rental providers. Users can browse available cars, view details, and book rentals for specific dates. Car providers can list vehicles, manage bookings, and update car availability in real-time.",
    image: rent,
    repoUrl: "https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Server",
    demoUrl: "https://rentwheelsassignment.netlify.app/",
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    type: "full",
    features: [
      "Browse & book cars by date",
      "Provider dashboard to manage listings",
      "Real-time availability updates",
      "Firebase authentication",
      "Full MERN stack",
    ],
    status: "Completed",
    statusColor: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "InfraTrack",
    short: "Civic platform to report & track infrastructure issues.",
    description: "InfraTrack is a comprehensive civic engagement platform that empowers citizens to report, track, and resolve infrastructure issues in their communities. By bridging the gap between citizens and local government, InfraTrack promotes transparency, accountability, and collaborative problem-solving for building better cities.",
    image: infra,
    repoUrl: "https://github.com/st-shourov12/infraTrack",
    demoUrl: "https://infra-track.vercel.app",
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    type: "full",
    features: [
      "Issue reporting by citizens",
      "Real-time status tracking",
      "Government dashboard",
      "JWT secured API",
      "Community voting on issues",
    ],
    status: "Completed",
    statusColor: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "Devel",
    short: "Next.js course selling platform with auth & payments.",
    description: "A full-stack web development course selling platform built with Next.js App Router, NextAuth.js, MongoDB, and DaisyUI. Features a complete course marketplace with authentication, user dashboards, and a modern UI.",
    image: devEl,
    repoUrl: "https://github.com/st-shourov12/Devel",
    demoUrl: "https://devel-seven.vercel.app/",
    tech: ['Next.js', 'NextAuth', 'MongoDB', 'DaisyUI', 'Tailwind CSS'],
    type: "full",
    features: [
      "Next.js App Router",
      "NextAuth.js authentication",
      "Course marketplace UI",
      "MongoDB database",
      "User dashboard",
    ],
    status: "Completed",
    statusColor: "from-blue-500 to-violet-500",
  },
];

const techColors = {
  'HTML':         'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'CSS':          'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'JavaScript':   'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Tailwind CSS': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'React':        'bg-sky-500/20 text-sky-300 border-sky-500/30',
  'Vite':         'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Node.js':      'bg-green-500/20 text-green-300 border-green-500/30',
  'Express.js':   'bg-gray-500/20 text-gray-300 border-gray-500/30',
  'MongoDB':      'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Firebase':     'bg-orange-400/20 text-orange-200 border-orange-400/30',
  'JWT':          'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Next.js':      'bg-white/10 text-white/80 border-white/20',
  'NextAuth':     'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'DaisyUI':      'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
};

// ── Modal ──────────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0d001a]
                   shadow-[0_0_60px_#6b00ff40]"
        style={{ animation: 'modalIn 0.3s ease' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 border border-white/20
                     flex items-center justify-center hover:bg-white/20 transition text-white"
        >
          <FaTimes className="text-sm" />
        </button>

        {/* Hero image */}
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d001a] via-transparent to-transparent" />

          {/* Status badge */}
          <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full
                            bg-linear-to-r ${project.statusColor} text-white shadow-lg`}>
            {project.status}
          </span>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">

          {/* Title + type */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
              <span className="text-xs text-purple-400 uppercase tracking-widest mt-1 block">
                {project.type === 'front' ? 'Frontend Project' : 'Full Stack · MERN'}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-linear-to-r from-purple-500 to-pink-500
                                   flex items-center justify-center shrink-0 text-white text-[10px] font-bold">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium ${techColors[t] || 'bg-white/10 text-white/70 border-white/20'}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-sm rounded-full border border-white/20
                         bg-white/5 text-white hover:bg-white/15 transition-all duration-300 font-medium">
              <FaGithub /> GitHub Repo
            </a>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full
                         bg-linear-to-r from-purple-500 to-pink-500 text-white font-medium
                         hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm
                         shadow-lg shadow-purple-700/30">
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Card ───────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, onOpen }) => (
  <div
    className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10
               hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.03]
               hover:shadow-[0_0_40px_#6b00ff25] flex flex-col cursor-pointer"
    onClick={() => onOpen(project)}
  >
    {/* Image */}
    <div className="relative overflow-hidden h-52">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Type badge */}
      <span className="absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full
                       bg-black/50 border border-white/20 text-white/80 backdrop-blur-sm">
        {project.type === 'front' ? '🎨 Frontend' : '⚡ Full Stack'}
      </span>

      {/* Hover overlay CTA */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md
                         border border-white/30 text-white text-sm font-medium">
          View Details <FaArrowRight className="text-xs" />
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1 gap-3">
      <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
        {project.title}
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed">{project.short}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t}
            className={`text-[10px] px-2.5 py-1 rounded-full border font-medium ${techColors[t] || 'bg-white/10 text-white/70 border-white/20'}`}>
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[10px] px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-white/50">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      {/* Bottom links */}
      <div className="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-white/10">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
          <FaGithub /> Repo
        </a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-purple-400 hover:text-pink-400 transition-colors ml-auto">
          Live <FaExternalLinkAlt className="text-[16px]" />
        </a>
      </div>
    </div>

    {/* Glow */}
    <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-pink-600/10 opacity-0
                    group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />
  </div>
);

// ── Main ───────────────────────────────────────────────────────────────────
export default function MyProjects() {
  const [activeTab, setActiveTab] = useState('front');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter(p =>
    activeTab === 'front' ? p.type === 'front' : p.type === 'full'
  );

  return (
    <>
      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <div id="projects" className="py-20 w-10/12 mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Projects</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Total Projects', value: projects.length },
            { label: 'Frontend', value: projects.filter(p => p.type === 'front').length },
            { label: 'Full Stack', value: projects.filter(p => p.type === 'full').length },
            { label: 'Live & Deployed', value: projects.length },
          ].map((s) => (
            <div key={s.label}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center
                         hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 min-w-[100px]">
              <p className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20 gap-1">
            {[
              { label: '🎨 Frontend', value: 'front' },
              { label: '⚡ Full Stack', value: 'full' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-7 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                  ${activeTab === tab.value
                    ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-700/30 scale-105'
                    : 'text-white/60 hover:text-white'
                  }`}
              >
                {tab.label}
                <span className="ml-2 text-xs opacity-60">
                  ({projects.filter(p => p.type === tab.value).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          Click any card to view full project details · 
          <a href="https://github.com/st-shourov12" target="_blank" rel="noopener noreferrer"
            className="text-purple-400 hover:text-pink-400 transition-colors ml-1">
            See all on GitHub →
          </a>
        </p>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </>
  );
}