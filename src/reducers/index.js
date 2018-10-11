import {combineReducers} from 'redux';
import picPosReducer from './pic_pos_reducer';

export default combineReducers({
  picturePosition: picPosReducer,
})