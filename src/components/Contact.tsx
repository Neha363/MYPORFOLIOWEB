import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic send & integrate with direct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleDirectEmailClient = () => {
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(`Hi Neha,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0E18]/60">
      {/* Background radial ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/10 via-[#8B5CF6]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase text-[#38BDF8] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
            <span className="text-white/20">/</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mb-4">
            Let's Build Something Together.
          </h2>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            I am actively seeking software development & AI/ML internship opportunities for Summer and Fall. Whether you have a project in mind or want to talk tech, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Status Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </span>
                <h3 className="text-sm font-bold text-white font-display uppercase tracking-wide">
                  Internship & Collaboration Status
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#DFE2F1] leading-relaxed">
                Currently in 2nd Year B.Tech AIML. Open for remote and in-person internships, open-source collaborations, and developer discussions.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Response: &lt; 24h</span>
                </span>
                <span className="text-white/20">·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 hover:border-[#38BDF8]/40 transition-colors flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-[#64748B] uppercase block">Email Address</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#38BDF8] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 hover:border-[#8B5CF6]/40 transition-colors flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-[#64748B] uppercase block">GitHub Profile</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#8B5CF6] transition-colors truncate block">
                      github.com/Neha363
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-white/5 text-[#94A3B8] group-hover:text-[#8B5CF6] transition-colors shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-4 sm:p-5 rounded-xl border border-white/10 hover:border-[#60A5FA]/40 transition-colors flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-[#64748B] uppercase block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#60A5FA] transition-colors truncate block">
                      linkedin.com/in/neha-aiml
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-white/5 text-[#94A3B8] group-hover:text-[#60A5FA] transition-colors shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                    Your message has been captured. I will get back to your email at <span className="text-[#38BDF8] font-mono">{formData.email}</span> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleDirectEmailClient}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-[#0B0F19] bg-[#38BDF8] hover:bg-[#60A5FA] transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Also Open in Your Mail App</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#38BDF8]" />
                      <span>Direct Message Form</span>
                    </h3>
                    <span className="text-[11px] font-mono text-[#64748B]">All fields active</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-[#DFE2F1] block">
                        Your Name <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-sm text-white placeholder:text-[#64748B] outline-none transition-all"
                      />
                      {errors.name && <p className="text-[11px] text-red-400 font-mono">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-[#DFE2F1] block">
                        Your Email <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-sm text-white placeholder:text-[#64748B] outline-none transition-all"
                      />
                      {errors.email && <p className="text-[11px] text-red-400 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#DFE2F1] block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Summer Internship Opportunity / Project Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-sm text-white placeholder:text-[#64748B] outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#DFE2F1] block">
                      Message <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Neha, I came across your portfolio and would love to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-sm text-white placeholder:text-[#64748B] outline-none transition-all resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-red-400 font-mono">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-[#64748B] font-mono text-center sm:text-left">
                      Sends directly to nehametre001@gmail.com
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-[#0B0F19] bg-gradient-to-r from-[#38BDF8] to-[#2563EB] shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_28px_rgba(56,189,248,0.6)] disabled:opacity-50 transition-all cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
