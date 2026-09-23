import React, { Suspense, Component, type ErrorInfo, type ReactNode } from 'react';

import { Canvas } from '@react-three/fiber';
import { useExhibition } from '../../context/ExhibitionContext';

interface WebGLErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface WebGLErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<WebGLErrorBoundaryProps, WebGLErrorBoundaryState> {
  constructor(props: WebGLErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): WebGLErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL / R3F Canvas Error caught gracefully:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-[#F4F0E8] border border-[#DDD7CB] rounded-2xl p-6 text-center">
          <div className="max-w-xs">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#EAE5DB] flex items-center justify-center text-[#C84B28] font-bold font-mono-tag">
              3D
            </div>
            <p className="text-xs font-mono-tag text-[#6E6A63] uppercase tracking-wider mb-1">Architectural Exhibition Render</p>
            <p className="text-xs text-[#989287]">Hardware acceleration fallback active. Interactive exhibition data remains fully accessible.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

interface SpatialSceneProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  enableStudioLights?: boolean;
}

export const SpatialScene: React.FC<SpatialSceneProps> = ({
  children,
  className = 'w-full h-full',
  cameraPosition = [0, 0, 5],
  fov = 42,
  enableStudioLights = true,
}) => {
  const { reducedMotion } = useExhibition();

  return (
    <div className={`relative ${className}`}>
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: cameraPosition, fov }}
          dpr={[1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          frameloop={reducedMotion ? 'demand' : 'always'}
          className="w-full h-full pointer-events-auto"
        >
          {enableStudioLights && (
            <>
              {/* Daylight Studio Lighting Setup */}
              <ambientLight intensity={0.75} color="#FAF8F5" />
              <directionalLight
                position={[5, 8, 5]}
                intensity={1.1}
                color="#FFFDF7"
                castShadow
              />
              <directionalLight
                position={[-5, 4, -4]}
                intensity={0.5}
                color="#EAE5DB"
              />
              <pointLight position={[0, -3, 3]} intensity={0.3} color="#FAF8F5" />
            </>
          )}
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
