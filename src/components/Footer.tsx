import React from 'react';
import { Terminal, Github, Mail, Linkedin, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Journey', href: '#learning-journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070A12] border-t border-white/10 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-start">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#38BDF8] to-[#8B5CF6] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                NEHA<span className="text-[#38BDF8]">.DEV</span>
              </span>
            </div>

            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
              Aspiring Software Developer & 2nd-Year B.Tech Artificial Intelligence and Machine Learning student. Building scalable software with algorithmic discipline.
            </p>

            <div className="text-[11px] font-mono text-[#64748B]">
              Open for Summer / Fall Internships & Opportunities
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#38BDF8]/40 flex items-center justify-center text-[#DFE2F1] hover:text-[#38BDF8] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#8B5CF6]/40 flex items-center justify-center text-[#DFE2F1] hover:text-[#8B5CF6] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#60A5FA]/40 flex items-center justify-center text-[#DFE2F1] hover:text-[#60A5FA] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#38BDF8]/40 flex items-center justify-center text-[#DFE2F1] hover:text-[#38BDF8] transition-colors ml-auto cursor-pointer"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="font-mono">
            © {new Date().getFullYear()} Neha. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with code, logic & precision for software engineering excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
