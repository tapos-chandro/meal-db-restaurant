import React from 'react'
import { useNavigate } from 'react-router'

const Meal = ({meal}) => {
    const {idMeal,strCategory, strMealThumb, strMeal} = meal
    const navigate = useNavigate()
  return (
    <div>
      <div className='shadow-xl card lg:card-side bg-base-100'>
        <img
          src={strMealThumb}
          alt='Movie'
          className='lg:w-2/5 md:w-2/5 rounded-2xl '
        />

        <div className='flex flex-col card-body'>
          <h2 className='card-title'>{strMeal}</h2>
          
          <div className=' card-actions'>
            <button onClick={() => navigate(`details/${idMeal}`)}>Show Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meal
