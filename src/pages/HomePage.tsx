import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronDown, GraduationCap, Monitor,
  BookOpen, Briefcase, Wrench,
  Cpu, Layers, Target, Heart,
  Award, FileText, MessageSquare, Handshake,
  Sun, CalendarDays
} from 'lucide-react';
const trainerImage = '/images/IMG-20260727-WA0024.jpg';
import SectionHeader from '../components/SectionHeader';
import AdmissionFlowchart from '../components/AdmissionFlowchart';
import IconBadge from '../components/IconBadge';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const highlights = [
  { icon: Target, gradient: 'blue' as const, title: 'Industry Ready Curriculum' },
  { icon: Cpu, gradient: 'emerald' as const, title: 'EDA Licensed Tool Exposure' },
  { icon: Layers, gradient: 'orange' as const, title: 'Real-Time Projects' },
  { icon: Wrench, gradient: 'rose' as const, title: '70% Hands-On Learning' },
  { icon: Heart, gradient: 'purple' as const, title: 'Personalized Mentorship' },
  { icon: Briefcase, gradient: 'amber' as const, title: 'Career & Placement Assistance' },
];

const faqs = [
  {
    q: 'Who can apply for the programs?',
    a: 'Full-Time Classroom Program: B.E./B.Tech. and M.E./M.Tech. graduates from ECE, EEE, EIE, CSE, and related disciplines. Weekend Job-Oriented Program: Final-year students, working professionals, and engineers looking to upskill or build a career in VLSI.',
  },
  {
    q: 'Do I need prior VLSI knowledge to enroll?',
    a: 'No. Our programs are designed to take students from fundamentals to industry readiness through structured learning and practical exposure.',
  },
  {
    q: 'How long are the training programs?',
    a: 'Full-Time Classroom Program: approximately 6 months. Weekend Job-Oriented Program: approximately 8–9 months, designed for final-year students and working professionals who prefer weekend classes. Both follow the same industry-aligned curriculum.',
  },
  {
    q: 'Is the training hands-on?',
    a: 'Yes — approximately 70% of the program is practical EDA tool sessions and 30% is conceptual understanding, with real-time projects and lab sessions integrated into the curriculum.',
  },
  {
    q: 'Will I get placement assistance?',
    a: 'Yes. We provide dedicated placement assistance including resume preparation, mock interviews, technical interview guidance, and industry referrals throughout the job search process.',
  },
  {
    q: 'How do I apply?',
    a: 'You can apply through our website by submitting the enquiry/application form, or walk into the institute directly. Our admissions team will guide you through the next steps.',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 overflow-hidden pt-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-400/10 rounded-full blur-2xl" />
        </div>



        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          {/* Centered content */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Logo — top right, above the title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-end w-full mb-2 sm:mb-3"
            >
              <img
                src="/images/IMG-20260725-WA0037(2).jpg"
                alt="Deeptha Silicon Technologies Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-cover drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl"
            >
              <span className="drop-shadow-lg">
                <span className="text-accent-400">Deeptha Silicon </span><span className="text-white">Technologies</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-lg sm:text-2xl text-white/90 font-semibold max-w-xl"
            >
              From Academia to Industry Readiness
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 sm:mt-3 text-sm sm:text-lg text-white/70 max-w-md sm:max-w-xl leading-relaxed"
            >
              Transforming aspiring engineers into industry-ready VLSI professionals through practical learning, industry-standard tools, mentorship, and career guidance.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 w-full"
            >
              <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-3 lg:gap-6 max-w-3xl mx-auto">
                {[
                  { icon: Wrench, gradient: 'rose' as const, label: '70% Hands-On Learning' },
                  { icon: Layers, gradient: 'orange' as const, label: 'Real-Time Projects' },
                  { icon: Briefcase, gradient: 'amber' as const, label: 'Placement Assistance' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 w-full lg:w-auto"
                  >
                    <IconBadge icon={item.icon} gradient={item.gradient} size="sm" variant="glass" />
                    <span className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact#counseling-form"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-xl shadow-accent-500/30 w-full sm:w-auto text-xs sm:text-base"
              >
                Schedule a FREE Counseling Session
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-2.5 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all hover:scale-105 w-full sm:w-auto text-xs sm:text-base"
              >
                Explore the Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

            {/* Scroll indicator */}
            <motion.a
            href="#highlights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* Why Choose DST — Quick Highlights */}
      <section id="highlights" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Deeptha Silicon Technologies?"
            subtitle="We don't just complete syllabi — we build industry-ready engineers through fundamentals, hands-on practice, and relentless mentorship."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeIn}
                className="flex items-start gap-4 bg-white rounded-xl border border-neutral-200 p-4 hover:shadow-md transition-all duration-300"
              >
                <IconBadge icon={item.icon} gradient={item.gradient} size="md" className="shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-primary-500">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link to="/why-dst" className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 font-medium text-sm transition-colors">
              Read the full story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Trainer */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-secondary-500 text-base font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="w-5 h-5" />
              Meet Our Trainer
            </div>
            <div className="flex items-center gap-5 mb-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 leading-tight">
                  Shiva Ram Chinthala
                </h2>
                <p className="text-neutral-500 text-sm font-medium tracking-wide mt-1">Corporate Trainer | 15+ Years | ASIC Physical Design Expert</p>
              </div>
              <img
                src={trainerImage}
                alt="Shiva Ram Chinthala"
                className="w-32 h-32 rounded-full object-cover border-2 border-primary-200"
              />
            </div>
            <div className="w-16 h-1 bg-secondary-500 rounded-full mb-6" />
            <Link
              to="/trainer"
              className="inline-flex items-center gap-2 text-white bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-105"
            >
              Full Profile <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Courses */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Flagship Course"
            subtitle="One comprehensive program designed to take you from electronics fundamentals all the way to industry-ready ASIC Physical Design."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                    <BookOpen className="w-4 h-4" />
                    Industry-Ready Program | Premium Training | Limited Batch Size
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    ASIC Physical Design Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    A rigorous, industry-aligned curriculum covering the complete VLSI design flow — from digital abstractions and CMOS logic to full Physical Design, STA, and GDSII signoff.
                  </p>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-2 text-white/90 text-base">
                      <GraduationCap className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                      <span className="text-white/50 text-sm">Eligibility</span>
                      <span className="font-medium">ECE | EEE | EIE | CSE</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-base">
                      <Monitor className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                      <span className="text-white/50 text-sm">EDA Tools</span>
                      <span className="font-medium">Industry-Standard Tools</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-base">
                      <Award className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                      <span className="text-white/50 text-sm">Certification</span>
                      <span className="font-medium">Industry-Recognized Course Completion Certificate</span>
                    </div>
                  </div>
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105"
                  >
                    View Full Curriculum <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible Learning Options */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 leading-tight mb-4">
              Flexible Learning Options
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We offer flexible learning options designed to help you build a successful career in VLSI—whether you're a graduate, a final-year engineering student, or a working professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {[
              {
                icon: Sun,
                title: 'Full-Time Program',
                duration: '6 Months',
                desc: 'For graduates seeking an intensive and dedicated pathway into the semiconductor industry.',
                bar: 'from-blue-500 to-blue-600',
                badge: 'bg-blue-50 text-blue-700',
                iconBg: 'from-blue-400 to-blue-600',
                border: 'border-blue-200 hover:border-blue-400',
                glow: 'hover:shadow-blue-200/60',
              },
              {
                icon: CalendarDays,
                title: 'Weekend Program',
                duration: '8–9 Months',
                desc: 'For final-year engineering students and working professionals who prefer a flexible learning schedule.',
                bar: 'from-emerald-500 to-teal-600',
                badge: 'bg-emerald-50 text-emerald-700',
                iconBg: 'from-emerald-400 to-teal-600',
                border: 'border-emerald-200 hover:border-emerald-400',
                glow: 'hover:shadow-emerald-200/60',
              },
            ].map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`group relative rounded-2xl overflow-hidden border-2 ${program.border} bg-white shadow-sm hover:shadow-2xl ${program.glow} hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="p-7 lg:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className={`${program.badge} text-sm font-semibold px-4 py-1.5 rounded-full`}>{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{program.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{program.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 p-8 lg:p-10 text-center text-white shadow-xl overflow-hidden relative"
          >
            <div className="absolute -top-1/3 -right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">One Curriculum. Two Learning Paths.</h3>
              <p className="text-white/90 text-base sm:text-lg font-medium">Same Quality. Same Industry-Relevant Curriculum. Same Mentorship. Flexible Schedule.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career & Placement Assistance */}
      <section className="py-20 lg:py-24 bg-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Briefcase className="w-4 h-4" />
                Career & Placement Assistance
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                We Are With You<br />Beyond the Classroom
              </h2>
              <div className="w-16 h-1 bg-white/30 rounded-full mb-6" />
              <p className="text-white/80 leading-relaxed">
                Our commitment to your career doesn't end when the course does. We provide end-to-end placement support — from crafting a compelling resume to walking into your final HR round with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: FileText,
                  gradient: 'blue' as const,
                  title: 'Resume Preparation',
                  desc: 'Crafting your resume to highlight the right skills and projects for semiconductor recruiters.',
                },
                {
                  icon: MessageSquare,
                  gradient: 'emerald' as const,
                  title: 'Mock Interviews',
                  desc: 'Simulated technical and HR interview rounds to build confidence and sharpen responses.',
                },
                {
                  icon: Award,
                  gradient: 'orange' as const,
                  title: 'Interview Guidance',
                  desc: 'Expert tips on what companies look for in VLSI interviews, from technical to behavioral rounds.',
                },
                {
                  icon: Handshake,
                  gradient: 'amber' as const,
                  title: 'Career Mentorship',
                  desc: 'Ongoing guidance on career paths, company selection, and growth in the semiconductor industry.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <IconBadge icon={item.icon} gradient={item.gradient} size="md" variant="glass" className="mb-3" />
                  <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Process + Merit Recognition */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Admission Process"
            subtitle="A structured selection process designed to identify motivated learners who are ready to commit to their semiconductor career."
          />

          <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Admission Flowchart - takes 2 columns */}
            <div className="lg:col-span-2">
              <AdmissionFlowchart />
            </div>

            {/* Merit Recognition - side card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-2xl p-6 sm:p-7 overflow-hidden shadow-xl"
            >
              <div className="absolute -top-1/3 -right-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-1/3 -left-1/3 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-300 to-accent-500 shadow-lg mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Merit Recognition
                </h3>
                <div className="w-12 h-0.5 bg-accent-400 rounded-full mb-4" />

                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Outstanding performers in our admission process may qualify for Merit-Based Fee Concessions.
                </p>

                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <Award className="w-4 h-4 text-accent-300" />
                  <span className="text-white font-medium text-xs">
                    Excellence Rewarded
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg text-sm transition-all hover:scale-105"
            >
              View Full Admission Details <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Campus Connect & Industry Connect */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Academic & Industry Partnerships"
            subtitle="Building bridges between engineering colleges, semiconductor companies, and the next generation of VLSI talent."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Campus Connect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-500">Campus Connect</h3>
                  <p className="text-sm text-neutral-400">For Engineering Colleges</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-neutral-700 mb-3">
                Invite Deeptha Silicon Technologies to Your Campus
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Engineering colleges across India can partner with Deeptha Silicon Technologies for FREE career guidance webinars, VLSI awareness sessions, technical workshops, faculty development programs, and placement-focused seminars—helping students move From Academia to Industry Readiness.
              </p>
              <Link
                to="/partnerships#campus-connect"
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105"
              >
                Become an Academic Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Industry Connect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-500">Industry Connect</h3>
                  <p className="text-sm text-neutral-400">For Semiconductor Companies & Recruiters</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-neutral-700 mb-3">
                Partner with Deeptha Silicon Technologies to Build Tomorrow's VLSI Workforce
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Semiconductor companies, design service firms, startups, and technology organizations can collaborate with us to recruit industry-ready VLSI talent, offer internships, conduct expert sessions, sponsor technical initiatives, and strengthen industry–academia partnerships.
              </p>
              <Link
                to="/partnerships#industry-connect"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105"
              >
                Become an Industry Partner
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to the questions we hear most often."
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-secondary-400 transition-colors"
              >
                <summary className="cursor-pointer select-none flex justify-between items-center px-5 py-4 text-base font-semibold text-primary-500 list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-4 text-base text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/faqs" className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 font-medium text-sm transition-colors">
              See all 25 FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 lg:py-24 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We would be delighted to assist you in taking the next step toward your VLSI career. Reach out and our counselors will guide you through every stage.
            </p>
            <Link
              to="/contact#counseling-form"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-5 py-3 text-sm rounded-lg transition-all hover:scale-105"
            >
              Schedule a FREE Counseling Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
