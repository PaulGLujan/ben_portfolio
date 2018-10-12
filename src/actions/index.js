import types from "./types";

export function updatePicPos(pos){
  return{
    type: types.UPDATE_POSITION,
    payload: pos
  }
}