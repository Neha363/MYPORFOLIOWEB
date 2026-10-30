import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  Linkedin, 
  Terminal, 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Copy, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'algorithms' | 'terminal'>('profile');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'neha --init portfolio',
    '> B.Tech Artificial Intelligence & Machine Learning (Year 2)',
    '> Loading core stacks: Python, C, React, MySQL, Supabase...',
    '> Status: Available for Summer / Fall Internships'
  ]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTerminalCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = '';

    if (cleanCmd === 'help') {
      response = 'Available commands: about, skills, projects, github, contact, clear';
    } else if (cleanCmd === 'about') {
      response = 'Neha: 2nd-Year B.Tech AIML student passionate about software development and computational algorithms.';
    } else if (cleanCmd === 'skills') {
      response = 'Stack: C, Python, Data Structures, OOP, React.js, MySQL, Supabase, Git, VS Code.';
    } else if (cleanCmd === 'projects') {
      response = '4 Repos: 2D Graph Editor, IPL Ticket Booking, Gym Membership, Mini Project.';
    } else if (cleanCmd === 'github') {
      window.open(PERSONAL_INFO.github, '_blank');
      response = `Opening ${PERSONAL_INFO.github}...`;
    } else if (cleanCmd === 'contact') {
      response = `Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}`;
    } else if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      return;
    } else if (cleanCmd !== '') {
      response = `Command not recognized: "${cmd}". Type "help" for options.`;
    }

    if (cmd.trim() !== '') {
      setTerminalHistory(prev => [...prev, `$ ${cmd}`, response]);
      setTerminalInput('');
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-[#38BDF8]/5 via-[#8B5CF6]/5 to-[#2563EB]/5 blur-[100px] pointer-events-none" />
      
      {/* Subtle cyber background grid */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Top Status Kicker (unboxed clean metadata) */}
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase font-mono text-[#38BDF8] select-none">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]" />
              </span>
              <span>B.Tech AI & Machine Learning · 2nd Year</span>
              <span className="text-white/20">/</span>
              <span className="text-[#94A3B8]">Aspiring Software Developer</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#DFE2F1]">
                Hey, I'm <span className="text-white font-bold">Neha</span>.
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
                Building My Future Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-[#C084FC]">
                  Code & Creativity.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bioDescription}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0B0F19] bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#2563EB] shadow-[0_0_24px_rgba(56,189,248,0.4)] hover:shadow-[0_0_32px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F19]" />
              </button>

              <button
                onClick={onConnect}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#DFE2F1] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#38BDF8]/40 transition-all cursor-pointer whitespace-nowrap group"
              >
                <span>Let's Connect</span>
                <span className="text-[#38BDF8] group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>

            {/* Social Links & Verified Identity Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-[#94A3B8] border-t border-white/10">
              <span className="text-xs uppercase tracking-wider text-[#64748B] font-mono">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A]/80 hover:bg-[#1E293B] border border-white/10 hover:border-[#38BDF8]/40 text-[#DFE2F1] hover:text-white transition-all text-xs font-mono"
              >
                <Github className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>github.com/Neha363</span>
                <ExternalLink className="w-3 h-3 text-[#64748B]" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A]/80 hover:bg-[#1E293B] border border-white/10 hover:border-[#8B5CF6]/40 text-[#DFE2F1] hover:text-white transition-all text-xs font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-xs text-[#64748B] hover:text-[#38BDF8] transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Developer Cockpit / Code IDE */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl glass-panel-elevated overflow-hidden border border-white/10 shadow-2xl relative">
              
              {/* Window Title Bar */}
              <div className="bg-[#0A0E18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-[#94A3B8]">neha-workspace ~ python3</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-[#38BDF8]/20 text-[#38BDF8] font-medium'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    dev.py
                  </button>
                  <button
                    onClick={() => setActiveTab('algorithms')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'algorithms'
                        ? 'bg-[#8B5CF6]/20 text-[#C084FC] font-medium'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    stack.json
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-emerald-500/20 text-emerald-400 font-medium'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    cli
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-[#070B14]/90 min-h-[340px] flex flex-col justify-between">
                {activeTab === 'profile' && (
                  <div className="space-y-2 text-[#DFE2F1]">
                    <div className="text-[#64748B]"># Developer Architecture & Academic Identity</div>
                    <div>
                      <span className="text-[#8B5CF6]">class</span>{' '}
                      <span className="text-[#38BDF8]">Engineer</span>:
                    </div>
                    <div className="pl-4 space-y-1 text-[#94A3B8]">
                      <div>name = <span className="text-[#34D399]">"Neha"</span></div>
                      <div>degree = <span className="text-[#34D399]">"B.Tech AIML"</span></div>
                      <div>year = <span className="text-[#F59E0B]">2</span></div>
                      <div>role = <span className="text-[#34D399]">"Aspiring Software Developer"</span></div>
                      <div>status = <span className="text-[#34D399]">"Open to Internships"</span></div>
                      <div>github = <span className="text-[#38BDF8]">"github.com/Neha363"</span></div>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#8B5CF6]">def</span>{' '}
                      <span className="text-[#38BDF8]">current_focus</span>(self):
                    </div>
                    <div className="pl-4 text-[#94A3B8] space-y-0.5">
                      <div>return [</div>
                      <div className="pl-4 text-[#38BDF8]">"Data Structures & Algorithms in Python & C",</div>
                      <div className="pl-4 text-[#38BDF8]">"Modern Full-Stack Applications with React",</div>
                      <div className="pl-4 text-[#38BDF8]">"Applied AI & Google AI Studio Workflows"</div>
                      <div>]</div>
                    </div>
                  </div>
                )}

                {activeTab === 'algorithms' && (
                  <div className="space-y-1.5 text-xs text-[#DFE2F1]">
                    <div className="text-[#64748B]">// Verified Academic & Project Tooling</div>
                    <div>&#123;</div>
                    <div className="pl-4 text-[#94A3B8]">
                      <span className="text-[#38BDF8]">"programming"</span>: [<span className="text-[#34D399]">"C"</span>, <span className="text-[#34D399]">"Python"</span>],
                    </div>
                    <div className="pl-4 text-[#94A3B8]">
                      <span className="text-[#38BDF8]">"core_cs"</span>: [<span className="text-[#34D399]">"DSA"</span>, <span className="text-[#34D399]">"OOP"</span>],
                    </div>
                    <div className="pl-4 text-[#94A3B8]">
                      <span className="text-[#38BDF8]">"web"</span>: [<span className="text-[#34D399]">"HTML"</span>, <span className="text-[#34D399]">"CSS"</span>, <span className="text-[#34D399]">"JavaScript"</span>, <span className="text-[#34D399]">"React.js"</span>],
                    </div>
                    <div className="pl-4 text-[#94A3B8]">
                      <span className="text-[#38BDF8]">"database"</span>: [<span className="text-[#34D399]">"MySQL"</span>, <span className="text-[#34D399]">"Supabase"</span>],
                    </div>
                    <div className="pl-4 text-[#94A3B8]">
                      <span className="text-[#38BDF8]">"tools"</span>: [<span className="text-[#34D399]">"Git"</span>, <span className="text-[#34D399]">"GitHub"</span>, <span className="text-[#34D399]">"VS Code"</span>],
                    </div>
                    <div className="pl-4 text-[#94A3B8]">
                      <span className="text-[#38BDF8]">"creative_tech"</span>: [<span className="text-[#34D399]">"UI/UX Design"</span>, <span className="text-[#34D399]">"Google Stitch"</span>, <span className="text-[#34D399]">"Google AI Studio"</span>]
                    </div>
                    <div>&#125;</div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 flex flex-col justify-between h-full">
                    <div className="space-y-1.5 overflow-y-auto max-h-56 pr-1">
                      {terminalHistory.map((line, idx) => (
                        <div key={idx} className={line.startsWith('$') ? 'text-[#38BDF8]' : 'text-[#94A3B8]'}>
                          {line}
                        </div>
                      ))}
                    </div>

                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleTerminalCommand(terminalInput);
                      }}
                      className="flex items-center gap-2 pt-2 border-t border-white/10"
                    >
                      <span className="text-[#34D399]">$</span>
                      <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        placeholder="type 'help', 'skills', 'projects'..."
                        className="bg-transparent text-[#DFE2F1] focus:outline-none flex-1 text-xs font-mono placeholder:text-[#64748B]"
                      />
                    </form>
                  </div>
                )}

                {/* Footer Telemetry strip */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#64748B]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span>Python 3.11 · UTF-8</span>
                  </div>
                  <div className="font-mono text-[#38BDF8]">
                    GitHub: Neha363
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
