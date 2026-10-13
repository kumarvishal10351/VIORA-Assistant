import React from 'react';

export default function Hero() {
  return (
    <div className="text-center max-w-2xl mx-auto pt-4 sm:pt-6 pb-1 sm:pb-2 px-2">

      <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl text-[#191b1a] font-semibold tracking-tight mb-2 sm:mb-2.5 leading-tight">
        What would you like to know?
      </h1>

      <p className="text-[13px] sm:text-sm text-[#5e6661] leading-relaxed max-w-lg mx-auto">
        Ask anything about your indexed documents. Answers are synthesized and cited directly from primary sources.
      </p>
    </div>
  );
}
