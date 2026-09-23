import React, { useState } from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Phone, GraduationCap } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  const codingProfiles = [
    {
      name: 'LinkedIn',
      badge: 'PROFESSIONAL NETWORK',
      handle: 'in/kailash-kumar-5209b02a8',
      url: PERSONAL_INFO.socialLinks.linkedin,
      icon: '💼',
      color: 'hover:border-blue-500 hover:shadow-blue-500/10',
    },
    {
      name: 'GitHub',
      badge: 'OPEN SOURCE & CODE',
      handle: 'github.com/Kailash246',
      url: PERSONAL_INFO.socialLinks.github,
      icon: '🐙',
      color: 'hover:border-neutral-900 hover:shadow-neutral-900/10',
    },
    {
      name: 'LeetCode',
      badge: 'PROBLEM SOLVING / DSA',
      handle: 'leetcode.com/u/VJqFzXdprQ',
      url: PERSONAL_INFO.socialLinks.leetcode,
      icon: '🟧',
      color: 'hover:border-amber-500 hover:shadow-amber-500/10',
    },
    {
      name: 'HackerRank',
      badge: 'VERIFIED SKILL BADGES',
      handle: 'hackerrank.com/kailashkumarrea1',
      url: PERSONAL_INFO.socialLinks.hackerrank,
      icon: '🟩',
      color: 'hover:border-emerald-500 hover:shadow-emerald-500/10',
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Section 08: Let's Connect & Collaborate"
      className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="08"
        catalogNumber="SECTION // 08"
        title="LET'S CONNECT"
        subtitle="Open for developer internships, technical co-op roles, and engineering collaborations."
        dimensionLabel="DIRECT INQUIRY"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Invitation Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVELY SEEKING INTERNSHIPS</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-sans font-black text-[#111111] tracking-tight leading-tight">
              LET'S BUILD SOMETHING TOGETHER.
            </h3>

            <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed max-w-lg">
              Have an internship opportunity, a project to architect, or an engineering role to discuss? Reach out directly via email, phone, or verified coding profiles.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Personal Email */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between gap-3 shadow-3xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shrink-0 text-sm">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                      PERSONAL EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] truncate block">
                      {PERSONAL_INFO.socialLinks.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.socialLinks.email, 'personalEmail')}
                    className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-all cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedKey === 'personalEmail' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
                    className="px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-mono transition-all flex items-center gap-1 shadow-3xs cursor-pointer"
                  >
                    <span>Send</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* University Academic Email */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between gap-3 shadow-3xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 text-white flex items-center justify-center shrink-0 text-sm">
                    <GraduationCap size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                      ALLIANCE UNIVERSITY ACADEMIC EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] truncate block">
                      {PERSONAL_INFO.socialLinks.academicEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.socialLinks.academicEmail, 'academicEmail')}
                    className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-all cursor-pointer"
                    title="Copy Academic Email"
                  >
                    {copiedKey === 'academicEmail' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.socialLinks.academicEmail}`}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-black text-white text-xs font-mono transition-all flex items-center gap-1 shadow-3xs cursor-pointer"
                  >
                    <span>Send</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 flex items-center justify-between gap-3 shadow-3xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 text-sm">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                      DIRECT CALL / WHATSAPP
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] truncate block">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-all cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedKey === 'phone' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono transition-all flex items-center gap-1 shadow-3xs cursor-pointer"
                  >
                    <span>Call</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Time Indicator */}
            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-200/80">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-black" />
                BANGALORE, KARNATAKA, INDIA (IST)
              </span>
              <span>ALLIANCE UNIVERSITY CAMPUS</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Official Coding & Professional Profile Badges (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="px-1 pb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              CODING & PROFESSIONAL PROFILES
            </span>
          </div>

          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className={`p-4 rounded-2xl bg-white border border-neutral-200 transition-all block group shadow-3xs hover:shadow-md ${profile.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{profile.icon}</span>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase block">
                      {profile.badge}
                    </span>
                    <h4 className="text-sm font-sans font-bold text-neutral-900 group-hover:text-black">
                      {profile.name}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500 block">
                      {profile.handle}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black transition-colors shrink-0">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
