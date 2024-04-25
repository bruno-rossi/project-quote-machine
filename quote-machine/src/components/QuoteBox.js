import ButtonsBar from './ButtonsBar';

function QuoteBox({ quote, setRandom }) {

    return (
        <div id="quote-box">
            <div className="quote-text">
                <i class="fa fa-quote-left"> </i><span id="text">{quote.text}</span>
            </div>
            <div class="quote-author">- <span id="author">{quote.author}</span></div>
            <ButtonsBar setRandom={setRandom} />
        </div>
    )
}

export default QuoteBox;