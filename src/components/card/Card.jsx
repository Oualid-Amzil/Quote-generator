import React, { useContext } from "react";
import QuoteContext from "../../store/quote-context";

import classes from "./Card.module.css";

const Card = (props) => {
  const quoteCtx = useContext(QuoteContext);

  return (
    <div className={classes["card-container"]}>
      <div className={classes.quote}>
        <h4>{props.quote.text}</h4>
        <h5>{!props.quote.author ? "anonymous" : props.quote.author}</h5>
      </div>
      <button
        className={classes.button}
        onClick={quoteCtx.addQuote.bind(null, props.quote)}
      >
        display
      </button>
    </div>
  );
};

export default Card;
