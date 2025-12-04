"use client";

import { useState, useRef, useEffect } from "react";
import { useStackApp, type CurrentUser } from "@stackframe/stack";
import { User, LogOut, Settings } from "lucide-react";
import Link from "next/link";

interface UserAvatarProps {
    user: CurrentUser;
}

export function UserAvatar({ user }: UserAvatarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const stackApp = useStackApp();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        await stackApp.signOut();
        setIsOpen(false);
    };

    // Get user initials for avatar
    const getInitials = () => {
        const name = user.displayName || user.primaryEmail || "U";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Avatar Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="User menu"
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                    {getInitials()}
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user.displayName || "User"}
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">
                            {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                            {user.primaryEmail}
                        </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                        <Link
                            href="/handler/account-settings"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <Settings className="w-4 h-4 mr-3 text-gray-400" />
                            Account Settings
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            <LogOut className="w-4 h-4 mr-3" />
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
