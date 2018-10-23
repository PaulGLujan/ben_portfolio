import types from "../actions/types";
import landscapes from "../assets/images/landscapes/landscapes";

const DEFAULT_STATE = {
  gallery: landscapes,
  numOfPics: 10,
  galleryType: 'landscapes',
}

export default (state=DEFAULT_STATE, action)=>{
  switch(action.type){
    case types.UPDATE_GALLERY:
      const {gallery, type} = action.payload;
      return {...state, gallery: gallery, galleryType: type}
    default:
      return state;
  }
}