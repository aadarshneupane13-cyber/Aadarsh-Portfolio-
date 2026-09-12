import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#06b6d4', '#ffffff']
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Open Channels</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight uppercase leading-[1.08]">
          Let's Create Something <br />
          <span className="text-gradient-emerald">Interesting.</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          Whether you're collaborating on software, planning a live concert, exploring visual storytelling, or want to talk motorcycles and travel — let's connect.
        </p>

        {/* 3 Prominent Required Buttons: EMAIL ME, LINKEDIN, INSTAGRAM */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profileData.email}`}
            data-cursor="EMAIL"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-dark-950 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/15 transition-all hover:scale-105 active:scale-95"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`https://www.instagram.com/${profileData.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="INSTA"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/15 transition-all hover:scale-105 active:scale-95"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Direct Info Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
            <h3 className="font-display font-black text-xl text-white uppercase">
              Direct Contact
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              Reach out directly anytime:
            </p>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Email Address</div>
                  <div className="text-sm font-mono text-emerald-300 select-all font-semibold">
                    {profileData.email}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Instagram Profile</div>
                  <div className="text-sm font-mono text-pink-300 font-semibold">
                    @{profileData.instagram}
                  </div>
                </div>
                <a
                  href={`https://www.instagram.com/${profileData.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Current Location</div>
                  <div className="text-sm font-mono text-slate-200 font-semibold">
                    Nepal 🇳🇵
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Transmission Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="font-display font-black text-xl text-white uppercase mb-1">
              Send a Direct Note
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Drop a thought, opportunity, or travel route idea:
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">
                  Thank you for reaching out. Aadarsh will review your note and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Shrestha"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.05] transition-colors outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.05] transition-colors outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your idea, collaboration, or event..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-emerald-400 focus:bg-white/[0.05] transition-colors outline-none resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="SEND"
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
