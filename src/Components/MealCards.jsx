import React from 'react'
import { NavLink } from 'react-router-dom';

const MealCards = ({detail}) => {
  console.log(detail);

  const detailHandler = () => {

  }
  
  return (
    <div className='meals flex gap-4 flex-wrap'>
      {!detail ? "" : detail.map((item) => {
        return(
          <div className='mealimg'>
        <img src={item.strMealThumb}/>
        <p>{item.strMeal}</p>
        <NavLink to={`/${item.idMeal}`}>
        <button onClick={detailHandler} className='px-3 py-2 bg-blue-400 rounded-md '>Recipe</button>
        </NavLink>
      </div>
        )
      })
      
      }

    </div>
  )
}

export default MealCards