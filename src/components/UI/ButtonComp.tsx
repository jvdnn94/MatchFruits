import React from 'react';
import type { ButtonProps } from '../../types/services';



const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  type = 'button',
  ...rest
}) => {
  // کلاس‌های پایه
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2';

  // کلاس‌های اندازه
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  // کلاس‌های رنگ (solid)
  const variantClasses: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300',
    info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-300',
    light: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-200',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-400',
  };

  // کلاس‌های outline
  const outlineClasses: Record<string, string> = {
    'outline-primary': 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-300',
    'outline-secondary': 'bg-transparent text-gray-600 border-2 border-gray-600 hover:bg-gray-100 focus:ring-gray-300',
    'outline-success': 'bg-transparent text-green-600 border-2 border-green-600 hover:bg-green-50 focus:ring-green-300',
    'outline-danger': 'bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-50 focus:ring-red-300',
  };

  // انتخاب کلاس رنگ
  let colorClasses = variantClasses[variant];
  if (variant.startsWith('outline-')) {
    colorClasses = outlineClasses[variant] || variantClasses['primary'];
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses} ${className}`}
      {...rest}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;