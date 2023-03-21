import React, { useEffect, useState } from 'react'
import Mealcard from './Mealcard'

const Meal = () => {
    const [meals,setMeals] = useState([])
    useEffect(() => {
        fetchData()

    },[])
    const fetchData = async() => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        const {meals} = await api.json();
        setMeals(meals)
        console.log(meals);
    }
  return (
    <div className='flex flex-wrap gap-10 mt-10 justify-center'>
      {/* <div className='fixed bg-slate-700 h-screen'></div>
      <div className='bg-slate-400 h-screen'></div>
      <div className='bg-slate-400 h-screen'></div> */}
      {meals.map(meal => {
        return(
            <Mealcard key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal}/>
        )

      })}

    </div>
  )
}

export default Meal
