import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';

export default function ServiceSearch() {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.serviceSearch);

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="col-12 col-sm-5 mb-3 me-lg-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search"
          name="search"
          onChange={handleChange}
          value={filter}
        />
        <span className="input-group-text" id="search">🔍</span>
      </div>
    </form>
  );
}
