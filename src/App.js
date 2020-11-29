import React, { useContext, useReducer, useState } from "react"
import StateContext from "./stateContext"
import stateReducer from "./stateReducer"
import {SHOW_FORM} from "./stateActionTypes"

// Utils
import {toggleStateByDispatchFunc} from "./utils/Functions"

// Components
import Meals from "./components/Meals"
import MealForm from "./components/MealForm"
// Styles
import "./App.css"

function App() {
  /**************** State  ****************/
  const initialState = useContext(StateContext)
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const {showForm} = state

  /**************** Handlers ****************/
  //  show form on click. Dispatch controlled state
  const showFormHandler =()=>{
    toggleStateByDispatchFunc(dispatch, showForm, SHOW_FORM) 
  }

  return (
    <div className="App">
      <StateContext.Provider value={{state, dispatch}}>
        <h4>Calorie Tracker App</h4>
        <div className="row form">
        <button onClick={showFormHandler}>+</button>
        {showForm && <MealForm/>}
        </div>
        <Meals/>
      </StateContext.Provider>
    </div>
  );
}

export default App;
