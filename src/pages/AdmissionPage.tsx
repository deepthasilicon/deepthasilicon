import { motion } from 'framer-motion';
import {
  CheckCircle2, Target, GraduationCap, Award,
  MonitorPlay, ClipboardCheck, MessageSquare, Cpu, Binary, Code, Brain
} from 'lucide-react';
import IconBadge from '../components/IconBadge';
import CounselingCTA from '../components/CounselingCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const stages = [
  {
    icon: MonitorPlay,
    gradient: 'blue' as const,
    stage: 'STAGE 1',
    title: 'Online Screening Test',
    desc: 'An online written test to evaluate analytical ability, problem-solving skills, and basic technical understanding.',
  },
  {
    icon: ClipboardCheck,
    gradient: 'emerald' as const,
    stage: 'STAGE 2',
    title: 'Offline Assessment',
    desc: 'Candidates shortlisted from Stage 1 will be invited for an offline written test to assess their conceptual clarity and technical readiness.',
  },
  {
    icon: MessageSquare,
    gradient: 'orange' as const,
    stage: 'STAGE 3',
    title: 'Personal Interaction',
    desc: 'Selected candidates will undergo 1–2 technical discussions followed by an HR interaction. This helps us understand their learning attitude, career goals, and commitment to the program.',
  },
];

const syllabus = [
  {
    category: 'Digital Electronics',
    icon: Binary,
    gradient: 'emerald' as const,
    topics: 'Number Systems, Boolean Algebra, K-Maps, Logic Gates, Combinational & Sequential Circuits, FSMs',
  },
  {
    category: 'Basic Electronics',
    icon: Cpu,
    gradient: 'blue' as const,
    topics: 'Diodes, BJTs, FETs, MOSFETs, CMOS',
  },
  {
    category: 'Engineering Aptitude & C Programming',
    icon: Code,
    gradient: 'orange' as const,
    topics: 'Testing reasoning and coding basics for technical readiness.',
  },
  {
    category: 'Personality Skills',
    icon: Brain,
    gradient: 'purple' as const,
    topics: 'Assessing communication, adaptability, and professional mindset.',
  },
];

const whyPoints = [
  'We believe every student deserves focused attention, quality mentoring, and the right learning environment.',
  'A batch of motivated and committed students creates a strong learning culture.',
];

export default function AdmissionPage() {
  return (
    <div className="pt-14 overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 py-16 lg:py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
              <GraduationCap className="w-5 h-5" />
              Begin Your Journey
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Admission <span className="text-accent-400">Process</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              The right learning environment begins with selecting the right students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content — two-column layout */}
      <section className="py-14 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

            {/* ─── LEFT COLUMN ─── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-500 mb-3 leading-tight tracking-tight">
                Your Path To A VLSI Career
              </h2>

              {/* Focus callout box */}
              <div className="flex items-start gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-4 mb-10 shadow-sm">
                <div className="flex-shrink-0 mt-0.5">
                  <IconBadge icon={Target} gradient="primary" size="sm" />
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Our focus is on quality, commitment, and long-term success.{' '}
                  <strong className="text-primary-500">We look for serious aspirants and invest in their future.</strong>
                </p>
              </div>

              {/* Timeline stages */}
              <div className="relative">
                {/* Vertical connector line */}
                <div className="absolute left-[26px] top-8 bottom-8 w-0.5 bg-neutral-200" />

                <div className="space-y-8">
                  {stages.map((stage, i) => (
                    <motion.div
                      key={stage.stage}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-30px' }}
                      variants={fadeIn}
                      className="flex items-start gap-5"
                    >
                      {/* Icon sits on the line */}
                      <div className="flex-shrink-0 z-10">
                        <IconBadge icon={stage.icon} gradient={stage.gradient} size="md" />
                      </div>

                      <div className="pt-1">
                        <span className="inline-block text-[11px] font-bold tracking-widest text-secondary-500 uppercase mb-0.5">
                          {stage.stage}
                        </span>
                        <h3 className="text-lg font-extrabold text-primary-500 leading-tight mb-1">
                          {stage.title}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                          {stage.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Final Selection node */}
                  <motion.div
                    custom={stages.length}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                    variants={fadeIn}
                    className="flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 z-10">
                      <IconBadge icon={Award} gradient="accent" size="md" />
                    </div>
                    <div className="pt-1">
                      <span className="inline-block text-[11px] font-bold tracking-widest text-accent-600 uppercase border border-accent-400 rounded px-2 py-0.5 mb-1">
                        FINAL SELECTION
                      </span>
                      <p className="text-sm text-neutral-500 leading-relaxed mt-1">
                        Admission is offered to candidates who successfully clear all stages of the selection process.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ─── RIGHT COLUMN ─── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              {/* WHY DO WE FOLLOW A SELECTION PROCESS? */}
              <div className="bg-primary-500 rounded-2xl p-7 shadow-lg">
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wide mb-5">
                  WHY DO WE FOLLOW A SELECTION PROCESS?
                </h3>
                <div className="space-y-4">
                  {whyPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary-300 flex-shrink-0 mt-0.5" />
                      <p className="text-white/85 text-sm leading-relaxed">{point}</p>
                    </motion.div>
                  ))}

                  {/* Highlighted closing line */}
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-300 flex-shrink-0 mt-0.5" />
                    <p className="text-white/85 text-sm leading-relaxed">
                      Our goal is not to maximize admissions,{' '}
                      <strong className="text-accent-400">but to maximize student success.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Merit-Based Fee Scholarship */}
              <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-2xl p-6 overflow-hidden shadow-lg">
                <div className="absolute -top-1/4 -right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-300 to-accent-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      Merit-Based Fee Scholarship
                    </h3>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Outstanding performance across all admission stages may qualify for merit-based scholarships. Awards are limited and granted at the discretion of the Admission Committee.
                  </p>
                </div>
              </div>

              {/* SYLLABUS FOR WRITTEN TEST */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-7 shadow-sm">
                <h3 className="text-lg font-extrabold text-primary-500 uppercase tracking-wide mb-5">
                  SYLLABUS FOR WRITTEN TEST
                </h3>
                <div className="flex flex-col gap-4">
                  {syllabus.map((item, i) => (
                    <motion.div
                      key={item.category}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeIn}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <IconBadge icon={item.icon} gradient={item.gradient} size="sm" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary-500 leading-tight mb-0.5">
                          {item.category}
                        </p>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                          {item.topics}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CLOSING LINE */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary-600 px-6 py-8 text-center shadow-lg">
            <p className="text-xl sm:text-2xl font-bold text-white">
              If you have the passion, we have the pathway.
            </p>
          </div>
        </div>
      </section>

      <CounselingCTA />
    </div>
  );
}
