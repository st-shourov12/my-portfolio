import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';

import MyProjects from './components/myProjects/MyProjects';
import Skill from './Skill/Skill';
import About from "./components/about/About";
import Footer from './components/Footer';
import Education from './components/education/Education';
import Activities from './components/activities/Activities';


const App = () => {
  return (
    <div className='w-full relative mx-auto min-h-screen bg-linear-to-tl from-purple-900 via-black to-pink-900 
  overflow-hidden'>

     <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              right: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animation: `particle-rise ${Math.random() * 12 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <MyProjects></MyProjects>
      <Education></Education>
      <Activities></Activities>
      <Contact></Contact>

      <div className=' border border-purple-900 w-full h-full mt-10'></div>

      {/* <footer className="py-5 text-center text-white/60">
        © 2026 Shourov. Made with React & ❤️
      </footer> */}

      <Footer></Footer>
      
    </div>
  );
};

export default App;
