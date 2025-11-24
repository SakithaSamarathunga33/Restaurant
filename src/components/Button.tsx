import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`bg-[#CB3A1A] text-white px-8 py-3 rounded-[50px] font-bold text-sm tracking-wide hover:bg-[#c0431b] transition-colors shadow-lg cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
