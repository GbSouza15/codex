'use client';

import { jura } from '@/styles/fonts/fonts';
import { LoginInput } from '../LoginInput/LoginInput';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .max(20, 'A senha precisa ter no máximo 20 caracteres')
});

type LoginFormProps = z.infer<typeof schema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange'
  });

  function handleLogin(data: LoginFormProps) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="lg:w-3/4 w-full flex justify-center items-center flex-col"
    >
      <h1 className={`${jura.className} text-black text-[40px]`}>Login</h1>
      <div className="w-full flex justify-center items-center flex-col gap-2 mt-5">
        <LoginInput {...register('email')} label='E-mail' type='text' />
        <LoginInput {...register('password')} label='Senha' type='password' />
      </div>
      <button
        type="submit"
        className="bg-[#2651EE] text-white rounded-md w-1/2 h-12 p-2 focus:outline-gray-400 mt-8"
      >
        Entrar
      </button>
      <p className={`${jura.className} w-1/2 mt-5`}>
        Esqueceu a senha?{' '}
        <a href="/" className="text-[#2651EE]">
          Clique aqui.
        </a>
      </p>
    </form>
  );
}
