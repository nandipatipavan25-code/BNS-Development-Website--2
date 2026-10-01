import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import PremiumGlassButton from './PremiumGlassButton';

export default function HouseCTA({
  onStartProject,
  bgClassName = "bg-[#07080A]",
  badge = null,
  title = "Ready to Talk About",
  highlight = "Your Project?",
  description = "Whether you're evaluating an opportunity or preparing to begin development, BNS Development is ready to understand your goals and help move your project forward.",
  buttonText = "Have a Project in Mind?"
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
      <ScrollReveal direction="up" distance={30} delay={0.1}>
        <div className="relative group">
          {/* Luminous Red Ambient Border Glow Effect - Refined & Subtle */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-brand-red/35 via-brand-red/15 to-brand-red/35 opacity-40 group-hover:opacity-65 blur-[2px] transition-all duration-700 pointer-events-none" />
          <div className="absolute -inset-[2px] rounded-3xl bg-brand-red/20 blur-xl opacity-25 group-hover:opacity-45 transition-all duration-700 pointer-events-none" />

          {/* Outer Frame */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative rounded-3xl overflow-hidden border border-brand-red/20 group-hover:border-brand-red/45 shadow-[0_0_30px_-8px_rgba(215,25,32,0.20)] group-hover:shadow-[0_0_45px_-5px_rgba(215,25,32,0.35)] transition-all duration-700 ${bgClassName}`}
          >
            {/* Background CTA Video - Perfectly Fit, No Unwanted Cropping */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#07080A]">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline="true"
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                className="w-full h-full object-cover object-center pointer-events-none brightness-105 contrast-100"
                style={{ opacity: 1 }}
                onEnded={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
              >
                <source src="/videos/CTA Background.webm" type="video/webm" />
                <source src="/videos/cta-bg.webm" type="video/webm" />
                <source src="/videos/cta-bg.mp4" type="video/mp4" />
                <source src="/videos/CTA Background.mp4" type="video/mp4" />
              </video>
              {/* 20% Black Layer Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Soft, minimal vignette for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none" />
            </div>

            {/* Foreground CTA Content Centered inside the Laser Frame */}
            <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-center flex flex-col items-center justify-center min-h-[460px] sm:min-h-[540px]">
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[38px] section-heading-title font-display font-semibold text-brand-heading tracking-tight leading-[1.15] max-w-4xl mx-auto">
                {title}{' '}
                {highlight && (
                  <span className="text-brand-red">
                    {highlight}
                  </span>
                )}
              </h2>

              {/* Sub-text Narrative */}
              {description && (
                <div className="mt-4 sm:mt-6 max-w-2xl mx-auto">
                  <p className="text-sm sm:text-base lg:text-lg text-[#9CA3AF] font-sans leading-relaxed text-center">
                    {description}
                  </p>
                </div>
              )}

              {/* Interactive Premium Fluid Glass CTA Button */}
              <div className="mt-8 sm:mt-10">
                <PremiumGlassButton
                  onClick={onStartProject}
                  size="md"
                  baseColor="#000000"
                  glassColor="#D9D9D9"
                  hoverSpeed={0.7}
                  textColor="#999999"
                >
                  {buttonText}
                </PremiumGlassButton>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
