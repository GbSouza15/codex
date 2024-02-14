import Image from "next/image";
import logoLanding from "../../../public/images/logoLanding.svg"
import Link from "next/link";

export function Nav() {

    return (
        <div className='flex items-center justify-between px-4 pt-6 absolute w-full md:px-9'>
            <Image src={logoLanding} alt="logo" />
            <div className="flex items-center gap-5">
                <Link href="#plano">
                    <button className="text-white bg-white bg-opacity-30 w-40 h-10 hidden md:block rounded-3xl">Vamos começar</button>
                </Link>
                    <button className="text-white bg-gradient-to-r from-[#1a2036] to-[#036cbd] w-40 h-10 rounded-3xl shadow-lg">Login</button>
            </div>
        </div>
    )
}