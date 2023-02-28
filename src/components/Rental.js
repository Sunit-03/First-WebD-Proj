import React from 'react'
import {FiStar} from 'react-icons/fi'

const Rental = ({title, image, desc, price, mdesc,star}) => {
  return (
    <div>
        {/* image */}
        <div className='flex justify-right pl-4 py-4' >
            <img src={image} alt='' className='object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[20rem] w-full'/>
        </div>
        {/* title */}
        <div className='flex font-semibold pl-4'>
            {title}
        </div>
        {/* description */}
        <div className='pt-3 flex justify-between'>
            <div>
                <div className='flex font-thin pl-4'>
                    {desc}
                </div>
                <div className='flex font-thin pl-4 text-gray-500'>
                    {mdesc}
                </div>
                <div className='flex font-bold pl-4'>
                    {price}
                </div>
            </div>
            <div className='flex items-center pr-6'>
                <FiStar />
                {star}
            </div>
        </div>
    </div>
  )
}

export default Rental