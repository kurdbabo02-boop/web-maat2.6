import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, useScrollAnimation } from '@/hooks/useScrollAnimation';

const AnimatedStatValue = ({ end, suffix, start }: { end: number; suffix: string; start: boolean }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let animationFrame = 0;
    let startTimestamp: number | null = null;
    const duration = 1800;

    const tick = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [start, end]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
};

const StatsMiniSection = () => {
  const { language } = useLanguage();
  const { ref, controls, isInView } = useScrollAnimation(0.15);

  const stats = [
    { end: 150, suffix: '+', label: language === 'nl' ? 'Projecten' : 'Projects' },
    { end: 98, suffix: '%', label: language === 'nl' ? 'Tevredenheid' : 'Satisfaction' },
    { end: 24, suffix: 'u', label: language === 'nl' ? 'Response' : 'Response' },
  ];

  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-[#eef3fb] py-4 md:py-5">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.48)_0%,rgba(238,243,251,0)_100%)]" />

      <motion.div
        ref={ref}
        className="container relative z-[2] mx-auto container-padding max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        <motion.div className="grid grid-cols-3 gap-2 md:gap-6" variants={fadeInUp}>
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white/45 px-2 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-[2px] md:px-4 md:py-4">
              <p className="text-lg md:text-xl font-display font-bold text-[#1E4BA1] leading-none tabular-nums">
                <AnimatedStatValue end={stat.end} suffix={stat.suffix} start={isInView} />
              </p>
              <p className="mt-1 text-[9px] md:mt-1.5 md:text-xs text-slate-700 font-medium uppercase tracking-[0.16em]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsMiniSection;
