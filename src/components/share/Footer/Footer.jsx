import React, { useContext } from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import FooterNavi from './FooterNavi'
import FooterCard from './FooterCard'
import ThemControlar from '../Header/ThemControlar'
import { ThemControlData } from '../../../Context/ThemContext'

function Footer() {
    const navi = ["About", "Contact", "Product"]
    const navi02 = ["Premium Support", "Our Services", "Know Our Team"]
    const [them] = useContext(ThemControlData)
    return (
        <div className={`bg-${them === 'Ligth' ? "white" : "gray-900"} border-t-gray-300  ${them === "Ligth" && 'border-t'}`}>
            <div className='2xl:container  mx-auto w-[90%] py-10 flex justify-between items-start'>
                <HeaderLogo para={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nesciunt eligendi'} />
                <FooterNavi title={'Company'} navi={navi} />
                <FooterNavi title={"Quick Link"} navi={navi02} />
                <FooterCard />
            </div>
        </div>
    )
}

export default Footer
