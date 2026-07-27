import { motion } from 'framer-motion';
import {
  Building, Monitor,
  BookOpen, CircuitBoard, Users, Microscope
} from 'lucide-react';
import IconBadge from '../components/IconBadge';
import CounselingCTA from '../components/CounselingCTA';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const facilities = [
  {
    icon: Building,
    gradient: 'blue' as const,
    title: 'Dedicated Classrooms',
  },
  {
    icon: BookOpen,
    gradient: 'emerald' as const,
    title: 'Digital Learning Resources',
  },
  {
    icon: CircuitBoard,
    gradient: 'orange' as const,
    title: 'Industry-Ready EDA Workstations',
  },
  {
    icon: Users,
    gradient: 'rose' as const,
    title: 'Student-Centric Learning Environment',
  },
  {
    icon: Microscope,
    gradient: 'purple' as const,
    title: 'Project-Based Learning Setup',
  },
];


export default function InfrastructurePage() {
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
              <Building className="w-5 h-5" />
              Our Facilities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Infra<span className="text-accent-400">structure</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              A learning environment designed to inspire, equip, and empower aspiring VLSI engineers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                <Monitor className="w-4 h-4" />
                Learning Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
                Our Facilities
              </h2>
              <p className="text-neutral-500 mb-6">
                Every aspect of our infrastructure is thoughtfully designed to create an optimal learning experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilities.map((item, i) => (
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
                    <h3 className="text-sm font-semibold text-primary-500 leading-tight">{item.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </section>

      <CounselingCTA />
    </div>
  );
}
