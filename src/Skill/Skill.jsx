


// import React, { useState } from 'react';

// const skillCategories = [
//   {
//     label: 'All',
//     filter: 'all',
//   },
//   {
//     label: 'Frontend',
//     filter: 'frontend',
//   },
//   {
//     label: 'Backend',
//     filter: 'backend',
//   },
//   {
//     label: 'Database & Auth',
//     filter: 'db',
//   },
// ];

// const skills = [
//   // Frontend
//   { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, tag: 'Expert', tagColor: 'from-pink-500 to-rose-500', category: 'frontend' },
//   { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, tag: 'Expert', tagColor: 'from-blue-500 to-cyan-500', category: 'frontend' },
//   { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85, tag: 'Advanced', tagColor: 'from-yellow-500 to-orange-500', category: 'frontend' },
//   { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 90, tag: 'Expert', tagColor: 'from-teal-500 to-cyan-500', category: 'frontend' },
//   { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-purple-500 to-indigo-500', category: 'frontend' },
//   { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85, tag: 'Advanced', tagColor: 'from-cyan-500 to-blue-500', category: 'frontend' },
//   { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: 70, tag: 'Intermediate', tagColor: 'from-gray-400 to-gray-600', category: 'frontend' },
//   { name: "Chart.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg", level: 72, tag: 'Intermediate', tagColor: 'from-pink-400 to-fuchsia-500', category: 'frontend' },

//   // Backend
//   { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-green-500 to-emerald-500', category: 'backend' },
//   { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 78, tag: 'Advanced', tagColor: 'from-gray-400 to-slate-500', category: 'backend' },
//   { name: "JWT", icon: "https://i.ibb.co.com/rK9yLNhC/icons8-jwt.jpg", level: 75, tag: 'Intermediate', tagColor: 'from-pink-500 to-rose-400', category: 'backend' },

//   // DB & Auth
//   { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-green-600 to-lime-500', category: 'db' },
//   { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 75, tag: 'Intermediate', tagColor: 'from-orange-500 to-yellow-500', category: 'db' },
//   { name: "NextAuth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: 65, tag: 'Intermediate', tagColor: 'from-violet-500 to-purple-500', category: 'db' },
// ];

// const SkillCard = ({ skill, visible }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10
//                  hover:border-purple-500/50 transition-all duration-500 hover:scale-105
//                  hover:shadow-[0_0_30px_#6b00ff30] flex flex-col items-center gap-3 cursor-default"
//     >
//       {/* Tag badge */}
//       <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full 
//                         bg-linear-to-r ${skill.tagColor} text-white opacity-80`}>
//         {skill.tag}
//       </span>

//       {/* Icon */}
//       <div className="w-14 h-14 md:w-16 md:h-16 mt-2">
//         <img
//           src={skill.icon}
//           alt={skill.name}
//           className="w-full h-full object-contain drop-shadow-lg
//                      group-hover:scale-125 transition-transform duration-500"
//           style={{ filter: skill.name === 'Express.js' || skill.name === 'NextAuth' ? 'invert(1)' : 'none' }}
//         />
//       </div>

//       {/* Name */}
//       <h3 className="text-white font-semibold text-base">{skill.name}</h3>

//       {/* Progress bar */}
//       <div className="w-full">
//         <div className="flex justify-between text-xs text-gray-400 mb-1">
//           <span>Proficiency</span>
//           <span className="text-purple-300 font-medium">{skill.level}%</span>
//         </div>
//         <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
//           <div
//             className={`h-full bg-linear-to-r ${skill.tagColor} rounded-full transition-all duration-1000 ease-out`}
//             style={{ width: visible ? `${skill.level}%` : '0%' }}
//           />
//         </div>
//       </div>

//       {/* Glow on hover */}
//       <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 to-pink-600/10 rounded-2xl
//                       opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
//     </div>
//   );
// };

// const Skill = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [visible, setVisible] = useState(true);

//   const handleFilter = (filter) => {
//     setVisible(false);
//     setTimeout(() => {
//       setActiveFilter(filter);
//       setVisible(true);
//     }, 200);
//   };

//   const filtered = activeFilter === 'all' ? skills : skills.filter(s => s.category === activeFilter);

//   return (
//     <section id="skills" className="py-20">
//       <div className="w-10/12 mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">What I Work With</p>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
//           <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
//         </div>

//         {/* Filter tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {skillCategories.map((cat) => (
//             <button
//               key={cat.filter}
//               onClick={() => handleFilter(cat.filter)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
//                 ${activeFilter === cat.filter
//                   ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-700/30 scale-105'
//                   : 'border border-white/20 text-gray-400 hover:border-purple-500/50 hover:text-white'
//                 }`}
//             >
//               {cat.label}
//               <span className="ml-2 text-xs opacity-60">
//                 {cat.filter === 'all' ? skills.length : skills.filter(s => s.category === cat.filter).length}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Summary stats */}
//         <div className="flex flex-wrap justify-center gap-6 mb-12">
//           {[
//             { label: 'Technologies', value: skills.length + '+' },
//             { label: 'Avg. Proficiency', value: Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length) + '%' },
//             { label: 'Frontend Skills', value: skills.filter(s => s.category === 'frontend').length },
//             { label: 'Backend Skills', value: skills.filter(s => s.category === 'backend').length },
//           ].map((stat) => (
//             <div key={stat.label}
//               className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center
//                          hover:border-purple-500/40 transition-all duration-300">
//               <p className="text-2xl font-bold text-white">{stat.value}</p>
//               <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Skills grid */}
//         <div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
//           style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s ease' }}
//         >
//           {filtered.map((skill) => (
//             <SkillCard key={skill.name} skill={skill} visible={visible} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skill;


import React, { useState } from 'react';

const skillCategories = [
    { label: 'All', filter: 'all' },
    { label: 'Frontend', filter: 'frontend' },
    { label: 'Backend', filter: 'backend' },
    { label: 'Database & Auth', filter: 'db' },
    { label: 'Tools', filter: 'tools' },
];

const skills = [
    // Frontend
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, tag: 'Expert', tagColor: 'from-pink-500 to-rose-500', category: 'frontend', invert: false },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, tag: 'Expert', tagColor: 'from-blue-500 to-cyan-500', category: 'frontend', invert: false },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85, tag: 'Advanced', tagColor: 'from-yellow-500 to-orange-500', category: 'frontend', invert: false },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 90, tag: 'Expert', tagColor: 'from-teal-500 to-cyan-500', category: 'frontend', invert: false },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-purple-500 to-indigo-500', category: 'frontend', invert: false },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85, tag: 'Advanced', tagColor: 'from-cyan-500 to-blue-500', category: 'frontend', invert: false },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: 70, tag: 'Intermediate', tagColor: 'from-gray-400 to-gray-600', category: 'frontend', invert: true },
    { name: "Chart.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg", level: 72, tag: 'Intermediate', tagColor: 'from-pink-400 to-fuchsia-500', category: 'frontend', invert: false },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", level: 70, tag: 'Intermediate', tagColor: 'from-pink-500 to-fuchsia-500', category: 'frontend', invert: true },

    // Backend
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-green-500 to-emerald-500', category: 'backend', invert: false },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 78, tag: 'Advanced', tagColor: 'from-gray-400 to-slate-500', category: 'backend', invert: true },
    { name: "JWT", icon: "https://i.ibb.co.com/rK9yLNhC/icons8-jwt.jpg", level: 75, tag: 'Intermediate', tagColor: 'from-pink-500 to-rose-400', category: 'backend', invert: false },

    // Database & Auth
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-green-600 to-lime-500', category: 'db', invert: false },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 75, tag: 'Intermediate', tagColor: 'from-orange-500 to-yellow-500', category: 'db', invert: false },
    { name: "NextAuth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", level: 65, tag: 'Intermediate', tagColor: 'from-violet-500 to-purple-500', category: 'db', invert: true },

    // Tools
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85, tag: 'Advanced', tagColor: 'from-gray-400 to-slate-600', category: 'tools', invert: true },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 90, tag: 'Expert', tagColor: 'from-blue-500 to-cyan-400', category: 'tools', invert: false },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 72, tag: 'Intermediate', tagColor: 'from-orange-400 to-pink-500', category: 'tools', invert: false },
    { name: "Framer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", level: 65, tag: 'Intermediate', tagColor: 'from-violet-500 to-blue-400', category: 'tools', invert: true },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", level: 82, tag: 'Advanced', tagColor: 'from-gray-300 to-slate-400', category: 'tools', invert: true },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg", level: 80, tag: 'Advanced', tagColor: 'from-teal-400 to-cyan-500', category: 'tools', invert: false },
];

const tagRing = {
    'Expert': 'border-pink-500/60 text-pink-300',
    'Advanced': 'border-purple-500/60 text-purple-300',
    'Intermediate': 'border-cyan-500/60 text-cyan-300',
};

const SkillCard = ({ skill, visible }) => {
    return (
        <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10
                    hover:border-purple-500/50 transition-all duration-500 hover:scale-105
                    hover:shadow-[0_0_30px_#6b00ff30] flex flex-col items-center gap-3 cursor-default overflow-hidden">

            {/* Animated bg shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 rounded-2xl" />

            {/* Tag badge */}
            <span className={`absolute top-3 right-3 text-[9px] font-semibold px-2 py-0.5 rounded-full 
                        border ${tagRing[skill.tag]} bg-black/30`}>
                {skill.tag}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 md:w-14 md:h-14 mt-2 relative z-10">
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-lg
                     group-hover:scale-125 transition-transform duration-500"
                    style={{ filter: skill.invert ? 'invert(1)' : 'none' }}
                />
            </div>

            {/* Name */}
            <h3 className="text-white font-semibold text-sm md:text-base text-center relative z-10">
                {skill.name}
            </h3>

            {/* Progress bar */}
            <div className="w-full relative z-10">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span className="text-gray-500">Proficiency</span>
                    <span className={`font-semibold bg-gradient-to-r ${skill.tagColor} bg-clip-text text-transparent`}>
                        {skill.level}%
                    </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                        className={`h-full bg-gradient-to-r ${skill.tagColor} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: visible ? `${skill.level}%` : '0%' }}
                    />
                </div>
            </div>
        </div>
    );
};

const Skill = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visible, setVisible] = useState(true);

    const handleFilter = (filter) => {
        setVisible(false);
        setTimeout(() => {
            setActiveFilter(filter);
            setVisible(true);
        }, 220);
    };

    const filtered = activeFilter === 'all'
        ? skills
        : skills.filter(s => s.category === activeFilter);

    const avgLevel = Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length);

    const stats = [
        { label: 'Technologies', value: `${skills.length}+` },
        { label: 'Avg. Proficiency', value: `${avgLevel}%` },
        { label: 'Frontend', value: skills.filter(s => s.category === 'frontend').length },
        { label: 'Backend', value: skills.filter(s => s.category === 'backend').length },
        { label: 'Tools', value: skills.filter(s => s.category === 'tools').length },
    ];

    return (
        <section id="skills" className="py-20">
            <div className="w-10/12 mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">What I Work With</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>

                {/* Stats bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {stats.map((stat) => (
                        <div key={stat.label}
                            className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center
                         hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 min-w-[90px]">
                            <p className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {stat.value}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {skillCategories.map((cat) => {
                        const count = cat.filter === 'all'
                            ? skills.length
                            : skills.filter(s => s.category === cat.filter).length;
                        return (
                            <button
                                key={cat.filter}
                                onClick={() => handleFilter(cat.filter)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === cat.filter
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-700/30 scale-105'
                                        : 'border border-white/20 text-gray-400 hover:border-purple-500/50 hover:text-white'
                                    }`}
                            >
                                {cat.label}
                                <span className="ml-2 text-xs opacity-60">{count}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Skills grid */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
                    style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.22s ease' }}
                >
                    {filtered.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} visible={visible} />
                    ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {Object.entries(tagRing).map(([tag, cls]) => (
                        <div key={tag} className="flex items-center gap-2">
                            <span className={`text-xs px-3 py-1 rounded-full border bg-black/30 ${cls}`}>{tag}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skill;