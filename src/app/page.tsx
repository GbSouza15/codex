import {Nav} from "@/components/Nav/Nav";
import Image from "next/image";
import bgMobileLanding from "../../public/bgMobileLanding.svg"
import styleBg from "./style.module.css"

export default function Home() {
  return (
    <>
    oioioioioio
        <Nav/>
        {/* Hero */}
        <section className={styleBg.backgroundSection}>
            <div className="relative top-32">
                <h1 className="font-bold text-bold text-white text-[44px]">Gerencie seu estoque de uma  forma mais eficiente.</h1>
            </div>
        </section>
    </>
  )
}