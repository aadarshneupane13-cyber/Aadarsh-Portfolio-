import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Code2, PlusCircle, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
          <Code2 className="w-4 h-4" />
          <span>Chapter 06 — Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white uppercase">
          Things I've <span className="text-gradient-emerald">Worked On</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Dedicated purely to software engineering, prototypes, and digital systems. Authentic builds without invented claims.
        </p>
      </div>

      {/* Projects List with Large Previews */}
      <div className="space-y-16">
        {projectsData.map((project) => (
          <div
            key={project.id}
            data-cursor="PROJECT"
            className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Visual Preview Side */}
              <div className="lg:col-span-6 relative aspect-video rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group shadow-lg">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-emerald-400 font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Role Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Role: {project.role}</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              {/* Details Side */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {project.name || project.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-400">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      data-cursor="LIVE"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-dark-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <span>Live Platform</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="CODE"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-semibold text-xs border border-white/10 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}

        {/* Developer Ready Addition Box */}
        <div className="p-6 sm:p-8 rounded-3xl border border-dashed border-white/15 bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Space Ready For Your Future Repositories
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Simply append your projects into <code className="text-emerald-300 font-mono">src/data/projects.ts</code> with name, technology, GitHub URL, and live links.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors shrink-0"
          >
            Open GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
};
