import Link from "next/link";
import { MenuMobile } from "@/components/Nav/MenuMobile";
import Image from "next/image";
import logoSvg from "../../../public/logo.svg"

export function Nav() {

    return (
        <div className='bg-primaryColor flex items-center justify-between md:justify-center'>
            <div className="w-full flex items-center justify-between md:max-w-[1440px] px-4 py-7 md:px-12">
                <div className='flex items-center justify-between w-full'>
                    <Link href="/">
                        <Image className="w-[98px]" src={logoSvg} alt="Logo"/>
                    </Link>

                    <div className="hidden md:block">
                        <ul className='flex items-center text-secondaryColor gap-12'>
                            <li>Opção 1</li>
                            <li>Opção 2</li>
                            <li>Opção 3</li>
                            <li>Opção 4</li>
                        </ul>
                    </div>
                </div>
                <MenuMobile/>
            </div>
        </div>
    )
}