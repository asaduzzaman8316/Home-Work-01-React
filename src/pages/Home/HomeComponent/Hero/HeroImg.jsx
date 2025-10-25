import React from 'react'

function HeroImg(props) {
  return (
    <div className="w-[45%]  relative rounded-lg after:-z-10 before:-z-20 z-10
              after:content-[''] before:content-[''] after:absolute before:absolute after:-inset-0.5 before:-inset-0.5 after:rounded-md before:rounded-md after:bg-[conic-gradient(red,yellow,green,yellow,red)] before:bg-[conic-gradient(red,yellow,green,yellow,red)] before:blur-lg"
    >
      <img className='rounded-lg w-full object-cover' src={props.img} alt="" />
    </div>
  )
}

export default HeroImg
