import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SetSearch } from '../Redux/SearchSlice';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mt-3 mx-5   ">
      <div className="flex flex-col">
        <span className="font-semibold">{new Date().toUTCString().slice(0, 16)}</span>
        {/* <span className="font-bold text-2xl">eMize</span> */}
        <img src="./img/Mize.png" className="w-[80px] h-[80px]" alt="LOGO" />
      </div>
        <div className='flex justify-between items-center p-3 outline-none border-solid border-2 w-80 mt-5 mb-7 rounded-md border-gray-600'>
          <input onChange={(e)=>dispatch(SetSearch(e.target.value))} className="outline-none w-[100%] pr-4" type="text" name='search' autoComplete='off' placeholder='Search here' />
          <FaSearch />
        </div>
     
    </nav>
  )
}

export default Navbar