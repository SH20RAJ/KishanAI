import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Leaf, TrendingUp, Award, MessageCircle } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: number;
  href: string;
}

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { id: 'home', label: 'होम', icon: Home, href: '/application' },
    { id: 'doctor', label: 'डॉक्टर', icon: Leaf, href: '/application/doctor' },
    { id: 'market', label: 'मंडी', icon: TrendingUp, href: '/application/market' },
    { id: 'schemes', label: 'योजनाएं', icon: Award, badge: 3, href: '/application/schemes' },
    { id: 'chat', label: 'चैट', icon: MessageCircle, badge: 2, href: '/application/chat' }
  ];

  // Determine active tab based on current pathname
  const getActiveTab = () => {
    if (pathname === '/application' || pathname.startsWith('/application/home')) return 'home';
    if (pathname.startsWith('/application/doctor')) return 'doctor';
    if (pathname.startsWith('/application/market')) return 'market';
    if (pathname.startsWith('/application/schemes')) return 'schemes';
    if (pathname.startsWith('/application/chat')) return 'chat';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`
                relative flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200
                ${isActive
                  ? 'bg-[var(--secondary)] text-[var(--primary)]'
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              <div className="relative">
                <Icon
                  size={24}
                  className={isActive ? 'text-[var(--primary)]' : 'text-gray-500'}
                />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`
                text-xs mt-1 font-medium
                ${isActive ? 'text-[var(--primary)]' : 'text-gray-500'}
              `}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};