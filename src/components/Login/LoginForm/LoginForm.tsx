'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange'
  });

  async function loginFetch(data: any) {
    try {
      const response = await fetch('http://localhost:8080/company/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error( JSON.stringify(errorResponse) || 'Erro ao fazer login');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      console.log("token: " + token)

      setIsFormSubmitted(true);
      router.push('/erm/dashboard');
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(loginFetch)}
      className="flex justify-center items-center flex-col"
    >
      <h1 className={`${jura.className} text-black text-[40px]`}>Login</h1>
      <div className="w-full flex justify-center items-center flex-col gap-2 mt-5">
        <LoginInput {...register('email')} error={errors.email?.message} label='E-mail' type='text' />
        <LoginInput {...register('password')} error={errors.password?.message} label='Senha' type='password' />
      </div>
      <button
        type="submit"
        className="bg-[#2651EE] text-white rounded-[10px] w-full lg:w-1/2 h-12 p-2 focus:outline-gray-400 mt-8"
        disabled={isFormSubmitted}
      >
        Entrar
      </button>
      <p className={`${jura.className} w-full mt-5`}>
        Esqueceu a senha?{' '}
        <Link href="/" className="text-[#2651EE]">
          Clique aqui.
        </Link>
      </p>
    </form>
  );
}
