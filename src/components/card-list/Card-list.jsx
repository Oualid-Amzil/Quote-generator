import React from "react";

import Card from "../card/Card.jsx";

import classes from "./Card-list.module.css";

const CardList = (props) => {
  return (
    <div className={classes["card-list"]}>
      {" "}
      {props.quotes.map((quote) => {
        return (
          <Card
            quote={quote}
            onClick={props.onShowQuote}
            key={props.quotes.indexOf(quote)}
          />
        );
      })}
    </div>
  );
};

export default CardList;
