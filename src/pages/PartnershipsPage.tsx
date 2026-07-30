import { motion } from 'framer-motion';
import {
  GraduationCap, Handshake, Mail, ArrowRight,
  Presentation, Lightbulb, BookOpen, Users, Calendar,
  Briefcase, FileText, Building2,
} from 'lucide-react';

const campusOfferings = [
  { icon: Presentation, title: 'Career Guidance & Semiconductor Awareness Sessions' },
  { icon: Lightbulb, title: 'Industry-Aligned VLSI Workshops' },
  { icon: BookOpen, title: 'Faculty Upskilling Initiatives' },
  { icon: Users, title: 'Campus-to-Industry Readiness Programs' },
  { icon: Calendar, title: 'Industry Interaction Programs' },
];

const industryOfferings = [
  { icon: Briefcase, title: 'Access Industry-Ready VLSI Talent' },
  { icon: Presentation, title: 'Deliver Expert Talks & Technical Sessions' },
  { icon: FileText, title: 'Collaborate on Curriculum & Workforce Development' },
  { icon: Building2, title: 'Build the Future of Semiconductor Talent' },
];

export default function PartnershipsPage() {
  return (
    <div className="pt-14 overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 py-16 lg:py-20 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
              <Handshake className="w-5 h-5" />
              Academic & Industry Partnerships
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Building Bridges Between <span className="block text-accent-400">Academia & Industry</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Partner with Deeptha Silicon Technologies to strengthen the semiconductor ecosystem—from campus classrooms to industry careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campus Connect */}
      <section id="campus-connect" className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-500">Campus Connect</h2>
                  <p className="text-sm text-neutral-400">For Engineering Colleges</p>
                </div>
              </div>
              <p className="text-neutral-600 text-base leading-relaxed">
                Deeptha Silicon Technologies collaborates with engineering colleges to bridge the gap between academic learning and industry expectations. Through industry-oriented programs, expert guidance, and practical learning initiatives, we help students build the technical skills, confidence, and career readiness needed to succeed in the semiconductor industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-primary-500 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary-500 rounded-full" />
                What We Offer
              </h3>
              <div className="space-y-3">
                {campusOfferings.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-4 bg-white rounded-xl border border-neutral-200 p-4 shadow-sm hover:shadow-md hover:border-secondary-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary-500" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-700">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* To Collaborate - Campus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-2xl mx-auto text-center bg-white rounded-2xl border border-secondary-200 p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-primary-500 mb-2">To Collaborate</h3>
            <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
              Please include your institution details and collaboration requirements. Our team will review your request and respond at the earliest.
            </p>
<a
  href="mailto:collaborations@deepthasilicon.com"
  /* Added min-w-0 to the flex container */
  className="w-full min-w-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold px-4 py-3.5 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg"
>
  <Mail className="w-5 h-5 flex-shrink-0" />
  {/* Changed to truncate */}
  <span className="truncate">collaborations@deepthasilicon.com</span>
  <ArrowRight className="w-4 h-4 flex-shrink-0" />
</a>



          </motion.div>
        </div>
      </section>

      {/* Industry Connect */}
      <section id="industry-connect" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-lg font-bold text-primary-500 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-500 rounded-full" />
                Partner With Us For
              </h3>
              <div className="space-y-3">
                {industryOfferings.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center gap-4 bg-neutral-50 rounded-xl border border-neutral-200 p-4 shadow-sm hover:shadow-md hover:border-accent-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-700">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-500">Industry Connect</h2>
                  <p className="text-sm text-neutral-400">For Semiconductor Companies</p>
                </div>
              </div>
              <p className="text-neutral-600 text-base leading-relaxed">
                Deeptha Silicon Technologies collaborates with semiconductor companies to develop a skilled, future-ready workforce. Through meaningful industry–academia partnerships, we create opportunities for talent acquisition, technical knowledge sharing, and workforce development.
              </p>
            </motion.div>
          </div>

          {/* To Collaborate - Industry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-2xl mx-auto text-center bg-neutral-50 rounded-2xl border border-accent-200 p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold text-primary-500 mb-2">To Collaborate</h3>
            <p className="text-sm text-neutral-500 mb-5 leading-relaxed">
              Please include your organization details and collaboration requirements. We look forward to building a successful partnership with you.
            </p>
            <a
  href="mailto:collaborations@deepthasilicon.com"
  /* Added min-w-0 to the flex container */
  className="w-full min-w-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold px-4 py-3.5 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg"
>
  <Mail className="w-5 h-5 flex-shrink-0" />
  {/* Changed to truncate */}
  <span className="truncate">collaborations@deepthasilicon.com</span>
  <ArrowRight className="w-4 h-4 flex-shrink-0" />
</a>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
