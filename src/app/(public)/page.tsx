import {Nav} from "@/components/Nav/Nav";
import Image from "next/image";
import Link from "next/link";
import arrowRight from "../../../public/arrowRight.svg";
import arrowRightBlack from "../../../public/arrowRightBlack.svg";
import printDashboardMobile from "../../../public/print.svg";
import depositSvg from "../../../public/deposit.svg";
import invoiceSvg from "../../../public/invoice.svg";
import suppliersSvg from "../../../public/suppliers.svg";
import trainingSvg from "../../../public/training.svg";
import checkIcon from "../../../public/checkIcon.svg";
import logoBlack from "../../../public/logoBlack.svg";
import twitterIcon from "../../../public/twitter.svg";
import instagramIcon from "../../../public/instagram.svg";
import whatsappIcon from "../../../public/whatsapp.svg";
import printDashboardTablet from "../../../public/images/printDashboardTablet.svg";

export default function Home() {
  return (
    <div>
      <Nav />
      <section className="bg-[url('/images/bgMobileLanding.svg')] md:bg-[url('/images/bgTabletLanding.svg')] lg:bg-[url('/images/bgDesktopLanding.svg')] bg-cover h-[600px] md:h-[880px] lg:h-[700px]">
        <div className="pt-[130px] sm:flex sm:flex-col sm:items-center">
          <div className="hidden md:flex justify-center md:text-white md:text-lg md:border-[1px] md:border-[#477BE3] md:rounded-3xl md:w-[218px] py-2 md:mt-12">
            <p className="font-medium">Facilidade de opinião</p>
          </div>
          <h1 className="md:mt-8 leading-[110%] font-bold text-white text-[44px] md:text-7xl lg:text-[64px] px-4 max-w-[354px] sm:text-center sm:max-w-[738px] lg:max-w-[876px]">Capture, gerencie e compartilhe suas opiniões.</h1>
          <p className="text-white leading-[140%] px-4 text-lg pt-6 max-w-[364px] sm:max-w-[546px] sm:text-center">OpinionEasy é uma ferramenta para automatizar a coleta de opiniões dos seus clientes, gerenciá-las, e compatilhá-las.</p>

          <Link href="#plano" className="mt-12 ml-4">
            <button className="text-[#16A2F8] text-lg bg-white py-2 px-4 rounded-[10px] shadow-lg">Vamos Começar</button>
          </Link>

        </div>
        {/* <div className="overflow-hidden mt-12 ml-[18px] md:ml-9 lg:ml-0 lg:flex lg:justify-center">
          <Image className="max-w-none sm:hidden" src={printDashboardMobile} alt="bgMobileLanding" />
          <Image className="max-w-none hidden sm:block" src={printDashboardTablet} alt="bgMobileLanding" />
        </div> */}
      </section>

      <section className="lg:flex lg:flex-col lg:items-center lg:justify-center pt-16">
          <div className="sm:flex sm:flex-col sm:items-center lg:items-start lg:max-w-[1140px]">
            <h1 className="text-black font-bold text-[44px] md:text-[64px] px-4 pt-16 max-w-[354px] md:max-w-[532px] lg:max-w-[830px] leading-[110%] sm:px-0">Nossa especialidade é impulsionar seus projetos.</h1>

            <div className="px-4 pt-[52px] pb-16 flex flex-col gap-8 lg:flex-row lg:px-0">
              <div className="max-w-[354px] md:max-w-[532px]">
                <h2 className="text-black font-bold text-3xl">Eficiência Operacional.</h2>
                <p className="text-[#909395] text-base leading-[140%] mt-[10px]">Otimize seus processos com nosso sistema de gerenciamento de estoque. Ganhe eficiência e mantenha seu negócio em pleno funcionamento.</p>
              </div>
              <div className="max-w-[354px] md:max-w-[532px]">
                <h2 className="text-black font-bold text-3xl">Design Intuitivo.</h2>
                <p className="text-[#909395] text-base leading-[140%] mt-[10px]">Controle seu estoque de forma fácil e rápida com nosso design simples e intuitivo. Navegue sem complicações e otimize sua gestão.</p>
              </div>
              <div className="max-w-[354px] md:max-w-[532px]">
                <h2 className="text-black font-bold text-3xl">Emissão de NF.</h2>
                <p className="text-[#909395] text-base leading-[140%] mt-[10px]">Gerencie seu estoque e emita notas fiscais de maneira eficiente, tudo em um só lugar.</p>
              </div>
            </div>
          </div>
      </section>

      <section className="pb-16 lg:py-40 lg:flex lg:justify-center">
        <div className="sm:flex sm:flex-col sm:items-center lg:flex-row lg:items-start lg:gap-40 lg:max-w-[1140px]">
          <h1 className="font-bold px-4 text-[44px] md:text-[64px] mt-16 leading-[110%] sm:px-0 max-w-[354px] md:max-w-[532px] lg:max-w-[432px]">Tudo o que você <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">precisa. </span> Em um <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">dashboard.</span></h1>

          <div className="px-4 flex flex-col gap-9 mt-14 sm:max-w-[354px] md:max-w-[532px] sm:px-0 lg:grid lg:grid-cols-2">
            <div>
              <Image src={depositSvg} alt="depositSvg" />
              <h2 className="text-3xl font-bold mt-8">Visualize depósitos</h2>
              <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Ganhe uma visão panorâmica de todos os seus depósitos em um único painel e identifique facilmente a localização e quantidade de cada mercadoria em cada um deles.</p>
            </div>
            <div>
              <Image src={suppliersSvg} alt="suppliersSvg" />
              <h2 className="text-3xl font-bold mt-8">Registre fornecedores</h2>
              <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Mantenha um registro completo e organizado de todos os fornecedores envolvidos no seu sistema de estoque, incluindo detalhes de contato e outras informações relevantes.</p>
            </div>
            <div>
              <Image src={invoiceSvg} alt="invoiceSvg" />
              <h2 className="text-3xl font-bold mt-8">Gere Notas fiscais</h2>
              <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Crie de maneira eficiente e precisa notas fiscais para todas as transações relacionadas ao seu estoque, garantindo conformidade com as regulamentações fiscais e facilitando processos contábeis.</p>
            </div>
            <div>
              <Image src={trainingSvg} alt="trainingSvg" />
              <h2 className="text-3xl font-bold mt-8">Treinamento e capacitação</h2>
              <p className="text-base text-[#909395] mt-[18px] leading-[140%]">Oferecemos programas de treinamento abrangentes para capacitar equipes no uso altamente eficaz das soluções web que desenvolvemos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:flex lg:justify-center lg:py-40" id="plano">
        <div className="sm:flex sm:flex-col sm:items-center lg:flex-row lg:gap-48 lg:max-w-[1140px]">
          <div>
            <h1 className="font-bold px-4 text-[42px] md:text-[64px] mt-16 leading-[110%] sm:px-0 max-w-[354px] md:max-w-[532px]">Um <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">investimento para cada necessidade.</span></h1>
            <Link href="https://buy.stripe.com/test_dR6eXb4AkeOBecMaEF">
              <div className="hidden lg:flex items-center justify-between text-white text-lg bg-[#04091C] rounded-3xl w-[178px] h-12 mt-[100px] cursor-pointer">
                <p className="ml-4 font-medium">Assinar Plano</p>
                <div className="bg-white rounded-full p-2 mr-2">
                  <Image src={arrowRightBlack} alt="arrowRight" />
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-[url('/images/cardMobile.svg')] md:bg-[url('/images/cardTablet.svg')] lg:bg-[url('/images/cardDesktop.svg')] max-w-none bg-cover w-[354px] md:w-[532px] h-[468px] md:h-[368px] lg:h-[540px] lg:w-[371px] mx-[18px] mt-14">
            <p className="text-2xl pt-9 text-[#696C77] px-6 hidden md:block">Plano Básico</p>
            <p className="text-white text-[54px] font-bold px-6 pt-5 md:pt-0">R$ 179,99<span className="text-white font-bold text-base">/mês</span></p>
            <p className="text-lg text-white px-6">+ R$ 0,19 por nota fiscal</p>

            <ul className="text-white flex flex-col gap-4 mt-8 md:mt-6 px-6">
              <li className="flex items-center gap-3">
                <Image src={checkIcon} alt="checkIcon" />
                <p className="text-white text-lg md:text-sm">Gerenciamento de estoque</p>
              </li>
              <li className="flex items-center gap-3">
                <Image src={checkIcon} alt="checkIcon" />
                <p className="text-white text-lg md:text-sm">Gerenciamento de fornecedores</p>
              </li>
              <li className="flex items-center gap-3">
                <Image src={checkIcon} alt="checkIcon" />
                <p className="text-white text-lg md:text-sm">Gerenciamento de depósitos</p>
              </li>
              <li className="flex items-center gap-3">
                <Image src={checkIcon} alt="checkIcon" />
                <p className="text-white text-lg md:text-sm">Emissão de notas fiscais</p>
              </li>
            </ul>
            <div className="px-6">
              <Link href="https://buy.stripe.com/test_dR6eXb4AkeOBecMaEF">
                <button className="bg-white text-[#0037FF] md:hidden w-full md:w-[178px] md:bg-red-500 py-[14px] px-[18px] rounded-3xl mt-[35px]">Assinar Plano</button>
              </Link>
            </div>
              <Link href="https://buy.stripe.com/test_dR6eXb4AkeOBecMaEF">
                <div className="hidden md:flex lg:hidden items-center justify-between text-white text-lg bg-[#04091C] rounded-3xl w-[178px] h-12 mt-[100px]">
                  <p className="ml-4 font-medium">Assinar Plano</p>
                  <div className="bg-white rounded-full p-2 mr-2">
                    <Image src={arrowRightBlack} alt="arrowRight" />
                  </div>
                </div>
              </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-0 sm:flex sm:flex-col sm:items-center">
        <div className="max-w-[354px] md:max-w-[540px] lg:max-w-[600px] lg:flex lg:flex-col lg:items-center">
          <h1 className="mt-24 md:mt-72 lg:mt-28 font-bold text-[44px] md:text-[64px] leading-[110%]">Precisa <span className="bg-gradient-to-r from-[#113CC7] to-[#26A0FE] bg-clip-text text-transparent">conversar</span>? Entre em contato.</h1>
          <Link href="https://wa.me/5579996548883">
            <div className="flex items-center justify-between text-white text-lg bg-[#04091C] rounded-3xl w-[285px] h-12 mt-12">
              <p className="ml-4 font-medium">Mensagem via WhatsApp</p>
              <div className="bg-white rounded-full p-2 mr-2">
                <Image src={arrowRightBlack} alt="arrowRight" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <footer className="mt-52 px-4 py-8 lg:pt-20 sm:px-0 sm:flex sm:flex-col sm:items-center bg-gray-300 bg-opacity-30">
        <div className="max-w-[354px] md:max-w-[532px] lg:max-w-[1140px] lg:flex lg:flex-col">
          <div className="lg:flex gap-[500px]">
            <div>
              <div>
                <Image src={logoBlack} alt="logoBlack" />
                <p className="text-[#909395] text-2xl leading-[33.6px] mt-6 lg:max-w-[361px]">Desenvolvimento de sistemas web personalizados.</p>
              </div>

              <div className="mt-16">
                <p className="text-base font-semibold">Redes</p>
                <div className="mt-6">
                  <ul className="flex items-center gap-[18px]">
                    <li>
                      <Image src={twitterIcon} alt="twitterIcon" />
                    </li>
                    <li>
                      <Image src={instagramIcon} alt="instagramIcon" />
                    </li>
                    <li>
                      <Image src={whatsappIcon} alt="whatsappIcon" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="flex mt-16 gap-6">
              <div>
                <p className="text-base font-semibold">Página</p>
                <ul className="mt-6 flex flex-col gap-3">
                  <li className="text-base text-[#909395]">Nossos serviços</li>
                  <li className="text-base text-[#909395]">Especialidades</li>
                  <li className="text-base text-[#909395]">Fale conosco</li>
                  <li className="text-base text-[#909395]">Preços</li>
                </ul>
              </div>
              <div>
                <p className="text-base font-semibold">Redes</p>
                <ul className="mt-6 flex flex-col gap-3">
                  <li className="text-base text-[#909395]">Twitter</li>
                  <li className="text-base text-[#909395]">Instagram</li>
                  <li className="text-base text-[#909395]">WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="mt-16 md:flex md:items-center md:gap-9 lg:gap-0 lg:justify-between">
              <p className="text-base text-[#909395]">©2024 CodeX, Inc.</p>
            <div className="flex items-center gap-6 mt-6 md:mt-0">
              <p className="text-base text-[#909395]">Termos e serviços</p>
              <p className="text-base text-[#909395]">Privacidade</p>
              <p className="text-base text-[#909395]">Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
