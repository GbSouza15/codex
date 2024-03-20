import Image from "next/image";
import logoLanding from "../../../public/images/logoLanding.svg"
import Link from "next/link";

export function Nav() {

    return (
        <div className='flex items-center justify-between px-4 pt-6 absolute w-full md:px-9'>
            <Image src={logoLanding} alt="logo" width={150} />
            <div className="flex items-center gap-5">
                <Link href="#plano">
                    <button className="text-[#16A2F8] font-medium bg-white py-2 px-4 rounded-[10px] shadow-lg">Vamos Começar</button>
                </Link>
                <Link href="/login">
                    <button className="text-white bg-gradient-to-r from-[#036cbd] to-[#1a2036] w-40 h-10 rounded-[10px] shadow-lg">Login</button>
                </Link>
            </div>
        </div>
    )
}