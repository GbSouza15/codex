import Link from "next/link";
import Image from "next/image";
import logoLanding from "../../../public/logoLanding.svg"

export function Nav() {

    return (
        <div className='bg-primaryColor flex items-center justify-between md:justify-center'>
            <div className="w-full flex items-center justify-between md:max-w-[1440px] px-4 py-7 md:px-12">
                <div className='flex items-center justify-between w-full'>
                    <Link href="/">
                        <Image className="w-[98px]" src={logoLanding} alt="Logo"/>
                    </Link>

                    <div className="hidden md:block">
                        <ul className='flex items-center text-secondaryColor gap-12'>
                            <li>Serviços</li>
                            <li>Canais de Comunicação</li>
                            <li>Nossos Produtos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}