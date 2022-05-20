import React from 'react'
import Image from  'next/image'

const Card = ( {img, title, description }) => {
  return (
    <div className="bg-white shadow rounded lg:w-2/3  md:w-2/2 w-full p-10 m-6">
        {/* <Image className="w-20" src={img} alt="icon" /> */}
        <h3 className="text-gray-800">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>)
}

export default Card