import FA from 'react-fontawesome';

function ButtonsBar({ setRandom }) {

    function handleClick() {
        setRandom(() => Math.floor(Math.random() * 10) + 1)
    }

    return (
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            href={`https://twitter.com/intent/post?`}
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            class="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            href="https://twitter.com/intent/post"
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button className="button" id="new-quote" onClick={handleClick}>New quote</button>
        </div>
    )
}

export default ButtonsBar;