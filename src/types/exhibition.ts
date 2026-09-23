export type ExhibitionRoomId = 
  | 'hero'
  | 'about'
  | 'expertise'
  | 'projects'
  | 'certifications'
  | 'achievements'
  | 'journey'
  | 'philosophy'
  | 'contact';

export type CertificationCategory = 
  | 'ALL'
  | 'CLOUD & WEB'
  | 'AI & NLP'
  | 'DATA & DATABASES'
  | 'SYSTEMS & SECURITY';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  category: 'CLOUD & WEB' | 'AI & NLP' | 'DATA & DATABASES' | 'SYSTEMS & SECURITY';
  verificationUrl: string;
  credentialId: string;
  skills: string[];
  brandColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  platform: string;
  description: string;
}

export interface ExhibitionRoom {
  id: ExhibitionRoomId;
  index: string;
  catalogNumber: string;
  title: string;
  subtitle: string;
  dimensionLabel: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  accentColor: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  status: string;
  architectureHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type SkillCategory = 
  | 'PROGRAMMING' 
  | 'WEB DEVELOPMENT' 
  | 'AI / NLP' 
  | 'DATA' 
  | 'TOOLS';

export interface SkillNode {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  relatedSkills: string[];
  connectedProjects: string[]; // project IDs
  position: [number, number, number]; // 3D coordinates in information sculpture
}

export interface AchievementItem {
  id: string;
  rank: '1st' | '2nd';
  rankLabel: string;
  title: string;
  institution: string;
  category: string;
  discipline?: string;
  highlight?: string;
  year?: string;
  certificateUrl: string;
  certificateSource: 'Google Drive';
  brandColor: string;
  accentGradient: string;
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  description?: string;
}

export interface JourneyMilestone {
  stage: string;
  phase: string;
  period: string;
  role: string;
  institution: string;
  narrative: string;
  keyLeap: string;
  disciplines: string[];
}
