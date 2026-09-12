import React from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  descriptionHtml: React.ReactNode;
}

export const Projects: React.FC = () => {
  const projectItems: ProjectItem[] = [
    {
      id: 'suvakrio-group',
      title: 'Co-Founder & CCO — Suvakrio Group',
      image: '/images/suvakrio-logo.svg',
      imageAlt: 'Suvakrio Group Logo',
      descriptionHtml: (
        <span>
          Co-Founder and CCO at{' '}
          <a
            href="https://www.suvakrio.com/team/aadarsh-neupane"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link-highlight group"
          >
            <span>Suvakrio Group</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
          , a Nepali holding company building ventures in software, marketing, and media (NepEduAI, SuvakrioSMM).
        </span>
      ),
    },
    {
      id: 'event-vibes',
      title: 'Event Organizer & Digital Marketing Manager',
      image: '/images/event-vibes-logo.png',
      imageAlt: 'Event Vibes - Event Organizing Company Logo',
      descriptionHtml: (
        <span>
          Event Organizer and Digital Marketing Manager at{' '}
          <a
            href="https://www.instagram.com/event_vibes___/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white underline decoration-zinc-400 hover:decoration-zinc-900 dark:decoration-zinc-600 dark:hover:decoration-white transition-colors"
          >
            Event Vibes
            <ExternalLink className="w-3.5 h-3.5 inline" />
          </a>
          , an event organizing company specializing in live music concerts, youth events, and digital promotional campaigns in Nepal.
        </span>
      ),
    },
  ];

  return (
    <section 
      id="projects" 
      className="projects py-24 px-4 sm:px-6 relative min-h-screen border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#080b11] transition-colors duration-300"
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
            <Briefcase className="w-8 h-8" />
          </div>
          <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            PROJECTS
          </h2>
          <p className="poppins-regular projects-text text-zinc-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            These are some of the professional experiences I have gained:
          </p>
        </motion.div>

        {/* Project Cards Grid with staggered scroll reveal */}
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectItems.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="project-card glass-card rounded-2xl overflow-hidden flex flex-col p-6 group hover:border-zinc-400 dark:hover:border-white/20"
            >
              {/* Card Image Container */}
              <div className="w-full h-52 rounded-xl overflow-hidden mb-6 bg-zinc-100 dark:bg-[#0c101a] flex items-center justify-center p-4 relative border border-zinc-200 dark:border-white/5 group-hover:border-zinc-300 dark:group-hover:border-white/15 transition-all">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/aadarsh-logo.png';
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="poppins-semibold text-xl font-semibold text-zinc-900 dark:text-white transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="poppins-regular text-zinc-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.descriptionHtml}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
