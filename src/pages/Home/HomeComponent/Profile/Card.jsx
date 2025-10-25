import React from 'react'
import Button from '../../../../components/share/Button'
import HeroTop from '../../../../components/share/Hero/HeroTop';

function Card() {
    const employees = [
        {
            imglink: "https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1151",
            name: "Ethan Johnson",
            role: "Software Engineer"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1661681012877-6a226371ffc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Sophia Williams",
            role: "Product Manager"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1661503093101-164144add463?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Liam Brown",
            role: "UI/UX Designer"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1661684674351-fb1544442d0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Olivia Davis",
            role: "Frontend Developer"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1661425631372-6f9530fc211f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Noah Smith",
            role: "Backend Engineer"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1661578274246-4e86b839e49e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Emma Wilson",
            role: "Data Scientist"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1663045588267-240065dbf1cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "James Martinez",
            role: "DevOps Engineer"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1661659566501-f64f942a33fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Ava Taylor",
            role: "QA Engineer"
        },
        {
            imglink: "https://images.unsplash.com/photo-1681993632820-256b2d70e98c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Lucas Anderson",
            role: "Mobile App Developer"
        },
        {
            imglink: "https://plus.unsplash.com/premium_photo-1674513559454-35ca6435079f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Mia Thompson",
            role: "Project Coordinator"
        },
        {
            imglink: "https://images.unsplash.com/photo-1681993632820-256b2d70e98c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Lucas Anderson",
            role: "Mobile App Developer"
        },
        {
            imglink: "https://images.unsplash.com/photo-1681993632820-256b2d70e98c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Lucas Anderson",
            role: "Mobile App Developer"
        },
        {
            imglink: "https://images.unsplash.com/photo-1681993632820-256b2d70e98c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            name: "Lucas Anderson",
            role: "Mobile App Developer"
        },

    ];

    return (
        <>
            <HeroTop title={'Our Employees'} dis={'Meet the heart of our company — our employees. With passion, teamwork, and innovation, they turn challenges into achievements every single day.'} />
            <div className='2xl:container mx-auto w-[90%] text-white flex flex-wrap justify-between  space-y-8 my-10'>
                {employees.map((profile, idx) => (
                    <div key={idx} className=' w-[23%] rounded-md bg-gray-900 hover:scale-105 duration-500 group pb-2'>
                        <img
                            className='rounded-tl-md rounded-tr-md '
                            src={profile.imglink} alt="" />
                        <div className='p-2 space-y-3 text-center'>
                            <h1 className='text-lg'>{profile.name}</h1>
                            <p className='text-gray-300'>{profile.role}</p>
                            <div className='w-full text-center'><Button text={'Visit Profile'} /></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card
