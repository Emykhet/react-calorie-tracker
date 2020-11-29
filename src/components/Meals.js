import React, { useContext } from 'react'
import StateContext from "../stateContext"

// Components
import Meal from "./Meal"

const Meals = () => {
    const {state, dispatch} = useContext(StateContext)
    const {meals} = state
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
        </div>
    )
}

export default Meals
