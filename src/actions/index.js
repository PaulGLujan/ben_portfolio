import types from "./types";

export function updatePicPos(pos){
  return{
    type: types.UPDATE_POSITION,
    payload: parseInt(pos)
  }
}

export function changeGallery(gallery){
  return{  
    type: types.UPDATE_GALLERY,
    payload: gallery,
  }
}

export function updateMainSection(section, type){
  return{
    type: types.UPDATE_MAIN_SECTION,
    payload: {section, type}
  }
}