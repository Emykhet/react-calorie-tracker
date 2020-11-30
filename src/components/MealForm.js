import React, { useContext, useState, useRef, useEffect } from 'react'
import { 
    CREATE_MEALS, 
    UPDATE_MEAL_BY_ID,
    DELETE_CURRENT_MEAL,
 } from '../stateActionTypes';
import StateContext from "../stateContext"
// Utils
import {dispatchStateFunc, clearInputFunc} from "../utils/Functions"

const MealForm = () => {
       /**************** State  ****************/
    const {state, dispatch} = useContext(StateContext)
    const {currentMeal} = state
    const [userMeal, setUserMeal] = useState({})

    // Input Refs
    const inputDescRef = useRef()
    const inputCalRef = useRef()

 

    /**************** Side Effects  ****************/
    // Load clicked meal to edit form
    useEffect(()=>{
        if(currentMeal.length === 1 ){
            setUserMeal({...userMeal, description: currentMeal[0].description, calories: Number(currentMeal[0].calories), id: currentMeal[0].id}) }
    }, [currentMeal])

    /**************** Handlers  ****************/
    //  Get User Input and set meals to userMeal Object
    const getUserInputHandler =(e)=>{
        if(e.target.name === "desc") setUserMeal({...userMeal, description: e.target.value})
        if(e.target.name==="cal") setUserMeal({...userMeal, calories: Number(e.target.value)})
    }
    //  Dispatch userMeal Inputs to Reducer
    const submitHandler =(e)=>{
     
        e.preventDefault()
        dispatchStateFunc(dispatch, [], DELETE_CURRENT_MEAL)
        if(e.target.id === "add-meal"){
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
        if(e.target.id === "cancel"){
            dispatchStateFunc(dispatch, [], DELETE_CURRENT_MEAL)
             //  clear Input Fields and User Meal Object
            clearInputFunc(inputDescRef)
            clearInputFunc(inputCalRef)
            setUserMeal({})
        }
            
  
    }

    return (
        <div>
             <h3>Meal Form</h3>
             <form onSubmit={submitHandler}>
                <input 
                name="desc"
                ref={inputDescRef} 
                onChange={(e) =>{getUserInputHandler(e)}}
                value={userMeal.description || ""} 
                type="text"/>
                <input 
                name="cal"
                value={userMeal.calories || ""} 
                ref={inputCalRef} 
                onChange={(e) =>{getUserInputHandler(e)}}
                type="number"/>
                <button onClick={submitHandler} type="submit" id="add-meal">Add Meal</button>
                <button onClick={submitHandler} type="submit" id="cancel">Cancel</button>
             </form>
        </div>
    )
}

export default MealForm
