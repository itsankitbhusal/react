import React from "react";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={search}
        placeholder="Enter any text to search!!"
        onChange={(e) => {
          console.log(e.target.value);
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
