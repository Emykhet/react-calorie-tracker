import React, { createContext } from "react"
import meals from "./mealsDatabase"

const StateContext = createContext({
    meals: meals,
    showForm: false, 
    currentMeal: [],
    totalCalories: 0,
})

export default StateContext