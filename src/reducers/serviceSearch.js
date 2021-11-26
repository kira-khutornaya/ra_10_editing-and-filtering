import { CHANGE_SEARCH_FIELD } from '../actions/actionTypes';

const initialState = '';

export default function serviceSearchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD: {
      const { value } = action.payload;
      return value;
    }
    default:
      return state;
  }
}
