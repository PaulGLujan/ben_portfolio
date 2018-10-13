import types from "../actions/types";
import landscapes from "../assets/images/landscapes/landscapes";

const DEFAULT_STATE = {
  gallery: landscapes,
}

export default (state=DEFAULT_STATE, action)=>{
  switch(action.type){
    case types.UPDATE_GALLERY:
      return {...state, gallery: action.payload}
    default:
      return state;
  }
}