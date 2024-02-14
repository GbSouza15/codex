import { jura } from '@/styles/fonts/fonts';
import { InputHTMLAttributes, forwardRef } from 'react';

type RegisterInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const RegisterInput = forwardRef<HTMLInputElement, RegisterInputProps>(
  ({ name, type, label, ...rest }, ref) => {
    return (
      <div className="flex flex-col w-[250px]">
        <label className={`${jura.className} text-sm font-bold`}>{label}</label>
        <input
          {...rest}
          type={type}
          name={name}
          ref={ref}
          className="bg-[#D9D9D9] rounded-md h-12 p-2 focus:outline-gray-300 outline-gray-600 transition-all duration-1000"
        />
      </div>
    );
  }
);
