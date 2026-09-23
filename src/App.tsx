import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ExhibitionProvider, useExhibition } from './context/ExhibitionContext';
import { ExhibitionNav } from './components/layout/ExhibitionNav';
import { ExhibitionFooter } from './components/layout/ExhibitionFooter';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { JourneySection } from './components/sections/JourneySection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { ContactSection } from './components/sections/ContactSection';
import type { ExhibitionRoomId } from './types/exhibition';



const ExhibitionContent: React.FC = () => {
  const { setActiveRoom, reducedMotion, viewMode } = useExhibition();

  // Initialize Lenis smooth kinetic scrolling
  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, [reducedMotion]);

  // Section Observer to synchronize activeRoom in nav
  useEffect(() => {
    const fullRoomIds: ExhibitionRoomId[] = [
      'hero',
      'about',
      'projects',
      'expertise',
      'certifications',
      'achievements',
      'journey',
      'philosophy',
      'contact',
    ];

    const quickRoomIds: ExhibitionRoomId[] = [
      'hero',
      'about',
      'projects',
      'expertise',
      'achievements',
      'contact',
    ];

    const roomIds = viewMode === 'quick' ? quickRoomIds : fullRoomIds;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveRoom(entry.target.id as ExhibitionRoomId);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    roomIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveRoom, viewMode]);

  return (
    <div className="relative min-h-screen bg-white text-[#111111] antialiased selection:bg-black selection:text-white">
      {/* Floating Spatial Navigation */}
      <ExhibitionNav />

      {/* Main Exhibition Spatial Pathway */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
        <CertificationsSection />
        <AchievementsSection />
        <JourneySection />
        <PhilosophySection />
        <ContactSection />
      </main>

      {/* Exhibition Colophon Footer */}
      <ExhibitionFooter />
    </div>
  );
};

export function App() {
  return (
    <ExhibitionProvider>
      <ExhibitionContent />
    </ExhibitionProvider>
  );
}

export default App;
