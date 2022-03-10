import React from "react";

const SearchForm = (props) => {
  const { onSubmit } = props;
  return (
    <form
      className="change-location text-center text-white my-4"
      onSubmit={onSubmit}
    >
      <label htmlFor="city">Enter a location for weather information</label>
      <input type="text" name="city" className="form-control p-4 my-2" />
    </form>
  );
};

export default SearchForm;
