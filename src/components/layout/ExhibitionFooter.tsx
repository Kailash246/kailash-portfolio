import React from 'react';
import { ArrowUp, MapPin, GraduationCap } from 'lucide-react';
import { useExhibition } from '../../context/ExhibitionContext';

export const ExhibitionFooter: React.FC = () => {
  const { scrollToRoom } = useExhibition();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/50 pt-16 pb-12 px-6 sm:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-sans font-bold text-xs shadow-sm">
                K
              </div>
              <span className="font-sans font-black text-sm tracking-tight text-neutral-900">
                KAILASH KUMAR B
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 font-sans max-w-md leading-relaxed">
              BCA student at Alliance University, Bangalore (CGPA: 7.5/10). Developer of FestNest and EliteQueue. Winner of 10 inter-collegiate hackathons & ideathons.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 pt-1">
              <span className="flex items-center gap-1.5">
                <GraduationCap size={14} className="text-black" />
                Alliance University • BCA (2024–Present)
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-black" />
                Bangalore, Karnataka, India
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-neutral-900 uppercase font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-sans text-neutral-500">
              <li>
                <button
                  onClick={() => scrollToRoom('about')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  01 // About Me & Background
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('projects')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  02 // Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('expertise')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  03 // Skills & Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('certifications')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  04 // Accredited Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('achievements')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  05 // Achievements & Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('journey')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  06 // Learning Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('philosophy')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  07 // Core Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToRoom('contact')}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  08 // Let's Connect
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: System Status & Top */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-neutral-900 uppercase font-bold">
              PORTFOLIO STATUS
            </h4>

            <div className="p-3 rounded-xl bg-white border border-neutral-200 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
              <p className="text-[11px] text-neutral-500 font-sans">
                Student portfolio built with Vite + React 19 + TypeScript + Tailwind CSS.
              </p>
            </div>

            <button
              onClick={() => scrollToRoom('hero')}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200 hover:bg-black hover:text-white text-neutral-900 text-xs font-mono transition-all cursor-pointer"
            >
              <ArrowUp size={13} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} Kailash Kumar B. All rights reserved.
          </div>
          <div>
            Alliance University Bangalore • Open for Internships
          </div>
        </div>
      </div>
    </footer>
  );
};
