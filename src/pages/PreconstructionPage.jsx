import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Layers, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Eye, ClipboardList, Users, HardHat, Target,
  Sparkles, CheckSquare, Building2, Calendar, DollarSign
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';
import ServiceBreadcrumb from '../components/ServiceBreadcrumb';
import ServiceCTASection from '../components/ServiceCTASection';

export default function PreconstructionPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Pre-development Services";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Plan your construction project with BNS Development's Pre-development services, including project planning, scope development, scheduling and coordination.";
  }, []);

  const handleContactNav = () => {
    if (setActivePage) {
      setActivePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  // Exact 6 Pre-Development Services
  const predevelopmentServices = [
    {
      title: 'Project Planning',
      desc: 'We work to understand the project\'s goals, requirements, scope and priorities before construction begins.',
      icon: ClipboardList,
    },
    {
      title: 'Scope Development',
      desc: 'A clearly defined scope helps establish expectations and provides a stronger foundation for project execution.',
      icon: CheckSquare,
    },
    {
      title: 'Scheduling',
      desc: 'We help develop a practical project schedule and identify key stages that need to be coordinated before and during construction.',
      icon: Calendar,
    },
    {
      title: 'Project Coordination',
      desc: 'We help bring owners, consultants, designers, contractors and other project stakeholders together to establish alignment.',
      icon: Users,
    },
    {
      title: 'Construction Planning',
      desc: 'Our construction experience allows us to identify potential challenges early and consider how they may affect execution.',
      icon: HardHat,
    },
    {
      title: 'Budget & Cost Considerations',
      desc: 'Early understanding of project requirements and scope can help inform cost-related decisions and reduce unnecessary surprises later in the process.',
      icon: DollarSign,
    },
  ];

  // Exact 7 Early Planning Benefits Curated in Pictorial Format
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Identify potential challenges',
      image: '/images/process/step-04-details.jpg',
      alt: 'Civil engineers and construction superintendents inspecting site parameters and structural framework',
    },
    {
      step: '02',
      title: 'Clarify project scope',
      image: '/images/process/step-01-vision.jpg',
      alt: 'Comprehensive architectural blueprints, drawings, and development scope documentation',
    },
    {
      step: '03',
      title: 'Improve coordination',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Multi-stakeholder project coordination between developers, architects, and trade partners',
    },
    {
      step: '04',
      title: 'Establish realistic schedules',
      image: '/images/process/step-02-planning.jpg',
      alt: 'Critical path development milestone scheduling and project sequencing',
    },
    {
      step: '05',
      title: 'Support informed decision-making',
      image: '/images/home-strategic-leadership.jpg',
      alt: 'Strategic development leadership analyzing feasibility and investment plans',
    },
    {
      step: '06',
      title: 'Prepare stakeholders for construction',
      image: '/images/project-types/ground-up-superstructure.png',
      alt: 'Groundbreaking site preparation and readiness briefing for project execution',
    },
    {
      step: '07',
      title: 'Create a clearer path toward execution',
      image: '/images/about-project-partner.jpg',
      alt: 'Rising landmark commercial structure moving from planning into flawless physical execution',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-[#CCCCCC] service-detail-scope overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        <ServiceBreadcrumb currentTitle="Pre-development Services" setActivePage={setActivePage} />

        {/* ========================================================
            1. HERO SECTION (Plan With Confidence Before You Build)
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
                        Pre-development Services
                      </span>
                    </div>

                    <h1 className="text-[30px] sm:text-[36px] md:text-[38px] font-display font-semibold tracking-tight leading-[1.15]">
                      <span className="block text-white">Plan With Confidence</span>
                      <span className="block text-brand-red">Before You Build</span>
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Tight spacing directly below heading */}
                <div className="mt-4 space-y-3.5 font-sans">
                  <ScrollWordReveal
                    text="The success of a construction project is often determined before construction begins."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.05}
                    className="font-medium text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                  <ScrollWordReveal
                    text="BNS Development provides Pre-development services designed to help owners and developers understand their project, identify potential challenges and establish a practical path toward construction."
                    colorRevealed="#9CA3AF"
                    colorHidden="rgba(156, 163, 175, 0.25)"
                    delay={0.15}
                    className="text-[16px] leading-relaxed text-[#9CA3AF]"
                  />
                  <ScrollWordReveal
                    text="From early planning and scope development to scheduling and coordination, we help bring clarity to the decisions that need to be made before work begins."
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
                  Start a Conversation
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 flex">
              <ScrollReveal direction="up" delay={0.15} className="w-full h-full flex">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/60 bg-neutral-950 shadow-2xl group hover-beam-card transition-all duration-500">
                  <img
                    src="/images/preconstruction.jpg"
                    alt="BNS Development Pre-Development Precision Planning"
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
            2. BUILD A STRONGER FOUNDATION BEFORE DEVELOPMENT BEGINS
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Planning Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/process/step-02-planning.jpg"
                    alt="Engineers and managers reviewing technical development blueprints and BIM models"
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
                tag="Pre-development"
                title={<span className="text-[#E6E6E6]" style={{ color: '#E6E6E6' }}>Build a Stronger Foundation</span>}
                highlight={<span className="text-brand-red">Before Construction Begins</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Pre-development is where ideas begin to take shape."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.06}
                  className="font-medium text-base sm:text-lg text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="It is also where important decisions can be addressed before they become costly problems during construction."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.18}
                  className="text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="Our team works with clients and project partners to understand the project requirements, coordinate the necessary information and prepare for the construction phase."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.3}
                  className="text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="With extensive experience in construction management and general contracting, BNS Development brings a practical construction perspective to the planning process."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.42}
                  className="font-medium text-[#9CA3AF]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. OUR PRE-DEVELOPMENT SERVICES (6 Disciplines Verbatim)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="Services"
            title={<span className="text-white">Our Pre-development</span>}
            highlight={<span className="text-brand-red">Services</span>}
            theme="dark"
            scaleColor="red"
            centered={true}
            showRedLine={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predevelopmentServices.map((svc, idx) => {
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
                      <h4 className="text-lg font-semibold font-display text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors">
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
            4. WHY START WITH PRE-DEVELOPMENT? (Pictorial Showcase)
            ======================================================== */}
        <section className="space-y-8">
          <div className="max-w-4xl space-y-3">
            <SectionHeading
              tag="Advantages"
              title={<span className="text-white">Why Start With</span>}
              highlight={<span className="text-brand-red">Pre-development?</span>}
              description="A well-planned project can make the construction process more organized and predictable."
              theme="dark"
              scaleColor="red"
            />
          </div>

          {/* Pictorial Grid Display: 7 Benefits arranged with 4 in row 1, 3 in row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
            {pictorialBenefits.map((item, idx) => {
              const isFirstRow = idx < 4;
              return (
                <ScrollReveal
                  key={idx}
                  delay={idx * 0.05}
                  direction="up"
                  className={isFirstRow ? 'lg:col-span-3' : 'lg:col-span-4'}
                >
                  <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-brand-red/60 transition-all duration-500 shadow-2xl flex flex-col justify-end p-6 sm:p-7 hover:-translate-y-1.5 hover-beam-card min-h-[280px] sm:min-h-[300px] h-full">
                    {/* Background Pictorial Real Image */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-108 opacity-80 group-hover:opacity-95"
                      loading="lazy"
                    />

                    {/* High-Contrast Gradient Vignette for Readability & White/Red Style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-black/30 group-hover:via-[#07080A]/45 transition-all duration-500 pointer-events-none" />

                    {/* Bottom Row: Exact Benefit Title */}
                    <div className="relative z-10 pt-8">
                      <h4
                        className="font-semibold font-display text-[#B3B3B3] group-hover:text-[#FFFFFF] transition-colors leading-snug tracking-tight text-lg sm:text-xl"
                        style={{ color: '#B3B3B3' }}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. FROM PLANNING TO CONSTRUCTION
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <SectionHeading
                tag="Foundation"
                title={<span className="text-[#E6E6E6]" style={{ color: '#E6E6E6' }}>From Planning to</span>}
                highlight={<span className="text-brand-red">Construction</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-base sm:text-lg font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Pre-development is not simply a preliminary step. It is an opportunity to establish the foundation for the entire project."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.06}
                  className="font-medium text-[#9CA3AF]"
                />
                <ScrollWordReveal
                  text="BNS Development works with clients to move from an initial concept toward a project that is better understood, better coordinated and ready for the next stage."
                  colorRevealed="#9CA3AF"
                  colorHidden="rgba(156, 163, 175, 0.25)"
                  delay={0.22}
                  className="text-[#9CA3AF]"
                />
              </div>
            </div>

            {/* Real Foundation Photo */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={0.12}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/project-types/ground-up-superstructure.png"
                    alt="Commercial construction jobsite superstructure moving from planning into execution"
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
            6. HAVE A PROJECT YOU'RE PLANNING? (Closing CTA)
            ======================================================== */}
        <ServiceCTASection
          titlePrefix="Have a project"
          titleHighlight="you're planning?"
          buttonText="Let's Talk About Your Project"
          onContact={handleContactNav}
        />

      </div>
    </div>
  );
}
