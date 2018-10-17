import types from "../actions/types";
import PictureShow from '../components/picture_show';
import ContactSection from '../components/contact_section';

const DEFAULT_STATE = {
  mainContent: ContactSection,
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_MAIN_SECTION:
      return { ...state, mainContent: action.payload }
    default:
      return state;
  }
}