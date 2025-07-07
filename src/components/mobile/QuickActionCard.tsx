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
  color,
  onClick,
  isActive = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
        ${isActive 
          ? `bg-gradient-to-br ${color} shadow-lg` 
          : 'bg-white border border-gray-100 hover:shadow-md'
        }
      `}
    >
      <div className="flex items-center space-x-3">
        <div className={`
          p-3 rounded-xl
          ${isActive 
            ? 'bg-white/20' 
            : `bg-gradient-to-br ${color}`
          }
        `}>
          <Icon 
            size={24} 
            className={isActive ? 'text-white' : 'text-white'} 
          />
        </div>
        <div className="text-left">
          <h3 className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
          <p className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        </div>
      </div>
    </button>
  );
};