import {Nav} from "@/components/Nav/Nav";
import Image from "next/image";
import bgMobileLanding from "../../public/bgMobileLanding.svg"
import arrowRight from "../../public/arrowRight.svg"
import arrowRightBlack from "../../public/arrowRightBlack.svg"
import printDashboardMobile from "../../public/print.svg"
import depositSvg from "../../public/deposit.svg"
import invoiceSvg from "../../public/invoice.svg"
import suppliersSvg from "../../public/suppliers.svg"
import trainingSvg from "../../public/training.svg"
import styleBg from "./style.module.css"
import checkIcon from "../../public/checkIcon.svg"
import logoBlack from "../../public/logoBlack.svg"


export default function Home() {
  return (
    <div>
        <Nav/>
        {/* Hero */}
        <section className={`${styleBg.backgroundSection}`}>
            <div className="pt-[130px]">
                <h1 className="leading-[110%] font-bold text-bold text-white text-[44px] px-4 max-w-[354px]">Gerencie seu estoque de uma  forma mais eficiente.</h1>
                <p className="text-white leading-[140%] px-4 text-lg pt-6 max-w-[364px]">Otimize seus recursos e maximize sua produtividade com nosso sistema de gestão de estoque eficiente.</p>
                <div className="flex items-center justify-between text-[#16A2F8] text-lg bg-white rounded-3xl w-[218px] h-12 ml-4 mt-12">
                    <p className="ml-4 font-medium">Vamos começar</p>
                    <div className="bg-[#16A2F8] rounded-full p-2 mr-2">
                        <Image src={arrowRight} alt="arrowRight"/>
                    </div>
                </div>
            </div>
                <div className="overflow-hidden mt-12 ml-[18px]">
                    <Image className="max-w-none" src={printDashboardMobile} alt="bgMobileLanding"/>
                </div>
        </section>

        <section className={`${styleBg.backgroundSection2} mt-[410px]`}>
            <h1 className="text-white font-bold text-[44px] px-4 pt-16 max-w-[354px] leading-[110%]">Nossa especialidade, é impulsionar seus projetos.</h1>

            <div className="px-4 pt-[52px] flex flex-col gap-8">
                <div className="max-w-[354px]">
                    <h2 className="text-white font-bold text-3xl">Eficiência Operacional.</h2>
                    <p className="text-[#A0B2FF] text-base leading-[140%] mt-[10px]">Otimize seus processos com nosso sistema de gerenciamento de estoque. Ganhe eficiência e mantenha seu negócio em pleno funcionamento.</p>
                </div>
                <div className="max-w-[354px]">
                    <h2 className="text-white font-bold text-3xl">Design Intuitivo.</h2>
                    <p className="text-[#A0B2FF] text-base leading-[140%] mt-[10px]">Controle seu estoque de forma fácil e rápida com nosso design simples e intuitivo. Navegue sem complicações e otimize sua gestão.</p>
                </div>
                <div className="max-w-[354px]">
                    <h2 className="text-white font-bold text-3xl">Emissão de NF.</h2>
                    <p className="text-[#A0B2FF] text-base leading-[140%] mt-[10px]">Gerencie seu estoque e emita notas fiscais de maneira eficiente, tudo em um só lugar.</p>
                </div>
            </div>
        </section>

        <section className="pb-16">
            <div className="px-4 max-w-[300px] mt-16">
               <h1 className="font-bold text-[44px] leading-[110%]">Para cada <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">necessidade.</span> Um <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">serviço.</span></h1>
            </div>

            <div className="px-4 flex flex-col gap-9 mt-14">
                <div>
                    <Image src={depositSvg} alt="depositSvg"/>
                    <h2 className="text-3xl font-bold mt-8">Visualize depósitos</h2>
                    <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Tenha uma visão detalhada dos depósitos financeiros relacionados ao seu sistema de gerenciamento de estoque, incluindo informações sobre transações, saldos e movimentações de fundos.</p>
                </div>
                <div>
                    <Image src={suppliersSvg} alt="suppliersSvg"/>
                    <h2 className="text-3xl font-bold mt-8">Registre fornecedores</h2>
                    <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Mantenha um registro completo e organizado de todos os fornecedores envolvidos no seu sistema de estoque, incluindo detalhes de contato, histórico de transações e outras informações relevantes.</p>
                </div>
                <div>
                    <Image src={invoiceSvg} alt="invoiceSvg"/>
                    <h2 className="text-3xl font-bold mt-8">Gere Notas fiscais</h2>
                    <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Crie de maneira eficiente e precisa notas fiscais para todas as transações relacionadas ao seu estoque, garantindo conformidade com as regulamentações fiscais e facilitando processos contábeis.</p>
                </div>
                <div>
                    <Image src={trainingSvg} alt="trainingSvg"/>
                    <h2 className="text-3xl font-bold mt-8">Treinamento e capacitação</h2>
                    <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Oferecemos programas de treinamento abrangentes para capacitar equipes no uso altamente eficaz das soluções web que desenvolvemos.</p>
                </div>
            </div>
        </section>

        <section className="pb-24">
            <div className="px-4 mt-20">
                <h1 className="text-[44px] font-bold leading-[110%]">Um <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">investimento para cada necessidade.</span></h1>
            </div>
            <div className={`${styleBg.backgroundSection3} mx-[18px] mt-14 px-6`}>
                <p className="text-2xl pt-9 text-[#696C77]">Plano Básico</p>
                <p className="text-white text-[54px] font-bold mt-6">R$ 49,99<span className="text-white font-bold text-base">/mês</span></p>

                <ul className="text-white flex flex-col gap-4 mt-8">
                    <li className="flex items-center gap-3">
                        <Image src={checkIcon} alt="checkIcon"/>
                        <p className="text-white text-lg">Gerenciamento de estoque</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={checkIcon} alt="checkIcon"/>
                        <p className="text-white text-lg">Gerenciamento de estoque</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={checkIcon} alt="checkIcon"/>
                        <p className="text-white text-lg">Gerenciamento de estoque</p>
                    </li>
                    <li className="flex items-center gap-3">
                        <Image src={checkIcon} alt="checkIcon"/>
                        <p className="text-white text-lg">Gerenciamento de estoque</p>
                    </li>
                </ul>
                <button className="bg-white text-[#0037FF] w-full py-[14px] px-[18px] rounded-3xl mt-[35px]">Assinar Plano</button>
            </div>
        </section>

        <section className="mt-8 px-4">
            <div>
                <h1 className="font-bold text-[64px] leading-[110%]">Precisa <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">conversar</span>? Entre em contato.</h1>

                <div className="flex items-center justify-between text-white text-lg bg-[#04091C] rounded-3xl w-[275px] h-12 mt-12">
                    <p className="ml-4 font-medium">Mensagen via whastapp</p>
                    <div className="bg-white rounded-full p-2 mr-2">
                        <Image src={arrowRightBlack} alt="arrowRight"/>
                    </div>
                </div>
            </div>
        </section>

        <footer className="mt-52 px-4">
            <div>
                <Image src={logoBlack} alt="logoBlack"/>
                <p className="text-[#909395] text-2xl leading-[33.6px] mt-6">Desenvolvimento de sistema web personalizados.</p>
            </div>
        </footer>
    </div>
  )
}