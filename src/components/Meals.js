import React, { useContext } from 'react'
import StateContext from "../stateContext"

// Components
import Meal from "./Meal"

const Meals = () => {
    const {state, dispatch} = useContext(StateContext)
    const {meals} = state
    let totalArray, total

    if(meals.length > 0) totalArray = meals.map(el => el.calories)
    const addFunc = (a, b) => a + b
    if(meals.length > 0) total = totalArray.reduce(addFunc)
    return (
        <div>
             {meals.map(meal=>(
                 <Meal 
                 meal={meal}
                 key={meal.id}
                 id={meal.id}
                 description={meal.description}
                 calories={meal.calories}
                 />
             ))}
             <div className="meal-item">
                <li className="meal-item-item">Total Calories</li>
                <li className="meal-item-item">{total}</li>
             </div>
        </div>
    )
}

export default Meals
