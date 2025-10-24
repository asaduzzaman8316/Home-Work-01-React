import React, { useContext } from 'react'
import { ThemControlData } from '../../../Context/ThemContext'

function HeroTop(props) {
    const [them] = useContext(ThemControlData);
    return (
        <div className='w-[40%] mx-auto text-center py-10 space-y-2  '>
            <h1 className={`text-3xl font-semibold text-gray-${them ==="Ligth"? '900': '100'}`}>{props.title}</h1>
            <p className={`text-gray-${them ==="Ligth"? '800': '300'}`}>{props.dis}</p>
        </div>
    )
}

export default HeroTop
