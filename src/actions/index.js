import types from "./types";

export function updatePicPos(pos){
  console.log('updatePicPos', pos)
  return{
    type: 'UPDATE_POSITION',
    payload: pos
  }
}