import React, { useState, useMemo, useEffect } from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import type { AchievementItem } from '../../types/exhibition';
import { 
  Trophy, 
  Medal, 
  ExternalLink, 
  Search, 
  X, 
  ShieldCheck, 
  Check, 
  Copy, 
  Sparkles, 
  Building2, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useExhibition } from '../../context/ExhibitionContext';

// Custom Artistic Trophy Vector Watermark Illustration for Card Background
const TrophyBackgroundIllustration: React.FC<{ isGold: boolean; className?: string }> = ({ isGold, className = "" }) => {
  if (isGold) {
    return (
      <svg
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldCupGrad" x1="20%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#D97706" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B45309" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Radial Glow Halo */}
        <circle cx="70" cy="65" r="55" fill="url(#goldGlow)" />

        {/* Decorative Rays */}
        <path d="M70 12v10M105 27l-7 7M120 62h-10M105 97l-7-7M35 27l7 7M20 62h10M35 97l7-7" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />

        {/* Left Handle */}
        <path
          d="M44 42C28 42 22 54 22 66s10 24 24 24"
          stroke="#F59E0B"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right Handle */}
        <path
          d="M96 42c16 0 22 12 22 24s-10 24-24 24"
          stroke="#F59E0B"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Trophy Cup Body */}
        <path
          d="M44 32h52c0 30-12 50-26 50S44 62 44 32z"
          fill="url(#goldCupGrad)"
          stroke="#D97706"
          strokeWidth="3.5"
        />

        {/* Trophy Cup Rim */}
        <path
          d="M41 30h58a3 3 0 013 3v3H38v-3a3 3 0 013-3z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="2"
        />

        {/* Central Star Badge */}
        <path
          d="M70 44l2.8 6.2 6.8 1-5 4.8 1.2 6.7-5.8-3.2-5.8 3.2 1.2-6.7-5-4.8 6.8-1z"
          fill="#FEF08A"
          stroke="#D97706"
          strokeWidth="1.5"
        />

        {/* Stem */}
        <path
          d="M64 82h12v18H64z"
          fill="#D97706"
          stroke="#B45309"
          strokeWidth="2.5"
        />

        {/* Pedestal Base */}
        <path
          d="M52 100h36l5 18H47l5-18z"
          fill="url(#goldCupGrad)"
          stroke="#D97706"
          strokeWidth="3"
        />
        <rect x="42" y="118" width="56" height="8" rx="3" fill="#B45309" stroke="#92400E" strokeWidth="1.5" />
      </svg>
    );
  }

  // Silver / Platinum 2nd Prize Trophy
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="silverCupGrad" x1="20%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
          <stop offset="40%" stopColor="#0284C7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="silverGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Radial Glow Halo */}
      <circle cx="70" cy="65" r="55" fill="url(#silverGlow)" />

      {/* Decorative Rays */}
      <path d="M70 12v10M105 27l-7 7M120 62h-10M105 97l-7-7M35 27l7 7M20 62h10M35 97l7-7" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />

      {/* Left Handle */}
      <path
        d="M44 42C28 42 22 54 22 66s10 24 24 24"
        stroke="#0284C7"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right Handle */}
      <path
        d="M96 42c16 0 22 12 22 24s-10 24-24 24"
        stroke="#0284C7"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Trophy Cup Body */}
      <path
        d="M44 32h52c0 30-12 50-26 50S44 62 44 32z"
        fill="url(#silverCupGrad)"
        stroke="#0369A1"
        strokeWidth="3.5"
      />

      {/* Trophy Cup Rim */}
      <path
        d="M41 30h58a3 3 0 013 3v3H38v-3a3 3 0 013-3z"
        fill="#38BDF8"
        stroke="#0369A1"
        strokeWidth="2"
      />

      {/* Number 2 Crest Emblem */}
      <circle cx="70" cy="56" r="11" fill="#F0F9FF" stroke="#0284C7" strokeWidth="2" />
      <text x="70" y="60.5" textAnchor="middle" fill="#0284C7" fontSize="13" fontWeight="900" fontFamily="sans-serif">
        2
      </text>

      {/* Stem */}
      <path
        d="M64 82h12v18H64z"
        fill="#0369A1"
        stroke="#1E40AF"
        strokeWidth="2.5"
      />

      {/* Pedestal Base */}
      <path
        d="M52 100h36l5 18H47l5-18z"
        fill="url(#silverCupGrad)"
        stroke="#0369A1"
        strokeWidth="3"
      />
      <rect x="42" y="118" width="56" height="8" rx="3" fill="#1E40AF" stroke="#1E3A8A" strokeWidth="1.5" />
    </svg>
  );
};

type FilterTab = 'ALL' | '1st' | '2nd';

const FILTER_TABS: Array<{ id: FilterTab; label: string; count: number; icon: string }> = [
  { id: 'ALL', label: 'All 10 Wins', count: 10, icon: '🏆' },
  { id: '1st', label: '1st Place Champions', count: 6, icon: '🥇' },
  { id: '2nd', label: '2nd Place Victories', count: 4, icon: '🥈' },
];

export const AchievementsSection: React.FC = () => {
  const { viewMode, setViewMode } = useExhibition();
  const [activeTab, setActiveTab] = useState<FilterTab>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [inspectItem, setInspectItem] = useState<AchievementItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Filtered list
  const filteredItems = useMemo(() => {
    return ACHIEVEMENTS_DATA.filter((item) => {
      const matchesTab = activeTab === 'ALL' || item.rank === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.institution.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.discipline && item.discipline.toLowerCase().includes(q)) ||
        (item.highlight && item.highlight.toLowerCase().includes(q)) ||
        item.rankLabel.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  // Lock background scrolling and pause Lenis when certificate inspect modal is open
  useEffect(() => {
    if (!inspectItem) return;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    (window as any).__lenis?.stop();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectItem(null);
    };

    const handlePopState = () => {
      setInspectItem(null);
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      (window as any).__lenis?.start();
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [inspectItem]);

  const displayedItems = useMemo(() => {
    if (showAll || searchQuery || activeTab !== 'ALL') {
      return filteredItems;
    }
    return filteredItems.slice(0, 6);
  }, [filteredItems, showAll, searchQuery, activeTab]);

  const handleCopy = (e: React.MouseEvent, url: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  if (viewMode === 'quick') {
    const quickItems = ACHIEVEMENTS_DATA.slice(0, 4);

    return (
      <section
        id="achievements"
        aria-label="Section 05: Achievements & Milestones (Quick View)"
        className="py-10 sm:py-16 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100 transition-opacity duration-300"
      >
        <RoomHeader
          index="05"
          catalogNumber="SECTION // 05"
          title="KEY ACHIEVEMENTS & WINS"
          subtitle="Top collegiate podium wins and innovation championships."
          dimensionLabel="10 PODIUM WINS"
        />

        {/* Summary Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-amber-500/[0.08] border border-amber-300/80 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
              <Trophy size={20} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-sans font-bold text-neutral-900">
                10 Verified Collegiate Podium Victories
              </h4>
              <p className="text-xs font-mono text-neutral-600 mt-0.5">
                6x 🥇 1st Place & 4x 🥈 2nd Place across Bangalore university hackathons & ideathons
              </p>
            </div>
          </div>
          <span className="text-amber-800 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-200 text-xs font-mono shrink-0 flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-amber-600" />
            10/10 Verified Proofs
          </span>
        </div>

        {/* 4 Key Wins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {quickItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:border-black transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-100">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300/70">
                    {item.rankLabel}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.year}
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="text-base font-sans font-bold text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5">
                    {item.institution}
                  </p>
                </div>

                <p className="text-xs font-sans text-neutral-700 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400">
                  {item.category}
                </span>
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-800 hover:text-black hover:underline cursor-pointer"
                >
                  <span>View Proof Scan</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Button: View all achievements that switches to Full View */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              setViewMode('full');
              setTimeout(() => {
                const el = document.getElementById('achievements');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 60);
            }}
            className="px-6 py-3 min-h-[46px] rounded-full bg-black hover:bg-neutral-800 text-white font-mono text-xs font-bold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2.5"
          >
            <Trophy size={14} className="text-amber-400" />
            <span>View All 10 Achievements & Proofs</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="achievements"
      aria-label="Section 05: Achievements & Milestones"
      className="py-12 sm:py-20 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="05"
        catalogNumber="SECTION // 05"
        title="ACHIEVEMENTS & MILESTONES"
        subtitle="10 competitive collegiate podium wins and innovation championships with verified Google Drive proofs."
        dimensionLabel="10 PODIUM WINS"
      />

      {/* Sleek Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 py-2.5 sm:py-3 px-3.5 sm:px-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-5 sm:mb-6 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-bold text-neutral-900 text-[11px] sm:text-xs">10 VERIFIED COMPETITIVE PODIUM WINS</span>
          <span className="hidden sm:inline text-neutral-400">•</span>
          <span className="hidden sm:inline text-neutral-600">6x 🥇 1st Place & 4x 🥈 2nd Place</span>
        </div>
        <span className="text-emerald-700 font-semibold bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1 text-[10px] sm:text-xs shrink-0">
          <ShieldCheck size={13} className="text-emerald-600" />
          10/10 Google Drive Scans
        </span>
      </div>

      {/* Sleek Controls Bar: Filter Tabs & Live Instant Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-neutral-100">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer outline-none ${
                  isActive
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
              >
                <span>{tab.icon} </span>
                <span>{tab.label}</span>
                <span className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Compact Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search award, college, category..."
            className="w-full pl-9 pr-7 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-sans placeholder:text-neutral-400 outline-none focus:border-black focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Grid of 3 Award Cards with Artistic Trophy Background Illustration */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-5">
        {displayedItems.map((item) => {
          const isCopied = copiedId === item.id;
          const isGold = item.rank === '1st';

          return (
            <div
              key={item.id}
              onClick={() => setInspectItem(item)}
              className={`relative overflow-hidden p-4 sm:p-5.5 rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl flex flex-col justify-between group cursor-pointer ${
                isGold 
                  ? 'border-neutral-200 hover:border-amber-400/90 hover:shadow-amber-500/10 bg-gradient-to-br from-white via-white to-amber-50/20' 
                  : 'border-neutral-200 hover:border-sky-400/90 hover:shadow-sky-500/10 bg-gradient-to-br from-white via-white to-sky-50/20'
              }`}
            >
              {/* Artistic Trophy Watermark Illustration in Card Background */}
              <div 
                className="absolute -right-3 -top-2 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none opacity-20 group-hover:opacity-40 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out"
              >
                <TrophyBackgroundIllustration isGold={isGold} className="w-full h-full" />
              </div>

              {/* Card Foreground Content */}
              <div className="relative z-10">
                {/* Top Row: Category / Rank Badge on Left, Year & Domain on Right */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md tracking-wider uppercase whitespace-nowrap shrink-0 ${item.badgeBg} ${item.badgeText}`}>
                    <span>{isGold ? '🥇 1ST PRIZE' : '🥈 2ND PRIZE'}</span>
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400 font-medium truncate">
                    {item.year || '2024'} • {item.category}
                  </span>
                </div>

                {/* Event Title */}
                <h4 className="text-sm sm:text-lg font-sans font-bold text-neutral-900 group-hover:text-black transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Host Institution */}
                <p className="text-xs text-neutral-500 font-mono mt-1.5 mb-2.5 flex items-center gap-1.5 line-clamp-1">
                  <Building2 size={13} className="text-neutral-400 shrink-0" />
                  <span>{item.institution}</span>
                </p>

                {/* Feature Highlight Pill */}
                {item.highlight && (
                  <div className="mb-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/80 backdrop-blur-xs border border-neutral-150 text-xs font-sans text-neutral-800 flex items-center gap-2 shadow-3xs">
                    <Sparkles size={13} className={`shrink-0 ${isGold ? 'text-amber-500' : 'text-sky-500'}`} />
                    <span className="line-clamp-1 font-medium text-[11px] sm:text-xs">{item.highlight}</span>
                  </div>
                )}
              </div>

              {/* Bottom Row: Copy Proof Link + View Certificate Button */}
              <div className="relative z-10 pt-3 mt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <button
                  onClick={(e) => handleCopy(e, item.certificateUrl, item.id)}
                  title="Copy certificate verification link"
                  className="text-neutral-400 hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px] py-1"
                >
                  {isCopied ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Proof</span>
                    </>
                  )}
                </button>

                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`font-semibold text-white px-3 sm:px-3.5 py-1.5 min-h-[36px] rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-2xs hover:scale-105 active:scale-95 cursor-pointer ${
                    isGold
                      ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/20'
                      : 'bg-sky-600 hover:bg-sky-700 shadow-sky-500/20'
                  }`}
                >
                  <span>View Certificate</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expand / Collapse Toggle for 10 Podium Wins */}
      {!searchQuery && activeTab === 'ALL' && filteredItems.length > 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-black text-white font-sans font-bold text-xs tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>{showAll ? 'Show Fewer Milestones ↑' : `View All 10 Podium Wins (${filteredItems.length}) ↓`}</span>
          </button>
        </div>
      )}

      {/* Empty Search State */}
      {filteredItems.length === 0 && (
        <div className="py-12 text-center text-neutral-500 font-mono text-xs bg-neutral-50 rounded-2xl border border-dashed border-neutral-200 my-6">
          <Sparkles size={18} className="mx-auto mb-2 text-amber-500" />
          No award wins matching "{searchQuery}". Try searching for "Ideathon", "Christ", "Amity", "JSS", or "SSMRV".
        </div>
      )}

      {/* Full Certificate Proof Inspection Modal */}
      {inspectItem && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn overflow-hidden"
          onClick={() => setInspectItem(null)}
        >
          <div
            data-lenis-prevent
            className="relative w-full max-w-lg rounded-3xl bg-white text-neutral-900 border border-neutral-200 shadow-2xl p-4 sm:p-8 space-y-4 sm:space-y-5 animate-scaleUp overflow-y-auto max-h-[88dvh] overscroll-contain"
            onClick={(e) => e.stopPropagation()}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* Top Accent Strip */}
            <div 
              className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${inspectItem.accentGradient}`}
            />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 sm:gap-4 pb-3.5 sm:pb-4 border-b border-neutral-200 pt-1">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div 
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center font-sans font-black text-xl sm:text-2xl shadow-md shrink-0"
                  style={{
                    backgroundColor: `${inspectItem.brandColor}18`,
                    color: inspectItem.brandColor,
                  }}
                >
                  {inspectItem.rank === '1st' ? <Trophy size={22} className="sm:w-[26px] sm:h-[26px]" /> : <Medal size={22} className="sm:w-[26px] sm:h-[26px]" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold ${inspectItem.badgeBg} ${inspectItem.badgeText}`}>
                      {inspectItem.rankLabel}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {inspectItem.year}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-sans font-black text-black mt-1 leading-snug">
                    {inspectItem.title}
                  </h3>
                  <p className="text-xs font-sans text-neutral-600 flex items-center gap-1 mt-0.5">
                    <Building2 size={12} className="text-neutral-400" />
                    <span className="font-semibold text-neutral-800">{inspectItem.institution}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setInspectItem(null)}
                aria-label="Close Modal"
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-black transition-colors cursor-pointer shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scope / Context Description */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">
                  EVALUATION & JURY CRITERIA
                </span>
                {inspectItem.discipline && (
                  <span className="text-[10px] font-mono text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                    {inspectItem.discipline}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed">
                {inspectItem.description}
              </p>
              {inspectItem.highlight && (
                <div className="pt-2 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-sans font-semibold text-neutral-800">
                  <Sparkles size={13} className="text-amber-500 shrink-0" />
                  <span>{inspectItem.highlight}</span>
                </div>
              )}
            </div>

            {/* Official Verification Metadata Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 text-white font-mono text-xs space-y-2 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[10px] sm:text-[11px]">
                <span className="text-neutral-400">CREDENTIAL SOURCE:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Google Drive Cloud Certificate
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[10px] sm:text-[11px]">
                <span className="text-neutral-400">HOST INSTITUTION:</span>
                <span className="text-white font-bold truncate max-w-[180px]">{inspectItem.institution}</span>
              </div>
              <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="text-neutral-400">VALIDATION STATUS:</span>
                <span className="text-emerald-400 font-bold">● Authenticated Podium Victory</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href={inspectItem.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-5 min-h-[44px] rounded-2xl bg-black hover:bg-neutral-800 text-white font-sans font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Open Certificate Scan</span>
                <ExternalLink size={13} className="text-amber-400" />
              </a>

              <button
                onClick={(e) => handleCopy(e, inspectItem.certificateUrl, inspectItem.id)}
                className="w-full sm:w-auto py-2.5 sm:py-3 px-4 min-h-[44px] rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedId === inspectItem.id ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Proof Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
