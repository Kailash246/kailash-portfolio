import React from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { CaseStudyModal } from './CaseStudyModal';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { useExhibition } from '../../context/ExhibitionContext';
import { 
  ArrowUpRight, 
  Globe, 
  ShoppingBag, 
  Gauge, 
  Ticket, 
  Star,
  CheckCircle2
} from 'lucide-react';

interface ColorConfig {
  gradientBg: string;
  border: string;
  hoverBorder: string;
  badgeBg: string;
  badgeText: string;
  catBg: string;
  catText: string;
  catBorder: string;
  accentDot: string;
  techBg: string;
  techText: string;
  techBorder: string;
}

const COLOR_MAP: Record<string, ColorConfig> = {
  festnest: {
    gradientBg: 'bg-gradient-to-br from-purple-500/[0.08] via-white to-fuchsia-500/[0.04]',
    border: 'border-purple-300/80',
    hoverBorder: 'hover:border-purple-600',
    badgeBg: 'bg-purple-700',
    badgeText: 'text-white',
    catBg: 'bg-purple-100',
    catText: 'text-purple-900',
    catBorder: 'border-purple-300',
    accentDot: 'bg-purple-600',
    techBg: 'bg-purple-50',
    techText: 'text-purple-800',
    techBorder: 'border-purple-200/80',
  },
  elitequeue: {
    gradientBg: 'bg-gradient-to-br from-amber-500/[0.07] via-white to-orange-500/[0.04]',
    border: 'border-amber-200/90',
    hoverBorder: 'hover:border-amber-500',
    badgeBg: 'bg-amber-600',
    badgeText: 'text-white',
    catBg: 'bg-amber-100/80',
    catText: 'text-amber-800',
    catBorder: 'border-amber-200',
    accentDot: 'bg-amber-500',
    techBg: 'bg-amber-50',
    techText: 'text-amber-800',
    techBorder: 'border-amber-200/80',
  },
  gocartz: {
    gradientBg: 'bg-gradient-to-br from-emerald-500/[0.07] via-white to-teal-500/[0.04]',
    border: 'border-emerald-200/90',
    hoverBorder: 'hover:border-emerald-500',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    catBg: 'bg-emerald-100/80',
    catText: 'text-emerald-800',
    catBorder: 'border-emerald-200',
    accentDot: 'bg-emerald-500',
    techBg: 'bg-emerald-50',
    techText: 'text-emerald-800',
    techBorder: 'border-emerald-200/80',
  },
  shop4au: {
    gradientBg: 'bg-gradient-to-br from-blue-500/[0.07] via-white to-cyan-500/[0.04]',
    border: 'border-blue-200/90',
    hoverBorder: 'hover:border-blue-500',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    catBg: 'bg-blue-100/80',
    catText: 'text-blue-800',
    catBorder: 'border-blue-200',
    accentDot: 'bg-blue-500',
    techBg: 'bg-blue-50',
    techText: 'text-blue-800',
    techBorder: 'border-blue-200/80',
  },
};

export const ProjectsSection: React.FC = () => {
  const { selectedProject, openProjectCaseStudy, closeProjectCaseStudy } = useExhibition();

  // Render authentic visual product card previews
  const renderVisualPreview = (projId: string) => {
    switch (projId) {
      case 'festnest':
        return (
          <div className="p-4 rounded-2xl bg-white border border-purple-200/90 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-purple-100 text-xs font-mono">
              <span className="font-bold text-purple-900 flex items-center gap-1.5">
                <Globe size={13} className="text-purple-600" />
                festnest.in • Platform Showcase
              </span>
              <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-semibold">
                Live System
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-100">
                Hackathons
              </span>
              <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-100">
                Technical Fests
              </span>
              <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-100">
                Workshops
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-sans text-neutral-600 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-purple-600 shrink-0" />
                <span>Instant search & filtering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-purple-600 shrink-0" />
                <span>Organizer admin panel</span>
              </div>
            </div>
          </div>
        );

      case 'elitequeue':
        return (
          <div className="p-4 rounded-2xl bg-neutral-950 text-white border border-neutral-800 shadow-inner space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-xs font-mono">
              <span className="font-bold text-amber-400 flex items-center gap-1.5">
                <Ticket size={13} />
                Virtual Token Architecture
              </span>
              <span className="text-[10px] text-neutral-400 font-medium">
                FIFO State Machine
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono py-1">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 block">STEP 1</span>
                <span className="text-xs font-sans font-bold text-white block mt-0.5">Book Token</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[10px] text-amber-400 block">STEP 2</span>
                <span className="text-xs font-sans font-bold text-amber-300 block mt-0.5">Live Wait Time</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 block">STEP 3</span>
                <span className="text-xs font-sans font-bold text-white block mt-0.5">Counter Call</span>
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 flex items-center justify-between font-mono pt-0.5">
              <span>Optimized for clinics, salons & campus desks</span>
            </div>
          </div>
        );

      case 'gocartz':
        return (
          <div className="p-4 rounded-2xl bg-neutral-950 text-white border border-neutral-800 shadow-inner space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-xs font-mono">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Gauge size={13} />
                Electric Assist & Telemetry
              </span>
              <span className="text-[10px] text-neutral-400 font-medium">
                Hardware Prototyping
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono py-1">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 block">MOTOR</span>
                <span className="text-xs font-sans font-bold text-white block mt-0.5">Throttle Assist</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[10px] text-teal-400 block">SENSORS</span>
                <span className="text-xs font-sans font-bold text-teal-300 block mt-0.5">Microcontroller</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 block">DASHBOARD</span>
                <span className="text-xs font-sans font-bold text-white block mt-0.5">Web Telemetry</span>
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 flex items-center justify-between font-mono pt-0.5">
              <span>Built to reduce heavy hauling strain for street vendors</span>
            </div>
          </div>
        );

      case 'shop4au':
        return (
          <div className="p-4 rounded-2xl bg-white border border-blue-200/90 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-blue-100 text-xs font-mono">
              <span className="font-bold text-blue-900 flex items-center gap-1.5">
                <ShoppingBag size={13} className="text-blue-600" />
                Campus Stationery Catalog
              </span>
              <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                Storefront
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono py-1">
              <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] text-blue-700 block">CATALOG</span>
                <span className="text-xs font-sans font-bold text-blue-950 block mt-0.5">Lab Supplies</span>
              </div>
              <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] text-blue-700 block">ORDER</span>
                <span className="text-xs font-sans font-bold text-blue-950 block mt-0.5">Digital Slip</span>
              </div>
              <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-100">
                <span className="text-[10px] text-blue-700 block">PICKUP</span>
                <span className="text-xs font-sans font-bold text-blue-950 block mt-0.5">Express Counter</span>
              </div>
            </div>

            <div className="text-[11px] text-neutral-600 flex items-center justify-between font-sans pt-0.5">
              <span>Eliminates long counter queues during lecture breaks</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      aria-label="Section 02: Featured Projects"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="02"
        catalogNumber="SECTION // 02"
        title="FEATURED PROJECTS"
        subtitle="Web applications and functional prototypes built to solve genuine everyday problems."
        dimensionLabel="PROJECT SHOWCASE"
      />

      {/* 2x2 Project Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {PROJECTS_DATA.map((proj) => {
          const colors = COLOR_MAP[proj.id] || COLOR_MAP.festnest;
          const isFlagship = proj.id === 'festnest';

          return (
            <div
              key={proj.id}
              onClick={() => openProjectCaseStudy(proj.id)}
              className={`group relative rounded-3xl p-6 transition-all duration-300 border ${colors.border} ${colors.hoverBorder} ${colors.gradientBg} shadow-xs hover:shadow-lg hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
                isFlagship ? 'ring-2 ring-purple-400/40 shadow-purple-500/10' : ''
              }`}
            >
              <div className="space-y-3.5">
                {/* Header Row: Number Badge, Category & Flagship Pill */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-neutral-200/70">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-xl ${colors.badgeBg} ${colors.badgeText} text-xs font-mono font-bold flex items-center justify-center shadow-xs`}>
                      {proj.number}
                    </span>
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg ${colors.catBg} ${colors.catText} border ${colors.catBorder}`}>
                      {proj.category.split('&')[0].trim()}
                    </span>

                    {/* Flagship Highlight Tag */}
                    {isFlagship && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-900 text-purple-100 shadow-2xs">
                        <Star size={10} className="text-amber-400 fill-amber-400" />
                        <span>FLAGSHIP</span>
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white text-neutral-700 border border-neutral-200/80 shadow-3xs font-medium">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.accentDot}`} />
                    {proj.status.split('/')[0].trim()}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-neutral-900 tracking-tight group-hover:text-black">
                      {proj.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-white border border-neutral-200/80 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black transition-colors shadow-3xs">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5">
                    {proj.tagline}
                  </p>
                </div>

                {/* Visual Preview Frame */}
                <div>
                  {renderVisualPreview(proj.id)}
                </div>

                {/* Short, Factual 1-Sentence Description */}
                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed pt-1">
                  {proj.solution}
                </p>
              </div>

              {/* Footer: Tech Stack Badges & Clear CTA */}
              <div className="pt-4 mt-5 border-t border-neutral-200/70 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-medium ${colors.techBg} ${colors.techText} border ${colors.techBorder}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[9px] font-mono text-neutral-400 bg-neutral-100">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-sans font-bold text-xs shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={11} />
                    </a>
                  )}

                  <span className="text-xs font-sans font-semibold text-neutral-900 group-hover:underline flex items-center gap-1">
                    Case Study
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={closeProjectCaseStudy}
      />
    </section>
  );
};
