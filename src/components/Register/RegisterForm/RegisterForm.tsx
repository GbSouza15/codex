'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jura } from '@/styles/fonts/fonts';
import { RegisterInput } from '../RegisterInput/RegisterInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .max(20, 'A senha precisa ter no máximo 20 caracteres'),
  nameCompany: z.string(),
  address: z.string(),
  cnpj: z.string().min(14, 'Precisa ter 14 caracteres. Sem pontos, traços ou barras').max(14, 'Precisa ter 14 caracteres. Sem pontos, traços ou barras'),
  nameUser: z.string(),
  contact: z.string(),
});

type RegisterFormProps = z.infer<typeof schema>;

export function RegisterForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormProps>({
    resolver: zodResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange'
  });

  async function registerFetch(data: RegisterFormProps) {
    try {
      const response = await fetch('http://localhost:8080/company/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log(data);
      
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error( JSON.stringify(errorResponse) || 'Erro ao fazer registro');
      }
      setIsFormSubmitted(true);
      router.push('/login');
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(registerFetch)}
      className="flex justify-center items-center flex-col my-8"
    >
      <h1 className={`${jura.className} text-black text-[40px]`}>Registro</h1>
      <div className="w-full flex justify-center items-center flex-col gap-2 mt-5 lg:grid lg:grid-cols-2 lg:gap-5 lg:justify-items-center">
        <RegisterInput {...register('email')} error={errors.email?.message} label='E-mail. (Mesmo email da compra)' type='text' />
        <RegisterInput {...register('password')} error={errors.password?.message} label='Crie uma senha' type='password' />
        <RegisterInput {...register('nameCompany')} error={errors.nameCompany?.message} label='Nome da empresa' type='text' />
        <RegisterInput {...register('address')} error={errors.address?.message} label='Endereço' type='text' />
        <RegisterInput {...register('cnpj')} error={errors.cnpj?.message} label='CNPJ' type='text' />
        <RegisterInput {...register('nameUser')} error={errors.nameUser?.message} label='Nome do usuário' type='text' />
        <RegisterInput {...register('contact')} error={errors.contact?.message} label='Contato' type='text' />
      </div>
      <button
        type="submit"
        className="bg-[#2651EE] text-white rounded-[10px] w-full lg:w-1/2 h-12 p-2 focus:outline-gray-400 mt-8"
        disabled={isFormSubmitted}
      >
        Registrar
      </button>
      <p className={`${jura.className} w-full mt-5`}>
        Já tem uma conta?{' '}
        <Link href="/login" className="text-[#2651EE]">
          Clique aqui.
        </Link>
      </p>
    </form>
  );
}
