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
        <div className="bg-[#111827] text-white font-medium p-4 rounded-xl w-[220px]">
            <div className="flex items-center justify-between">
                <p>{props.title}</p>
                <Image src={props.icon} alt="Total de Produtos" />
            </div>
            {
                props.number && <p className="mt-6">{props.number}</p>
            }
            {
                props.buttonTitle && (
                    <button className={`bg-[${props.buttonBg}] text-white rounded-3xl py-2 px-2 mt-6`}>
                        {props.buttonTitle}
                    </button>
                )
            }
        </div>
    )
}