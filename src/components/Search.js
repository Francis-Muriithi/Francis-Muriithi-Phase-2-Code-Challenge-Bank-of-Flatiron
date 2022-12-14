import React from "react";

function Search(props) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text" value ={props.searchTerm}
        onChange={props.handleChange}
        placeholder="Search your Recent Transactions"
        // onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
