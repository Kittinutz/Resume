


import {FETCH_USER} from "../actions/index";

export default (state=[], action)=>{
  switch (action.type){
    case
      FETCH_USER:
      return state,action.payload
    default:
      return state
    
  }
  return state
}