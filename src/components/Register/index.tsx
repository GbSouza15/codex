import Image from 'next/image';
import { RegisterForm } from './RegisterForm/RegisterForm';

export default function LoginComponent() {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#04091C]">
      <div className="lg:w-1/2 h-full flex justify-center items-center">
        <Image
          className="lg:p-2 p-8 z-50 mt-20 lg:mt-0"
          src={'images/logo.svg'}
          alt="logo"
          width={400}
          height={42}
        />
        <Image
          className="hidden lg:flex absolute top-0 right-1/2 w-1/6"
          src={'images/bubble-end.svg'}
          alt="bubble image"
          width={300}
          height={415}
        />
        <Image
          className="hidden lg:flex absolute bottom-0 left-0 w-1/6"
          src={'images/bubble-start.svg'}
          alt="bubble image"
          width={300}
          height={415}
        />
      </div>
      <div className="lg:w-1/2 mt-20 lg:mt-0 flex justify-center items-center flex-col lg:rounded-none rounded-t-3xl bg-white">
        <RegisterForm />
      </div>
    </div>
  );
}
