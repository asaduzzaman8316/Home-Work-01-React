import React from 'react'

function HeaderNav() {
    const navList = ["Home", "About", "Contact", "Product"]
    return (
        <>
            {navList.map(item => (
                <li key={crypto.randomUUID()} className='text-xl font-semibold cursor-pointer hover:text-red-500 duration-500  '>{item}</li>
            ))}

        </>
    )
}

export default HeaderNav
