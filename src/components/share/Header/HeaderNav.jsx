import React, { useContext } from 'react'
import { ThemControlData } from '../../../Context/ThemContext'

function HeaderNav() {
    const [them] = useContext(ThemControlData);
    const navList = ["Home", "About", "Contact", "Product"]
    return (
        <>
            {navList.map((item, idx) => (
                <li key={idx} className={`text-xl text-${them === 'Ligth' ? 'black': 'white'} font-semibold cursor-pointer hover:text-red-500 duration-500 `} >{item}</li>
            ))}

        </>
    )
}

export default HeaderNav
