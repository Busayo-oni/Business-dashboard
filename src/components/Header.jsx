import React from 'react'
import SearchBar from '../ui/Search'
import RegionPicker from '../ui/Region'
import Notification from '../assets/Notifications.png'
import Image from '../assets/image.png'

const Header = () => {
  return (
    <div className='lg:max-w-[1000px] flex  gap-5 items-center  bg-white py-5 lg:ml-[320px] text-left '>
        <h1 className='font-extrabold text-4xl text-[#151D48] mr-20'>Dashboard</h1>
        <div className="flex items-center gap-7">
        <SearchBar />
        <RegionPicker />
        <img src={Notification} alt="notification" className='lg:block hidden' />
        <div className='flex gap-2 lg:-m-0 -m-8'>
            <img src={Image} alt="" />
            <div className='flex flex-col justify-between'>
                <b>Musfiq</b>
                <p>Admin</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header