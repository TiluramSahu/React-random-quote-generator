import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuote(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <div className="heading">
        <h1>React Random Quote Generator</h1>
      </div>
      <div className="quote">
        <h2>
          ❝{quote.text}
          <sub>❞</sub>
        </h2>
        <small>- {quote.author} -</small>
      </div>
      <br />
      <button class="button-7" role="button" onClick={getQuote}>
        Next Quote{" "}
      </button>
      <footer class="footer">
        <p class="footer-text">
          Made with ❤️ by <h2>Tiluram Sahu</h2>
        </p>
      </footer>
    </div>
  );
}

export default App;
