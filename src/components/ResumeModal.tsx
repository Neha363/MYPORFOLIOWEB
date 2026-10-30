import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Github, ExternalLink, GraduationCap, Code2, Layers, Cpu } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EDUCATION_DATA, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B0F19]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel-elevated border border-white/10 bg-[#0F172A] shadow-2xl overflow-hidden z-10 my-6 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#0A0E18] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Academic Profile Brief · Neha
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-[#DFE2F1] hover:text-[#38BDF8] transition-colors cursor-pointer"
              title="Print Profile / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B0F19]/95 text-[#DFE2F1]">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white font-display tracking-tight">
                Neha
              </h1>
              <p className="text-sm font-semibold text-[#38BDF8] mt-1">
                2nd-Year B.Tech Student in Artificial Intelligence and Machine Learning
              </p>
              <p className="text-xs text-[#94A3B8] mt-0.5">
                Aspiring Software Developer · Data Structures, Web Engineering & Applied AI
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 sm:text-right text-[#94A3B8]">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#38BDF8] hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#38BDF8] hover:underline">github.com/Neha363</a></div>
              <div>Location: {PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] border-b border-white/10 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-white">Bachelor of Technology (B.Tech)</h3>
                <p className="text-xs text-[#94A3B8]">Major: Artificial Intelligence and Machine Learning</p>
                <p className="text-xs text-[#64748B] mt-0.5">{EDUCATION_DATA.institutionNote}</p>
              </div>
              <div className="text-xs font-mono text-[#38BDF8] sm:text-right">
                2024 – 2028 (Expected) · Year 2
              </div>
            </div>
            <div className="text-xs text-[#94A3B8] pt-1">
              <strong className="text-white">Relevant Coursework:</strong> {EDUCATION_DATA.coursework.join(', ')}.
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] border-b border-white/10 pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white block">Languages:</span>
                <span className="text-[#94A3B8]">C, Python</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Core Computer Science:</span>
                <span className="text-[#94A3B8]">Data Structures & Algorithms, Object-Oriented Programming (OOP)</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Web Technologies:</span>
                <span className="text-[#94A3B8]">HTML5, CSS3, JavaScript (ES6+), React.js</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Databases & Cloud:</span>
                <span className="text-[#94A3B8]">MySQL, Supabase</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Tools & Environments:</span>
                <span className="text-[#94A3B8]">Git, GitHub, VS Code</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Creative & AI Tech:</span>
                <span className="text-[#94A3B8]">UI/UX Design, Google Stitch, Google AI Studio</span>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] border-b border-white/10 pb-1">
              Featured Software Projects
            </h2>

            {PROJECTS.map((project) => (
              <div key={project.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{project.title}</h3>
                    <span className="text-[10px] font-mono text-[#38BDF8] px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#38BDF8] hover:underline"
                  >
                    View Repository ↗
                  </a>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>
                <div className="text-[11px] font-mono text-[#64748B]">
                  Tech: {project.technologies.join(' · ')}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
