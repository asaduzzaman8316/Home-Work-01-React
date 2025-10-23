import React from 'react'

function HeaderLogo(props) {
    return (
        <div className=' space-y-5 w-[20%] translate-y-2'>
            <div className='flex gap-4 items-center'>
                <img className='w-10  rounded-full' src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                <h1 className='text-xl font-semibold'>{props.title}</h1>
            </div>
            {/* //this is only for footer  */}
            <p>{props.para}</p>
        </div>
    )
}

export default HeaderLogo
