import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Layers, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Eye, ClipboardList, Users, HardHat, Target,
  Sparkles, CheckSquare, Building2
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';

export default function DesignBuildPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Design-Build Services";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "BNS Development provides integrated design-build services that connect design coordination and development execution for a more streamlined project process.";
  }, []);

  const handleContactNav = () => {
    if (setActivePage) {
      setActivePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  // Exact 5 Approach Steps Verbatim from User Specification
  const approachSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We begin by understanding your project objectives, requirements, priorities and expectations.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'We establish the framework for moving the project from concept toward execution.',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Coordinate',
      desc: 'We facilitate communication between the relevant design, development and project stakeholders.',
      icon: Users,
    },
    {
      step: '04',
      title: 'Build',
      desc: 'Once the project moves into physical execution, our team remains focused on execution, coordination and project oversight.',
      icon: HardHat,
    },
    {
      step: '05',
      title: 'Deliver',
      desc: 'We stay focused on the project\'s objectives through completion.',
      icon: Target,
    },
  ];

  // Exact 6 Benefits Curated in Pictorial Format with Related Real Images
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Improved communication',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      alt: 'Superintendents, architects and project managers collaborating directly on project drawings',
    },
    {
      step: '02',
      title: 'Greater coordination between project teams',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
      alt: 'Engineers, architects and trade contractors coordinating structural plans and digital models',
    },
    {
      step: '03',
      title: 'Earlier identification of development considerations',
      image: '/images/ground-up.jpg',
      alt: 'Structural engineers and inspectors evaluating ground conditions and foundation framing early',
    },
    {
      step: '04',
      title: 'A more integrated project process',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Architectural design blueprints seamlessly aligning with on-site physical development execution',
    },
    {
      step: '05',
      title: 'Clearer accountability',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      alt: 'Development director overseeing project execution with single-source accountability on site',
    },
    {
      step: '06',
      title: 'Better alignment between design and development objectives',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      alt: 'Modern glass and steel landmark building realized with total fidelity to original design objectives',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <ServiceBreadcrumb currentTitle="Design-Build Delivery" setActivePage={setActivePage} />

        {/* ========================================================
            1. HERO SECTION (One Coordinated Approach From Design Through Delivery)
            ======================================================== */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Badge, Heading, Narrative, and Button */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <ScrollReveal direction="up" delay={0.05}>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-[2px] bg-brand-red inline-block shrink-0" />
                      <span className="text-xs sm:text-[13px] font-sans font-semibold text-[#9CA3AF] tracking-wider">
                        Design-Build Delivery
                      </span>
                    </div>

                    <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-display font-semibold tracking-tight leading-[1.15]">
                      <span className="block text-white">One Coordinated Approach</span>
                      <span className="block text-brand-red">From Design Through Delivery</span>
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Tight spacing directly below heading */}
                <div className="mt-4 space-y-3.5 font-sans">
                  <ScrollWordReveal
                    text="Design and development work best when the people responsible for both are working toward the same objective."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.05}
                    className="font-medium text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                  <ScrollWordReveal
                    text="BNS Development's Design-Build approach brings project planning, design coordination and development execution together through a more integrated process."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.15}
                    className="text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                  <ScrollWordReveal
                    text="The result is a streamlined approach designed to improve communication, coordination and accountability throughout the project."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.25}
                    className="text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                </div>
              </div>

              {/* Action Button without arrows */}
              <div className="pt-2">
                <EyeFollowButton
                  onClick={handleContactNav}
                  size="lg"
                  icon="none"
                >
                  Discuss Your Project
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 flex">
              <ScrollReveal direction="up" delay={0.15} className="w-full h-full flex">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/60 bg-neutral-950 shadow-2xl group hover-beam-card transition-all duration-500">
                  <img
                    src="/images/design-build.jpg"
                    alt="BNS Development Design-Build Collaboration"
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. BRINGING DESIGN AND DEVELOPMENT TOGETHER
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Coordination Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                    alt="Architectural drawings and development coordination"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>

            {/* Core Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                tag="Design-Build"
                title={<span className="text-white">Bringing Design and</span>}
                highlight={<span className="text-brand-red">Development Together</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Traditional real estate projects can involve multiple parties working independently, which can make communication and coordination more challenging."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.08}
                  className="text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="Design-Build provides an alternative approach by connecting the design and development process more closely."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.22}
                  className="text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="BNS Development helps coordinate the project from early planning through completion, keeping the project team focused on the same goals."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.36}
                  className="font-medium text-[#9CA3AF]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. OUR DESIGN-BUILD APPROACH (5 Sequential Steps)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Approach"
            title={<span className="text-white">Our Design-Build</span>}
            highlight={<span className="text-brand-red">Approach</span>}
            theme="dark"
            scaleColor="red"
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {approachSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <ScrollReveal key={item.step} delay={idx * 0.08} direction="up">
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/60 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1.5 hover-beam-card">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-sans font-semibold text-brand-red tracking-wider">
                          Step {item.step}
                        </span>
                        <div className="p-2 rounded-lg bg-brand-red/15 border border-brand-red/40 text-brand-red group-hover:scale-105 group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold font-display text-white mb-2 group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#9CA3AF] leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-start">
                      <div className="w-6 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-12" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. WHY CHOOSE A DESIGN-BUILD APPROACH? (Pictorial Showcase)
            ======================================================== */}
        <section className="space-y-8">
          <div className="max-w-4xl space-y-3">
            <SectionHeading
              tag="Advantages"
              title={<span className="text-white">Why Choose a</span>}
              highlight={<span className="text-brand-red">Design-Build Approach?</span>}
              description="A coordinated approach can help simplify the project process by creating stronger connections between design and development."
              theme="dark"
              scaleColor="red"
            />
            <p className="text-xs sm:text-sm font-mono text-brand-red tracking-wider font-bold pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Benefits can include:</span>
            </p>
          </div>

          {/* Pictorial Grid Display: 6 Benefits from user specification */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialBenefits.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06} direction="up">
                <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-brand-red/60 transition-all duration-500 shadow-2xl flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-1.5 hover-beam-card min-h-[280px] sm:min-h-[300px]">
                  {/* Background Pictorial Real Image */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-108 opacity-80 group-hover:opacity-95"
                    loading="lazy"
                  />

                  {/* High-Contrast Gradient Vignette for Readability & White/Red Style */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-black/30 group-hover:via-[#07080A]/45 transition-all duration-500 pointer-events-none" />

                  {/* Top Row: Step indicator & Status Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs font-mono text-brand-red font-bold">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:border-brand-red group-hover:text-brand-red transition-all shadow-md">
                      <CheckCircle2 className="w-4 h-4 text-brand-red" />
                    </div>
                  </div>

                  {/* Bottom Row: Exact Benefit Title */}
                  <div className="relative z-10 space-y-2 mt-auto pt-8">
                    <div className="w-8 h-[2px] bg-brand-red group-hover:w-16 transition-all duration-300" />
                    <h4 className="font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug tracking-tight text-lg sm:text-xl">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. A PARTNER FROM CONCEPT TO COMPLETION
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <SectionHeading
                tag="Collaboration"
                title={<span className="text-white">A Partner From</span>}
                highlight={<span className="text-brand-red">Concept to Completion</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-base sm:text-lg font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Your project should not feel like a series of disconnected stages."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.06}
                  className="font-medium text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="BNS Development brings the project together through a coordinated approach designed to keep people, information and decisions moving in the same direction."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.22}
                  className="text-[#9CA3AF]"
                />
              </div>
            </div>

            {/* Real Project Delivery Photo */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={0.12}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/about-hero.jpg"
                    alt="Active development execution and site oversight"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. PLANNING A DESIGN-BUILD PROJECT? (Closing CTA)
            ======================================================== */}
        <section className="relative p-10 sm:p-14 lg:p-16 rounded-3xl border border-brand-red/30 hover:border-brand-red/70 shadow-[0_0_50px_-10px_rgba(215,25,32,0.35)] hover:shadow-[0_0_70px_-5px_rgba(215,25,32,0.6)] backdrop-blur-2xl text-center space-y-6 overflow-hidden group transition-all duration-700">
          {/* Luminous Red Ambient Border Glow Effect */}
          <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-r from-brand-red/60 via-brand-red/25 to-brand-red/60 opacity-60 group-hover:opacity-100 blur-[3px] transition-all duration-700 pointer-events-none" />
          <div className="absolute -inset-[4px] rounded-3xl bg-brand-red/30 blur-2xl opacity-45 group-hover:opacity-85 transition-all duration-700 pointer-events-none" />

          {/* Background Video (cta-bg.mp4) */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#07080A]">
            <video
              src="/videos/cta-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 ease-out scale-105 group-hover:scale-110 brightness-105 contrast-100"
              style={{ opacity: 1 }}
              onEnded={(e) => {
                e.currentTarget.play().catch(() => {});
              }}
            >
              <source src="/videos/cta-bg.mp4" type="video/mp4" />
            </video>
            {/* Soft, minimal vignette for text contrast without black shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none" />
          </div>

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              <span className="text-white">Planning a</span>{' '}
              <span className="text-brand-red">Design-Build Project?</span>
            </h2>

            <div className="pt-2 flex justify-center">
              <EyeFollowButton
                onClick={handleContactNav}
                size="lg"
                icon="none"
              >
                Start a Conversation
              </EyeFollowButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
