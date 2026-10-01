import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import PremiumGlassButton from './PremiumGlassButton';

export default function ServiceBreadcrumb({ currentTitle, setActivePage }) {
  const handleNav = (page) => {
    if (setActivePage) {
      setActivePage(page);
    } else {
      window.location.hash = `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full mb-8 sm:mb-12">
      <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 sm:px-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg">
        {/* Breadcrumbs trail */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF]">
          <button
            onClick={() => handleNav('home')}
            className="hover:text-white transition-colors cursor-pointer font-medium"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
          <button
            onClick={() => handleNav('services')}
            className="hover:text-white transition-colors cursor-pointer font-medium"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
          <span className="text-brand-red font-semibold truncate max-w-[200px] sm:max-w-none">
            {currentTitle}
          </span>
        </nav>

        {/* Back button */}
        <button
          onClick={() => handleNav('services')}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-brand-red transition-transform group-hover:-translate-x-1" />
          <span className="text-[#9CA3AF] group-hover:text-white transition-colors">Back to Services</span>
        </button>
      </div>
    </div>
  );
}
