import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown, HelpCircle, Users, BookOpen, Briefcase
} from 'lucide-react';
import CounselingCTA from '../components/CounselingCTA';

const faqCategories = [
  { id: 'all', label: 'All FAQs', icon: HelpCircle },
  { id: 'eligibility', label: 'Eligibility', icon: Users },
  { id: 'program', label: 'Program', icon: BookOpen },
  { id: 'career', label: 'Career', icon: Briefcase },
];

const faqs = [
  { q: 'Who can apply for Deeptha Silicon VLSI programs?', a: 'Full-Time Classroom Program: B.E./B.Tech. and M.E./M.Tech. graduates from ECE, EEE, EIE, CSE, and related disciplines.\n\nWeekend Job-Oriented Program: Final-year students, working professionals, and engineers looking to upskill or build a career in VLSI.', category: 'eligibility' },
  { q: 'Do I need prior VLSI knowledge to join?', a: 'No. Our programs are designed to take students from fundamentals to industry readiness through structured learning and practical exposure.', category: 'eligibility' },
  { q: 'Can EEE students build a career in VLSI?', a: 'Absolutely. With the right training, practical exposure, and guidance, EEE graduates can successfully transition into VLSI careers.', category: 'eligibility' },
  { q: 'Can working professionals join the program?', a: 'Yes. The Weekend Job-Oriented Program is ideal for working professionals seeking to enhance their VLSI skills, transition into ASIC Physical Design, or advance their careers. It provides the same curriculum, practical training, certification, and placement assistance as our Full-Time Classroom Program, with the flexibility of weekend classes.', category: 'eligibility' },

  { q: 'What courses do you offer?', a: 'Currently, Deeptha Silicon Technologies offers industry-oriented training programs in ASIC Physical Design. Additional VLSI programs may be introduced in the future.', category: 'program' },
  { q: 'How are the Full-Time and Weekend programs structured?', a: 'We offer Full-Time Classroom and Weekend Job-Oriented programs. Both include the same industry-aligned curriculum, expert trainer, hands-on EDA tool training, practical sessions, real-time projects, course completion certificate, and placement assistance. The only difference is the class schedule.\n\nFull-Time Classroom Program: Approximately 6 months.\n\nWeekend Job-Oriented Program: Approximately 8–9 months, designed for final-year students and working professionals who prefer weekend classes.', category: 'program' },
  { q: 'Are the classes online or offline?', a: 'Currently, Deeptha Silicon Technologies offers offline classroom training to maximize interaction, mentorship, and hands-on lab experience.', category: 'program' },
  { q: 'Will I get hands-on experience with EDA tools?', a: 'Yes. Students receive extensive practical exposure to licensed industry-standard EDA tools and workflows. Our training approach emphasizes approximately 70% practical learning and 30% conceptual understanding.', category: 'program' },
  { q: 'Do you provide projects and lab sessions?', a: 'Yes. Practical assignments, mini-projects, and real-time project exposure are integrated into the curriculum to reinforce learning.', category: 'program' },
  { q: 'Will I receive a certificate after completion?', a: 'Yes. Students who successfully complete the program and satisfy the course requirements will receive a Course Completion Certificate from Deeptha Silicon Technologies.', category: 'program' },
  { q: 'What facilities are available at Deeptha Silicon Technologies?', a: 'Our infrastructure includes dedicated EDA tool labs, modern classrooms, practical learning facilities, career guidance support, and student development initiatives.', category: 'program' },

  { q: 'Is there an admission process?', a: 'Yes. The admission process evaluates technical aptitude, analytical thinking, problem-solving ability, and commitment towards building a career in VLSI. Merit-based scholarships may be offered based on performance.', category: 'admission' },
  { q: 'What is the syllabus for the admission written test?', a: 'The written test may include topics from: Basic Electronics (Diodes, BJTs, FETs, MOSFETs, CMOS), Digital Electronics (Number Systems, Boolean Algebra, K-Maps, Logic Gates, Combinational & Sequential Circuits, FSMs), C Programming Basics, and Engineering Aptitude and Personality Skills.', category: 'admission' },
  { q: 'Can I get model papers for the written test?', a: 'Yes. Please contact our Course Advisor to receive sample papers and preparation guidance.', category: 'admission' },
  { q: 'How do I apply?', a: 'You can apply through our website by submitting the enquiry/application form. Our admissions team will guide you through the next steps.', category: 'admission' },

  { q: 'Is interview preparation included?', a: 'Yes. We provide resume preparation, technical interview guidance, mock interviews, and communication support to help students prepare confidently for recruitment processes.', category: 'career' },
  { q: 'Do you provide placement assistance?', a: 'Yes. Dedicated placement assistance, industry referrals, and continued support are provided throughout the job search process and beyond placement.', category: 'career' },
  { q: 'What support can I expect during the course?', a: 'Students receive continuous support through mentoring, doubt clarification sessions, progress reviews, career counselling, and wellness initiatives designed to support both personal and professional growth.', category: 'career' },
  { q: 'Is VLSI a good career choice?', a: 'Yes. The semiconductor industry continues to grow globally, creating strong demand for skilled VLSI engineers across multiple domains.', category: 'career' },
  { q: 'What salary can a fresher expect in VLSI?', a: 'Compensation varies depending on the role, company, market conditions, and individual skill level. Candidates with strong fundamentals and practical experience generally have better opportunities.', category: 'career' },

  { q: 'Why should I choose Deeptha Silicon Technologies?', a: 'We focus on strong fundamentals, practical learning, real-world problem-solving, personalized mentorship, interview readiness, and continuous placement support.', category: 'general' },
  { q: 'What makes Deeptha Silicon Technologies different?', a: 'We emphasize quality over quantity through small batch sizes, individual attention, continuous assessment, real-world learning, and a supportive environment that bridges the gap between academia and industry expectations.', category: 'general' },
  { q: 'Is Deeptha Silicon Technologies a safe and disciplined learning environment?', a: 'Yes. We maintain a safe, respectful, and professionally disciplined atmosphere where students are expected to uphold punctuality, mutual respect, and ethical conduct.', category: 'general' },
  { q: 'Will every student receive individual attention?', a: 'Yes. Through small batch sizes and continuous mentoring, we ensure that every student receives personalized guidance, doubt clarification, and academic support whenever needed.', category: 'general' },
  { q: 'Are cleanliness and student well-being given importance?', a: 'Absolutely. We maintain clean classrooms, organized laboratory spaces, and a positive learning environment that supports both academic growth and overall well-being.', category: 'general' },
];

function FAQItem({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: (index % 2) * 0.05, duration: 0.3 }}
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-secondary-400 shadow-sm' : 'border-neutral-200 hover:border-neutral-300'}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white"
      >
        <span className={`text-sm font-semibold pr-3 ${isOpen ? 'text-secondary-600' : 'text-primary-500'}`}>
          {index + 1}. {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-secondary-500' : 'text-neutral-400'}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 bg-white border-t border-neutral-100">
          <p className="text-sm text-neutral-600 leading-relaxed pt-3 whitespace-pre-line">{faq.a}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  // Split into two columns
  const mid = Math.ceil(filteredFaqs.length / 2);
  const leftCol = filteredFaqs.slice(0, mid);
  const rightCol = filteredFaqs.slice(mid);

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
              <HelpCircle className="w-5 h-5" />
              Got Questions? We Have Answers
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <span className="block text-accent-400">Questions</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you want to know about the program, admissions, training, and career support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-neutral-200 sticky top-14 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List — two columns */}
      <section className="py-12 lg:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <p className="text-neutral-600">
              Showing <span className="font-semibold text-primary-500">{filteredFaqs.length}</span> questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Left column */}
            <div className="space-y-3">
              {leftCol.map((faq, i) => (
                <FAQItem
                  key={faq.q}
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-3">
              {rightCol.map((faq, i) => (
                <FAQItem
                  key={faq.q}
                  faq={faq}
                  index={mid + i}
                  isOpen={openIndex === mid + i}
                  onToggle={() => setOpenIndex(openIndex === mid + i ? null : mid + i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CounselingCTA />
    </div>
  );
}
