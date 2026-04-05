


import React, { useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router';

const navLinks = [
  { label: 'Home',       href: '#'         },
  { label: 'About',      href: '#about'    },
  { label: 'Skills',     href: '#skills'   },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education'},
  { label: 'Activities', href: '#activities'},
  { label: 'Contact',    href: '#contact'  },
];

const Header = () => {
  const [scrolled,     setScrolled]     = useState(false);
  const [activeLink,   setActiveLink]   = useState('#');
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-[#0d001f]/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(107,0,255,0.2)] border-b border-purple-900/40'
          : 'bg-transparent'}`}>

        <div className="w-11/12 mx-auto flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link to="/" onClick={() => setActiveLink('#')}
            className="text-xl md:text-2xl font-bold tracking-tight select-none">
            <span className="text-purple-400">&lt;</span>
            <span className="text-white">Shourov</span>
            <span className="text-pink-400">/&gt;</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                
                <a  href={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group
                    ${activeLink === link.href
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'}`}
                >
                  {/* Active / hover pill */}
                  <span className={`absolute inset-0 rounded-full transition-all duration-300
                    ${activeLink === link.href
                      ? 'bg-linear-to-r from-purple-600/40 to-pink-600/30 border border-purple-500/40'
                      : 'bg-white/0 group-hover:bg-white/5 border border-transparent group-hover:border-white/10'}`}
                  />
                  <span className="relative z-10">{link.label}</span>

                  {/* Active dot */}
                  {activeLink === link.href && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full
                                     bg-linear-to-r from-purple-400 to-pink-400" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            
            <a  href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view"
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold rounded-xl
                         bg-linear-to-r from-purple-500 to-pink-500 text-white
                         hover:opacity-90 hover:scale-105 transition-all duration-300
                         shadow-lg shadow-purple-700/30"
            >
              Resume 
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5
                       rounded-lg border border-white/10 bg-white/5 hover:bg-white/10
                       transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300
              ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0d001f]/95 backdrop-blur-xl
                      border-l border-purple-900/40 shadow-2xl transition-transform duration-300
                      flex flex-col pt-20 px-6 pb-8
                      ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile logo */}
          <div className="absolute top-4 left-6 text-lg font-bold">
            <span className="text-purple-400">&lt;</span>
            <span className="text-white">Shourov</span>
            <span className="text-pink-400">/&gt;</span>
          </div>

          {/* Close button */}
          <button onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                       rounded-full bg-white/10 border border-white/15 text-white
                       hover:bg-white/20 transition-all text-sm">
            ✕
          </button>

          {/* Mobile links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={link.href}
                style={{ animationDelay: `${i * 60}ms` }}>
                
                <a  href={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                              transition-all duration-300
                              ${activeLink === link.href
                                ? 'bg-linear-to-r from-purple-600/30 to-pink-600/20 text-white border border-purple-500/30'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0
                    ${activeLink === link.href
                      ? 'bg-linear-to-r from-purple-400 to-pink-400'
                      : 'bg-gray-600'}`}
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile resume */}
          <div className="mt-auto">
            
            <a  href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view"
              target="_blank" rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full py-3 text-center text-sm font-semibold rounded-xl
                         bg-linear-to-r from-purple-500 to-pink-500 text-white
                         hover:opacity-90 transition-all shadow-lg shadow-purple-700/30"
            >
              Resume <CgProfile className="group-hover:rotate-12 transition-transform" />
            </a>
            <p className="text-center text-gray-600 text-xs mt-4">
              © 2026 Shourov. Built with React ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't hide under fixed nav */}
      <div className="h-16 md:h-18" />
    </>
  );
};

export default Header;