import types from "../actions/types";

const DEFAULT_STATE = {
  position: 0,
}

export default (state=DEFAULT_STATE, action)=>{
  switch(action.type){
    case types.UPDATE_POSITION:
      return {...state, position: action.payload}
    default:
      return state;
  }
}