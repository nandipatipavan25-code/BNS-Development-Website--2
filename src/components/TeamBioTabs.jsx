import React, { useState } from 'react';
import { teamData } from '../data/team';
import ScrollReveal from './ScrollReveal';

export default function TeamBioTabs({ onContactClick }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {teamData.map((person, idx) => {
          const isFlipped = !!flippedCards[person.id];

          return (
            <ScrollReveal key={person.id} delay={idx * 0.08} direction="up">
              <div
                onClick={() => toggleFlip(person.id)}
                className={`flip-card-container group h-[520px] sm:h-[550px] w-full cursor-pointer select-none ${
                  isFlipped ? 'is-flipped' : ''
                }`}
              >
                <div className="flip-card-inner">
                  {/* ========================================================
                      FRONT OF CARD: Profile Image, Name, Role
                      ======================================================== */}
                  <div className="flip-card-front bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-brand-red/50 transition-all duration-500 shadow-2xl flex flex-col justify-between">
                    {/* Top Portrait Image */}
                    <div className="relative h-[360px] sm:h-[385px] w-full overflow-hidden bg-[#0A0C10]">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: 'top center' }}
                        loading="lazy"
                      />

                      {/* Top Role Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-sans font-semibold text-brand-red">
                        {person.role}
                      </div>

                      {/* Bottom Image Fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Lower Info Shelf */}
                    <div className="p-5 flex-1 flex flex-col justify-center bg-transparent">
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-semibold font-display text-white tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                          {person.name}
                        </h3>
                        <p className="text-xs text-[#A8A8A0] font-sans mt-1.5 leading-relaxed">
                          {person.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================
                      BACK OF CARD: Full Name, Bio & All Credentials (Blurred Glass)
                      ======================================================== */}
                  <div className="flip-card-back bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-black/50 backdrop-blur-2xl border border-white/15 group-hover:border-brand-red/60 p-5 sm:p-6 flex flex-col justify-between relative shadow-2xl text-left">
                    {/* Atmospheric Portrait Watermark */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <img
                        src={person.image}
                        alt=""
                        className="w-full h-full object-cover object-top opacity-10 filter grayscale brightness-100"
                        style={{ objectPosition: 'top center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
                    </div>

                    {/* Scrollable / Full Content Body */}
                    <div className="relative z-10 overflow-y-auto pr-1 space-y-4 max-h-[450px] sm:max-h-[470px] scrollbar-thin scrollbar-thumb-white/10">
                      {/* Top Header Information */}
                      <div className="space-y-1">
                        <div className="text-[11px] font-semibold text-brand-red tracking-wider font-sans uppercase">
                          {person.role}
                        </div>

                        <h3 className="text-xl sm:text-[22px] font-semibold font-display text-white tracking-tight leading-snug">
                          {person.name}
                        </h3>

                        <p className="text-xs text-neutral-300 font-sans leading-tight">
                          {person.title}
                        </p>

                        <div className="w-8 h-[2px] bg-brand-red pt-0.5 my-2 rounded-full" />
                      </div>

                      {/* Full Biography */}
                      <div>
                        <p className="text-[12px] text-[#E0E0DC] leading-relaxed font-sans">
                          {person.bio}
                        </p>
                      </div>

                      {/* Full Verified Professional Credentials */}
                      {person.credentials && person.credentials.length > 0 && (
                        <div className="space-y-2 pt-3 border-t border-white/10">
                          <div className="text-[10px] font-mono text-neutral-400 font-semibold tracking-wider uppercase">
                            Core Credentials & Leadership
                          </div>

                          <div className="space-y-2">
                            {person.credentials.map((cred, cIdx) => (
                              <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-200 font-sans">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                                <span className="leading-snug text-[11px] text-[#E0E0DC]">
                                  {cred}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Metadata */}
                    <div className="relative z-10 pt-2.5 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-neutral-400">
                      <span className="text-[11px] text-neutral-400 font-sans">BNS Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}



