import {Nav} from "@/components/Nav/Nav";
import Image from "next/image";
import imgClient from '../../public/client.svg'
import imgCheck from '../../public/check.svg'
import imgIdea from '../../public/idea.svg'
import imgRun from '../../public/run.svg'
import imgTalks from '../../public/talks-bro.svg'

export default function Home() {
  return (
    <div>
        <Nav/>
        {/*Hero*/}
        <div className='flex items-center justify-between md:justify-center mt-12'>
            <div className='flex flex-col w-full justify-between items-center md:max-w-[1440px] md:flex-row md:px-12 md:justify-between'>
                <div className='flex flex-col items-center text-center max-w-[358px] lg:max-w-[520px] lg:text-start lg:items-start'>
                    <h1 className='text-2xl font-bold min-[990px]:text-4xl xl:text-[48px]'>Desenvolvimento de Sistemas Web Personalizados</h1>

                    <p className='text-base mt-6 min-[990px]:text-lg'>Transformamos suas ideias em realidade digital. Desenvolva soluções web eficientes e inovadoras com a expertise da CodeX Studio.</p>

                    <button className='text-sm text-secondaryColor bg-fourthColor w-[145px] h-[40px] mt-12'>Consulte-nos</button>
                </div>

                <Image className='w-[300px] mt-8 lg:w-[450px] min-[990px]:w-[450px]' src={imgTalks} alt="Talks"/>
            </div>
        </div>
        {/*Methodology*/}
        <div className='flex flex-col items-center mt-28'>
            <h1 className='text-2xl font-bold min-[990px]:text-4xl xl:text-[48px]'>Nossa Metodologia</h1>
            <div className='mt-9 lg:mt-16'>
                <ul className='flex flex-col items-center gap-4 lg:flex-row lg:gap-12 xl:gap-36'>
                    <li className='flex flex-col items-center gap-2 text-base min-[990px]:text-lg'>
                        <Image className='w-[40px]' src={imgClient} alt='Image Client'/>
                        Abordagem Centrada no Cliente
                    </li>
                    <li className='flex flex-col items-center gap-2 text-base min-[990px]:text-lg'>
                        <Image className='w-[40px]' src={imgRun} alt='Image Run'/>
                        Desenvolvimento Ágil
                    </li>
                    <li className='flex flex-col items-center gap-2 text-base min-[990px]:text-lg'>
                        <Image className='w-[40px]' src={imgIdea} alt='Image Idea'/>
                        Inovação Contínua
                    </li>
                    <li className='flex flex-col items-center gap-2 text-base min-[990px]:text-lg'>
                        <Image className='w-[40px]' src={imgCheck} alt='Image Check'/>
                        Qualidade e Compromisso
                    </li>
                </ul>
            </div>
            <button className='text-sm text-secondaryColor bg-fourthColor w-[145px] h-[40px] mt-9 lg:mt-16'>Consulte-nos</button>
        </div>
        {/*Services*/}
        <div className='flex flex-col items-center mt-28 px-4'>
            <h1 className='text-2xl font-bold min-[990px]:text-4xl xl:text-[48px]'>Nossos Serviços</h1>
            <div className='mt-9 lg:mt-16'>
                <ul className='flex flex-col items-center gap-6 text-center lg:flex-row lg:gap-12 lg:grid lg:grid-cols-2 lg:text-start xl:gap-x-36'>
                    <li className='flex flex-col items-center gap-2 lg:items-start'>
                        <h1 className='text-xl font-bold'>Desenvolvimento de Sistemas Web</h1>
                        <p className='text-base max-w-[548px]'>Transforme suas ideias em soluções digitais. Criamos sistemas web personalizados, desde concepção até implementação, alinhados às necessidades exclusivas do seu negócio.</p>
                    </li>
                    <li className='flex flex-col items-center gap-2 lg:items-start'>
                        <h1 className='text-xl font-bold'>Integrações Poderosas</h1>
                        <p className='text-base max-w-[548px]'>Facilitamos a conectividade entre sistemas, garantindo que suas ferramentas funcionem em harmonia. Desde integrações de APIs até conexões mais complexas, trabalhamos para maximizar a eficiência operacional e proporcionar uma experiência de usuário perfeita.</p>
                    </li>
                    <li className='flex flex-col items-center gap-2 lg:items-start'>
                        <h1 className='text-xl font-bold'>Manutenção e Suporte</h1>
                        <p className='text-base max-w-[548px]'>Nossos serviços de manutenção garantem atualizações contínuas, enquanto o suporte dedicado está sempre pronto para atender às suas necessidades, proporcionando tranquilidade para o seu negócio online.</p>
                    </li>
                    <li className='flex flex-col items-center gap-2 lg:items-start'>
                        <h1 className='text-xl font-bold'>Treinamento e Capacitação</h1>
                        <p className='text-base max-w-[548px]'>Oferta de programas de treinamento para capacitar equipes no uso eficaz das soluções web desenvolvidas.</p>
                    </li>
                </ul>
            </div>
            <button className='text-sm text-secondaryColor bg-fourthColor w-[145px] h-[40px] mt-9 lg:mt-16'>Consulte-nos</button>
        </div>
    </div>
  )
}