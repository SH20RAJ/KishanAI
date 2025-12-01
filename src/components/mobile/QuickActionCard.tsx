import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  color, // Keeping color prop for backward compatibility but might override styles
  onClick,
  isActive = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl transition-all duration-300 text-left
        border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--primary)]
        bg-white group
      `}
    >
      <div className="flex items-center space-x-3">
        <div className={`
          p-3 rounded-lg bg-[var(--secondary)] text-[var(--primary)]
          group-hover:bg-[var(--primary)] group-hover:text-white transition-colors
        `}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-bold text-sm text-gray-800 group-hover:text-[var(--primary)] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-gray-500">
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
};