import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ImYoutube2} from 'react-icons/im'

const Search = () => {
    const {name} = useParams();
    const [items,setItems] = useState({});
    useEffect(() => {
        fetchData()
    },[])
   
    const fetchData = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const {meals} = await api.json();
        setItems(meals[0])
        console.log(meals)
    }
  return (
    <div>
       <div className='w-[80%] mx-auto flex flex-wrap  bg-slate-400 justify-around h-screen items-center '>
       <img className='h-[400px] object-cover' src={items.strMealThumb} alt="" />
      </div>
      <div className='w-[80%] mx-auto flex flex-wrap   h-screen '>
      <div className=''>
      <h1 className='text-2xl mb-5 font-semibold tracking-wide'>{items.strMeal}</h1>
      <h1 className='text-xl mb-5 font-semibold tracking-wide'>{items.strCategory}</h1>
      <h1 className='text-base mb-5 font-semibold tracking-wide'>{items.strArea}</h1>
      </div>
      <p className='leading-8 tracking-wide'>{items.strInstructions}</p>
      <a href={items.strYoutube}>
            <ImYoutube2 className='text-red-700 text-[80px]'/>
        </a>
      </div>
    </div>
  )
}

export default Search
