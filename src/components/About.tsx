import React from 'react';
import { 
  User, 
  Sparkles, 
  Quote, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  BrainCircuit, 
  Compass, 
  ExternalLink,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="about py-24 px-4 sm:px-6 relative border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#080b11] overflow-hidden transition-colors duration-300"
    >
      {/* Scroll-revealed radiant light seam at section entry */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-zinc-400/40 dark:via-zinc-600/40 to-transparent pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-300 dark:border-white/10 mb-4 text-zinc-900 dark:text-white shadow-sm">
            <User className="w-8 h-8" />
          </div>
          <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            ABOUT AADARSH
          </h2>
          <p className="poppins-regular text-zinc-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A journey of technology, business, exploration, and continuous learning.
          </p>
        </motion.div>

        {/* Main Grid: Profile Card on left + Narrative on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Profile & Focus Areas (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
              {/* Profile Image with subtle ring */}
              <div className="relative mb-5">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-zinc-300 dark:ring-white/20 transition-all shadow-md">
                  <img 
                    src="/images/aadarsh-profile.jpg" 
                    alt="Aadarsh Neupane" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/aadarsh-logo.png';
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 p-1.5 rounded-lg shadow-md">
                  <Compass className="w-4 h-4" />
                </div>
              </div>

              <h3 className="poppins-bold text-xl text-zinc-900 dark:text-white font-bold mb-1">
                Aadarsh Neupane
              </h3>
              <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 tracking-wider uppercase mb-4">
                19-Year-Old BE IT Engineer · Co-Founder · Explorer
              </p>

              <div className="w-full h-px bg-zinc-200 dark:bg-white/10 my-2" />

              {/* Core Interest Pills */}
              <div className="w-full mt-3 text-left">
                <p className="text-xs font-semibold text-zinc-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Areas of Exploration
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Software', 'AI', 'Cybersecurity', 'Digital Marketing', 'Creative Work', 'Event Organizing'].map((area) => (
                    <span 
                      key={area}
                      className="text-xs px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Simulations Summary Badge */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-semibold text-sm mb-3">
                <Award className="w-4 h-4" />
                <span>Simulations & Certifications</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <BrainCircuit className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white block">ADB Institute</span>
                    <span>Seizing the Full Potential of AI</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white block">Tata (via Forage)</span>
                    <span>Cybersecurity Analyst Job Simulation</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Briefcase className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-white block">Red Bull (via Forage)</span>
                    <span>On-Premise Sales Job Simulation</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Full Narrative (8 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-8 sm:p-10 relative">
              <div className="space-y-6 text-zinc-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed poppins-regular">
                {/* Paragraph 1: Intro */}
                <p>
                  I’m <strong className="text-zinc-950 dark:text-white font-semibold">Aadarsh Neupane</strong>, a 19-year-old currently pursuing a Bachelor’s in Information Technology Engineering in Nepal. My journey so far has been a mix of technology, business, events, and learning through real experiences.
                </p>

                {/* Paragraph 2: Co-founder & Event Organizer */}
                <p>
                  Alongside my studies, I’ve worked as a{' '}
                  <a
                    href="https://www.suvakrio.com/team/aadarsh-neupane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link-highlight group"
                  >
                    <span>Co-Founder & CCO at Suvakrio Group</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </a>
                  , where I’ve been involved with ventures in software, marketing, and media. I’ve also worked as an{' '}
                  <a
                    href="https://www.instagram.com/event_vibes___/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white underline decoration-zinc-400 hover:decoration-zinc-900 dark:decoration-zinc-600 dark:hover:decoration-white transition-colors"
                  >
                    Event Organizer and Digital Marketing Manager at Event Vibes
                    <ExternalLink className="w-3.5 h-3.5 inline" />
                  </a>
                  , gaining hands-on experience in organizing events, working with people, and handling digital promotion.
                </p>

                {/* Paragraph 3: Beyond Code Curiosity */}
                <p>
                  I’m interested in understanding how technology can be used beyond just writing code. That curiosity has led me toward areas like{' '}
                  <strong className="text-zinc-950 dark:text-white font-semibold">software, AI, cybersecurity, digital marketing, and creative work</strong>.
                </p>

                {/* Paragraph 4: Certifications & Simulations */}
                <p>
                  I’ve completed <strong className="text-zinc-950 dark:text-white font-semibold">“Seizing the Full Potential of AI” by ADB Institute</strong>, and I’ve also explored professional environments through <strong className="text-zinc-950 dark:text-white font-semibold">Tata’s Cybersecurity Analyst Job Simulation</strong> and <strong className="text-zinc-950 dark:text-white font-semibold">Red Bull’s On-Premise Sales Job Simulation</strong> through Forage.
                </p>

                {/* Paragraph 5: Continuous Learning */}
                <p>
                  I’m still at the beginning of my journey, but I’m constantly learning, trying new things, and building experience along the way.
                </p>
              </div>

              {/* Callout Quote Box: The Bold Conclusion */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-8 pt-8 border-t border-zinc-200 dark:border-white/10 relative"
              >
                <div className="p-6 rounded-xl bg-zinc-100 dark:bg-white/[0.03] border border-zinc-300 dark:border-white/10 relative overflow-hidden group">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-zinc-400 dark:text-zinc-500 shrink-0 opacity-70 mt-1" />
                    <div>
                      <p className="poppins-bold text-lg sm:text-xl text-zinc-900 dark:text-white font-bold leading-snug">
                        I’m not trying to have everything figured out yet. I’m here to learn, build, explore, and see how far I can take it.
                      </p>
                      <span className="block mt-3 text-xs text-zinc-600 dark:text-zinc-400 font-medium tracking-wider uppercase">
                        — Aadarsh Neupane
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
