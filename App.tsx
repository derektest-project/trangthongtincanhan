
import React from 'react';
import { ContactForm } from './components/ContactForm';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './components/icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-500/10 ring-1 ring-white/10 overflow-hidden">
        <div className="p-8 sm:p-12">
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://picsum.photos/128/128" 
              alt="Profile of Hồ Đức" 
              className="w-32 h-32 rounded-full ring-4 ring-cyan-500/50 shadow-lg"
            />
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-white">
              Hồ Đức
            </h1>
            <p className="mt-2 text-lg text-cyan-400 font-medium">
              Frontend React Engineer & UI/UX Enthusiast
            </p>
            <p className="mt-4 max-w-xl text-slate-400">
              Passionate about building beautiful, functional, and user-centric web applications. Specializing in React, TypeScript, and modern web technologies.
            </p>
          </div>

          <div className="mt-8 flex justify-center items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="GitHub Profile">
              <GithubIcon className="w-7 h-7" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="LinkedIn Profile">
              <LinkedinIcon className="w-7 h-7" />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300" aria-label="Twitter Profile">
              <TwitterIcon className="w-7 h-7" />
            </a>
          </div>

          <hr className="my-10 border-slate-700" />
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-slate-400 mb-8">Feel free to reach out. I'm always open to discussing new projects or creative ideas.</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default App;
