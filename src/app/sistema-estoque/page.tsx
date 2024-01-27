import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import dotenv from 'dotenv'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import Image from "next/image";
import imgDesign from '../../../public/desingSimple.svg'
import imgInvoice from '../../../public/Invoice.svg'
import imgResponsiveDesign from '../../../public/responsiveDesign.svg'
import imgAgile from '../../../public/agile.svg'
import imgLogoFooter from '../../../public/logo-footer.svg'
import imgHero from '../../../public/imgHero.svg'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function Product() {

  dotenv.config()



  return (
    <div>
        {/*Hero*/}
        <div className='flex items-center justify-between md:justify-center pt-12 pb-12 bg-white'>
            <div className='flex flex-col w-full justify-between items-center md:max-w-[1440px] md:flex-row md:px-12 md:justify-between'>
                <div className='flex flex-col items-center text-center text-primaryColor max-w-[358px] lg:max-w-[583px] lg:text-start lg:items-start'>
                    <h1 className='text-2xl font-bold min-[990px]:text-4xl xl:text-[48px]'>Sistema de Gerenciamento de Estoques</h1>

                    <p className='text-base mt-6 min-[990px]:text-lg'>Transformamos suas ideias em realidade digital. Desenvolva soluções web eficientes e inovadoras com a expertise da Codex Studio.</p>

                    <button className='text-sm text-secondaryColor bg-fourthColor w-[145px] h-[40px] mt-12'>Ver Planos</button>
                </div>

                <Image className='w-[300px] lg:w-[450px] min-[990px]:w-[450px]' src={imgHero} alt="Img Hero"/>
            </div>
        </div>
        {/*Methodology*/}
        <div className='flex flex-col items-center mt-28'>
            <div>
              <ul className="px-4 flex flex-col gap-2">
                <li className="border-solid border-[1px] border-gray-300 pb-4">
                  <div className="flex flex-col items-center">
                    <Image className="w-[176px] mt-5" src={imgDesign} alt="Img Design" />
                  </div>
                  <div className="flex flex-col px-4 mt-10">
                    <p className="text-xl font-bold">Design Intuitivo</p>
                    <span className="text-base mt-3">Controle seu estoque de forma fácil e rápida com nosso design simples e intuitivo. Navegue sem complicações e otimize sua gestão.</span>
                  </div>
                </li>

                <li className="border-solid border-[1px] border-gray-300 pb-4">
                  <div className="flex flex-col items-center">
                    <Image className="w-[157px] mt-5" src={imgInvoice} alt="Img Design" />
                  </div>
                  <div className="flex flex-col px-4 mt-10">
                    <p className="text-xl font-bold">Emissão de Nota Fiscal</p>
                    <span className="text-base mt-3">Gerencie seu estoque e emita notas fiscais de maneira eficiente, tudo em um só lugar.</span>
                  </div>
                </li>

                <li className="border-solid border-[1px] border-gray-300 pb-4">
                  <div className="flex flex-col items-center">
                    <Image className="w-[157px] mt-5" src={imgResponsiveDesign} alt="Img Design" />
                  </div>
                  <div className="flex flex-col px-4 mt-10">
                    <p className="text-xl font-bold">Responsividade</p>
                    <span className="text-base mt-3">Acesse e gerencie seu estoque de onde estiver. Nosso sistema é totalmente responsivo, proporcionando flexibilidade e praticidade em qualquer dispositivo.</span>
                  </div>
                </li>

                <li className="border-solid border-[1px] border-gray-300 pb-4">
                  <div className="flex flex-col items-center">
                    <Image className="w-[157px] mt-5" src={imgAgile} alt="Img Design" />
                  </div>
                  <div className="flex flex-col px-4 mt-10">
                    <p className="text-xl font-bold">Eficiência Operacional</p>
                    <span className="text-base mt-3">Otimize seus processos com nosso sistema de gerenciamento de estoque. Ganhe eficiência e mantenha seu negócio em pleno funcionamento.</span>
                  </div>
                </li>
              </ul>
            </div>
            <button className='text-sm text-secondaryColor bg-fourthColor w-[145px] h-[40px] mt-9 lg:mt-16'>Ver Planos</button>
        </div>
        
        {/*Planos*/}
        <div className='mt-28'>
          <stripe-pricing-table pricing-table-id="prctbl_1OcBXmI31XXVVttr5ze0Rj2z"
          publishable-key={process.env.PUBLISHABLE_KEY}></stripe-pricing-table>
        </div>

        {/* Contact */}
        <div className='flex flex-col items-center mt-28 px-4'>
            <h1 className='text-2xl font-bold mb-4 min-[990px]:text-4xl xl:text-[48px] text-center'>Canais de Comunicação</h1>
            <p className='text-base text-center'>Informações de contato para manter o diálogo sempre aberto.</p>
            <div className='mt-8 lg:mt-16'>
                <ul className='flex flex-col items-center gap-6 text-center lg:flex-row lg:gap-12 lg:text-start lg:items-stretch xl:gap-x-36'>
                    <li className='flex flex-col items-center gap-2 lg:items-center'>
                        <FaWhatsapp size='35px'/>
                        <h1 className='text-lg font-bold'>WhatsApp</h1>
                    </li>
                    <li className='flex flex-col items-center gap-2 lg:items-center'>
                        <MdOutlineEmail size='35px'/>
                        <h1 className='text-lg font-bold'>E-mail</h1>
                    </li>
                    <li className='flex flex-col items-center gap-2 lg:items-center'>
                        <FaInstagram size='35px'/>
                        <h1 className='text-lg font-bold'>Instagram</h1>
                    </li>
                </ul>
            </div>            
        </div>
        {/* More Questions */}
        <div className='mt-28 px-4 bg-[#697077] text-secondaryColor pt-20 pb-20'>
            <h1 className='text-2xl font-bold text-center min-[990px]:text-4xl xl:text-[48px]'>Perguntas Frequentes</h1>
            <div className="mx-auto max-w-[358px] md:max-w-[600px] lg:max-w-[900px] mt-16">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
        {/* Footer */}
        <footer className="bg-primaryColor text-secondaryColor flex justify-center py-8">
            <div className="md:max-w-[1440px] flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
                <Image className="w-[98px]" src={imgLogoFooter} alt="Logo Footer"/>
                <p className="text-xs">Codex Studio @ 2023. All rights reserved.</p>
                <ul className="flex items-center gap-4">
                    <li><FaWhatsapp color='#ffffff' size='18px'/></li>
                    <li><MdOutlineEmail color='#ffffff' size='18px'/></li>
                    <li><FaInstagram color='#ffffff' size='18px'/></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}