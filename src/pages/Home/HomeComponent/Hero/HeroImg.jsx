import React from 'react'

function HeroImg(props) {
  return (
    <div className='w-[45%]'>
      <img className='rounded-md' src={props.img} alt="" />
    </div>
  )
}

export default HeroImg
