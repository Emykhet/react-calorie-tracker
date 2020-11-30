import React, { createContext } from "react"

const StateContext = createContext({
    meals: [],
    showForm: false, 
    currentMeal: [],
    totalCalories: 0,
})

export default StateContext