import React from 'react'
import { useNavigate } from 'react-router'

const Meal = ({ meal }) => {
  const { idMeal, strCategory, strMealThumb, strMeal, strInstructions  } = meal

  const navigate = useNavigate()
  return (
    <div>
      <div className='shadow-xl card lg:card-side bg-base-100'>
        <div className='p-5 lg:pr-0 lg:w-2/5' >
          <img
            src={strMealThumb}
            alt='Movie'
            className='object-cover w-full h-full rounded-xl'
          />
        </div>

        <div className='flex flex-col card-body lg:w-3/5'>
          <h2 className='card-title'>{strMeal}</h2>
          <div className='h-24 overflow-hidden text-ellipsis'>
          <p  className='break-words break-all'>{strInstructions}</p>
          </div>
          <div className=' card-actions'>
            <button
              onClick={() => navigate(`details/${idMeal}`)}
              className='font-bold text-yellow-500 underline '
            >
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meal
