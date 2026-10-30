import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  Globe, 
  Database, 
  Wrench, 
  Sparkles, 
  Check, 
  Terminal, 
  Cpu, 
  Palette,
  FolderGit2,
  FileCode,
  Layout,
  Layers
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'Core Computer Science',
    'Web Development',
    'Database',
    'Developer Tools',
    'Creative Technologies'
  ];

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  // Helper to get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Terminal className="w-4 h-4 text-[#38BDF8]" />;
      case 'Core Computer Science':
        return <Binary className="w-4 h-4 text-[#8B5CF6]" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-[#60A5FA]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#34D399]" />;
      case 'Developer Tools':
        return <Wrench className="w-4 h-4 text-[#F59E0B]" />;
      case 'Creative Technologies':
        return <Sparkles className="w-4 h-4 text-[#C084FC]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#38BDF8]" />;
    }
  };

  // Helper to get tech badge icon
  const getTechIcon = (name: string) => {
    switch (name) {
      case 'C':
      case 'Python':
        return <Terminal className="w-5 h-5" />;
      case 'Data Structures & Algorithms':
      case 'Object-Oriented Programming':
        return <Cpu className="w-5 h-5" />;
      case 'HTML5':
      case 'CSS3':
      case 'JavaScript':
      case 'React.js':
        return <Layout className="w-5 h-5" />;
      case 'MySQL':
      case 'Supabase':
        return <Database className="w-5 h-5" />;
      case 'Git':
      case 'GitHub':
      case 'VS Code':
        return <FolderGit2 className="w-5 h-5" />;
      case 'UI/UX Design':
      case 'Google Stitch':
      case 'Google AI Studio':
      case 'AI-Powered Development':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0E18]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38BDF8] mb-3">
            <span>Technical Capabilities</span>
            <span className="text-white/20">/</span>
            <span>Toolbox & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Every tool in this toolkit represents practical application through B.Tech laboratory work, independent projects, and algorithmic practice.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 text-white border border-[#38BDF8]/50 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                  : 'bg-white/[0.03] text-[#94A3B8] hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              {selectedCategory === cat && (
                <span className="text-[10px] font-mono text-[#38BDF8] ml-1">
                  ({cat === 'All' ? SKILLS.length : SKILLS.filter(s => s.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel p-5 rounded-xl border border-white/10 hover:border-[#38BDF8]/40 hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Top Category Tag + Icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#DFE2F1] group-hover:text-[#38BDF8] transition-colors">
                    {getTechIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono text-[#94A3B8]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors font-display mb-1.5">
                  {skill.name}
                </h3>

                {/* Academic Context / Focus */}
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                  {skill.academicFocus}
                </p>
              </div>

              {/* Bottom Subtle Indicator: Real hands-on experience */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>Hands-on practice</span>
                </span>
                <span className="text-white/30">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Summary Overview Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#38BDF8]">
              <Terminal className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white font-display">Languages & Systems</h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Writing memory-conscious code in <span className="text-[#38BDF8]">C</span> and rapid algorithmic logic in <span className="text-[#38BDF8]">Python</span>. Emphasizing clean structure, recursion, and object-oriented architectures.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#8B5CF6]">
              <Globe className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white font-display">Full-Stack & Data</h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Crafting responsive web experiences with <span className="text-[#8B5CF6]">React.js</span>, modern JavaScript ES6+, and connecting relational data models via <span className="text-[#8B5CF6]">MySQL</span> and <span className="text-[#8B5CF6]">Supabase</span>.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#34D399]">
              <Sparkles className="w-5 h-5" />
              <h4 className="text-sm font-bold text-white font-display">Creative & AI Tooling</h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Leveraging next-gen developer platforms including <span className="text-emerald-400">Google AI Studio</span>, Stitch, and AI-accelerated workflows to prototype and test intelligent applications quickly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
