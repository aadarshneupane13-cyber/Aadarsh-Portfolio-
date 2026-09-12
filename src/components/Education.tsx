import React from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  descriptionHtml: React.ReactNode;
}

export const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 'be-it-engineering',
      title: 'Bachelors in IT Engineering',
      image: '/images/be-it-logo.jpg',
      imageAlt: 'Bachelor of Information Technology Engineering BE IT Logo',
      descriptionHtml: (
        <span>
          Currently pursuing <span className="text-zinc-900 dark:text-white font-semibold">Bachelors in Information Technology (BE IT)</span> Engineering course in Nepal, developing skills in software systems, computing infrastructure, and modern technology.
        </span>
      ),
    },
    {
      id: 'everest-college',
      title: 'Student Of Everest',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyXDZ04dIOQ_rOHnF5AfXSy3xVKjFE3SLDA&s',
      imageAlt: 'Everest',
      descriptionHtml: (
        <span>
          Passedout +2 from{' '}
          <a
            href="https://everest.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link-highlight group"
          >
            <span>Everest English Boarding school</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
          , Best institution upto +2 studies.
        </span>
      ),
    },
    {
      id: 'see-sebs',
      title: 'SEE',
      image: '/images/siddhartha-school-logo.png',
      imageAlt: 'Siddhartha English Boarding Secondary School Logo',
      descriptionHtml: (
        <span>
          I have passout my SEE from{' '}
          <a
            href="https://sebs.edu.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link-highlight group"
          >
            <span>Siddhartha English Boarding School</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>{' '}
          and been in childfriendly community which was organised by Tilottama Municipality .
        </span>
      ),
    },
  ];

  return (
    <section 
      id="academics" 
      className="education py-24 px-4 sm:px-6 relative border-t border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-[#07090e] transition-colors duration-300"
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
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 mb-4 text-zinc-900 dark:text-white shadow-sm">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            ACADEMICS
          </h2>
          <p className="poppins-regular text-zinc-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Academic milestones and educational qualifications:
          </p>
        </motion.div>

        {/* Education Cards Grid with staggered scroll reveal */}
        <div className="education-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="education-card glass-card rounded-2xl overflow-hidden flex flex-col p-6 group hover:border-zinc-400 dark:hover:border-white/20"
            >
              {/* Card Image Container */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 bg-zinc-200/50 dark:bg-[#0c101a] flex items-center justify-center p-3 relative border border-zinc-300 dark:border-white/5 group-hover:border-zinc-400 dark:group-hover:border-white/15 transition-all">
                <img
                  src={item.image}
                  alt={item.imageAlt}
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
                    {item.title}
                  </h3>
                  <p className="poppins-regular text-zinc-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.descriptionHtml}
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
