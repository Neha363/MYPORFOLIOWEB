import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Building2,
  BookmarkCheck,
  BrainCircuit
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const semesters = [
    {
      term: 'Semester 1 (Year 1)',
      period: 'Fall 2024',
      status: 'Completed',
      courses: ['Problem Solving using C', 'Computational Thinking', 'Calculus & Linear Algebra', 'Basic Electronics Lab'],
      summary: 'Built foundation in algorithmic programming, procedural logic, and mathematical reasoning.'
    },
    {
      term: 'Semester 2 (Year 1)',
      period: 'Spring 2025',
      status: 'Completed',
      courses: ['Object-Oriented Programming (Python)', 'Data Structures Foundations', 'Discrete Mathematics', 'Digital Logic Design'],
      summary: 'Implemented classical structures (linked lists, stacks, queues) and explored OOP paradigms.'
    },
    {
      term: 'Semester 3 (Year 2)',
      period: 'Fall 2025',
      status: 'Completed',
      courses: ['Advanced Data Structures & Algorithms', 'Database Management Systems (MySQL)', 'Web Technologies (HTML/CSS/JS/React)', 'Computer Architecture'],
      summary: 'Developed 2D Graph Editor and Gym Membership project while mastering relational database design.'
    },
    {
      term: 'Semester 4 (Year 2)',
      period: 'Current Semester',
      status: 'In Progress',
      courses: ['Artificial Intelligence Fundamentals', 'Probability & Statistics for AI', 'Operating Systems', 'Cloud & Emerging Technologies'],
      summary: 'Focusing on heuristic search, AI Studio workflows, system concurrency, and preparing for engineering internships.'
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0A0E18]/70">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38BDF8] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
            <span className="text-white/20">/</span>
            <span>University Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Education & Coursework
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Rigorous undergraduate training blending core computer science foundations with specialized Artificial Intelligence and Machine Learning curriculum.
          </p>
        </div>

        {/* Degree Showcase Card */}
        <div className="glass-panel-elevated p-8 rounded-2xl border border-white/10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BrainCircuit className="w-48 h-48 text-[#38BDF8]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Currently Pursuing · 2nd Year Undergrad</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {EDUCATION_DATA.degree}
                </h3>
                <div className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] mt-1">
                  Major: {EDUCATION_DATA.field}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8] pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>2024 – 2028 (Expected)</span>
                </span>
                <span className="text-white/20">·</span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>{EDUCATION_DATA.institutionNote}</span>
                </span>
              </div>

              {/* Highlights */}
              <div className="pt-2 space-y-2">
                {EDUCATION_DATA.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DFE2F1]">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Coursework Matrix */}
            <div className="lg:col-span-4 bg-[#0B0F19]/90 p-6 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8]">
                <BookOpen className="w-4 h-4" />
                <span>Core Coursework</span>
              </div>
              
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/[0.04] text-[#DFE2F1] border border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Semester Progression Timeline */}
        <div>
          <h3 className="text-xl font-bold text-white font-display mb-8 text-center sm:text-left flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#38BDF8]" />
            <span>Academic Progression Timeline</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semesters.map((sem, index) => {
              const isCurrent = sem.status === 'In Progress';
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl glass-panel border transition-all duration-200 flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#38BDF8]/50 shadow-[0_0_24px_rgba(56,189,248,0.15)] bg-[#131E35]/80'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#64748B]">{sem.period}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? 'bg-[#38BDF8]/20 text-[#38BDF8] font-bold'
                          : 'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {sem.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white font-display">
                      {sem.term}
                    </h4>

                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {sem.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] block">
                      Subjects:
                    </span>
                    <ul className="text-xs text-[#DFE2F1] space-y-1">
                      {sem.courses.map((c, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <span className="w-1 h-1 rounded-full bg-[#38BDF8]" />
                          <span className="truncate">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
