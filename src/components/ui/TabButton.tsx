import React from 'react';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  count?: number;
}

export const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label, count }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
        active
          ? 'bg-green-600 text-white shadow-lg'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
      {count !== undefined && (
        <span className={`text-xs px-2 py-1 rounded-full ${
          active ? 'bg-green-700' : 'bg-gray-300'
        }`}>
          {count}
        </span>
      )}
    </button>
  );
};
