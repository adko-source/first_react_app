import { Component } from 'react';
import { getRandomItem } from '../helpers.js';
import '../css/Hangman.css';
import hangman0 from '../images/0.jpg';
import hangman1 from '../images/1.jpg';
import hangman2 from '../images/2.jpg';
import hangman3 from '../images/3.jpg';
import hangman4 from '../images/4.jpg';
import hangman5 from '../images/5.jpg';
import hangman6 from '../images/6.jpg';


class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        images: [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6],
        word: "apples"
        
    };
    constructor(props) {
        super(props);
        this.generateButtons = this.generateButtons.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
        this.guessedWord = this.guessedWord.bind(this);

        this.state = {
            guessed: new Set(),
            answer: this.props.word,
            wrongGuesses: 0,
        }
    };

    // Any function that returns a value can be used in jsx
    guessedWord() {
        return this.state.answer
        .split("")
        .map(letter => (this.state.guessed.has(letter) ? letter : "__"));
    }

    

    /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
    */
    handleGuess(evt) {
        let letter = evt.target.value;
        this.setState(curState => ({ 
            guessed: curState.guessed.add(letter),
            wrongGuesses: curState.wrongGuesses + (this.state.answer.includes(letter) ? 0 : 1),

        }))
        this.guessedWord()
        console.log(this.guessedWord())
    };

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter) || this.state.wrongGuesses === 6 || !this.guessedWord().includes("__")  }>
                {letter}
            </button>
        ));
    };

    render() {
        let wrongGuesses = this.state.wrongGuesses;
        return (
            <div className="Hangman">
                <p>Wrong guesses: {wrongGuesses}</p>
                <img src={
                    wrongGuesses === 0 ? hangman0 : wrongGuesses === 1 
                    ? hangman1 : wrongGuesses === 2 
                    ? hangman2 : wrongGuesses === 3 
                    ? hangman3 : wrongGuesses === 4 
                    ? hangman4 : wrongGuesses === 5
                    ? hangman6 : hangman6
                    } />
                <p style={{fontSize: "40px", color: "red"}}>{!this.guessedWord().includes("__") && "Winner! " + "😻"  }</p>
                <p className="Hangman-word">{wrongGuesses < 6 ? this.guessedWord() : "Nice try. Play again soon :)"}</p>

                <p>{this.generateButtons()}</p>
            </div>
        );

    };
};

export default Hangman;

