import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import About from './components/about/about';
import MyProjects from './components/myProjects/MyProjects';
import Skill from './Skill/Skill';

const App = () => {
  return (
    <div className='w-full mx-auto min-h-screen bg-linear-to-br from-purple-900 via-black to-pink-900 
  overflow-hidden'>

      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <MyProjects></MyProjects>

      <Contact></Contact>

      <footer className="py-10 text-center text-white/60">
        © 2025 Shourov. Made with React & ❤️
      </footer>
      
    </div>
  );
};

export default App;
