import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState(" ");
  //   http://api.quotable.io/random
 

  useEffect(()=>{
      fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);
          setAuthor(quote.author);
        }
      )
  },[]);


  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      }
    )
  }


  return (
   <div className='App'>
   <div className="heading"><h1>React Random Quote Generator</h1></div>
    <div className="quote">
      <h2>❝{quote}<sub>❞</sub></h2>
      <small>- {author} -</small>
    </div>
    <br/>
    <button class="button-7" role="button" onClick={fetchNewQuote}>Next Quote </button>
    <footer class="footer">
  <p class="footer-text">Made with ❤️ by <h2>Tiluram Sahu</h2></p>
</footer>
   </div>
  );
}

export default App;
