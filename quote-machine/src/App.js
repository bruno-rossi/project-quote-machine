import { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {

  const [ quote, setQuote ] = useState("");
  const [ random, setRandom ] = useState(Math.floor(Math.random() * 10) + 1)

  useEffect(() => {

    const colors = [
      "#FF0000",
      "#0000FF",
      "#00FF00",
      "#FFFF00",
      "#800080",
      "#00FFFF",
      "#FFA500",
      "#FFC0CB",
      "#A52A2A",
      "#008080",
    ]

    $("body").css({
      "color": colors[random],
      "background-color": colors[random]
    })
    $("#quote-box .buttons .button").css({
      "background-color": colors[random]
    })

    fetch(`http://localhost:3000/quotes/${random}`)
    .then(res => res.json())
    .then(quote => setQuote(quote))
  }, [random]);

  return (
    <div className="App">
      <QuoteBox quote={quote} setRandom={setRandom}></QuoteBox>
    </div>
  );
}

export default App;
