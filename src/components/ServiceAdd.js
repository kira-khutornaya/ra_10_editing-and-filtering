import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, resetServiceFields, addService } from '../actions/actionCreators';

function ServiceAdd() {
  const dispatch = useDispatch();
  const {
    id, title, price, isEdit,
  } = useSelector((store) => store.serviceAdd);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!title.trim() || !Number(price)) return;

    dispatch(addService(id, title, price));
    dispatch(resetServiceFields());
  };

  const handleReset = () => {
    dispatch(resetServiceFields());
  };

  return (
    <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
      <div className="col-sm-8">
        <input
          className="form-control"
          placeholder="Наименование"
          aria-label="Title"
          name="title"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className="col-lg-2 col-sm-4">
        <input
          className="form-control"
          placeholder="Цена"
          aria-label="Price"
          name="price"
          onChange={handleChange}
          value={price}
        />
      </div>
      <div className="col-lg-2 col-sm-4 gap-2 d-flex">
        { isEdit && <button className="btn-primary btn" type="button" onClick={handleReset}>Cancel</button> }
        <button className="btn-primary btn" type="submit">Save</button>
      </div>
    </form>
  );
}

export default ServiceAdd;
