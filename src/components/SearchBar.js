import React, {useState} from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  }

  return (
    <div className="search-bar mb-3">
      <form onSubmit={onSubmit}>
        <div className="col-md-6">
          <label className="form-label">Video Search</label>
          <input className="form-control"
                 type="text"
                 value={term}
                 onChange={ (event) => {
                   setTerm(event.target.value)
                 } }
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;