import {combineReducers} from 'redux';
import picPosReducer from './pic_pos_reducer';
import galleryReducer from './gallery_reducer';
import mainContentReducer from './main_content_reducer';

export default combineReducers({
  picturePosition: picPosReducer,
  gallery: galleryReducer,
  mainContent: mainContentReducer,
})