import React, { useState } from 'react';
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
  Check,
  Send,
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import { jobsData } from '../data/jobs';

export default function CareersPage({ setActivePage, setSelectedJob: setSelectedJobProp }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const whyBnsCards = [
    {
      icon: <Building2 className="w-5 h-5 text-brand-red" />,
      title: 'Work on Diverse Projects',
      desc: 'Gain experience across residential, multifamily, hospitality, commercial and mixed-use development.',
    },
    {
      icon: <Award className="w-5 h-5 text-brand-red" />,
      title: 'Learn From Experience',
      desc: 'Work alongside professionals with extensive experience across development, project management and construction.',
    },
    {
      icon: <Users className="w-5 h-5 text-brand-red" />,
      title: 'Be Part of the Team',
      desc: 'We believe successful projects depend on people working together, communicating clearly and taking ownership of their responsibilities.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-red" />,
      title: 'Grow With Us',
      desc: 'We value people who are ready to learn, take on responsibility and contribute to the continued growth of BNS Development.',
    },
  ];

  const candidateTraits = [
    {
      title: 'Take ownership of their work',
      image: '/images/ground-up.jpg',
      alt: 'Taking ownership of development work on site',
    },
    {
      title: 'Communicate clearly',
      image: '/images/process/step-03-coordination.jpg',
      alt: 'Clear communication and active team coordination',
    },
    {
      title: 'Work well with others',
      image: '/images/about-project-partner.jpg',
      alt: 'Collaborative teamwork across development partners',
    },
    {
      title: 'Pay attention to detail',
      image: '/images/process/step-04-details.jpg',
      alt: 'Precision estimating and architectural details',
    },
    {
      title: 'Approach challenges with a problem-solving mindset',
      image: '/images/design-build.jpg',
      alt: 'Integrated problem solving in design and construction',
    },
    {
      title: 'Value quality and accountability',
      image: '/images/process/step-05-delivery.jpg',
      alt: 'Unwavering quality and milestone accountability',
    },
    {
      title: 'Want to grow professionally',
      image: '/images/home-strategic-leadership.jpg',
      alt: 'Professional development and leadership growth',
    },
  ];

  // Pure Visual Culture Gallery (Images Only)
  const cultureGallery = [
    {
      id: 1,
      src: '/images/about-hero.jpg',
      alt: 'BNS Executive Project Review & Field Leadership',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Jobsite Structural Steel Team Collaboration',
    },
    {
      id: 3,
      src: '/images/preconstruction.jpg',
      alt: 'Pre-Development Planning & Technical Estimating',
    },
    {
      id: 4,
      src: '/images/design-build.jpg',
      alt: 'Integrated Design-Build Architecture & Engineering',
    },
    {
      id: 5,
      src: '/images/ground-up.jpg',
      alt: 'Commercial Ground-Up Site Leadership',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern Digital Development Management',
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
    <div className="relative pt-24 sm:pt-32 pb-24 overflow-hidden bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">
        {/* ========================================================
            1. HERO SECTION
            ======================================================== */}
        <section className="space-y-6">
          <SectionHeading
            tag="Build Your Career With BNS Development"
            title={<span className="block">Build Your Career With BNS Development</span>}
            highlight={<span className="block">Be Part of What's Next.</span>}
            description="At BNS Development, we believe great projects are built by people who bring experience, accountability, collaboration and a commitment to doing things right. We're always interested in connecting with talented professionals who want to contribute to meaningful development projects and grow with a team that values strong relationships and practical problem-solving."
            theme="dark"
            scaleColor="red"
          />

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <PremiumGlassButton
              onClick={() => {
                const el = document.getElementById('open-positions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              size="md"
              baseColor="#000000"
              glassColor="#ffffff"
              hoverSpeed={0.7}
            >
              View Open Positions
            </PremiumGlassButton>

            <button
              onClick={handleGeneralApply}
              className="px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-brand-red/50 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-all cursor-pointer flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-brand-red" />
              <span>Send Resume &amp; Introduction</span>
            </button>
          </div>
        </section>

        {/* ========================================================
            2. WHY BNS DEVELOPMENT?
            ======================================================== */}
        <section className="space-y-10">
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
                <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1 hover-beam-card">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center text-brand-red group-hover:border-brand-red/60 group-hover:bg-brand-red/10 transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-body leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            3. WE LOOK FOR PEOPLE WHO (Visual Image Cards)
            ======================================================== */}
        <section className="space-y-8 sm:space-y-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {candidateTraits.map((trait, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
                <div className="relative group overflow-hidden rounded-3xl border border-white/10 hover:border-brand-red/60 bg-[#0B0D11] shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end h-64 sm:h-72">
                  {/* Background Image with Zoom on Hover */}
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

                  {/* Dark Gradient Overlay for optimal readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/75 to-black/25 group-hover:via-[#080A0E]/60 transition-colors duration-300 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-8 h-8 rounded-xl bg-brand-red/30 border border-brand-red/50 backdrop-blur-md flex items-center justify-center text-white shadow-md shadow-brand-red/20 group-hover:bg-brand-red group-hover:scale-105 transition-all duration-300">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 p-5 sm:p-6 space-y-1.5">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-brand-red font-semibold">
                      Standard 0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug">
                      {trait.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. OUR CULTURE: Visual Showcase (Images Only)
            ======================================================== */}
        <section className="space-y-8 sm:space-y-10">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="Life at BNS"
              title="Our "
              highlight="Culture."
              description="A culture defined by field leadership, accountability, and the shared pride of delivering monumental structures."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {cultureGallery.map((item, idx) => (
              <ScrollReveal key={item.id} direction="up" delay={idx * 0.06}>
                <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-brand-red/50 shadow-xl group transition-all duration-500 hover:-translate-y-1">
                  <img
                    src={item.src}
                    alt={item.alt}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/ground-up.jpg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. JOIN OUR TEAM (Call to Action)
            ======================================================== */}
        <section id="join-our-team">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="relative rounded-3xl p-8 sm:p-12 bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="relative z-10 max-w-3xl space-y-6">
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
                    className="px-6 py-3.5 rounded-full bg-brand-red hover:bg-brand-redDark border border-brand-red text-xs sm:text-sm font-bold text-white/90 hover:text-white transition-all cursor-pointer shadow-lg shadow-brand-red/30 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Resume &amp; Introduction</span>
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('open-positions');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/30 text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition-all cursor-pointer"
                  >
                    Browse Active Positions ({jobsData.length})
                  </button>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-red/15 transition-all duration-700" />
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            6. OPEN POSITIONS: Active Opportunities
            ======================================================== */}
        <section id="open-positions" className="space-y-10">
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
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-brand-subheading font-mono text-xs tracking-wider">
                  {jobsData.length} Positions Open in TX &amp; FL
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {jobsData.map((job, idx) => (
              <ScrollReveal key={job.id} direction="up" delay={idx * 0.06}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:-translate-y-1 group hover-beam-card">
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-brand-mutedText">
                      <span className="text-brand-red font-semibold">{job.department}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 text-brand-body">
                        <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span className="text-brand-subheading font-semibold">{job.experience}</span>
                    </div>

                    <h3
                      onClick={() => handleViewRole(job)}
                      className="text-2xl font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors cursor-pointer"
                    >
                      {job.title}
                    </h3>

                    <p className="text-sm text-brand-body leading-relaxed font-sans">
                      {job.description}
                    </p>

                    <div className="pt-1 flex items-center gap-2 text-xs font-mono">
                      <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-brand-subheading font-bold">
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => handleViewRole(job)}
                      className="px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-xs font-bold text-white/70 hover:text-white transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        setSelectedJob(job);
                        setIsApplying(true);
                      }}
                      className="px-4 py-2.5 rounded-full bg-brand-red hover:bg-brand-redDark border border-brand-red text-xs font-bold text-white/80 hover:text-white transition-all cursor-pointer shadow-md shadow-brand-red/25"
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
          APPLICATION MODAL (DARK THEME)
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
              className="relative w-full max-w-xl bg-[#0C0E12] border border-white/15 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-brand-red tracking-widest font-bold">
                    Application for Employment
                  </span>
                  <h3 className="text-xl font-semibold font-display text-white mt-0.5">
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
                  <h4 className="text-2xl font-semibold font-display text-white">
                    Application Received
                  </h4>
                  <p className="text-sm text-brand-body max-w-md mx-auto font-sans leading-relaxed">
                    Thank you for your submission for {selectedJob.title}. Our team will review your qualifications and contact you directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(512) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">
                        Years of Experience *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.yearsExp}
                        onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                        placeholder="e.g. 5+ Years"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">
                      Resume Attachment (PDF or DOCX)
                    </label>
                    <div className="p-4 rounded-xl border border-dashed border-white/20 bg-white/[0.02] text-center cursor-pointer hover:border-brand-red transition-colors">
                      <Upload className="w-5 h-5 text-brand-red mx-auto mb-1" />
                      <span className="text-xs text-neutral-400">Click to select resume file or drag here</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">
                      Brief Introduction / Note
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Share a brief introduction about your background, projects, or goals..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none font-sans"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-bold transition-colors cursor-pointer"
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
