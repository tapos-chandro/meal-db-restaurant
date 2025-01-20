import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import Meal from '../Meal/Meal'
import { useLoaderData, useRouteLoaderData } from 'react-router'
import { useNavigate } from 'react-router'

const Meals = () => {
  const navigate = useNavigate()

  const [mealsData, setMealsData] = useState([])




  // const {data} = useLoaderData()

  if(mealsData.length < 0){
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
      return
  }

  console.log(mealsData)



  useEffect( () => {

     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
     .then(res => res.json())
     .then(data => setMealsData(data.meals))

  }, [])


  return (
    <div>
      <h1 className='py-4 text-3xl font-bold text-center text-black'>
        Cious Your Foods
      </h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        
        {
          mealsData.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
        }
        
      </div>
    </div>
  )
}

export default Meals
