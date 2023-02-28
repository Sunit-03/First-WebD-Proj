import React from 'react'
import {FaSwimmingPool,FaMountain,FaKey} from "react-icons/fa"
import {GiSpookyHouse,GiGreenhouse,GiTreehouse,GiUfo,GiWoodCabin,GiVillage} from "react-icons/gi"
import {TbBeach} from "react-icons/tb"
import {IoMdSnow,IoMdTrendingUp} from "react-icons/io"
import {RiHotelBedFill} from "react-icons/ri"
import {MdOutlineBedroomParent} from "react-icons/md"
import Filter from './Filter'

const Filters = () => {
    const tab=[{title:"new",icon:<FaKey />},
    {title:"Trending",icon:<IoMdTrendingUp />},
    {title:"Pools",icon:<FaSwimmingPool />},
    {title:"Farms",icon:<GiGreenhouse />},
    {title:"Tree House",icon:<GiTreehouse />},
    {title:"Cabin",icon:<GiWoodCabin />},
    {title:"Village",icon:<GiVillage />},
    {title:"Beach",icon:<TbBeach />},
    {title:"Hotel",icon:<RiHotelBedFill />},
    {title:"Couples",icon:<MdOutlineBedroomParent />},
    {title:"Snow",icon:<IoMdSnow />},
    {title:"Mountain",icon:<FaMountain />},
    {title:"Historical",icon:<GiSpookyHouse />},
    {title:"Specials",icon:<GiUfo />},
];
    return (
    <div className=''>
        <div className='flex justify-center  gap-3 sm:gap-4  mt-4'>
            {tab.map((obj)=>(<Filter title={obj.title} icon={obj.icon}/>))}
        </div>
    </div>
  );
};

export default Filters;