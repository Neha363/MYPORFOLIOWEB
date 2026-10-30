import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Check, Layers, Code2, Cpu } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B0F19]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl glass-panel-elevated border border-white/10 bg-[#0F172A] shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image Preview */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0F19]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white hover:text-[#38BDF8] border border-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Scrim */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">Project Overview</h4>
            <p className="text-sm sm:text-base text-[#DFE2F1] leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Architectural Logic & Implementation</span>
            </h4>
            <ul className="space-y-2">
              {project.architecturePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                  <Check className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Demonstrated Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, index) => (
                <div key={index} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-[#DFE2F1] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#0B0F19] text-[#38BDF8] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 bg-[#0B0F19] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#64748B] font-mono">
            Repository: Neha363/{project.id}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#0B0F19] bg-[#38BDF8] hover:bg-[#60A5FA] transition-colors shadow-[0_0_12px_rgba(56,189,248,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#38BDF8]/40 transition-colors"
            >
              <Github className="w-4 h-4 text-[#38BDF8]" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
