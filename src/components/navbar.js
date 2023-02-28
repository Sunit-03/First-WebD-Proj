import React from 'react';
import logo from '../assets/logo1.png';
import {VscGlobe} from "react-icons/vsc"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineUser} from "react-icons/ai"
import {HiSearch} from "react-icons/hi"

const navbar = () => {
  return (
    <div className='flex justify-between items-center border-b'>
        {/*left */}
        <div className='flex items-center'>
            <img src={logo} className='object-cover -my-12 pl-4'/>
        </div>
        {/*middle*/}
        <div className='flex justify-center items-center relative shadow-sm shadow-gray-500 border rounded-full hover:shadow-sm duration-300'>
            <input type="search" placeholder='' className='py-2.5 w-[20rem] rounded-full outline-8'/>
            <div className='flex justify-between absolute w-full pr-16 pl-8 '>
                <button className='font-semibold'>Where ?</button>
                <button className='font-semibold border-x px-4'>When ?</button>
                <button className='text-gray-600'>With Whom ?</button>
            </div>
            <div className='bg-[red] p-2 rounded-full mr-2'>
                <HiSearch className='text-white'/>
            </div>
        </div>
        {/*right*/}
        <div className='flex justify-center items-center relative pr-10'>
            <p className='font-semibold pr-10 hover:bg-gray-100 rounded-full justify-center items-center py-2 pl-3 pr-3 duration-600'>InnYourHome</p>
            <div className='flex items-center mx-8 gap-1 rounded-full hover:shadow-sm pl-2 pr-2 py-2 hover:bg-gray-100 duration-400'>
                <VscGlobe className=''/>
                <div className=''>EN</div>
            </div>
            <div className='flex justify-center border rounded-full pl-4 pr-4 py-2 gap-4 bg-[red] hover:bg-[#ff7575] hover:shadow-sm duration-200 ease-out text-white'>
                <GiHamburgerMenu/>
                <AiOutlineUser/>
            </div>
        </div>
    </div>
  )
}

export default navbar;