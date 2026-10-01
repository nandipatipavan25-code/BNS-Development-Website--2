import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Shield, Award, Users, HardHat, Compass,
  Layers, Home, Maximize, Building2, Building, CheckCircle2,
  ChevronRight, Play, Pause, Volume2, VolumeX, Sparkles, Plane, Ruler,
  ShoppingBag, Wrench, FileCheck2, Settings2, TrendingUp
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ProjectCarousel from '../components/ProjectCarousel';
import HouseCTA from '../components/HouseCTA';
import ScrollWordReveal from '../components/ScrollWordReveal';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterText from '../components/TypewriterText';
import PremiumGlassButton from '../components/PremiumGlassButton';
import { projectsData } from '../data/projects';

// 5 Dedicated Services matching exact user specification
const HOME_SERVICES = [
  {
    id: 'predevelopment',
    title: 'Pre-Development Services',
    desc: 'Evaluate opportunities, define project requirements, coordinate planning and address key decisions before development begins.',
    cta: 'Start With a Stronger Plan',
    image: '/images/preconstruction.jpg',
    icon: Compass,
  },
  {
    id: 'development-services',
    title: 'Development Services',
    desc: 'Experienced project oversight focused on coordination, communication, quality and keeping development moving.',
    cta: 'Explore Our Development Services',
    image: '/images/ground-up.jpg',
    icon: Building2,
  },
  {
    id: 'design-build',
    title: 'Design-Build',
    desc: 'Connect design and development through a coordinated approach that aligns scope, schedule and execution.',
    cta: 'Explore Design-Build',
    image: '/images/design-build.jpg',
    icon: Layers,
  },
  {
    id: 'residential',
    title: 'Residential Development',
    desc: 'Development support for single-family and multifamily projects.',
    cta: 'Explore Residential Development',
    image: '/images/residential.jpg',
    icon: Home,
  },
  {
    id: 'commercial',
    title: 'Commercial Development',
    desc: 'Experienced leadership for ground-up developments, commercial improvements and complex projects.',
    cta: 'Explore Commercial Development',
    image: '/images/tenant-improvements.jpg',
    icon: Maximize,
  },
];

// 11 Core Project Sectors — "Our Expertise" matching reference design exactly
const EXPERTISE_SECTORS = [
  // Row 1 (6 sectors)
  {
    id: 'single-family',
    name: 'Single-Family Residential',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'multifamily',
    name: 'Multifamily Residential',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mixed-use',
    name: 'Mixed-Use',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'condominium',
    name: 'Condominium',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },

  // Row 2 (5 sectors)
  {
    id: 'ground-up',
    name: 'Ground-Up Development',
    icon: HardHat,
    image: '/images/ground-up.jpg',
  },
  {
    id: 'building-shells',
    name: 'Building Shells',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'renovations',
    name: 'Renovations',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'land-development',
    name: 'Land Development',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    image: '/images/projects/modern-retail-showroom.png',
  },
];

const ROW_1_SECTORS = EXPERTISE_SECTORS.slice(0, 6);
const ROW_2_SECTORS = EXPERTISE_SECTORS.slice(6);

// 4 Pillars of the BNS Approach
const BNS_APPROACH = [
  {
    step: '01',
    title: 'Start Early',
    desc: 'Address the right questions before development begins.',
  },
  {
    step: '02',
    title: 'Stay Connected',
    desc: 'Keep owners, consultants, contractors and project partners aligned.',
  },
  {
    step: '03',
    title: 'Solve Problems',
    desc: 'Identify challenges, evaluate options and keep decisions moving.',
  },
  {
    step: '04',
    title: 'Stay Accountable',
    desc: 'Remain focused on the project from planning through completion.',
  },
];

export default function HomePage({ setActivePage, setSelectedProject, setSelectedService }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('loop', '');

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
          const resumeOnInteraction = () => {
            if (video && video.paused) {
              video.muted = true;
              video.play().catch(() => {});
            }
          };
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
        });
      }

      // Seamless continuous loop handler
      const handleTimeUpdate = () => {
        if (video && video.duration > 0) {
          if (video.currentTime >= video.duration - 0.15) {
            video.currentTime = 0;
            if (video.paused) {
              video.play().catch(() => {});
            }
          }
        }
      };

      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setActivePage('work-detail', `id=${project.id}`);
  };

  return (
    <div className="relative overflow-hidden text-white">
      {/* ========================================================
          1. HERO SECTION (Full-Width Cinematic Video Hero)
          ======================================================== */}
      <section className="relative w-full pt-20 sm:pt-24 pb-0 bg-transparent">
        <div className="relative w-full h-[72vh] min-h-[500px] sm:min-h-[600px] md:h-[82vh] overflow-hidden bg-[#0F1014] shadow-2xl flex items-center justify-center group">
          <video
            ref={videoRef}
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover select-none cursor-pointer"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <source src="/videos/home page.mp4" type="video/mp4" />
          </video>

          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1014] via-[#0F1014]/45 to-black/30 pointer-events-none" />

          {/* Hero Video Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 md:p-12 lg:p-14 max-w-7xl mx-auto w-full pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl sm:max-w-3xl space-y-3 sm:space-y-4 pointer-events-auto pb-4 sm:pb-6"
            >
              {/* Headline: Built on Experience. Driven by Partnership. */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-display font-semibold text-brand-heading tracking-tight leading-tight lg:leading-[50px]">
                Built on Experience.<br />
                <span className="text-brand-red">Driven by Partnership.</span>
              </h1>

              {/* Subtitle with typing animation effect on load */}
              <div className="max-w-xl sm:max-w-2xl min-h-[50px] sm:min-h-[58px]">
                <TypewriterText
                  text="BNS Development provides development services with experienced leadership from planning through completion. From residential and multifamily projects to commercial and ground-up developments, we bring practical expertise, clear communication and accountability to every project."
                  speed={16}
                  startDelay={350}
                  className="text-xs sm:text-sm md:text-[15px] text-brand-subtext font-sans leading-relaxed"
                />
              </div>

              {/* Interactive CTA: Let's Develop What's Next */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <PremiumGlassButton
                  onClick={() => setActivePage('contact')}
                  size="md"
                >
                  Let’s Develop What’s Next
                </PremiumGlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. STRATEGY & PHILOSOPHY: A Better Way to Move a Project Forward
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Section Heading & Lead text */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" delay={0.08}>
                <SectionHeading
                  tag="Strategic Execution"
                  title="A Better Way to Move a"
                  highlight="Project Forward"
                  theme="dark"
                  scaleColor="red"
                  className="mb-3 sm:mb-4"
                />
                <div className="space-y-4 text-sm sm:text-base text-[#A8A8A0] leading-relaxed font-sans">
                  <p>
                    The decisions made before development can shape the budget, timeline and outcome of a project. BNS Development gets involved early to help clients evaluate opportunities, plan effectively, coordinate requirements and move projects forward with clarity.
                  </p>
                  <p>
                    With experience across development, project management, general contracting, owner’s representation and land development, we bring a practical perspective to every stage.
                  </p>
                </div>
                <div className="pt-6">
                  <PremiumGlassButton
                    onClick={() => setActivePage('about')}
                    size="md"
                  >
                    Meet BNS Development
                  </PremiumGlassButton>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Editorial Architectural Leadership Photography Window */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" delay={0.16}>
                <div className="relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-md shadow-xl transition-all duration-500 group">
                  {/* Photo Window */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/images/home-strategic-leadership.jpg"
                      alt="BNS Development Senior Executive Leadership & Project Coordination"
                      className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                      loading="lazy"
                    />
                    {/* Soft Transparent Gradient Fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-sans font-semibold text-brand-red tracking-wider">
                      Foundational Perspective
                    </div>
                  </div>

                  {/* Editorial Quote Shelf - Transparent Glass Style */}
                  <div className="p-6 sm:p-7 space-y-3 bg-transparent border-t border-white/[0.08]">
                    <h3 className="text-lg sm:text-xl font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug">
                      Decades of Ground-Up Mastery &amp; Guidance
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A8A0] leading-relaxed font-sans italic border-l-2 border-brand-red pl-3.5">
                      "Our goal is simple: give clients a knowledgeable partner who can help move the project forward with clarity and confidence."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SERVICES: From Planning to Completion (Transparent Glass Cards)
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" delay={0.08}>
            <div className="max-w-3xl mb-12">
              <SectionHeading
                tag="Capabilities & Scope"
                title="Our"
                highlight="Services."
                description="Our services are designed to support projects at different stages, whether you are evaluating an opportunity, preparing for development or ready to build."
                theme="dark"
                scaleColor="red"
              />
            </div>
          </ScrollReveal>

          {/* 5 Services Cards Grid - Transparent Glass Style with Subtle Outline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_SERVICES.map((svc, idx) => (
              <ScrollReveal key={svc.id} delay={idx * 0.08}>
                <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-brand-red/60 rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between h-full transition-all duration-500 shadow-xl group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  
                  {/* Subtle Red Stroke Accent on Hover */}
                  <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] border border-transparent group-hover:border-brand-red/40 transition-colors duration-500 pointer-events-none z-20" />
                  
                  {/* Subtle Top Red Glow on Hover */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                  {/* Top Architectural Image */}
                  <div className="relative w-full h-[240px] sm:h-[270px] overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                    />
                    {/* Transparent Gradient Transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content & Action Button - Transparent Glass Style */}
                  <div className="px-6 sm:px-8 pb-8 pt-5 flex flex-col flex-1 justify-between relative z-10 bg-transparent">
                    <div>
                      <h3 className="text-2xl sm:text-[28px] font-display font-medium text-white tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                        {svc.title}
                      </h3>

                      <p className="text-[15px] sm:text-base text-[#9ca3af] leading-relaxed font-sans mt-3.5 mb-6">
                        {svc.desc}
                      </p>
                    </div>

                    <div>
                      <div className="w-full h-px bg-white/[0.08] mb-6 group-hover:bg-white/[0.15] transition-colors" />
                      <button
                        onClick={() => {
                          if (svc.id === 'residential') setActivePage('residential');
                          else if (svc.id === 'predevelopment') setActivePage('predevelopment');
                          else if (svc.id === 'commercial') setActivePage('tenant-improvements');
                          else if (svc.id === 'design-build') setActivePage('design-build');
                          else setActivePage('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/15 hover:border-brand-red/60 text-sm font-display font-medium transition-all duration-300 shadow-sm group/btn cursor-pointer"
                      >
                        <span>{svc.cta || 'Know More'}</span>
                        <ArrowRight className="w-4 h-4 text-[#ef4444] transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. METHODOLOGY: Our Approach (Static, Clean, Minimal)
          ======================================================== */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <ScrollReveal direction="up" delay={0.06}>
            <div className="max-w-2xl mb-14 sm:mb-16">
              {/* Eyebrow Label with Accent Dash */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-5 h-[2px] bg-brand-red" />
                <span className="text-xs sm:text-sm font-sans font-medium text-neutral-400 tracking-wider">
                  Guiding Methodology
                </span>
              </div>

              {/* Editorial Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white tracking-tight leading-[1.15]">
                Our <span className="text-brand-red">Approach.</span>
              </h2>

              {/* Subheading Text */}
              <p className="mt-3.5 text-sm sm:text-base text-[#A8A8A0] leading-relaxed font-sans max-w-lg">
                A disciplined, relationship-driven foundation<br />
                built on four essential commitments to every client.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Pillars Horizontal Strip - Static, Clean & Minimal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-0 lg:divide-x lg:divide-white/10 pt-4">
            {BNS_APPROACH.map((pillar, idx) => (
              <ScrollReveal key={pillar.step} delay={idx * 0.08} direction="up" className="h-full">
                <div className="px-4 sm:px-6 lg:px-7 xl:px-9 flex flex-col justify-between h-full group">
                  <div>
                    {/* Top Row: Red Number & Subtle Accent Dash */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xl sm:text-2xl font-mono font-bold text-brand-red tracking-wider">
                        {pillar.step}
                      </span>
                      <span className="w-8 h-[2px] bg-brand-red/80 transition-all duration-300 group-hover:w-12 group-hover:bg-brand-red" />
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-2xl sm:text-[24px] font-semibold font-display text-white group-hover:text-brand-red transition-colors mb-4 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Pillar Description with ample breathing room */}
                    <p className="text-sm sm:text-[14px] text-[#A8A8A0] leading-relaxed font-sans pr-2 sm:pr-3">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. Experience Across Projects (Transparent Glass Grid)
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-transparent">
        {/* Subtle Ambient Blueprint Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-brand-red/[0.02] rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
          {/* Section Header Matching Reference Image */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 pb-2">
              {/* Left: Red Accent Tag & GT Super 600 Main Heading */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-[2px] bg-brand-red inline-block" />
                  <span className="font-sans text-xs tracking-wider text-[#A8A8A0] font-semibold">
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold text-[#E6E6E6] tracking-tight leading-[1.15]">
                  Experience Across{' '}
                  <span className="text-brand-red">Projects</span>
                </h2>
              </div>

              {/* Middle Subtle Divider (LG screens) */}
              <div className="hidden lg:block w-[1px] h-20 bg-white/10 self-center shrink-0" />

              {/* Right: Supporting Paragraph in #A8A8A0 */}
              <div className="max-w-md lg:pb-1">
                <p className="text-sm sm:text-base text-[#A8A8A0] font-sans leading-relaxed">
                  Our experience spans residential, multifamily, commercial, hospitality, mixed-use, condominiums, retail, aviation, renovations, land development and ground-up development.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 11 Sectors Balanced Editorial Grid - Transparent Glass Style */}
          <div className="space-y-3.5 sm:space-y-4">
            {/* Row 1: 6 Columns on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {ROW_1_SECTORS.map((sector, idx) => {
                const IconComp = sector.icon;
                return (
                  <ScrollReveal key={sector.id} direction="up" delay={0.04 * idx} distance={24}>
                    <div
                      className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-sm transition-all duration-500 shadow-lg flex flex-col justify-end aspect-[4/5] min-h-[210px] sm:min-h-[230px] md:min-h-[250px] cursor-default"
                    >
                      {/* Background Image: Black & White by default, smoothly transitions to full color on hover */}
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.85] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Cinematic Transparent Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent group-hover:via-black/15 transition-all duration-500 pointer-events-none" />

                      {/* Top Subtle Red Accent Sweep on Hover */}
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 pointer-events-none" />

                      {/* Bottom Info Shelf */}
                      <div className="relative z-10 p-3 sm:p-3.5 flex items-center gap-2.5">
                        {/* Icon Box */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                          <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Red Accent Dash & Sector Title */}
                        <div className="min-w-0 flex-1">
                          <span className="w-3.5 h-[2px] bg-brand-red block mb-1 group-hover:w-5 transition-all duration-300" />
                          <h3 className="text-xs sm:text-[13px] font-sans font-medium text-[#E6E6E6] group-hover:text-white transition-colors leading-snug line-clamp-2">
                            {sector.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Row 2: 5 Columns on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
              {ROW_2_SECTORS.map((sector, idx) => {
                const IconComp = sector.icon;
                return (
                  <ScrollReveal key={sector.id} direction="up" delay={0.04 * (idx + 6)} distance={24}>
                    <div
                      className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-sm transition-all duration-500 shadow-lg flex flex-col justify-end aspect-[4/5] min-h-[210px] sm:min-h-[230px] md:min-h-[250px] cursor-default"
                    >
                      {/* Background Image: Black & White by default, smoothly transitions to full color on hover */}
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.85] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Cinematic Transparent Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent group-hover:via-black/15 transition-all duration-500 pointer-events-none" />

                      {/* Top Subtle Red Accent Sweep on Hover */}
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 pointer-events-none" />

                      {/* Bottom Info Shelf */}
                      <div className="relative z-10 p-3 sm:p-3.5 flex items-center gap-2.5">
                        {/* Icon Box */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                          <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Red Accent Dash & Sector Title */}
                        <div className="min-w-0 flex-1">
                          <span className="w-3.5 h-[2px] bg-brand-red block mb-1 group-hover:w-5 transition-all duration-300" />
                          <h3 className="text-xs sm:text-[13px] font-sans font-medium text-[#E6E6E6] group-hover:text-white transition-colors leading-snug line-clamp-2">
                            {sector.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. OUR WORK: Selected Portfolio & Landmark Showcase
          ======================================================== */}
      <ProjectCarousel
        onSelectProject={handleProjectSelect}
        onViewAll={() => setActivePage('work')}
        bgClassName="bg-transparent"
      />

      {/* ========================================================
          7. READY TO TALK ABOUT YOUR PROJECT? (Architectural CTA)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => setActivePage('contact')}
        bgClassName="bg-transparent"
        title="Ready to Talk About"
        highlight="Your Project?"
        description="Whether you're evaluating an opportunity or preparing to begin development, BNS Development is ready to understand your goals and help move your project forward."
        buttonText="Have a Project in Mind?"
      />
    </div>
  );
}
