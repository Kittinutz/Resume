import {FECTH_GITHUB} from "../actions/index";

export default (state=[],action)=>{
    switch (action.type){
        case
            FECTH_GITHUB:
            return action.payload
        default:
            return state
    }
    return state
}
