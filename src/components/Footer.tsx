import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, GraduationCap, Handshake, Home, BookOpen, Sparkles, User, Briefcase, Building, ClipboardList, FileQuestion, Mailbox, Users } from 'lucide-react';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <defs>
        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#FEDA77" />
          <stop offset="25%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="75%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-gradient)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.75" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="16.2" cy="7.8" r="1.05" fill="#fff" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#0A66C2]">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FF0000]">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#25D366]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', path: '/', icon: Home, color: 'text-sky-400 group-hover:text-sky-300' },
  { label: 'Our Courses', path: '/courses', icon: BookOpen, color: 'text-emerald-400 group-hover:text-emerald-300' },
  { label: 'Why Choose DST', path: '/why-dst', icon: Sparkles, color: 'text-amber-400 group-hover:text-amber-300' },
  { label: 'Meet Our Trainer', path: '/trainer', icon: User, color: 'text-violet-400 group-hover:text-violet-300' },
  { label: 'Placement Assistance', path: '/placement', icon: Briefcase, color: 'text-rose-400 group-hover:text-rose-300' },
  { label: 'Infrastructure', path: '/infrastructure', icon: Building, color: 'text-orange-400 group-hover:text-orange-300' },
  { label: 'Admission Process', path: '/admission', icon: ClipboardList, color: 'text-cyan-400 group-hover:text-cyan-300' },
  { label: 'Partnerships', path: '/partnerships', icon: Users, color: 'text-teal-400 group-hover:text-teal-300' },
  { label: 'FAQs', path: '/faqs', icon: FileQuestion, color: 'text-indigo-400 group-hover:text-indigo-300' },
  { label: 'Contact Us', path: '/contact', icon: Mailbox, color: 'text-lime-400 group-hover:text-lime-300' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/IMG-20260725-WA0037(2).jpg"
                alt="Deeptha Silicon Technologies"
                className="h-12 w-12 object-cover rounded-xl"
              />
              <span className="text-base font-bold">Deeptha Silicon Technologies</span>
            </div>
            <p className="text-base text-white/60 leading-relaxed mb-4">
              If you have the passion, we have the pathway. A purpose-driven VLSI training committed to building industry-ready semiconductor professionals.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/deepsiliconvlsi?igsh=NHNyZjRrb3o5a2lt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/deep-silicon-vlsi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://youtube.com/@deep_silicon_vlsi?si=ZsrKLBNnMWpJ7vyI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://wa.me/919652866600"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors group"
                  >
                    <link.icon className={`w-5 h-5 ${link.color} transition-colors flex-shrink-0`} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/partnerships#campus-connect"
                  className="flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors group"
                >
                  <GraduationCap className="w-5 h-5 text-secondary-400 group-hover:text-secondary-300 transition-colors" />
                  <span>Campus Connect</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/partnerships#industry-connect"
                  className="flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors group"
                >
                  <Handshake className="w-5 h-5 text-accent-400 group-hover:text-accent-300 transition-colors" />
                  <span>Industry Connect</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                <span className="text-base text-white/60">Launching soon in Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                <a href="tel:+919849102807" className="text-base text-white/60 hover:text-white transition-colors">+91 98491 02807</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span className="text-base text-white/60">info@deepthasilicon.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span className="text-base text-white/60">Mon – Sun, 9 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-base text-white/50 text-center">
            &copy; {new Date().getFullYear()} Deeptha Silicon Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
