import React from "react";
import { 
  FaUsers, 
  FaHandsHelping, 
  FaAward, 
  FaCalendarAlt 
} from "react-icons/fa";

const Activities = () => {
  const activities = [
    {
      title: "Scouting",
      organization: "Bangladesh Scouts",
      role: "Member",
      period: "2017 - 2023",
      icon: <img src="https://i.ibb.co.com/zHNVqBh8/Bangladesh-Scouts-Logo.jpg" className="text-3xl rounded-full" />,
      color: "from-blue-500 to-cyan-500",
      description: "Developed leadership skills, teamwork, and discipline through various scouting activities, camps, and community service programs.",
      highlights: [
        "Participated in National Scout Jamboree, Comdeca",
        "Achieved President Scouts Award",
        "Organized community cleaning and awareness programs"
      ]
    },
    {
      title: "Red Crescent",
      organization: "Bangladesh Red Crescent Society",
      role: "Volunteer",
      period: "2017 - 2020",
      icon: <img src="https://i.ibb.co.com/60vsDZsH/Bangladesh-Red-Crescent-Society-Logo.jpg" className="text-3xl rounded-full" />,
      color: "from-red-500 to-rose-500",
      description: "Actively involved in humanitarian activities, disaster response training, and blood donation campaigns.",
      highlights: [
        "Participated in relief distribution during floods",
        "Completed First Aid and Disaster Management Training",
        "Organized Blood donation camps in High School"
      ]
    }
  ];

  return (
    <div id="activities" className=" py-20 relative overflow-hidden">
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
      {/* Background glows */}
      <div className="absolute top-10 -left-40 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl" />

      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">Beyond Academics</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Co-Curricular Activities</h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          Leadership, service, and personal growth through extracurricular involvement
        </p>
      </div>

      <div className="grid w-10/12 md:grid-cols-2 gap-8 mx-auto">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 
                       hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
          >
            <div className={`w-16 h-16 rounded-full bg-linear-to-br ${activity.color} 
                            flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110`}>
              {activity.icon}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-1">{activity.title}</h3>
            <p className="text-purple-400 font-medium">{activity.organization}</p>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
              <FaCalendarAlt />
              <span>{activity.period}</span>
              <span className="mx-2">•</span>
              <span className="text-emerald-400 font-medium">{activity.role}</span>
            </div>

            <p className="mt-6 text-gray-300 leading-relaxed">
              {activity.description}
            </p>

            {/* Highlights */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Key Highlights</p>
              <ul className="space-y-2">
                {activity.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-400 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="text-center w-10/12 mx-auto mt-12">
        <p className="text-gray-500 text-sm italic">
          These experiences have strengthened my teamwork, leadership, and commitment to community service.
        </p>
      </div>
    </div>
  );
};

export default Activities;