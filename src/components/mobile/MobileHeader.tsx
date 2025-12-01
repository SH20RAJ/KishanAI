import React from 'react';
import { Bell, User, Menu, Globe, ArrowLeft } from 'lucide-react';

interface MobileHeaderProps {
  userName?: string;
  location?: string;
  title?: string;
  showBack?: boolean;
  rightElement?: React.ReactNode;
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  onBackClick?: () => void;
  notificationCount?: number;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  userName = "किसान भाई",
  location = "पंजाब, भारत",
  title,
  showBack = false,
  rightElement,
  onMenuClick,
  onNotificationClick,
  onProfileClick,
  onBackClick,
  notificationCount = 0
}) => {
  // If title is provided, use simplified header layout
  if (title) {
    return (
      <div className="bg-[var(--primary)] text-white p-4 rounded-b-3xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
        <div className="relative z-10 flex items-center justify-between">
          {showBack ? (
            <button
              onClick={onBackClick}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
          ) : (
            <button
              onClick={onMenuClick}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <Menu size={24} />
            </button>
          )}

          <h1 className="text-lg font-bold text-center flex-1 font-manrope">{title}</h1>

          {rightElement ? (
            <div>{rightElement}</div>
          ) : (
            <div className="flex items-center space-x-3">
              <button
                onClick={onNotificationClick}
                className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Bell size={24} />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </button>

              <button
                onClick={onProfileClick}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <User size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default header layout with user info
  return (
    <div className="bg-[var(--primary)] text-white p-4 rounded-b-3xl shadow-md relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={onNotificationClick}
              className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <Bell size={24} />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>

            <button
              onClick={onProfileClick}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <User size={24} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
            <User size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-manrope">नमस्ते, {userName}</h2>
            <div className="flex items-center space-x-1 text-green-50">
              <Globe size={14} />
              <span className="text-sm font-medium">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};