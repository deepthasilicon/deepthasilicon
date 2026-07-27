import { motion } from 'framer-motion';
import { MonitorPlay, ClipboardCheck, MessageSquare } from 'lucide-react';
import IconBadge from './IconBadge';

const steps = [
  {
    stage: 'STAGE 1',
    icon: MonitorPlay,
    gradient: 'blue' as const,
    title: 'Online Screening Test',
  },
  {
    stage: 'STAGE 2',
    icon: ClipboardCheck,
    gradient: 'emerald' as const,
    title: 'Offline Assessment',
  },
  {
    stage: 'STAGE 3',
    icon: MessageSquare,
    gradient: 'orange' as const,
    title: 'Personal Interaction',
  },
];

export default function AdmissionFlowchart() {
  return (
    <div className="w-full max-w-lg mx-auto bg-[#f0eeea] rounded-xl px-6 py-8 space-y-8">
      {steps.map((step, i) => (
        <motion.div
          key={step.stage}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-5"
        >
          <IconBadge icon={step.icon} gradient={step.gradient} size="lg" className="flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#4db6a8] mb-0.5">
              {step.stage}
            </p>
            <h3 className="text-2xl font-extrabold text-[#0d1b3e] leading-tight">
              {step.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
