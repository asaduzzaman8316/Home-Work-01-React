import React, { useContext } from 'react'
import HeaderNav from './HeaderNav'
import HeaderLogo from './HeaderLogo'
import ThemControlar from './ThemControlar'
import { ThemControlData } from '../../../Context/ThemContext'

function Header() {
    const [them] = useContext(ThemControlData)
    return (
        <div className={`bg-${them === 'Ligth' ? 'white' : 'gray-900'} sticky top-0 border-b-gray-300  ${them === "Ligth" && 'border-b'} shadow-sm`}>
            <div className='2xl:container  mx-auto w-[90%] flex items-center justify-between text-white  py-2'>
                <HeaderLogo title={'Home_Work_01_(React) {Asaduzzaman}'} />
                <ul className='flex justify-between items-center gap-8 '>
                    <HeaderNav />
                    <ThemControlar />
                </ul>
            </div>
        </div>
    )
}

export default Header
