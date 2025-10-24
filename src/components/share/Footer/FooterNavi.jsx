import React, { useContext } from 'react'
import { ThemControlData } from '../../../Context/ThemContext'

function FooterNavi(props) {
const [them] = useContext(ThemControlData)
    return (
        <div className={`flex flex-col gap-5 ${them === 'Ligth'? 'text-black': "text-white"} text-lg font-medium list-none`}>
            <h1 className='pb-2 text-xl font-semibold'>{props.title}</h1>
            {props.navi.map(item => (
                <div key={crypto.randomUUID()}>
                    <li>{item}</li>
                </div>
            ))}
        </div>
    )
}

export default FooterNavi
