import React from 'react';
import { 
  Code, 
  BrainCircuit, 
  Globe, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38BDF8] mb-3">
            <span>Engineering Identity</span>
            <span className="text-white/20">/</span>
            <span>Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Curious Student. Disciplined Problem Solver.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Bridging foundational computer science logic with the modern possibilities of AI and web applications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Profile Photo & Academic Highlights Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer glowing frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-[#2563EB] opacity-40 group-hover:opacity-75 blur-lg transition duration-500" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/10 bg-[#0F172A]">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src="/src/assets/images/neha_developer_avatar_1793348179280.jpg"
                    alt="Neha - B.Tech AIML Student & Software Developer"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#0B0F19]', 'to-[#1E293B]');
                        parent.innerHTML = `<div class="text-center p-6"><div class="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div><div class="font-bold text-white text-lg">Neha</div><div class="text-xs text-[#38BDF8] font-mono mt-1">B.Tech AIML · 2nd Year</div></div>`;
                      }
                    }}
                  />
                  
                  {/* Subtle bottom scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent flex items-end p-5">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">Neha</h3>
                      <div className="flex items-center gap-2 text-xs text-[#38BDF8] font-mono mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>B.Tech AI & ML · 2nd Year</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Quick Info Strip */}
                <div className="p-4 bg-[#0B0F19]/90 border-t border-white/5 grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[#64748B] block font-mono text-[10px] uppercase">Specialization</span>
                    <span className="font-semibold text-white">AI & Machine Learning</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#64748B] block font-mono text-[10px] uppercase">Academic Status</span>
                    <span className="font-semibold text-[#38BDF8]">2nd Year Undergrad</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#64748B] block font-mono text-[10px] uppercase">Primary Stacks</span>
                    <span className="font-semibold text-[#DFE2F1]">Python, C, React, SQL</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#64748B] block font-mono text-[10px] uppercase">Target Opportunities</span>
                    <span className="font-semibold text-emerald-400">Software Internships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Personal Introduction Narrative & 3 Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Personal Introduction Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2.5 text-[#8B5CF6]">
                <Lightbulb className="w-5 h-5 text-[#38BDF8]" />
                <h3 className="text-lg font-bold text-white font-display">My Academic & Engineering Journey</h3>
              </div>
              
              <p className="text-sm sm:text-base text-[#DFE2F1] leading-relaxed">
                As a second-year <strong className="text-[#38BDF8] font-semibold">B.Tech Artificial Intelligence and Machine Learning</strong> student, I view technology as both a science of precision and a craft of creative design. My journey began with procedural logic and systems programming in C, which instilled in me an appreciation for memory constraints, algorithmic complexity, and structured execution.
              </p>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Moving into higher-level languages like <strong className="text-white font-medium">Python</strong> and modern front-end frameworks like <strong className="text-white font-medium">React.js</strong>, I found genuine joy in building end-to-end interactive systems. From creating a <strong className="text-[#38BDF8]">2D Graph Editor</strong> to visualize graph traversals, to architecting an <strong className="text-[#38BDF8]">IPL Ticket Booking</strong> system and deploying a responsive <strong className="text-[#38BDF8]">Gym Membership platform</strong>, each project has strengthened my real-world engineering muscle.
              </p>
            </div>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-[#38BDF8]/30 transition-colors space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8]">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Algorithmic Problem-Solving</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Rigorous focus on Data Structures & Algorithms, tree traversals, graphs, and OOP design patterns.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-[#8B5CF6]/30 transition-colors space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">Interactive Web Development</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Building responsive, user-friendly digital applications with React, modern CSS, and clean UI/UX hierarchy.
                </p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/5 hover:border-emerald-400/30 transition-colors space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white">AI & Emerging Tech</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Actively learning ML fundamentals and using developer tools like Google AI Studio for smart software workflows.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
