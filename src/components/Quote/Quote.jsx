import React, { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Quote.module.css";
import QuoteContext from "../../store/quote-context";

const Quote = (props) => {
  const quoteCtx = useContext(QuoteContext);

  return (
    <Modal onClick={props.onHideQuote}>
      <blockquote className={classes.blockquote}>
        {quoteCtx.quote.text}
      </blockquote>
      <cite className={classes.cite}>
        {!quoteCtx.quote.author ? "anonymous" : quoteCtx.quote.author}
      </cite>
    </Modal>
  );
};

export default Quote;
