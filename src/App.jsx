import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';

import MyProjects from './components/myProjects/MyProjects';
import Skill from './Skill/Skill';
import About from "./components/about/About";


const App = () => {
  return (
    <div className='w-full mx-auto min-h-screen bg-linear-to-tl from-purple-900 via-black to-pink-900 
  overflow-hidden'>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <MyProjects></MyProjects>

      <Contact></Contact>

      <div className=' border border-purple-900 w-full h-full mt-10'></div>

      <footer className="py-5 text-center text-white/60">
        © 2026 Shourov. Made with React & ❤️
      </footer>
      
    </div>
  );
};

export default App;
