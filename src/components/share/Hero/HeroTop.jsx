import React from 'react'

function HeroTop(props) {
    return (
        <div className='w-[40%] mx-auto text-center py-10 space-y-2  '>
            <h1 className='text-3xl font-semibold text-gray-100'>{props.title}</h1>
            <p className='text-gray-300'>{props.dis}</p>
        </div>
    )
}

export default HeroTop
