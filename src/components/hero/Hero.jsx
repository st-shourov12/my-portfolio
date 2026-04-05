
import React from "react";
import { CgProfile } from "react-icons/cg";
import { SiReact, SiHtml5, SiNodedotjs } from "react-icons/si";
import Profile from '../../assets/WhatsApp Image 2025-11-19 at 13.48.16_07a5eca2.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="text-white relative w-full min-h-screen flex items-center overflow-hidden ">

      {/* Subtle floating particles */}
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

      <div className="w-10/12 mx-auto pt-10 pb-16 md:pt-10 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-8">

          {/* Left - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-up-1 text-purple-400 text-sm md:text-base tracking-[3px] uppercase mb-3 font-medium">
              Hello, World 👋
            </p>

            <h1 className="text-4xl animate-fade-up-2 md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="text-white">Mirazul Islam Shourov</span>
            </h1>

            <h2 className="mt-4 animate-fade-up-3 text-2xl md:text-3xl lg:text-4xl ">
              <span className="typewriter-text bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-base md:text-lg max-w-md mx-auto lg:mx-0">
              Crafting modern, responsive, and user-friendly web experiences with passion and precision.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1HplM9pJo5DJJ114K6I2cZpqp0vuDM0v6/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 
                           flex items-center gap-3 text-lg font-medium shadow-xl shadow-purple-500/30 
                           hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95"
              >
                 Resume
                <CgProfile className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image + Floating Icons */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">

              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 rounded-full bg-pink-500/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />

              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-purple-400/80 shadow-2xl shadow-purple-500/50 relative z-10">
                <img
                  src={Profile}
                  alt="Mirazul Islam Shourov"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons - Hidden or smaller on very small screens */}
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-10 bg-zinc-900/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-purple-500/30 shadow-xl hidden sm:block">
                <SiNodedotjs className="text-green-400 text-3xl md:text-4xl" />
              </div>

              <div className="absolute -top-8 right-6 md:-top-10 md:right-8 bg-zinc-900/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-orange-400/30 shadow-xl hidden sm:block">
                <SiHtml5 className="text-orange-400 text-3xl md:text-4xl" />
              </div>

              <div className="absolute bottom-8 -right-4 md:bottom-10 md:-right-6 bg-zinc-900/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-blue-400/30 shadow-xl hidden sm:block">
                <SiReact className="text-blue-400 text-3xl md:text-4xl animate-spin" style={{ animationDuration: '12s' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;