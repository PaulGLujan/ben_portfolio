import types from "../actions/types";
import PictureShow from '../components/picture_show';

const DEFAULT_STATE = {
  mainContent: PictureShow,
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}