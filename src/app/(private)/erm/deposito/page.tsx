import NavErm from "@/components/NavErm/NavErm"
import ButtonComponent from "@/components/Button/Button"
import Image from "next/image"
import logoWhiteCodex from "../../../../../public/images/simbolLogoWhite.svg"
import WareHouseProducts from "@/components/WarnHouseTable/warnHouseTable"
import User from "@/components/User/User"

export default function DepositoPage() {
    return (
        <section className="bg-[#04091C] min-h-screen md:flex md:justify-center">
            <div className="px-5 pt-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image priority={true} className="2xl:w-6" src={logoWhiteCodex} alt="Logo White Codex" />
                        <h1 className="text-white text-2xl 2xl:text-3xl font-bold">Depósito</h1>
                    </div>
                    <User />
                </div>
                <NavErm />
                <div className="mt-10">
                    <ButtonComponent title="Adicionar depósito" />
                </div>
                <div className="bg-[#111827] mt-4 px-3 pt-5 rounded-xl">
                    <h2 className="text-xl font-bold text-white 2xl:text-2xl">Depósitos</h2>
                    <WareHouseProducts />
                </div>
            </div>
        </section>
    )
}