import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollWordReveal from '../components/ScrollWordReveal';
import ScrollReveal from '../components/ScrollReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import HouseCTA from '../components/HouseCTA';
import TeamBioTabs from '../components/TeamBioTabs';

export default function AboutPage({ setActivePage, fontPreset = 1 }) {
  const activePreset = Number(fontPreset) || 1;

  // Typography Presets Metadata (About Us 1, 2, 3 Visual Distinction System)
  const presetConfig = {
    1: {
      name: "Elegant & Professional",
      heading: "Playfair Display",
      body: "Albert Sans",
      cta: "Albert Sans",
      character: "Elegant & Professional",
      tagline: "Premium, established, sophisticated real-estate developer.",
      features: "Playfair Display Headings • Albert Sans Body • Albert Sans CTA",
    },
    2: {
      name: "Premium Architecture",
      heading: "Bank Gothic Bold",
      body: "Michroma",
      cta: "Michroma",
      character: "Premium Architecture",
      tagline: "Bold architectural geometry, structural precision, and monumental developer identity.",
      features: "Bank Gothic Bold Headings • Michroma Body • Michroma CTA",
    },
    3: {
      name: "Editorial Architecture",
      heading: "League Spartan",
      subtext: "Libre Baskerville",
      body: "Libre Baskerville",
      cta: "League Spartan",
      character: "Editorial Architecture",
      tagline: "Bold modern League Spartan headings paired with refined, classic Libre Baskerville editorial text.",
      features: "League Spartan Headings • Libre Baskerville Body • League Spartan CTA",
    },
  };



  // 4 Relationship Values
  const relationshipValues = [
    { name: 'Communication', desc: 'Transparent, proactive dialogue across every phase.' },
    { name: 'Responsiveness', desc: 'Rapid resolution of RFIs, submittals, and field questions.' },
    { name: 'Accountability', desc: 'Fidelity to schedule, budget, and commitments.' },
    { name: 'Mutual Respect', desc: 'Honoring trade partners, owners, and design professionals.' },
  ];

  return (
    <div className={`relative pt-24 sm:pt-32 pb-24 text-white min-h-screen font-preset-${activePreset} about-preset-${activePreset}`}>
      {/* ========================================================
          1. HERO — Built on Experience. Built on Relationships.
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="mb-14 sm:mb-20">
          <SectionHeading
            tag="About BNS Development"
            title={<span className="block">Built on Experience.</span>}
            highlight={<span className="block">Built on Relationships.</span>}
            description="BNS Development brings decades of experience across development, project management, general contracting, construction management and business development. We combine hands-on industry knowledge with a collaborative approach to help clients move projects from opportunity to execution."
            theme="dark"
            scaleColor="red"
          />

          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative aspect-[16/8] sm:aspect-[21/9] min-h-[260px] sm:min-h-[380px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/80 shadow-2xl mt-8 group">
              <img
                src="/images/about-hero.jpg"
                alt="BNS Development Mastery"
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-5 h-[2px] bg-brand-red inline-block shrink-0" />
                  <span className="text-xs sm:text-[13px] font-sans font-semibold text-[#9CA3AF] tracking-wider">
                    The BNS Standard
                  </span>
                </div>
                <p
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold font-display leading-tight max-w-3xl !text-[#B3B3B3] about-hero-quote"
                  style={{ color: '#B3B3B3' }}
                >
                  "Strong Projects. Stronger Partnership. More Than Your Average Partner."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* ========================================================
          2. THE EXPERIENCE BEHIND BNS DEVELOPMENT
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="Practical Foundation"
            title={<span className="block">The Experience Behind</span>}
            highlight={<span className="block">BNS Development.</span>}
            description="We combine hands-on industry knowledge with a collaborative approach to help clients move projects from opportunity to execution."
            theme="dark"
            scaleColor="red"
          />

          <div className="mt-10">
            <TeamBioTabs onContactClick={() => setActivePage('contact')} />
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MORE THAN A DEVELOPER. A PROJECT PARTNER.
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
        <ScrollReveal direction="up" delay={0.08}>
          <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden group">
            {/* Ambient Radial Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left: Architectural Visual Window */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col">
                <div className="relative h-full min-h-[320px] sm:min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-xl group flex flex-col justify-end">
                  <img
                    src="/images/about-project-partner.jpg"
                    alt="BNS Development Architectural Landmark Execution"
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right: Narrative Content */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <SectionHeading
                  tag="Collaborative Excellence"
                  title={<span className="block">More Than a Developer.</span>}
                  highlight={<span className="block">A Project Partner.</span>}
                  theme="dark"
                  scaleColor="red"
                />

                <div className="space-y-4 text-sm sm:text-base text-brand-subtext font-sans leading-relaxed">
                  <p className="!text-[#9CA3AF] font-medium text-base sm:text-lg" style={{ color: '#9CA3AF' }}>
                    Successful development requires more than managing a timeline. It requires coordination, communication and informed decision-making.
                  </p>
                  
                  <div className="pt-2 space-y-2.5">
                    {[
                      'Understanding the Vision',
                      'Planning Before Development',
                      'Coordinating the Team',
                      'Managing the Details',
                      'Delivering With Accountability',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] text-[#9CA3AF] font-sans">
                        <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>



      {/* ========================================================
          5. BUILT ON RELATIONSHIPS
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left: Narrative & Clean Values List */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div>
                <SectionHeading
                  tag="Foundational Creed"
                  title="Built on"
                  highlight="Relationships."
                  theme="dark"
                  scaleColor="red"
                />

                <div className="space-y-3.5 text-sm sm:text-base text-brand-subtext leading-relaxed font-sans mt-4">
                  <p className="!text-[#9CA3AF] font-medium font-sans text-base sm:text-lg" style={{ color: '#9CA3AF' }}>
                    Development is a relationship business. We believe in communication, responsiveness, accountability and mutual respect—building partnerships that extend beyond a single project.
                  </p>
                </div>
              </div>

              {/* 4 Relationship Values - Clean Editorial Text List */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relationshipValues.map((val, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                      <h4 className="text-sm font-semibold font-display text-[#9CA3AF] relationship-value-title">
                        {val.name}
                      </h4>
                    </div>
                    <p className="text-xs text-[#9CA3AF] font-sans leading-relaxed pl-3.5">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architectural Partner Alignment Photography Window */}
            <div className="lg:col-span-5 flex flex-col">
              <ScrollReveal direction="right" delay={0.12} className="h-full w-full">
                <div className="relative h-full min-h-[380px] sm:min-h-[440px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/50 bg-neutral-900 shadow-2xl group transition-all duration-500 flex flex-col justify-end">
                  <img
                    src="/images/process/step-03-coordination.jpg"
                    alt="BNS Development Multi-Stakeholder Relationship & Coordination"
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CALL TO ACTION (Architectural Video CTA)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => setActivePage('contact')}
        title="Let’s Talk About"
        highlight="Your Project"
        description="Whether you're planning a residential project, commercial development, new development or your next opportunity, BNS Development is ready to start the conversation."
        buttonText="Let’s Build the Right Partnership"
      />
    </div>
  );
}
