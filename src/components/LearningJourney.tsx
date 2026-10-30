import React, { useState } from 'react';
import { 
  Compass, 
  Terminal, 
  Binary, 
  Globe, 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Code2
} from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(3); // Default on current focus (Phase 4)

  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case '01':
        return <Terminal className="w-5 h-5 text-[#38BDF8]" />;
      case '02':
        return <Binary className="w-5 h-5 text-[#8B5CF6]" />;
      case '03':
        return <Globe className="w-5 h-5 text-[#60A5FA]" />;
      case '04':
        return <Sparkles className="w-5 h-5 text-[#C084FC]" />;
      case '05':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Compass className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="learning-journey" className="py-24 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38BDF8] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth Roadmap</span>
            <span className="text-white/20">/</span>
            <span>Iterative Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Always Learning, Always Building
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            From procedural loops in C to graph traversal engines and responsive full-stack applications. Here is how my technical foundation continues to expand.
          </p>
        </div>

        {/* Interactive Stepper Navigation (Desktop & Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {LEARNING_JOURNEY.map((item, index) => {
            const isSelected = activePhaseIndex === index;
            return (
              <button
                key={item.phase}
                onClick={() => setActivePhaseIndex(index)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'glass-panel-elevated border-[#38BDF8]/60 bg-[#152038]'
                    : 'glass-panel border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#38BDF8]' : 'text-[#64748B]'}`}>
                    PHASE {item.phase}
                  </span>
                  {item.status === 'Completed' ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  ) : item.status === 'In Progress' ? (
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                  )}
                </div>
                <div className="text-xs font-semibold text-white truncate">
                  {item.title}
                </div>
                <div className="text-[10px] text-[#94A3B8] font-mono mt-0.5 truncate">
                  {item.period}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Deep Dive Card */}
        {(() => {
          const activeItem = LEARNING_JOURNEY[activePhaseIndex];
          return (
            <div className="glass-panel-elevated p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getPhaseIcon(activeItem.phase)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
                        <span>Phase {activeItem.phase}</span>
                        <span className="text-white/20">·</span>
                        <span className="text-[#94A3B8]">{activeItem.period}</span>
                        <span className="text-white/20">·</span>
                        <span className={`font-semibold ${
                          activeItem.status === 'In Progress' ? 'text-[#38BDF8]' : 'text-emerald-400'
                        }`}>
                          {activeItem.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#DFE2F1] leading-relaxed">
                    {activeItem.summary}
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                      Key Milestones & Engineering Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {activeItem.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Technology Stack & Navigation Strip */}
                <div className="lg:col-span-5 bg-[#0B0F19]/90 p-6 rounded-xl border border-white/10 space-y-5">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2.5 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Associated Tooling & Concepts</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-[#38BDF8] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Academic Philosophy */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-xs font-semibold text-white mb-1">
                      Continuous Engineering Mindset
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      "I believe the best way to master computer science is to build tools that test theory against practice."
                    </p>
                  </div>

                  {/* Stepper Buttons */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setActivePhaseIndex(Math.max(0, activePhaseIndex - 1))}
                      disabled={activePhaseIndex === 0}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-[#DFE2F1] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                    >
                      ← Previous Phase
                    </button>
                    <button
                      onClick={() => setActivePhaseIndex(Math.min(LEARNING_JOURNEY.length - 1, activePhaseIndex + 1))}
                      disabled={activePhaseIndex === LEARNING_JOURNEY.length - 1}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#38BDF8]/30 transition-colors"
                    >
                      Next Phase →
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
