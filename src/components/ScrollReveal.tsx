import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  distance = 28,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Re-trigger reveal smoothly both when descending and when scrolling back up
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.05,
        rootMargin: '10px 0px -25px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delayMs}ms`,
        transform: isVisible ? 'translateY(0) scale(1)' : `translateY(${distance}px) scale(0.985)`,
        opacity: isVisible ? 1 : 0,
        transitionProperty: 'opacity, transform',
        transitionDuration: '850ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </div>
  );
};
