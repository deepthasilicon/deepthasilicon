import { motion } from 'framer-motion';
import {
  Heart, Lightbulb,
  BookOpen, Microscope, MessageSquare, Handshake
} from 'lucide-react';
const trainerImage = '/images/IMG-20260727-WA0024.jpg';
import IconBadge from '../components/IconBadge';
import CounselingCTA from '../components/CounselingCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const responsibilities = [
  { icon: BookOpen, gradient: 'blue' as const, label: 'Technical Training' },
  { icon: Microscope, gradient: 'emerald' as const, label: 'Project Mentoring' },
  { icon: MessageSquare, gradient: 'orange' as const, label: 'Interview Preparation' },
  { icon: Handshake, gradient: 'amber' as const, label: 'Career Guidance' },
];

export default function TrainerPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Meet Our <span className="text-accent-400">Trainer</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Blending academic excellence with hands-on ASIC Physical Design experience to guide students from classrooms to careers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP: Photo + Key Responsibilities side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-12">

            {/* LEFT: Photo + name + bio */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={trainerImage}
                alt="Siva Ram Chinthala"
                className="w-36 h-36 rounded-full object-cover border-2 border-primary-200 mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 leading-tight">
                Siva Ram Chinthala
              </h2>
              <p className="text-secondary-500 font-medium text-sm mt-1 mb-5">
                Director – Technical & Lead Trainer
              </p>
              <div className="text-neutral-600 leading-relaxed space-y-3 text-sm text-left">
                <p>
                  Technical Director and Lead Trainer with 15+ years in ASIC Physical Design, bridging academic depth and industry practice to mentor future chip designers.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Key Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-primary-500 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Key Responsibilities
              </h3>
              <div className="space-y-3">
                {responsibilities.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    variants={fadeIn}
                    className="flex items-center gap-4 bg-gradient-to-br from-neutral-50 to-primary-50/50 rounded-xl p-4 border border-primary-100 hover:shadow-md transition-all"
                  >
                    <IconBadge icon={item.icon} gradient={item.gradient} size="md" className="flex-shrink-0" />
                    <p className="font-bold text-primary-500 text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* BOTTOM: Philosophy in one column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-neutral-200 pt-12 space-y-8"
          >
            {/* Mentoring Philosophy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Heart className="w-4 h-4" />
                Teaching Approach
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-3">
                Mentoring Philosophy
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We believe that every student deserves personal attention, the freedom to ask questions, and continuous support throughout their career journey.
              </p>

              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" />
                    <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="2" />
                    <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div className="relative">
                  <IconBadge icon={Heart} gradient="accent" size="lg" variant="glass" className="mb-4" />
                  <h3 className="text-xl font-bold mb-4">Core Belief</h3>
                  <blockquote className="text-lg leading-relaxed italic font-light">
                    "Every student deserves personal attention, the freedom to ask questions, and continuous support — not just during the course, but throughout their career journey."
                  </blockquote>
                  <p className="mt-6 text-white/70 text-sm">— Siva Ram Chinthala</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <CounselingCTA />
    </div>
  );
}
