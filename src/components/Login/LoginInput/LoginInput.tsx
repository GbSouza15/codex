import { jura } from '@/styles/fonts/fonts';
import { InputHTMLAttributes, forwardRef } from 'react';

type LoginInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const LoginInput = forwardRef<HTMLInputElement, LoginInputProps>(
  ({ name, type, label, ...rest }, ref) => {
    return (
      <div className="flex flex-col w-full items-center justify-center">
        <label className={`${jura.className} w-1/2 text-base`}>{label}</label>
        <input
          {...rest}
          type={type}
          name={name}
          ref={ref}
          className="bg-[#D9D9D9] rounded-md w-1/2 h-12 p-2 focus:outline-gray-300 outline-gray-600 transition-all duration-1000"
        />
      </div>
    );
  }
);
