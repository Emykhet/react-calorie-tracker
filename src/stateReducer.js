import {
    CREATE_MEALS,
    UPDATE_MEAL_BY_ID,
    DELETE_MEAL_BY_ID,
    DELETE_CURRENT_MEAL,
    SHOW_FORM,
    LOAD_EDIT_MEAL,
} from "./stateActionTypes"

import {generateItemWithIdFunc, updateItemByIdFunc, deleteItemByIdFunc} from "./utils/Functions"

const stateReducer = (state, action) =>{
    switch(action.type){
        case CREATE_MEALS: 
            const mealWithId = generateItemWithIdFunc(action.payload)
            return {...state, meals: [...state.meals,  mealWithId]}
        case UPDATE_MEAL_BY_ID:
            const updatedMeals= updateItemByIdFunc(action.payload, [...state.meals])
            return {...state, meals: updatedMeals}
        case DELETE_MEAL_BY_ID:
            const undeletedMeals= deleteItemByIdFunc(action.payload, [...state.meals])
            return {...state, meals: undeletedMeals}
        case DELETE_CURRENT_MEAL:
            return {...state, currentMeal: action.payload}
        case SHOW_FORM:
            return {...state, showForm: action.payload}
        case LOAD_EDIT_MEAL:
            return {...state, currentMeal: action.payload}
        default:
            return state
    }
}

export default stateReducer