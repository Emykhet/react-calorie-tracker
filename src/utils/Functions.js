import { v4 as uuidv4 } from "uuid";

export const toggleStateByDispatchFunc = (method, state, actionType, ) =>{
    if(state){
        method({payload: false, type: actionType})
      }else{
        method({payload: true, type: actionType})
      }
}
//_______________________________
export const dispatchStateFunc = (method, payload, actionType) =>{
    method({payload: payload, type: actionType})
}

//_______________________________
export const clearInputFunc = (input) =>{
    return input.current.value = ""
}
//_______________________________
export const generateItemWithIdFunc = (model) =>{
    const id= uuidv4()
    return {id, ...model }
}
//_______________________________

