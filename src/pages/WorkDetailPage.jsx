import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, MapPin, Calendar, Maximize2, ShieldCheck, CheckCircle2,
  Building2, DollarSign, X, ChevronLeft, ChevronRight, Phone, Mail,
  HardHat, Eye, Award
} from 'lucide-react';
import { workProjectsData as projectsData } from '../data/workProjects';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import HouseCTA from '../components/HouseCTA';

export default function WorkDetailPage({
  project,
  setActivePage,
  setSelectedProject,
}) {
  // Determine active project from prop, URL query param, or fallback to first project
  const getActiveProject = () => {
    if (project && project.highlights) return project;
    if (project && project.id) {
      const found = projectsData.find((p) => p.id === project.id);
      if (found) return found;
    }
    if (typeof window !== 'undefined') {
      const searchStr = window.location.search || (window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
      const params = new URLSearchParams(searchStr);
      const id = params.get('id');
      if (id) {
        const found = projectsData.find((p) => p.id === id);
        if (found) return found;
      }
    }
    return projectsData[0];
  };

  const activeProj = getActiveProject();

  // Gallery state for lightbox
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages =
    activeProj.gallery && activeProj.gallery.length > 0
      ? activeProj.gallery
      : [activeProj.image];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <div className="relative pt-24 sm:pt-28 pb-24 text-white min-h-screen bg-transparent">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Breadcrumb & Return Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex items-center justify-between">
          <PremiumGlassButton
            onClick={() => {
              setActivePage('work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            size="sm"
            icon={<ArrowLeft className="w-3.5 h-3.5 text-brand-red" />}
          >
            Back to Portfolio
          </PremiumGlassButton>

          <div className="hidden sm:flex items-center gap-2 font-sans text-xs text-[#9CA3AF]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span>Project Case Study</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* ========================================================
            1. HERO SECTION: One Single Project Image
            ======================================================== */}
        <section className="relative">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0C0E12] shadow-2xl group">
              {/* Single Hero Project Image (No thumbnails in Hero) */}
              <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full min-h-[380px] sm:min-h-[500px] bg-black">
                <img
                  src={activeProj.image}
                  alt={activeProj.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 select-none"
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-transparent" />

                {/* Overlaid Title & Meta */}
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 max-w-4xl space-y-3">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-[2px] bg-brand-red inline-block shrink-0" />
                      <span className="text-xs sm:text-[13px] font-sans font-semibold text-[#9CA3AF] tracking-wider">
                        {activeProj.category}
                      </span>
                    </div>

                    {activeProj.status && (
                      <span className="text-[#9CA3AF] font-mono text-xs sm:text-[13px] tracking-wider uppercase font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                        • {activeProj.status}
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-[30px] md:text-[30px] lg:text-[30px] font-display font-semibold tracking-tight text-[#E6E6E6] leading-[1.2]">
                    {activeProj.title}
                  </h1>

                  {activeProj.subtitle && (
                    <p className="text-sm sm:text-base text-[#9CA3AF] font-sans max-w-2xl">
                      {activeProj.subtitle}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs sm:text-sm font-mono text-[#9CA3AF]">
                    <span className="flex items-center gap-1.5 text-[#B3B3B3]">
                      <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                      {activeProj.location}
                    </span>
                    <span className="text-[#9CA3AF]/40">•</span>
                    <span className="whitespace-nowrap">Completion: <span className="text-[#B3B3B3] font-medium whitespace-nowrap">{activeProj.year}</span></span>
                    <span className="text-[#9CA3AF]/40">•</span>
                    <span>Gross Area: <span className="text-[#B3B3B3] font-medium">{activeProj.sqft}</span></span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            2. Project Details: Specifications, Narrative & Highlights
            ======================================================== */}
        <section className="space-y-12">
          {/* Key Specifications Grid */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <span className="text-[14px] font-mono text-[#9CA3AF] tracking-widest block mb-1">
                  Gross Area
                </span>
                <div className="text-[24px] font-sans font-bold text-[#B3B3B3]" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {activeProj.sqft}
                </div>
                <span className="text-xs text-[#9CA3AF] font-sans mt-0.5 block">Conditioned Space</span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <span className="text-[14px] font-mono text-[#9CA3AF] tracking-widest block mb-1">
                  Capital Value
                </span>
                <div className="text-[24px] font-sans font-bold text-brand-red" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {activeProj.value}
                </div>
                <span className="text-xs text-[#9CA3AF] font-sans mt-0.5 block">Delivered Budget</span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <span className="text-[14px] font-mono text-[#9CA3AF] tracking-widest block mb-1">
                  Year Delivered
                </span>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-sans font-bold text-[#B3B3B3] whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {activeProj.year}
                </div>
                <span className="text-xs text-[#9CA3AF] font-sans mt-0.5 block">On-Time Substantial</span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <span className="text-[14px] font-mono text-[#9CA3AF] tracking-widest block mb-1">
                  Licensure Status
                </span>
                <div className="text-[24px] font-sans font-bold text-[#B3B3B3]" style={{ fontFamily: "'Lato', sans-serif" }}>
                  FL CGC 1505391
                </div>
                <span className="text-xs text-[#9CA3AF] font-sans mt-0.5 block">Self-Performed General Contracting</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative & Engineering Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Narrative & Contract Scope */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <SectionHeading
                  tag="Project Specification"
                  title="Architectural Precision &"
                  highlight="Execution."
                  scaleColor="red"
                  theme="dark"
                  titleClassName="!text-2xl sm:!text-[30px] md:!text-[30px] lg:!text-[30px] !leading-[1.2]"
                />

                <div className="mt-4 space-y-4">
                  <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-sans">
                    {activeProj.overview}
                  </p>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-brand-red font-bold">
                        Delivered Contract Scope
                      </span>
                      <span className="text-[10px] font-mono text-[#9CA3AF]">
                        BNS Responsibility
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#9CA3AF] font-sans leading-relaxed">
                      {activeProj.scope}
                    </p>
                  </div>

                  {activeProj.client && (
                    <div className="flex items-center gap-3 text-xs font-mono text-[#9CA3AF] px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-brand-red font-semibold">Project Client:</span>
                      <span className="text-[#B3B3B3]">{activeProj.client}</span>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Development Highlights */}
            <div className="lg:col-span-5 space-y-5">
              <ScrollReveal direction="up" delay={0.12}>
                <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-5 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-xs tracking-widest text-[#B3B3B3] font-bold">
                      Development Highlights
                    </span>
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                  </div>

                  <div className="space-y-3.5">
                    {activeProj.highlights &&
                      activeProj.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#9CA3AF] font-sans">
                          <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                    <span>Quality Audit</span>
                    <span className="text-brand-red font-semibold">OSHA-30 Compliant</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. Project Gallery: Visual Documentation & Multi-Angle Display
            ======================================================== */}
        <section className="space-y-8 pt-16">
          <ScrollReveal direction="up" delay={0.06}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionHeading
                tag="Visual Documentation"
                title="Project"
                highlight="Gallery."
                description="Explore high-resolution architectural documentation, interior spaces, structural finishes, and spatial perspectives for this build."
                theme="dark"
                scaleColor="red"
                titleClassName="!text-2xl sm:!text-[30px] md:!text-[30px] lg:!text-[30px] !leading-[1.2]"
              />

              <div className="font-mono text-xs text-[#9CA3AF] shrink-0 mb-4 sm:mb-8">
                <span>{galleryImages.length} {galleryImages.length === 1 ? 'Photograph' : 'Photographs'}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Gallery Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-brand-red/50 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1"
                >
                  <img
                    src={img}
                    alt={`${activeProj.title} photo ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/80 border border-brand-red/60 text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-5 h-5 text-brand-red" />
                    </div>
                  </div>

                  {/* Corner Label */}
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono font-medium text-[#9CA3AF] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    View {idx + 1}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. CTA SECTION: Consistent Home Page Video CTA
            ======================================================== */}
        <HouseCTA
          onStartProject={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

      </div>

      {/* ========================================================
          FULL-SCREEN LIGHTBOX MODAL FOR GALLERY
          ======================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setLightboxIndex(null)}
            />

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-brand-red text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                }}
                className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-black/60 hover:bg-brand-red text-white transition-colors border border-white/10 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {galleryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
                }}
                className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-black/60 hover:bg-brand-red text-white transition-colors border border-white/10 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Lightbox Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex]}
                alt={`${activeProj.title} fullscreen view ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="p-4 bg-black/80 backdrop-blur-md flex items-center justify-between text-xs font-mono text-[#9CA3AF] border-t border-white/10">
                <span className="text-[#E6E6E6] font-bold">{activeProj.title}</span>
                <span>
                  {lightboxIndex + 1} of {galleryImages.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
