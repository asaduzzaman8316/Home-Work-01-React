import React, { useContext } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { ThemControlData } from '../../../Context/ThemContext';

function FooterCard() {
    const [them] = useContext(ThemControlData)
    return (
        <div className={`text-${them === 'Ligth' ? 'white' : 'black'}`}>
            <h1 className={`text-xl text-${them === 'Ligth' ? 'black' : 'white'} font-semibold  pb-10`}>Follow Us On</h1>
            <div className='flex justify-between gap-2'>
                <div className={`size-8 bg-${them === 'Ligth' ? 'gray-800' : 'white'}  flex justify-center items-center text-lg rounded-full`}>
                    <FaFacebookF />
                </div>
                <div className={`size-8 bg-${them === 'Ligth' ? 'gray-800' : 'white'}  flex justify-center items-center text-lg rounded-full`}>
                    <FaInstagram />
                </div>
                <div className={`size-8 bg-${them === 'Ligth' ? 'gray-800' : 'white'}  flex justify-center items-center text-lg rounded-full`}>
                    <FaTwitter />
                </div>
                <div className={`size-8  bg-${them === 'Ligth' ? 'gray-800' : 'white'}  flex justify-center items-center text-lg rounded-full`}>
                    <FaLinkedinIn />
                </div>
            </div>
        </div >
    )
}

export default FooterCard




// {iconlink.map(icon => (
//                     <div key={crypto.randomUUID()} className='bg-white cursor-pointer size-8 rounded-full flex items-center justify-center text-gray-800 '><i className={`${icon} `}></i></div>
//                 ))}