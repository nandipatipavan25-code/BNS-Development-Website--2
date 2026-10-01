import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  X,
  Upload,
  Heart,
  Award,
  Sparkles,
  Building2,
  Users,
  TrendingUp,
  Briefcase,
  Send,
  ShieldCheck,
  Layers,
  Compass,
  ArrowUpRight,
  ChevronRight,
  Filter,
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import { jobsData } from '../data/jobs';

export default function CareersPage({ setActivePage, setSelectedJob: setSelectedJobProp }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const handleViewRole = (job) => {
    if (setSelectedJobProp) setSelectedJobProp(job);
    setActivePage('career-detail', `id=${job.id}`);
  };

  const handleGeneralApply = () => {
    setSelectedJob({
      id: 'general-inquiry',
      title: 'General Career Application',
      department: 'Development & Construction',
      location: 'Florida & Texas',
    });
    setIsApplying(true);
  };

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    yearsExp: '',
    coverNote: '',
  });

  // Department filters list
  const departments = useMemo(() => {
    const deps = ['All', ...new Set(jobsData.map((j) => j.department))];
    return deps;
  }, []);

  const filteredJobs = useMemo(() => {
    if (selectedDepartment === 'All') return jobsData;
    return jobsData.filter((j) => j.department === selectedDepartment);
  }, [selectedDepartment]);

  const whyBnsCards = [
    {
      num: '01',
      icon: <Building2 className="w-5 h-5 text-brand-red" />,
      title: 'Work on Diverse Projects',
      desc: 'Gain experience across residential, multifamily, hospitality, commercial and mixed-use development.',
      accent: 'Residential • Hospitality • Commercial',
    },
    {
      num: '02',
      icon: <Award className="w-5 h-5 text-brand-red" />,
      title: 'Learn From Experience',
      desc: 'Work alongside professionals with extensive experience across development, project management and construction.',
      accent: 'Direct Executive Access & Mentorship',
    },
    {
      num: '03',
      icon: <Users className="w-5 h-5 text-brand-red" />,
      title: 'Be Part of the Team',
      desc: 'We believe successful projects depend on people working together, communicating clearly and taking ownership of their responsibilities.',
      accent: 'Collaborative Problem-Solving',
    },
    {
      num: '04',
      icon: <TrendingUp className="w-5 h-5 text-brand-red" />,
      title: 'Grow With Us',
      desc: 'We value people who are ready to learn, take on responsibility and contribute to the continued growth of BNS Development.',
      accent: 'Clear Pathways for Advancement',
    },
  ];

  const candidateTraits = [
    {
      id: '01',
      title: 'Take ownership of their work',
      image: '/images/careers/01-ownership.jpg',
      alt: 'Field construction superintendent taking direct ownership on site',
      category: 'Leadership & Responsibility',
    },
    {
      id: '02',
      title: 'Communicate clearly',
      image: '/images/careers/02-communication.jpg',
      alt: 'Project managers and architects communicating blueprint specifications clearly',
      category: 'Coordination & Clarity',
    },
    {
      id: '03',
      title: 'Work well with others',
      image: '/images/careers/03-teamwork.jpg',
      alt: 'Collaborative teamwork between field crews and project managers',
      category: 'Teamwork & Culture',
    },
    {
      id: '04',
      title: 'Pay attention to detail',
      image: '/images/careers/04-detail.jpg',
      alt: 'Architectural blueprint drafting and precision construction detail inspection',
      category: 'Precision & Accuracy',
    },
    {
      id: '05',
      title: 'Approach challenges with a problem-solving mindset',
      image: '/images/careers/05-problem-solving.jpg',
      alt: 'Development team resolving technical challenges with digital BIM models',
      category: 'Engineering & Agility',
    },
    {
      id: '06',
      title: 'Value quality and accountability',
      image: '/images/careers/06-quality-accountability.jpg',
      alt: 'Architectural craftsmanship and certified delivery standards',
      category: 'Standards & Execution',
    },
    {
      id: '07',
      title: 'Want to grow professionally',
      image: '/images/careers/07-growth.jpg',
      alt: 'Professional development, executive mentoring, and career growth',
      category: 'Advancement & Mastery',
    },
  ];



  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsApplying(false);
      setSelectedJob(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        portfolio: '',
        yearsExp: '',
        coverNote: '',
      });
    }, 2800);
  };

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 overflow-hidden bg-transparent text-[#BFBFBF]">
      {/* Background Subtle Ambience Glow */}
      <div className="absolute top-10 left-1/3 w-[650px] h-[650px] bg-brand-red/[0.04] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        
        {/* ========================================================
            1. HERO SECTION (Refined Visual Hierarchy & Pillar Badges)
            ======================================================== */}
        <section className="relative space-y-8">
          <SectionHeading
            tag="Build Your Career With BNS Development"
            title={<span className="block">Build Your Career With BNS Development</span>}
            highlight={<span className="block">Be Part of What's Next.</span>}
            description="At BNS Development, we believe great projects are built by people who bring experience, accountability, collaboration and a commitment to doing things right. We're always interested in connecting with talented professionals who want to contribute to meaningful development projects and grow with a team that values strong relationships and practical problem-solving."
            theme="dark"
            scaleColor="red"
          />

          {/* Value Indicator Badges */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-[#BFBFBF]">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                Florida &amp; Texas Markets
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                Diverse Project Sectors
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                Collaborative Team Culture
              </span>
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            2. WHY BNS DEVELOPMENT? (Interactive Bento Grid)
            ======================================================== */}
        <section className="space-y-10 sm:space-y-12">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="Why BNS Development?"
              title="Why BNS "
              highlight="Development?"
              description="We provide an environment where experience, collaboration, and practical problem-solving drive meaningful development projects."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBnsCards.map((card, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
                <div className="relative p-7 sm:p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-brand-red/50 backdrop-blur-2xl shadow-2xl shadow-black/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col justify-between h-full transition-all duration-500 group hover:-translate-y-1.5 overflow-hidden">
                  
                  {/* Top Specular Rim & Accent Light Bar */}
                  <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-brand-red/70 transition-all duration-500 pointer-events-none" />
                  
                  {/* Top Header Row with Icon and Number */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center justify-center text-brand-red group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:scale-105 transition-all duration-300 shadow-sm">
                        {card.icon}
                      </div>
                      <span className="text-xs font-mono tracking-widest text-[#BFBFBF]/50 group-hover:text-[#FFFFFF] transition-colors">
                        {card.num}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-lg sm:text-xl font-semibold font-display text-[#BFBFBF] group-hover:text-[#FFFFFF] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Micro-Pill Tag */}
                  <div className="pt-6 mt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono text-[#BFBFBF]/60 group-hover:text-white/80 transition-colors">
                      {card.accent}
                    </span>
                  </div>

                  {/* Subtle hover background glow */}
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brand-red/0 group-hover:bg-brand-red/[0.12] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            3. WE LOOK FOR PEOPLE WHO (Curated 3-Over-4 Bento Grid)
            ======================================================== */}
        <section className="space-y-10 sm:space-y-12">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="Who We Look For"
              title="We Look for "
              highlight="People Who"
              description="Our standard of excellence is built on dedication, clear communication, and collaborative problem-solving."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="space-y-6">
            {/* Top Tier: 3 Core Leadership & Culture Standards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {candidateTraits.slice(0, 3).map((trait, idx) => (
                <ScrollReveal key={trait.id} direction="up" delay={idx * 0.06}>
                  <div className="relative group overflow-hidden rounded-3xl border border-white/10 hover:border-brand-red/60 bg-[#0B0D11] shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end h-72 sm:h-80">
                    {/* Background Image with Zoom */}
                    <img
                      src={trait.image}
                      alt={trait.alt}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/ground-up.jpg';
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 select-none"
                      loading="lazy"
                    />

                    {/* Gradient Scrim for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/75 to-black/25 group-hover:via-[#080A0E]/60 transition-colors duration-300 pointer-events-none" />

                    {/* Content Container */}
                    <div className="relative z-10 p-6">
                      <h3 className="text-lg sm:text-xl font-semibold font-display text-[#BFBFBF] group-hover:text-[#FFFFFF] transition-colors leading-snug">
                        {trait.title}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom Tier: 4 Execution & Technical Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {candidateTraits.slice(3).map((trait, idx) => (
                <ScrollReveal key={trait.id} direction="up" delay={(idx + 3) * 0.06}>
                  <div className="relative group overflow-hidden rounded-3xl border border-white/10 hover:border-brand-red/60 bg-[#0B0D11] shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end h-64 sm:h-72">
                    {/* Background Image with Zoom */}
                    <img
                      src={trait.image}
                      alt={trait.alt}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/ground-up.jpg';
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 select-none"
                      loading="lazy"
                    />

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/75 to-black/25 group-hover:via-[#080A0E]/60 transition-colors duration-300 pointer-events-none" />

                    {/* Content Container */}
                    <div className="relative z-10 p-5 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold font-display text-[#BFBFBF] group-hover:text-[#FFFFFF] transition-colors leading-snug">
                        {trait.title}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            5. JOIN OUR TEAM (High-Impact Split CTA Showcase)
            ======================================================== */}
        <section id="join-our-team">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#0E1117] via-[#0A0C10] to-[#07080B] border border-white/10 hover:border-brand-red/40 backdrop-blur-2xl shadow-2xl overflow-hidden group">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
                {/* Left Column: Heading & Application Action */}
                <div className="lg:col-span-7 space-y-6">
                  <SectionHeading
                    tag="Join Our Team"
                    title="Join Our "
                    highlight="Team."
                    description="We'd like to hear from professionals who are interested in being part of BNS Development. If you believe your experience and skills could be a good fit, send us your resume and a brief introduction."
                    theme="dark"
                    scaleColor="red"
                  />

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={handleGeneralApply}
                      className="px-7 py-3.5 rounded-full bg-brand-red hover:bg-brand-redDark border border-brand-red text-xs sm:text-sm font-bold text-white/90 hover:text-white transition-all cursor-pointer shadow-xl shadow-brand-red/30 flex items-center gap-2.5 group/btn"
                    >
                      <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      <span>Send Resume &amp; Introduction</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        const el = document.getElementById('open-positions');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/30 text-xs sm:text-sm font-semibold text-[#BFBFBF] hover:text-[#FFFFFF] transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>Explore Active Roles</span>
                      <ChevronRight className="w-4 h-4 text-[#BFBFBF]/60" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Key Operational Directives */}
                <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold block">
                    Why Builders Thrive Here
                  </span>
                  
                  <div className="space-y-3 text-xs sm:text-sm font-sans text-[#9CA3AF]">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>Direct executive leadership access on every project</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Layers className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>Robust multi-sector pipeline across Florida &amp; Texas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Compass className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>Culture focused on autonomy, precision, and growth</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laser decorative background glow */}
              <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-red/15 transition-all duration-700" />
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            6. OPEN POSITIONS (Interactive Category Filters & Job Cards)
            ======================================================== */}
        <section id="open-positions" className="space-y-8 sm:space-y-10">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionHeading
                tag="Open Positions"
                title="Active Job "
                highlight="Opportunities."
                description="Explore open field and executive positions across our Florida and Texas operations."
                theme="dark"
                scaleColor="red"
              />
              <div className="shrink-0 mb-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#BFBFBF] font-mono text-xs tracking-wider">
                  {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} Available
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Department Filter Chips */}
          {departments.length > 2 && (
            <ScrollReveal direction="up" delay={0.08}>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xs font-mono text-[#BFBFBF]/50 flex items-center gap-1.5 mr-2">
                  <Filter className="w-3.5 h-3.5 text-brand-red" />
                  Department:
                </span>
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      selectedDepartment === dept
                        ? 'bg-brand-red text-white border border-brand-red shadow-md shadow-brand-red/25'
                        : 'bg-white/[0.04] text-[#BFBFBF]/70 hover:text-[#FFFFFF] border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Job Listings */}
          <div className="space-y-5">
            {filteredJobs.map((job, idx) => (
              <ScrollReveal key={job.id} direction="up" delay={idx * 0.06}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-brand-red/50 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:-translate-y-1 group hover-beam-card">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#BFBFBF]/60">
                      <span className="text-brand-red font-semibold">{job.department}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 text-[#BFBFBF]">
                        <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span className="text-[#BFBFBF] font-semibold">{job.experience}</span>
                    </div>

                    <h3
                      onClick={() => handleViewRole(job)}
                      className="text-xl sm:text-2xl font-semibold font-display text-[#BFBFBF] group-hover:text-[#FFFFFF] transition-colors cursor-pointer"
                    >
                      {job.title}
                    </h3>

                    <p className="text-sm text-[#9CA3AF] leading-relaxed font-sans">
                      {job.description}
                    </p>

                    <div className="pt-1 flex items-center gap-2 text-xs font-mono">
                      <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[#BFBFBF] font-bold">
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => handleViewRole(job)}
                      className="px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-xs font-bold text-[#BFBFBF] hover:text-[#FFFFFF] transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setIsApplying(true);
                      }}
                      className="px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-redDark border border-brand-red text-xs font-bold text-white/90 hover:text-white transition-all cursor-pointer shadow-md shadow-brand-red/25"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      {/* ========================================================
          APPLICATION MODAL (DARK LUXURY THEME)
          ======================================================== */}
      <AnimatePresence>
        {isApplying && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplying(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0C0E12] border border-white/15 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-[#BFBFBF]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-brand-red tracking-widest font-bold">
                    Application for Employment
                  </span>
                  <h3 className="text-xl font-semibold font-display text-[#BFBFBF] mt-0.5">
                    {selectedJob.title}
                  </h3>
                </div>
                <button
                  onClick={() => setIsApplying(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold font-display text-[#BFBFBF]">
                    Application Received
                  </h4>
                  <p className="text-sm text-[#9CA3AF] max-w-md mx-auto font-sans leading-relaxed">
                    Thank you for your submission for {selectedJob.title}. Our team will review your qualifications and contact you directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#BFBFBF] placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#BFBFBF] placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#BFBFBF] placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                        Years of Experience *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.yearsExp}
                        onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                        placeholder="e.g. 5+ Years"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#BFBFBF] placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#BFBFBF] placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                      Resume Attachment (PDF or DOCX)
                    </label>
                    <div className="p-4 rounded-xl border border-dashed border-white/20 bg-white/[0.02] text-center cursor-pointer hover:border-brand-red transition-colors">
                      <Upload className="w-5 h-5 text-brand-red mx-auto mb-1" />
                      <span className="text-xs text-neutral-400">Click to select resume file or drag here</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#BFBFBF] mb-1">
                      Brief Introduction / Note
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Share a brief introduction about your background, projects, or goals..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#BFBFBF] placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#BFBFBF] text-xs font-bold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-brand-red text-white/80 text-xs font-bold tracking-wider hover:bg-brand-redDark hover:text-white transition-colors shadow-lg shadow-brand-red/30 cursor-pointer"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
