import NavErm from "@/components/NavErm/NavErm"
import ButtonComponent from "@/components/Button/Button"
import Image from "next/image"
import logoWhiteCodex from "../../../../../public/images/simbolLogoWhite.svg"
import Products from "@/components/ProductsTable/ProductsTable"
import User from "@/components/User/User"

export default function ProdutosPage() {
    return (
        <section className="bg-[#04091C] min-h-screen md:flex md:justify-center pb-8">
            <div className="px-5 pt-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image priority={true} src={logoWhiteCodex} alt="Logo White Codex" />
                        <h1 className="text-white text-2xl font-bold">Fornecedores</h1>
                    </div>
                    <User />
                </div>
                <NavErm />
                <div className="flex flex-col w-[200px] lg:w-1/5 lg:flex-row mt-10 gap-5">
                    <ButtonComponent title="Adicionar Segmento" />
                    <ButtonComponent title="Adicionar Produto" />
                </div>
                <div className="bg-[#111827] mt-4 px-3 pt-5 rounded-xl">
                    <h2 className="text-xl font-bold text-white">Produtos</h2>
                    <Products />
                </div>
            </div>
        </section>
    )
}