import { CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELDS, EDIT_SERVICE } from '../actions/actionTypes';

const initialState = {
  id: '',
  title: '',
  price: '',
  isEdit: false,
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }
    case RESET_SERVICE_FIELDS:
      return initialState;
    case EDIT_SERVICE:
      return { ...action.payload, isEdit: true };
    default:
      return state;
  }
}
