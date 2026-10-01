import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Sparkles, Building2, Users, HardHat, CheckCircle2,
  Layers, Wrench, ShieldCheck, ClipboardList, Target
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import ServiceCTASection from '../components/ServiceCTASection';

export default function TenantImprovementsPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Tenant Improvement Services";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "BNS Development provides tenant improvement and commercial build-out services to transform existing spaces for new business and operational needs.";
  }, []);

  const handleContactNav = () => {
    if (setActivePage) {
      setActivePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  // Exact 5 Tenant Improvement Services Verbatim from User Specification
  const tenantServices = [
    {
      title: 'Space Planning Coordination',
      desc: 'We help coordinate project requirements and work with the relevant project professionals to establish the scope of improvements.',
      icon: Compass,
    },
    {
      title: 'Interior Improvements',
      desc: 'We coordinate development and fit-out work required to transform the interior environment according to the project\'s requirements.',
      icon: Sparkles,
    },
    {
      title: 'Build-Outs',
      desc: 'From preparing an existing space for a new tenant to completing a commercial build-out, we help coordinate the delivery and fit-out process.',
      icon: Building2,
    },
    {
      title: 'Project Coordination',
      desc: 'We help keep owners, tenants, designers, contractors and subcontractors aligned throughout the project.',
      icon: Users,
    },
    {
      title: 'Development Management',
      desc: 'Our team provides hands-on oversight throughout the execution and delivery phase to help keep the project moving.',
      icon: HardHat,
    },
  ];

  // Exact 6 Why Choose BNS Development Focus Points in Pictorial Format
  const pictorialWhyChoose = [
    {
      step: '01',
      title: 'Clear project coordination',
      image: '/images/projects/executive-office-workspace.png',
      alt: 'Clear multi-stakeholder commercial space coordination',
    },
    {
      step: '02',
      title: 'Practical development planning',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Architectural drawings and practical commercial development planning',
    },
    {
      step: '03',
      title: 'Communication between stakeholders',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      alt: 'Direct collaboration between owners, tenants, and contractors',
    },
    {
      step: '04',
      title: 'Schedule awareness',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
      alt: 'Fast-track milestone scheduling and critical path tracking',
    },
    {
      step: '05',
      title: 'Experienced project oversight',
      image: '/images/ground-up.jpg',
      alt: 'Superintendents and project managers overseeing commercial execution',
    },
    {
      step: '06',
      title: 'Problem solving throughout execution',
      image: '/images/projects/modern-retail-showroom.png',
      alt: 'Seamless problem solving in luxury commercial retail environment',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <ServiceBreadcrumb currentTitle="Tenant Improvements" setActivePage={setActivePage} />

        {/* ========================================================
            1. HERO SECTION (Transforming Commercial Spaces for What's Next)
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
                        Tenant Improvement Services
                      </span>
                    </div>

                    <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-display font-semibold tracking-tight leading-[1.15]">
                      <span className="block text-white">Transforming Commercial Spaces</span>
                      <span className="block text-brand-red">for What's Next</span>
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Tight spacing directly below heading */}
                <div className="mt-4 space-y-3.5 font-sans">
                  <ScrollWordReveal
                    text="A commercial space needs to work for the people and business using it."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.05}
                    className="font-medium text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                  <ScrollWordReveal
                    text="BNS Development provides tenant improvement services to help transform existing commercial spaces to meet new functional, operational and design requirements."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.15}
                    className="text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                  <ScrollWordReveal
                    text="From planning and coordination through delivery and fit-out, we help manage the process of turning an existing space into one that is ready for its next purpose."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.25}
                    className="text-[16px] leading-relaxed text-[#9CA3AF]"
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
                  Discuss Your Commercial Space
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 flex">
              <ScrollReveal direction="up" delay={0.15} className="w-full h-full flex">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/60 bg-neutral-950 shadow-2xl group hover-beam-card transition-all duration-500">
                  <img
                    src="/images/tenant-improvements.jpg"
                    alt="BNS Development Commercial Tenant Improvements"
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
            2. FROM EXISTING SPACE TO FUNCTIONAL ENVIRONMENT
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Project Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/projects/executive-office-workspace.png"
                    alt="High-specification commercial interior build-out by BNS Development"
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
                tag="Transformation"
                title={<span className="text-white">From Existing Space to</span>}
                highlight={<span className="text-brand-red">Functional Environment</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Tenant improvement projects can involve multiple trades, design requirements, schedules and stakeholders."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.06}
                  className="font-medium text-base sm:text-lg text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="Without proper coordination, even smaller commercial projects can become complicated."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.18}
                  className="text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="Our approach focuses on understanding the existing space, identifying the required improvements and coordinating the work necessary to bring the project together."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.3}
                  className="text-[#9CA3AF]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. TENANT IMPROVEMENT SERVICES (5 Disciplines Verbatim)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Services"
            title={<span className="text-white">Tenant Improvement</span>}
            highlight={<span className="text-brand-red">Services</span>}
            theme="dark"
            scaleColor="red"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenantServices.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.07} direction="up">
                  <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/60 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1.5 hover-beam-card">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-brand-red/15 border border-brand-red/40 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-md">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-brand-red font-bold tracking-widest">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold font-display text-white group-hover:text-brand-red transition-colors">
                        {svc.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#9CA3AF] leading-relaxed font-sans">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-start">
                      <div className="w-6 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-14" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. WHY CHOOSE BNS DEVELOPMENT FOR TENANT IMPROVEMENTS?
            ======================================================== */}
        <section className="space-y-8">
          <div className="max-w-4xl space-y-3">
            <SectionHeading
              tag="Advantages"
              title={<span className="text-white">Why Choose BNS Development</span>}
              highlight={<span className="text-brand-red">for Tenant Improvements?</span>}
              description="Commercial spaces often need to be completed within specific schedules and operational requirements."
              theme="dark"
              scaleColor="red"
            />
            <p className="text-xs sm:text-sm font-mono text-brand-red tracking-wider font-bold pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Our approach focuses on:</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialWhyChoose.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="up">
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

                  {/* Bottom Row: Exact Focus Point Title */}
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
            5. TRANSITION SECTION: TURNING SPACES INTO OPPORTUNITIES
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <SectionHeading
                tag="Delivery"
                title={<span className="text-white">Commercial Environments Built</span>}
                highlight={<span className="text-brand-red">for Operational Success</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-base sm:text-lg font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Every square foot of a commercial facility directly impacts productivity, customer experience and brand identity."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.06}
                  className="font-medium text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="From initial walkthroughs to final inspections, BNS Development ensures every trade and detail aligns with your operational timeline."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.22}
                  className="text-[#9CA3AF]"
                />
              </div>
            </div>

            {/* Real Project Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={0.12}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/projects/boutique-cafe-interior.png"
                    alt="Boutique commercial hospitality and retail interior fit-out by BNS Development"
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
            6. READY TO TRANSFORM YOUR SPACE? (Closing CTA)
            ======================================================== */}
        <ServiceCTASection
          titlePrefix="Ready to"
          titleHighlight="Transform Your Space?"
          description="Whether you're preparing a space for a new tenant, updating an existing commercial environment or planning a complete build-out, BNS Development can help you move from an existing space to the next stage."
          buttonText="Tell Us About Your Project"
          onContact={handleContactNav}
        />

      </div>
    </div>
  );
}
