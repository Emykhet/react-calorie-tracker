import {
    CREATE_MEALS,
    UPDATE_MEAL_BY_ID,
    SHOW_FORM,
    LOAD_EDIT_MEAL,
} from "./stateActionTypes"

import {generateItemWithIdFunc} from "./utils/Functions"

const stateReducer = (state, action) =>{
    switch(action.type){
        case CREATE_MEALS: 
        const mealWithId = generateItemWithIdFunc(action.payload)
            return {...state, meals: [...state.meals,  mealWithId]}
        case UPDATE_MEAL_BY_ID:
            const array = [...state.meals]
            const updatedMeal = action.payload
            const updatedMeals = array.map(arrayItem => {
                if(arrayItem.id === updatedMeal.id) {
                    return updatedMeal
                }
                return arrayItem
            }) 
            return {...state, meals: updatedMeals}
        case SHOW_FORM:
            return {...state, showForm: action.payload}
        case LOAD_EDIT_MEAL:
            return {...state, currentMeal: action.payload}
        default:
            return state
    }
}

export default stateReducer