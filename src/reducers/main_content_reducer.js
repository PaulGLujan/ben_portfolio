import types from "../actions/types";
import PictureShow from '../components/picture_show';
import ContactSection from '../components/contact_section';

const DEFAULT_STATE = {
  mainContent: ContactSection,
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}