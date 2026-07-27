import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center' : ''}
    >
      <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-primary-500'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-neutral-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded-full ${light ? 'bg-white/30' : 'bg-secondary-500'} ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
