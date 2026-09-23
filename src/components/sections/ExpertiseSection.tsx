import React, { useState } from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { 
  Globe, 
  Server, 
  Database, 
  Cpu, 
  Cloud, 
  Layers,
  Search,
  CheckCircle2
} from 'lucide-react';

interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  accentBg: string;
  technologies: Array<{
    name: string;
    isPrimary?: boolean;
    detail?: string;
  }>;
}

const SKILL_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive web apps & interactive interfaces',
    icon: Globe,
    accentColor: 'text-cyan-600',
    accentBg: 'bg-cyan-50',
    technologies: [
      { name: 'React', isPrimary: true, detail: 'Component Architecture' },
      { name: 'TypeScript', isPrimary: true, detail: 'Type Safety' },
      { name: 'JavaScript (ES6+)', isPrimary: true, detail: 'Async & DOM' },
      { name: 'Vite', detail: 'Build Tooling' },
      { name: 'Tailwind CSS', isPrimary: true, detail: 'Modern Design Systems' },
      { name: 'HTML5 & CSS3', detail: 'Semantic & Flexbox/Grid' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server services, routing & event-driven APIs',
    icon: Server,
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    technologies: [
      { name: 'Node.js', isPrimary: true, detail: 'Runtime Environment' },
      { name: 'Express.js', isPrimary: true, detail: 'RESTful Middleware' },
      { name: 'Python', isPrimary: true, detail: 'Scripting & APIs' },
      { name: 'REST APIs', isPrimary: true, detail: 'JSON Architecture' },
      { name: 'WebSockets', detail: 'Real-Time State Sync' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Persistence',
    subtitle: 'Relational schemas, queries & data integrity',
    icon: Database,
    accentColor: 'text-indigo-600',
    accentBg: 'bg-indigo-50',
    technologies: [
      { name: 'PostgreSQL', isPrimary: true, detail: 'ACID Relational' },
      { name: 'SQL', isPrimary: true, detail: 'Complex Joins & Queries' },
      { name: 'Schema Design', detail: 'Normalized Relations' },
      { name: 'Data Modeling', detail: 'Entity Relationships' },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Systems',
    subtitle: 'Microcontrollers, telemetry & physical sensors',
    icon: Cpu,
    accentColor: 'text-orange-600',
    accentBg: 'bg-orange-50',
    technologies: [
      { name: 'C / C++', isPrimary: true, detail: 'Firmware & I/O' },
      { name: 'ESP32 / Arduino', isPrimary: true, detail: 'Microcontrollers' },
      { name: 'Sensor Telemetry', detail: 'Speed, Voltage & Current' },
      { name: 'Hardware-Software Interfacing', detail: 'Physical Control' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Hosting, edge distribution & version control',
    icon: Cloud,
    accentColor: 'text-purple-600',
    accentBg: 'bg-purple-50',
    technologies: [
      { name: 'Git & GitHub', isPrimary: true, detail: 'Version Control & Workflows' },
      { name: 'Vercel', isPrimary: true, detail: 'Frontend Edge Deployment' },
      { name: 'Render', detail: 'Backend Container Hosting' },
      { name: 'Cloudflare', detail: 'DNS & Edge Security' },
      { name: 'Postman', detail: 'API Contract Testing' },
    ],
  },
  {
    id: 'cs-core',
    title: 'CS Fundamentals & Problem Solving',
    subtitle: 'Algorithms, object-oriented design & logic',
    icon: Layers,
    accentColor: 'text-rose-600',
    accentBg: 'bg-rose-50',
    technologies: [
      { name: 'Java', isPrimary: true, detail: 'OOP & Core Logic' },
      { name: 'Data Structures & Algorithms', isPrimary: true, detail: 'Problem Solving' },
      { name: 'System Architecture', detail: 'End-to-End Design' },
      { name: 'First-Principles Thinking', detail: 'Pragmatic Engineering' },
    ],
  },
];

export const ExpertiseSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const matchingTech = cat.technologies.filter(
      (t) =>
        t.name.toLowerCase().includes(query) ||
        (t.detail && t.detail.toLowerCase().includes(query))
    );
    const categoryMatches =
      cat.title.toLowerCase().includes(query) ||
      cat.subtitle.toLowerCase().includes(query);

    if (categoryMatches) return cat;
    if (matchingTech.length > 0) {
      return { ...cat, technologies: matchingTech };
    }
    return null;
  }).filter(Boolean) as TechCategory[];

  return (
    <section
      id="expertise"
      aria-label="Section 03: Skills & Technologies"
      className="py-12 sm:py-28 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="03"
        catalogNumber="SECTION // 03"
        title="SKILLS & TECHNOLOGIES"
        subtitle="Programming languages, frameworks, and developer tools organized into an integrated architecture."
        dimensionLabel="CORE COMPETENCIES"
      />

      {/* Visual Full-Stack System Architecture Diagram */}
      <div className="mb-8 sm:mb-12 p-4 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-neutral-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-xs text-neutral-300 break-words font-semibold">
              FULL-STACK SYSTEM ARCHITECTURE MAP
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-neutral-500 shrink-0">END-TO-END FLOW</span>
        </div>

        {/* Visual Diagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {/* Layer 1: Client / Web */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
              <Globe size={20} />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">LAYER 01</span>
            <h5 className="text-sm font-sans font-bold text-white mt-1">Client Interface</h5>
            <p className="text-[11px] text-neutral-400 mt-1">React • Tailwind • TypeScript</p>
            <div className="w-full mt-3 pt-2 border-t border-neutral-800 text-[10px] font-mono text-neutral-500">
              Responsive UI
            </div>
          </div>

          {/* Layer 2: API & Logic */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
              <Server size={20} />
            </div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">LAYER 02</span>
            <h5 className="text-sm font-sans font-bold text-white mt-1">Backend & APIs</h5>
            <p className="text-[11px] text-neutral-400 mt-1">Node.js • Python • Express</p>
            <div className="w-full mt-3 pt-2 border-t border-neutral-800 text-[10px] font-mono text-neutral-500">
              REST & State Logic
            </div>
          </div>

          {/* Layer 3: Database & State */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-2">
              <Database size={20} />
            </div>
            <span className="text-[10px] font-mono text-indigo-400 uppercase font-semibold">LAYER 03</span>
            <h5 className="text-sm font-sans font-bold text-white mt-1">Database Systems</h5>
            <p className="text-[11px] text-neutral-400 mt-1">PostgreSQL • Relational Schemas</p>
            <div className="w-full mt-3 pt-2 border-t border-neutral-800 text-[10px] font-mono text-neutral-500">
              ACID Persistence
            </div>
          </div>

          {/* Layer 4: Hardware & IoT */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-2">
              <Cpu size={20} />
            </div>
            <span className="text-[10px] font-mono text-orange-400 uppercase font-semibold">LAYER 04</span>
            <h5 className="text-sm font-sans font-bold text-white mt-1">Hardware & Sensors</h5>
            <p className="text-[11px] text-neutral-400 mt-1">ESP32 • Telemetry • C/C++</p>
            <div className="w-full mt-3 pt-2 border-t border-neutral-800 text-[10px] font-mono text-neutral-500">
              Real-World Physical
            </div>
          </div>
        </div>
      </div>

      {/* Clean Category Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="font-bold text-neutral-900 uppercase">CURATED TOOLKIT</span>
          <span>•</span>
          <span>6 LOGICAL DOMAINS</span>
        </div>

        <div className="relative w-full sm:w-60">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Quick search skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-sans text-black placeholder:text-neutral-400 outline-none focus:border-black focus:bg-white transition-colors min-h-[38px]"
          />
        </div>
      </div>

      {/* Categorized Technical Matrix (3x2 Grid on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((cat) => {
          const Icon = cat.icon;

          return (
            <div
              key={cat.id}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200/90 hover:border-black transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${cat.accentBg} ${cat.accentColor} flex items-center justify-center shrink-0`}>
                    <Icon size={19} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-neutral-900 group-hover:text-black transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-sans mt-0.5 line-clamp-1">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans transition-all ${
                        tech.isPrimary
                          ? 'bg-neutral-900 text-white font-semibold shadow-2xs hover:bg-black'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 font-medium'
                      }`}
                    >
                      {tech.isPrimary && (
                        <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                      )}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>{cat.technologies.length} TECHNOLOGIES</span>
                <span className="group-hover:text-neutral-900 transition-colors">PRODUCTION READY</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
