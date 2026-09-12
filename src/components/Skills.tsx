import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

interface SkillGroup {
  title: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const column1: SkillGroup[] = [
    {
      title: 'LANGUAGES',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'],
    },
    {
      title: 'FRAMEWORKS / RUNTIME',
      skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    },
    {
      title: 'PRACTICE',
      skills: [
        'Full-stack development',
        'Custom AI development',
        'Git / GitHub',
        'Problem solving',
      ],
    },
  ];

  const column2: SkillGroup[] = [
    {
      title: 'LEADERSHIP & STRATEGY',
      skills: [
        'Startup strategy',
        'Public speaking',
        'Team management',
        'Communication',
        'Adaptability',
        'IT strategy',
      ],
    },
    {
      title: 'CREATIVE & MARKETING',
      skills: [
        'Graphic designer',
        'Social media and digital marketing',
        'Event management and promotion',
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="skills py-24 px-4 sm:px-6 relative border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#080b11] transition-colors duration-300"
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
            <Wrench className="w-8 h-8" />
          </div>
          <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            SKILLS
          </h2>
          <p className="poppins-regular text-zinc-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Technical competencies, engineering practices, leadership, and creative capabilities:
          </p>
        </motion.div>

        {/* Skills Grid: matching the reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 max-w-5xl mx-auto">
          {/* Column 1: Languages, Frameworks, Practice */}
          <div className="space-y-10">
            {column1.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-semibold mb-3.5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide bg-white dark:bg-[#0c0f16] text-zinc-800 dark:text-zinc-200 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-[#131722] shadow-sm transition-colors select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Leadership & Strategy, Creative & Marketing */}
          <div className="space-y-10">
            {column2.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-semibold mb-3.5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide bg-white dark:bg-[#0c0f16] text-zinc-800 dark:text-zinc-200 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-[#131722] shadow-sm transition-colors select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

