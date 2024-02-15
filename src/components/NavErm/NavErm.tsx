'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function NavErm(): JSX.Element {
  const [activeLink, setActiveLink] = useState('Dashboard');

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <div className="mt-5">
      <ul className="text-white flex text-xs items-center gap-5">
        <li>
          <Link href={{
            pathname: '/erm/dashboard',
          }}>
            <span
              className={`text-white ${activeLink === 'dashboard' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('dashboard')}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link href={{
            pathname: '/erm/deposito',
          
          }}>
            <span
              className={`text-white ${activeLink === 'deposito' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('deposito')}
            >
              Depósitos
            </span>
          </Link>
        </li>
        <li>
          <Link href={{
            pathname: '/erm/fornecedores',
          
          }}>
            <span
              className={`text-white ${activeLink === 'fornecedores' ? 'border-b-2 border-[#2651EE]' : ''}`}
              onClick={() => handleLinkClick('fornecedores')}
            >
              Fornecedores
            </span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span
              className={`text-white ${activeLink === 'Products' ? 'border-b-2 border-[#2651EE]' : ''}`}
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
