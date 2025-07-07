import React from 'react';
import { Home, Leaf, TrendingUp, Award, MessageCircle } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: number;
}

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange
}) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'होम', icon: Home },
    { id: 'doctor', label: 'डॉक्टर', icon: Leaf },
    { id: 'market', label: 'मंडी', icon: TrendingUp },
    { id: 'schemes', label: 'योजनाएं', icon: Award, badge: 3 },
    { id: 'chat', label: 'चैट', icon: MessageCircle, badge: 2 }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`
                relative flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-green-100 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              <div className="relative">
                <Icon 
                  size={24} 
                  className={isActive ? 'text-green-600' : 'text-gray-500'} 
                />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`
                text-xs mt-1 font-medium
                ${isActive ? 'text-green-600' : 'text-gray-500'}
              `}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};