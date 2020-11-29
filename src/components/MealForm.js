import React, { useContext, useState, useRef, useEffect } from 'react'
import { CREATE_MEALS, UPDATE_MEAL_BY_ID } from '../stateActionTypes';
import StateContext from "../stateContext"
// Utils
import {dispatchStateFunc, clearInputFunc} from "../utils/Functions"

const MealForm = () => {
       /**************** State  ****************/
    const {state, dispatch} = useContext(StateContext)
    const {meals, currentMeal} = state
    const [userMeal, setUserMeal] = useState({})
    console.log("State_Form.js", state)

    // Input Refs
    const inputDescRef = useRef()
    const inputCalRef = useRef()

    /**************** Side Effects  ****************/
    // Load clicked meal to edit form
    useEffect(()=>{
        if(currentMeal.length === 1 ){
            inputDescRef.current.value = currentMeal[0].description
            inputCalRef.current.value = currentMeal[0].calories
            setUserMeal({...userMeal, id: currentMeal[0].id})
        }
    }, [currentMeal])

    /**************** Handlers  ****************/
    //  Get User Input and set meals to userMeal Object
    const getUserInputHandler =(type)=>{
        if(type==="desc") setUserMeal({...userMeal, description: inputDescRef.current.value})
        if(type==="cal") setUserMeal({...userMeal, calories:inputCalRef.current.value})
    }
    //  Dispatch userMeal Inputs to Reducer
    const submitHandler =(e)=>{
        e.preventDefault()
            if(userMeal.description && userMeal.calories && !userMeal.id){
                dispatchStateFunc(dispatch, userMeal, CREATE_MEALS)
                //  clear Input Fields and User Meal Object
                clearInputFunc(inputDescRef)
                clearInputFunc(inputCalRef)
                setUserMeal({})
            } else if(userMeal.description && userMeal.calories && userMeal.id){
                dispatchStateFunc(dispatch, userMeal, UPDATE_MEAL_BY_ID)
                //  clear Input Fields and User Meal Object
                clearInputFunc(inputDescRef)
                clearInputFunc(inputCalRef)
                setUserMeal({})
            }
            
  
    }

console.log(userMeal)

    return (
        <div>
             <h3>Meal Form</h3>
             <form onSubmit={submitHandler}>
                <input ref={inputDescRef} onChange={() =>{getUserInputHandler("desc")}} type="text" name="" id=""/>
                <input ref={inputCalRef} onChange={() =>{getUserInputHandler("cal")}} type="number" name="" id=""/>
                <button type="submit" id="add-meal">Add Meal</button>
                <button type="submit" id="cancel">Cancel</button>
             </form>
        </div>
    )
}

export default MealForm
