'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import iconDashboard from '../../../public/images/iconDashboardNav.svg';
import iconWareHouse from '../../../public/images/iconWareHouseNav.svg';
import iconSupplier from '../../../public/images/iconSuppliersNav.svg';
import iconProducts from '../../../public/images/iconProductNav.svg';

export default function NavErm(): JSX.Element {
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const path = pathName.split('/').pop();
    setActiveLink(path || '');
  })

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <div className="mt-5">
      <ul className="text-white flex flex-col sm:flex-row text-xs 2xl:text-base gap-5 w-fit">
        <li>
          <Link prefetch={false} className='flex items-center gap-2' href={{
            pathname: '/erm/dashboard',
          }}>
            <Image priority={true} src={iconDashboard} alt='Ícone de Dashboard'/>
            <span
              className={`text-white ${activeLink === 'dashboard' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('dashboard')}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link prefetch={false} className='flex items-center gap-2' href={{
            pathname: '/erm/deposito',
          
          }}>
            <Image priority={true} src={iconWareHouse} alt='Ícone de Depósito'/>
            <span
              className={`text-white ${activeLink === 'deposito' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('deposito')}
            >
              Depósitos
            </span>
          </Link>
        </li>
        <li>
          <Link prefetch={false} className='flex items-center gap-2' href={{
            pathname: '/erm/fornecedores',
          
          }}>
            <Image priority={true} src={iconSupplier} alt='Ícone de Fornecedores'/>
            <span
              className={`text-white ${activeLink === 'fornecedores' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('fornecedores')}
            >
              Fornecedores
            </span>
          </Link>
        </li>
        <li>
          <Link prefetch={false} className='flex items-center gap-2' href={{
            pathname: '/erm/produtos',
          }}>
            <Image priority={true} src={iconProducts} alt='Ícone de Produtos'/>
            <span
              className={`text-white ${activeLink === 'produtos' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('Products')}
            >
              Produtos
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
