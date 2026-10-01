import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HardHat, Building2, Home, Building, Sparkles, Layers,
  Car, Store, Compass, CheckCircle2, ArrowRight, ShieldCheck,
  ClipboardList, Calendar, Users, Target, CheckSquare
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';
import HouseCTA from '../components/HouseCTA';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';

export default function GroundUpPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Ground-Up Construction Services";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "BNS Development provides ground-up construction services with experienced project leadership from early planning and coordination through completion.";
  }, []);

  const handleContactNav = () => {
    if (setActivePage) {
      setActivePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  // 5 Approach Steps
  const approachSteps = [
    {
      step: '01',
      title: 'Preconstruction',
      desc: 'We begin by understanding the project requirements, scope, schedule and construction considerations.',
      icon: ClipboardList,
    },
    {
      step: '02',
      title: 'Planning & Coordination',
      desc: 'We coordinate the information and project teams required to move the project toward construction.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Site & Project Preparation',
      desc: 'We help establish the framework needed for the construction phase and coordinate the work involved in getting the project underway.',
      icon: HardHat,
    },
    {
      step: '04',
      title: 'Construction',
      desc: 'Our team provides project oversight and coordination throughout construction, keeping attention on schedule, scope, communication and execution.',
      icon: CheckSquare,
    },
    {
      step: '05',
      title: 'Completion',
      desc: 'As the project moves toward completion, we remain focused on coordination, resolution of outstanding items and delivering the finished project.',
      icon: Target,
    },
  ];

  // Ground-Up Projects We Support
  const supportedProjects = [
    { name: 'Multifamily', icon: Building2 },
    { name: 'Single-Family Residential', icon: Home },
    { name: 'Commercial', icon: Building },
    { name: 'Hospitality', icon: Sparkles },
    { name: 'Mixed-Use', icon: Layers },
    { name: 'Automotive', icon: Car },
    { name: 'Retail', icon: Store },
    { name: 'Other Development Projects', icon: Compass },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <ServiceBreadcrumb currentTitle="Commercial Development" setActivePage={setActivePage} />

        {/* ========================================================
            1. HERO SECTION (Starting With a Vision. Building From the Ground Up.)
            ======================================================== */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Badge, Heading, Narrative, and CTA */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <ScrollReveal direction="up" delay={0.05}>
                  <div className="space-y-2.5">
                    <div className="text-xs sm:text-sm font-semibold text-brand-red tracking-wider">
                      Ground-Up Construction Services
                    </div>

                    <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-display font-semibold tracking-tight leading-[1.15]">
                      <span className="block text-white">Starting With a Vision.</span>
                      <span className="block text-brand-red">Building From the Ground Up.</span>
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Tight spacing directly below heading */}
                <div className="mt-4 space-y-3.5 font-sans">
                  <ScrollWordReveal
                    text="Ground-up construction requires coordination from the earliest stages of a project."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.05}
                    className="font-medium text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                  <ScrollWordReveal
                    text="BNS Development brings experienced construction leadership to projects that begin with a site and develop into a complete structure."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.15}
                    className="text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                  <ScrollWordReveal
                    text="From early planning and coordination to construction and completion, we help manage the many moving parts involved in bringing a ground-up project to life."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.25}
                    className="text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <EyeFollowButton
                  onClick={handleContactNav}
                  size="md"
                  icon="none"
                >
                  Start Your Ground-Up Project
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 flex">
              <ScrollReveal direction="up" delay={0.15} className="w-full h-full flex">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/60 bg-neutral-950 shadow-2xl group transition-all duration-500">
                  <img
                    src="/images/ground-up.jpg"
                    alt="BNS Development Ground-Up Construction"
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
            2. EXPERIENCE FROM THE GROUND UP
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/process/step-04-details.jpg"
                    alt="Experienced ground-up development leadership on site"
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
                tag="Comprehensive Execution"
                title={<span className="text-white">Experience From</span>}
                highlight={<span className="text-brand-red">the Ground Up</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Ground-up projects involve more than constructing a building."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.06}
                  className="font-medium text-base sm:text-lg text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="They require coordination across planning, design, site development, construction, scheduling, trades, materials and multiple project stakeholders."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.18}
                  className="text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="BNS Development's leadership brings extensive experience across ground-up construction projects, including multifamily, hospitality, commercial, automotive, retail and other project types."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.3}
                  className="text-[#a8a8a0]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. OUR GROUND-UP CONSTRUCTION APPROACH (5 Pillars)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <SectionHeading
              tag="Disciplined Lifecycle"
              title={<span className="text-white">Our Ground-Up</span>}
              highlight={<span className="text-brand-red">Construction Approach</span>}
              description="A structured, milestone-driven framework that keeps your project moving smoothly from raw land to finished handover."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {approachSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <ScrollReveal key={step.step} delay={idx * 0.07}>
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-md shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-mono font-bold text-brand-red">
                          {step.step}
                        </span>
                        <div className="p-2 rounded-lg bg-white/[0.04] text-neutral-300 group-hover:text-brand-red group-hover:bg-brand-red/10 transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-[#A8A8A0] font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="w-5 h-[2px] bg-brand-red group-hover:w-8 transition-all duration-300" />
                      <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
                        Phase {step.step}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. GROUND-UP PROJECTS WE SUPPORT (8 Project Types)
            ======================================================== */}
        <section className="space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <SectionHeading
              tag="Sector Versatility"
              title={<span className="text-white">Ground-Up Projects</span>}
              highlight={<span className="text-brand-red">We Support</span>}
              description="Our team's documented experience spans a diverse spectrum of ground-up asset classes across high-growth markets."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {supportedProjects.map((proj, idx) => {
              const IconComp = proj.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-md transition-all duration-300 group flex items-center gap-3.5 hover:-translate-y-1">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] group-hover:bg-brand-red/10 border border-white/10 group-hover:border-brand-red/30 text-neutral-300 group-hover:text-brand-red transition-colors shrink-0">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug">
                      {proj.name}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. EXPERIENCE THAT HELPS MOVE COMPLEX PROJECTS FORWARD
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Core Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                tag="Leadership & Accountability"
                title={<span className="text-white">Experience That Helps Move</span>}
                highlight={<span className="text-brand-red">Complex Projects Forward</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Ground-up construction can involve hundreds of decisions and multiple project partners."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.06}
                  className="font-medium text-base sm:text-lg text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="Experience matters because challenges are inevitable. What matters is having a team that can recognize issues, communicate clearly and work toward practical solutions."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.18}
                  className="text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="BNS Development brings a hands-on approach to project coordination and construction management, helping clients move from an undeveloped site toward a completed project."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.3}
                  className="text-[#a8a8a0]"
                />
              </div>

              <div className="pt-2">
                <EyeFollowButton
                  onClick={handleContactNav}
                  size="md"
                  icon="none"
                >
                  Tell Us About Your Project
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/process/step-05-delivery.jpg"
                    alt="Delivered modern architectural development"
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
            6. ARCHITECTURAL CTA SECTION
            ======================================================== */}
        <HouseCTA
          onStartProject={handleContactNav}
        />

      </div>
    </div>
  );
}
