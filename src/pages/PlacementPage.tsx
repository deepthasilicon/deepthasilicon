import { motion } from 'framer-motion';
import {
  Award, Heart,
  Presentation, MessageSquare, Network, MessagesSquare, FileText,
  Bell, Infinity as InfinityIcon
} from 'lucide-react';
import IconBadge from '../components/IconBadge';
import CounselingCTA from '../components/CounselingCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const support = [
  { icon: Presentation, gradient: 'blue' as const, title: 'Industry Expert Sessions & Career Mentoring' },
  { icon: MessageSquare, gradient: 'emerald' as const, title: 'Mock Interviews & Technical Evaluation Discussions' },
  { icon: Network, gradient: 'orange' as const, title: 'Professional Networking & Industry Referrals' },
  { icon: MessagesSquare, gradient: 'rose' as const, title: 'Communication & Workplace Readiness Development' },
  { icon: FileText, gradient: 'purple' as const, title: 'Resume Building & Profile Enhancement' },
  { icon: Bell, gradient: 'amber' as const, title: 'Job Opportunity Updates & Application Support' },
  { icon: InfinityIcon, gradient: 'teal' as const, title: 'Continuous Career Guidance Beyond Placement' },
];

export default function PlacementPage() {
  return (
    <div className="pt-14 overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Placement
              <span className="block text-accent-400">Assistance</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              End-to-end career support that extends beyond the classroom and continues throughout your semiconductor journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column: Support list + Commitment */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

            {/* LEFT: Career Support list */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Award className="w-4 h-4" />
                Comprehensive Support
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
                Our Career Support Includes
              </h2>
              <p className="text-neutral-500 mb-6">
                From interview preparation to industry connections, we support you at every step of your career journey.
              </p>

              <div className="flex flex-col gap-3">
                {support.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                    variants={fadeIn}
                    className="flex items-start gap-4 bg-white rounded-xl border border-neutral-200 p-5 hover:shadow-md hover:border-neutral-300 transition-all duration-300"
                  >
                    <IconBadge icon={item.icon} gradient={item.gradient} size="md" className="flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-bold text-primary-500">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* RIGHT: Our Commitment */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-6">
                Our Commitment
              </h2>

              <div className="bg-gradient-to-br from-secondary-500 via-secondary-600 to-primary-600 rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="relative">
                  <IconBadge icon={Heart} gradient="accent" size="xl" variant="glass" className="mb-6" />

                  <div className="space-y-5">
                    <p className="text-white/90 text-lg leading-relaxed">
                      Supporting engineers beyond their first offer — mentoring through industry transition, early career challenges, and growth into confident VLSI professionals.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-accent-300 font-semibold text-base">
                      We measure our success by your success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <CounselingCTA />
    </div>
  );
}
