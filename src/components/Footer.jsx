import React from 'react';
import { 
  FaGithub, FaLinkedin, FaFacebook, 
  FaEnvelope, FaArrowUp, FaHeart 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FaGithub size={22} />, href: "https://github.com/st-shourov12", label: "GitHub" },
    { icon: <FaLinkedin size={22} />, href: "https://www.linkedin.com/in/miraz-shourov/", label: "LinkedIn" },
    { icon: <FaFacebook size={22} />, href: "https://www.facebook.com/mirazulislam.shourov", label: "Facebook" },
    { icon: <FaEnvelope size={22} />, href: "mailto:shourovsc38@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: "Home", id: "" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skill" },   // adjust id if your Skill component has different id
    { name: "Projects", id: "projects" },
    { name: 'Education',  id: 'education'},
    { name: 'Activities', id: 'activities'},
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-black/80 border-t border-purple-500/30 pt-16 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" />

      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Mirazul Islam Shourov</h3>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Frontend Developer crafting beautiful digital experiences with React, Tailwind & modern web technologies.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to opportunities • Available for freelance
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="md:text-center">
            <h4 className="text-white font-semibold mb-5 tracking-widest text-sm uppercase">Quick Navigation</h4>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social + Contact */}
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-5 tracking-widest text-sm uppercase">Connect With Me</h4>
            
            <div className="flex md:justify-end gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 
                             hover:border-purple-400 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <span className="text-gray-400 group-hover:text-purple-400 transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 mx-auto md:ml-auto text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                Back to Top
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400 transition-colors">
                  <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} Shourov. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-1.5">
            Made with 
            <FaHeart className="text-pink-500 animate-pulse" /> 
            using React 
          </div>

          <div className="text-right">
            Designed &amp; Built by Mirazul Islam Shourov
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;