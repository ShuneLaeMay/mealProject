import React from 'react'
import { Link } from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'
import './Mealcard.css'

const Mealcard = ({name,image,id}) => {
  return (
    <div className='relative parent'>
      <img className='image h-[300px] shadow-md object-cover rounded-lg' src={image} alt="" />
      <Link to={`/detail/${id}`}>
      <p className='absolute icon top-[45%] left-[45%] flex  items-center justify-center h-12 w-12 bg-slate-400 rounded-[100%]'>
        <BiSearchAlt2 className='text-white text-3xl' />
      </p>
      </Link>
    </div>
    
  )
}

export default Mealcard
