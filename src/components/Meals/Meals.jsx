import React, { useContext, useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import Meal from '../Meal/Meal'
import { useNavigate } from 'react-router'
import { SearchContext } from '../../SearchProvider/SearchProvider'
import NotFound from '../NotFound/NotFound'

const Meals = () => {
  const navigate = useNavigate()
  const { search, setSearch } = useContext(SearchContext)

  const [mealsData, setMealsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMealsData = async () => {
    
    
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMealsData(data.meals)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }



  useEffect(() => {
    getMealsData ()
  }, [search] )


  return (
    <div>
      <h1 className='py-8 text-4xl font-bold text-center text-black '>
        Cious Your Foods
      </h1>
      {
        isLoading && (
          <div className='flex justify-center h-screen'>
            <BallTriangle
            height={50}
            width={50}
            radius={5}
            color='#4fa94d'
            ariaLabel='ball-triangle-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
          </div>
        )
      }
      {
          mealsData === null && <NotFound title={'Search Result Not Found'}></NotFound>
        }
      <div className='grid grid-cols-1 gap-6 py-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>

        

        {mealsData?.map(meal => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  )
}

export default Meals
