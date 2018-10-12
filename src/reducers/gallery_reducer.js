import types from "../actions/types";
import portraits from "../assets/images/portraits/portraits";

const DEFAULT_STATE = {
  gallery: portraits,
}

export default (state=DEFAULT_STATE, action)=>{
  switch(action.type){
    case types.UPDATE_GALLERY:
      return {...state, gallery: action.payload}
    default:
      return state;
  }
}