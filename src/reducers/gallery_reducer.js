import types from "../actions/types";

const DEFAULT_STATE = {
  position: 0,
}

export default (state=DEFAULT_STATE, action)=>{
  switch(action.type){
    default:
      return state;
  }
}