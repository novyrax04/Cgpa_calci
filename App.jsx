import React, { useState } from 'react';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import CertificateGenerator from './components/CertificateGenerator';
import Background from './components/Background';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [cgpa, setCgpa] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-100 overflow-x-hidden selection:bg-cyan-500/30">
      <Background />
      
      <main className="relative z-10 flex flex-col items-center justify-start w-full px-4 sm:px-6 lg:px-8">
        <Hero />
        
        <div id="calculator-section" className="w-full max-w-4xl mx-auto py-20">
          <Calculator onCgpaCalculate={setCgpa} cgpaResult={cgpa} />
          
          <AnimatePresence>
            {cgpa !== null && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowCertificate(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg text-white shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    Generate Academic Certificate
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {showCertificate && (
          <CertificateGenerator 
            cgpa={cgpa} 
            onClose={() => setShowCertificate(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
