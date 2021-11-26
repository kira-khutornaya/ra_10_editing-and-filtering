import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = [
  {
    id: nanoid(), title: 'Замена стекла', price: 21000, isEdit: false,
  },
  {
    id: nanoid(), title: 'Замена дисплея', price: 25000, isEdit: false,
  },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { id, title, price } = action.payload;
      if (id) {
        return state.map((service) => (
          service.id === id ? {
            ...service, id, title, price: Number(price),
          } : service
        ));
      }

      return [...state, {
        id: nanoid(), title, price: Number(price),
      }];
    }
    case REMOVE_SERVICE: {
      const id = action.payload;
      return state.filter((service) => service.id !== id);
    }

    default:
      return state;
  }
}
