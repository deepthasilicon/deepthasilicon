import type { LucideIcon } from 'lucide-react';

type GradientKey =
  | 'blue' | 'emerald' | 'orange' | 'purple' | 'rose'
  | 'amber' | 'teal' | 'cyan' | 'indigo' | 'pink'
  | 'sky' | 'lime' | 'fuchsia' | 'red' | 'green'
  | 'primary' | 'secondary' | 'accent';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconBadgeProps {
  icon: LucideIcon;
  gradient?: GradientKey;
  size?: Size;
  className?: string;
  /** Render a light-on-dark variant for use on dark/colored backgrounds */
  variant?: 'solid' | 'glass';
}

const gradients: Record<GradientKey, string> = {
  blue: 'from-blue-400 via-blue-500 to-blue-600',
  emerald: 'from-emerald-400 via-emerald-500 to-emerald-600',
  orange: 'from-orange-400 via-orange-500 to-orange-600',
  purple: 'from-purple-400 via-purple-500 to-purple-600',
  rose: 'from-rose-400 via-rose-500 to-rose-600',
  amber: 'from-amber-300 via-amber-400 to-amber-500',
  teal: 'from-teal-400 via-teal-500 to-teal-600',
  cyan: 'from-cyan-400 via-cyan-500 to-cyan-600',
  indigo: 'from-indigo-400 via-indigo-500 to-indigo-600',
  pink: 'from-pink-400 via-pink-500 to-pink-600',
  sky: 'from-sky-400 via-sky-500 to-sky-600',
  lime: 'from-lime-400 via-lime-500 to-lime-600',
  fuchsia: 'from-fuchsia-400 via-fuchsia-500 to-fuchsia-600',
  red: 'from-red-400 via-red-500 to-red-600',
  green: 'from-green-400 via-green-500 to-green-600',
  primary: 'from-primary-300 via-primary-400 to-primary-600',
  secondary: 'from-secondary-300 via-secondary-400 to-secondary-600',
  accent: 'from-accent-300 via-accent-400 to-accent-600',
};

const glows: Record<GradientKey, string> = {
  blue: 'shadow-blue-500/40',
  emerald: 'shadow-emerald-500/40',
  orange: 'shadow-orange-500/40',
  purple: 'shadow-purple-500/40',
  rose: 'shadow-rose-500/40',
  amber: 'shadow-amber-500/40',
  teal: 'shadow-teal-500/40',
  cyan: 'shadow-cyan-500/40',
  indigo: 'shadow-indigo-500/40',
  pink: 'shadow-pink-500/40',
  sky: 'shadow-sky-500/40',
  lime: 'shadow-lime-500/40',
  fuchsia: 'shadow-fuchsia-500/40',
  red: 'shadow-red-500/40',
  green: 'shadow-green-500/40',
  primary: 'shadow-primary-500/40',
  secondary: 'shadow-secondary-500/40',
  accent: 'shadow-accent-500/40',
};

const sizeMap: Record<Size, { box: string; icon: string; ring: string }> = {
  xs: { box: 'w-7 h-7', icon: 'w-3.5 h-3.5', ring: 'ring-1' },
  sm: { box: 'w-12 h-12', icon: 'w-6 h-6', ring: 'ring-2' },
  md: { box: 'w-16 h-16', icon: 'w-8 h-8', ring: 'ring-2' },
  lg: { box: 'w-20 h-20', icon: 'w-10 h-10', ring: 'ring-2' },
  xl: { box: 'w-24 h-24', icon: 'w-12 h-12', ring: 'ring-4' },
};

export default function IconBadge({
  icon: Icon,
  gradient = 'primary',
  size = 'md',
  className = '',
  variant = 'solid',
}: IconBadgeProps) {
  const s = sizeMap[size];
  const grad = gradients[gradient];
  const glow = glows[gradient];

  if (variant === 'glass') {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${s.box} ${className}`}
      >
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${grad} opacity-30 blur-md`} />
        <div className={`relative inline-flex items-center justify-center ${s.box} rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 ${s.ring} ring-white/20 shadow-lg`}>
          <Icon className={`${s.icon} text-white drop-shadow-sm`} strokeWidth={2} />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center justify-center ${s.box} ${className}`}>
      {/* soft outer glow */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${grad} opacity-40 blur-lg scale-110`} />
      {/* main badge */}
      <div className={`relative inline-flex items-center justify-center ${s.box} rounded-2xl bg-gradient-to-br ${grad} ${s.ring} ring-white/30 shadow-xl ${glow}`}>
        {/* glossy highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none" />
        <Icon className={`relative ${s.icon} text-white drop-shadow-sm`} strokeWidth={2} />
      </div>
    </div>
  );
}
