import React from 'react';
import type { Language } from '../data/languages';

interface LanguageCardProps {
  language: Language;
  isSelected: boolean;
  onClick: () => void;
}

export default function LanguageCard({ language, isSelected, onClick }: LanguageCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all
        ${
          isSelected
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white hover:bg-indigo-50 text-gray-900 shadow-md hover:scale-[1.02]'
        }
      `}
    >
      <div className="flex items-start space-x-4">
        <img
          src={language.icon}
          alt={`${language.name} icon`}
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
            {language.name}
          </h3>
          <p className={`mt-2 text-sm ${isSelected ? 'text-indigo-100' : 'text-gray-600'}`}>
            {language.description}
          </p>
          <div className="mt-4">
            <span
              className={`
                inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                ${
                  isSelected
                    ? 'bg-indigo-500 text-white'
                    : 'bg-indigo-100 text-indigo-800'
                }
              `}
            >
              {language.projects.length} Projects Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}