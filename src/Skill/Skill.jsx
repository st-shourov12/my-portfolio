import React from 'react';

const Skill = () => {
    return (
        <div>
            {/* ==================== SKILLS SECTION ==================== */}
            <section className="py-20">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
                    Skills & Technologies
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {[
                        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
                        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 92 },
                        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 90 },
                        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 93 },
                        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 85 },
                        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 88 },
                        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 82 },
                        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85 },
                        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
                        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 78 },
                    ].map((skill) => (
                        <div
                        key={skill.name}
                        className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 
                                    hover:border-white/40 transition-all duration-500 hover:scale-110 hover:shadow-2xl
                                    flex flex-col items-center gap-4"
                        >
                        {/* Icon */}
                        <div className="w-16 h-16 md:w-20 md:h-20">
                            <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain drop-shadow-lg 
                                        group-hover:scale-125 transition-transform duration-500"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-white font-semibold text-lg">{skill.name}</h3>

                        {/* Progress Bar */}
                        {/* <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div
                            className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full 
                                        transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                            />
                        </div> */}

                        {/* Percentage (appears on hover) */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            {skill.level}%
                        </span>

                        {/* Glow */}
                        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Skill;