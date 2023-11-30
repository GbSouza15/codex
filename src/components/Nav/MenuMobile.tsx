'use client'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

export function MenuMobile() {
    const [menuActive, setMenuActive] = useState(false)

    function setMenuState() {
        setMenuActive(!menuActive)
    }

    return (
        <div>
            <div className="md:hidden" onClick={() => setMenuState()}>
                {!menuActive ? (<IoMenu color='#ffffff' size='2rem'/>) : (<MdClose color='#ffffff' size='2rem'/>)}
            </div>

            {menuActive && (
                <div className='absolute bg-secondaryColor top-[88px] left-0 right-0'>
                    <ul className='text-primaryColor flex flex-col gap-5 z-10 items-center py-10'>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                    </ul>
                </div>
            )}
        </div>
    )
}