import React, { useEffect, useContext, useState } from "react";

import CardList from "./components/card-list/Card-list.jsx";
import Quote from "./components/Quote/Quote";
import QuoteContext from "./store/quote-context.js";

import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  const quoteCtx = useContext(QuoteContext);
  // const [searchField, setSearchField] = useState();

  useEffect(() => {
    return fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  // const handleChange = (e) => {
  //   setSearchField(e.target.value);
  // };

  // const filteredQuotes = quotes.filter((quote) =>
  //   quote.text.toLowerCase().includes(searchField.toLowerCase())
  // );

  return (
    <div className="App">
      <h1>Quotes</h1>
      {quoteCtx.logeIn && <Quote onHideQuote={quoteCtx.hideQuote} />}
      {/* <SearchBox
        type="search"
        placeholder="search quotes"
        onHandleChange={handleChange}
      /> */}
      <CardList quotes={quotes} onShowQuote={quoteCtx.showQuote} />
    </div>
  );
};

export default App;
