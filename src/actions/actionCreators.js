import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  RESET_SERVICE_FIELDS,
  CHANGE_SEARCH_FIELD,
} from './actionTypes';

export function addService(id, title, price) {
  return { type: ADD_SERVICE, payload: { id, title, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: id };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function resetServiceFields() {
  return { type: RESET_SERVICE_FIELDS };
}

export function editService(id, title, price) {
  return {
    type: EDIT_SERVICE,
    payload: {
      id, title, price,
    },
  };
}

export function changeSearchField(value) {
  return { type: CHANGE_SEARCH_FIELD, payload: { value } };
}
