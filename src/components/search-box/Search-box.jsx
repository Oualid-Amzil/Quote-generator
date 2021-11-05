import React from "react";

import classes from "./Search-box.module.css";

const SearchBox = (props) => {
  return (
    <input
      className={classes.search}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onHandleChange}
    />
  );
};

export default SearchBox;
