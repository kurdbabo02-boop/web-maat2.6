import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';

interface ComparisonRow {
  feature: string;
  others: string;
  ours: string;
}

const PremiumPositioningSection = () => {
  const { language } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const rows: ComparisonRow[] =
    language === 'nl'
      ? [
          { feature: 'Design', others: 'Template', ours: 'Maatwerk' },
          { feature: 'SEO', others: 'Basis', ours: 'Volledig' },
          { feature: 'Beveiliging', others: 'Standaard', ours: 'Uitgebreid' },
          { feature: 'Support', others: 'Ticketsysteem', ours: 'Direct contact' },
          { feature: 'Conversie', others: 'Niet meegenomen', ours: 'Ingebouwd' },
          { feature: 'Resultaat', others: 'Wisselend', ours: 'Meetbaar' },
        ]
      : [
          { feature: 'Design', others: 'Template', ours: 'Custom' },
          { feature: 'SEO', others: 'Basic', ours: 'Complete' },
          { feature: 'Security', others: 'Standard', ours: 'Advanced' },
          { feature: 'Support', others: 'Ticket system', ours: 'Direct contact' },
          { feature: 'Conversion', others: 'Not included', ours: 'Built-in' },
          { feature: 'Results', others: 'Inconsistent', ours: 'Measurable' },
        ];

  const mobileRows: ComparisonRow[] =
    language === 'nl'
      ? [
          { feature: 'Design', others: 'Template', ours: 'Maatwerk' },
          { feature: 'SEO', others: 'Basis', ours: 'Volledig' },
          { feature: 'Beveiliging', others: 'Standaard', ours: 'Uitgebreid' },
          { feature: 'Support', others: 'Tickets', ours: 'Direct' },
          { feature: 'Conversie', others: 'Nee', ours: 'Ingebouwd' },
          { feature: 'Resultaat', others: 'Wisselend', ours: 'Meetbaar' },
        ]
      : [
          { feature: 'Design', others: 'Template', ours: 'Custom' },
          { feature: 'SEO', others: 'Basic', ours: 'Complete' },
          { feature: 'Security', others: 'Standard', ours: 'Advanced' },
          { feature: 'Support', others: 'Tickets', ours: 'Direct' },
          { feature: 'Conversion', others: 'No', ours: 'Built-in' },
          { feature: 'Results', others: 'Mixed', ours: 'Measurable' },
        ];

  return (
    <section className="bg-[#F0F4F9] pt-20 pb-0 max-md:pt-12">
      <motion.div
        ref={ref}
        className="max-w-[900px] mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Header */}
        <motion.header
          className="mb-8 flex items-baseline gap-3 max-md:flex-col max-md:gap-1 max-md:mb-6"
          variants={fadeInUp}
        >
          <h2 className="text-[28px] max-md:text-[22px] font-bold text-[#0F172A]">
            {language === 'nl' ? 'Waarom wij' : 'Why us'}
          </h2>
          <span className="text-sm text-[#64748B] font-normal">
            {language === 'nl' ? 'Wat ons onderscheidt' : 'What sets us apart'}
          </span>
        </motion.header>

        {/* Desktop Table */}
        <motion.div
          className="hidden md:block bg-[#EBF1F7] border border-[#D1D9E6] rounded-xl overflow-hidden"
          variants={fadeInUp}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#D1D9E6]">
                <th className="py-5 px-4 pl-7 text-left text-[13px] font-semibold uppercase tracking-[0.04em] text-[#64748B]" />
                <th className="py-5 px-4 text-center text-[13px] font-semibold uppercase tracking-[0.04em] text-[#64748B]">
                  {language === 'nl' ? 'Anderen' : 'Others'}
                </th>
                <th className="py-5 px-4 text-center text-[13px] font-semibold uppercase tracking-[0.04em] text-[#1E4BA1]">
                  {language === 'nl' ? 'Wij' : 'Us'}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i < rows.length - 1 ? 'border-b border-[#D1D9E6]' : ''}>
                  <td className="py-4 px-4 pl-7 text-left text-sm font-medium text-[#0F172A]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center text-sm">
                    <span className="text-[#dc2626] font-semibold opacity-60">{row.others}</span>
                  </td>
                  <td className="py-4 px-4 text-center text-sm font-semibold text-[#0F172A]">
                    <span className="text-[#16a34a] font-semibold">{row.ours}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card */}
        <motion.div
          className="md:hidden bg-[#EBF1F7] border border-[#D1D9E6] rounded-xl p-5 overflow-hidden"
          variants={fadeInUp}
        >
          {/* Mobile header row */}
          <div className="grid grid-cols-3 pb-3 border-b border-[#D1D9E6] mb-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#64748B] text-left" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#64748B] text-center">
              {language === 'nl' ? 'Anderen' : 'Others'}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#1E4BA1] text-center">
              {language === 'nl' ? 'Wij' : 'Us'}
            </span>
          </div>

          {/* Mobile rows */}
          {mobileRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center py-3 ${i < mobileRows.length - 1 ? 'border-b border-[#D1D9E6]' : ''}`}
            >
              <span className="text-[13px] font-medium text-[#0F172A]">{row.feature}</span>
              <span className="text-[12px] font-semibold text-center text-[#dc2626] opacity-60">{row.others}</span>
              <span className="text-[12px] font-semibold text-center text-[#16a34a]">{row.ours}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom divider */}
        <div className="h-px w-1/2 max-w-[500px] mx-auto mt-12 max-md:mt-9 bg-gradient-to-r from-transparent via-[rgba(30,75,161,0.25)] to-transparent" />
      </motion.div>
    </section>
  );
};

export default PremiumPositioningSection;
