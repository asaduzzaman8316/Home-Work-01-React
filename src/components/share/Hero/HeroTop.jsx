import React, { useContext } from 'react'
import { ThemControlData } from '../../../Context/ThemContext'

function HeroTop(props) {
    const [them] = useContext(ThemControlData);
    return (
        <div className='w-[40%] mx-auto text-center py-10 space-y-2  '>
            <h1 className={`text-3xl font-semibold ${them === "Ligth" ? 'text-black' : 'text-white'}`}>{props.title}</h1>
            <p className={`${them === "Ligth" ? 'text-gray-800 2xl:text-xl' : 'text-gray-300 2xl:text-xl'}`}>{props.dis}</p>
        </div>
    )
}

export default HeroTop
