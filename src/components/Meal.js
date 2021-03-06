import React, { useContext } from 'react'
import StateContext from "../stateContext"
import {
    LOAD_EDIT_MEAL,
    DELETE_MEAL_BY_ID,
    SHOW_FORM
} from "../stateActionTypes"

// utils
import {dispatchStateFunc, toggleStateByDispatchFunc} from "../utils/Functions"

const Meal = ({id, description, calories}) => {
     /**************** State  ****************/
    const {state, dispatch} = useContext(StateContext)
    const {showForm} = state
    
     /**************** Handlers  ****************/
     // Load and dispatch clicked meal to currentMeal array in stateContext
    const loadEditMealHandler = (id) =>{
      const currentMeal = state.meals.filter(meal => meal.id === id)
      dispatchStateFunc(dispatch, currentMeal, LOAD_EDIT_MEAL)
      if(!showForm) toggleStateByDispatchFunc (dispatch, showForm, SHOW_FORM) 
    }
    const deleteMealById= (id) =>{
      dispatchStateFunc(dispatch, id, DELETE_MEAL_BY_ID)
    }

    return (
        <div>
            <div className="meal-item">
                <li className="meal-item-item, description">{description}</li>
                <li className="meal-item-item, calories">{calories}</li>
                <button onClick={(e) => loadEditMealHandler(id)} type="submit">+</button>
                <button onClick={(e) => deleteMealById(id)} type="submit">-</button>
            </div>
           
        </div>
    )
}

export default Meal
