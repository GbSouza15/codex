import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import WareHouseProducts from "../WarnHouseTable/warnHouseTable"
  

export default function WareHouse() {
    return (
        <Accordion type="single" collapsible className="mt-5">
            <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#222A38] text-white rounded-[5px] px-5">
                <div className="flex items-center gap-6">
                    <p>Depósito X</p>
                    <p>Endereço X</p>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <WareHouseProducts />
            </AccordionContent>
            </AccordionItem>
        </Accordion>      
    )
}