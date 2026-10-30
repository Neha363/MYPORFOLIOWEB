import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Eye, 
  Code2, 
  Sparkles,
  FolderGit2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Web', 'Algorithms & Systems', 'Academic'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38BDF8] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Repositories</span>
              <span className="text-white/20">/</span>
              <span>4 Real Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Featured Projects
            </h2>
            <p className="text-base text-[#94A3B8] max-w-xl mt-2">
              Authentic software developed during my B.Tech AIML studies, exploring graph structures, system logic, and interactive web frontends.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40 shadow-sm'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.7),0_0_24px_-2px_rgba(56,189,248,0.15)]"
            >
              <div>
                {/* Project Image Preview Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0E18]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide bg-[#0B0F19]/80 backdrop-blur-md text-[#38BDF8] border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="p-2 rounded-lg bg-[#0B0F19]/90 text-white hover:text-[#38BDF8] border border-white/15 transition-all shadow-md cursor-pointer"
                      title="Inspect Architecture"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors font-display">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges (Unboxed clean tags) */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-[#DFE2F1] bg-white/[0.04] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-mono text-[#64748B]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-6 py-4 sm:px-7 bg-[#0A0E18]/80 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Details & Specs</span>
                  <span>→</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0B0F19] bg-[#38BDF8] hover:bg-[#60A5FA] transition-all shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#38BDF8]/40 transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Organization / Profile Strip */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38BDF8]">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Explore All Commits & Repositories</h4>
              <p className="text-xs text-[#94A3B8]">Browse codebases, branches, and commits directly on GitHub.</p>
            </div>
          </div>
          <a
            href="https://github.com/Neha363"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#38BDF8]/40 transition-all shrink-0"
          >
            <span>Visit github.com/Neha363</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
