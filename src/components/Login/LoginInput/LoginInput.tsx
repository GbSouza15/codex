import { jura } from '@/styles/fonts/fonts';
import { InputHTMLAttributes, forwardRef } from 'react';

type LoginInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ name, type, label, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col w-[280px]">
        <label className={`${jura.className} text-base`}>
          {label}
          {
            error && <span className="text-red-500 text-sm">{error}</span>
          }
        </label>
        <input
          {...rest}
          type={type}
          name={name}
          ref={ref}
          className="bg-[#D9D9D9] rounded-[10px] h-12 p-2 focus:outline-gray-300 outline-gray-600 transition-all duration-1000"
        />
      </div>
    );
  }
);
