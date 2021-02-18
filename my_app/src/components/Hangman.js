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
        //word: [..."Elephant"]
        word: "Elephant"
    };
    constructor(props) {
        super(props);
        this.generateButtons = this.generateButtons.bind(this);
        this.handleGuess = this.handleGuess.bind(this);

        this.state = {
            guessed: new Set(),
            answer: this.props.word,
            wrongGuesses: 0
        }
    };



    /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
    */
    handleGuess(evt) {
        // Find key pressed
        let letter = evt.target.value;
        this.setState(curState => ({
            guessed: curState.guessed.add(letter),
            wrongGuesses: curState.wrongGuesses + (curState.answer.includes(letter) ? 0 : 1)
        }));
        console.log(this.state);
    };

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ));
    };

    render() {
        return (
            <div className="Hangman">

                <img src={hangman0} />
                <p>{this.generateButtons()}</p>
            </div>
        );

    };
};

export default Hangman;

