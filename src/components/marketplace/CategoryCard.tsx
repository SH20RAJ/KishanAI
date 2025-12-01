import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
    name: string;
    icon: LucideIcon;
    color: string;
    description: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon: Icon, color, description }) => {
    const colorClasses = {
        green: 'bg-green-50 text-green-600 group-hover:bg-green-100',
        yellow: 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100',
        brown: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
        blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
    };

    const selectedColorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.green;

    return (
        <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${selectedColorClass}`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};
