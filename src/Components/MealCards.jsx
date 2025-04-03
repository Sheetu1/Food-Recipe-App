import React from 'react'
import { NavLink } from 'react-router-dom';

const MealCards = ({detail}) => {
  console.log(detail);

  const detailHandler = () => {

  }
  
  return (
    <div className='meals'>
      {!detail ? "" : detail.map((item) => {
        return(
          <div className='mealimg'>
        <img src={item.strMealThumb}/>
        <p>{item.strMeal}</p>
        <NavLink to={`/${item.idMeal}`}>
        <button onClick={detailHandler}>Recipe</button>
        </NavLink>
      </div>
        )
      })
      
      }

    </div>
  )
}

export default MealCards