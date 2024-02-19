import NavErm from "@/components/NavErm/NavErm"
import CardsErm from "@/components/CardsErm/CardsErm"
import LatestMovements from "@/components/LatestMovements/LatestMovements"
import LowStock from "@/components/LowStock/LowStock"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import logoWhiteCodex from "../../../../../public/images/simbolLogoWhite.svg"
import iconCardProduct from "../../../../../public/images/iconCardProducts.svg"
import iconArrowsProduct from "../../../../../public/images/iconArrowsProduct.svg"
import User from "@/components/User/User"

export default function DashboardPage() {
    return (
        <section className="bg-[#04091C] min-h-screen md:flex md:justify-center">
            <div className="px-5 pt-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image priority={true} src={logoWhiteCodex} alt="Logo White Codex" />
                        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
                    </div>
                    <User />
                </div>
                <NavErm />
                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                    <CardsErm title="Total de Produtos" icon={iconCardProduct} number="34.600"/>
                    <CardsErm title="Movimentações" icon={iconArrowsProduct} buttonBg="#2651EE" buttonTitle="Ver produtos"/>
                </div>
                <div className="lg:flex gap-2">
                    <LatestMovements />
                    <LowStock />
                </div>
            </div>
        </section>
    )
}