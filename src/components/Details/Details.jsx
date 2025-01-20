import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdHome } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router'

const Details = () => {
  const { idMeal } = useParams()
    const navigate = useNavigate()
  const [mealDetail, setMealDetail] = useState()
  console.log(mealDetail)

  const getDetails = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    )
    const data = await res.json()
    console.log(data, 'fjskllllllll')
    setMealDetail(data.meals[0])
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
   
    
      <div className='w-2/3 p-10 mx-auto shadow-xl card bg-base-100'>
        <div className='pb-6'>
        <h2 className='pb-6 text-3xl font-bold border-b-2 card-title'>{mealDetail?.strMeal}</h2>
    
        </div>
        <img
            src={mealDetail?.strMealThumb}
          alt='Movie'
          className='object-cover rounded-2xl h-[400px] '
        />

        <div className='flex flex-col gap-4 py-8'>
            <p className='text-xl font-semibold text-neutral-700'>Category: <span className='font-normal text-neutral-500'>{mealDetail?.strCategory}</span></p>
            <p className='text-xl font-semibold text-neutral-700'>Area: <span className='font-normal text-neutral-500'>{mealDetail?.strArea}</span></p>
            <p className='text-xl font-semibold text-neutral-700'>Introductions: <span className='font-normal text-neutral-500'>{mealDetail?.strInstructions}</span></p>
            <p className='text-xl font-semibold text-neutral-700'>Youtube Url: <span className='font-normal text-neutral-500'>{mealDetail?.strYoutube}</span></p>
          <div className=' card-actions'>
            <button onClick={() => navigate(`/`)} className='font-bold bg-yellow-500 btn'>
            <IoMdHome  className='text-2xl' />
              Go Home
            </button>
          </div>
        </div>
      </div>
  )
}

export default Details
