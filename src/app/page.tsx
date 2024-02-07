import {Nav} from "@/components/Nav/Nav";
import Image from "next/image";
import bgMobileLanding from "../../public/bgMobileLanding.svg"
import arrowRight from "../../public/arrowRight.svg"
import printDashboardMobile from "../../public/print.png"
import styleBg from "./style.module.css"

export default function Home() {
  return (
    <>
        <Nav/>
        {/* Hero */}
        <section className={styleBg.backgroundSection}>
            <div className="relative top-32">
                <h1 className="font-bold text-bold text-white text-[44px] px-4">Gerencie seu estoque de uma  forma mais eficiente.</h1>
                <p className="text-white px-4 text-lg pt-6">Otimize seus recursos e maximize sua produtividade com nosso sistema de gestão de estoque eficiente.</p>
                <div className="flex items-center justify-between text-[#16A2F8] text-lg bg-white rounded-3xl w-[218px] h-12 ml-4 mt-12">
                    <p className="ml-4">Vamos começar</p>
                    <div className="bg-[#16A2F8] rounded-full p-2 mr-2">
                        <Image src={arrowRight} alt="arrowRight"/>
                    </div>
                </div>
                <div>
                    <Image className="" src={printDashboardMobile} alt="bgMobileLanding"/>
                </div>
            </div>
        </section>
    </>
  )
}