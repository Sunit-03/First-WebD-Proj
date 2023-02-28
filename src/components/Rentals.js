import React from 'react';
import Fort from '../assets/Fort.png';
import Fort2 from '../assets/Fort2.png';
import Fort3 from '../assets/Fort3.png';
import house from '../assets/house.png';
import mount from '../assets/mount.png';
import resort from '../assets/resort.png';
import resort2 from '../assets/resort2.png';
import resort3 from '../assets/resort3.png';
import Resort4 from '../assets/Resort4.png';
import Room from '../assets/Room.png';
import room2 from '../assets/room2.png';
import tree from '../assets/tree.png';
import tree2 from '../assets/tree2.png';
import Rental from './Rental';

const Rentals = () => {
    const rentals=[{title:"Mecca, Saudi Arabia",image:Fort,price:"$1500", desc:"March 1-6", mdesc:"visited by 15,376 people",star:"4.7"},{title:"Edinburgh, Scotland",image:Fort2,price:"$2000", desc:"March 4-8", mdesc:" visited by 17,840 people",star:"4.2"},{title:"Normandy, France",image:Fort3,price:"$2500", desc:"March 3-7", mdesc:"visited by 16,809 people",star:"4.9"},{title:"Oslo, Norway",image:house,price:"$1700", desc:"March 15-16", mdesc:" visited by 19,890 people", star:"4.8"},{title:"Manali, India",image:mount,price:"$1800", desc:"April 1-7", mdesc:" visited by 10,940 people", star:"4.1"},{title:"Dubai, UAE",image:resort, price:"$2300", desc:"March 3-8", mdesc:" visited by 27,670 people", star:"3.9"},{title:"Hawaii, USA",image:resort2, price:"$2700", desc:"March 3-4", mdesc:" visited by 24,690 people", star:"4.1"},{title:"Goa, India",image:resort3, price:"$1600", desc:"April 7-12", mdesc:" visited by 30,670 people", star:"4,4"},{title:"Male, Maldives",image:Resort4, price:"$2300", desc:"March 15-18", mdesc:" visited by 67,670 people", star:"4.0"},{title:"NYC, USA",image:Room, price:"$1300", desc:"March 24-28", mdesc:" visited by 17,670 people", star:"3.8"}, {title:"Beijing, China",image:room2, price:"$2700", desc:"March 9-13", mdesc:" visited by 37,470 people", star:"4.5"}, {title:"Siberia, Russia",image:tree, price:"$2400", desc:"March 6-15", mdesc:" visited by 9,670 people", star:"4.3"}, {title:"Lapland, Finland",image:tree2, price:"$1300", desc:"April 4-8", mdesc:" visited by 13,530 people", star:"4.9"}];
  return (
    <div className='pt-3 sm:pt-5'>
        <div className='grid grid-cols-6 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
            {rentals.map((rental)=> <Rental title={rental.title} image={rental.image} price={rental.price} desc={rental.desc} mdesc={rental.mdesc} star={rental.star}/>)}
        </div>
    </div>
  )
}

export default Rentals