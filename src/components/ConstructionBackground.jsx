import React, { useRef, useEffect } from 'react';

/**
 * ConstructionBackground Component
 * Provides:
 * 1. Subtle, continuous background video playback (/videos/Home page bg video -2.mp4)
 * 2. Deep architectural dark canvas with balanced vignette
 * 3. Continuous looping across desktop, tablet, and mobile without unexpected pauses on scroll.
 */
export default function ConstructionBackground({
  showVideo = true,
  videoSrc = '/videos/home-page-background-video-2.mp4',
  videoOpacity = null
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    let isMounted = true;

    // Strict DOM properties for reliable mobile/desktop autoplay & continuous looping
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('loop', '');
    video.setAttribute('autoplay', '');

    const safePlay = () => {
      if (!video || !isMounted) return;
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Retry on first user interaction if blocked by strict browser policy
          const resumeOnInteraction = () => {
            if (video && isMounted && video.paused) {
              video.muted = true;
              video.play().catch(() => {});
            }
          };
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
        });
      }
    };

    if (video.readyState >= 1) {
      safePlay();
    } else {
      video.load();
      video.addEventListener('loadedmetadata', safePlay, { once: true });
      video.addEventListener('canplay', safePlay, { once: true });
    }

    // Seamless continuous looping handler
    const handleTimeUpdate = () => {
      if (video && video.duration > 0) {
        if (video.currentTime >= video.duration - 0.12) {
          video.currentTime = 0;
          if (video.paused) {
            safePlay();
          }
        }
      }
    };

    const handleEnded = () => {
      if (video && isMounted) {
        video.currentTime = 0;
        safePlay();
      }
    };

    const handlePause = () => {
      if (isMounted && showVideo && video && video.paused) {
        safePlay();
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && isMounted && video) {
        safePlay();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handlePause);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', safePlay);

    // Heartbeat check to guarantee seamless playback across navigation and scrolling
    const heartbeatTimer = setInterval(() => {
      if (isMounted && showVideo && video && video.paused) {
        safePlay();
      }
    }, 1200);

    safePlay();

    return () => {
      isMounted = false;
      clearInterval(heartbeatTimer);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', safePlay);
    };
  }, [showVideo, videoSrc]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#07080A]"
      aria-hidden="true"
    >
      {/* ── Background Video Layer ── */}
      {showVideo && (
        <div className="absolute inset-0 z-0 overflow-hidden transition-opacity duration-700">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            disablePictureInPicture
            style={{
              opacity: videoOpacity ?? (videoSrc.includes('contact') ? 0.20 : 0.75)
            }}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-90 scale-105 pointer-events-none transition-opacity duration-500"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            onPause={(e) => {
              if (showVideo && e.currentTarget) {
                e.currentTarget.play().catch(() => {});
              }
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            <source src="/videos/home-page-background-video-2.mp4" type="video/mp4" />
            <source src="/videos/Home page background video -2.mp4" type="video/mp4" />
            <source src="/videos/Home%20page%20background%20video%20-2.mp4" type="video/mp4" />
            <source src="/videos/bg-video.mp4" type="video/mp4" />
          </video>
          {/* Natural, balanced architectural dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080A]/70 via-[#07080A]/45 to-[#07080A]/85 pointer-events-none" />
        </div>
      )}

      {/* ── Soft Atmospheric Ambient Depth ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
