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
  showRedLine = null, // null | boolean (defaults to true if null, unless centered)
  tagColor = "light", // 'light' (#A8A8A0) | 'red' (#D71920)
  useWordReveal = true,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  // Clean tag string by removing leading slashes
  const cleanTag = typeof tag === 'string' ? tag.replace(/^\/\/\s*/, '') : tag;
  const hasCustomMargin = /(^|\s)m[by]-/.test(className);
  const useLine = showRedLine !== null ? showRedLine : !centered;

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
              ? 'text-[#A8A8A0]'
              : (tagColor === 'red' ? 'text-brand-red' : 'text-[#A8A8A0]')
          }`}>
            {cleanTag}
          </span>
        </motion.div>
      )}

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold tracking-tight leading-[1.15] text-brand-heading ${
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
        <div className="mt-2.5 sm:mt-3">
          {typeof description === 'string' && useWordReveal ? (
            <ScrollWordReveal
              text={description}
              colorRevealed="#A8A8A0"
              colorHidden="rgba(168, 168, 160, 0.25)"
              className={`text-sm sm:text-base leading-relaxed font-sans text-brand-subtext ${
                centered ? 'justify-center text-center' : ''
              } ${descriptionClassName}`}
            />
          ) : (
            <div className={`text-sm sm:text-base leading-relaxed font-sans text-[#A8A8A0] ${
              centered ? 'justify-center text-center' : ''
            } ${descriptionClassName}`}>
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
