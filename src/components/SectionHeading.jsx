import React from 'react';
import { motion } from 'framer-motion';
import ScrollWordReveal from './ScrollWordReveal';
import CraneIcon from './CraneIcon';

export { CraneIcon };

/**
 * Scale Icon Component
 * Powered by crane.json Lottie animation ("06 progress crane house")
 */
export function ConstructionScaleSVG({ color = 'red', size = 22, className = '' }) {
  return <CraneIcon size={size} className={className} />;
}

export default function SectionHeading({
  tag = "Section",
  title = "Heading Title",
  highlight = "",
  description = "",
  centered = false,
  theme = "dark", // 'dark' | 'light'
  scaleColor = "red", // 'red' | 'white'
  showRedLine = null, // null | boolean (defaults to true)
  tagColor = "light", // 'light' (#9CA3AF) | 'red' (#D71920)
  useWordReveal = true,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  // Clean tag string by removing leading slashes
  const cleanTag = typeof tag === 'string' ? tag.replace(/^\/\/\s*/, '') : tag;
  const hasCustomMargin = /(^|\s)m[by]-/.test(className);
  const useLine = showRedLine !== null ? showRedLine : true;

  return (
    <div className={`${hasCustomMargin ? '' : (description ? 'mb-6 sm:mb-8' : 'mb-3 sm:mb-4')} ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {/* Clean, Minimal Section Eyebrow Label (Style 1: Red Line + Light Text / Style 2: Text-Only) */}
      {cleanTag && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`flex items-center gap-2.5 mb-2.5 ${
            centered ? 'justify-center text-center' : ''
          }`}
        >
          {useLine && (
            <span className="w-5 h-[2px] bg-brand-red inline-block shrink-0" />
          )}
          <span className={`text-xs sm:text-[13px] font-sans font-semibold tracking-wider ${
            useLine
              ? 'text-[#9CA3AF]'
              : (tagColor === 'red' ? 'text-brand-red' : 'text-[#9CA3AF]')
          }`}>
            {cleanTag}
          </span>
        </motion.div>
      )}

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-[38px] lg:text-[38px] section-heading-title font-display font-semibold tracking-tight leading-[1.15] text-brand-heading ${
          centered ? 'text-center' : ''
        } ${titleClassName}`}
      >
        <span>{title} </span>
        {highlight && (
          <span className="text-brand-red font-semibold">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description with Scroll Text Reveal Effect */}
      {description && (
        <div className="mt-3 sm:mt-3.5">
          {typeof description === 'string' && useWordReveal ? (
            <ScrollWordReveal
              text={description}
              colorRevealed="#9CA3AF"
              colorHidden="rgba(156, 163, 175, 0.35)"
              className={`text-sm sm:text-base md:text-[16px] leading-[1.65] font-sans text-[#9CA3AF] ${
                centered ? 'justify-center text-center max-w-2xl mx-auto' : 'max-w-2xl'
              } ${descriptionClassName}`}
            />
          ) : (
            <div className={`text-sm sm:text-base md:text-[16px] leading-[1.65] font-sans text-[#9CA3AF] ${
                centered ? 'justify-center text-center max-w-2xl mx-auto' : 'max-w-2xl'
              } ${descriptionClassName}`}>
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
