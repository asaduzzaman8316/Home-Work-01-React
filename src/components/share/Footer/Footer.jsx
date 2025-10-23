import React from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import FooterNavi from './FooterNavi'
import FooterCard from './FooterCard'

function Footer() {
    const navi = ["About", "Contact", "Product"]
    const navi02 = ["Premium Support", "Our Services", "Know Our Team"]
    return (
        <div className='bg-gray-900 '>
            <div className='2xl:container  mx-auto w-[90%] py-10 text-white flex justify-between items-start'>
                <HeaderLogo para={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nesciunt eligendi'} />
                <FooterNavi title={'Company'} navi={navi} />
                <FooterNavi title={"Quick Link"} navi={navi02} />
                <FooterCard />
            </div>
        </div>
    )
}

export default Footer
