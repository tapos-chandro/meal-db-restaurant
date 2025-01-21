
import React, { useEffect, useState } from 'react'
import { IoMdHome } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router'

const Details = () => {
  const { idMeal } = useParams()
  const navigate = useNavigate()
  const [mealDetail, setMealDetail] = useState()

  const getDetails = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    )
    const data = await res.json()
    setMealDetail(data.meals[0])
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <div className='p-5 mx-auto shadow-xl lg:p-10 lg:w-2/3 card bg-base-100'>
      <div className='pb-6'>
        <h2 className='pb-6 text-3xl font-bold border-b-2 card-title'>
          {mealDetail?.strMeal}
        </h2>
      </div>
      <img
        src={mealDetail?.strMealThumb}
        alt='Movie'
        className=' object-fill rounded-2xl lg:h-[500px]'
      />

      <div className='flex flex-col gap-4 py-8'>
        <p className='text-xl font-semibold text-neutral-700'>
          Category:{' '}
          <span className='font-normal text-neutral-500'>
            {mealDetail?.strCategory}
          </span>
        </p>
        <p className='text-xl font-semibold text-neutral-700'>
          Area:{' '}
          <span className='font-normal text-neutral-500'>
            {mealDetail?.strArea}
          </span>
        </p>
        <p className='text-xl font-semibold text-neutral-700'>
          Introductions:{' '}
          <span className='font-normal text-neutral-500'>
            {mealDetail?.strInstructions}
          </span>
        </p>
        <p className='font-semibold lg:text-xl text-neutral-700'>
          Youtube Url:{' '}
          <span className='font-normal text-neutral-500'>
            <a target='_blank' href={mealDetail?.strYoutube}>
              {mealDetail?.strYoutube}
            </a>
          </span>
        </p>
        <div className=' card-actions'>
          <button
            onClick={() => navigate(`/`)}
            className='font-bold bg-yellow-500 btn'
          >
            <IoMdHome className='text-2xl' />
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details
