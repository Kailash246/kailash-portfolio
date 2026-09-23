import React, { useState } from 'react';
import { RoomHeader } from '../layout/RoomHeader';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Web3Forms Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  // Reset status feedback as soon as the user starts typing again
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
    setter(e.target.value);
  };

  // Handle Form Submission to Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent accidental double submission
    if (isSubmitting) return;

    // Spam honeypot check
    const botcheckInput = e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement | null;
    if (botcheckInput?.checked) return;

    // Reset status
    setStatus({ type: null, message: '' });

    // Validate Required Fields
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }

    if (!trimmedEmail) {
      setStatus({ type: 'error', message: 'Please enter your email address.' });
      return;
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!trimmedSubject) {
      setStatus({ type: 'error', message: 'Please enter a subject.' });
      return;
    }

    if (!trimmedMessage) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'Web3Forms access key not found. Please check VITE_WEB3FORMS_ACCESS_KEY.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: trimmedName,
          email: trimmedEmail,
          subject: `[Portfolio Contact] ${trimmedSubject}`,
          message: trimmedMessage,
          from_name: 'Kailash Portfolio',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully.',
        });
        // Clear form after successful submission
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
      className="py-12 sm:py-28 px-3 sm:px-8 max-w-7xl mx-auto border-t border-neutral-100"
    >
      <RoomHeader
        index="08"
        catalogNumber="SECTION // 08"
        title="LET'S CONNECT"
        subtitle="Open for developer internships, technical co-op roles, and engineering collaborations."
        dimensionLabel="DIRECT INQUIRY"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Direct Invitation Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-4 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-mono text-neutral-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVELY SEEKING INTERNSHIPS</span>
            </div>

            <h3 className="text-xl sm:text-4xl font-sans font-black text-[#111111] tracking-tight leading-tight">
              LET'S BUILD SOMETHING TOGETHER.
            </h3>

            <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed max-w-lg">
              Have an internship opportunity, a project to architect, or an engineering role to discuss? Send a direct message or reach out via email, phone, or verified profiles below.
            </p>

            {/* Functional Web3Forms Contact Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5 pt-2">
              {/* Spam Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block"
                  >
                    YOUR NAME <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange(setName)}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-3xs disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block"
                  >
                    EMAIL ADDRESS <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    placeholder="e.g. sarah@company.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-3xs disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block"
                >
                  SUBJECT <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={handleInputChange(setSubject)}
                  placeholder="e.g. Software Engineering Internship Inquiry"
                  required
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-3xs disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block"
                >
                  MESSAGE <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={handleInputChange(setMessage)}
                  rows={4}
                  placeholder="Tell me about your team, the opportunity, or what you'd like to collaborate on..."
                  required
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-xs sm:text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all shadow-3xs disabled:opacity-60 disabled:cursor-not-allowed resize-none"
                />
              </div>

              {/* Inline Status Message */}
              {status.type === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-mono flex items-center gap-2.5 transition-all shadow-3xs"
                >
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span className="font-medium">{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm font-mono flex items-center gap-2.5 transition-all shadow-3xs"
                >
                  <AlertCircle size={16} className="text-rose-600 shrink-0" />
                  <span className="font-medium">{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-black hover:bg-neutral-800 disabled:bg-neutral-600 text-white text-xs sm:text-sm font-mono font-medium transition-all flex items-center justify-center gap-2 shadow-3xs cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={15} className="animate-spin text-white shrink-0" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={13} className="shrink-0" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Separator to Direct Contact Cards */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <div className="h-px bg-neutral-200 flex-1" />
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  OR REACH OUT DIRECTLY
                </span>
                <div className="h-px bg-neutral-200 flex-1" />
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-1 sm:pt-2">
              {/* Personal Email */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-3xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shrink-0 text-sm">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                      PERSONAL EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] break-all block">
                      {PERSONAL_INFO.socialLinks.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.socialLinks.email, 'personalEmail')}
                    className="p-2 min-h-[36px] min-w-[36px] rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-all cursor-pointer flex items-center justify-center"
                    title="Copy Email"
                  >
                    {copiedKey === 'personalEmail' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.socialLinks.email}`}
                    className="px-3.5 py-1.5 min-h-[36px] rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-mono transition-all flex items-center gap-1 shadow-3xs cursor-pointer"
                  >
                    <span>Send</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* University Academic Email */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-3xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-neutral-800 text-white flex items-center justify-center shrink-0 text-sm">
                    <GraduationCap size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                      ALLIANCE UNIVERSITY ACADEMIC EMAIL
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] break-all block">
                      {PERSONAL_INFO.socialLinks.academicEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.socialLinks.academicEmail, 'academicEmail')}
                    className="p-2 min-h-[36px] min-w-[36px] rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-all cursor-pointer flex items-center justify-center"
                    title="Copy Academic Email"
                  >
                    {copiedKey === 'academicEmail' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.socialLinks.academicEmail}`}
                    className="px-3.5 py-1.5 min-h-[36px] rounded-lg bg-neutral-900 hover:bg-black text-white text-xs font-mono transition-all flex items-center gap-1 shadow-3xs cursor-pointer"
                  >
                    <span>Send</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-3xs">
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

                <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 min-h-[36px] min-w-[36px] rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-mono transition-all cursor-pointer flex items-center justify-center"
                    title="Copy Phone Number"
                  >
                    {copiedKey === 'phone' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="px-3.5 py-1.5 min-h-[36px] rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono transition-all flex items-center gap-1 shadow-3xs cursor-pointer"
                  >
                    <span>Call</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Time Indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-neutral-500 pt-2 border-t border-neutral-200/80">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-black shrink-0" />
                <span>BANGALORE, KARNATAKA, INDIA (IST)</span>
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
              className={`p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200 transition-all block group shadow-3xs hover:shadow-md ${profile.color}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span className="text-2xl shrink-0">{profile.icon}</span>
                  <div className="min-w-0">
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase block">
                      {profile.badge}
                    </span>
                    <h4 className="text-sm font-sans font-bold text-neutral-900 group-hover:text-black">
                      {profile.name}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-500 block truncate">
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
