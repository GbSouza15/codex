import Image from "next/image"
import React from "react"

export default function CardsErm(props: {
    title: string,
    icon: string,
    number?: string,
    buttonTitle?: string,
    buttonBg?: string,
}): JSX.Element {
    return (
        <div className="bg-[#111827] text-white p-[14px] rounded-xl w-[220px] lg:min-w-[275px]">
            <div className="flex items-center justify-between">
                <p className="font-bold text-sm 2xl:text-lg">{props.title}</p>
                <Image src={props.icon} alt="Total de Produtos" />
            </div>
            {
                props.number && <p className="mt-[10px] text-2xl 2xl:text-4xl font-medium">{props.number}</p>
            }
            {
                props.buttonTitle && (
                    <button className={`bg-[${props.buttonBg}] text-white font-medium text-xs 2xl:text-base rounded-3xl py-2 px-2 mt-[10px]`}>
                        {props.buttonTitle}
                    </button>
                )
            }
        </div>
    )
}