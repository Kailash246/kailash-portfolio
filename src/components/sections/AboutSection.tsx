import React from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useExhibition } from '../../context/ExhibitionContext';
import { GraduationCap, ArrowUpRight, MapPin, FileText, FileCode, Download, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { viewMode } = useExhibition();

  if (viewMode === 'quick') {
    return (
      <section
        id="about"
        aria-label="Section 01: About Me (Quick View)"
        className="py-10 sm:py-16 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100 transition-opacity duration-300"
      >
        <RoomHeader
          index="01"
          catalogNumber="SECTION // 01"
          title="ABOUT ME"
          subtitle="BCA Undergraduate & Practical Problem Solver at Alliance University"
          dimensionLabel="QUICK PROFILE"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6 items-stretch">
          {/* Left: Short Bio & AI-Assisted Highlights (8 cols) */}
          <div className="lg:col-span-8 p-5 sm:p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              {/* Header with Monogram & Status */}
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-sans font-black text-base shadow-sm">
                    K
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-sans font-black text-neutral-900 leading-tight">
                      KAILASH KUMAR B
                    </h3>
                    <p className="text-xs font-mono text-neutral-500">
                      BCA Student • Full-Stack Developer & Builder
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Internship Ready
                </span>
              </div>

              {/* Short Quick View Bio */}
              <p className="text-sm sm:text-base font-sans font-medium text-neutral-800 leading-relaxed">
                BCA student and builder focused on full-stack development, practical products, and AI-assisted workflows. I turn ideas into working software while continuously learning, experimenting, and improving how I build.
              </p>

              {/* AI-Assisted Development / Productivity Highlight */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-purple-900 font-mono text-xs font-bold">
                  <Sparkles size={13} className="text-purple-600" />
                  <span>AI-ASSISTED LEARNING & PRODUCTIVITY</span>
                </div>
                <p className="text-xs sm:text-sm font-sans text-purple-950/80 leading-relaxed">
                  Continuously exploring AI tools and modern development workflows to learn faster, reduce repetitive work, prototype ideas quickly, and improve development productivity.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons: Resume & Technical Profile */}
            <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center gap-2.5">
              <a
                href="/Kailash%20Kumar%20-%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 min-h-[40px] rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-mono transition-all flex items-center gap-2 cursor-pointer shadow-3xs"
              >
                <FileText size={13} />
                <span>View Resume</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="/Technical%20Profile.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 min-h-[40px] rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 text-xs font-mono transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileCode size={13} />
                <span>Technical Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right: Compact Education Card (4 cols) */}
          <div className="lg:col-span-4 p-5 sm:p-7 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                  ACADEMIC FOUNDATION
                </span>
                <GraduationCap size={16} className="text-black" />
              </div>

              <div>
                <h4 className="text-lg font-sans font-black text-neutral-900">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-xs font-mono text-neutral-600 mt-0.5">
                  Alliance University, Bangalore
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-200/80 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">TIMELINE</span>
                  <span className="font-bold text-neutral-900">2024 – Present</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">ACADEMIC CGPA</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                    7.5 / 10
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">LOCATION</span>
                  <span className="text-neutral-700">Bangalore, India</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200/80 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
              <MapPin size={12} className="text-neutral-700" />
              <span>CED, Alliance University Campus</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      aria-label="Section 01: About Me"
      className="py-12 sm:py-24 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="01"
        catalogNumber="SECTION // 01"
        title="ABOUT ME"
        subtitle="Student developer building practical web applications and hardware-software prototypes."
        dimensionLabel="PERSONAL INTRO"
      />

      {/* Clean, Modern Personal Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mt-6 sm:mt-8">
        
        {/* Main Personal Profile (8 cols) */}
        <div className="lg:col-span-8 p-4 sm:p-6 lg:p-8 rounded-3xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-all">
          <div className="space-y-4">
            
            {/* Header: Monogram & Live Status */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-black text-white flex items-center justify-center font-sans font-black text-lg shadow-sm">
                  K
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-sans font-black text-neutral-900 leading-tight">
                    KAILASH KUMAR B
                  </h3>
                  <p className="text-xs font-mono text-neutral-500">
                    BCA Student • Full-Stack Developer
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Internship Ready
              </span>
            </div>

            {/* Direct, Human Introduction */}
            <p className="text-base sm:text-lg font-sans font-medium text-neutral-800 leading-relaxed pt-1">
              I’m a BCA student and builder focused on creating practical software, full-stack web applications, and real-world prototypes. I enjoy turning ideas into working products, learning new technologies and AI-powered tools, and using them to build faster, solve problems better, and continuously improve my workflow.
            </p>

            {/* Verifiable 1M1B Green Internship Banner */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xl shrink-0">🌿</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">
                      OFFICIAL INTERNSHIP
                    </span>
                    <span className="text-[9px] font-mono text-emerald-700 font-semibold bg-white px-1.5 py-0.2 rounded border border-emerald-200">
                      2024
                    </span>
                  </div>
                  <h4 className="text-xs font-sans font-bold text-emerald-950 truncate">
                    1M1B Green Sustainability Internship
                  </h4>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.internship.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs shrink-0 shadow-2xs hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Proof</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Professional Documents: Resume & Technical Profile View / Download */}
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold tracking-wider block mb-2">
                VERIFIED CREDENTIALS & DOCUMENTS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Resume Card */}
                <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between gap-3 shadow-3xs hover:border-black transition-all">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-700">
                      <FileText size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase block">CURRICULUM VITAE</span>
                      <h4 className="text-xs font-sans font-bold text-neutral-900 truncate">Resume</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href="/Kailash%20Kumar%20-%20CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Resume in new tab"
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-neutral-900 hover:text-white border border-neutral-200 text-neutral-800 text-[11px] font-sans font-medium transition-all inline-flex items-center gap-1 shadow-3xs cursor-pointer"
                    >
                      <span>View</span>
                      <ExternalLink size={10} />
                    </a>
                    <a
                      href="/Kailash%20Kumar%20-%20CV.pdf"
                      download="Kailash_Kumar_CV.pdf"
                      title="Download Resume PDF"
                      className="p-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white transition-all shadow-3xs cursor-pointer inline-flex items-center"
                    >
                      <Download size={12} />
                    </a>
                  </div>
                </div>

                {/* Technical Profile Card */}
                <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between gap-3 shadow-3xs hover:border-black transition-all">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-700">
                      <FileCode size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase block">PORTFOLIO DOSSIER</span>
                      <h4 className="text-xs font-sans font-bold text-neutral-900 truncate">Tech Profile</h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href="/Technical%20Profile.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Technical Profile in new tab"
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-neutral-900 hover:text-white border border-neutral-200 text-neutral-800 text-[11px] font-sans font-medium transition-all inline-flex items-center gap-1 shadow-3xs cursor-pointer"
                    >
                      <span>View</span>
                      <ExternalLink size={10} />
                    </a>
                    <a
                      href="/Technical%20Profile.pdf"
                      download="Kailash_Kumar_Technical_Profile.pdf"
                      title="Download Technical Profile PDF"
                      className="p-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white transition-all shadow-3xs cursor-pointer inline-flex items-center"
                    >
                      <Download size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simplified 1-Row Flow Indicator */}
          <div className="mt-6 pt-5 border-t border-neutral-100">
            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold tracking-wider block mb-2">
              ENGINEERING APPROACH
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 text-neutral-700">
                <span className="text-neutral-400 block text-[9px] mb-0.5">01</span>
                <span className="font-sans font-semibold text-neutral-900 block text-[11px]">Spot Friction</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 text-neutral-700">
                <span className="text-neutral-400 block text-[9px] mb-0.5">02</span>
                <span className="font-sans font-semibold text-neutral-900 block text-[11px]">First Principles</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 text-neutral-700">
                <span className="text-neutral-400 block text-[9px] mb-0.5">03</span>
                <span className="font-sans font-semibold text-neutral-900 block text-[11px]">Build Prototype</span>
              </div>
              <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200/70 text-neutral-700">
                <span className="text-neutral-400 block text-[9px] mb-0.5">04</span>
                <span className="font-sans font-semibold text-neutral-900 block text-[11px]">Test with Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Location Card (4 cols) */}
        <div className="lg:col-span-4 p-4 sm:p-6 lg:p-7 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider pb-2 border-b border-neutral-200/60">
              <GraduationCap size={15} className="text-neutral-700" />
              <span>ACADEMIC BACKGROUND</span>
            </div>

            {/* University Degree */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                DEGREE • 2024 — PRESENT
              </span>
              <h4 className="text-sm font-sans font-bold text-neutral-900 mt-0.5">
                Bachelor of Computer Applications
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5">
                Alliance University, Bangalore
              </p>
              <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Current CGPA:</span>
                <span className="font-bold text-black bg-neutral-100 px-2 py-0.5 rounded-md">
                  7.5 / 10
                </span>
              </div>
            </div>

            {/* Schooling Highlights */}
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-neutral-400 text-[10px] block">12TH (PCMC)</span>
                  <span className="font-sans font-semibold text-neutral-800 text-[11px]">PES PU College</span>
                </div>
                <span className="font-bold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">70%</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-neutral-400 text-[10px] block">10TH (SSLC)</span>
                  <span className="font-sans font-semibold text-neutral-800 text-[11px]">Pandit Nehru Memorial</span>
                </div>
                <span className="font-bold text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">84%</span>
              </div>
            </div>
          </div>

          {/* Location Marker */}
          <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-mono text-neutral-500">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-neutral-700" />
              Bangalore, Karnataka
            </span>
            <span className="text-neutral-400">India</span>
          </div>
        </div>

      </div>

      {/* Modern AI-Assisted Learning & Productivity Sub-Card */}
      <div className="mt-6 p-4 sm:p-6 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-300 transition-all shadow-3xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Left Narrative */}
          <div className="max-w-xl space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-500">
                MODERN DEVELOPER WORKFLOW
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-sans font-bold text-neutral-900 tracking-tight flex items-center gap-1.5">
              <span>AI-Assisted Learning & Productivity</span>
              <Sparkles size={14} className="text-amber-500" />
            </h4>
            <p className="text-xs font-sans text-neutral-600 leading-relaxed">
              I continuously experiment with new AI tools and workflows to learn faster, reduce repetitive work, prototype ideas, and improve development productivity — leveraging AI as an accelerator while anchoring every system in first-principles engineering.
            </p>
          </div>

          {/* Right Visual Flow: Learn → Experiment → Apply → Improve */}
          <div className="shrink-0 w-full lg:w-auto">
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-1.5 text-xs font-mono">
              <div className="px-3 py-2 sm:py-1.5 rounded-xl bg-white border border-neutral-200 shadow-3xs text-center">
                <span className="block text-[9px] text-neutral-400 uppercase font-semibold">01</span>
                <span className="font-sans font-bold text-neutral-900 text-xs">Learn</span>
              </div>
              <ArrowRight size={12} className="text-neutral-400 shrink-0 hidden sm:block" />
              <div className="px-3 py-2 sm:py-1.5 rounded-xl bg-white border border-neutral-200 shadow-3xs text-center">
                <span className="block text-[9px] text-neutral-400 uppercase font-semibold">02</span>
                <span className="font-sans font-bold text-neutral-900 text-xs">Experiment</span>
              </div>
              <ArrowRight size={12} className="text-neutral-400 shrink-0 hidden sm:block" />
              <div className="px-3 py-2 sm:py-1.5 rounded-xl bg-white border border-neutral-200 shadow-3xs text-center">
                <span className="block text-[9px] text-neutral-400 uppercase font-semibold">03</span>
                <span className="font-sans font-bold text-neutral-900 text-xs">Apply</span>
              </div>
              <ArrowRight size={12} className="text-neutral-400 shrink-0 hidden sm:block" />
              <div className="px-3 py-2 sm:py-1.5 rounded-xl bg-white border border-neutral-200 shadow-3xs text-center">
                <span className="block text-[9px] text-neutral-400 uppercase font-semibold">04</span>
                <span className="font-sans font-bold text-neutral-900 text-xs">Improve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
