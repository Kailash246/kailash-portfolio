import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { ExhibitionRoomId, ProjectData, ViewMode } from '../types/exhibition';

import { PROJECTS_DATA } from '../data/portfolioData';

interface ExhibitionContextType {
  activeRoom: ExhibitionRoomId;
  setActiveRoom: (room: ExhibitionRoomId) => void;
  selectedProject: ProjectData | null;
  openProjectCaseStudy: (projectId: string) => void;
  closeProjectCaseStudy: () => void;
  hoveredSkill: string | null;
  setHoveredSkill: (skillId: string | null) => void;
  selectedSkill: string | null;
  setSelectedSkill: (skillId: string | null) => void;
  reducedMotion: boolean;
  setReducedMotion: (enabled: boolean) => void;
  toggleReducedMotion: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  scrollToRoom: (roomId: ExhibitionRoomId) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

const ExhibitionContext = createContext<ExhibitionContextType | undefined>(undefined);

export const ExhibitionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeRoom, setActiveRoom] = useState<ExhibitionRoomId>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  
  // Detect system reduced motion preference
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Listen to escape key to close case study modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const openProjectCaseStudy = useCallback((projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeProjectCaseStudy = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  }, []);

  const toggleReducedMotion = useCallback(() => {
    setReducedMotion((prev) => !prev);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_view_mode');
      if (saved === 'quick' || saved === 'full') {
        return saved;
      }
    }
    return 'full';
  });

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_view_mode', mode);
    }
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewMode(viewMode === 'full' ? 'quick' : 'full');
  }, [viewMode, setViewMode]);

  const scrollToRoom = useCallback((roomId: ExhibitionRoomId) => {
    const targetElement = document.getElementById(roomId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      setActiveRoom(roomId);
    }
  }, [reducedMotion]);

  return (
    <ExhibitionContext.Provider
      value={{
        activeRoom,
        setActiveRoom,
        selectedProject,
        openProjectCaseStudy,
        closeProjectCaseStudy,
        hoveredSkill,
        setHoveredSkill,
        selectedSkill,
        setSelectedSkill,
        reducedMotion,
        setReducedMotion,
        toggleReducedMotion,
        soundEnabled,
        toggleSound,
        scrollToRoom,
        viewMode,
        setViewMode,
        toggleViewMode,
      }}
    >
      {children}
    </ExhibitionContext.Provider>
  );
};

export const useExhibition = () => {
  const context = useContext(ExhibitionContext);
  if (!context) {
    throw new Error('useExhibition must be used within an ExhibitionProvider');
  }
  return context;
};
