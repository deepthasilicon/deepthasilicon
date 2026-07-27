import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Courses', path: '/courses' },
  { label: 'Why Choose DST', path: '/why-dst' },
  { label: 'Meet Our Trainer', path: '/trainer' },
  { label: 'Placement Assistance', path: '/placement' },
  { label: 'Infrastructure', path: '/infrastructure' },
  { label: 'Admission Process', path: '/admission' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <img
              src="/images/IMG-20260725-WA0037(2).jpg"
              alt="Deeptha Silicon Technologies"
              className="h-9 w-9 sm:h-10 sm:w-10 object-cover flex-shrink-0 rounded-lg"
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm sm:text-base font-bold tracking-tight text-primary-500 group-hover:text-primary-600 transition-colors">
                Deeptha Silicon Technologies
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            {navLinks.filter(l => l.label !== 'Contact Us').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-neutral-600 hover:text-primary-500 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-all hover:scale-105 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-700"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 shadow-lg">
          <div className="px-4 py-2 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
