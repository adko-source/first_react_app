import React, { Component } from 'react';
import '../css/CoinFlip.css';
import tails from '../images/twonie_tails.jpg';
import heads from '../images/twonie_heads.jpg';

class CoinFlip extends Component {
    static defaultProps = {
        maxFlips: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            currentSide: heads,
            headsCount: 0,
            tailsCount: 0,
            currentFlips: 0,
        };
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        let sides = [heads, tails];
        let flip = sides[Math.floor(Math.random() * sides.length)];
        console.log(flip);
        if (flip == tails) {
            this.setState(curState => ({ tailsCount: curState.tailsCount + 1 }));
            this.setState({ currentSide: tails });
        }
        else {
            this.setState(curState => ({ headsCount: curState.headsCount + 1 }));
            this.setState({ currentSide: heads });
        };
        this.setState(curState => ({ currentFlips: curState.currentFlips + 1 }));

    };

    render() {
        let currentFlips = this.state.currentFlips;
        return (
            <div className="CoinFlip">
                <img src={this.state.currentSide}></img>
                <p><button onClick={this.flipCoin}>Flip Coin</button></p>
                {currentFlips >= 1 && <p>Out of <b>{currentFlips}</b> {currentFlips === 1 ? "flip" : "flips"} there have been <b>{this.state.headsCount}</b> heads and <b>{this.state.tailsCount}</b> tails</p>}
            </div>
        );
    }
};

export default CoinFlip;