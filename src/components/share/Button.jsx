import React from 'react'

function Button(props) {
    return (
        <div>
            <button className='bg-cyan-900 px-10 py-2 hover:bg-red-700 hover:scale-105 duration-500 rounded-md text-xl font-semibold ' >{props.text}</button>
        </div>
    )
}

export default Button
