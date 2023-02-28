import React from 'react'
import {GrTwitter} from 'react-icons/gr'
import {SiInstagram} from 'react-icons/si'
import {BsFacebook} from 'react-icons/bs'
import {SlSocialLinkedin} from 'react-icons/sl'

const Footer = () => {
    const icons=[<GrTwitter/>,<SiInstagram/>,<BsFacebook/>,<SlSocialLinkedin/>];
  return (
    <div className='bg-white border-t-2 shadow-gray-500 sticky bottom-0 h-10 w-full flex items-center justify-center gap-5'>
        {icons.map((icon)=>(<div className='text-gray-700 hover:bg-gray-700 hover:text-white rounded-full duration-300 pl-2 pr-2 py-2'>{icon}</div>))}
    </div>
  )
}

export default Footer