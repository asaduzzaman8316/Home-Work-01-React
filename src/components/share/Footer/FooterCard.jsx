import React from 'react'

function FooterCard() {
    const iconlink = ['fab fa-facebook-f', 'fab fa-linkedin-in', 'fab fa-twitter', 'fab fa-instagram']
    return (
        <div>
            <h1 className='text-xl font-semibold pb-10'>Follow Us On</h1>
            <div className=' flex gap-2 items-center '>
                {iconlink.map(icon => (
                    <div key={crypto.randomUUID()} className='bg-white cursor-pointer size-8 rounded-full flex items-center justify-center text-gray-800 '><i className={`${icon} `}></i></div>
                ))}
            </div >
        </div >
    )
}

export default FooterCard
