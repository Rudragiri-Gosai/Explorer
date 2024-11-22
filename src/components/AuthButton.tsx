import React from 'react';
import { Link } from 'react-router-dom';

interface AuthButtonProps {
  to: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function AuthButton({ to, variant = 'primary', children }: AuthButtonProps) {
  return (
    <Link
      to={to}
      className={`
        px-4 py-2 rounded-md font-medium transition-all
        ${
          variant === 'primary'
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-transparent text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500'
        }
      `}
    >
      {children}
    </Link>
  );
}