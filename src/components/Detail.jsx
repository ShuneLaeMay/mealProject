import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ImYoutube2} from 'react-icons/im'

const Detail = () => {
    const {id} = useParams();
    const [meals,setMeals] = useState({});
    useEffect(() => {
        fetchMeal()

    },[])

    const fetchMeal = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json();
        setMeals(meals[0])
        console.log(meals[0])
    }
  return (
    <div className='w-[80%] mx-auto flex flex-wrap gap-10 bg-slate-400 justify-around h-screen items-center '>
      <img className='h-[400px] object-cover' src={meals.strMealThumb} alt="" />
      <div>
        <h2 className='text-2xl mb-5 font-semibold tracking-wide'>{meals.strMeal}</h2>
        <h2 className='text-xl mb-5 font-semibold tracking-wide'>{meals.strArea}</h2>
        <h2 className='text-base mb-5 font-semibold tracking-wide'>{meals.strCategory}</h2>
        <p className='leading-8 tracking-wide'>{meals.strInstructions}</p>
        <a href={meals.strYoutube}>
            <ImYoutube2 className='text-red-700 text-[80px]'/>
        </a>
      </div>
    </div>
  )
}

export default Detail
