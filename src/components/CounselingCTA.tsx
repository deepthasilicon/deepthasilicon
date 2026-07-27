import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

type CounselingCTAProps = {
  heading?: string;
  subheading?: string;
};

export default function CounselingCTA({ heading, subheading }: CounselingCTAProps = {}) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Start Your Journey
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {heading ?? 'Ready to Build Your VLSI Career?'}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {subheading ?? 'Book a free counseling session with our experts. Get personalized guidance on courses, career paths, and enrollment.'}
          </p>
          <Link
            to="/contact#counseling-form"
            className="inline-flex items-center gap-3 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl"
          >
            <Calendar className="w-6 h-6" />
            Schedule a FREE Counseling Session
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
