import Image from "next/image";
import logoLanding from "../../../public/images/logoLanding.svg"

export function Nav() {

    return (
        <div className='flex items-center justify-between px-4 pt-6 absolute w-full'>
            <Image src={logoLanding} alt="logo" />
            <button className="text-white bg-white bg-opacity-30 w-40 h-10 rounded-3xl">Vamos começar</button>
        </div>
    )
}