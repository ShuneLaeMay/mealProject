import React, { useState } from 'react'
import {BiFork} from 'react-icons/bi'
import {FaSearch} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs' 
import { Link, useNavigate } from 'react-router-dom'
import './Input.css'
const Navbar = () => {
  const nav = useNavigate();
  const [search,setSearch] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    nav(`/search/`+search)
  }

  return (
    <div>
        <div className=''>
        <div className='nav lg:container mx-auto pt-[5px]  flex  justify-around  rounded-lg '>
       <div className='flex justify-between drop-shadow-sm'>
       <Link to={'/'}>
       <BiFork className=' text-[30px]' />
       </Link>
       <h1 className='text-sky-600 text-[20px] font-mono '>Vegetable</h1>
       </div>
      <div className='relative'>
        <p className='absolute bottom-[30px] left-4'>
        <BsSearch className=' text-lg'/>
        </p>
        <form onSubmit={submitHandler}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Meals'  className= ' bg-slate-400 placeholder:italic placeholder:text-white p-[5px] border-2 drop-shadow-lg border-stone-50 rounded-lg ' type="text" />
        </form>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Navbar
