import React, { useRef, useEffect } from 'react';
import EyeFollowButton from './EyeFollowButton';

export default function ServiceCTASection({
  titlePrefix = 'Have a Project',
  titleHighlight = "You're Planning?",
  description,
  buttonText = "Let's Talk About Your Project",
  onContact,
  className = '',
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback retry on user interaction or visibility
      });
    }

    // Ensure playback resumes when tab or page becomes visible
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
    <section
      className={`relative p-10 sm:p-14 lg:p-16 rounded-3xl border border-brand-red/25 hover:border-brand-red/50 shadow-[0_0_30px_-8px_rgba(215,25,32,0.20)] hover:shadow-[0_0_45px_-5px_rgba(215,25,32,0.35)] backdrop-blur-2xl text-center space-y-6 overflow-hidden group transition-all duration-700 ${className}`}
    >
      {/* Luminous Red Ambient Border Glow Effect */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-brand-red/35 via-brand-red/15 to-brand-red/35 opacity-40 group-hover:opacity-65 blur-[2px] transition-all duration-700 pointer-events-none" />
      <div className="absolute -inset-[2px] rounded-3xl bg-brand-red/20 blur-xl opacity-25 group-hover:opacity-45 transition-all duration-700 pointer-events-none" />

      {/* Background Video Container - Exact Fit, No Unwanted Scaling or Cropping */}
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
          <source src="/videos/cta-bg.webm" type="video/webm" />
          <source src="/videos/cta-bg.mp4" type="video/mp4" />
          <source src="/videos/CTA Background.mp4" type="video/mp4" />
        </video>

        {/* Soft, minimal vignette for optimal typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="max-w-2xl mx-auto space-y-5 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          <span className="text-white">{titlePrefix}</span>{' '}
          <span className="text-brand-red">{titleHighlight}</span>
        </h2>

        {description && (
          <p className="text-sm sm:text-base text-[#9CA3AF] font-sans leading-relaxed max-w-xl mx-auto drop-shadow-md">
            {description}
          </p>
        )}

        <div className="pt-2 flex justify-center">
          <EyeFollowButton
            onClick={onContact}
            size="md"
            icon="none"
          >
            {buttonText}
          </EyeFollowButton>
        </div>
      </div>
    </section>
  );
}
