import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderLogo from './HeaderLogo'

function Header() {
    return (
        <div className='bg-gray-900 sticky top-0'>
            <div className='2xl:container  mx-auto w-[90%] flex items-center justify-between text-white  py-2'>
                <HeaderLogo title={'Home_Work_01_(React) {Asaduzzaman}'} />
                <ul className='flex justify-between items-center gap-8 '>
                    <HeaderNav />
                </ul>
            </div>
        </div>
    )
}

export default Header
