import NavErm from "@/components/NavErm/NavErm"
import ButtonComponent from "@/components/Button/Button"
import Image from "next/image"
import logoWhiteCodex from "../../../../../public/images/simbolLogoWhite.svg"
import WareHouse from "@/components/WareHouse/WareHouse"

export default function DepositoPage() {
    return (
        <main className="bg-[#04091C] h-screen">
            <div className="px-5 pt-8">
                <div className="flex items-center gap-2">
                    <Image src={logoWhiteCodex} alt="Logo White Codex" />
                    <h1 className="text-white text-2xl font-bold">Depósito</h1>
                </div>
                <NavErm />
                <ButtonComponent title="Adicionar depósito" />
                <WareHouse />
            </div>
        </main>
    )
}