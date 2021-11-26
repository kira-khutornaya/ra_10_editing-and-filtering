import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, resetServiceFields, editService } from '../actions/actionCreators';

function ServiceList() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.serviceList);
  const isEdit = useSelector((store) => store.serviceAdd.isEdit);
  const filter = useSelector((store) => store.serviceSearch);
  const filteredItems = filter ? items.filter(
    ({ title }) => (title.toLowerCase().includes(filter.toLowerCase())),
  ) : items;

  const handleRemove = (id) => {
    if (!isEdit) {
      dispatch(removeService(id));
      dispatch(resetServiceFields());
    }
  };

  const handleEdit = (id, title, price) => {
    if (!isEdit) {
      dispatch(editService(id, title, price));
    }
  };

  return (
    <ul className="list-group mt-4">
      {filteredItems.map(({ id, title, price }) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={id}
        >
          {title}
          <div className="ms-auto me-5">{price}</div>

          <div className="d-grid gap-2 d-flex justify-content-end">
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={() => handleEdit(id, title, price)}
            >
              ✎
            </button>
            <button
              className="btn btn-danger btn-sm"
              type="button"
              onClick={() => handleRemove(id)}
            >
              ✘
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
