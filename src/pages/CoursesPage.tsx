import { motion } from 'framer-motion';
import {
  Zap, Microscope,
  GraduationCap, Award, Cpu, Layers, Wrench, ClipboardList,
  Heart, Briefcase, BookOpen, Target, Sun, CalendarDays, CheckCircle2
} from 'lucide-react';
import IconBadge from '../components/IconBadge';
import CounselingCTA from '../components/CounselingCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const curriculumTopics = [
  'Digital Abstraction', 'Static Discipline', 'MOSFET Fundamentals & Power Analysis',
  'CMOS Logic & Fabrication', 'Digital Circuit Timing & Delay Analysis',
  'Combinational Circuit Design', 'Sequential Circuit Design',
  'Static Timing Analysis (STA): Setup & Hold Analysis', 'Clock Skew & Jitter',
  'Metastability & Synchronizers', 'Timing Constraints & Exceptions', 'Linux Basics',
  'Tcl Scripting', 'Logic Synthesis', 'Physical Synthesis', 'DFT Basics',
  'Physical Design Flow: Floorplanning', 'Power Planning', 'Placement',
  'Clock Tree Synthesis (CTS)', 'Routing', 'Signal Integrity & Crosstalk',
  'ECO Methodologies', 'Parasitic Extraction',
  'Signoff Methodologies (STA, DRC, LVS & LEC)', 'GDSII Generation',
];

const highlights = [
  { icon: Layers, gradient: 'blue' as const, title: 'Comprehensive Curriculum' },
  { icon: Cpu, gradient: 'emerald' as const, title: 'EDA Tool Exposure' },
  { icon: Microscope, gradient: 'orange' as const, title: 'Real-Time Projects (28nm-45nm)' },
  { icon: Wrench, gradient: 'rose' as const, title: '70% Hands-On Learning' },
  { icon: ClipboardList, gradient: 'purple' as const, title: 'Scenario-Based Assignments' },
  { icon: Heart, gradient: 'amber' as const, title: 'Personalized Mentorship' },
  { icon: Briefcase, gradient: 'teal' as const, title: 'Beyond Career Support' },
];

const programs = [
  {
    icon: Sun,
    title: 'Full-Time Job-Oriented Program',
    duration: '6 Months',
    desc: 'Designed for graduates seeking an intensive and dedicated pathway into the semiconductor industry.',
    idealFor: ['B.E./B.Tech. & M.E./M.Tech. graduates', 'Fresh graduates', 'Job seekers'],
    bar: 'from-blue-500 to-blue-600',
    badge: 'bg-blue-50 text-blue-700',
    iconBg: 'from-blue-400 to-blue-600',
    border: 'border-blue-200 hover:border-blue-400',
    check: 'text-blue-500',
    glow: 'hover:shadow-blue-200/60',
  },
  {
    icon: CalendarDays,
    title: 'Weekend Job-Oriented Program',
    duration: '8–9 Months',
    desc: 'Designed for learners who want to pursue VLSI training while balancing their academic or professional commitments.',
    idealFor: ['Final-year B.E./B.Tech. & M.E./M.Tech. students', 'Working professionals', 'Professionals looking to upskill their VLSI knowledge and advance their careers'],
    bar: 'from-emerald-500 to-teal-600',
    badge: 'bg-emerald-50 text-emerald-700',
    iconBg: 'from-emerald-400 to-teal-600',
    border: 'border-emerald-200 hover:border-emerald-400',
    check: 'text-emerald-500',
    glow: 'hover:shadow-emerald-200/60',
  },
];

export default function CoursesPage() {
  return (
    <div className="pt-14 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ASIC Physical Design
              <span className="block text-accent-400">Program</span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              A comprehensive, hands-on training program designed to transform engineering graduates into industry-ready VLSI professionals.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: GraduationCap, gradient: 'emerald' as const, label: 'Eligibility', value: 'B.E./B.Tech or M.E./M.Tech' },
                { icon: Wrench, gradient: 'orange' as const, label: 'Practicality', value: '70% Hands-On learning' },
                { icon: Target, gradient: 'rose' as const, label: 'Placement Assistance', value: 'Yes' },
                { icon: Award, gradient: 'amber' as const, label: 'Certification', value: 'Yes' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20">
                  <IconBadge icon={item.icon} gradient={item.gradient} size="md" variant="glass" className="mx-auto mb-2" />
                  <p className="text-sm text-white/60 uppercase tracking-wide">{item.label}</p>
                  <p className="text-white font-semibold text-base mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two-column: Curriculum + Highlights */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

            {/* LEFT: Curriculum */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Microscope className="w-4 h-4" />
                Curriculum
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
                What You Will Learn
              </h2>
              <p className="text-neutral-500 mb-6">
                A comprehensive journey from digital fundamentals to GDSII signoff — covering every stage of ASIC Physical Design.
              </p>

              <div className="relative bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400" />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <IconBadge icon={BookOpen} gradient="primary" size="md" className="flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-primary-500">Course Roadmap</h3>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-7 text-left">
                    {curriculumTopics.map((topic, i) => (
                      <span key={topic}>
                        <span className="text-primary-600 font-medium">{topic}</span>
                        {i < curriculumTopics.length - 1 ? (
                          <span className="text-neutral-900 mr-1">,</span>
                        ) : (
                          <span className="text-neutral-600">.</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Zap className="w-4 h-4" />
                Program Highlights
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
                What Makes This Program Special
              </h2>
              <p className="text-neutral-500 mb-6">
                Seven pillars that set our training apart and prepare you for real-world VLSI roles.
              </p>

              <div className="flex flex-col gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-30px' }}
                    variants={fadeIn}
                    className="flex items-center gap-4 bg-white rounded-xl border border-neutral-200 px-5 py-4 hover:shadow-md hover:border-neutral-300 transition-all duration-300"
                  >
                    <IconBadge icon={item.icon} gradient={item.gradient} size="md" className="flex-shrink-0" />
                    <h3 className="text-base font-semibold text-primary-500">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Flexible Learning Options */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 leading-tight mb-4">
              Flexible Learning Options
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
              At Deeptha Silicon Technologies, we offer flexible learning options designed to help you build a successful career in VLSI—whether you're a graduate, a final-year engineering student, or a working professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative rounded-2xl overflow-hidden border-2 ${program.border} bg-white shadow-sm hover:shadow-2xl ${program.glow} hover:-translate-y-2 transition-all duration-300 flex flex-col`}
              >
                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`${program.badge} text-sm font-semibold px-4 py-1.5 rounded-full`}>{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{program.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">{program.desc}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Ideal For</p>
                  <ul className="space-y-2.5">
                    {program.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-5 h-5 ${program.check} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-neutral-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 p-8 lg:p-10 text-center text-white shadow-xl overflow-hidden relative"
          >
            <div className="absolute -top-1/3 -right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/3 -left-1/4 w-56 h-56 bg-accent-400/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-5">One Curriculum. Two Learning Paths.</h3>
              <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                Both programs follow the same industry-oriented curriculum, practical learning approach, expert mentorship, and career guidance. The only difference is the learning schedule—choose the path that best fits your goals and lifestyle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CounselingCTA
        heading="Not sure which program is right for you?"
        subheading="Schedule a free counseling session with our course advisor."
      />
    </div>
  );
}
