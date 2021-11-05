import { useState } from "react";

import QuoteContext from "./quote-context";

const QuoteProvider = (props) => {
  const [logeIn, setLogeIn] = useState(false);
  const [quote, setQuote] = useState();

  const addQuoteHandler = (quote) => {
    setQuote(quote);
    setLogeIn(true);
  };

  const showQuteHandler = () => {
    setLogeIn(true);
  };

  const hideQuoteHandler = () => {
    setLogeIn(false);
  };

  const defaultState = {
    quote: quote,
    logeIn: logeIn,
    showQuote: showQuteHandler,
    hideQuote: hideQuoteHandler,
    addQuote: addQuoteHandler,
  };

  return (
    <QuoteContext.Provider value={defaultState}>
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
