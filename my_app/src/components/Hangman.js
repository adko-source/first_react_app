import { Component } from 'react';
import '../css/Hangman.css';
import { randomWord } from '../words.js'
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
        word: randomWord()
        
    };
    constructor(props) {
        super(props);
        this.generateButtons = this.generateButtons.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
        this.guessedWord = this.guessedWord.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.restart = this.restart.bind(this);

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
        .map(letter => (this.state.guessed.has(letter) ? letter : "__  "));
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

    restart() {
        this.setState({
            guessed: new Set(),
            wrongGuesses: 0,
            answer: randomWord()
        })
    }

    handleClick() {
        this.restart();
    }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter) || this.state.wrongGuesses === this.props.maxWrong || !this.guessedWord().includes("__  ")  }>
                {letter}
            </button>
        ));
    };

    render() {
        let wrongGuesses = this.state.wrongGuesses;
        let gameOver = this.state.wrongGuesses >= this.props.maxWrong;
        return (
            <div className="Hangman">
                <p style={{fontWeight: "bold", fontSize: "40px"}}>Hangman Game</p>
                <p>Wrong guesses: {wrongGuesses}</p>
                <img alt={`Guess ${wrongGuesses} of ${this.props.maxWrong}`} src={this.props.images[wrongGuesses]} />
                <p style={{fontSize: "40px", color: "red"}}>{!this.guessedWord().includes("__  ") && "Winner! " + "😻"  }</p>
                <p >{!gameOver ? this.guessedWord() : wrongGuesses === 0 ? "" : `The answer was ${this.state.answer}`}</p>
                <p>{!gameOver ? this.generateButtons() : `Play again soon! 😎`}</p>
                <button id="restart" onClick={this.handleClick}>Restart</button>
            </div>
            
        );

    };
};

export default Hangman;

