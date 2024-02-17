import NavErm from "@/components/NavErm/NavErm"
import ButtonComponent from "@/components/Button/Button"
import Image from "next/image"
import logoWhiteCodex from "../../../../../public/images/simbolLogoWhite.svg"
import Suppliers from "@/components/SuppliersTable/SuppliersTable"

export default function FornecedoresPage() {
    return (
        <section className="bg-[#04091C] min-h-screen md:flex md:justify-center pb-8">
            <div className="px-5 pt-8">
                <div className="flex items-center gap-2">
                    <Image priority={true} src={logoWhiteCodex} alt="Logo White Codex" />
                    <h1 className="text-white text-2xl font-bold">Fornecedores</h1>
                </div>
                <NavErm />
                <div className="mt-10">
                    <ButtonComponent title="Adicionar fornecedor" />
                </div>
                <div className="bg-[#111827] mt-4 px-3 pt-5 rounded-xl">
                    <h2 className="text-xl font-bold text-white">Fornecedores</h2>
                    <Suppliers />
                </div>
            </div>
        </section>
    )
}