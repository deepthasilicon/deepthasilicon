import { motion } from 'framer-motion';
import {
  Heart, Lightbulb, BookOpen, Sparkles,
  Cpu, Wrench, Briefcase, Network, Users2, Compass,
  Presentation, ShieldCheck, CircuitBoard, Microscope, Trophy
} from 'lucide-react';
import IconBadge from '../components/IconBadge';
import CounselingCTA from '../components/CounselingCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const differences = [
  { icon: ShieldCheck, gradient: 'blue' as const, title: 'Rigorous Selection Process' },
  { icon: Compass, gradient: 'emerald' as const, title: 'Start from Fundamentals' },
  { icon: BookOpen, gradient: 'orange' as const, title: 'Industry-Aligned Curriculum' },
  { icon: Heart, gradient: 'rose' as const, title: 'Expert Trainers & Personalized Mentorship' },
  { icon: CircuitBoard, gradient: 'purple' as const, title: 'Advanced EDA Tool & Lab Exposure' },
  { icon: Wrench, gradient: 'amber' as const, title: '70% Hands-On Learning' },
  { icon: Microscope, gradient: 'teal' as const, title: 'Real-Time Industry Projects (28nm–45nm)' },
  { icon: Presentation, gradient: 'cyan' as const, title: 'Expert Talks & Industry Connect' },
  { icon: Briefcase, gradient: 'indigo' as const, title: 'Placement Assistance & Career Support' },
  { icon: Users2, gradient: 'pink' as const, title: 'Small Batch Size & Personalized Attention' },
  { icon: Network, gradient: 'sky' as const, title: 'Strong Learning Community' },
  { icon: Trophy, gradient: 'lime' as const, title: 'Holistic Development' },
];

export default function WhyDSTPage() {
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
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-5 h-5" />
              From Academia to Industry Readiness
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Why Choose
              <span className="block text-accent-400">Deeptha Silicon Technologies?</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between academic learning and industry expectations through practical training, mentorship, and career guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-column: Our Story + Differentiators */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* LEFT: Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Lightbulb className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-6 leading-tight">
                Why DST Was Started
              </h2>
              <div className="text-neutral-600 leading-relaxed space-y-4">
                <p>
                  Having trained numerous students over the years, we observed that many talented engineers lacked the guidance, practical exposure, mentorship, and structured roadmap needed to become industry-ready professionals.
                </p>
                <p>
                  This inspired us to establish Deeptha Silicon Technologies — a place where students receive industry-focused training, hands-on learning, continuous mentorship, and a clear path toward a successful VLSI career.
                </p>
              </div>

              <div className="mt-6 p-5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-200/60">
                <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  <Heart className="w-3.5 h-3.5" />
                  Our Purpose
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Transforming aspiring engineers into industry-ready VLSI professionals through practical training, expert mentorship, and career-focused development.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Differentiators */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Cpu className="w-4 h-4" />
                Our Differentiators
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-6 leading-tight">
                What Makes Us Different?
              </h2>
              <p className="text-neutral-500 mb-6">
                Twelve pillars that define the Deeptha Silicon Technologies experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {differences.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                    variants={fadeIn}
                    className="flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-4 py-3.5 hover:shadow-md hover:border-neutral-300 transition-all duration-300"
                  >
                    <IconBadge icon={item.icon} gradient={item.gradient} size="sm" className="flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-primary-500 leading-tight">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary-500 via-secondary-600 to-primary-600 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <IconBadge icon={Sparkles} gradient="accent" size="xl" variant="glass" className="mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Promise
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              At DST, every student receives a structured roadmap, practical exposure, continuous mentorship, and career guidance throughout their learning journey.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="h-16" aria-hidden="true" />

      <CounselingCTA />
    </div>
  );
}
