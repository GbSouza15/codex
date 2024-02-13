'use client';

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

type LoginFormProps = z.infer<typeof schema>;

export function RegisterForm() {
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
      className="flex justify-center items-center flex-col my-8"
    >
      <h1 className={`${jura.className} text-black text-[40px]`}>Registro</h1>
      <div className="w-full flex justify-center items-center flex-col gap-2 mt-5 lg:grid lg:grid-cols-2 lg:gap-5 lg:justify-items-center">
        <RegisterInput {...register('email')} label='E-mail. (Mesmo email da compra)' type='text' />
        <RegisterInput {...register('password')} label='Crie uma senha' type='password' />
        <RegisterInput {...register('nameCompany')} label='Nome da empresa' type='text' />
        <RegisterInput {...register('address')} label='Endereço' type='text' />
        <RegisterInput {...register('cnpj')} label='CNPJ' type='text' />
        <RegisterInput {...register('nameUser')} label='Nome do usuário' type='text' />
        <RegisterInput {...register('contact')} label='Contato' type='text' />
      </div>
      <button
        type="submit"
        className="bg-[#2651EE] text-white rounded-md w-full lg:w-1/2 h-12 p-2 focus:outline-gray-400 mt-8"
      >
        Registrar
      </button>
      <p className={`${jura.className} w-full mt-5`}>
        Esqueceu a senha?{' '}
        <a href="/" className="text-[#2651EE]">
          Clique aqui.
        </a>
      </p>
    </form>
  );
}
