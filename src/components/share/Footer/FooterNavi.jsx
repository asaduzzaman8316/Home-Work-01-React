import React from 'react'

function FooterNavi(props) {

    return (
        <div className='flex flex-col gap-5 text-white text-lg font-medium list-none'>
            <h1 className='pb-2 text-xl font-semibold'>{props.title}</h1>
            {props.navi.map(item => (
                <div key={crypto.randomUUID()}>
                    <li>{item}</li>
                </div>
            ))}
        </div>
    )
}

export default FooterNavi
