import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'aadarshneupane13@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/aadarsh-neupane-657705418/';

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="contact py-24 px-4 sm:px-6 relative border-t border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-[#07090e] transition-colors duration-300 overflow-hidden"
    >
      {/* Scroll-revealed radiant light seam at section entry */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-zinc-400/40 dark:via-zinc-600/40 to-transparent pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header with scroll reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 mb-4 text-zinc-900 dark:text-white shadow-sm">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">
            CONTACT ME
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 font-semibold mb-3">
            LET'S CONNECT
          </p>
          <p className="poppins-regular text-zinc-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Whether you have an exciting project, venture collaboration, or just want to say hello, my inbox is always open.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-zinc-400 dark:hover:border-white/20"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold block mb-1">
                Direct Email
              </span>
              <a 
                href={`mailto:${email}`}
                className="font-semibold text-base sm:text-lg text-zinc-900 dark:text-white hover:underline break-all block mb-4"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-zinc-200 dark:border-white/10">
              <a 
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Send Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={copyToClipboard}
                title="Copy email to clipboard"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-200/80 dark:bg-white/5 hover:bg-zinc-300 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-white/10 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-zinc-400 dark:hover:border-white/20"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-200/80 dark:bg-white/5 border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold block mb-1">
                LinkedIn Network
              </span>
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-base sm:text-lg text-zinc-900 dark:text-white hover:underline block mb-4"
              >
                Aadarsh Neupane
              </a>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-white/10">
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
