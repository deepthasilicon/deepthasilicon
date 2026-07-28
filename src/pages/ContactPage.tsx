import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send, MessageCircle, Sparkles, Phone, Mail, Clock, CheckCircle2, RefreshCw, MapPin,
} from 'lucide-react';
import IconBadge from '../components/IconBadge';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const contactCards = [
  { icon: MapPin, gradient: 'blue' as const, label: 'Address', value: 'Launching soon in Hyderabad, Telangana, India' },
  { icon: Phone, gradient: 'emerald' as const, label: 'Phone', value: '+91 98491 02807' },
  { icon: Mail, gradient: 'orange' as const, label: 'Email', value: 'info@deepthasilicon.com' },
  { icon: Clock, gradient: 'purple' as const, label: 'Office Hours', value: 'Monday – Sunday, 9:00 AM – 7:00 PM' },
];

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { num1, num2, answer: num1 + num2 };
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', qualification: '', graduationYear: '', message: '' });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setCaptchaError(false);
  };

  // Helper function to format the data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(captchaInput) !== captcha.answer) {
      setCaptchaError(true);
      return;
    }

    // Send the data to Netlify without refreshing the page
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    })
      .then(() => setSubmitted(true))
      .catch((error) => console.error("Form submission error:", error));
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

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
              <MessageCircle className="w-5 h-5" />
              We're Here to Help
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-accent-400">Us</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We would be delighted to assist you in taking the next step toward your VLSI career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 text-sm font-medium px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 leading-tight">
              Let's Start Your Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <IconBadge icon={item.icon} gradient={item.gradient} size="md" className="mb-4" />
                <p className="text-sm font-semibold text-secondary-500 uppercase tracking-wider mb-1">{item.label}</p>
                {item.label === 'Phone' ? (
                  <a href="tel:+919849102807" className="text-base text-neutral-700 font-medium hover:text-primary-600 transition-colors">{item.value}</a>
                ) : item.label === 'Email' ? (
                  <a href="mailto:info@deepthasilicon.com" className="text-base text-neutral-700 font-medium hover:text-primary-600 transition-colors break-all">{item.value}</a>
                ) : (
                  <p className="text-base text-neutral-700 font-medium">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Notice */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-600" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg sm:text-xl leading-relaxed"
          >
            Until the campus address is finalized, you can contact us by phone, email, or by submitting the enquiry form. We'll be happy to assist you and keep you updated with the latest announcements.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="counseling-form" className="pb-16 lg:pb-24 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-6 lg:p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mx-auto mb-6">
                      <IconBadge icon={CheckCircle2} gradient="emerald" size="xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-500 mb-3">Message Received!</h3>
                    <p className="text-neutral-600 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We will connect to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', qualification: '', graduationYear: '', message: '' });
                        refreshCaptcha();
                      }}
                      className="mt-6 text-secondary-500 hover:text-secondary-600 text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-primary-500">Send an Enquiry</h3>
                    <p className="text-sm text-neutral-500 mt-1">The course advisor will get back to you within 24 hrs.</p>
                  </div>
                  <form onSubmit={handleSubmit} name="contact" className="space-y-5" data-netlify="true">
                    
                    {/* Hidden input required by Netlify for React apps */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Contact Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                          placeholder="Your contact number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Qualification *</label>
                      <select
                        name="qualification"
                        required
                        value={form.qualification}
                        onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="" disabled>Select your qualification</option>
                        <option value="B.E./B.Tech">B.E./B.Tech</option>
                        <option value="M.E./M.Tech">M.E./M.Tech</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Year of Graduation *</label>
                      <input
                        type="number"
                        name="graduationYear"
                        required
                        min="1980"
                        max="2035"
                        value={form.graduationYear}
                        onChange={(e) => setForm({ ...form, graduationYear: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                        placeholder="e.g., 2024"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message (Optional)</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your background, goals, or questions..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Security Check *</label>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-neutral-100 px-4 py-3 rounded-xl border border-neutral-200">
                          <span className="text-lg font-semibold text-primary-600">{captcha.num1}</span>
                          <span className="text-lg font-semibold text-neutral-500">+</span>
                          <span className="text-lg font-semibold text-primary-600">{captcha.num2}</span>
                          <span className="text-lg font-semibold text-neutral-500">=</span>
                        </div>
                        <input
                          type="number"
                          required
                          value={captchaInput}
                          onChange={(e) => {
                            setCaptchaInput(e.target.value);
                            setCaptchaError(false);
                          }}
                          className={`w-24 px-4 py-3 rounded-xl border text-sm text-center focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all ${captchaError ? 'border-red-500 ring-2 ring-red-500/20' : 'border-neutral-200'}`}
                          placeholder="?"
                        />
                        <button
                          type="button"
                          onClick={refreshCaptcha}
                          className="p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-colors"
                          title="Refresh captcha"
                        >
                          <RefreshCw className="w-5 h-5 text-neutral-500" />
                        </button>
                      </div>
                      {captchaError && (
                        <p className="text-sm text-red-500 mt-1.5">Incorrect answer. Please try again.</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-[1.02] shadow-lg"
                    >
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </button>
                  </form>
                </>
              )}
            </motion.div>
        </div>
      </section>

    </div>
  );
}
