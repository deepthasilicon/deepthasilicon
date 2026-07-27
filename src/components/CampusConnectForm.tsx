import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, CheckCircle2, Loader2, GraduationCap,
} from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const interests = [
  'Career Guidance Webinars',
  'VLSI Awareness Programs',
  'Technical Workshops',
  'Faculty Development Programs',
  'Placement-Focused Seminars',
  'Other',
];

interface Props {
  onClose: () => void;
}

export default function CampusConnectForm({ onClose }: Props) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organization: '', designation: '',
    location: '', studentCount: '', message: '',
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('partnership_inquiries').insert({
      partner_type: 'campus',
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      organization: form.organization,
      designation: form.designation || null,
      location: form.location || null,
      student_count: form.studentCount || null,
      interests: selectedInterests,
      message: form.message || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message || 'Something went wrong. Please try again.');
      return;
    }
    setStatus('success');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-primary-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 24, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-secondary-500 to-secondary-600 px-6 py-5 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Campus Connect</h3>
              <p className="text-xs text-white/70">Academic Partnership Inquiry</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-secondary-50 flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-secondary-500" />
                </div>
                <h4 className="text-xl font-bold text-primary-500 mb-2">Inquiry Received!</h4>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-xs mx-auto">
                  Thank you for your interest in partnering with Deeptha Silicon Technologies. Our team will reach out within 1–2 business days.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 text-secondary-500 hover:text-secondary-600 text-sm font-medium"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Contact Person Name *</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    placeholder="Full name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                      placeholder="you@college.edu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">College / Institution Name *</label>
                  <input
                    type="text" required
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    placeholder="e.g., ABC Engineering College"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Designation</label>
                    <input
                      type="text"
                      value={form.designation}
                      onChange={(e) => setForm({ ...form, designation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                      placeholder="e.g., TPO, HOD, Dean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Location</label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                      placeholder="City, State"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Approximate Student Count</label>
                  <select
                    value={form.studentCount}
                    onChange={(e) => setForm({ ...form, studentCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="Under 500">Under 500</option>
                    <option value="500–1,000">500–1,000</option>
                    <option value="1,000–3,000">1,000–3,000</option>
                    <option value="3,000+">3,000+</option>
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Areas of Interest *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all ${
                          selectedInterests.includes(interest)
                            ? 'border-secondary-500 bg-secondary-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedInterests.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                          className="w-4 h-4 rounded text-secondary-500 focus:ring-secondary-500"
                        />
                        <span className="text-sm text-neutral-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                  {selectedInterests.length === 0 && status === 'error' && (
                    <p className="text-xs text-red-500 mt-1.5">Please select at least one area of interest.</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals or specific requirements..."
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
                    {errorMsg}
                  </div>
                )}

                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'submitting' || selectedInterests.length === 0}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-[1.01] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                    ) : (
                      <><Send className="w-4 h-4" /> Submit Inquiry</>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
