import React from 'react';
import { Compass, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AboutStory: React.FC = () => {
  const explorationPillars = [
    {
      title: "Building What's New",
      desc: "Creating systems, code architectures, and digital experiences that did not exist yesterday."
    },
    {
      title: "Highways & High Passes",
      desc: "Navigating Himalayan switchbacks and gravel trails on two wheels."
    },
    {
      title: "Real-World Events",
      desc: "Translating digital marketing and logistical coordination into live stadium concerts."
    },
    {
      title: "Visual Framing",
      desc: "Telling stories through cinematic lens perspectives, pacing, and color."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Editorial Manifesto */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Chapter 01 — Identity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.1] uppercase">
            More than an <br />
            <span className="text-gradient-emerald">IT Engineer.</span>
          </h2>

          <div className="mt-8 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-slate-100 font-medium sm:text-xl">
              I'm Aadarsh Neupane, a BE IT engineer from Nepal and someone who has never been very good at staying curious about just one thing.
            </p>

            <p>
              I enjoy exploring technology and AI, but I also love the world outside the screen — travelling, riding motorcycles, filmmaking, gaming, music, organizing events and experiencing new places.
            </p>

            <blockquote className="my-6 pl-5 border-l-2 border-emerald-400 font-display italic text-white text-lg sm:text-xl py-1 bg-white/[0.01] rounded-r-2xl">
              “For me, exploration isn't only about travelling somewhere new. It is also about learning something I didn't know yesterday, building something I haven't built before, meeting people, experimenting and finding out where the next idea can take me.”
            </blockquote>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#world"
              data-cursor="EXPLORE"
              className="inline-flex items-center gap-2 text-sm font-mono text-emerald-400 hover:text-emerald-300 font-bold tracking-wider transition-colors"
            >
              <span>Explore what makes me, me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#journey"
              data-cursor="TIMELINE"
              className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white font-medium tracking-wider transition-colors"
            >
              <span>Education Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Philosophy Pillars Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none rounded-bl-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">The Explorer Perspective</h3>
                <span className="font-mono text-xs text-slate-400">Nepal 🇳🇵 · Living Authentically</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {explorationPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                    <span className="font-display font-semibold text-sm text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Mindset:</span>
              <span className="text-emerald-400 font-semibold">Continuous Discovery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
