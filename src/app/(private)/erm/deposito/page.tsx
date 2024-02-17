import NavErm from "@/components/NavErm/NavErm"
import ButtonComponent from "@/components/Button/Button"
import Image from "next/image"
import logoWhiteCodex from "../../../../../public/images/simbolLogoWhite.svg"
import WareHouse from "@/components/WareHouse/WareHouse"

export default function DepositoPage() {
    return (
        <section className="bg-[#04091C] min-h-screen md:flex md:justify-center">
            <div className="px-5 pt-8">
                <div className="flex items-center gap-2">
                    <Image priority={true} src={logoWhiteCodex} alt="Logo White Codex" />
                    <h1 className="text-white text-2xl font-bold">Depósito</h1>
                </div>
                <NavErm />
                <div className="mt-10">
                    <ButtonComponent title="Adicionar depósito" />
                </div>
                <WareHouse />
            </div>
        </section>
    )
}