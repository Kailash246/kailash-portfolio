import React, { useState, useMemo } from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import type { CertificationCategory } from '../../types/exhibition';
import { 
  ExternalLink, 
  Search, 
  X, 
  ShieldCheck, 
  Check, 
  Copy,
  Sparkles
} from 'lucide-react';

// Official Company & University Vector Logos
const IssuerBrandLogo: React.FC<{ issuer: string; className?: string }> = ({ issuer, className = "w-7 h-7" }) => {
  switch (issuer) {
    case 'Amazon':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect width="32" height="32" rx="8" fill="#131921" />
          {/* AWS / Amazon Smile Curve */}
          <path
            d="M7 21c4.6 2.5 10.8 2.5 16 0 .4-.2.8.2.5.6-5.8 3.2-12.2 3.2-17 0-.3-.3 0-.7.5-.6z"
            fill="#FF9900"
          />
          <path
            d="M23.8 20.6c-.4-.5-2.5-.2-3.4-.1-.3 0-.4-.3-.1-.5 1.7-1.1 4.5-.8 4.8-.4.3.4-.1 3.2-1.7 4.5-.2.2-.5.1-.4-.2.4-.9 1.2-2.8.8-3.3z"
            fill="#FF9900"
          />
          <text x="16" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="system-ui, sans-serif" fontWeight="900" letterSpacing="0.8">
            aws
          </text>
        </svg>
      );

    case 'IBM':
      return (
        <svg viewBox="0 0 34 20" className={className}>
          <rect width="34" height="20" rx="6" fill="#F4F6F8" />
          <g fill="#0F62FE">
            {/* 8-Bar IBM Paul Rand Logo */}
            {/* I */}
            <rect x="4" y="2.5" width="5" height="1.2" />
            <rect x="4" y="4.5" width="5" height="1.2" />
            <rect x="5.7" y="6.5" width="1.6" height="1.2" />
            <rect x="5.7" y="8.5" width="1.6" height="1.2" />
            <rect x="5.7" y="10.5" width="1.6" height="1.2" />
            <rect x="5.7" y="12.5" width="1.6" height="1.2" />
            <rect x="4" y="14.5" width="5" height="1.2" />
            <rect x="4" y="16.5" width="5" height="1.2" />
            {/* B */}
            <rect x="11" y="2.5" width="6.5" height="1.2" />
            <rect x="11" y="4.5" width="7.5" height="1.2" />
            <rect x="11" y="6.5" width="1.6" height="1.2" />
            <rect x="17" y="6.5" width="2" height="1.2" />
            <rect x="11" y="8.5" width="7.5" height="1.2" />
            <rect x="11" y="10.5" width="1.6" height="1.2" />
            <rect x="17.4" y="10.5" width="2.2" height="1.2" />
            <rect x="11" y="12.5" width="1.6" height="1.2" />
            <rect x="17.4" y="12.5" width="2.2" height="1.2" />
            <rect x="11" y="14.5" width="7.5" height="1.2" />
            <rect x="11" y="16.5" width="6.5" height="1.2" />
            {/* M */}
            <rect x="21" y="2.5" width="2" height="1.2" />
            <rect x="24" y="2.5" width="1.8" height="1.2" />
            <rect x="27" y="2.5" width="2" height="1.2" />
            <rect x="21" y="4.5" width="2" height="1.2" />
            <rect x="23.6" y="4.5" width="2.6" height="1.2" />
            <rect x="27" y="4.5" width="2" height="1.2" />
            <rect x="21" y="6.5" width="2" height="1.2" />
            <rect x="24.2" y="6.5" width="1.4" height="1.2" />
            <rect x="27" y="6.5" width="2" height="1.2" />
            <rect x="21" y="8.5" width="2" height="1.2" />
            <rect x="27" y="8.5" width="2" height="1.2" />
            <rect x="21" y="10.5" width="2" height="1.2" />
            <rect x="27" y="10.5" width="2" height="1.2" />
            <rect x="21" y="12.5" width="2" height="1.2" />
            <rect x="27" y="12.5" width="2" height="1.2" />
            <rect x="21" y="14.5" width="2" height="1.2" />
            <rect x="27" y="14.5" width="2" height="1.2" />
            <rect x="21" y="16.5" width="2" height="1.2" />
            <rect x="27" y="16.5" width="2" height="1.2" />
          </g>
        </svg>
      );

    case 'Meta':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#F0F4FF" />
          <defs>
            <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0064E0" />
              <stop offset="50%" stopColor="#0082FB" />
              <stop offset="100%" stopColor="#0081FB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#metaGrad)"
            d="M6.915 5.5c-1.6 0-3 .9-3.9 2.4C2.4 9.5 2 11.5 2 13.5c0 .6.05 1.1.16 1.6.5 1.3 1.5 2.1 3 2.1 1.2 0 2.2-.6 3.2-2 .6-.8.9-1.3 2.1-3.5l.6-1.1c.1.1.2.2.3.3l1.7 2.9c.6 1 1.3 2 2 2.6.8.8 1.6 1 2.5 1 .9 0 1.5-.3 2-.7.4-.7.7-1.7.7-3 0-2.2-.5-4.3-1.6-6-1-1.5-2.4-2.3-3.8-2.3-.8 0-1.7.4-2.4 1-.5.5-1 1-1.5 1.6-.5-.7-1.1-1.2-1.6-1.6-.9-.8-1.8-1-2.8-1zm8.2 1.6c.9 0 1.7.6 2.4 1.6.9 1.4 1.3 3.3 1.3 5.1 0 1.2-.3 2.3-1.4 2.3-.5 0-.8-.2-1.3-.8-.4-.5-1.1-1.5-2.3-3.5l-.5-.8c.1-.1.1-.2.2-.3.9-1.3 1.7-2.1 2.6-2.1zm-8.2.5c1 0 1.6.6 2.1 1.1.2.3.6.7 1 1.3l-.8 1.2c-.6.9-1.5 2.4-2.3 3.5-.9 1.3-1.4 1.4-2 1.4-.4 0-.8-.2-1.1-.6-.2-.3-.4-.9-.4-1.6 0-1.8.5-3.6 1.3-4.8.4-.5.8-1 1.2-1.2.3-.2.7-.3 1-.3z"
          />
        </svg>
      );

    case 'Microsoft':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#F8F9FA" />
          <g transform="translate(3.5, 3.5)">
            <rect x="0" y="0" width="7.8" height="7.8" fill="#F25022" rx="0.8" />
            <rect x="9.2" y="0" width="7.8" height="7.8" fill="#7FBA00" rx="0.8" />
            <rect x="0" y="9.2" width="7.8" height="7.8" fill="#00A4EF" rx="0.8" />
            <rect x="9.2" y="9.2" width="7.8" height="7.8" fill="#FFB900" rx="0.8" />
          </g>
        </svg>
      );

    case 'Cisco':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#F0F8FF" />
          <path
            fill="#049FD9"
            d="M21 11.5a.5.5 0 001 0V10a.5.5 0 00-1 0v1.5M18.5 11.5a.5.5 0 001 0V8.5a.5.5 0 00-1 0v3M16 12.5a.5.5 0 001 0V7a.5.5 0 00-1 0v5.5M13.5 11.5a.5.5 0 001 0V8.5a.5.5 0 00-1 0v3M11 11.5a.5.5 0 001 0V10a.5.5 0 00-1 0v1.5M8.5 11.5a.5.5 0 001 0V8.5a.5.5 0 00-1 0v3M6 12.5a.5.5 0 001 0V7a.5.5 0 00-1 0v5.5M3.5 11.5a.5.5 0 001 0V8.5a.5.5 0 00-1 0v3M1 11.5a.5.5 0 001 0V10a.5.5 0 00-1 0v1.5"
          />
          <text x="12" y="17.5" textAnchor="middle" fill="#049FD9" fontSize="4.5" fontFamily="system-ui, sans-serif" fontWeight="900" letterSpacing="0.8">
            CISCO
          </text>
        </svg>
      );

    case 'DeepLearning.AI':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#FFF5F5" />
          <path d="M12 4L3 8.5L12 13L21 8.5L12 4Z" fill="#FF6F61" />
          <path d="M3 12.5L12 17L21 12.5" stroke="#FF6F61" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="12" cy="12.5" r="1.5" fill="#C53030" />
        </svg>
      );

    case 'University of Colorado Boulder':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#000000" />
          <path d="M6 6h4v2H8v8h2v2H6V6zm6 0h4v8a2 2 0 01-2 2h-2v-2h2V8h-2V6z" fill="#CFB87C" />
          <text x="18" y="8" fill="#CFB87C" fontSize="4" fontWeight="bold">CU</text>
        </svg>
      );

    case 'University of Illinois':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect width="24" height="24" rx="6" fill="#13294B" />
          {/* Famous Block I in Illini Orange */}
          <path d="M7 4h10v3.2h-3v5.6h3V16H7v-3.2h3V7.2H7V4z" fill="#E84A27" />
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-xs`}>
          {issuer.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};

const CATEGORIES: Array<{ id: CertificationCategory; label: string }> = [
  { id: 'ALL', label: 'All (10)' },
  { id: 'CLOUD & WEB', label: 'Cloud & Web' },
  { id: 'AI & NLP', label: 'AI & NLP' },
  { id: 'DATA & DATABASES', label: 'Data & SQL' },
  { id: 'SYSTEMS & SECURITY', label: 'Systems & Security' },
];

export const CertificationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CertificationCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered certifications
  const filteredCerts = useMemo(() => {
    return CERTIFICATIONS_DATA.filter((cert) => {
      const matchesCategory = selectedCategory === 'ALL' || cert.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const [showAll, setShowAll] = useState(false);

  const displayedCerts = useMemo(() => {
    if (showAll || searchQuery || selectedCategory !== 'ALL') {
      return filteredCerts;
    }
    return filteredCerts.slice(0, 6);
  }, [filteredCerts, showAll, searchQuery, selectedCategory]);

  const handleCopy = (e: React.MouseEvent, url: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section
      id="certifications"
      aria-label="Section 04: Accredited Certifications"
      className="py-12 sm:py-20 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="04"
        catalogNumber="SECTION // 04"
        title="ACCREDITED CERTIFICATIONS"
        subtitle="Verified credentials from Amazon, IBM, Meta, Microsoft, Cisco & Premier Universities."
        dimensionLabel="VERIFIED CREDENTIALS"
      />

      {/* Sleek, Minimalist Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 py-2.5 sm:py-3 px-3.5 sm:px-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-5 sm:mb-6 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-bold text-neutral-900 text-[11px] sm:text-xs">10 VERIFIED INDUSTRY CREDENTIALS</span>
          <span className="hidden sm:inline text-neutral-400">•</span>
          <span className="hidden sm:inline text-neutral-600">Amazon, IBM, Meta, Cisco, MSFT</span>
        </div>
        <span className="text-emerald-700 font-semibold bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[10px] sm:text-xs shrink-0">
          ✓ Coursera Registry
        </span>
      </div>

      {/* Sleek Controls: Compact Filter Tabs & Live Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Compact Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search credential or skill..."
            className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-neutral-100/90 border border-neutral-200 text-xs font-sans placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Small & Visual Credential Cards Grid (2-Column Compact Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        {displayedCerts.map((cert) => {
          const isCopied = copiedId === cert.id;

          return (
            <div
              key={cert.id}
              className="group relative rounded-2xl p-3.5 sm:p-4 bg-white border border-neutral-200/90 hover:border-black transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 sm:gap-3.5">
                {/* Official Vector Company Logo */}
                <div className="shrink-0 pt-0.5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-50/80 border border-neutral-200/70 p-1.5 flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform">
                    <IssuerBrandLogo issuer={cert.issuer} className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="flex-1 min-w-0">
                  {/* Top Line: Issuer Tag & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono">
                      <span className="font-bold text-neutral-900 uppercase">
                        {cert.issuer}
                      </span>
                      <span className="text-neutral-400">•</span>
                      <span className="text-neutral-500 uppercase">
                        {cert.category}
                      </span>
                    </div>

                    {/* Verified Pill */}
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-600 shrink-0">
                      <ShieldCheck size={12} className="text-emerald-500" />
                      Verified
                    </span>
                  </div>

                  {/* Clean Certificate Title */}
                  <h3 className="text-xs sm:text-base font-sans font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-black transition-colors">
                    {cert.title}
                  </h3>

                  {/* Minimalist Skill Chips (No unwanted long paragraph text!) */}
                  <div className="flex flex-wrap items-center gap-1 mt-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-mono text-neutral-600 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-mono text-neutral-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Quick-Action Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 sm:pt-3 mt-3 border-t border-neutral-100 text-xs">
                {/* Copy Link Action */}
                <button
                  onClick={(e) => handleCopy(e, cert.verificationUrl, cert.id)}
                  title="Copy verification link"
                  className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 hover:text-black transition-colors cursor-pointer min-h-[36px] py-1"
                >
                  {isCopied ? (
                    <>
                      <Check size={11} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                {/* Direct High-Contrast One-Click Verification Button */}
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[36px] rounded-xl bg-black hover:bg-neutral-800 text-white font-sans font-bold text-[11px] transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Verify on Coursera</span>
                  <ExternalLink size={11} className="text-emerald-400" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expand / Collapse Toggle for Certifications */}
      {!searchQuery && selectedCategory === 'ALL' && filteredCerts.length > 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-black text-white font-sans font-bold text-xs tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>{showAll ? 'Show Fewer Credentials ↑' : `View All 10 Certifications (${filteredCerts.length}) ↓`}</span>
          </button>
        </div>
      )}

      {/* Instant Feedback if search yields no results */}
      {filteredCerts.length === 0 && (
        <div className="py-12 text-center text-neutral-500 font-mono text-xs">
          <Sparkles size={18} className="mx-auto mb-2 text-amber-500" />
          No certificates matching "{searchQuery}". Try searching for "Cloud", "IBM", "Python", or "SQL".
        </div>
      )}
    </section>
  );
};
