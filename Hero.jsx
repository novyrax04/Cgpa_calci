import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Hero = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 w-full overflow-hidden">
      
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 text-cyan-400/30">
          <GraduationCap size={64} />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/3 right-1/4 text-purple-400/30">
          <Award size={56} />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-1/4 left-1/3 text-blue-400/30">
          <BookOpen size={48} />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-1/3 right-1/3 text-yellow-400/30">
          <Star size={40} />
        </motion.div>
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 px-4">
        
        {/* Floating Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
          transition={{ 
            scale: { type: "spring", stiffness: 200, damping: 15 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(56,189,248,0.5)] mb-4 flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center relative">
            {/* The user requested to set their profile picture as the logo. We'll load logo.png from public folder. */}
            <img 
              src="/logo.png" 
              alt="NOVYRAX Logo" 
              className="w-full h-full object-cover" 
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = 'https://ui-avatars.com/api/?name=NOVYRAX&background=020617&color=38bdf8&size=512&bold=true'; 
              }} 
            />
            <div className="hidden text-xs font-bold text-slate-400 absolute">LOGO</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card px-6 py-2 rounded-full mb-4 border border-white/10"
        >
          <span className="text-sm md:text-base font-semibold tracking-widest uppercase neon-text">CGPA Pro • Smart Academic Calculator</span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
        >
          Calculate Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            CGPA Instantly
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mt-4"
        >
          Fast • Accurate • Professional <br/> Academic Certificate Generator
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          onClick={scrollToCalculator}
          className="mt-8 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow duration-300 flex items-center gap-2"
        >
          Start Calculating
          <svg className="w-5 h-5 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
